import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { getProduct } from "@/lib/products";
import { frFeaturedIds, frProductCopy, frProductsIntro } from "@/lib/fr";

export const Route = createFileRoute("/fr/produits/")({
  head: () => ({
    meta: [
      { title: "Produits — VanRobi" },
      { name: "description", content: frProductsIntro.lede },
    ],
  }),
  component: FrProduits,
});

function FrProduits() {
  const items = frFeaturedIds.map((id) => {
    const p = getProduct(id)!;
    const copy = frProductCopy[id];
    return { ...p, ...copy };
  });

  return (
    <PageShell>
      <PageHero kicker={frProductsIntro.eyebrow} title={frProductsIntro.title} lede={frProductsIntro.lede} />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Reveal key={p.id}>
              <a href={`/fr/produits/${p.id}`} className="block bg-bg p-6 transition-colors hover:bg-surface">
                <div className="photo-well bright aspect-[5/4] bg-fg">
                  <img src={p.image} alt={p.alt} />
                </div>
                <p className="kicker mt-5">{p.badge}</p>
                <h2 className="mt-2 text-3xl">{p.name}</h2>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <span className="mt-4 inline-block text-sm tracking-[0.12em] text-ice uppercase">Détails →</span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-10">
          <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase">
            Catalogue complet en néerlandais →
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
