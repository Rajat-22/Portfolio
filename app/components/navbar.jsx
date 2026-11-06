"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, personalData } from "@/utils/data/personal-data";
import { ResumeButton } from "./ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-editorial ${scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Rajat Sharma — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-accent text-[0.7rem] font-semibold tracking-tight text-black">
            {personalData.initials}
          </span>
          <span className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 group-hover:text-accent">
            Rajat Sharma
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-[0.8125rem] transition-colors duration-300 lg:px-4 ${isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-editorial lg:inset-x-4 ${isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ResumeButton className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-editorial ${open ? "top-1.5 rotate-45" : "top-0"
                  }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-editorial ${open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="shell md:hidden"
      >
        <div className="flex flex-col gap-1 border-t border-line pb-8 pt-4">
          {navigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between gap-4 border-b border-line/60 py-3.5"
            >
              <span className="text-xl font-light tracking-tight text-ink">
                {item.label}
              </span>
              <span className="meta">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <ResumeButton className="mt-6 w-full sm:hidden" />
        </div>
      </div>
    </header>
  );
}
