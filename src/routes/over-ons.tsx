import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { contact } from "@/lib/contact";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/over-ons")({
  head: () =>
    seoHead({
      title: "Over ons — VanRobi ijsbankkoelers",
      description:
        "Het merk VanRobi voor professionele ijsbankkoelers in België en Nederland, met lokale expertise in tap- en koeltechniek.",
      path: "/over-ons",
      frPath: "/fr/a-propos",
    }),
  component: OverOns,
});

const facts = [
  { t: "Merk", d: "VanRobi · ijsbankkoelers BE & NL" },
  { t: "Regio", d: "België & Nederland" },
  { t: "Focus", d: "Bier- & drankkoeling voor horeca" },
  { t: "Service", d: `${contact.company} · koelgecertificeerd` },
];

function OverOns() {
  return (
    <PageShell>
      <PageHero
        kicker="Over ons"
        title="VanRobi × ijsbankkoelers."
        lede="Het merk VanRobi voor professionele ijsbankkoelers in België en Nederland, met lokale expertise in tap- en koeltechniek."
      />
      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="prose">
          <h2>Partnerschap</h2>
          <p>
            VanRobi staat voor professionele ijsbankkoelers met industriële kwaliteit en heldere specs. Wij zijn het aanspreekpunt voor België en Nederland: selectie, advies en levering vanuit één loket, met lokale opvolging en onderhoud via Taponderhoud.
          </p>
          <p>
            Heldere specs, betrouwbare levering en een lokale partner die de bar begrijpt, van vaste horeca tot festivalterrein.
          </p>
        </div>
        <div className="prose">
          <h2>Lokale expertise</h2>
          <p>
            VanRobi werkt samen met{" "}
            <a href={contact.companyUrl} target="_blank" rel="noreferrer">
              {contact.company}
            </a>{" "}
            voor onderhoud, reiniging, herstellingen en plaatsing van koelingen. Koelgecertificeerd, met basis in de Kempen en dekking in {contact.regions}.
          </p>
          <p>
            Zo combineert u industriële ijsbankkoelers met Belgische service: van eerste offerte tot jaarlijks onderhoud.
          </p>
          <p>
            <Link to="/diensten" className="text-ice">
              Bekijk diensten →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-2 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Feiten</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Wat u van ons <em className="italic text-ice">mag verwachten</em>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.t}>
                <h3 className="font-sans text-sm tracking-[0.14em] text-ice uppercase">{f.t}</h3>
                <p className="mt-3 text-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>Waarom VanRobi als merk?</h2>
          <p>
            Correcte specs, garantieopvolging en iemand die BE/NL-praktijk kent. VanRobi levert ijsbankkoelers en bierkoelers vanuit {contact.address.line}. Regio's: {contact.regions}, plus Nederland.
          </p>
          <h3>Assortiment & kennis</h3>
          <p>
            Van over-bar (<Link to="/producten/$id" params={{ id: "goldy" }}>Goldy</Link>) tot high-volume onder-bar (<Link to="/producten/$id" params={{ id: "v200" }}>V200</Link>). Verdiep via onze <Link to="/gids">gidsen</Link> of de <Link to="/faq">FAQ</Link>.
          </p>
          <p>
            <Link to="/contact">Neem contact op →</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
