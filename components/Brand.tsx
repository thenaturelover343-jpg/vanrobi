import { withBase } from "@/lib/base";

type BrandProps = {
  markSize?: number;
  className?: string;
  homeHref?: string;
};

export function Brand({ markSize = 28, className, homeHref = "/" }: BrandProps) {
  return (
    <a
      className={`brand${className ? ` ${className}` : ""}`}
      href={withBase(homeHref)}
      aria-label="VanRobi home"
    >
      <svg
        className="brand-mark"
        width={markSize}
        height={markSize}
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6 L14 24 L24 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="brand-mark-accent"
          d="M9 14h10"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-name">VanRobi</span>
    </a>
  );
}
