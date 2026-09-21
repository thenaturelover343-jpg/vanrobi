import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { contact, offerteMailto } from "@/lib/contact";
import { frContact } from "@/lib/fr";

export const Route = createFileRoute("/fr/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VanRobi" },
      { name: "description", content: frContact.lede },
    ],
  }),
  component: FrContact,
});

function FrContact() {
  return (
    <PageShell>
      <PageHero kicker={frContact.eyebrow} title={frContact.title} lede={frContact.lede} />
      <section className="mx-auto grid max-w-[1220px] gap-16 px-5 py-20 lg:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-3xl">{frContact.details}</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="kicker">E-mail</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="mt-2 block text-2xl hover:text-ice">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Téléphone</dt>
              <dd>
                <a href={`tel:${contact.phoneTel}`} className="mt-2 block text-2xl hover:text-ice">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Adresse</dt>
              <dd className="mt-2">{contact.address.line}</dd>
            </div>
            <div>
              <dt className="kicker">Maintenance</dt>
              <dd className="mt-2">
                <a href={contact.companyUrl} className="text-ice" target="_blank" rel="noreferrer">
                  {contact.company} · taponderhoud.be
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="text-3xl">Demander un devis</h2>
          <p className="mt-4 text-muted">{frContact.formNote}</p>
          <a href={offerteMailto()} className="btn btn-ice mt-8">
            {frContact.write} {contact.email}
          </a>
          <p className="mt-6">
            <Link to="/contact" className="text-sm tracking-[0.12em] text-ice uppercase">
              {frContact.formNl} →
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
