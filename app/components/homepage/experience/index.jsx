// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-0">
          <div className="relative flex flex-col gap-8">
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#16f2b3] via-[#8228ec] to-transparent opacity-70"
            />

            {experiences.map((experience, index) => {
              return (
                <div key={experience.id} className="group relative pl-8">
                  <span
                    aria-hidden="true"
                    className="timeline-node absolute left-0 top-6 z-10 h-4 w-4 rounded-full ring-4 ring-[#0b0c1b]"
                  />

                  {index === 0 && experience.isCurrent && (
                    <span className="absolute left-6 -top-1 z-10 rounded-full bg-[#16f2b3] px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#0b0c1b]">
                      Current
                    </span>
                  )}

                  <div className="relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#101123] p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#8228ec]/70">
                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="pointer-events-none absolute bottom-0 opacity-40"
                    />
                    <div className="relative flex items-center gap-5 sm:gap-6">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2 transition-all duration-300 group-hover:scale-105">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="text-base sm:text-xl font-semibold uppercase text-white">
                          {experience.title}
                        </p>
                        <p className="mt-1 text-sm sm:text-base text-gray-300">
                          {experience.company}
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-[#16f2b3]">
                          <FiCalendar className="shrink-0" />
                          {experience.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;