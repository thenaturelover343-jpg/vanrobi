import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import {
  products,
  getProduct,
  useLabels,
  featuredProducts,
} from "@/lib/products";
import { withBase } from "@/lib/base";
import { offerteMailto, contact } from "@/lib/contact";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) return { title: "Product — VanRobi" };
  return {
    title: `${p.name} — Golderos via VanRobi`,
    description: p.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();

  const others = featuredProducts.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <>
      <Header />
      <main id="main">
        <section className="product-detail">
          <div className="wrap product-detail-grid">
            <Reveal className="product-detail-visual">
              <div className={`prod-frame ${p.cropClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1300}
                  height={1300}
                  className="img-shimmer is-loaded"
                />
              </div>
              <span className="prod-badge">{p.badge}</span>
            </Reveal>

            <Reveal className="product-detail-copy reveal-delay-1">
              <p className="eyebrow">
                {p.index} · Golderos · via VanRobi
              </p>
              <h1>{p.name}</h1>
              <p className="product-detail-lede">{p.longDescription}</p>
              <ul className="catalog-tags">
                {p.uses.map((u) => (
                  <li key={u}>{useLabels[u]}</li>
                ))}
              </ul>
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
                  <span className="magnetic-label">Offerte voor {p.name}</span>
                </MagneticButton>
                <a className="btn btn-ghost-ink" href={`tel:${contact.phoneTel}`}>
                  Bel {contact.phone}
                </a>
              </div>
              <p className="cta-note">
                Of vul het{" "}
                <a href={withBase("/contact/")}>contactformulier</a> in.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="page-section page-section-alt">
          <div className="wrap">
            <header className="block-head">
              <p className="eyebrow">Meer machines</p>
              <h2>
                Ook in het <em>assortiment</em>
              </h2>
            </header>
            <div className="related-grid">
              {others.map((o) => (
                <a
                  key={o.id}
                  className="related-card"
                  href={withBase(`/producten/${o.id}/`)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.image} alt={o.alt} width={400} height={400} />
                  <div>
                    <strong>{o.name}</strong>
                    <span>{o.badge}</span>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ marginTop: "2rem" }}>
              <a className="text-link" href={withBase("/producten/")}>
                Volledige catalogus <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
