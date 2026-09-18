"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  createElement,
} from "react";

type TagName = "div" | "section" | "article" | "header" | "p" | "li" | "ol" | "a";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: TagName;
  href?: string;
};

export function Reveal({
  children,
  className = "",
  as = "div",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      className: `reveal ${className}`.trim(),
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
    },
    children
  );
}
