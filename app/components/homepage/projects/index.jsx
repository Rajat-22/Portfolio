import Image from "next/image";
import Link from "next/link";
import { featuredProject, secondaryProjects } from "@/utils/data/projects-data";
import { ExternalArrow } from "../../ui/button";
import { Section, SectionHeading } from "../../ui/section-heading";

function TechList({ tools, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-x-2 gap-y-2 ${className}`}>
      {tools.map((tool) => (
        <li key={tool} className="chip">
          {tool}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }) {
  const hasDemo = Boolean(project.demo);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {hasDemo ? (
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink transition-colors duration-300 hover:text-accent sm:text-sm"
        >
          Live demo
          <ExternalArrow />
          <span className="sr-only">for {project.name} (opens in a new tab)</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] text-dim sm:text-sm">
          Internal enterprise project
        </span>
      )}
      <span className="meta">{project.role}</span>
    </div>
  );
}

function BrowserFrame({ project, priority = false, tall = false }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-elevated">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#3a3a43]" />
          <span className="h-2 w-2 rounded-full bg-[#3a3a43]" />
          <span className="h-2 w-2 rounded-full bg-[#3a3a43]" />
        </span>
        <span className="ml-2 truncate rounded-[4px] bg-bg px-2 py-0.5 text-[0.625rem] tracking-wide text-dim">
          {project.slug}
        </span>
      </div>
      <div
        className={`relative w-full overflow-hidden bg-bg ${tall ? "aspect-[16/10]" : "aspect-[16/11]"
          }`}
      >
        <Image
          src={project.image}
          alt={`${project.name} — product screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 4rem), 560px"
          className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" className="border-t border-line">
      <SectionHeading
        index="03"
        id="projects-heading"
        title="Selected work"
        eyebrow="Four projects"
        description="A mix of enterprise platform work and self-directed product builds — the problems each one solves, and what I actually did."
      />

      {/* Flagship project */}
      {featuredProject && (
        <article className="reveal group mt-10 grid grid-cols-1 gap-8 border-b border-line pb-14 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <BrowserFrame project={featuredProject} priority tall />
          </div>

          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-black">
                Featured
              </span>
              <span className="meta">{featuredProject.category}</span>
            </div>

            <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl lg:text-[2rem]">
              {featuredProject.name}
            </h3>
            <p className="mt-2 text-[0.9375rem] text-muted">
              {featuredProject.tagline}
            </p>

            <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
              {featuredProject.description}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
              {featuredProject.approach}
            </p>

            <ul className="mt-6 space-y-2">
              {featuredProject.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <TechList tools={featuredProject.tools} className="mt-6" />
            <div className="mt-auto pt-7">
              <ProjectLinks project={featuredProject} />
            </div>
          </div>
        </article>
      )}

      {/* Secondary grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 pt-14 sm:grid-cols-2 lg:pt-16">
        {secondaryProjects.map((project, index) => (
          <article
            key={project.id}
            className="reveal group flex flex-col"
            style={{ "--reveal-delay": `${index * 80}ms` }}
          >
            <BrowserFrame project={project} />

            <div className="mt-6 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-ink sm:text-xl">
                {project.name}
              </h3>
              <span className="meta shrink-0">{project.year}</span>
            </div>

            <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
              {project.description}
            </p>

            <TechList tools={project.tools} className="mt-5" />

            <div className="mt-5 border-t border-line pt-5">
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
