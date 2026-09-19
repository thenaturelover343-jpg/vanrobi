import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { JsonLd } from "@/components/JsonLd";
import { getProduct } from "@/lib/products";
import { withBase } from "@/lib/base";
import { offerteMailto, contact } from "@/lib/contact";
import { productSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";
import { frFeaturedIds, frProductCopy } from "@/lib/fr";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return frFeaturedIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  const copy = frProductCopy[id];
  if (!p || !copy) return { title: "Produit | VanRobi" };
  return pageMeta({
    title: `${p.name}, Golderos via VanRobi`,
    description: copy.description,
    path: `/fr/produits/${id}/`,
    locale: "fr_BE",
  });
}

export default async function FrProductPage({ params }: Props) {
  const { id } = await params;
  if (!(frFeaturedIds as readonly string[]).includes(id)) notFound();
  const p = getProduct(id);
  const copy = frProductCopy[id];
  if (!p || !copy) notFound();

  return (
    <>
      <JsonLd data={productSchema(p)} />
      <Header lang="fr" />
      <main id="main" lang="fr">
        <section className="product-detail">
          <div className="wrap product-detail-grid">
            <Reveal className="product-detail-visual">
              <div
                className={`prod-frame ${p.cropClass}${
                  p.imageKind === "diagram" ? " is-diagram" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1300}
                  height={1300}
                  className="img-shimmer is-loaded"
                />
              </div>
              <span className="prod-badge">{copy.badge}</span>
              {p.imageKind === "diagram" ? (
                <span className="diagram-badge">Schéma technique</span>
              ) : null}
            </Reveal>
            <Reveal className="product-detail-copy reveal-delay-1">
              <p className="eyebrow">Golderos · via VanRobi</p>
              <h1>{p.name}</h1>
              <p className="product-detail-lede">{copy.longDescription}</p>
              <ul className="prod-specs">
                {p.specs.map((s) => (
                  <li key={s.label}>
                    <span>{s.label}</span>
                    <strong>{s.value}</strong>
                  </li>
                ))}
              </ul>
              <div className="product-detail-actions">
                <MagneticButton
                  className="btn btn-ink btn-lg magnetic"
                  href={offerteMailto(p.name)}
                >
                  <span className="magnetic-label">Devis pour {p.name}</span>
                </MagneticButton>
                <a className="btn btn-ghost-ink" href={`tel:${contact.phoneTel}`}>
                  Appeler {contact.phone}
                </a>
              </div>
              <p className="cta-note">
                Ou{" "}
                <a href={withBase("/fr/contact/")}>page contact</a>
                {" · "}
                <a href={withBase(`/producten/${p.id}/`)}>Fiche NL</a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
