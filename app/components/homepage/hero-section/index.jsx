import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { Button, ArrowIcon, ExternalArrow } from "../../ui/button";
import { AvailabilityDot } from "../../ui/section-heading";

const STACK = ["React", "TypeScript", "Vue", "Neo4j", "D3.js"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" />

      <div className="shell pt-12 pb-14 sm:pt-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — identity */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-bg-2 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-2">
                <AvailabilityDot />
                Hello, I&apos;m Rajat
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-3">
                {personalData.location}
              </span>
            </div>

            <h1 className="display mt-7 text-[2.75rem] text-ink sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem]">
              Building digital
              <br />
              experiences with
              <br />
              <span className="text-amber">creativity</span> and
              <br />
              engineering.
            </h1>

            <p className="mt-7 max-w-lg text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
              I&apos;m {personalData.name}, a {personalData.designation.toLowerCase()}{" "}
              and full-stack developer. I build scalable web applications,
              interactive interfaces and the data systems behind them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects" variant="primary">
                View projects
                <ArrowIcon />
              </Button>
              <Button
                href={personalData.resume}
                external
                variant="outline"
                aria-label="View Rajat Sharma's profile on LinkedIn"
              >
                Download resume
                <ExternalArrow />
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                Working with
              </span>
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line-2 bg-bg-2 px-2.5 py-1 font-mono text-[0.625rem] text-ink-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait, deliberately secondary to the work */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[300px] pb-6 lg:ml-auto lg:mr-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[16px] border border-line-2"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-amber/10 blur-xl"
              />

              <div className="relative overflow-hidden rounded-[12px] border border-line-2 bg-bg-2">
                <div className="relative aspect-square w-full">
                  <Image
                    src={personalData.profile}
                    alt="Rajat Sharma"
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 300px"
                    className="object-cover object-[center_28%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 hidden w-[calc(100%-2rem)] -translate-x-1/2 rounded-[8px] border border-line-2 bg-bg-3 px-4 py-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] sm:block">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-3">
                      Currently
                    </p>
                    <p className="mt-0.5 text-[0.75rem] font-medium text-ink">
                      {personalData.designation}
                    </p>
                  </div>
                  <p className="shrink-0 text-[0.6875rem] text-ink-2">
                    {personalData.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
