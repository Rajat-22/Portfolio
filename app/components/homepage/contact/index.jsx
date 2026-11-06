import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { ExternalArrow } from "../../ui/button";
import { Section, SectionHeading, AvailabilityDot } from "../../ui/section-heading";
import ContactForm from "./contact-form";

const SOCIALS = [
  { label: "GitHub", href: personalData.github },
  { label: "LinkedIn", href: personalData.linkedIn },
  { label: "X / Twitter", href: personalData.twitter },
  { label: "WhatsApp", href: personalData.whatsAppUrl },
];

export default function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-heading" className="border-t border-line">
      <SectionHeading index="07" id="contact-heading" title="Get in touch" />

      <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <h3 className="text-2xl font-light leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
            Have a role, a project,
            <br />
            or a problem worth solving?
          </h3>
          <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">
            I&apos;m always open to conversations about senior engineering roles
            and interesting product work. The fastest way to reach me is email —
            the form works too.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1.5 text-[0.6875rem] text-muted">
            <AvailabilityDot />
            Available for senior software engineering roles
          </div>

          <div className="mt-10 space-y-px overflow-hidden rounded-[var(--radius)] border border-line bg-line">
            <a
              href={`mailto:${personalData.email}`}
              className="group flex items-center justify-between gap-4 bg-bg px-5 py-4 transition-colors duration-300 hover:bg-elevated"
            >
              <span className="min-w-0">
                <span className="meta block">Email</span>
                <span className="mt-1 block truncate text-sm text-ink">
                  {personalData.email}
                </span>
              </span>
              <ExternalArrow className="shrink-0 text-muted group-hover:text-accent" />
            </a>

            <a
              href={`tel:${personalData.phone.replace(/[^\d+]/g, "")}`}
              className="group flex items-center justify-between gap-4 bg-bg px-5 py-4 transition-colors duration-300 hover:bg-elevated"
            >
              <span>
                <span className="meta block">Phone</span>
                <span className="mt-1 block text-sm text-ink">
                  {personalData.phone}
                </span>
              </span>
              <span className="meta shrink-0">{personalData.timezone}</span>
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-7" style={{ "--reveal-delay": "100ms" }}>
          <div className="card-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
