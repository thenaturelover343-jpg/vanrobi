"use client";

import { useEffect, useRef, useState } from "react";
import { featuredProducts as products } from "@/lib/products";
import { withBase } from "@/lib/base";
import { offerteMailto } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { SplitLines } from "./SplitLines";

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrubRef = useRef<HTMLDivElement>(null);
  const [scrubNum, setScrubNum] = useState("01");
  const [scrubName, setScrubName] = useState("Goldy");
  const [scrubPct, setScrubPct] = useState(25);
  const [scrubVisible, setScrubVisible] = useState(false);

  useEffect(() => {
    const productsEls = Array.from(
      document.querySelectorAll<HTMLElement>(".prod[data-index]")
    );
    const productsSection = sectionRef.current;
    const scrub = scrubRef.current;
    if (!productsSection || !scrub) return;

    let ticking = false;

    const updateScrub = () => {
      const sectionRect = productsSection.getBoundingClientRect();
      const inView =
        sectionRect.top < window.innerHeight * 0.55 &&
        sectionRect.bottom > window.innerHeight * 0.35;
      setScrubVisible(inView);

      let best = productsEls[0];
      let bestScore = Infinity;
      const mid = window.innerHeight * 0.42;

      productsEls.forEach((p) => {
        const r = p.getBoundingClientRect();
        const center = r.top + r.height * 0.35;
        const score = Math.abs(center - mid);
        if (r.bottom > 80 && r.top < window.innerHeight && score < bestScore) {
          bestScore = score;
          best = p;
        }
      });

      if (!best) return;
      const idx = best.getAttribute("data-index") || "01";
      const name = best.getAttribute("data-name") || "";
      const n = parseInt(idx, 10) || 1;
      setScrubNum(idx);
      setScrubName(name);
      setScrubPct((n / productsEls.length) * 100);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateScrub();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrub();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onProductCta = (name: string) => {
    const mail = document.getElementById("cta-primary");
    if (mail && name) {
      mail.setAttribute("href", offerteMailto(name));
    }
  };

  return (
    <section className="products" id="producten" ref={sectionRef}>
      <div className="wrap">
        <Reveal as="header" className="block-head">
          <p className="eyebrow">Assortiment</p>
          <SplitLines
            as="h2"
            lines={["Vier machines.", <em key="e">Eén standaard.</em>]}
          />
          <p className="block-lede">
            Industriële ijsbankkoelers — gefotografeerd als object. Specs die
            installateurs en barontwerp begrijpen.
          </p>
        </Reveal>

        <div
          className={`prod-scrub${scrubVisible ? " visible" : ""}`}
          id="prod-scrub"
          aria-hidden="true"
          ref={scrubRef}
        >
          <div className="prod-scrub-track">
            <span className="prod-scrub-num" data-scrub-num>
              {scrubNum}
            </span>
            <div className="prod-scrub-bar" aria-hidden="true">
              <i data-scrub-fill style={{ width: `${scrubPct}%` }}></i>
            </div>
            <span className="prod-scrub-total">04</span>
          </div>
          <p className="prod-scrub-name" data-scrub-name>
            {scrubName}
          </p>
        </div>

        <div className="product-stage">
          {products.map((p) => (
            <Reveal
              as="article"
              key={p.id}
              className="prod"
              data-prod={p.id}
              data-index={p.index}
              data-name={p.name}
              id={`prod-${p.id}`}
            >
              <div className="prod-visual reveal-child">
                <a href={withBase(`/producten/${p.id}/`)} className="prod-frame-link">
                  <div className={`prod-frame ${p.cropClass} img-mask`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1300}
                      height={1300}
                      loading="lazy"
                      className="img-shimmer"
                      onLoad={(e) => e.currentTarget.classList.add("is-loaded")}
                    />
                  </div>
                </a>
                <span className="prod-badge">{p.badge}</span>
              </div>
              <div className="prod-copy">
                <span className="prod-index reveal-child">{p.index}</span>
                <h3 className="reveal-child">
                  <a href={withBase(`/producten/${p.id}/`)}>{p.name}</a>
                </h3>
                <p className="prod-desc reveal-child">{p.description}</p>
                <ul className="prod-specs reveal-child">
                  {p.specs.map((s) => (
                    <li key={s.label}>
                      <span>{s.label}</span>
                      <strong>{s.value}</strong>
                    </li>
                  ))}
                </ul>
                <a
                  href={withBase(`/producten/${p.id}/`)}
                  className="text-link reveal-child"
                >
                  Bekijk {p.name} <span aria-hidden="true">→</span>
                </a>
                <a
                  href={withBase("/contact/")}
                  className="text-link reveal-child"
                  data-product={p.name}
                  onClick={() => onProductCta(p.name)}
                  style={{ marginTop: "0.5rem" }}
                >
                  Offerte voor {p.name} <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="catalog-more">
          <a className="btn btn-ink" href={withBase("/producten/")}>
            Volledige catalogus
          </a>
        </p>
      </div>
    </section>
  );
}
