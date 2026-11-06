import { personalData } from "@/utils/data/personal-data";

/**
 * Editorial section header: index number, title, and optional aside.
 */
export function SectionHeading({
  index,
  title,
  eyebrow,
  description,
  id,
  className = "",
}) {
  return (
    <header className={`reveal ${className}`}>
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
        <div className="flex items-baseline gap-4">
          {index && <span className="meta shrink-0">{index}</span>}
          <h2
            id={id}
            className="text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl lg:text-[2.5rem]"
          >
            {title}
          </h2>
        </div>
        {eyebrow && (
          <span className="meta hidden text-right sm:block">{eyebrow}</span>
        )}
      </div>
      {description && (
        <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {description}
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
      <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent opacity-70" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}

export function CurrentCompanyLine() {
  return (
    <span className="inline-flex items-center gap-2 meta">
      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
      {personalData.company}
    </span>
  );
}

export default SectionHeading;
