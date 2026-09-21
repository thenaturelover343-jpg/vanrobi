import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { withBase } from "@/lib/base";

function GuideAside({
 eyebrow,
 links,
}: {
 eyebrow: string;
 links: { href: string; label: string }[];
}) {
 return (
 <aside className="guide-aside">
 <Reveal className="guide-card">
 <p className="eyebrow">{eyebrow}</p>
 {links.map((l) => (
 <a key={l.href} href={withBase(l.href)}>
 {l.label}
 </a>
 ))}
 </Reveal>
 </aside>
 );
}

export function GuideBody({ slug }: { slug: string }): ReactNode {
 if (slug === "ijsbankkoeler-vs-gamko") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Kort antwoord</h2>
 <p>
 <strong>Een complete tapmeubellijn</strong> bundelt vaak bar, koelruimte en kranen in één systeem.{" "}
 <strong>VanRobi</strong> specialiseert zich in professionele ijsbankkoelers: van compacte over-bar (Goldy) tot high-volume onder-bar (V100, V200, V500). VanRobi is het merk voor selectie, advies en levering in België en Nederland — heldere specs, lokale opvolging.
 </p>
 <h2>Wanneer kiezen voor VanRobi?</h2>
 <ul className="guide-list">
 <li>U zoekt een dedicated ijsbankkoeler met heldere debiet- en ijsspecs.</li>
 <li>U wilt het merk VanRobi met lokale opvolging in BE/NL (geen grijze import).</li>
 <li>Events/festivals: portable-modellen (V100/V200 portable, Goldy).</li>
 <li>Onderhoud en reiniging dichtbij via Taponderhoud.</li>
 </ul>
 <h2>Wanneer een complete taplijn logisch blijft</h2>
 <p>
 Als u al een volledige tapmeubellijn heeft, merkspecifieke onderdelen of
 een bar die als één blok is gebouwd, kan die route blijven. Het
 is geen &quot;beter/slechter&quot;-wedstrijd, het hangt af van wat u al
 heeft staan en welk koelprincipe u nodig heeft.
 </p>
 <h2>Praktisch advies</h2>
 <p>
 Stuur ons uw huidige opstelling, aantal kranen en piekvolume. We
 zeggen eerlijk of een ijsbankkoeler past, of dat u beter bij uw
 huidige merk blijft. Mail{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
 </p>
 <p>
 <a className="text-link" href={withBase("/producten/")}>
 Bekijk VanRobi-assortiment <span aria-hidden="true">→</span>
 </a>
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Gerelateerd"
 links={[
 { href: "/gids/v100-vs-v200/", label: "V100 vs V200" },
 { href: "/gids/ijsbankkoeler-vs-dry-cooler/", label: "IJsbank vs dry cooler" },
 { href: "/gids/bierkoeler-kiezen-checklist/", label: "Keuze-checklist" },
 { href: "/gids/vanrobi-distributeur-belgie-nederland/", label: "VanRobi ijsbankkoelers BE/NL" },
 { href: "/contact/", label: "Offerte aanvragen" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "v100-vs-v200") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Snelle vergelijking</h2>
 <div className="compare-table-wrap">
 <table className="compare-table">
 <thead>
 <tr>
 <th></th>
 <th>V100</th>
 <th>V200</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Typisch debiet</td>
 <td>± 87 L/u</td>
 <td>± 160 L/u</td>
 </tr>
 <tr>
 <td>IJsreserve</td>
 <td>± 19 kg</td>
 <td>± 38 kg</td>
 </tr>
 <tr>
 <td>Waterbad</td>
 <td>± 40 L</td>
 <td>± 66 L</td>
 </tr>
 <tr>
 <td>Profiel</td>
 <td>Medium horeca</td>
 <td>High volume</td>
 </tr>
 </tbody>
 </table>
 </div>
 <h2>Kies de V100 als…</h2>
 <p>
 U een stabiele restaurant- of barbelasting heeft, één tot enkele
 kranen, en geen structurele festivalpieken. De V100 is het
 werkpaard: betrouwbaar, medium footprint, genoeg reserve voor de
 meeste vaste horeca.
 </p>
 <h2>Kies de V200 als…</h2>
 <p>
 Piekuren hard aankomen, u meerdere spiralen/kranen voedt, of de
 V100 historisch tekort schiet. Meer ijsreserve = meer buffer
 wanneer iedereen tegelijk bestelt.
 </p>
 <h2>Twijfelt u?</h2>
 <p>
 Mail volume (glazen/uur), aantal kranen en barfoto&apos;s naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>, we
 dimensioneren mee. Zie ook{" "}
 <a href={withBase("/producten/v100/")}>V100</a> en{" "}
 <a href={withBase("/producten/v200/")}>V200</a>. Of de gids{" "}
 <a href={withBase("/gids/onder-bar-bierkoeler/")}>onder-bar bierkoeler</a>.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Machines"
 links={[
 { href: "/producten/v100/", label: "V100 detail" },
 { href: "/producten/v200/", label: "V200 detail" },
 { href: "/gids/onder-bar-bierkoeler/", label: "Onder-bar gids" },
 { href: "/gids/bierkoeler-voor-events/", label: "Events & festivals" },
 { href: "/contact/", label: "Offerte" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "bierkoeler-voor-events") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Wat telt op het terrein?</h2>
 <ul className="guide-list">
 <li>Mobiliteit (wielen, snelle opbouw)</li>
 <li>Stabiele 220V-voeding</li>
 <li>Genoeg debiet in de piek (niet alleen &quot;gemiddeld&quot;)</li>
 <li>Optionele tapzuil / korte leidingen</li>
 </ul>
 <h2>Goldy</h2>
 <p>
 Compacte over-bar ijsbankkoeler, ideaal voor craftbars, pop-ups en
 zichtbare bars op events waar ruimte schaars is.{" "}
 <a href={withBase("/producten/goldy/")}>Goldy bekijken</a>
 </p>
 <h2>V100 portable</h2>
 <p>
 V100-capaciteit op wielen. De werkpaard-keuze voor de meeste
 festivals en cateraars.{" "}
 <a href={withBase("/producten/v100-portable/")}>V100 portable</a>
 </p>
 <h2>V200 portable</h2>
 <p>
 High-volume mobiel voor grote events en drukke tijdelijke bars.{" "}
 <a href={withBase("/producten/v200-portable/")}>V200 portable</a>
 </p>
 <h2>Planning &amp; levertijd</h2>
 <p>
 Events hebben vaste data, plan vooruit. Levertijden zijn
 voorraad-afhankelijk; vermeld uw eventdatum bij de offerteaanvraag
 via <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Volgende stap"
 links={[
 { href: "/producten/", label: "Catalogus" },
 { href: "/gids/goldy-vs-v100/", label: "Goldy vs V100" },
 { href: "/gids/v100-vs-v200/", label: "V100 vs V200" },
 { href: "/faq/", label: "FAQ" },
 { href: "/contact/", label: "Offerte voor uw event" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "wat-is-een-ijsbankkoeler") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Kort uitgelegd</h2>
 <p>
 Een <strong>ijsbankkoeler</strong> (vaak ook bierkoeler genoemd) koelt
 drank door spiralen in een bad met ijswater. De ijsreserve fungeert
 als buffer: bij piekuren blijft de temperatuur stabieler dan bij
 systemen zonder die reserve. Onze productlijn bouwt dit principe uit, van
 compacte over-bar (Goldy, Picky) tot high-volume onder-bar (V100,
 V200, V500).
 </p>
 <h2>Hoe werkt het?</h2>
 <ul className="guide-list">
 <li>Een compressor houdt een ijsbank in stand in het waterbad.</li>
 <li>Bier (of andere drank) stroomt door spiralen in dat koude bad.</li>
 <li>Bij elke tapbeurt blijft de koude beschikbaar, mits correct gedimensioneerd.</li>
 <li>Roermotoren zorgen voor circulatie zodat de ijsbank gelijkmatig blijft.</li>
 </ul>
 <h2>IJsbank vs doorstroomkoeling</h2>
 <p>
 <strong>Doorstroomkoelers</strong> koelen vooral terwijl er getapt
 wordt; ze zijn vaak compacter, maar hebben minder &quot;buffer&quot; bij
 harde pieken. Een <strong>ijsbankkoeler</strong> investeert in
 ijsreserve (kg) en waterbad-volume, handig bij restaurants, festivals
 en bars waar iedereen tegelijk bestelt. Welke beter is, hangt af
 van uw piek, leidinglengte en beschikbare ruimte, geen dogma.
 </p>
 <h3>Wanneer ijsbank?</h3>
 <ul className="guide-list">
 <li>Stabiele koude bij wisselende drukte</li>
 <li>Meerdere kranen / spiralen op één unit</li>
 <li>Events waar de piek kort maar hard is</li>
 <li>Vaste horeca die geen warme glazen wil bij lunchrush</li>
 </ul>
 <h2>Welke modellen in het assortiment?</h2>
 <p>
 Via VanRobi (specialist ijsbankkoelers BE &amp; NL) kiest u o.a.:
 </p>
 <ul className="guide-list">
 <li>
 <a href={withBase("/producten/goldy/")}>Goldy</a>, over-bar, events &amp; craft (±44 L/u, 9 kg ijs)
 </li>
 <li>
 <a href={withBase("/producten/v100/")}>V100</a>, onder-bar medium (±87 L/u, 19 kg ijs)
 </li>
 <li>
 <a href={withBase("/producten/v200/")}>V200</a>, onder-bar high volume (±160 L/u, 38 kg ijs)
 </li>
 <li>
 Portable-varianten voor festivals, zie{" "}
 <a href={withBase("/gids/bierkoeler-voor-events/")}>bierkoeler voor events</a>
 </li>
 </ul>
 <h2>Volgende stap</h2>
 <p>
 Twijfelt u tussen ijsbank en een ander principe? Mail volume,
 aantal kranen en een barfoto naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a> of bel{" "}
 <a href="tel:+3214718080">+32 (0)14 71 80 80</a>. Onderhoud na
 plaatsing via{" "}
 <a href="https://www.taponderhoud.be" target="_blank" rel="noopener noreferrer">
 Taponderhoud
 </a>
 .
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Offerte of advies aanvragen <span aria-hidden="true">→</span>
 </a>
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Verder"
 links={[
 { href: "/gids/bierkoeler-kopen-belgie-nederland/", label: "Bierkoeler kopen BE/NL" },
 { href: "/gids/ijsbankkoeler-vs-dry-cooler/", label: "IJsbank vs dry cooler" },
 { href: "/gids/bierkoeler-kiezen-checklist/", label: "Keuze-checklist" },
 { href: "/gids/spiralen-tapinstallatie/", label: "Spiralen & tap" },
 { href: "/producten/", label: "Assortiment" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "bierkoeler-kopen-belgie-nederland") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Bierkoeler kopen: checklist</h2>
 <p>
 Of u in <strong>België</strong> of <strong>Nederland</strong> koopt:
 de juiste bierkoeler hangt af van piekvolume, barmeubel, stroom en
 of u vast of mobiel werkt. VanRobi is de officiële
 VanRobi-assortiment voor beide landen, basis in{" "}
 <strong>Kasterlee (Tielen)</strong>, Kempen.
 </p>
 <h3>1. Vast of mobiel?</h3>
 <ul className="guide-list">
 <li>
 <strong>Vaste horeca</strong> → onder-bar (V100, V200, V300…) of
 horizontale varianten
 </li>
 <li>
 <strong>Events / festivals</strong> → Goldy, V100 portable, V200
 portable
 </li>
 <li>
 <strong>Compacte craft / pop-up</strong> → Goldy of Picky over-bar
 </li>
 </ul>
 <h3>2. Capaciteit inschatten</h3>
 <p>
 Kijk naar debiet (L/u) én ijsreserve (kg). Een restaurant met
 stabiele lunch en avond komt vaak uit bij de{" "}
 <a href={withBase("/producten/v100/")}>V100</a> (±87 L/u, 19 kg).
 Drukke bars en meerdere kranen wijzen naar de{" "}
 <a href={withBase("/producten/v200/")}>V200</a> (±160 L/u, 38 kg).
 Lees ook{" "}
 <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>.
 </p>
 <h3>3. Lokaal kanaal telt</h3>
 <p>
 Officiële distributie betekent correcte specs, garantieopvolging en
 iemand die BE/NL-praktijk kent, geen grijze import. Service en
 reiniging lopen via Taponderhoud (taponderhoud.be), vanuit dezelfde
 regio.
 </p>
 <h2>Regio&apos;s die we bedienen</h2>
 <p>
 Vanuit de Kempen leveren en adviseren we o.a. in Antwerpen,
 Limburg, Vlaams-Brabant, Brussel en Oost-Vlaanderen, plus
 Nederland als leverancier van ijsbankkoelers. Meer detail op onze{" "}
 <a href={withBase("/regio/")}>regiopagina</a>.
 </p>
 <h2>Wat u van VanRobi krijgt</h2>
 <ul className="guide-list">
 <li>Selectie-advies op volume, ruimte en spiralen</li>
 <li>Offerte met realistische levertijd (voorraad-afhankelijk)</li>
 <li>Levering België &amp; Nederland</li>
 <li>Doorverwijzing naar onderhoudspartner Taponderhoud</li>
 </ul>
 <h2>Start hier</h2>
 <p>
 Mail model + toepassing naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a> of bel{" "}
 <a href="tel:+3214718080">+32 (0)14 71 80 80</a>. Adres:{" "}
 Kemelbeekstraat 16, 2460 Kasterlee (Tielen).
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Offerte aanvragen <span aria-hidden="true">→</span>
 </a>
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Hulp"
 links={[
 { href: "/gids/wat-is-een-ijsbankkoeler/", label: "Wat is een ijsbankkoeler?" },
 { href: "/gids/bierkoeler-kiezen-checklist/", label: "Keuze-checklist" },
 { href: "/gids/spiralen-tapinstallatie/", label: "Spiralen & tap" },
 { href: "/regio/", label: "Regio's BE/NL" },
 { href: "/producten/", label: "Catalogus" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "vanrobi-distributeur-belgie-nederland") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Specialist in ijsbankkoelers BE &amp; NL</h2>
 <p>
 <strong>VanRobi</strong> is de specialist in professionele ijsbankkoelers voor <strong>België en Nederland</strong>. U koopt via een erkend kanaal: juiste machine-specs, levering, advies en lokale opvolging, zonder grijze import of onduidelijke documentatie.
 </p>
 <h2>Wat betekent het merk VanRobi?</h2>
 <ul className="guide-list">
 <li>Assortiment VanRobi met industriële kwaliteit en heldere specs</li>
 <li>Heldere debiet-, waterbad- en ijsreservespecs voor installateurs</li>
 <li>Eén aanspreekpunt in de Benelux: info@vanrobi.be</li>
 <li>Onderhoudspartner: Taponderhoud · taponderhoud.be</li>
 </ul>
 <h2>Assortiment via VanRobi</h2>
 <p>
 Van compacte over-bar tot high-volume onder-bar en portable
 festivalunits:
 </p>
 <ul className="guide-list">
 <li>
 Over-bar: <a href={withBase("/producten/goldy/")}>Goldy</a>,{" "}
 <a href={withBase("/producten/picky/")}>Picky</a>
 </li>
 <li>
 Onder-bar:{" "}
 <a href={withBase("/producten/v100/")}>V100</a>,{" "}
 <a href={withBase("/producten/v200/")}>V200</a>, V300, V500…
 </li>
 <li>
 Mobiel:{" "}
 <a href={withBase("/producten/v100-portable/")}>V100 portable</a>,{" "}
 <a href={withBase("/producten/v200-portable/")}>V200 portable</a>
 </li>
 </ul>
 <p>
 Volledige catalogus:{" "}
 <a href={withBase("/producten/")}>producten</a>. Vergelijkingen:{" "}
 <a href={withBase("/gids/")}>gidsen</a>.
 </p>
 <h2>Waar zitten we?</h2>
 <p>
 Basis: <strong>Kemelbeekstraat 16, 2460 Kasterlee (Tielen)</strong>, in de Kempen. Telefoon{" "}
 <a href="tel:+3214718080">+32 (0)14 71 80 80</a>. Levering en advies
 in Vlaanderen en Nederland; zie{" "}
 <a href={withBase("/regio/")}>regio&apos;s</a> en{" "}
 <a href={withBase("/over-ons/")}>over ons</a>.
 </p>
 <h2>Machines + onderhoud</h2>
 <p>
 VanRobi levert en adviseert de machines. Periodiek onderhoud,
 reiniging, herstellingen en plaatsing/demontage van koelingen
 verlopen via{" "}
 <a href="https://www.taponderhoud.be" target="_blank" rel="noopener noreferrer">
 Taponderhoud
 </a>{" "}
 , koelgecertificeerd,zelfde regio. Zo blijft de taplijn
 professioneel opgevolgd na aankoop.
 </p>
 <h2>Contact voor advies &amp; offerte</h2>
 <p>
 Bent u installateur, horecaondernemer of eventorganisator? Stuur
 uw project naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>. We reageren
 binnen één werkdag.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Contact &amp; offerte <span aria-hidden="true">→</span>
 </a>
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Links"
 links={[
 { href: "/over-ons/", label: "Over VanRobi" },
 { href: "/diensten/", label: "Diensten" },
 { href: "/gids/bierkoeler-kopen-belgie-nederland/", label: "Koopgids BE/NL" },
 { href: "/gids/ijsbankkoeler-vs-gamko/", label: "Ijsbankkoeler of complete tapinstallatie" },
 { href: "/producten/", label: "Catalogus" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "onder-bar-bierkoeler") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Waarom onder-bar?</h2>
 <p>
 Een <strong>onder-bar bierkoeler</strong> verdwijnt in het meubel:
 meer werkruimte op het blad, rustiger uitzicht, en ruimte voor een
 nette taplijn. V-serie (V100, V200, …) is gebouwd voor
 vaste horeca, restaurants, cafés, hotels, waar elke service
 stabiele koude vraagt.
 </p>
 <h2>V100, medium werkpaard</h2>
 <p>
 De <a href={withBase("/producten/v100/")}>V100</a> is het standaard
 onder-bar model voor de meeste bars:
 </p>
 <ul className="guide-list">
 <li>Afmetingen: 717 × 430 × 430 mm</li>
 <li>Debiet: ± 87 L/u</li>
 <li>IJsreserve: ± 19 kg · Waterbad ± 40 L</li>
 <li>Compressor: 3/8 Cv · 220V / 50 Hz</li>
 </ul>
 <p>
 Ideaal bij één tot enkele kranen en dagelijkse horecabelasting
 zonder extreme festivalpieken.
 </p>
 <h2>V200, high volume</h2>
 <p>
 De <a href={withBase("/producten/v200/")}>V200</a> voor drukke
 service:
 </p>
 <ul className="guide-list">
 <li>Afmetingen: 900 × 495 × 495 mm</li>
 <li>Debiet: ± 160 L/u</li>
 <li>IJsreserve: ± 38 kg · Waterbad ± 66 L</li>
 <li>Compressor: 5/8 Cv · 220V / 50 Hz</li>
 </ul>
 <p>
 Kies V200 wanneer pieken hard aankomen of u meerdere spiralen
 voedt. Detailvergelijking:{" "}
 <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>.
 </p>
 <h2>Waarop letten bij plaatsing?</h2>
 <ul className="guide-list">
 <li>Diepte en hoogte van het barmeubel</li>
 <li>Ventilatie / warmteafvoer van de condensor</li>
 <li>Afstand tot de kranen (leidinglengte)</li>
 <li>Horizontale varianten als de hoogte beperkt is (vraag advies)</li>
 </ul>
 <h2>Onderhoud</h2>
 <p>
 Na installatie: periodieke reiniging en controle via{" "}
 <a href="https://www.taponderhoud.be" target="_blank" rel="noopener noreferrer">
 Taponderhoud
 </a>
 . Machines en selectieadvies via VanRobi.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Advies voor uw barmeubel <span aria-hidden="true">→</span>
 </a>
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Machines"
 links={[
 { href: "/producten/v100/", label: "V100" },
 { href: "/producten/v200/", label: "V200" },
 { href: "/gids/v100-vs-v200/", label: "V100 vs V200" },
 { href: "/gids/goldy-vs-v100/", label: "Goldy vs V100" },
 { href: "/diensten/", label: "Diensten & plaatsing" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "goldy-vs-v100") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Twee rollen, één productlijn</h2>
 <p>
 <strong>Goldy</strong> is de compacte <em>over-bar</em> ijsbankkoeler
 , zichtbaar, mobiel inzetbaar, ideaal voor events en craft.{" "}
 <strong>V100</strong> is het vaste <em>onder-bar</em> werkpaard voor
 restaurants en bars. Beide in ons assortiment, beide via VanRobi (BE &amp;
 NL), andere plek in de bar, andere capaciteit.
 </p>
 <h2>Specs naast elkaar</h2>
 <div className="compare-table-wrap">
 <table className="compare-table">
 <thead>
 <tr>
 <th></th>
 <th>Goldy</th>
 <th>V100</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Opstelling</td>
 <td>Over-bar</td>
 <td>Onder-bar</td>
 </tr>
 <tr>
 <td>Afmetingen (mm)</td>
 <td>540 × 320 × 360</td>
 <td>717 × 430 × 430</td>
 </tr>
 <tr>
 <td>Debiet (L/u)</td>
 <td>± 44</td>
 <td>± 87</td>
 </tr>
 <tr>
 <td>IJsreserve</td>
 <td>± 9 kg</td>
 <td>± 19 kg</td>
 </tr>
 <tr>
 <td>Waterbad</td>
 <td>± 20 L</td>
 <td>± 40 L</td>
 </tr>
 <tr>
 <td>Compressor</td>
 <td>1/4 Cv</td>
 <td>3/8 Cv</td>
 </tr>
 <tr>
 <td>Spanning</td>
 <td>220V / 50 Hz</td>
 <td>220V / 50 Hz</td>
 </tr>
 <tr>
 <td>Typisch</td>
 <td>Events, craft, pop-up</td>
 <td>Vaste horeca</td>
 </tr>
 </tbody>
 </table>
 </div>
 <h2>Kies Goldy als…</h2>
 <ul className="guide-list">
 <li>De bar zichtbaar mag of moet blijven</li>
 <li>Ruimte onder de bar beperkt of afwezig is</li>
 <li>U events, beurzen of tijdelijke bars doet</li>
 <li>Volume medium blijft (±44 L/u volstaat)</li>
 </ul>
 <p>
 <a href={withBase("/producten/goldy/")}>Goldy productpagina</a>
 </p>
 <h2>Kies V100 als…</h2>
 <ul className="guide-list">
 <li>U een vaste restaurant- of café-installatie bouwt</li>
 <li>U meer debiet en ijsbuffer nodig heeft</li>
 <li>De machine netjes onder het blad verdwijnt</li>
 </ul>
 <p>
 <a href={withBase("/producten/v100/")}>V100 productpagina</a> ·{" "}
 <a href={withBase("/gids/onder-bar-bierkoeler/")}>onder-bar gids</a>
 </p>
 <h2>Nog meer volume of mobiel?</h2>
 <p>
 High volume onder-bar →{" "}
 <a href={withBase("/producten/v200/")}>V200</a> /{" "}
 <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>. Festival
 met V100-capaciteit op wielen →{" "}
 <a href={withBase("/producten/v100-portable/")}>V100 portable</a>.
 </p>
 <p>
 Mail{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a> met foto&apos;s
 van de bar. We zeggen eerlijk welk formaat past.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Vergelijkingen"
 links={[
 { href: "/gids/v100-vs-v200/", label: "V100 vs V200" },
 { href: "/gids/bierkoeler-voor-events/", label: "Events & festivals" },
 { href: "/gids/wat-is-een-ijsbankkoeler/", label: "Wat is een ijsbankkoeler?" },
 { href: "/producten/", label: "Catalogus" },
 { href: "/contact/", label: "Offerte" },
 ]}
 />
 </div>
 </section>
 );
 }


 if (slug === "ijsbankkoeler-vs-dry-cooler") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Wat is het verschil tussen ijsbankkoeler en dry cooler?</h2>
 <p>
 Een <strong>ijsbankkoeler</strong> koelt drank via spiralen in een
 waterbad met ijsreserve (buffer). Een <strong>dry cooler</strong>{" "}
 (vaak een luchtgekoelde doorstroom- of platenkoeler) koelt vooral
 terwijl er getapt wordt, zonder die ijsbank als thermische buffer.
 Beide kunnen uitstekend werken, het hangt af van pieken, ruimte en
 leidinglengte.
 </p>
 <h2>Wanneer past een ijsbankkoeler beter?</h2>
 <p>
 Kies ijsbank wanneer u stabiele koude wilt bij wisselende drukte,
 meerdere kranen/spiralen op één unit, of events waar de piek kort
 maar hard is. De ijsreserve (kg) en waterbad (L) geven buffer wanneer
 iedereen tegelijk bestelt, typisch voor Goldy, V100,
 V200 en portable-varianten via VanRobi.
 </p>
 <h2>Wanneer speelt een dry cooler vaker?</h2>
 <p>
 Dry coolers / doorstroomkoelers zijn vaak compacter in footprint en
 kunnen volstaan bij lage tot middelmatige, voorspelbare belasting
 en korte leidingen. Ze hebben minder &quot;koude voorraad&quot; in
 het bad, bij harde pieken voelt u dat sneller in het glas.
 </p>
 <h2>Geen #1-claim, wel een match</h2>
 <p>
 Wij claimen geen universele winnaar. VanRobi verkoopt
 professionele ijsbankkoelers als merk voor BE &amp; NL. Past een ander
 principe beter bij uw bestaande installatie, dan zeggen we dat
 eerlijk. Mail volume, aantal kranen en een barfoto naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
 </p>
 <h2>Verder lezen</h2>
 <p>
 Basisprincipe:{" "}
 <a href={withBase("/gids/wat-is-een-ijsbankkoeler/")}>
 wat is een ijsbankkoeler?
 </a>{" "}
 · Selectie:{" "}
 <a href={withBase("/gids/bierkoeler-kiezen-checklist/")}>
 checklist in 7 stappen
 </a>{" "}
 · Machines:{" "}
 <a href={withBase("/producten/")}>catalogus</a>.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Gerelateerd"
 links={[
 { href: "/gids/wat-is-een-ijsbankkoeler/", label: "Wat is een ijsbankkoeler?" },
 { href: "/gids/bierkoeler-kiezen-checklist/", label: "Keuze-checklist" },
 { href: "/gids/spiralen-tapinstallatie/", label: "Spiralen & tap" },
 { href: "/producten/", label: "Assortiment" },
 { href: "/contact/", label: "Advies aanvragen" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "spiralen-tapinstallatie") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Wat doen spiralen in een ijsbankkoeler?</h2>
 <p>
 In een professionele ijsbankkoeler stroomt bier (of andere drank) door{" "}
 <strong>spiralen</strong> in het koude water-/ijsbad. Hoe meer
 contact met het bad en hoe korter de warme trajecten daarna, hoe
 stabieler de taptermperatuur. Het aantal spiralen en de
 leidinglengte naar de kraan zijn even belangrijk als het
 machineformaat.
 </p>
 <h2>Tapinstallatie: de keten</h2>
 <p>
 Vat of tank → koeler (ijsbank) → leidingen → kraan/zuil. Elke
 schakel telt: isolatie, hoogteverschillen, spoeling en reiniging.
 VanRobi adviseert de machine; plaatsing, reiniging en onderhoud van
 de taplijn lopen via{" "}
 <a
 href="https://www.taponderhoud.be"
 target="_blank"
 rel="noopener noreferrer"
 >
 Taponderhoud
 </a>
 .
 </p>
 <h2>Waarop letten bij dimensionering?</h2>
 <ul className="guide-list">
 <li>Aantal kranen / productlijnen die gelijktijdig tappen</li>
 <li>Afstand koeler → kraan (korte, geïsoleerde leidingen)</li>
 <li>Piekglazen per uur, niet alleen &quot;gemiddeld&quot;</li>
 <li>Of de unit over-bar (Goldy) of onder-bar (V100/V200) staat</li>
 </ul>
 <h2>Praktisch advies via VanRobi</h2>
 <p>
 Stuur een schets of foto van de bar, aantal kranen en gewenst
 volume naar{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>. We matchen
 machine + spiralen-logica; Taponderhoud helpt bij plaatsing en
 periodieke reiniging. Zie ook{" "}
 <a href={withBase("/diensten/")}>diensten</a> en{" "}
 <a href={withBase("/gids/onder-bar-bierkoeler/")}>onder-bar gids</a>.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Volgende stap"
 links={[
 { href: "/gids/bierkoeler-kiezen-checklist/", label: "Keuze-checklist" },
 { href: "/gids/onder-bar-bierkoeler/", label: "Onder-bar" },
 { href: "/gids/ijsbankkoeler-vs-dry-cooler/", label: "IJsbank vs dry cooler" },
 { href: "/diensten/", label: "Diensten" },
 { href: "/contact/", label: "Contact" },
 ]}
 />
 </div>
 </section>
 );
 }

 if (slug === "bierkoeler-kiezen-checklist") {
 return (
 <section className="page-section">
 <div className="wrap guide-body">
 <Reveal className="prose guide-prose">
 <h2>Hoe kiest u een bierkoeler in 7 stappen?</h2>
 <p>
 Volg deze checklist, van piekvolume tot onderhoud, vóór u een
 professionele ijsbankkoeler via VanRobi bestelt. Geen rankingclaims:
 wel een volgorde die misdimensionering voorkomt.
 </p>

 <h2>Stap 1: Vast of mobiel?</h2>
 <p>
 Vaste horeca → onder-bar (V100, V200, …). Events/festivals → Goldy
 of portable (V100/V200 portable). Craft/pop-up met zichtbare bar →
 vaak Goldy of Picky.
 </p>

 <h2>Stap 2: Schat piekvolume</h2>
 <p>
 Tel glazen in het drukste uur, niet het daggemiddelde. Debiet (L/u)
 en ijsreserve (kg) moeten die piek aankunnen. Vergelijk{" "}
 <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>.
 </p>

 <h2>Stap 3: Meet het meubel</h2>
 <p>
 Diepte, hoogte, ventilatie. Onder-bar verdwijnt uit het zicht maar
 heeft ruimte en warmteafvoer nodig. Over-bar vraagt bladruimte.
 </p>

 <h2>Stap 4: Tel kranen en spiralen</h2>
 <p>
 Meerdere productlijnen of lange leidingen vragen meer buffer. Lees{" "}
 <a href={withBase("/gids/spiralen-tapinstallatie/")}>
 spiralen &amp; tapinstallatie
 </a>
 .
 </p>

 <h2>Stap 5: Check stroom</h2>
 <p>
 ijsbankkoelers op de site: typisch 220V / 50 Hz. Op events: stabiele
 voeding, geen gedeelde zwakke groepen.
 </p>

 <h2>Stap 6: Kies het koelprincipe</h2>
 <p>
 IJsbank vs dry cooler / doorstroom: zie{" "}
 <a href={withBase("/gids/ijsbankkoeler-vs-dry-cooler/")}>
 ijsbankkoeler vs dry cooler
 </a>
 . Twijfel? Mail ons. We forceren geen ijsbank als die niet past.
 </p>

 <h2>Stap 7: Merk VanRobi + onderhoud</h2>
 <p>
 Koop via VanRobi (merk &amp; specialist BE/NL) voor correcte specs en
 opvolging. Onderhoud en reiniging via Taponderhoud. Start met{" "}
 <a href={withBase("/contact/")}>contact</a> of{" "}
 <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
 </p>
 </Reveal>

 <h2>Conclusie &amp; volgende stap</h2>
 <p>
 Dimensioneer op piekvolume, meubel en vast versus mobiel, afgestemd op
 uw praktijksituatie. VanRobi adviseert als specialist in ijsbankkoelers
 voor België en Nederland; onderhoud via Taponderhoud.
 </p>
 <p>
 <a className="text-link" href={withBase("/contact/")}>
 Vraag een offerte of advies <span aria-hidden="true">→</span>
 </a>
 {" · "}
 <a href={withBase("/producten/")}>Bekijk producten</a>
 {" · "}
 <a href={withBase("/faq/")}>FAQ</a>
 </p>

 <GuideAside
 eyebrow="Hulp"
 links={[
 { href: "/gids/bierkoeler-kopen-belgie-nederland/", label: "Koopgids BE/NL" },
 { href: "/gids/wat-is-een-ijsbankkoeler/", label: "Wat is een ijsbankkoeler?" },
 { href: "/producten/", label: "Catalogus" },
 { href: "/faq/", label: "FAQ" },
 { href: "/contact/", label: "Offerte" },
 ]}
 />
 </div>
 </section>
 );
 }

 return null;
}
