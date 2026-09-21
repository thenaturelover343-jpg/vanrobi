import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { experience } from "@/lib/experience";
import { useCompare } from "@/lib/compare";
import { featuredProducts, getProduct, iceKgOf, flowOf, reservoirOf } from "@/lib/products";
import { offerteHref } from "@/lib/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/vergelijk")({
  head: () =>
    seoHead({
      title: "Machines vergelijken — VanRobi",
      description:
        "Vergelijk ijsbankkoelers side-by-side: ijsreserve, debiet en waterbad. Kies 2 of 3 machines in de catalogus.",
      path: "/vergelijk",
    }),
  component: ComparePage,
});

function ComparePage() {
  const ids = useCompare((s) => s.ids);
  const toggle = useCompare((s) => s.toggle);
  const selected = ids.map(getProduct).filter((p): p is NonNullable<typeof p> => !!p);
  const pool = featuredProducts.filter((p) => (p.group ?? "koelers") === "koelers" || p.featured);

  return (
    <PageShell>
      <PageHero
        kicker="Vergelijken"
        title="Twee of drie machines. Naast elkaar."
        lede="IJsreserve, debiet, waterbad. Selecteer in de catalogus of hieronder — daarna offerte voor het model dat past."
      />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {pool.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(p.id)}
              className={`min-h-10 border px-3 text-[0.68rem] tracking-[0.12em] uppercase ${
                ids.includes(p.id)
                  ? "border-ice bg-ice text-bg"
                  : "border-line text-muted hover:border-ice hover:text-ice"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {selected.length < 2 ? (
          <p className="mt-10 text-muted">Kies minstens twee machines om te vergelijken.</p>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-4 pr-4 font-medium text-muted">Specificatie</th>
                  {selected.map((p) => (
                    <th key={p.id} className="py-4 pr-4 font-display text-2xl font-normal">
                      <Link to="/producten/$id" params={{ id: p.id }} className="hover:text-ice">
                        {p.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Inzet", (p: (typeof selected)[0]) => p.badge],
                  ["IJsreserve", (p: (typeof selected)[0]) => (iceKgOf(p) ? `${iceKgOf(p)} kg` : "—")],
                  ["Debiet", (p: (typeof selected)[0]) => (flowOf(p) ? `${flowOf(p)} L/u` : "—")],
                  ["Waterbad", (p: (typeof selected)[0]) => (reservoirOf(p) ? `${reservoirOf(p)} L` : "—")],
                  ["Toepassing", (p: (typeof selected)[0]) => p.uses.join(" · ")],
                ].map(([label, fn]) => (
                  <tr key={String(label)} className="border-b border-line">
                    <th className="py-4 pr-4 font-medium text-muted">{label as string}</th>
                    {selected.map((p) => (
                      <td key={p.id} className="spec-num py-4 pr-4 text-lg">
                        {(fn as (p: (typeof selected)[0]) => string)(p)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="py-6 pr-4 font-medium text-muted">Offerte</th>
                  {selected.map((p) => (
                    <td key={p.id} className="py-6 pr-4">
                      <a href={offerteHref(p.name)} className="btn btn-ice">
                        {p.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {!experience.compare ? (
          <p className="mt-8 text-sm text-muted">Vergelijken staat uit. Zet experience.compare op true.</p>
        ) : null}
      </section>
      <CtaBand />
    </PageShell>
  );
}
