"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  type ElementType,
} from "react";

type TagName = "h1" | "h2" | "p" | "div";

type Props = HTMLAttributes<HTMLElement> & {
  as?: TagName;
  lines: ReactNode[];
  className?: string;
  /** Skip clip-reveal; show lines immediately (fade only via parent). */
  instant?: boolean;
};

const CRITICAL_SEL = ".hero, .statement, .why, .cta, .products .block-head, .block-head";

/** Staggered per-line clip reveal for editorial headlines. */
export function SplitLines({
  as = "h1",
  lines,
  className = "",
  instant = false,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("js-reveal");
    }
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("lines-in");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || instant) {
      reveal();
      return;
    }

    // Critical homepage titles: clip-reveal is fragile (overflow + IO).
    // Force visible immediately so copy never stays clipped.
    if (el.closest(CRITICAL_SEL)) {
      requestAnimationFrame(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lines-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);

    // Safety: never leave titles clipped if IO misses
    const safety = window.setTimeout(reveal, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [instant]);

  return (
    <Tag
      {...rest}
      className={`split-lines ${className}`.trim()}
      ref={ref}
    >
      {lines.map((line, i) => (
        <span className="split-line" key={i} style={{ ["--i" as string]: i }}>
          <span className="split-line-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
