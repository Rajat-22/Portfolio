/**
 * Editorial section header — numbered, matching the reference's
 * compact section markers.
 */
export function SectionHeading({ index, title, lead, aside, id, className = "" }) {
  return (
    <header className={`reveal ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-line pb-5">
        <div className="flex items-baseline gap-4 sm:gap-6">
          {index && (
            <span className="shrink-0 font-mono text-[0.6875rem] tracking-[0.14em] text-amber">
              {index}
            </span>
          )}
          <h2
            id={id}
            className="display-tight text-[1.875rem] text-ink sm:text-[2.5rem] lg:text-[3rem]"
          >
            {title}
          </h2>
        </div>
        {aside && (
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">
            {aside}
          </span>
        )}
      </div>

      {lead && (
        <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
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

export function AvailabilityDot() {
  return (
    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-amber opacity-60" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
    </span>
  );
}
