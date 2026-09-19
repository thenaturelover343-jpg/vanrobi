"use client";

import { useEffect } from "react";

/** Subtle ice-blue custom cursor for fine-pointer desktops only. */
export function IceCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "ice-cursor";
    ring.className = "ice-cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("has-ice-cursor");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x - 6}px,${y - 6}px,0)`;
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px,${ry - 18}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const hoverSel =
      "a, button, .btn, .filter-chip, .service-card-cold, .catalog-card, input, textarea, select";
    const onOver = (e: Event) => {
      const t = e.target as Element | null;
      if (t && t.closest(hoverSel)) {
        dot.classList.add("is-hover");
        ring.style.opacity = "0.35";
      }
    };
    const onOut = (e: Event) => {
      const t = e.target as Element | null;
      if (t && t.closest(hoverSel)) {
        dot.classList.remove("is-hover");
        ring.style.opacity = "0.7";
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      dot.remove();
      ring.remove();
      document.body.classList.remove("has-ice-cursor");
    };
  }, []);

  return null;
}
