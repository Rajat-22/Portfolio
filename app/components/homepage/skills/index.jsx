import { skillGroups } from "@/utils/data/skills";
import { Section, SectionHeading } from "../../ui/section-heading";

const LAYERS = [
  { id: "frontend", tag: "Interface", accent: "text-amber" },
  { id: "ui", tag: "Presentation", accent: "text-sky" },
  { id: "backend", tag: "Data layer", accent: "text-coral" },
  { id: "viz", tag: "Visualisation", accent: "text-mint" },
  { id: "tooling", tag: "Craft", accent: "text-lavender" },
];

export default function Skills() {
  const groups = LAYERS.map((layer) => ({
    ...layer,
    ...skillGroups.find((g) => g.id === layer.id),
  })).filter((g) => g.title);

  return (
    <Section id="skills" labelledBy="skills-heading" className="border-t border-line">
      <SectionHeading
        index="04"
        id="skills-heading"
        title="Engineering toolkit"
        aside="The stack"
        lead="Grouped the way the work actually layers — from the interface down to the data, with the visualisation and tooling that sit alongside."
      />

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line-2 bg-line-2 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {groups.map((group, i) => (
          <div
            key={group.id}
            className="reveal flex flex-col bg-bg-2 p-5 sm:p-6"
            style={{ "--reveal-delay": `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className={`font-mono text-[0.5625rem] uppercase tracking-[0.12em] ${group.accent}`}>
                {group.tag}
              </span>
              <span className="font-mono text-[0.5625rem] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-3 text-[1rem] font-semibold leading-tight text-ink">
              {group.title}
            </h3>
            <p className="mb-5 mt-1.5 text-[0.75rem] leading-snug text-ink-3">
              {group.caption}
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line-2 bg-bg-3 px-2.5 py-1 text-[0.75rem] text-ink-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="reveal flex flex-col justify-center bg-bg-3 p-5 sm:p-6">
          <p className="label">How it connects</p>
          <ol className="mt-4 space-y-2.5">
            {["Interface", "API", "Data", "Visualisation"].map((step, i, arr) => (
              <li key={step} className="flex items-center gap-2.5">
                <span className="font-mono text-[0.5625rem] text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.8125rem] text-ink">{step}</span>
                {i < arr.length - 1 && (
                  <span aria-hidden="true" className="ml-auto text-ink-3">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
