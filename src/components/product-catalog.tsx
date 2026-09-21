import { useEffect, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  products,
  useLabels,
  groupLabels,
  iceKgOf,
  flowOf,
  type ProductUse,
  type ProductGroup,
} from "@/lib/products";
import { cn } from "@/lib/cn";
import { experience } from "@/lib/experience";
import { useCompare, COMPARE_MAX } from "@/lib/compare";
import { OptimizedImage } from "./optimized-image";

type FilterKey = "all" | ProductUse | ProductGroup;

const useFilters: Array<ProductUse | "all"> = ["all", "horeca", "events", "onder-bar", "mobiel"];

const groupFilters: ProductGroup[] = [
  "koelers",
  "serpentijnen",
  "dispensing",
  "onderdelen",
  "service",
];

function labelFor(f: FilterKey) {
  if (f === "all") return "Alles";
  if (f in useLabels) return useLabels[f as ProductUse];
  return groupLabels[f as ProductGroup];
}

export function ProductCatalog() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [active, setActive] = useState<FilterKey>("all");
  const ids = useCompare((s) => s.ids);
  const toggle = useCompare((s) => s.toggle);

  useEffect(() => {
    const raw = (hash || "").replace(/^#/, "") as FilterKey;
    const allowed: FilterKey[] = ["all", ...useFilters.slice(1), ...groupFilters];
    if (raw && allowed.includes(raw)) setActive(raw);
  }, [hash]);

  const selectFilter = (f: FilterKey) => {
    setActive(f);
    const next =
      f === "all" || useFilters.includes(f as ProductUse | "all")
        ? "/producten"
        : `/producten#${f}`;
    window.history.replaceState(null, "", next);
  };

  const filtered = useMemo(() => {
    if (active === "all") return products;
    if (active in useLabels) {
      return products.filter((p) => p.uses.includes(active as ProductUse));
    }
    return products.filter((p) => p.group === active);
  }, [active]);

  const chip = (f: FilterKey) => (
    <button
      key={f}
      type="button"
      aria-pressed={active === f}
      className={cn(
        "min-h-10 border px-3 text-[0.68rem] tracking-[0.14em] uppercase",
        active === f
          ? "border-ice bg-ice text-bg"
          : "border-line text-muted hover:border-ice hover:text-ice",
      )}
      onClick={() => selectFilter(f)}
    >
      {labelFor(f)}
    </button>
  );

  return (
    <div>
      <div className="sticky top-[3.75rem] z-20 -mx-5 border-b border-line bg-bg/95 px-5 py-3 backdrop-blur-md md:-mx-8 md:px-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter op gebruik">
          {useFilters.map((f) => chip(f))}
        </div>
        <div
          className="mt-2 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter op productgroep"
        >
          {groupFilters.map((f) => chip(f))}
        </div>
      </div>
      <p className="mt-6 text-sm text-muted">
        {filtered.length} {filtered.length === 1 ? "product" : "producten"}
        {active !== "all" ? ` · ${labelFor(active)}` : " in de catalogus"}
        {experience.compare ? " · max. 3 vergelijken" : ""}
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => {
          const ice = iceKgOf(p);
          const flow = flowOf(p);
          const on = ids.includes(p.id);
          return (
            <article key={p.id} className="product-card group">
              <Link to="/producten/$id" params={{ id: p.id }} className="block">
                <div
                  className={cn(
                    "product-visual relative aspect-[5/4] overflow-hidden",
                    p.imageKind === "diagram" ? "is-diagram" : "",
                  )}
                >
                  <OptimizedImage
                    src={p.image}
                    alt={p.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className={cn(
                      "h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]",
                      p.imageKind === "diagram" ? "mix-blend-multiply" : "p-3",
                    )}
                  />
                  {p.imageKind === "diagram" ? (
                    <span className="absolute top-3 left-3 bg-bg/90 px-2 py-1 text-[0.58rem] tracking-[0.14em] text-ice uppercase">
                      Technische tekening
                    </span>
                  ) : null}
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-xl">
                    <Link to="/producten/$id" params={{ id: p.id }} className="hover:text-ice">
                      {p.name}
                    </Link>
                  </h2>
                  <span className="spec-num text-xs text-muted">{p.index}</span>
                </div>
                <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-ice uppercase">
                  {p.badge}
                </p>
                {ice || flow ? (
                  <p className="spec-num mt-3 text-sm text-fg">
                    {ice ? `${ice} kg ijs` : null}
                    {ice && flow ? " · " : null}
                    {flow ? `${flow} L/u` : null}
                  </p>
                ) : (
                  <p className="mt-3 text-xs tracking-[0.12em] text-muted uppercase">
                    {p.group ? groupLabels[p.group] : "Assortiment"}
                  </p>
                )}
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.uses.slice(0, 3).map((u) => (
                    <li key={u} className="tag-chip text-[0.58rem] tracking-[0.1em] uppercase">
                      {useLabels[u]}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to="/producten/$id"
                    params={{ id: p.id }}
                    className="btn btn-ghost !min-h-9 !px-3"
                  >
                    Details
                  </Link>
                  {experience.compare ? (
                    <button
                      type="button"
                      className={cn("btn !min-h-9 !px-3", on ? "btn-ice" : "btn-ghost")}
                      disabled={!on && ids.length >= COMPARE_MAX}
                      onClick={() => toggle(p.id)}
                    >
                      {on ? "Gekozen" : "Vergelijk"}
                    </button>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-muted">Geen producten in deze categorie.</p>
      ) : null}
    </div>
  );
}
