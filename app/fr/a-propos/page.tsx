import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/site";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";
import { frAbout } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "À propos — VanRobi & Taponderhoud",
  description:
    "VanRobi, distributeur officiel Golderos BE/NL, avec partenaire maintenance Taponderhoud depuis Kasterlee.",
  path: "/fr/a-propos/",
});

export default function FrAboutPage() {
  return (
    <>
      <Header lang="fr" />
      <main id="main" lang="fr">
        <PageHero
          eyebrow={frAbout.eyebrow}
          title={["VanRobi ×", <em key="e">Golderos.</em>]}
          lede={frAbout.lede}
        />
        <section className="page-section">
          <div className="wrap prose-grid">
            <Reveal className="prose">
              <h2>Partenariat</h2>
              <p>{frAbout.partnership}</p>
              <p>
                Pas d&apos;import gris. Des specs claires, une livraison fiable
                et un partenaire local qui comprend le bar — du Horeca fixe au
                terrain de festival.
              </p>
            </Reveal>
            <Reveal className="prose reveal-delay-1">
              <h2>Expertise locale</h2>
              <p>{frAbout.local}</p>
              <p>
                Adresse : {contact.address.line}. Tél.{" "}
                <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>.
              </p>
              <a className="text-link" href={withBase("/fr/services/")}>
                Voir les services <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>
        <section className="page-section page-section-alt">
          <div className="wrap">
            <Reveal as="header" className="block-head">
              <p className="eyebrow">Faits</p>
              <h2>
                Ce que vous pouvez <em>attendre</em>
              </h2>
            </Reveal>
            <div className="fact-grid">
              {[
                { t: "Fabricant", d: "Golderos · Espagne · 50+ ans" },
                { t: "Distributeur", d: "VanRobi · Belgique & Pays-Bas" },
                { t: "Service", d: `${contact.company} · certifié froid` },
                { t: "Base", d: contact.address.line },
              ].map((f) => (
                <Reveal key={f.t} className="fact-card">
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
