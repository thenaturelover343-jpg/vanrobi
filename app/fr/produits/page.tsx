import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { getProduct } from "@/lib/products";
import { frFeaturedIds, frProductCopy, frProductsIntro } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "Produits Golderos — VanRobi",
  description:
    "Goldy, V100, V200 et V100 portable — refroidisseurs Golderos via VanRobi, distributeur officiel Belgique & Pays-Bas.",
  path: "/fr/produits/",
  locale: "fr_BE",
});

export default function FrProduitsPage() {
  const items = frFeaturedIds.map((id) => {
    const p = getProduct(id)!;
    const copy = frProductCopy[id];
    return { ...p, ...copy };
  });

  return (
    <>
      <Header lang="fr" />
      <main id="main" lang="fr">
        <PageHero
          eyebrow={frProductsIntro.eyebrow}
          title={["Machines", <em key="e">Golderos</em>]}
          lede={frProductsIntro.lede}
        />
        <section className="page-section">
          <div className="wrap guide-index-grid">
            {items.map((p, i) => (
              <Reveal
                key={p.id}
                className={i % 2 ? "reveal-delay-1" : ""}
              >
                <a
                  className="guide-index-card"
                  href={withBase(`/fr/produits/${p.id}/`)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                      marginBottom: "1rem",
                      background: "var(--cream)",
                      borderRadius: "8px",
                    }}
                  />
                  <p className="eyebrow">{p.badge}</p>
                  <h2>{p.name}</h2>
                  <p>{p.description}</p>
                  <span className="text-link">
                    Détails <span aria-hidden="true">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="wrap" style={{ marginTop: "2.5rem" }}>
            <a className="text-link" href={withBase("/producten/")}>
              Catalogue complet en néerlandais <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
