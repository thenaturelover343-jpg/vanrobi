import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { experience } from "@/lib/experience";
import { useCold } from "@/lib/cold";
import { flowOf, getProduct, growFromIce, iceKgOf, type Product } from "@/lib/products";
import { withBase } from "@/lib/base";

type Place = "onderbar" | "overbar" | "mobiel";

const PLACE_OPTIONS: { id: Place; label: string; formValue: string }[] = [
  { id: "onderbar", label: "Onder-bar", formValue: "Vast / onder-bar" },
  { id: "overbar", label: "Over-bar", formValue: "Over-bar" },
  { id: "mobiel", label: "Mobiel", formValue: "Mobiel / events" },
];

const MODEL_IDS: Record<Place, string[]> = {
  onderbar: ["v100", "v200", "v300", "v500"],
  overbar: ["picky", "goldy"],
  mobiel: ["v100-portable", "v200-portable"],
};

function modelsFor(place: Place): Product[] {
  return MODEL_IDS[place]
    .map((id) => getProduct(id))
    .filter((product): product is Product => Boolean(product))
    .sort((a, b) => (flowOf(a) ?? 0) - (flowOf(b) ?? 0));
}

function recommend(place: Place, peak: number): Product {
  const models = modelsFor(place);
  return models.find((product) => (flowOf(product) ?? 0) >= peak) ?? models[models.length - 1];
}

function spec(product: Product, label: string) {
  return (
    product.specs.find((item) => item.label.toLowerCase().includes(label))?.value ?? "Op aanvraag"
  );
}

export function Sizer() {
  const [place, setPlace] = useState<Place>("onderbar");
  const [peak, setPeak] = useState(80);
  const setMachine = useCold((state) => state.setMachine);
  const setGrow = useCold((state) => state.setGrow);
  const setTemp = useCold((state) => state.setTemp);
  const models = useMemo(() => modelsFor(place), [place]);
  const maxPeak = flowOf(models[models.length - 1]) ?? 280;
  const minPeak = place === "overbar" ? 10 : 20;
  const result = useMemo(() => recommend(place, peak), [place, peak]);
  const iceKg = iceKgOf(result) ?? 0;
  const flow = flowOf(result) ?? 0;
  const fill = Math.round(24 + growFromIce(iceKg) * 70);

  useEffect(() => {
    setMachine(result.id);
    setGrow(growFromIce(iceKg));
    setTemp(Math.max(-1.8, 4 - iceKg * 0.08));
  }, [iceKg, result.id, setGrow, setMachine, setTemp]);

  if (!experience.sizer) return null;

  const selectPlace = (next: Place) => {
    const nextModels = modelsFor(next);
    const nextMax = flowOf(nextModels[nextModels.length - 1]) ?? peak;
    const nextMin = next === "overbar" ? 10 : 20;
    setPlace(next);
    setPeak((current) => Math.min(nextMax, Math.max(nextMin, current)));
  };

  const query = new URLSearchParams({
    model: result.name,
    peak: `${peak} L/u`,
    install: PLACE_OPTIONS.find((option) => option.id === place)?.formValue ?? "",
  });

  return (
    <aside className="border border-line bg-surface p-6 md:p-8">
      <p className="kicker">Dimensioneerhulp</p>
      <h3 className="mt-3 text-3xl">Vind uw machine.</h3>
      <p className="mt-3 text-sm text-muted">
        Kies de opstelling en schuif naar uw piekvolume. Het advies en de ijsbank reageren meteen.
      </p>

      <fieldset className="mt-7">
        <legend className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
          1 · Opstelling
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {PLACE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={place === option.id}
              onClick={() => selectPlace(option.id)}
              className={`min-h-11 border px-2 text-[0.64rem] tracking-[0.1em] uppercase transition-colors ${
                place === option.id
                  ? "border-ice bg-ice text-bg"
                  : "border-line text-muted hover:border-ice hover:text-ice"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-7">
        <div className="flex items-end justify-between gap-4">
          <label
            htmlFor="peak-volume"
            className="text-[0.68rem] tracking-[0.16em] text-muted uppercase"
          >
            2 · Piekvolume
          </label>
          <output htmlFor="peak-volume" className="spec-num font-display text-3xl text-ice">
            {peak} <span className="text-base">L/u</span>
          </output>
        </div>
        <input
          id="peak-volume"
          type="range"
          min={minPeak}
          max={maxPeak}
          step="1"
          value={peak}
          onChange={(event) => setPeak(Number(event.target.value))}
          className="sizer-range mt-4 w-full"
          aria-label="Piekvolume in liter per uur"
        />
        <div className="mt-2 flex justify-between text-[0.62rem] tracking-[0.12em] text-muted uppercase">
          <span>{minPeak} L/u</span>
          <span>{maxPeak} L/u</span>
        </div>
      </div>

      <div className="mt-7 overflow-hidden border border-line bg-bg">
        <div
          className="relative h-44 border-b border-line"
          aria-label={`IJsbankvisualisatie: ${iceKg} kilogram ijsreserve`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(122,212,240,0.2),transparent_62%)]" />
          <div className="ice-tank absolute inset-x-[18%] bottom-4 h-32 overflow-hidden border border-ice/40">
            <div
              className="ice-fill absolute inset-x-0 bottom-0"
              style={{ "--ice-fill": `${fill}%` } as CSSProperties}
            >
              <i className="ice-bubble ice-bubble-one" />
              <i className="ice-bubble ice-bubble-two" />
              <i className="ice-bubble ice-bubble-three" />
            </div>
            <div className="absolute inset-x-3 top-3 flex justify-between text-[0.56rem] tracking-[0.12em] text-ice/80 uppercase">
              <span>IJsbank</span>
              <span>{iceKg} kg</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                Advies voor {peak} L/u
              </p>
              <p className="mt-1 font-display text-4xl text-ice">{result.name}</p>
            </div>
            <span className="border border-ice/40 px-2 py-1 text-[0.6rem] tracking-[0.12em] text-ice uppercase">
              {result.badge}
            </span>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-px bg-line">
            {[
              ["IJsreserve", `${iceKg} kg`],
              ["Debiet", `${flow} L/u`],
              ["Afmetingen", spec(result, "afmetingen")],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 bg-surface p-3">
                <dt className="text-[0.55rem] tracking-[0.12em] text-muted uppercase">{label}</dt>
                <dd className="spec-num mt-1 break-words text-xs text-fg">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={withBase(`/contact?${query.toString()}`)} className="btn btn-ice">
              Offerte voor {result.name}
            </a>
            <Link to="/producten/$id" params={{ id: result.id }} className="btn btn-ghost">
              Bekijk specs
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
