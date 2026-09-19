"use client";

import { withBase } from "@/lib/base";

const LAYERS = [
  {
    id: "reserve",
    n: "01",
    title: "Reserve",
    body: "9 kg ijs. De bar merkt de piek niet.",
    img: "/assets/hero-editorial-tight.jpg",
    alt: "Goldy ijsbankkoeler, RVS, twee kranen",
  },
  {
    id: "bar",
    n: "02",
    title: "Bar",
    body: "Over-bar. Twee kranen. Geen theaterstuk, een werktuig.",
    img: "/assets/hero-cinematic.jpg",
    alt: "Ijsbankkoeler in donkere, cinematische setting",
  },
  {
    id: "shift",
    n: "03",
    title: "Shift",
    body: "Horeca die blijft tappen. Koude die de nacht uitzit.",
    img: "/assets/cats/bars.jpg",
    alt: "Barinterieur, horeca",
  },
] as const;

export function IceBank() {
  return (
    <section className="icebank icebank-photo" id="ijsbank" aria-label="Koude in beeld">
      <div className="wrap icebank-photo-head">
        <p className="icebank-kicker">In situ</p>
        <h2>
          Koude die je <em>ziet</em>.
        </h2>
        <p className="icebank-lede">
          Geen diagram. De machine, het licht, de bar.
        </p>
      </div>
      <div className="icebank-film">
        {LAYERS.map((layer) => (
          <figure key={layer.id} className="icebank-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase(layer.img)} alt={layer.alt} />
            <figcaption>
              <b>{layer.n}</b>
              <strong>{layer.title}</strong>
              <span>{layer.body}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
