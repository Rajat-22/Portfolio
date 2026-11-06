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
    <footer className="border-t border-line bg-paper">
      <div className="shell py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <Link href="/" className="inline-block">
              <span className="display-tight text-[1.25rem] text-ink">
                Rajat Sharma
              </span>
            </Link>
            <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-3">
              {personalData.designation}
            </p>
            <p className="mt-4 max-w-xs text-[0.8125rem] leading-relaxed text-ink-2">
              Good software is a series of small, careful decisions. Thanks for
              taking the time to look through mine.
            </p>
          </div>

          <nav aria-label="Footer" className="sm:col-span-3">
            <p className="label mb-4">Sections</p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.8125rem] text-ink-2 transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-3">
            <p className="label mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    {...(s.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-[0.8125rem] text-ink-2 transition-colors duration-300 hover:text-ink"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-3">
            © {year} {personalData.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
            Designed &amp; built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
