import Image from "next/image";
import { experiences } from "@/utils/data/experience";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Experience() {
  return (
    <Section
      id="experience"
      labelledBy="experience-heading"
      className="border-t border-line"
    >
      <SectionHeading index="02" id="experience-heading" title="Experience" />

      <div className="mt-10 lg:mt-14">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="reveal grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="meta">{experience.duration}</span>
                {experience.isCurrent && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-accent">
                    Current
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] border border-line bg-white p-1.5">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[1.0625rem] font-medium leading-tight text-ink">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] text-muted">
                    {experience.company}
                  </p>
                </div>
              </div>

              {experience.stack?.length > 0 && (
                <div className="mt-7">
                  <p className="meta mb-3">Stack</p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {experience.stack.map((tech) => (
                      <li
                        key={tech}
                        className="whitespace-nowrap text-[0.8125rem] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-2xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base">
                {experience.summary}
              </p>

              {experience.focus?.length > 0 && (
                <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {experience.focus.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
