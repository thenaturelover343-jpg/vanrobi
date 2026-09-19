import type { Metadata } from "next";
import { pageSeo, metaFromEntry } from "@/lib/seo-meta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/contact";
import { withBase } from "@/lib/base";

export const metadata: Metadata = metaFromEntry(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title={["Offerte of", <em key="e">vraag?</em>]}
          lede="Stuur uw aanvraag. We antwoorden binnen één werkdag. Machines via VanRobi, onderhoud via Taponderhoud."
        />

        <section className="page-section">
          <div className="wrap contact-layout">
            <Reveal className="contact-details">
              <h2>Gegevens</h2>
              <dl className="contact-dl">
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Telefoon</dt>
                  <dd>
                    <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Adres</dt>
                  <dd>{contact.address.line}</dd>
                </div>
                <div>
                  <dt>Regio</dt>
                  <dd>{contact.regions}</dd>
                </div>
                <div>
                  <dt>Onderhoud</dt>
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

            <Reveal className="contact-form-wrap reveal-delay-1">
              <h2>Offerteformulier</h2>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="page-section page-section-alt">
          <div className="wrap prose" style={{ maxWidth: "42rem" }}>
            <h2>Ijsbankkoeler offerte: wat we nodig hebben</h2>
            <p>
              Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en
              eventueel barfoto&apos;s. Zo adviseren we gericht tussen bijvoorbeeld{" "}
              <a href={withBase("/producten/v100/")}>V100</a>,{" "}
              <a href={withBase("/producten/v200/")}>V200</a> of{" "}
              <a href={withBase("/producten/goldy/")}>Goldy</a>.
            </p>
            <h3>NAP &amp; regio</h3>
            <p>
              {contact.address.line} · {contact.phone} · {contact.email}. We werken in{" "}
              {contact.regions}, en leveren in Nederland. Zie{" "}
              <a href={withBase("/regio/")}>regio&apos;s</a>,{" "}
              <a href={withBase("/diensten/")}>diensten</a> of de{" "}
              <a href={withBase("/faq/")}>FAQ</a>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
