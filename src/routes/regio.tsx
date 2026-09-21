import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { contact } from "@/lib/contact";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/regio")({
  head: () =>
    seoHead({
      title: "Regio's — VanRobi België & Nederland",
      description:
        "Basis in de Kempen (Kasterlee). Levering en advies in Vlaanderen én Nederland als leverancier van ijsbankkoelers.",
      path: "/regio",
    }),
  component: RegioPage,
});

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
    text: "Tweetalige horeca en events in Brussel. Professioneel VanRobi-kanaal met lokale opvolging.",
  },
  {
    name: "Oost-Vlaanderen",
    text: "Gent en omstreken: vaste installaties en portable units voor events. Levering en selectieadvies vanuit de Kempen.",
  },
  {
    name: "Nederland",
    text: "Professioneel VanRobi-kanaal voor NL. Levering en advies landelijk, mail of bel voor planning, levertijd en modelkeuze.",
  },
];

const capsules = [
  {
    q: "Leveren jullie in heel België?",
    a: "Ja. VanRobi adviseert en levert professionele ijsbankkoelers in Vlaanderen en Brussel, met basis in Kasterlee (Tielen). Regiodekking via Antwerpen, Limburg, Vlaams-Brabant, Brussel en Oost-Vlaanderen, plus projecten elders op aanvraag.",
  },
  {
    q: "Werken jullie ook in Nederland?",
    a: "Ja. VanRobi is het erkende VanRobi-kanaal voor Nederland én België. Levering en advies landelijk; onderhoud en reiniging van taplijnen via partner Taponderhoud waar van toepassing.",
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

function RegioPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Regio's"
        title="Dichtbij in de Benelux."
        lede={`Basis in de Kempen (${contact.address.line}). Levering en advies in Vlaanderen én Nederland als leverancier van ijsbankkoelers.`}
      />
      <section className="mx-auto max-w-[1220px] px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => (
            <article key={r.name} className="border-t border-line pt-6">
              <p className="spec-num text-ice">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-3xl">{r.name}</h2>
              <p className="mt-4 text-muted">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="prose mt-20 max-w-[46rem]">
          <h2>Veelgestelde vragen over regio & levering</h2>
          {capsules.map((c) => (
            <div key={c.q}>
              <h3>{c.q}</h3>
              <p>{c.a}</p>
            </div>
          ))}
          <h2>Wat we lokaal doen</h2>
          <ul>
            <li>Selectieadvies ijsbankkoelers (Goldy, V100, V200, portable)</li>
            <li>Levering België & Nederland</li>
            <li>Doorverwijzing naar Taponderhoud voor plaatsing en onderhoud</li>
          </ul>
          <p>
            Lees ook{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-kopen-belgie-nederland" }}>
              bierkoeler kopen in België & Nederland
            </Link>
            , de{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-kiezen-checklist" }}>
              keuze-checklist
            </Link>{" "}
            of de{" "}
            <Link to="/gids/$slug" params={{ slug: "vanrobi-distributeur-belgie-nederland" }}>
              VanRobi-specialistenpagina
            </Link>
            .
          </p>
          <p>
            <Link to="/contact">Contacteer VanRobi →</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
