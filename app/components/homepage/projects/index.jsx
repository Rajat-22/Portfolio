import Image from "next/image";
import Link from "next/link";
import { featuredProject, secondaryProjects } from "@/utils/data/projects-data";
import { ExternalArrow } from "../../ui/button";
import { Section, SectionHeading } from "../../ui/section-heading";

function TechRow({ tools }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tools.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line-2 bg-bg-3 px-2.5 py-1 font-mono text-[0.625rem] text-ink-2"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function DemoLink({ project }) {
  if (!project.demo) {
    return (
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
        Internal enterprise project
      </span>
    );
  }
  return (
    <Link
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-amber transition-colors hover:text-amber-2"
    >
      Live demo
      <ExternalArrow />
      <span className="sr-only">for {project.name} (opens in a new tab)</span>
    </Link>
  );
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" className="border-t border-line">
      <SectionHeading
        index="03"
        id="projects-heading"
        title="Selected work"
        aside="04 projects"
        lead="Enterprise platform work and self-directed product builds — the problem each one solves, and what I actually did."
      />

      {/* FLAGSHIP */}
      <article className="reveal mt-10 overflow-hidden rounded-[12px] border border-line-2 bg-bg-2 lg:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="p-7 sm:p-9 lg:col-span-5 lg:p-10">
            <div className="flex items-center gap-2.5">
              <span className="tag bg-amber/10 text-amber">
                <span className="h-1 w-1 rounded-full bg-amber" />
                Featured
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                {featuredProject.category}
              </span>
            </div>

            <h3 className="display-tight mt-4 text-[1.75rem] text-ink sm:text-[2.125rem]">
              {featuredProject.name}
            </h3>
            <p className="mt-2 text-[0.9375rem] text-ink-2">
              {featuredProject.tagline}
            </p>

            <p className="mt-5 text-[0.875rem] leading-relaxed text-ink-2">
              {featuredProject.description}
            </p>
            <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-2">
              {featuredProject.approach}
            </p>

            <ul className="mt-5 space-y-2">
              {featuredProject.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-ink-2"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-amber"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-line pt-4">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-ink-3">
                My contribution
              </p>
              <p className="mt-1 text-[0.8125rem] text-ink">
                {featuredProject.role}
              </p>
            </div>

            <div className="mt-4">
              <TechRow tools={featuredProject.tools} />
            </div>
            <div className="mt-5">
              <DemoLink project={featuredProject} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[460px]">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.name} — network topology interface`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </article>

      {/* SECONDARY */}
      <div className="mt-8 space-y-6 lg:mt-10 lg:space-y-8">
        {secondaryProjects.map((project, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="reveal overflow-hidden rounded-[12px] border border-line-2 bg-bg-2"
              style={{ "--reveal-delay": `${index * 60}ms` }}
            >
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                <div
                  className={`lg:col-span-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[16/10] w-full lg:h-full lg:min-h-[300px]">
                    <Image
                      src={project.image}
                      alt={`${project.name} — product interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col p-6 sm:p-8 lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                      {String(index + 2).padStart(2, "0")} / {project.year}
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="display-tight mt-2.5 text-[1.5rem] text-ink sm:text-[1.75rem]">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] text-ink-2">
                    {project.tagline}
                  </p>

                  <p className="mt-3.5 text-[0.875rem] leading-relaxed text-ink-2">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <TechRow tools={project.tools} />
                    <div className="mt-4 border-t border-line pt-3.5">
                      <DemoLink project={project} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
