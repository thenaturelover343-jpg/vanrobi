import type { Metadata } from "next";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { withBase } from "@/lib/base";

export const metadata: Metadata = metaFromEntry(pageSeo.voorWie);

const audiences = [
 {
 n: "01",
 title: "Horeca",
 text: "Restaurants, bars en hotels die stabiele tapkoude willen, onder-bar of over-bar, afgestemd op openingsuren en volume.",
 href: "/producten/?filter=horeca",
 },
 {
 n: "02",
 title: "Events & festivals",
 text: "Mobiele units (Goldy, V100 portable, V200 portable) voor snelle opbouw, high volume en zichtbare tapbeleving.",
 href: "/producten/?filter=events",
 },
 {
 n: "03",
 title: "Installateurs & brouwerijen",
 text: "Heldere specs, officiële kanalen en service op maat voor vakmensen die VanRobi in projecten integreren.",
 href: "/producten/",
 },
];

export default function VoorWiePage() {
 return (
 <>
 <Header />
 <main id="main">
 <PageHero
 eyebrow="Voor wie"
 title={["Waar de koude", <em key="e">telt.</em>]}
 lede="Van vaste bar tot festivalterrein, dezelfde industriële betrouwbaarheid, met lokaal advies vanuit de Kempen."
 />

 <section className="page-section">
 <div className="wrap audience-grid">
 {audiences.map((a) => (
 <Reveal key={a.n} className="audience-card">
 <span className="service-n">{a.n}</span>
 <h2>{a.title}</h2>
 <p>{a.text}</p>
 <a className="text-link" href={withBase(a.href.split("?")[0])}>
 Bekijk machines <span aria-hidden="true">→</span>
 </a>
 </Reveal>
 ))}
 </div>
 </section>


 <section className="page-section page-section-alt">
 <div className="wrap prose" style={{ maxWidth: "46rem" }}>
 <h2>Welke machine past bij welk publiek?</h2>
 <h3>Vaste horeca</h3>
 <p>
 Restaurants en bars kiezen vaak een onder-bar ijsbankkoeler (
 <a href={withBase("/producten/v100/")}>V100</a> of{" "}
 <a href={withBase("/producten/v200/")}>V200</a>). Zie de gids{" "}
 <a href={withBase("/gids/onder-bar-bierkoeler/")}>onder-bar bierkoeler</a>.
 </p>
 <h3>Events &amp; festivals</h3>
 <p>
 Mobiele units zoals{" "}
 <a href={withBase("/producten/v100-portable/")}>V100 portable</a>,{" "}
 <a href={withBase("/producten/v200-portable/")}>V200 portable</a> of{" "}
 <a href={withBase("/producten/goldy/")}>Goldy</a>. Lees{" "}
 <a href={withBase("/gids/bierkoeler-voor-events/")}>bierkoeler voor events</a>.
 </p>
 <h3>Installateurs &amp; craft</h3>
 <p>
 Heldere specs en een professioneel VanRobi-kanaal: bekijk de{" "}
 <a href={withBase("/producten/")}>catalogus</a> of de pagina{" "}
 <a href={withBase("/gids/vanrobi-distributeur-belgie-nederland/")}>
 VanRobi ijsbankkoelers België &amp; Nederland
 </a>
 . Offerte via <a href={withBase("/contact/")}>contact</a>.
 </p>
 </div>
 </section>

 <CTA />
 </main>
 <Footer />
 </>
 );
}
