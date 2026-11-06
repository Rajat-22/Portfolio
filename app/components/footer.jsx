import Link from "next/link";
import { navigation, personalData } from "@/utils/data/personal-data";

const SOCIALS = [
  { label: "GitHub", href: personalData.github },
  { label: "LinkedIn", href: personalData.linkedIn },
  { label: "Email", href: `mailto:${personalData.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="shell py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-accent text-[0.7rem] font-semibold text-black">
                {personalData.initials}
              </span>
              <span className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-ink">
                {personalData.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[0.8125rem] leading-relaxed text-dim">
              Good software is a series of small, careful decisions. Thanks for
              taking the time to look through mine.
            </p>
          </div>

          <nav aria-label="Footer" className="sm:col-span-3">
            <p className="meta mb-4">Sections</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-3">
            <p className="meta mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-dim">
            © {year} {personalData.name}. All rights reserved.
          </p>
          <p className="meta">
            Designed &amp; built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
