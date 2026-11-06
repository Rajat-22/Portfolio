import { chatbotConfig } from "@/utils/data/personal-data";
import { Section, SectionHeading } from "../../ui/section-heading";

const CAPABILITIES = [
  "Answers questions about my experience and stack",
  "Points to the projects most relevant to a role",
  "Grounded in this site's content, not the open web",
];

export default function AiAssistant() {
  return (
    <Section
      id="assistant"
      labelledBy="assistant-heading"
      className="border-t border-line"
    >
      <SectionHeading
        index="05"
        id="assistant-heading"
        title={chatbotConfig.title}
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-7">
          <p className="max-w-xl text-lg font-light leading-relaxed text-ink sm:text-xl lg:text-[1.375rem] lg:leading-[1.5]">
            {chatbotConfig.description}
          </p>

          <ul className="mt-8 space-y-3">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.875rem] leading-relaxed text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={chatbotConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.8125rem] font-medium text-black transition-all duration-300 ease-editorial hover:bg-[#d8ff62] sm:px-6 sm:text-sm"
            >
              {chatbotConfig.cta}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3.5 9.5l6-6M4.5 3.5h5v5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            {chatbotConfig.isPlaceholder && (
              <span className="text-[0.75rem] text-dim">
                Not deployed yet — this link is a placeholder.
              </span>
            )}
          </div>
        </div>

        {/* Abstract, honest visual — no simulated conversation */}
        <div className="reveal lg:col-span-5" style={{ "--reveal-delay": "100ms" }}>
          <div className="card-surface relative overflow-hidden bg-elevated p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-line"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-line"
            />

            <div className="relative">
              <span className="meta">Status</span>
              <p className="mt-2 text-[0.9375rem] text-ink">
                {chatbotConfig.isPlaceholder
                  ? "In development"
                  : "Available now"}
              </p>

              <div className="mt-6 space-y-3 border-t border-line pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.8125rem] text-muted">Source</span>
                  <span className="text-[0.8125rem] text-ink">
                    Portfolio content
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.8125rem] text-muted">Scope</span>
                  <span className="text-[0.8125rem] text-ink">
                    Experience, projects, stack
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.8125rem] text-muted">Access</span>
                  <span className="text-[0.8125rem] text-ink">
                    Opens in a new tab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
