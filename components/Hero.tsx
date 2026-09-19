"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { SplitLines } from "./SplitLines";
import { withBase } from "@/lib/base";

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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
          heroMedia.style.transform = `translate3d(0,${y * 0.22}px,0)`;
          if (stage) {
            const fade = Math.min(1, y / (window.innerHeight * 0.85));
            stage.style.transform = `translate3d(0,${y * -0.08}px,0)`;
            stage.style.opacity = String(1 - fade * 0.55);
          }
        }
        heroTick = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const mark = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) mark();
    else img.addEventListener("load", mark, { once: true });
  }, []);

  return (
    <section className="hero" aria-label="Introductie">
      <div className="hero-media" data-parallax ref={mediaRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={withBase("/assets/hero-clean.jpg")}
          alt="Golderos V200 ijsbankkoeler — professionele drankkoeling via VanRobi"
          width={2400}
          height={1500}
          fetchPriority="high"
          className="hero-img img-shimmer"
        />
        <div className="hero-veil" aria-hidden="true"></div>
        <div className="hero-grain" aria-hidden="true"></div>
      </div>

      <div className="hero-stage" ref={stageRef}>
        <div className="hero-content">
          <p className="hero-kicker reveal-hero">
            Officiële distributeur · België &amp; Nederland
          </p>
          <SplitLines
            as="h1"
            className="hero-title"
            lines={[
              "Koude die",
              <em key="e">de bar draagt.</em>,
            ]}
          />
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
