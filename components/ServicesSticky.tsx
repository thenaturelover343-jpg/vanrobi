"use client";

import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/base";

export type ServiceItem = {
  n: string;
  title: string;
  text: string;
};

type Props = {
  services: ServiceItem[];
  moreHref?: string;
};

export function ServicesSticky({
  services,
  moreHref = "/contact/",
}: Props) {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-active"));
      return;
    }

    let ticking = false;
    const update = () => {
      const mid = window.innerHeight * 0.42;
      let best = 0;
      let bestScore = Infinity;
      els.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height * 0.35;
        const score = Math.abs(center - mid);
        if (r.bottom > 80 && r.top < window.innerHeight && score < bestScore) {
          bestScore = score;
          best = i;
        }
      });
      setActive(best);
      els.forEach((el, i) => {
        el.classList.toggle("is-active", i === best || Math.abs(i - best) === 0);
        if (i <= best) el.classList.add("is-active");
        else if (i === best + 1) {
          /* keep next slightly muted via opacity CSS default */
        }
      });
      /* Activate current + previously scrolled */
      els.forEach((el, i) => {
        el.classList.toggle("is-active", i === best);
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [services.length]);

  const scrollTo = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="services-sticky">
      <div className="services-sticky-layout">
        <nav className="services-rail" aria-label="Diensten overzicht">
          {services.map((s, i) => (
            <button
              key={s.n}
              type="button"
              className={`services-rail-item${i === active ? " is-active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-current={i === active ? "true" : undefined}
            >
              {s.n}
            </button>
          ))}
        </nav>

        <div className="services-stack">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`service-card-cold${i % 2 === 0 ? " is-wide" : " is-half"}${
                i === active ? " is-active" : ""
              }`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-index={i}
            >
              <span className="service-n" aria-hidden="true">
                {s.n}
              </span>
              <span className="service-icon-line" aria-hidden="true" />
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <a className="service-more" href={withBase(moreHref)}>
                Lees meer <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
