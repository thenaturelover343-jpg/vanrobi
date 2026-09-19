import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = pageMeta({
  title: "Regio's België & Nederland — VanRobi Golderos",
  description:
    "VanRobi levert Golderos-ijsbankkoelers in Antwerpen, Limburg, Vlaams-Brabant, Brussel, Oost-Vlaanderen en Nederland. Basis: Kasterlee (Kempen).",
  path: "/regio/",
});

const regions = [
  {
    name: "Antwerpen",
    text: "Van stad tot Kempen: restaurants, cafés en eventlocaties. Snelle opvolging vanuit Kasterlee.",
  },
  {
    name: "Limburg",
    text: "Horeca en festivals in Limburg — advies, levering en onderhoudspartner dichtbij.",
  },
  {
    name: "Vlaams-Brabant",
    text: "Bars en restaurants rond Leuven en de rand — dimensionering op volume en meubel.",
  },
  {
    name: "Brussel",
    text: "Tweetalige horeca en events in Brussel. FR-pagina's beschikbaar; NL-catalogus volledig.",
  },
  {
    name: "Oost-Vlaanderen",
    text: "Gent en omstreken: vaste installaties en portable units voor events.",
  },
  {
    name: "Nederland",
    text: "Officieel Golderos-kanaal voor NL. Levering en advies landelijk — mail of bel voor planning.",
  },
];

export default function RegioPage() {
  return (
    <>
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
            <Reveal
              className="prose"
              style={{ marginTop: "3rem", maxWidth: "42rem" }}
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
