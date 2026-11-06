import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { ExternalArrow } from "../../ui/button";
import { AvailabilityDot } from "../../ui/section-heading";
import ContactForm from "./contact-form";

const SOCIALS = [
  { label: "GitHub", href: personalData.github },
  { label: "LinkedIn", href: personalData.linkedIn },
  { label: "X / Twitter", href: personalData.twitter },
];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-paper-2 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-5">
            <span className="index-mark">07 — Contact</span>

            <h2 className="display mt-5 text-[2.25rem] text-ink sm:text-[3rem] lg:text-[3.25rem]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-blue">good.</span>
            </h2>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-2">
              Open to senior engineering roles and interesting product work.
              Email is fastest — the form works too.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-line-2 bg-paper-3 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-2">
              <AvailabilityDot />
              Available for senior roles
            </div>

            <div className="mt-8 space-y-px overflow-hidden rounded-[10px] border border-line-2 bg-line-2">
              <a
                href={`mailto:${personalData.email}`}
                className="group flex items-center justify-between gap-4 bg-paper-3 px-5 py-4 transition-colors duration-300 hover:bg-white"
              >
                <span className="min-w-0">
                  <span className="label block">Email</span>
                  <span className="mt-1 block truncate text-[0.875rem] text-ink">
                    {personalData.email}
                  </span>
                </span>
                <ExternalArrow className="shrink-0 text-ink-3 group-hover:text-blue" />
              </a>

              <a
                href={`tel:${personalData.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-center justify-between gap-4 bg-paper-3 px-5 py-4 transition-colors duration-300 hover:bg-white"
              >
                <span>
                  <span className="label block">Phone</span>
                  <span className="mt-1 block text-[0.875rem] text-ink">
                    {personalData.phone}
                  </span>
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
                  {personalData.timezone}
                </span>
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.8125rem] text-ink-2 transition-colors duration-300 hover:text-ink"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-7" style={{ "--reveal-delay": "100ms" }}>
            <div className="rounded-[10px] border border-line-2 bg-paper-3 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
