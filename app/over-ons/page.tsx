import type { Metadata } from "next";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = metaFromEntry(pageSeo.overOns);

export default function OverOnsPage() {
 return (
 <>
 <Header />
 <main id="main">
 <PageHero
 eyebrow="Over ons"
 title={["VanRobi ×", <em key="e">ijsbankkoelers.</em>]}
 lede="Officieel distributiekanaal voor professionele ijsbankkoelers in België en Nederland, met lokale expertise in tap- en koeltechniek."
 />

 <section className="page-section">
 <div className="wrap prose-grid">
 <Reveal className="prose">
 <h2>Partnerschap</h2>
 <p>
 Ons assortiment bouwt op meer dan 50 jaar Spaanse koudetechniek en ISO 9001-kwaliteit. VanRobi is het aanspreekpunt voor België en Nederland: selectie, advies en levering vanuit één loket, met heldere specs en lokale opvolging.
 </p>
 <p>
 Geen grijze import. Wel heldere specs, betrouwbare levering en
 een lokale partner die de bar begrijpt, van vaste horeca tot
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
 Zo combineert u industriële ijsbankkoelers met Belgische
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
 t: "Herkomst",
 d: "Spanje · 50+ jaar koudetechniek",
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


 <section className="page-section">
 <div className="wrap prose" style={{ maxWidth: "46rem" }}>
 <h2>Waarom een professioneel VanRobi-kanaal?</h2>
 <p>
 Correcte specs, garantieopvolging en iemand die BE/NL-praktijk kent —
 geen grijze import. VanRobi levert ijsbankkoelers en bierkoelers vanuit{" "}
 {contact.address.line}. Regio&apos;s: {contact.regions}, plus Nederland.
 </p>
 <h3>Assortiment &amp; kennis</h3>
 <p>
 Van over-bar (<a href={withBase("/producten/goldy/")}>Goldy</a>) tot
 high-volume onder-bar (<a href={withBase("/producten/v200/")}>V200</a>).
 Verdiep via onze <a href={withBase("/gids/")}>gidsen</a> of de{" "}
 <a href={withBase("/faq/")}>FAQ</a>.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Neem contact op <span aria-hidden="true">→</span>
 </a>
 </p>
 </div>
 </section>

 <CTA />
 </main>
 <Footer />
 </>
 );
}
