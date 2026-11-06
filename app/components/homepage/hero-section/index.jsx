import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { Button, ArrowIcon, ExternalArrow } from "../../ui/button";
import { AvailabilityDot } from "../../ui/section-heading";

/** Small node-graph motif — echoes the graph work, drawn honestly in SVG. */
function TopologyMotif({ className = "" }) {
  const nodes = [
    { x: 16, y: 26, r: 3.5 },
    { x: 54, y: 12, r: 2.5 },
    { x: 88, y: 38, r: 4.5 },
    { x: 38, y: 58, r: 3 },
    { x: 74, y: 76, r: 2.5 },
    { x: 18, y: 84, r: 2 },
    { x: 112, y: 18, r: 2 },
    { x: 118, y: 62, r: 3 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [3, 5], [1, 6], [2, 7], [4, 7], [6, 7],
  ];

  return (
    <svg viewBox="0 0 136 96" className={className} aria-hidden="true" fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--blue)"
          strokeWidth="0.7"
          opacity="0.3"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={i === 2 ? "var(--coral)" : "var(--blue)"}
          opacity={i === 2 ? 1 : 0.7}
        />
      ))}
    </svg>
  );
}

const STACK = ["React", "TypeScript", "Vue", "Neo4j", "D3.js"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />

      <div className="shell pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — identity */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-paper-3 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-2">
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
              <span className="text-blue">creativity</span> and
              <br />
              <span className="relative inline-block">
                engineering.
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="9"
                  viewBox="0 0 300 9"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C60 2 120 2 180 4.5c40 1.8 80 1 118-2"
                    stroke="var(--coral)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
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
                  className="rounded-full border border-line-2 bg-paper-3 px-2.5 py-1 font-mono text-[0.625rem] text-ink-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait with purposeful graphic layers */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0">
              {/* Colour block behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-full w-full rounded-[10px] bg-blue-soft ring-1 ring-blue/15"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-28 w-28 rounded-[10px] bg-yellow-soft ring-1 ring-yellow/30"
              />

              {/* Portrait */}
              <div className="relative overflow-hidden rounded-[10px] border border-line-2 bg-paper-3">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={personalData.profile}
                    alt="Rajat Sharma"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 380px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating: current role card */}
              <div className="absolute -left-4 bottom-8 hidden rounded-[8px] border border-line-2 bg-white px-3.5 py-2.5 shadow-[0_16px_36px_-22px_rgba(23,36,58,0.45)] sm:block">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-3">
                  Currently
                </p>
                <p className="mt-0.5 text-[0.75rem] font-medium text-ink">
                  {personalData.designation}
                </p>
                <p className="text-[0.6875rem] text-ink-2">{personalData.company}</p>
              </div>

              {/* Floating: topology card */}
              <div className="absolute -right-5 top-10 hidden w-[132px] rounded-[8px] border border-line-2 bg-white p-2.5 shadow-[0_16px_36px_-22px_rgba(23,36,58,0.45)] sm:block">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.5rem] uppercase tracking-[0.1em] text-ink-3">
                    Graph
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                </div>
                <TopologyMotif className="mt-1.5 h-[62px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
