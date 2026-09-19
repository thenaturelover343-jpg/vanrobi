import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Over ons — VanRobi × Golderos",
  description:
    "VanRobi is de officiële Golderos-distributeur voor België en Nederland. Partnerschap met Spaanse fabrikant, onderhoud via Taponderhoud.",
};

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Over ons"
          title={["VanRobi ×", <em key="e">Golderos.</em>]}
          lede="Officieel distributiekanaal voor professionele ijsbankkoelers in België en Nederland — met lokale expertise in tap- en koeltechniek."
        />

        <section className="page-section">
          <div className="wrap prose-grid">
            <Reveal className="prose">
              <h2>Partnerschap</h2>
              <p>
                Golderos is de Spaanse fabrikant van professionele ijsbankkoelers —
                meer dan 50 jaar leiderschap in koudetechniek, ISO 9001. VanRobi
                is het officiële kanaal voor België en Nederland: selectie,
                advies en levering vanuit één aanspreekpunt.
              </p>
              <p>
                Geen grijze import. Wel heldere specs, betrouwbare levering en
                een lokale partner die de bar begrijpt — van vaste horeca tot
                festivalterrein.
              </p>
            </Reveal>
            <Reveal className="prose reveal-delay-1">
              <h2>Lokale expertise</h2>
              <p>
                VanRobi werkt samen met{" "}
                <a
                  href={contact.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.company}
                </a>{" "}
                voor onderhoud, reiniging, herstellingen en plaatsing van
                koelingen. Koelgecertificeerd, met basis in de Kempen en
                dekking in {contact.regions}.
              </p>
              <p>
                Zo combineert u industriële Golderos-machines met Belgische
                service: van eerste offerte tot jaarlijks onderhoud.
              </p>
              <a className="text-link" href={withBase("/diensten/")}>
                Bekijk diensten <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="page-section page-section-alt">
          <div className="wrap">
            <Reveal as="header" className="block-head">
              <p className="eyebrow">Feiten</p>
              <h2>
                Wat u van ons <em>mag verwachten</em>
              </h2>
            </Reveal>
            <div className="fact-grid">
              {[
                {
                  t: "Fabrikant",
                  d: "Golderos · Spanje · 50+ jaar",
                },
                {
                  t: "Distributeur",
                  d: "VanRobi · België & Nederland",
                },
                {
                  t: "Service",
                  d: `${contact.company} · koelgecertificeerd`,
                },
                {
                  t: "Basis",
                  d: contact.address.line,
                },
              ].map((f) => (
                <Reveal key={f.t} className="fact-card">
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
