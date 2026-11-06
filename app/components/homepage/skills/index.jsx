import { skillGroups } from "@/utils/data/skills";
import { Section, SectionHeading } from "../../ui/section-heading";

const LAYERS = [
  {
    id: "frontend",
    tag: "Interface",
    dot: "bg-blue",
    tint: "bg-blue-soft",
    text: "text-blue",
  },
  {
    id: "ui",
    tag: "Presentation",
    dot: "bg-lavender",
    tint: "bg-lavender-soft",
    text: "text-[#6d4fd0]",
  },
  {
    id: "backend",
    tag: "Data layer",
    dot: "bg-coral",
    tint: "bg-coral-soft",
    text: "text-[#c94a3f]",
  },
  {
    id: "viz",
    tag: "Visualisation",
    dot: "bg-mint",
    tint: "bg-mint-soft",
    text: "text-[#1f8a68]",
  },
  {
    id: "tooling",
    tag: "Craft",
    dot: "bg-yellow",
    tint: "bg-yellow-soft",
    text: "text-[#a97a12]",
  },
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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {groups.map((group, i) => (
          <div
            key={group.id}
            className={`reveal flex flex-col rounded-[10px] border border-line-2 p-5 sm:p-6 ${group.tint}`}
            style={{ "--reveal-delay": `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span
                className={`tag bg-white/70 ${group.text}`}
              >
                <span className={`h-1 w-1 rounded-full ${group.dot}`} />
                {group.tag}
              </span>
              <span className="font-mono text-[0.5625rem] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-3.5 text-[1rem] font-semibold leading-tight text-ink">
              {group.title}
            </h3>
            <p className="mb-5 mt-1.5 text-[0.75rem] leading-snug text-ink-2">
              {group.caption}
            </p>

            <ul className="mt-auto flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-ink/10 bg-white/80 px-2.5 py-1 text-[0.75rem] text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Flow card — completes the 3-col grid and explains the layering */}
        <div className="reveal flex flex-col justify-center rounded-[10px] border border-line-2 bg-paper-3 p-5 sm:p-6">
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
