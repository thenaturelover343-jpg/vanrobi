import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { experience } from "@/lib/experience";
import { useCompare } from "@/lib/compare";
import { getProduct } from "@/lib/products";
import { useLang } from "@/lib/i18n";
import { frCompareUi } from "@/lib/fr";

export function CompareBar() {
  const fr = useLang() === "fr";
  const [ready, setReady] = useState(false);
  const ids = useCompare((s) => s.ids);
  const clear = useCompare((s) => s.clear);
  const toggle = useCompare((s) => s.toggle);

  useEffect(() => setReady(true), []);

  if (!ready || !experience.compare || ids.length === 0) return null;

  return (
    <div className="compare-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-5 py-3 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
            {fr ? frCompareUi.compare : "Vergelijk"}
          </span>
          {ids.map((id) => {
            const p = getProduct(id);
            return (
              <button
                key={id}
                type="button"
                className="border border-ice/40 px-2 py-1 text-sm text-fg hover:border-ice"
                onClick={() => toggle(id)}
              >
                {p?.name ?? id} ×
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <button type="button" className="btn btn-ghost" onClick={clear}>
            {fr ? frCompareUi.clear : "Leeg"}
          </button>
          <Link to="/vergelijk" className="btn btn-ice">
            {fr ? frCompareUi.table : "Tabel"} {ids.length}
          </Link>
        </div>
      </div>
    </div>
  );
}
