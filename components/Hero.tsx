"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { withBase } from "@/lib/base";

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const heroMedia = mediaRef.current;
    if (!heroMedia) return;
    let heroTick = false;
    const onScroll = () => {
      if (heroTick) return;
      heroTick = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.15) {
          heroMedia.style.transform = `translate3d(0,${y * 0.16}px,0)`;
        }
        heroTick = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" aria-label="Introductie">
      <div className="hero-media" data-parallax ref={mediaRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/assets/hero-bar.jpg")}
          alt="Atmosferische craft bar met professionele taplijn"
          width={2400}
          height={1800}
          fetchPriority="high"
          className="hero-img"
        />
        <div className="hero-veil"></div>
        <div className="hero-grain" aria-hidden="true"></div>
      </div>
      <div className="hero-content">
        <p className="hero-kicker reveal-hero">
          Officiële distributeur · België &amp; Nederland
        </p>
        <h1 className="reveal-hero reveal-hero-2">
          Koude die
          <br />
          <em>de bar draagt.</em>
        </h1>
        <p className="hero-lede reveal-hero reveal-hero-3">
          Echte Golderos ijsbankkoelers via VanRobi — stabiele taptemperatuur voor
          horeca, events en installateurs.
        </p>
        <div className="hero-actions reveal-hero reveal-hero-4">
          <MagneticButton className="btn btn-light magnetic" href="#offerte">
            <span className="magnetic-label">Vraag een offerte</span>
          </MagneticButton>
          <a className="btn btn-ghost" href="#producten">
            Bekijk machines
          </a>
        </div>
      </div>
      <a className="hero-scroll" href="#producten" aria-label="Naar producten">
        <span>Scroll</span>
        <i></i>
      </a>
    </section>
  );
}
