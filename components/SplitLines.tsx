"use client";

import {
  useEffect,
  useRef,
  createElement,
  type ReactNode,
  type HTMLAttributes,
} from "react";

type TagName = "h1" | "h2" | "p" | "div";

type Props = HTMLAttributes<HTMLElement> & {
  as?: TagName;
  lines: ReactNode[];
  className?: string;
};

/** Staggered per-line clip reveal for editorial headlines. */
export function SplitLines({
  as = "h1",
  lines,
  className = "",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("js-reveal");
    }
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("lines-in");
      return;
    }
    // Hero is above the fold — reveal immediately after paint
    if (el.closest(".hero")) {
      requestAnimationFrame(() => el.classList.add("lines-in"));
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
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      className: `split-lines ${className}`.trim(),
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
    },
    lines.map((line, i) => (
      <span className="split-line" key={i} style={{ ["--i" as string]: i }}>
        <span className="split-line-inner">{line}</span>
      </span>
    ))
  );
}
