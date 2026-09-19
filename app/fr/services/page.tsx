import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";
import { frServices } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "Services — Livraison, conseil & maintenance | VanRobi",
  description:
    "VanRobi livre les machines Golderos avec conseil. Maintenance, nettoyage et réparations via Taponderhoud. Belgique & Pays-Bas.",
  path: "/fr/services/",
  locale: "fr_BE",
});

export default function FrServicesPage() {
  return (
    <>
      <Header lang="fr" />
      <main id="main" lang="fr">
        <PageHero
          eyebrow={frServices.eyebrow}
          title={["De la machine à", <em key="e">la maintenance.</em>]}
          lede={frServices.lede}
        />
        <section className="page-section">
          <div className="wrap">
            <div className="service-grid">
              {frServices.items.map((s) => (
                <Reveal key={s.n} className="service-card">
                  <span className="service-n">{s.n}</span>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal
              className="prose"
              style={{ marginTop: "3rem", maxWidth: "42rem" }}
            >
              <h2>Partenaire maintenance</h2>
              <p>
                Pour l&apos;entretien des installations de tirage, VanRobi
                collabore avec{" "}
                <a
                  href={contact.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.company}
                </a>
                . Machines industrielles Golderos + service belge certifié froid
                depuis la Campine.
              </p>
              <h2>Comment se déroule un projet ?</h2>
              <p>
                Vous décrivez le volume, le nombre de robinets et le meuble (ou
                l&apos;event). Nous proposons une machine Golderos adaptée —
                Goldy, V100, V200 ou portable — avec des specs visibles (débit,
                réserve de glace, cuba). La livraison BE/NL est planifiée avec
                vous ; le placement et l&apos;entretien peuvent suivre via
                Taponderhoud.
              </p>
              <h2>Guides (néerlandais)</h2>
              <p>
                Pour approfondir :{" "}
                <a href={withBase("/gids/")}>guides NL</a> (checklist, sous-bar,
                events, ijsbank vs dry cooler). Catalogue complet :{" "}
                <a href={withBase("/producten/")}>producten</a>.
              </p>
              <a className="text-link" href={withBase("/fr/contact/")}>
                Prendre rendez-vous <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
