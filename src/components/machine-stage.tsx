import { Link } from "@tanstack/react-router";
import {
  featuredProducts,
  growFromIce,
  iceKgOf,
  products,
  type Product,
} from "@/lib/products";
import { useCold } from "@/lib/cold";
import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";
import { offerteHref } from "@/lib/site";

export function MachineStage() {
  const machineId = useCold((s) => s.machineId);
  const setMachine = useCold((s) => s.setMachine);
  const setGrow = useCold((s) => s.setGrow);
  const setTemp = useCold((s) => s.setTemp);
  const active =
    featuredProducts.find((p) => p.id === machineId) ?? featuredProducts[0];

  const select = (p: Product) => {
    setMachine(p.id);
    setGrow(growFromIce(iceKgOf(p)));
    setTemp(Math.max(-1.8, 4 - (iceKgOf(p) ?? 0) * 0.08));
  };

  return (
    <section id="producten" className="border-t border-line px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1220px]">
        <Reveal>
          <p className="kicker">Assortiment</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">
            Acht machines.
            <em className="italic text-ice"> Eén standaard.</em>
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            Ontdek hier acht geselecteerde ijsbankkoelers. De volledige catalogus telt {products.length} producten, inclusief koelers, serpentijnen, tapmateriaal en onderdelen.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {featuredProducts.map((p, position) => (
            <button
              key={p.id}
              type="button"
              onClick={() => select(p)}
              className={cn(
                "min-h-11 border px-4 py-2 text-[0.7rem] tracking-[0.14em] uppercase transition-colors",
                p.id === active.id
                  ? "border-ice bg-ice text-bg"
                  : "border-line text-muted hover:border-ice hover:text-ice",
              )}
            >
              {String(position + 1).padStart(2, "0")} {p.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="photo-well aspect-[5/4]">
            <img key={active.id} src={active.image} alt={active.alt} width={1200} height={960} />
          </div>
          <div>
            <p className="kicker">{active.badge}</p>
            <h3 className="mt-3 text-5xl">{active.name}</h3>
            <p className="mt-4 text-muted">{active.description}</p>
            <ul className="mt-8 space-y-3">
              {active.specs.map((s) => (
                <li
                  key={s.label}
                  className="flex justify-between gap-4 border-b border-line pb-3 text-sm"
                >
                  <span className="text-muted">{s.label}</span>
                  <strong className="spec-num font-medium">{s.value}</strong>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/producten/$id" params={{ id: active.id }} className="btn btn-ghost">
                Bekijk {active.name}
              </Link>
              <a href={offerteHref(active.name)} className="btn btn-ice">
                Offerte voor {active.name}
              </a>
            </div>
            <p className="mt-6">
              <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase">
                Volledige catalogus →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
