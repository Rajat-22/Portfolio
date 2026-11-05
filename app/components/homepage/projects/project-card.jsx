// @flow strict

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import screenPlaceholder from '/public/projects/portfolio-screenshot.png';
import { getProjectIcon } from './project-icons';

function ProjectCard({ project, hideHeader = false }) {
  const { name, description, tools, image, demo } = project;
  const hasDemo = typeof demo === 'string' && demo.trim() !== '';
  const Icon = getProjectIcon(name);

  return (
    <article className="group relative flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-3">
          {!hideHeader && (
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8228ec]/30 to-[#2a2e5a]/50 text-[#c4a5ff]">
              <Icon className="text-xl sm:text-2xl" />
            </span>
          )}

          <div className="min-w-0 flex-1">
            {!hideHeader && (
              <h3 className="text-sm sm:text-base font-semibold text-white">
                {name}
              </h3>
            )}

            {Array.isArray(tools) && tools.length > 0 && (
              <div className={`flex flex-wrap gap-2 ${hideHeader ? '' : 'mt-2.5'}`}>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[#171a33] px-2.5 py-0.5 text-[10px] sm:text-[11px] text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-400">
              {description}
            </p>
          </div>
        </div>

        {hasDemo && (
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} live demo`}
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs sm:text-sm font-medium text-[#16f2b3] transition-colors duration-300 hover:text-[#8228ec]"
          >
            View Live Demo
            <FiArrowUpRight className="text-base" />
          </Link>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-center pt-4 lg:w-[42%] lg:pt-0">
        <div className="w-full max-w-[280px]">
          <div className="overflow-hidden rounded-lg bg-[#0b0c1b] p-1 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.85)] sm:p-1.5">
            <div className="flex justify-center pb-1">
              <span className="h-0.5 w-0.5 rounded-full bg-[#2a2e5a]" />
            </div>

            <div className="overflow-hidden rounded bg-[#101123]">
              <Image
                src={image || screenPlaceholder || placeholder}
                alt={`${name} screenshot`}
                width={1440}
                height={900}
                className="h-24 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] sm:h-28 lg:h-40"
              />
            </div>
          </div>

          {/* Laptop base with trackpad notch */}
          <div className="relative mx-auto h-2 w-[106%] -translate-x-[2.83%] rounded-b-lg bg-gradient-to-b from-[#c9cdd8] to-[#7c8194] shadow-[0_4px_12px_-5px_rgba(0,0,0,0.9)]">
            <span className="absolute left-1/2 top-0 h-0.5 w-12 -translate-x-1/2 rounded-b-full bg-[#9aa0b0]/70" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;