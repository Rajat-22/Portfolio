"use client";

import { useMemo, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { getProjectIcon } from './project-icons';

const CATEGORY_TABS = ['All Projects', 'Work', 'Personal'];

// One accent per accordion row so consecutive groups are visually distinct.
const GROUP_ACCENTS = [
  'bg-[#2b6cf6] text-white',
  'bg-[#8228ec] text-white',
  'bg-[#f626af] text-white',
  'bg-[#16f2b3] text-[#0b0c1b]',
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(CATEGORY_TABS[0]);
  const [pickedGroup, setPickedGroup] = useState(null);

  const groups = useMemo(() => {
    const visible =
      activeTab === 'All Projects'
        ? projectsData
        : projectsData.filter((p) => (p.category || 'Personal') === activeTab);

    const byName = new Map();
    visible.forEach((project) => {
      const name = project.name;
      if (!byName.has(name)) byName.set(name, []);
      byName.get(name).push(project);
    });

    return [...byName.entries()].map(([name, projects]) => ({
      name,
      projects,
      category: projects[0]?.category || 'Personal',
    }));
  }, [activeTab]);

  const rowKey = (groupIndex, name) => `${activeTab}:${groupIndex}:${name}`;
  const activeKey =
    pickedGroup === null ? (groups.length ? rowKey(0, groups[0].name) : null) : pickedGroup;

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-0 filter blur-3xl opacity-20" />

      <div className="flex items-center my-5 lg:py-8">
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="flex-1 h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="flex flex-wrap gap-2 pb-10 sm:pb-14 sm:justify-end">
        {CATEGORY_TABS.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setPickedGroup(null);
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

      <div className="flex flex-col gap-3">
        {groups.map((group, groupIndex) => {
          const key = rowKey(groupIndex, group.name);
          const isOpen = key === activeKey;
          const accent = GROUP_ACCENTS[groupIndex % GROUP_ACCENTS.length];
          const isSingle = group.projects.length === 1;
          const RowIcon = getProjectIcon(group.name);

          return (
            <div
              key={key}
              className="overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#101123]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setPickedGroup(isOpen ? false : key)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3.5 sm:px-5 text-left transition-colors duration-300 hover:bg-[#171a33]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent}`}
                  >
                    <RowIcon className="text-base" />
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
                <div className="flex flex-col gap-6 p-4 sm:p-5">
                  {group.projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      hideHeader={isSingle}
                    />
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