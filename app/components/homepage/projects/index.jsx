"use client";

import { useMemo, useState } from 'react';
import { FiChevronDown, FiFolder } from 'react-icons/fi';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const CATEGORY_TABS = ['All Projects', 'Work', 'Personal'];

// One accent per accordion row so consecutive groups are visually distinct.
const GROUP_ACCENTS = [
  { icon: 'bg-[#2b6cf6] text-white', dot: 'text-[#2b6cf6]' },
  { icon: 'bg-[#8228ec] text-white', dot: 'text-[#8228ec]' },
  { icon: 'bg-[#f626af] text-white', dot: 'text-[#f626af]' },
  { icon: 'bg-[#16f2b3] text-[#0b0c1b]', dot: 'text-[#16f2b3]' },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(CATEGORY_TABS[0]);
  // null = not chosen yet (first group opens); false = explicitly closed.
  const [openGroup, setOpenGroup] = useState(null);

  // Group by project name -- each accordion row is titled after the project.
  const groups = useMemo(() => {
    const visible =
      activeTab === 'All Projects'
        ? projectsData
        : projectsData.filter((p) => (p.category || 'Personal') === activeTab);

    const byName = new Map();
    visible.forEach((project) => {
      const name = project.group || project.name;
      if (!byName.has(name)) byName.set(name, []);
      byName.get(name).push(project);
    });

    return [...byName.entries()].map(([name, projects]) => ({
      name,
      projects,
      category: projects[0]?.category || 'Personal',
    }));
  }, [activeTab]);

  const activeGroup = openGroup === null ? groups[0]?.name ?? null : openGroup;

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-10 sm:pb-14">
        <span className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>

        <div className="flex flex-wrap gap-2 shrink-0">
          {CATEGORY_TABS.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setOpenGroup(null);
                }}
                className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-transparent bg-[#8228ec] text-white'
                    : 'border-[#2a2e5a] bg-[#101123] text-gray-400 hover:border-[#8228ec]/60 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {groups.map((group, groupIndex) => {
          const isOpen = group.name === activeGroup;
          const accent = GROUP_ACCENTS[groupIndex % GROUP_ACCENTS.length];

          return (
            <div
              key={group.name}
              className="overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#101123]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenGroup(isOpen ? false : group.name)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3.5 sm:px-5 text-left transition-colors duration-300 hover:bg-[#171a33]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.icon}`}
                  >
                    <FiFolder className="text-base" />
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {group.name}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-400">
                      {group.category} &middot; {group.projects.length}{' '}
                      {group.projects.length === 1 ? 'project' : 'projects'}
                    </p>
                  </div>
                </div>

                <FiChevronDown
                  className={`shrink-0 text-lg text-gray-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-4 border-t border-[#2a2e5a] p-4 sm:p-5">
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;