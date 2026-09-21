import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { experience } from "@/lib/experience";

type Place = "vast" | "overbar" | "mobiel" | "";
type Volume = "klein" | "midden" | "groot" | "";

function advise(place: Place, volume: Volume) {
  if (!place || !volume) return null;
  if (place === "mobiel" || place === "overbar") {
    if (volume === "klein") return { id: "picky", name: "Picky", why: "Ultracompact over-bar, pop-ups en foodtrucks." };
    return { id: "goldy", name: "Goldy", why: "Over-bar werkpaard voor events en craftbars." };
  }
  if (volume === "groot") return { id: "v200", name: "V200", why: "Hoog volume onder-bar, piekuren en twee kranen." };
  if (volume === "midden") return { id: "v100", name: "V100", why: "Vaste horeca, stabiel debiet, uit het zicht." };
  return { id: "v100", name: "V100", why: "Startpunt voor vaste bars — we toetsen piek en meubel in de offerte." };
}

export function Sizer() {
  const [place, setPlace] = useState<Place>("");
  const [volume, setVolume] = useState<Volume>("");
  const result = useMemo(() => advise(place, volume), [place, volume]);

  if (!experience.sizer) return null;

  const chip = (active: boolean) =>
    `min-h-10 border px-3 text-[0.68rem] tracking-[0.12em] uppercase ${
      active ? "border-ice bg-ice text-bg" : "border-line text-muted hover:border-ice hover:text-ice"
    }`;

  return (
    <aside className="border border-line bg-surface p-6 md:p-8">
      <p className="kicker">Dimensioneerhulp</p>
      <h3 className="mt-3 text-2xl">Welke machine past?</h3>
      <p className="mt-2 text-sm text-muted">Twee keuzes. Daarna een gericht startpunt — geen catalogusromantiek.</p>

      <p className="mt-6 text-[0.68rem] tracking-[0.16em] text-muted uppercase">Opstelling</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {(
          [
            ["vast", "Vast / onder-bar"],
            ["overbar", "Over-bar"],
            ["mobiel", "Mobiel / events"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className={chip(place === id)} onClick={() => setPlace(id)}>
            {label}
          </button>
        ))}
      </div>

      <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-muted uppercase">Piek</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {(
          [
            ["klein", "Tot ±50 L/u"],
            ["midden", "±50–120 L/u"],
            ["groot", "120 L/u of meer"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className={chip(volume === id)} onClick={() => setVolume(id)}>
            {label}
          </button>
        ))}
      </div>

      {result ? (
        <div className="mt-6 border-t border-line pt-5">
          <p className="text-sm text-muted">Startpunt</p>
          <p className="mt-1 font-display text-3xl text-ice">{result.name}</p>
          <p className="mt-2 text-sm text-muted">{result.why}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/producten/$id" params={{ id: result.id }} className="btn btn-ghost">
              Bekijk {result.name}
            </Link>
            <a href={`/contact?model=${encodeURIComponent(result.name)}`} className="btn btn-ice">
              Offerte {result.name}
            </a>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
