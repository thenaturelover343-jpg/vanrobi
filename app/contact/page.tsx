import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact & offerte — VanRobi",
  description:
    "Contacteer VanRobi voor een Golderos-offerte. Kemelbeekstraat 16, Kasterlee. info@vanrobi.be · +32 (0)14 71 80 80.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title={["Offerte of", <em key="e">vraag?</em>]}
          lede="Stuur uw aanvraag — we antwoorden binnen één werkdag. Machines via VanRobi, onderhoud via Taponderhoud."
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
      </main>
      <Footer />
    </>
  );
}
