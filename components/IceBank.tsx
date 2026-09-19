"use client";

import { useMemo, useState } from "react";

const STEPS = [
  {
    id: "ijs",
    n: "01",
    title: "Ijsbank",
    body: "Een stil reservoir houdt de koude vast. Geen pieken. Geen warme slok halverwege de shift.",
  },
  {
    id: "coil",
    n: "02",
    title: "Coil",
    body: "Bier loopt door het ijs, niet ernaast. Temperatuur daalt voordat het de kraan haalt.",
  },
  {
    id: "tap",
    n: "03",
    title: "Tap",
    body: "44 liter per uur op Goldy. Stabiel, ook als de bar volloopt.",
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

export function IceBank() {
  const [step, setStep] = useState<StepId>("ijs");

  const visual = useMemo(() => {
    if (step === "ijs") return { ice: 1, coil: 0.25, pour: 0.05 };
    if (step === "coil") return { ice: 0.82, coil: 1, pour: 0.2 };
    return { ice: 0.7, coil: 1, pour: 1 };
  }, [step]);

  return (
    <section className="icebank" id="ijsbank" aria-label="Hoe een ijsbankkoeler werkt">
      <div className="wrap icebank-inner">
        <div>
          <p className="icebank-kicker">Doorsnede</p>
          <h2>
            Koude die je <em>ziet</em> dalen.
          </h2>
          <p className="icebank-lede">
            Geen catalogusplaatje. Een ijsbank is een systeem: reserve, coil,
            kraan. Kies een laag.
          </p>
          <ul className="icebank-steps">
            {STEPS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  aria-pressed={step === s.id}
                  onClick={() => setStep(s.id)}
                >
                  <b>{s.n}</b>
                  <span>
                    <strong>{s.title}</strong>
                    <p>{s.body}</p>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="icebank-stage" aria-hidden="true">
          <svg viewBox="0 0 420 480" role="img">
            <defs>
              <linearGradient id="steel" x1="0" x2="1">
                <stop offset="0" stopColor="#8ea0ad" />
                <stop offset="0.5" stopColor="#d7e2ea" />
                <stop offset="1" stopColor="#6d7f8c" />
              </linearGradient>
              <linearGradient id="ice" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="#4aa8c8" />
                <stop offset="1" stopColor="#d7f6ff" />
              </linearGradient>
              <linearGradient id="beer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f3d084" />
                <stop offset="1" stopColor="#c9892a" />
              </linearGradient>
            </defs>

            <rect x="70" y="118" width="240" height="300" rx="10" fill="#101820" stroke="url(#steel)" strokeWidth="3" />
            <rect x="82" y="132" width="216" height="248" rx="6" fill="#0c141c" />

            <g className="ice-fill" style={{ transform: `scaleY(${visual.ice})`, opacity: 0.35 + visual.ice * 0.65 }}>
              <rect x="88" y="200" width="204" height="172" rx="4" fill="url(#ice)" />
              <circle cx="130" cy="250" r="16" fill="#e8fbff" opacity="0.45" />
              <circle cx="178" cy="268" r="22" fill="#c5f0ff" opacity="0.4" />
              <circle cx="236" cy="244" r="18" fill="#e8fbff" opacity="0.35" />
              <circle cx="150" cy="310" r="20" fill="#b6e9fb" opacity="0.38" />
              <circle cx="214" cy="318" r="14" fill="#e8fbff" opacity="0.32" />
            </g>

            <path
              className={visual.coil > 0.5 ? "coil-flow" : undefined}
              d="M108 220 C 150 200, 190 240, 230 218 S 300 210, 268 250 S 160 280, 120 300 S 250 320, 280 340"
              fill="none"
              stroke="#7ad4f0"
              strokeWidth="3"
              opacity={0.25 + visual.coil * 0.75}
            />

            <rect x="162" y="72" width="16" height="50" rx="3" fill="url(#steel)" />
            <rect x="202" y="72" width="16" height="50" rx="3" fill="url(#steel)" />
            <path d="M162 78 h28 v8 h-8 v18 h-12 z" fill="#c5d0d8" />
            <path d="M202 78 h28 v8 h-8 v18 h-12 z" fill="#c5d0d8" />

            <g className="tap-pour" style={{ opacity: visual.pour, transform: `scaleY(${0.15 + visual.pour * 0.85})` }}>
              <rect x="166" y="126" width="8" height="48" rx="3" fill="url(#beer)" />
              <rect x="206" y="126" width="8" height="48" rx="3" fill="url(#beer)" />
            </g>

            <text x="210" y="458" textAnchor="middle" fill="#7ad4f0" fontSize="11" letterSpacing="3">
              {step.toUpperCase()}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
