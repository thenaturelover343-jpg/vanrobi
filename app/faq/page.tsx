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
  title: "FAQ bierkoeler & ijsbankkoeler, VanRobi",
  description:
    "Veelgestelde vragen: ijsbank vs doorstroom, installatie België, festivals, Goldy vs V100, Golderos-verdeler BE/NL, onderhoud via taponderhoud.be.",
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
          lede="Officieel Golderos-kanaal, onderhoud via Taponderhoud, eerlijke levertijden. Staat uw vraag er niet bij, mail info@vanrobi.be."
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
                <a href={withBase("/gids/wat-is-een-ijsbankkoeler/")}>
                  Wat is een ijsbankkoeler? →
                </a>
                <br />
                <a href={withBase("/gids/bierkoeler-kopen-belgie-nederland/")}>
                  Bierkoeler kopen BE/NL →
                </a>
                <br />
                <a href={withBase("/gids/onder-bar-bierkoeler/")}>
                  Onder-bar bierkoeler →
                </a>
                <br />
                <a href={withBase("/gids/golderos-distributeur-belgie-nederland/")}>
                  Golderos distributeur →
                </a>
                <br />
                <a href={withBase("/regio/")}>Regio&apos;s →</a>
                <br />
                <a href={withBase("/producten/")}>Alle producten →</a>
              </p>
            </Reveal>
            <Reveal className="prose reveal-delay-1">
              <h2>Contact</h2>
              <p>
                Liever persoonlijk advies? Bel of mail. We antwoorden binnen één
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
