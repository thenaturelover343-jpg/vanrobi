import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/contact";
import { frContact } from "@/lib/fr";
import { seoHead } from "@/lib/seo";
import { ProductLink } from "@/components/product-link";

export const Route = createFileRoute("/fr/contact")({
  head: () =>
    seoHead({
      title: "Contact — VanRobi devis",
      description: frContact.lede,
      path: "/fr/contact",
      lang: "fr",
      nlPath: "/contact",
      frPath: "/fr/contact",
    }),
  component: FrContact,
});

function FrContact() {
  return (
    <PageShell>
      <PageHero kicker={frContact.eyebrow} title={frContact.title} lede={frContact.lede} />
      <section className="mx-auto grid max-w-[1220px] gap-16 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <h2 className="text-3xl">{frContact.details}</h2>
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
              <dt className="kicker">Téléphone</dt>
              <dd>
                <a href={`tel:${contact.phoneTel}`} className="mt-2 block text-2xl text-fg hover:text-ice">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Adresse</dt>
              <dd className="mt-2 text-lg">{contact.address.line}</dd>
            </div>
            <div>
              <dt className="kicker">{frContact.region}</dt>
              <dd className="mt-2 text-muted">{contact.regions}</dd>
            </div>
            <div>
              <dt className="kicker">{frContact.maintenance}</dt>
              <dd className="mt-2">
                <a href={contact.companyUrl} target="_blank" rel="noreferrer" className="text-ice">
                  {contact.company} · taponderhoud.be
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="text-3xl">{frContact.formTitle}</h2>
          <p className="mt-3 text-sm text-muted">{frContact.formNote}</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="prose mx-auto max-w-[42rem]">
          <h2>{frContact.helpTitle}</h2>
          <p>
            {frContact.helpBody}{" "}
            <ProductLink id="v100">V100</ProductLink>,{" "}
            <ProductLink id="v200">V200</ProductLink> ou{" "}
            <ProductLink id="goldy">Goldy</ProductLink>.
          </p>
          <h3>NAP & région</h3>
          <p>
            {contact.address.line} · {contact.phone} · {contact.email}. Voir{" "}
            <Link to="/fr/services">services</Link> ou la <Link to="/fr/faq">FAQ</Link>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
