import { useEffect, useState } from "react";
import { COMPARE_MAX, useCompare } from "@/lib/compare";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { frCompareUi } from "@/lib/fr";

export function ProductCompareButton({ id, name }: { id: string; name: string }) {
  const fr = useLang() === "fr";
  const [ready, setReady] = useState(false);
  const ids = useCompare((state) => state.ids);
  const toggle = useCompare((state) => state.toggle);
  const selected = ids.includes(id);
  const full = !selected && ids.length >= COMPARE_MAX;

  useEffect(() => setReady(true), []);

  return (
    <button
      type="button"
      className={cn("btn btn-ghost product-compare-button", selected && "is-selected")}
      aria-pressed={selected}
      aria-label={
        selected
          ? fr
            ? `${frCompareUi.remove} ${name}`
            : `Verwijder ${name} uit vergelijking`
          : fr
            ? `${frCompareUi.add} ${name}`
            : `Vergelijk ${name}`
      }
      disabled={!ready || full}
      title={
        full
          ? fr
            ? `${frCompareUi.full} ${COMPARE_MAX}`
            : `U kunt maximaal ${COMPARE_MAX} producten vergelijken`
          : undefined
      }
      onClick={() => toggle(id)}
    >
      <span aria-hidden>{selected ? "✓" : "⇄"}</span>
      {selected
        ? fr
          ? frCompareUi.selected
          : "Geselecteerd"
        : fr
          ? frCompareUi.compare
          : "Vergelijk"}
    </button>
  );
}
