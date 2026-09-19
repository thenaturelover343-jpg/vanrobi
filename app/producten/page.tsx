import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Producten — Golderos catalogus | VanRobi",
  description:
    "Volledige Golderos-catalogus via VanRobi: ijsbankkoelers, portable units, roermotoren en meer. Filter op horeca, events, onder-bar of mobiel.",
};

export default function ProductenPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Assortiment"
          title={["Golderos-catalogus.", <em key="e">Via VanRobi.</em>]}
          lede={`${products.length} machines en componenten uit de officiële Golderos-lijn — gefilterd op gebruik. Specs en beelden voor installateurs, horeca en events.`}
        />
        <section className="page-section">
          <div className="wrap">
            <ProductCatalog />
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
