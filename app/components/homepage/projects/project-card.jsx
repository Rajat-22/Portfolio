// @flow strict

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  FiActivity,
  FiClock,
  FiMonitor,
  FiTarget,
} from 'react-icons/fi';
import placeholder from '/public/png/placeholder.png';
import screenPlaceholder from '/public/projects/portfolio-screenshot.png';

// A glyph that reflects what each project actually is, keyed off its name.
const PROJECT_ICONS = [
  { match: /network|analyz/i, Icon: FiActivity },
  { match: /watch|tick|store|shop|commerce/i, Icon: FiClock },
  { match: /game|play/i, Icon: FiTarget },
  { match: /portfolio|site|web/i, Icon: FiMonitor },
];

const getProjectIcon = (name = '') =>
  PROJECT_ICONS.find(({ match }) => match.test(name))?.Icon ?? FiMonitor;

function ProjectCard({ project }) {
  const { name, description, tools, image, icon, demo } = project;
  const hasDemo = typeof demo === 'string' && demo.trim() !== '';
  const Icon = getProjectIcon(name);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#0b0c1b] transition-all duration-300 hover:border-[#8228ec]/70 lg:flex-row">
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start gap-3">
          {icon ? (
            <Image
              src={icon}
              alt={`${name} logo`}
              width={56}
              height={56}
              className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl border border-[#8228ec]/50 object-contain shadow-[0_0_18px_rgba(130,40,236,0.25)]"
            />
          ) : (
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-[#8228ec]/50 bg-gradient-to-br from-[#8228ec]/25 to-[#2a2e5a]/40 text-[#c4a5ff] shadow-[0_0_18px_rgba(130,40,236,0.25)]">
              <Icon className="text-xl sm:text-2xl" />
            </span>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              {name}
            </h3>

            {Array.isArray(tools) && tools.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#2a2e5a] bg-[#171a33] px-2.5 py-0.5 text-[10px] sm:text-[11px] text-gray-300 transition-colors duration-300 group-hover:border-[#8228ec]/60"
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

      {/* No divider here -- the preview sits flush beside the text. */}
      <div className="flex shrink-0 items-center justify-center p-4 pt-0 sm:p-5 sm:pt-0 lg:w-[42%] lg:p-5">
        <div className="w-full max-w-[280px]">
          {/* Lid / screen bezel */}
          <div className="overflow-hidden rounded-lg border border-[#2a2e5a] bg-[#0b0c1b] p-1 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.85)] sm:p-1.5">
            {/* camera dot on the top bezel */}
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