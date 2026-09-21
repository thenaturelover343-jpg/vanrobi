import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { contact } from "@/lib/contact";
import { frAbout } from "@/lib/fr";

export const Route = createFileRoute("/fr/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — VanRobi" },
      { name: "description", content: frAbout.lede },
    ],
  }),
  component: FrAbout,
});

function FrAbout() {
  return (
    <PageShell>
      <PageHero kicker={frAbout.eyebrow} title={frAbout.title} lede={frAbout.lede} />
      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-3xl">{frAbout.partnershipTitle}</h2>
          <p className="mt-4 text-muted">{frAbout.partnership}</p>
        </div>
        <div>
          <h2 className="text-3xl">{frAbout.localTitle}</h2>
          <p className="mt-4 text-muted">{frAbout.local}</p>
          <p className="mt-4 text-muted">
            Adresse : {contact.address.line}. Tél.{" "}
            <a href={`tel:${contact.phoneTel}`} className="text-ice">
              {contact.phone}
            </a>
            .
          </p>
          <p className="mt-4 text-muted">{frAbout.coverage}</p>
          <p className="mt-6 flex flex-wrap gap-4">
            <Link to="/fr/services" className="text-sm tracking-[0.12em] text-ice uppercase">
              Voir les services →
            </Link>
            <Link to="/regio" className="text-sm tracking-[0.12em] text-muted uppercase">
              Régions (NL)
            </Link>
          </p>
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Faits</p>
          <h2 className="mt-4 text-4xl">{frAbout.factsTitle}</h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Marque", "VanRobi · refroidisseurs à banquise"],
              ["Région", "Belgique & Pays-Bas"],
              ["Focus", "Froid bière & boissons Horeca"],
              ["Service", `${contact.company} · certifié froid`],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="kicker">{t}</dt>
                <dd className="mt-2">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageShell>
  );
}
