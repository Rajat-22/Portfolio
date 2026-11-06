import { educations } from "@/utils/data/educations";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Education() {
  return (
    <Section
      id="education"
      labelledBy="education-heading"
      className="border-t border-line"
    >
      <SectionHeading index="06" id="education-heading" title="Education" />

      <ol className="mt-10 lg:mt-12">
        {educations.map((education, index) => (
          <li
            key={education.id}
            className="reveal grid grid-cols-1 gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <span className="meta sm:col-span-3">{education.duration}</span>

            <div className="sm:col-span-6">
              <h3 className="text-base font-medium text-ink sm:text-[1.0625rem]">
                {education.title}
              </h3>
              <p className="mt-1 text-[0.875rem] text-muted">
                {education.institution}
                {education.location ? `, ${education.location}` : ""}
              </p>
            </div>

            <p className="text-[0.875rem] text-muted sm:col-span-3 sm:text-right">
              <span className="meta mr-2 sm:hidden">Result</span>
              {education.percentage}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
