import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { Button, ArrowIcon, ExternalArrow } from "../../ui/button";
import { AvailabilityDot } from "../../ui/section-heading";

const STATS = [
  { value: "4+", label: "Years shipping production software" },
  { value: "Full-stack", label: "Frontend, APIs and graph data" },
  { value: "Telecom", label: "Network analytics at enterprise scale" },
];

export default function HeroSection() {
  return (
    <section className="shell relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-[0.55]"
      />

      <div className="grid grid-cols-1 items-end gap-12 pb-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1.5 text-[0.6875rem] tracking-wide text-muted">
              <AvailabilityDot />
              Open to senior engineering roles
            </span>
            <span className="meta">
              {personalData.location}
            </span>
          </div>

          <p className="mt-8 text-base font-light text-muted sm:text-lg">
            {personalData.designation} · {personalData.company}
          </p>

          <h1 className="mt-3 text-[2.5rem] font-medium leading-[1.03] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[5rem] xl:text-[5.25rem]">
            Building thoughtful
            <br />
            digital experiences
            <br />
            <span className="text-muted">through engineering.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            I&apos;m {personalData.name} — a {personalData.designation.toLowerCase()}{" "}
            focused on building scalable web applications, intuitive interfaces,
            and impactful digital products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View my work
              <ArrowIcon />
            </Button>
            <Button
              href={personalData.resume}
              external
              variant="outline"
              aria-label="Download Rajat Sharma's resume"
            >
              Download resume
              <ExternalArrow />
            </Button>
            <Link
              href="#contact"
              className="link-underline ml-1 text-[0.8125rem] text-muted transition-colors duration-300 hover:text-ink sm:text-sm"
            >
              Or just say hello
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="relative mx-auto max-w-[280px] lg:ml-auto lg:mr-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] border border-line bg-elevated">
              <Image
                src={personalData.profile}
                alt="Portrait of Rajat Sharma"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="meta">{personalData.name}</span>
              <span className="meta">
                {personalData.location.split(",")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-line bg-line sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-bg px-5 py-6 sm:px-6">
            <p className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[0.8125rem] leading-snug text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
