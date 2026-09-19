"use client";

import { useEffect, useState } from "react";

export function TempRail() {
  const [temp, setTemp] = useState(6.2);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const p = Math.min(1, window.scrollY / max);
        setTemp(6.2 - p * 4.4);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cold = Math.min(1, Math.max(0, (6.2 - temp) / 4.4));

  return (
    <aside className="temp-rail" aria-hidden="true">
      <span>Tapkoude</span>
      <strong>{temp.toFixed(1)}°</strong>
      <div className="temp-rail-track">
        <i className="temp-rail-fill" style={{ height: `${18 + cold * 82}%` }} />
      </div>
    </aside>
  );
}
