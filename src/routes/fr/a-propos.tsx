import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { contact } from "@/lib/contact";
import { frAbout } from "@/lib/fr";
import { seoHead } from "@/lib/seo";
import { ProductLink } from "@/components/product-link";

export const Route = createFileRoute("/fr/a-propos")({
  head: () =>
    seoHead({
      title: "À propos — VanRobi",
      description:
        "VanRobi livre des refroidisseurs de bière et de fût pour l'horeca en Belgique et aux Pays-Bas. Specs claires, conseil depuis Kasterlee.",
      path: "/fr/a-propos",
      lang: "fr",
      nlPath: "/over-ons",
      frPath: "/fr/a-propos",
    }),
  component: FrAbout,
});

function FrAbout() {
  return (
    <PageShell>
      <PageHero kicker={frAbout.eyebrow} title={frAbout.title} lede={frAbout.lede} />
      <section className="mx-auto grid max-w-[1220px] gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="prose">
          <h2>{frAbout.partnershipTitle}</h2>
          <p>{frAbout.partnership}</p>
        </div>
        <div className="prose">
          <h2>{frAbout.localTitle}</h2>
          <p>
            VanRobi collabore avec{" "}
            <a href={contact.companyUrl} target="_blank" rel="noreferrer">
              {contact.company}
            </a>{" "}
            pour la maintenance, le nettoyage, les réparations et le placement des
            refroidissements. Certifié froid, avec base en Campine et couverture en{" "}
            {contact.regions}.
          </p>
          <p>{frAbout.coverage}</p>
          <p>
            <Link to="/fr/services" className="text-ice">
              Voir les services →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-2 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">{frAbout.factsKicker}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            {frAbout.factsBefore} <em className="italic text-ice">{frAbout.factsEm}</em>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {frAbout.facts.map((f) => (
              <div key={f.t}>
                <h3 className="font-sans text-sm tracking-[0.14em] text-ice uppercase">{f.t}</h3>
                <p className="mt-3 text-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>{frAbout.whyTitle}</h2>
          <p>
            {frAbout.whyBody} Régions : {contact.regions}, plus les Pays-Bas.
          </p>
          <h3>{frAbout.assortTitle}</h3>
          <p>
            Du sur bar (<ProductLink id="goldy">Goldy</ProductLink>) au sous bar high volume (
            <ProductLink id="v200">V200</ProductLink>). {frAbout.assortBody}{" "}
            <Link to="/fr/faq">FAQ</Link>.
          </p>
          <p>
            <Link to="/fr/contact">{frAbout.contactCta}</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
