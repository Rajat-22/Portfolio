import { personalData } from "@/utils/data/personal-data";
import { Button, ArrowIcon, ExternalArrow } from "../../ui/button";
import { AvailabilityDot } from "../../ui/section-heading";

const FACTS = [
  { label: "Currently", value: "Senior Software Engineer" },
  { label: "At", value: "Sopra Steria" },
  { label: "Since", value: "2021" },
  { label: "Based in", value: "Greater Noida, India" },
];

export default function HeroSection() {
  return (
    <section className="shell relative overflow-hidden pt-12 sm:pt-16 lg:pt-24">
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-50"
      />

      <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-9">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1.5 text-[0.6875rem] tracking-wide text-muted">
              <AvailabilityDot />
              Open to senior engineering roles
            </span>
          </div>

          <h1 className="mt-7 text-[2.35rem] font-medium leading-[1.04] tracking-[-0.04em] text-ink sm:mt-9 sm:text-6xl sm:leading-[1.02] sm:tracking-[-0.045em] lg:text-[5.25rem] xl:text-[5.75rem]">
            Building thoughtful
            <br />
            digital experiences
            <br />
            <span className="text-muted">through engineering.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:mt-9 sm:text-base">
            I&apos;m {personalData.name}, a {personalData.designation.toLowerCase()}{" "}
            at {personalData.company}. I build scalable web applications,
            data-dense interfaces, and the full-stack systems behind them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11">
            <Button href="#projects" variant="primary">
              View my work
              <ArrowIcon />
            </Button>
            <Button
              href={personalData.resume}
              external
              variant="outline"
              aria-label="View Rajat Sharma's profile on LinkedIn"
            >
              Resume
              <ExternalArrow />
            </Button>
            <a
              href="#contact"
              className="link-underline ml-1 text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink sm:text-sm"
            >
              Or just say hello
            </a>
          </div>
        </div>

        {/* Typographic identity block — no stock portrait */}
        <aside className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-1 lg:gap-y-6">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="meta">{fact.label}</dt>
                <dd className="mt-1 text-[0.875rem] leading-snug text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="hairline" />
    </section>
  );
}
