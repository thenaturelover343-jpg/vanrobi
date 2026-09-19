"use client";

import { useMemo, useState } from "react";
import { products, useLabels, type ProductUse } from "@/lib/products";
import { withBase } from "@/lib/base";
import { Reveal } from "./Reveal";

const filters: Array<ProductUse | "all"> = [
  "all",
  "horeca",
  "events",
  "onder-bar",
  "mobiel",
];

export function ProductCatalog() {
  const [active, setActive] = useState<ProductUse | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.uses.includes(active));
  }, [active]);

  return (
    <div className="catalog">
      <div className="catalog-filters" role="tablist" aria-label="Filter op gebruik">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={`filter-chip${active === f ? " is-active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f === "all" ? "Alles" : useLabels[f]}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filtered.map((p) => (
          <Reveal as="article" key={p.id} className="catalog-card">
            <a href={withBase(`/producten/${p.id}/`)} className="catalog-card-link">
              <div className={`catalog-card-media ${p.cropClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="catalog-card-body">
                <span className="prod-index">{p.index}</span>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <ul className="catalog-tags">
                  {p.uses.map((u) => (
                    <li key={u}>{useLabels[u]}</li>
                  ))}
                </ul>
                <span className="text-link">
                  Details <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="catalog-empty">Geen machines in deze categorie.</p>
      ) : null}
    </div>
  );
}
