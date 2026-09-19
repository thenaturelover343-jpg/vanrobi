import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { ServicesSticky } from "@/components/ServicesSticky";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = pageMeta({
  title: 'Diensten, Levering, advies & onderhoud | VanRobi',
  description:
    'VanRobi levert Golderos-machines met advies, plus onderhoud, reiniging en herstellingen via Taponderhoud. Koelgecertificeerd in de Kempen en wijde regio.',
  path: '/diensten/',
});

const services = [
  {
    n: "01",
    title: "Advies & selectie",
    text: "Welke Golderos-unit past bij uw bar, event of brouwerij? We matchen volume, ruimte, spiralen en debiet, zonder verkooppraatjes.",
  },
  {
    n: "02",
    title: "Levering BE & NL",
    text: "Officiële Golderos-distributie voor België en Nederland. Geen grijze import: juiste specs, garantie en opvolging.",
  },
  {
    n: "03",
    title: "Plaatsing & demontage",
    text: "Plaatsing en demontage van koelingen, afgestemd op uw taplijn en barmeubel. Netjes opgeleverd, klaar voor service.",
  },
  {
    n: "04",
    title: "Onderhoud & reiniging",
    text: "Periodiek onderhoud en reiniging van tapinstallaties, via Taponderhoud, koelgecertificeerd, vanuit de Kempen.",
  },
  {
    n: "05",
    title: "Herstellingen",
    text: "Storing aan compressor, roermotor of leidingwerk? Snelle diagnose en herstelling zodat de bar open blijft.",
  },
  {
    n: "06",
    title: "Regiodekking",
    text: contact.regions,
  },
];

export default function DienstenPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Diensten"
          title={["Van machine tot", <em key="e">onderhoud.</em>]}
          lede="VanRobi levert en adviseert Golderos-ijsbankkoelers. Onderhoud, reiniging en herstellingen gebeuren via Taponderhoud, met één lokaal team."
        />

        <section className="page-section">
          <div className="wrap">
            <ServicesSticky services={services} moreHref="/contact/" />
            <Reveal className="prose" style={{ marginTop: "3rem", maxWidth: "40rem" }}>
              <h2>Onderhoudspartner</h2>
              <p>
                Voor tapinstallatie-onderhoud, reiniging, herstellingen en
                plaatsing/demontage van koelingen werkt VanRobi samen met{" "}
                <a
                  href={contact.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.company}
                </a>{" "}
                ({contact.certified}). Zo combineert u industriële
                Golderos-machines met Belgische service.
              </p>
              <a className="text-link" href={withBase("/contact/")}>
                Plan een afspraak <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
