import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { withBase } from "@/lib/base";

export const metadata: Metadata = {
  title: "Voor wie — Horeca, events & installateurs | VanRobi",
  description:
    "Golderos via VanRobi voor horeca, events, installateurs en brouwerijen in België en Nederland.",
};

const audiences = [
  {
    n: "01",
    title: "Horeca",
    text: "Restaurants, bars en hotels die stabiele tapkoude willen — onder-bar of over-bar, afgestemd op openingsuren en volume.",
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
    text: "Heldere specs, officiële kanalen en service op maat voor vakmensen die Golderos in projecten integreren.",
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
          lede="Van vaste bar tot festivalterrein — dezelfde industriële betrouwbaarheid, met lokaal advies vanuit de Kempen."
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

        <CTA />
      </main>
      <Footer />
    </>
  );
}
