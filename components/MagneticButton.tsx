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
    const el = ref.current;
    if (!el) return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const spawnRipple = (e: PointerEvent) => {
      if (reduce) return;
      const r = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 1.35;
      const ripple = document.createElement("span");
      ripple.className = "btn-ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - r.left - size / 2}px`;
      ripple.style.top = `${e.clientY - r.top - size / 2}px`;
      el.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 720);
    };

    el.addEventListener("pointerenter", spawnRipple);

    if (!magnetic || reduce) {
      return () => el.removeEventListener("pointerenter", spawnRipple);
    }

    const label = el.querySelector(".magnetic-label") as HTMLElement | null;
    const strength = el.classList.contains("btn-lg") ? 0.35 : 0.28;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transition = "transform 0.18s var(--ease, cubic-bezier(0.22,1,0.36,1))";
      el.style.transform = `translate(${x * strength}px,${y * strength}px)`;
      if (label) {
        label.style.transform = `translate(${x * strength * 0.35}px,${y * strength * 0.35}px)`;
      }
    };
    const onLeave = () => {
      el.style.transition = "transform 0.55s var(--ease, cubic-bezier(0.22,1,0.36,1))";
      el.style.transform = "";
      if (label) {
        label.style.transition =
          "transform 0.55s var(--ease, cubic-bezier(0.22,1,0.36,1))";
        label.style.transform = "";
      }
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerenter", spawnRipple);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [magnetic]);

  return (
    <a
      ref={ref}
      className={className}
      data-magnetic={magnetic || undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
