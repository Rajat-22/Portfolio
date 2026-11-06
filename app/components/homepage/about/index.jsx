import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { Section, SectionHeading } from "../../ui/section-heading";

const PRINCIPLES = [
  {
    title: "Start at the data",
    body: "Most interface problems are data problems wearing a costume. I model the information before I touch the layout.",
    dot: "bg-blue",
  },
  {
    title: "Measure, then optimise",
    body: "Performance work begins with a number. If it isn't faster for a real user on a real device, it isn't finished.",
    dot: "bg-coral",
  },
  {
    title: "Build for the next engineer",
    body: "Readable systems outlive clever ones. I optimise for the person who has to change this code in a year.",
    dot: "bg-mint",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading index="01" id="about-heading" title="About me" aside="The story" />

      <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14">
        {/* Portrait + colour block */}
        <div className="reveal lg:col-span-4">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[10px] bg-lavender-soft ring-1 ring-lavender/25"
            />
            <div className="relative overflow-hidden rounded-[10px] border border-line-2">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={personalData.profile}
                  alt="Rajat Sharma"
                  fill
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <dl className="mt-6 space-y-3">
            {[
              ["Based in", personalData.location],
              ["Focus", "Full-stack engineering"],
              ["Specialty", "Data visualisation"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-line pb-2.5">
                <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
                  {k}
                </dt>
                <dd className="text-[0.8125rem] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Story */}
        <div className="reveal lg:col-span-8" style={{ "--reveal-delay": "80ms" }}>
          <p className="display-tight text-[1.5rem] leading-[1.3] text-ink sm:text-[1.875rem] lg:text-[2.125rem]">
            I started in the interface and kept digging down until I understood
            everything underneath it.
          </p>

          <div className="mt-7 space-y-5 text-[0.9375rem] leading-[1.8] text-ink-2 sm:text-base">
            <p>
              Frontend work taught me how products feel. Full-stack work taught
              me why they break. That curiosity took me from component
              development into data modelling, APIs and graph databases —
              because the interesting problems were always one layer deeper.
            </p>
            <p>
              Today I build and improve enterprise web applications end to end
              at {personalData.company}: the interface, the API behind it, and
              the data model underneath. Most of my work sits where performance,
              visualisation and product thinking all have to meet at once.
            </p>
            <p>
              A network topology with thousands of nodes isn&apos;t a styling
              problem — it&apos;s a question of what to render, when, and how to
              let someone rearrange it without losing their place.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-[8px] border border-line-2 bg-paper-3 p-4"
                style={{ "--reveal-delay": `${140 + i * 70}ms` }}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                  <h3 className="text-[0.8125rem] font-semibold text-ink">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-2 text-[0.75rem] leading-relaxed text-ink-2">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
