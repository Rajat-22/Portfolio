import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const VARIANTS = {
  primary:
    "bg-amber text-[#0b0b0d] border-amber hover:bg-amber-2 hover:border-amber-2",
  dark: "bg-ink text-[#0b0b0d] border-ink hover:bg-white hover:border-white",
  outline:
    "bg-transparent text-ink border-line-3 hover:border-amber hover:text-amber",
  light: "bg-bg-3 text-ink border-line-2 hover:border-line-3 hover:bg-bg-4",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  onClick,
  type,
  ...rest
}) {
  const classes = `group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-5 py-3 text-[0.8125rem] font-medium leading-none tracking-tight transition-all duration-300 ease-editorial sm:px-6 sm:text-sm ${VARIANTS[variant] || VARIANTS.primary
    } ${className}`;

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
          {children}
        </Link>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-1 ${className}`}
    >
      <path
        d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalArrow({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
    >
      <path
        d="M3.5 10.5l7-7M5 3.5h5.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResumeButton({ className = "", variant = "primary" }) {
  return (
    <Button
      href={personalData.resume}
      external
      variant={variant}
      className={className}
      aria-label="View Rajat Sharma's profile on LinkedIn"
    >
      Resume
      <ExternalArrow />
    </Button>
  );
}
