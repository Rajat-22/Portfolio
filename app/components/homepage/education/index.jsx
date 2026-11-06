import { educations } from "@/utils/data/educations";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Education() {
  return (
    <Section id="education" labelledBy="education-heading" className="border-t border-line">
      <SectionHeading index="06" id="education-heading" title="Education" aside="Background" />

      <ol className="mt-10 lg:mt-12">
        {educations.map((education, index) => (
          <li
            key={education.id}
            className="reveal grid grid-cols-1 gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            style={{ "--reveal-delay": `${index * 60}ms` }}
          >
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-3 sm:col-span-3">
              {education.duration}
            </span>

            <div className="sm:col-span-6">
              <h3 className="text-[1rem] font-semibold text-ink">
                {education.title}
              </h3>
              <p className="mt-1 text-[0.875rem] text-ink-2">
                {education.institution}
                {education.location ? `, ${education.location}` : ""}
              </p>
            </div>

            <p className="text-[0.875rem] text-ink-2 sm:col-span-3 sm:text-right">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3 sm:hidden">
                Result{" "}
              </span>
              {education.percentage}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
