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
      <SectionHeading
        index="02"
        id="experience-heading"
        title="Where I've worked"
        eyebrow="2021 — Present"
      />

      <div className="mt-10 lg:mt-14">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="reveal grid grid-cols-1 gap-6 border-b border-line pb-10 lg:grid-cols-12 lg:gap-10"
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

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white p-1.5">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium leading-tight text-ink">
                    {experience.title}
                  </h3>
                  <p className="mt-0.5 text-[0.8125rem] text-muted">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {experience.summary}
              </p>

              {experience.stack?.length > 0 && (
                <div className="mt-6">
                  <p className="meta mb-3">Working with</p>
                  <ul className="flex flex-wrap gap-2">
                    {experience.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
