import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="meta">Error 404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-ink sm:text-6xl">
        This page went missing.
      </h1>
      <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
        The link may be outdated, or the page may have moved. Everything worth
        seeing is on the homepage.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[0.8125rem] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Back to home
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M2 7h9.5M7.5 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
