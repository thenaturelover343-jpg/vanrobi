import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = metaFromEntry(pageSeo.regio);

const regions = [
  {
    name: "Antwerpen",
    text: "Van stad tot Kempen: restaurants, cafés en eventlocaties. Snelle opvolging vanuit Kasterlee, advies, levering en doorverwijzing naar Taponderhoud voor plaatsing.",
  },
  {
    name: "Limburg",
    text: "Horeca en festivals in Limburg, dimensionering op volume, plus onderhoudspartner dichtbij via het Kempen-netwerk.",
  },
  {
    name: "Vlaams-Brabant",
    text: "Bars en restaurants rond Leuven en de rand, onder-bar (V100/V200) of over-bar (Goldy) afgestemd op meubel en piekuren.",
  },
  {
    name: "Brussel",
    text: "Tweetalige horeca en events in Brussel. FR-hub beschikbaar (/fr/); NL-catalogus volledig. Officieel Golderos-kanaal, geen grijze import.",
  },
  {
    name: "Oost-Vlaanderen",
    text: "Gent en omstreken: vaste installaties en portable units voor events. Levering en selectieadvies vanuit de Kempen.",
  },
  {
    name: "Nederland",
    text: "Officieel Golderos-kanaal voor NL. Levering en advies landelijk, mail of bel voor planning, levertijd en modelkeuze.",
  },
];

const regioFaqs = [
  {
    question: "Leveren jullie in heel België?",
    answer:
      "Ja. VanRobi adviseert en levert Golderos-ijsbankkoelers in Vlaanderen en Brussel, met basis in Kasterlee (Tielen). Regiodekking via Antwerpen, Limburg, Vlaams-Brabant, Brussel en Oost-Vlaanderen, plus projecten elders op aanvraag.",
  },
  {
    question: "Werken jullie ook in Nederland?",
    answer:
      "Ja. VanRobi is het officiële Golderos-kanaal voor Nederland én België. Levering en advies landelijk.",
  },
  {
    question: "Waar is VanRobi gevestigd?",
    answer:
      "Kemelbeekstraat 16, 2460 Kasterlee (Tielen). Telefoon +32 (0)14 71 80 80 · info@vanrobi.be.",
  },
];

const capsules = [
  {
    q: "Leveren jullie in heel België?",
    a: "Ja. VanRobi adviseert en levert Golderos-ijsbankkoelers in Vlaanderen en Brussel, met basis in Kasterlee (Tielen). Regiodekking via Antwerpen, Limburg, Vlaams-Brabant, Brussel en Oost-Vlaanderen, plus projecten elders op aanvraag.",
  },
  {
    q: "Werken jullie ook in Nederland?",
    a: "Ja. VanRobi is het officiële Golderos-kanaal voor Nederland én België. Levering en advies landelijk; onderhoud en reiniging van taplijnen via partner Taponderhoud waar van toepassing.",
  },
  {
    q: "Waarom vanuit de Kempen?",
    a: "Korte lijnen naar Vlaamse horeca, evenementen en installateurs. Adres: Kemelbeekstraat 16, 2460 Kasterlee (Tielen). Telefoon +32 (0)14 71 80 80 · info@vanrobi.be.",
  },
  {
    q: "Plaatsing en onderhoud lokaal?",
    a: "Machines en selectie via VanRobi. Plaatsing, demontage, reiniging en herstellingen via Taponderhoud (koelgecertificeerd), zodat de taplijn na aankoop professioneel opgevolgd blijft.",
  },
];

export default function RegioPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(regioFaqs)} />
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Regio's"
          title={["Dichtbij in de", <em key="e">Benelux</em>]}
          lede={`Basis in de Kempen (${contact.address.line}). Levering en advies in Vlaanderen én Nederland als officieel Golderos-kanaal.`}
        />
        <section className="page-section">
          <div className="wrap">
            <div className="service-grid">
              {regions.map((r, i) => (
                <Reveal
                  key={r.name}
                  className={
                    i % 3 === 1
                      ? "service-card reveal-delay-1"
                      : i % 3 === 2
                        ? "service-card reveal-delay-2"
                        : "service-card"
                  }
                >
                  <span className="service-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2>{r.name}</h2>
                  <p>{r.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="prose" style={{ marginTop: "3.5rem", maxWidth: "46rem" }}>
              <h2>Veelgestelde vragen over regio &amp; levering</h2>
              {capsules.map((c) => (
                <div key={c.q} style={{ marginBottom: "1.75rem" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>
                    {c.q}
                  </h3>
                  <p>{c.a}</p>
                </div>
              ))}
            </Reveal>

            <Reveal
              className="prose"
              style={{ marginTop: "2rem", maxWidth: "42rem" }}
            >
              <h2>Wat we lokaal doen</h2>
              <ul className="guide-list">
                <li>
                  Selectieadvies ijsbankkoelers (Goldy, V100, V200, portable)
                </li>
                <li>Levering België &amp; Nederland</li>
                <li>
                  Doorverwijzing naar Taponderhoud voor plaatsing en onderhoud
                </li>
              </ul>
              <p>
                Lees ook{" "}
                <a href={withBase("/gids/bierkoeler-kopen-belgie-nederland/")}>
                  bierkoeler kopen in België &amp; Nederland
                </a>
                , de{" "}
                <a href={withBase("/gids/bierkoeler-kiezen-checklist/")}>
                  keuze-checklist
                </a>{" "}
                of de{" "}
                <a
                  href={withBase(
                    "/gids/golderos-distributeur-belgie-nederland/"
                  )}
                >
                  Golderos-distributeurspagina
                </a>
                .
              </p>
              <a className="text-link" href={withBase("/contact/")}>
                Contacteer VanRobi <span aria-hidden="true">→</span>
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
