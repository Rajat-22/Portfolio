import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const VARIANTS = {
  primary:
    "bg-accent text-black border-accent hover:bg-[#d8ff62] hover:border-[#d8ff62]",
  outline:
    "border-line-strong text-ink hover:border-accent hover:text-accent bg-transparent",
  ghost: "border-transparent text-muted hover:text-ink bg-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon = null,
  onClick,
  type,
  ...rest
}) {
  const classes = `group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.8125rem] font-medium leading-none tracking-tight transition-all duration-300 ease-editorial sm:px-6 sm:text-sm ${VARIANTS[variant] || VARIANTS.primary
    } ${className}`;

  const content = (
    <>
      <span className="inline-flex items-center">{children}</span>
      {icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {content}
        </Link>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 ${className}`}
    >
      <path
        d="M2 7h9.5M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalArrow({ className = "" }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
    >
      <path
        d="M3.5 9.5l6-6M4.5 3.5h5v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResumeButton({ className }) {
  return (
    <Button
      href={personalData.resume}
      external
      variant="primary"
      className={className}
      aria-label="View Rajat Sharma's profile on LinkedIn"
    >
      Resume
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-y-0.5"
      >
        <path
          d="M6.5 1.5v7M3.5 6l3 3 3-3M2 11h9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
