import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { getProduct } from "@/lib/products";
import { websiteSchema } from "@/lib/schema";
import { contact } from "@/lib/contact";
import { frHome, frFeaturedIds, frProductCopy } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "VanRobi — Distributeur officiel Golderos Belgique & Pays-Bas",
  description:
    "VanRobi, distributeur officiel Golderos pour la Belgique et les Pays-Bas. Refroidisseurs Goldy, V100, V200 pour Horeca et events.",
  path: "/fr/",
  locale: "fr_BE",
});

export default function FrHomePage() {
  const products = frFeaturedIds
    .map((id) => {
      const p = getProduct(id);
      const copy = frProductCopy[id];
      if (!p || !copy) return null;
      return { ...p, ...copy };
    })
    .filter(Boolean);

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Header lang="fr" />
      <main id="main" lang="fr">
        <section className="page-hero page-hero-light">
          <div className="wrap page-hero-inner">
            <p className="eyebrow">{frHome.eyebrow}</p>
            <h1 className="page-hero-title">
              Refroidissement <em>à la hauteur</em> du service
            </h1>
            <p className="page-hero-lede">{frHome.lede}</p>
            <div className="hero-actions" style={{ marginTop: "1.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <MagneticButton
                className="btn btn-ink btn-lg magnetic"
                href={withBase("/fr/contact/")}
              >
                <span className="magnetic-label">{frHome.cta}</span>
              </MagneticButton>
              <a className="btn btn-ghost-ink" href={withBase("/fr/produits/")}>
                {frHome.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="wrap">
            <header className="block-head">
              <p className="eyebrow">Produits phares</p>
              <h2>
                Quatre machines <em>essentielles</em>
              </h2>
            </header>
            <div className="related-grid">
              {products.map((p) =>
                p ? (
                  <a
                    key={p.id}
                    className="related-card"
                    href={withBase(`/fr/produits/${p.id}/`)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.alt} width={400} height={400} />
                    <div>
                      <strong>{p.name}</strong>
                      <span>{p.badge}</span>
                    </div>
                  </a>
                ) : null
              )}
            </div>
            <p style={{ marginTop: "2rem" }}>
              <a className="text-link" href={withBase("/producten/")}>
                Catalogue complet (NL) <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </section>

        <section className="page-section page-section-alt">
          <div className="wrap">
            <header className="block-head">
              <p className="eyebrow">{frHome.whyTitle}</p>
              <h2>
                Un partenaire <em>local</em>
              </h2>
            </header>
            <div className="prose-grid">
              {frHome.why.map((w, i) => (
                <Reveal
                  key={w.n}
                  className={i % 2 ? "reveal-delay-1" : ""}
                >
                  <p className="eyebrow">{w.n}</p>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.65rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                    {w.title}
                  </h3>
                  <p className="muted">{w.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="wrap prose">
            <h2>Contact</h2>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {" · "}
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
              <br />
              {contact.address.line}
            </p>
            <p>
              <a className="text-link" href={withBase("/fr/contact/")}>
                Page contact <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
