import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { generalFaqs } from "@/lib/faq";
import { faqPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";

export const metadata: Metadata = pageMeta({
  title: "Veelgestelde vragen — VanRobi",
  description:
    "FAQ over VanRobi als Golderos-verdeler BE/NL, onderhoud via taponderhoud.be, offertes, levertijden en het verschil tussen V100 en V200.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(generalFaqs)} />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="FAQ"
          title={["Antwoorden,", <em key="e">zonder omwegen</em>]}
          lede="Officieel Golderos-kanaal, onderhoud via Taponderhoud, eerlijke levertijden. Staat uw vraag er niet bij — mail info@vanrobi.be."
        />
        <FaqBlock faqs={generalFaqs} title="Veelgestelde vragen" />
        <section className="page-section">
          <div className="wrap prose-grid">
            <Reveal className="prose">
              <h2>Verder lezen</h2>
              <p>
                Vergelijk machines in onze gidsen, of ga meteen naar de catalogus.
              </p>
              <p>
                <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200 →</a>
                <br />
                <a href={withBase("/gids/bierkoeler-voor-events/")}>
                  Bierkoeler voor events →
                </a>
                <br />
                <a href={withBase("/gids/golderos-vs-gamko/")}>
                  Golderos vs Gamko →
                </a>
                <br />
                <a href={withBase("/producten/")}>Alle producten →</a>
              </p>
            </Reveal>
            <Reveal className="prose reveal-delay-1">
              <h2>Contact</h2>
              <p>
                Liever persoonlijk advies? Bel of mail — we antwoorden binnen één
                werkdag.
              </p>
              <p>
                <a href={withBase("/contact/")}>Offerte aanvragen →</a>
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
