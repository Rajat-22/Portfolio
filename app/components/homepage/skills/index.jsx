import { skillGroups } from "@/utils/data/skills";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading" className="border-t border-line">
      <SectionHeading
        index="04"
        id="skills-heading"
        title="Technical toolkit"
        eyebrow="Grouped by discipline"
        description="The technologies I reach for in production — picked because each has a job it does well, not because it is fashionable."
      />

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-line bg-line lg:mt-14 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            className={`reveal flex flex-col gap-5 bg-bg p-6 sm:p-8 ${index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                ? "lg:col-span-2"
                : ""
              }`}
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[0.9375rem] font-medium tracking-tight text-ink sm:text-base">
                {group.title}
              </h3>
              <span className="meta shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-[0.8125rem] leading-relaxed text-dim">
              {group.caption}
            </p>

            <ul
              className={`mt-auto flex flex-wrap gap-x-6 gap-y-3 ${index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                  ? "lg:gap-x-10"
                  : ""
                }`}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-[1.0625rem] font-light tracking-tight text-muted transition-colors duration-300 hover:text-ink sm:text-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
