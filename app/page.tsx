import type { Metadata } from "next";
import { Intro } from "@/components/Intro";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TempRail } from "@/components/TempRail";
import { ColdShift } from "@/components/ColdShift";
import { Statement } from "@/components/Statement";
import { IceBank } from "@/components/IceBank";
import { Products } from "@/components/Products";
import { Why } from "@/components/Why";
import { Partner } from "@/components/Partner";
import { Categories } from "@/components/Categories";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { guides } from "@/lib/guides";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { withBase } from "@/lib/base";
import { JsonLd } from "@/components/JsonLd";
import { homeGraphSchema } from "@/lib/schema";

export const metadata: Metadata = metaFromEntry(pageSeo.home);

export default function Home() {
  return (
    <>
      <JsonLd data={homeGraphSchema()} />
      <Intro />
      <Header />
      <ColdShift />
      <TempRail />
      <main id="main">
        <Hero />
        <Statement />
        <IceBank />
        <Products />
        <Why />
        <Partner />
        <Categories />
        <section className="page-section page-section-alt">
          <div className="wrap">
            <header className="block-head">
              <p className="eyebrow">Gidsen & FAQ</p>
              <h2>
                Kiezen met <em>kennis</em>
              </h2>
            </header>
            <div className="guide-index-grid">
              {guides.map((g, i) => (
                <Reveal
                  key={g.slug}
                  className={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}
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
            <p style={{ marginTop: "1.75rem" }}>
              <a className="text-link" href={withBase("/faq/")}>
                Veelgestelde vragen <span aria-hidden="true">→</span>
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
