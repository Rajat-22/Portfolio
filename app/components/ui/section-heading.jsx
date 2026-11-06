/**
 * Editorial section header. Deliberately not a card — a typographic
 * marker that anchors each section without repeating a container.
 */
export function SectionHeading({
  index,
  title,
  lead,
  aside,
  id,
  tone = "light",
  className = "",
}) {
  const isDark = tone === "dark";

  return (
    <header className={`reveal ${className}`}>
      <div
        className={`flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b pb-5 ${isDark ? "border-night-line" : "border-line"
          }`}
      >
        <div className="flex items-baseline gap-4 sm:gap-6">
          {index && (
            <span
              className={`shrink-0 font-mono text-[0.6875rem] tracking-[0.14em] ${isDark ? "text-night-muted" : "text-ink-3"
                }`}
            >
              {index}
            </span>
          )}
          <h2
            id={id}
            className={`display-tight text-[1.875rem] sm:text-[2.5rem] lg:text-[3rem] ${isDark ? "text-night-ink" : "text-ink"
              }`}
          >
            {title}
          </h2>
        </div>
        {aside && (
          <span
            className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] ${isDark ? "text-night-muted" : "text-ink-3"
              }`}
          >
            {aside}
          </span>
        )}
      </div>

      {lead && (
        <p
          className={`mt-6 max-w-2xl text-[0.9375rem] leading-relaxed sm:text-base ${isDark ? "text-night-muted" : "text-ink-2"
            }`}
        >
          {lead}
        </p>
      )}
    </header>
  );
}

export function Section({ id, children, className = "", labelledBy }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`shell scroll-mt-24 py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function AvailabilityDot({ tone = "light" }) {
  return (
    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
      <span
        className={`absolute inline-flex h-full w-full animate-pulse-dot rounded-full ${tone === "dark" ? "bg-orange" : "bg-blue"
          } opacity-60`}
      />
      <span
        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-orange" : "bg-blue"
          }`}
      />
    </span>
  );
}
