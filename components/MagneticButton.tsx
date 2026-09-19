"use client";

import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  magnetic?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  magnetic = true,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce) return;

    const label = el.querySelector(".magnetic-label") as HTMLElement | null;
    const strength = el.classList.contains("btn-lg") ? 0.35 : 0.28;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transition = 'transform 0.18s var(--ease, cubic-bezier(0.22,1,0.36,1))';
      el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
      if (label) {
        label.style.transform = `translate(${x * strength * 0.35}px,${y * strength * 0.35}px)`;
      }
    };
    const onLeave = () => {
      el.style.transition = 'transform 0.55s var(--ease, cubic-bezier(0.22,1,0.36,1))';
      el.style.transform = "";
      if (label) label.style.transition = 'transform 0.55s var(--ease, cubic-bezier(0.22,1,0.36,1))';
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [magnetic]);

  return (
    <a ref={ref} className={className} data-magnetic={magnetic || undefined} {...rest}>
      {children}
    </a>
  );
}
