import { chatbotConfig } from "@/utils/data/personal-data";
import { ArrowIcon } from "../../ui/button";

const CAPABILITIES = [
  "Answers questions about my experience and stack",
  "Points to the projects most relevant to a role",
  "Grounded in this site's content, not the open web",
];

export default function AiAssistant() {
  return (
    <section id="assistant" className="border-y border-line bg-bg-2 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-7">
            <span className="tag bg-amber/10 text-amber">
              <span className="h-1 w-1 rounded-full bg-amber" />
              In development
            </span>
            <h2 className="display-tight mt-4 text-[1.875rem] text-ink sm:text-[2.5rem] lg:text-[2.75rem]">
              Want to know more
              <br />
              about my work?
            </h2>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
              Explore my projects, experience and technical expertise with my AI
              portfolio assistant.
            </p>

            <ul className="mt-6 space-y-2.5">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-2"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-amber"
                  />
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={chatbotConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 text-[0.8125rem] font-medium text-[#0b0b0d] transition-all duration-300 ease-editorial hover:bg-amber-2 sm:px-6 sm:text-sm"
              >
                Chat with my AI assistant
                <ArrowIcon />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              {chatbotConfig.isPlaceholder && (
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
                  Not deployed yet
                </span>
              )}
            </div>
          </div>

          <div className="reveal lg:col-span-5" style={{ "--reveal-delay": "100ms" }}>
            <div className="rounded-[10px] border border-line-2 bg-bg-3 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-line pb-3.5">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3">
                  Assistant
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  {chatbotConfig.isPlaceholder ? "Preview" : "Live"}
                </span>
              </div>

              <dl className="mt-4 space-y-3">
                {[
                  ["Source", "Portfolio content"],
                  ["Scope", "Experience, projects, stack"],
                  ["Access", "Opens in a new tab"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.8125rem] text-ink-2">{k}</dt>
                    <dd className="text-right text-[0.8125rem] text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
