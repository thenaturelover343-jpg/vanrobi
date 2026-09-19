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
    const show = () => el.classList.add("in");
    // Products/categories: reveal early so cards never look "empty"
    const early = Boolean(el.closest(".products, .categories, .partner"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: early ? 0.04 : 0.08,
        rootMargin: early ? "0px 0px 12% 0px" : "0px 0px -6% 0px",
      }
    );
    io.observe(el);
    const safety = window.setTimeout(show, early ? 600 : 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
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
