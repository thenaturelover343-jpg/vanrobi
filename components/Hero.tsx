"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import { MagneticButton } from "./MagneticButton";
import { withBase } from "@/lib/base";

export function Hero() {
 const stageRef = useRef<HTMLDivElement>(null);
 const productRef = useRef<HTMLDivElement>(null);
 const imgRef = useRef<HTMLImageElement>(null);

 const particles = useMemo(
 () =>
 Array.from({ length: 18 }, (_, i) => ({
 id: i,
 left: `${4 + ((i * 17) % 92)}%`,
 delay: `${(i * 0.55) % 8}s`,
 duration: `${10 + (i % 7) * 1.4}s`,
 drift: `${(i % 2 === 0 ? 1 : -1) * (12 + (i % 5) * 8)}px`,
 size: `${2 + (i % 3)}px`,
 })),
 []
 );

 useEffect(() => {
 const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if (reduce) return;
 const stage = stageRef.current;
 const product = productRef.current;
 if (!stage) return;
 let heroTick = false;
 const onScroll = () => {
 if (heroTick) return;
 heroTick = true;
 requestAnimationFrame(() => {
 const y = window.scrollY;
 if (y < window.innerHeight * 1.2) {
 const fade = Math.min(1, y / (window.innerHeight * 0.85));
 stage.style.transform = `translate3d(0,${y * -0.06}px,0)`;
 stage.style.opacity = String(1 - fade * 0.45);
 if (product) {
 product.style.transform = `translate3d(0,${y * 0.12}px,0)`;
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
 <section className="hero hero-cold" aria-label="Introductie">
 <div className="hero-wave" aria-hidden="true" />
 <div className="hero-particles" aria-hidden="true">
 {particles.map((p) => (
 <span
 key={p.id}
 className="ice-particle"
 style={{
 left: p.left,
 bottom: "-4%",
 width: p.size,
 height: p.size,
 animationDelay: p.delay,
 animationDuration: p.duration,
 ["--drift" as string]: p.drift,
 } as CSSProperties}
 />
 ))}
 </div>

      <div className="hero-stage" ref={stageRef}>
        <div className="hero-content">
          <div className="hero-concept reveal-hero" aria-hidden="true">
            <span>Koude onder controle</span>
            <i></i>
            <span>44 L/u</span>
          </div>
          <p className="hero-kicker reveal-hero">
            Ijsbankkoelers · België &amp; Nederland
          </p>
          <h1 className="hero-title reveal-hero reveal-hero-2">
            Professionele ijsbankkoelers voor horeca in België &amp; Nederland
          </h1>
          <p className="hero-slogan reveal-hero reveal-hero-3">
            <em>Koude die de bar draagt.</em>
          </p>
          <p className="hero-lede reveal-hero reveal-hero-4">
            Via VanRobi, specialist in ijsbankkoelers voor België en Nederland.
            Professionele koeling voor bars, restaurants, events en
            installateurs die stabiele tapkoude nodig hebben.
          </p>
          <div className="hero-actions reveal-hero reveal-hero-5">
            <MagneticButton
              className="btn btn-ink magnetic"
              href={withBase("/contact/")}
            >
              <span className="magnetic-label">Vraag een offerte</span>
            </MagneticButton>
            <a className="btn btn-ghost" href={withBase("/producten/")}>
              Bekijk machines
            </a>
          </div>
          <div className="hero-proof reveal-hero reveal-hero-5" aria-hidden="true">
            <span>Bars</span>
            <span>Events</span>
            <span>Installateurs</span>
          </div>
        </div>

        <div className="hero-product" ref={productRef}>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-coldmark" aria-hidden="true">
            <span>IJsbank</span>
            <strong>9 kg</strong>
          </div>
          <div className="hero-product-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={withBase("/assets/hero-editorial-tight.jpg")}
              alt="Goldy over-bar ijsbankkoeler met twee kranen, professionele bierkoeler via VanRobi BE/NL"
              width={2400}
              height={1500}
              fetchPriority="high"
              className="hero-img img-shimmer"
            />
            <div className="hero-pressure-lines" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hero-product-veil" aria-hidden="true" />
            <aside className="hero-meta" aria-hidden="true">
              <div className="hero-meta-item">
                <span>Model</span>
                <strong>Goldy</strong>
              </div>
              <div className="hero-meta-item">
                <span>IJsreserve</span>
                <strong>9 kg</strong>
              </div>
              <div className="hero-meta-item">
                <span>Debiet</span>
                <strong>44 L/u</strong>
              </div>
            </aside>
          </div>
        </div>
      </div>

 <a className="hero-scroll" href="#statement" aria-label="Verder scrollen">
 <span>Scroll</span>
 <i></i>
 </a>
 </section>
 );
}
