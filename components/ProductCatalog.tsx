"use client";

import { useMemo, useState } from "react";
import {
  products,
  useLabels,
  groupLabels,
  type ProductUse,
  type ProductGroup,
} from "@/lib/products";
import { withBase } from "@/lib/base";
import { Reveal } from "./Reveal";

type FilterKey = "all" | ProductUse | ProductGroup;

const useFilters: Array<ProductUse | "all"> = [
  "all",
  "horeca",
  "events",
  "onder-bar",
  "mobiel",
];

const groupFilters: ProductGroup[] = [
  "koelers",
  "serpentijnen",
  "dispensing",
  "onderdelen",
  "service",
];

function labelFor(f: FilterKey): string {
  if (f === "all") return "Alles";
  if (f in useLabels) return useLabels[f as ProductUse];
  return groupLabels[f as ProductGroup];
}

export function ProductCatalog() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    if (active in useLabels) {
      return products.filter((p) => p.uses.includes(active as ProductUse));
    }
    return products.filter((p) => p.group === active);
  }, [active]);

  return (
    <div className="catalog">
      <div className="catalog-filters" role="tablist" aria-label="Filter op gebruik">
        {useFilters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={`filter-chip${active === f ? " is-active" : ""}`}
            onClick={() => setActive(f)}
          >
            {labelFor(f)}
          </button>
        ))}
      </div>
      <div
        className="catalog-filters catalog-filters-groups"
        role="tablist"
        aria-label="Filter op productgroep"
        style={{ marginTop: "0.75rem" }}
      >
        {groupFilters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={`filter-chip${active === f ? " is-active" : ""}`}
            onClick={() => setActive(f)}
          >
            {labelFor(f)}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filtered.map((p) => (
          <Reveal as="article" key={p.id} className="catalog-card">
            <a href={withBase(`/producten/${p.id}/`)} className="catalog-card-link">
              <div
                className={`catalog-card-media ${p.cropClass}${
                  p.imageKind === "diagram" ? " is-diagram" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                />
                {p.imageKind === "diagram" ? (
                  <span className="diagram-badge">Technische tekening</span>
                ) : null}
              </div>
              <div className="catalog-card-body">
                <span className="prod-index">{p.index}</span>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <ul className="catalog-tags">
                  {p.group ? <li>{groupLabels[p.group]}</li> : null}
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
        <p className="catalog-empty">Geen producten in deze categorie.</p>
      ) : null}
    </div>
  );
}
