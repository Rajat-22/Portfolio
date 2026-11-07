import Image from "next/image";
import { experiences } from "@/utils/data/experience";
import { educations } from "@/utils/data/educations";
import { Section, SectionHeading } from "../../ui/section-heading";

export default function Experience() {
  const role = experiences[0];
  const degree = educations[0];

  return (
    <Section
      id="experience"
      labelledBy="experience-heading"
      className="border-t border-line"
    >
      <SectionHeading
        index="02"
        id="experience-heading"
        title="My journey"
        aside={role.duration}
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line-2"
            />

            <li className="relative pb-10 pl-8">
              <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-amber bg-bg">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              </span>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-amber">
                Jul 2021 — Present
              </p>
              <h3 className="mt-1.5 text-[1.0625rem] font-semibold text-ink">
                {role.title}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-line bg-white p-0.5">
                  <Image
                    src={role.logo}
                    alt=""
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-[0.875rem] text-ink-2">{role.company}</p>
              </div>
              <span className="tag mt-2.5 bg-amber/10 text-amber">
                <span className="h-1 w-1 rounded-full bg-amber" />
                Current
              </span>

              <div className="mt-5">
                <p className="label">Stack</p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line-2 bg-bg-2 px-2.5 py-1 font-mono text-[0.625rem] text-ink-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="relative pl-8">
              <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-line-3 bg-bg">
                <span className="h-1.5 w-1.5 rounded-full bg-line-3" />
              </span>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                {degree.duration}
              </p>
              <h3 className="mt-1.5 text-[1.0625rem] font-semibold text-ink">
                {degree.title}
              </h3>
              <p className="mt-1 text-[0.875rem] text-ink-2">
                {degree.institution}
              </p>
              <p className="mt-1 font-mono text-[0.625rem] text-ink-3">
                {degree.percentage}
              </p>
            </li>
          </ol>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal overflow-hidden rounded-[10px] border border-line-2 bg-bg-2">
            <div className="border-b border-line bg-bg-3 px-6 py-4 sm:px-7">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-amber">
                Senior Software Engineer · Sopra Steria
              </p>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-[0.9375rem] leading-relaxed text-ink sm:text-base">
                {role.summary}
              </p>

              <div className="mt-7">
                <p className="label">What I work on</p>
                <ul className="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {role.focus.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-ink-2"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-amber"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
