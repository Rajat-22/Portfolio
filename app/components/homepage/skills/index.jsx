import { skillGroups } from "@/utils/data/skills";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading" className="border-t border-line">
      <SectionHeading
        index="04"
        id="skills-heading"
        title="Technical toolkit"
        description="The technologies I reach for in production — each one there because it does a specific job well."
      />

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-line bg-line sm:grid-cols-2 lg:mt-14">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            className={`reveal flex flex-col gap-4 bg-bg p-6 sm:p-7 ${
              index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                ? "sm:col-span-2"
                : ""
            }`}
            style={{ "--reveal-delay": `${index * 60}ms` }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[0.9375rem] font-medium tracking-tight text-ink">
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
              className={`mt-2 flex flex-wrap gap-x-4 gap-y-2 ${
                index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                  ? "sm:gap-x-8"
                  : ""
              }`}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-[0.9375rem] font-light tracking-tight text-muted transition-colors duration-300 hover:text-ink"
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
