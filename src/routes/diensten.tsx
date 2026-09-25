import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { contact } from "@/lib/contact";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/diensten")({
  head: () =>
    seoHead({
      title: "Levering en onderhoud bierkoeler | VanRobi",
      description: "Advies en levering van bierkoelers voor horeca. Onderhoud, reiniging en herstellingen doet Taponderhoud, vanuit de Kempen.",
      path: "/diensten",
      frPath: "/fr/services",
    }),
  component: Diensten,
});

const services = [
  {
    n: "01",
    title: "Advies & selectie",
    text: "Welke ijsbankkoeler past bij uw bar, event of brouwerij? We matchen volume, ruimte, spiralen en debiet, zonder verkooppraatjes.",
  },
  {
    n: "02",
    title: "Levering BE & NL",
    text: "Officiële VanRobi-distributie van bierkoelers en kegkoelers voor België en Nederland. Juiste specs, garantie en opvolging.",
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

function Diensten() {
  return (
    <PageShell>
      <PageHero
        kicker="Diensten"
        title="Van machine tot onderhoud."
        lede="VanRobi levert en adviseert professionele ijsbankkoelers. Onderhoud, reiniging en herstellingen gebeuren via Taponderhoud, met één lokaal team."
      />
      <section className="mx-auto max-w-[1220px] px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.n} className="border-t border-line pt-6">
              <p className="spec-num text-ice">{s.n}</p>
              <h2 className="mt-4 text-3xl">{s.title}</h2>
              <p className="mt-4 text-muted">{s.text}</p>
            </article>
          ))}
        </div>
        <div className="prose mt-16 max-w-[40rem]">
          <h2>Onderhoudspartner</h2>
          <p>
            Voor tapinstallatie-onderhoud, reiniging, herstellingen en plaatsing/demontage van koelingen werkt VanRobi samen met{" "}
            <a href={contact.companyUrl} target="_blank" rel="noreferrer">
              {contact.company}
            </a>{" "}
            ({contact.certified}). Zo combineert u industriële professionele ijsbankkoelers met Belgische service.
          </p>
          <p>
            <Link to="/contact">Plan een afspraak →</Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-bg-2 px-5 py-20 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>Ijsbankkoeler advies voor horeca & events</h2>
          <p>
            Of u een <Link to="/producten/$id" params={{ id: "v100" }}>V100 onder-bar bierkoeler</Link> zoekt of een{" "}
            <Link to="/producten/$id" params={{ id: "goldy" }}>Goldy over-bar ijsbankkoeler</Link> voor events: we dimensioneren op piekvolume, meubel en leidingwerk. Lees ook de gidsen{" "}
            <Link to="/gids/$slug" params={{ slug: "wat-is-een-ijsbankkoeler" }}>wat is een ijsbankkoeler</Link>,{" "}
            <Link to="/gids/$slug" params={{ slug: "v100-vs-v200" }}>V100 vs V200</Link> en{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-voor-events" }}>bierkoeler voor events</Link>.
          </p>
          <h3>Regio's die we bedienen</h3>
          <p>
            Vanuit Kasterlee (Tielen) adviseren en leveren we in {contact.regions}, plus Nederland als leverancier van ijsbankkoelers. Details op de <Link to="/regio">regiopagina</Link>.
          </p>
          <h3>Van offerte tot onderhoud</h3>
          <p>
            Machines en selectie via VanRobi (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ). Plaatsing, reiniging en herstellingen via{" "}
            <a href={contact.companyUrl} target="_blank" rel="noreferrer">
              {contact.company}
            </a>
            . Vragen? Zie de <Link to="/faq">FAQ</Link> of <Link to="/contact">vraag een offerte</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
