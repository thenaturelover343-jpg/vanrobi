"use client";

import { withBase } from "@/lib/base";

const LAYERS = [
  {
    id: "bar",
    n: "01",
    title: "Bar",
    body: "De nacht, het hout, de tap. Koude hoort hier, niet op een witte achtergrond.",
    img: "/assets/cats/bars.jpg",
    alt: "Horecabar bij avond",
  },
  {
    id: "shift",
    n: "02",
    title: "Shift",
    body: "Horeca die blijft tappen tot sluit.",
    img: "/assets/cats/horeca.jpg",
    alt: "Horeca-service",
  },
  {
    id: "event",
    n: "03",
    title: "Event",
    body: "Volume op de vloer. Koude die meegaat.",
    img: "/assets/cats/events.jpg",
    alt: "Event en volume",
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
        <p className="icebank-lede">De bar. Niet de achterkant van een machine op wit.</p>
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
