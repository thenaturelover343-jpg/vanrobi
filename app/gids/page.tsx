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
  title: "Gidsen: ijsbankkoeler, bierkoeler kopen & Golderos — VanRobi",
  description:
    "SEO-gidsen over ijsbankkoelers en bierkoelers: kopen in België/Nederland, onder-bar, Goldy vs V100, Golderos-distributeur. Via VanRobi.",
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
          lede="Uitleg, koopgidsen en vergelijkingen — ijsbankkoeler, onder-bar, events en Golderos via VanRobi in België & Nederland."
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
