import { chatbotConfig } from "@/utils/data/personal-data";
import { Section, SectionHeading } from "../../ui/section-heading";

/** A quiet conversation preview — no live chat, purely illustrative. */
function ConversationPreview() {
  const lines = [
    { from: "you", text: "What has Rajat built with Neo4j?" },
    {
      from: "assistant",
      text: "A network analyzer that models telecom topology as a graph and renders it as an interactive canvas.",
    },
    { from: "you", text: "Which projects can I try live?" },
  ];

  return (
    <div
      aria-hidden="true"
      className="card-surface overflow-hidden bg-elevated p-4 sm:p-5"
    >
      <div className="flex items-center justify-between border-b border-line pb-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-accent text-[0.5625rem] font-semibold text-black">
            RS
          </span>
          <span className="text-[0.75rem] text-muted">Portfolio assistant</span>
        </div>
        <span className="meta">
          {chatbotConfig.isPlaceholder ? "Preview" : "Live"}
        </span>
      </div>

      <div className="mt-4 space-y-2.5">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`flex ${line.from === "you" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] rounded-[12px] px-3.5 py-2.5 text-[0.8125rem] leading-relaxed ${line.from === "you"
                  ? "bg-subtle text-muted"
                  : "border border-line bg-bg text-ink"
                }`}
            >
              {line.text}
            </p>
          </div>
        ))}

        <div className="flex items-center gap-1 pl-1 pt-1">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-dim" />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-dim"
            style={{ animationDelay: "0.3s" }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-dim"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>
    </div>
  );
}

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
        eyebrow={chatbotConfig.eyebrow}
      />

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-6">
          <p className="text-lg font-light leading-relaxed text-ink sm:text-xl lg:text-2xl lg:leading-[1.45]">
            {chatbotConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              <span className="chip border-dashed">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-dim"
                />
                Launches soon — link is a placeholder
              </span>
            )}
          </div>

          <p className="mt-6 max-w-md text-[0.8125rem] leading-relaxed text-dim">
            The assistant answers questions about my experience, projects and
            technical background using this site&apos;s content as its source.
          </p>
        </div>

        <div className="reveal lg:col-span-6" style={{ "--reveal-delay": "120ms" }}>
          <ConversationPreview />
        </div>
      </div>
    </Section>
  );
}
