"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  type ElementType,
} from "react";

type TagName =
  | "div"
  | "section"
  | "article"
  | "header"
  | "p"
  | "li"
  | "ol"
  | "a"
  | "h2"
  | "h3"
  | "span";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: TagName;
  href?: string;
};

/** Enable reveal animations only when JS runs (progressive enhancement). */
function enableJsReveal() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("js-reveal");
}

export function Reveal({
  children,
  className = "",
  as = "div",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    enableJsReveal();

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
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      {...rest}
      className={`reveal ${className}`.trim()}
      ref={ref}
    >
      {children}
    </Tag>
  );
}
