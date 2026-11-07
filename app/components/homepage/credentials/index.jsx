import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";

const CREDENTIALS = [
  {
    value: "2021",
    label: "Engineering professionally since",
    detail: "Jul 2021 — Present",
  },
  {
    value: personalData.company,
    label: "Current company",
    detail: "Senior Software Engineer",
    small: true,
  },
  {
    value: String(projectsData.length),
    label: "Projects in this portfolio",
    detail: "1 enterprise · 3 personal",
  },
  {
    value: "5",
    label: "Engineering disciplines",
    detail: "Frontend → data → visualisation",
  },
];

export default function Credentials() {
  return (
    <section className="border-y border-line bg-bg-2">
      <div className="shell">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item, i) => (
            <div
              key={item.label}
              className={`reveal py-7 sm:py-9 ${
                i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
              } ${i % 2 === 1 ? "border-l border-line pl-5 lg:pl-8" : ""} ${
                i < 2 ? "border-b border-line lg:border-b-0" : ""
              }`}
              style={{ "--reveal-delay": `${i * 70}ms` }}
            >
              <p
                className={`display-tight text-ink ${
                  item.small
                    ? "text-[1.375rem] sm:text-[1.625rem]"
                    : "text-[2.25rem] sm:text-[2.75rem]"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-2 text-[0.8125rem] leading-snug text-ink-2">
                {item.label}
              </p>
              <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
