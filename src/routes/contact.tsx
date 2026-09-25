import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/contact";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      title: "Contact — VanRobi offerte",
      description: "Offerte voor een bierkoeler of kegkoeler. Beschrijf uw bar of event, antwoord binnen één werkdag. Onderhoud via Taponderhoud.",
      path: "/contact",
      frPath: "/fr/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Contact"
        title="Offerte of vraag?"
        lede="Stuur uw aanvraag. We antwoorden binnen één werkdag. Machines via VanRobi, onderhoud via Taponderhoud."
      />
      <section className="mx-auto grid max-w-[1220px] gap-16 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <h2 className="text-3xl">Gegevens</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="kicker">E-mail</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="mt-2 block text-2xl text-fg hover:text-ice">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Telefoon</dt>
              <dd>
                <a href={`tel:${contact.phoneTel}`} className="mt-2 block text-2xl text-fg hover:text-ice">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Adres</dt>
              <dd className="mt-2 text-lg">{contact.address.line}</dd>
            </div>
            <div>
              <dt className="kicker">Regio</dt>
              <dd className="mt-2 text-muted">{contact.regions}</dd>
            </div>
            <div>
              <dt className="kicker">Onderhoud</dt>
              <dd className="mt-2">
                <a href={contact.companyUrl} target="_blank" rel="noreferrer" className="text-ice">
                  {contact.company} · taponderhoud.be
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="text-3xl">Offerteformulier</h2>
          <p className="mt-3 text-sm text-muted">
            Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en eventueel barfoto's.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="prose mx-auto max-w-[42rem]">
          <h2>Ijsbankkoeler offerte: wat we nodig hebben</h2>
          <p>
            Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en eventueel barfoto's. Zo adviseren we gericht tussen bijvoorbeeld{" "}
            <Link to="/producten/$id" params={{ id: "v100" }}>V100</Link>,{" "}
            <Link to="/producten/$id" params={{ id: "v200" }}>V200</Link> of{" "}
            <Link to="/producten/$id" params={{ id: "goldy" }}>Goldy</Link>.
          </p>
          <h3>NAP & regio</h3>
          <p>
            {contact.address.line} · {contact.phone} · {contact.email}. We werken in {contact.regions}, en leveren in Nederland. Zie{" "}
            <Link to="/regio">regio's</Link>, <Link to="/diensten">diensten</Link> of de <Link to="/faq">FAQ</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
