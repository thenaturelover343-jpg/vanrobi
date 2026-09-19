import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { faqPageSchema } from "@/lib/schema";
import { frFaq } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "FAQ, VanRobi",
  description:
    "FAQ VanRobi : distributeur officiel Golderos BE/NL, maintenance Taponderhoud, devis et livraison Pays-Bas.",
  path: "/fr/faq/",
  locale: "fr_BE",
});

export default function FrFaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(frFaq.items)} />
      <Header lang="fr" />
      <main id="main" lang="fr">
        <PageHero
          eyebrow={frFaq.eyebrow}
          title={["Réponses,", <em key="e">sans détour</em>]}
          lede={frFaq.lede}
        />
        <FaqBlock faqs={frFaq.items} title="Questions fréquentes" />
        <section className="page-section">
          <div className="wrap prose">
            <Reveal>
              <p>
                <a className="text-link" href={withBase("/fr/contact/")}>
                  Demander un devis <span aria-hidden="true">→</span>
                </a>
                {" · "}
                <a className="text-link" href={withBase("/faq/")}>
                  FAQ complète (NL)
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
