import type { Metadata } from "next";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { ServicesSticky } from "@/components/ServicesSticky";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

export const metadata: Metadata = metaFromEntry(pageSeo.diensten);

const services = [
 {
 n: "01",
 title: "Advies & selectie",
 text: "Welke ijsbankkoeler past bij uw bar, event of brouwerij? We matchen volume, ruimte, spiralen en debiet, zonder verkooppraatjes.",
 },
 {
 n: "02",
 title: "Levering BE & NL",
 text: "Officiële VanRobi-distributie van ijsbankkoelers voor België en Nederland. Geen grijze import: juiste specs, garantie en opvolging.",
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
 lede="VanRobi levert en adviseert professionele ijsbankkoelers. Onderhoud, reiniging en herstellingen gebeuren via Taponderhoud, met één lokaal team."
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
 professionele ijsbankkoelers met Belgische service.
 </p>
 <a className="text-link" href={withBase("/contact/")}>
 Plan een afspraak <span aria-hidden="true">→</span>
 </a>
 </Reveal>
 </div>
 </section>


 <section className="page-section page-section-alt">
 <div className="wrap">
 <Reveal className="prose" style={{ maxWidth: "46rem" }}>
 <h2>Ijsbankkoeler advies voor horeca &amp; events</h2>
 <p>
 Of u een{" "}
 <a href={withBase("/producten/v100/")}>V100 onder-bar bierkoeler</a>{" "}
 zoekt of een{" "}
 <a href={withBase("/producten/goldy/")}>Goldy over-bar ijsbankkoeler</a>{" "}
 voor events: we dimensioneren op piekvolume, meubel en leidingwerk.
 Lees ook de gidsen{" "}
 <a href={withBase("/gids/wat-is-een-ijsbankkoeler/")}>wat is een ijsbankkoeler</a>,{" "}
 <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a> en{" "}
 <a href={withBase("/gids/bierkoeler-voor-events/")}>bierkoeler voor events</a>.
 </p>
 <h3>Regio&apos;s die we bedienen</h3>
 <p>
 Vanuit Kasterlee (Tielen) adviseren en leveren we in{" "}
 {contact.regions}, plus Nederland als leverancier van ijsbankkoelers.
 Details op de <a href={withBase("/regio/")}>regiopagina</a>.
 </p>
 <h3>Van offerte tot onderhoud</h3>
 <p>
 Machines en selectie via VanRobi (
 <a href={`mailto:${contact.email}`}>{contact.email}</a>
 ). Plaatsing, reiniging en herstellingen via{" "}
 <a href={contact.companyUrl} target="_blank" rel="noopener noreferrer">
 {contact.company}
 </a>
 . Vragen? Zie de <a href={withBase("/faq/")}>FAQ</a> of{" "}
 <a href={withBase("/contact/")}>vraag een offerte</a>.
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
