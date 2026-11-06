import { personalData } from "@/utils/data/personal-data";
import { Section, SectionHeading } from "../../ui/section-heading";

const PARAGRAPHS = [
  `I'm a senior software engineer with a bias toward the parts of a product people actually feel — how fast a screen loads, how clearly a dense dataset reads, how few clicks it takes to get something done.`,
  `Most of my work lives in the React, Next.js and Vue ecosystem, paired with typed APIs and data stores that range from MongoDB to graph databases like Neo4j. I care about the seam between design and implementation: translating an interface into components that stay fast, accessible and maintainable as the product grows.`,
  `Day to day that means building and improving enterprise web applications end to end — modelling the data, shaping the API, and shipping the interface that sits on top. I'm most useful on problems where performance, visualisation and product thinking all have to meet.`,
];

const PRINCIPLES = [
  {
    title: "Engineering for the interface",
    body: "Interfaces are engineered artefacts. Component structure, state boundaries and rendering cost are design decisions, not afterthoughts.",
  },
  {
    title: "Clarity over cleverness",
    body: "Readable systems outlive clever ones. I optimise for the next person who has to change the code.",
  },
  {
    title: "Measured, not assumed",
    body: "Performance work starts with a measurement. If it is not faster for a real user on a real device, it is not done.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading" className="border-t border-line">
      <SectionHeading
        index="01"
        id="about-heading"
        title="A little about how I work"
        eyebrow={personalData.location}
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-7">
          <div className="space-y-5 text-[0.9375rem] leading-[1.75] text-muted sm:text-base">
            {PARAGRAPHS.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg font-light leading-relaxed text-ink sm:text-xl"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="meta">Based in</dt>
              <dd className="mt-1.5 text-sm text-ink">{personalData.location}</dd>
            </div>
            <div>
              <dt className="meta">Currently</dt>
              <dd className="mt-1.5 text-sm text-ink">
                {personalData.designation}, {personalData.company}
              </dd>
            </div>
            <div>
              <dt className="meta">Focus</dt>
              <dd className="mt-1.5 text-sm text-ink">
                Full-stack product engineering
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <ul className="space-y-px overflow-hidden rounded-[var(--radius)] border border-line bg-line">
            {PRINCIPLES.map((principle, i) => (
              <li
                key={principle.title}
                className="reveal bg-bg px-5 py-5 sm:px-6"
                style={{ "--reveal-delay": `${120 + i * 90}ms` }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="meta shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[0.9375rem] font-medium text-ink">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-2 pl-7 text-[0.8125rem] leading-relaxed text-muted">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
