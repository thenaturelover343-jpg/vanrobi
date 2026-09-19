import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = pageMeta({
  title: 'Bierkoelers & ijsbankkoelers kopen, Golderos catalogus | VanRobi',
  description:
    'Golderos ijsbankkoelers via VanRobi: Goldy, Picky, V100, V200, portable. Onder-bar en over-bar voor horeca en events in België & Nederland.',
  path: '/producten/',
});

export default function ProductenPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Assortiment"
          title={["Golderos-catalogus.", <em key="e">Via VanRobi.</em>]}
          lede={`${products.length} machines en componenten uit de officiële Golderos-lijn, gefilterd op gebruik. Specs en beelden voor installateurs, horeca en events.`}
        />
        <section className="page-section">
          <div className="wrap">
            <ProductCatalog />
          </div>
        </section>
        <section className="page-section page-section-alt">
          <div className="wrap prose">
            <h2>Hulp bij de keuze?</h2>
            <p>
              Lees onze gidsen:{" "}
              <a href={withBase("/gids/wat-is-een-ijsbankkoeler/")}>wat is een ijsbankkoeler</a>,{" "}
              <a href={withBase("/gids/bierkoeler-kopen-belgie-nederland/")}>bierkoeler kopen BE/NL</a>,{" "}
              <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>,{" "}
              <a href={withBase("/gids/goldy-vs-v100/")}>Goldy vs V100</a>.
              Bekijk ook de <a href={withBase("/faq/")}>FAQ</a> en{" "}
              <a href={withBase("/regio/")}>regio&apos;s</a>.
            </p>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
