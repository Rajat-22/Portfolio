import { Section, SectionHeading } from "../../ui/section-heading";

const HIGHLIGHTS = [
  {
    tag: "Enterprise",
    title: "Network analytics at scale",
    body: "Built the interface layer for a telecom network analyzer — graph data from Neo4j rendered as an interactive topology that operators can rearrange and read directly.",
    accent: "text-amber",
  },
  {
    tag: "Visualisation",
    title: "Graph data made legible",
    body: "Modelled and queried network topology as a graph, then made it readable through yFiles for HTML and D3.js charts rather than raw tables.",
    accent: "text-mint",
  },
  {
    tag: "Product",
    title: "Full-stack builds, end to end",
    body: "Shipped a Vue 3 storefront and a React games arcade — routing, state, data and responsive UI, from first commit to deployment.",
    accent: "text-coral",
  },
  {
    tag: "Craft",
    title: "Design systems in practice",
    body: "Worked across Tailwind, Bootstrap, Vuetify and Material UI to keep interfaces consistent as applications grew.",
    accent: "text-lavender",
  },
];

export default function Highlights() {
  return (
    <Section className="border-t border-line">
      <SectionHeading
        index="05"
        title="Engineering highlights"
        aside="What I'm proud of"
      />

      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-14">
        {HIGHLIGHTS.map((h, i) => (
          <div
            key={h.title}
            className="reveal border-t border-line-2 pt-5"
            style={{ "--reveal-delay": `${i * 70}ms` }}
          >
            <div className="flex items-baseline justify-between">
              <span className={`font-mono text-[0.625rem] uppercase tracking-[0.12em] ${h.accent}`}>
                {h.tag}
              </span>
              <span className="font-mono text-[0.625rem] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="display-tight mt-3 text-[1.25rem] text-ink sm:text-[1.375rem]">
              {h.title}
            </h3>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
              {h.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
