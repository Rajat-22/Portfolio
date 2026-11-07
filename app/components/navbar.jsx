"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/utils/data/personal-data";
import { ResumeButton } from "./ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-editorial ${scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-[4.25rem] items-center justify-between gap-6"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-baseline gap-2.5"
          aria-label="Rajat Sharma — home"
        >
          <span className="display-tight text-[1.0625rem] tracking-[-0.02em] text-ink">
            Rajat Sharma
          </span>
          <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-3 sm:inline">
            / Engineer
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item, i) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative flex items-baseline gap-1.5 rounded-full px-3.5 py-2 text-[0.8125rem] transition-colors duration-300 ${isActive ? "text-ink" : "text-ink-2 hover:text-ink"
                    }`}
                >
                  <span className="font-mono text-[0.5625rem] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 bottom-0.5 h-[2px] origin-left rounded-full bg-amber transition-transform duration-300 ease-editorial ${isActive ? "scale-x-100" : "scale-x-0"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-3 text-ink transition-colors duration-300 hover:border-amber hover:text-amber lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 rounded bg-current transition-all duration-300 ease-editorial ${open ? "top-1.5 rotate-45" : "top-0"
                  }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[1.5px] w-4 rounded bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 rounded bg-current transition-all duration-300 ease-editorial ${open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="shell lg:hidden">
        <div className="flex flex-col border-t border-line pb-8 pt-2">
          {navigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between gap-4 border-b border-line/70 py-4"
            >
              <span className="display-tight text-[1.5rem] text-ink">
                {item.label}
              </span>
              <span className="font-mono text-[0.6875rem] text-ink-3">
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
