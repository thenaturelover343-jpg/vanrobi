import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/site";
import { contact, offerteMailto } from "@/lib/contact";
import { withBase } from "@/lib/base";
import { frContact } from "@/lib/fr";

export const metadata: Metadata = pageMeta({
  title: "Contact & devis — VanRobi",
  description:
    "Contactez VanRobi pour un devis Golderos. Kemelbeekstraat 16, Kasterlee. info@vanrobi.be · +32 14 71 80 80.",
  path: "/fr/contact/",
});

export default function FrContactPage() {
  return (
    <>
      <Header lang="fr" />
      <main id="main" lang="fr">
        <PageHero
          eyebrow={frContact.eyebrow}
          title={["Devis ou", <em key="e">question ?</em>]}
          lede={frContact.lede}
        />
        <section className="page-section">
          <div className="wrap contact-layout">
            <Reveal className="contact-details">
              <h2>Coordonnées</h2>
              <dl className="contact-dl">
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Téléphone</dt>
                  <dd>
                    <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Adresse</dt>
                  <dd>{contact.address.line}</dd>
                </div>
                <div>
                  <dt>Maintenance</dt>
                  <dd>
                    <a
                      href={contact.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.company} · taponderhoud.be
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal className="contact-form-wrap reveal-delay-1 prose">
              <h2>Demander un devis</h2>
              <p>{frContact.formNote}</p>
              <p style={{ marginTop: "1.5rem" }}>
                <a className="btn btn-ink btn-lg" href={offerteMailto()}>
                  Écrire à {contact.email}
                </a>
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a className="text-link" href={withBase("/contact/")}>
                  Formulaire complet (NL) <span aria-hidden="true">→</span>
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </>
  );
}
