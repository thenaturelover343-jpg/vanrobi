"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { withBase } from "@/lib/base";

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const heroMedia = mediaRef.current;
    const stage = stageRef.current;
    if (!heroMedia) return;
    let heroTick = false;
    const onScroll = () => {
      if (heroTick) return;
      heroTick = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroMedia.style.transform = `translate3d(0,${y * 0.18}px,0)`;
          if (stage) {
            stage.style.transform = `translate3d(0,${y * -0.06}px,0)`;
          }
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
          src={withBase("/assets/hero-cinematic.jpg")}
          alt="Golderos V200 ijsbankkoeler — professionele drankkoeling via VanRobi"
          width={2400}
          height={1500}
          fetchPriority="high"
          className="hero-img"
        />
        <div className="hero-veil" aria-hidden="true"></div>
        <div className="hero-grain" aria-hidden="true"></div>
      </div>

      <div className="hero-stage" ref={stageRef}>
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
            Golderos ijsbankkoelers via VanRobi — industriële precisie voor
            horeca, events en installateurs die geen compromis dulden.
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

        <aside className="hero-meta reveal-hero reveal-hero-5" aria-hidden="true">
          <div className="hero-meta-item">
            <span>Model</span>
            <strong>V200</strong>
          </div>
          <div className="hero-meta-item">
            <span>IJsreserve</span>
            <strong>38 kg</strong>
          </div>
          <div className="hero-meta-item">
            <span>Debiet</span>
            <strong>160 L/u</strong>
          </div>
        </aside>
      </div>

      <a className="hero-scroll" href="#statement" aria-label="Verder scrollen">
        <span>Scroll</span>
        <i></i>
      </a>
    </section>
  );
}
