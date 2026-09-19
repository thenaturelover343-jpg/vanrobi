import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { guides } from "@/lib/guides";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";

export const metadata: Metadata = pageMeta({
  title: "Gidsen & vergelijkingen — VanRobi",
  description:
    "Praktische gidsen over Golderos-koelers: V100 vs V200, bierkoeler voor events, Golderos vs Gamko. Advies via VanRobi BE/NL.",
  path: "/gids/",
});

export default function GidsIndexPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Gidsen"
          title={["Kennis die", <em key="e">beslist</em>]}
          lede="Vergelijkingen en eventgidsen — zodat u de juiste Golderos-koeler kiest zonder verkooppraatjes."
        />
        <section className="page-section">
          <div className="wrap guide-index-grid">
            {guides.map((g, i) => (
              <Reveal
                key={g.slug}
                className={i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}
              >
                <a className="guide-index-card" href={withBase(`/gids/${g.slug}/`)}>
                  <p className="eyebrow">{g.eyebrow}</p>
                  <h2>{g.title}</h2>
                  <p>{g.description}</p>
                  <span className="text-link">
                    Lees gids <span aria-hidden="true">→</span>
                  </span>
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
