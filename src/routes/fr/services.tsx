import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { contact } from "@/lib/contact";
import { frServices } from "@/lib/fr";
import { seoHead } from "@/lib/seo";
import { ProductLink } from "@/components/product-link";

export const Route = createFileRoute("/fr/services")({
  head: () =>
    seoHead({
      title: "Services — VanRobi",
      description:
        "Conseil et livraison de refroidisseurs de bière pour l'horeca. Entretien et réparations par Taponderhoud, depuis la Campine.",
      path: "/fr/services",
      lang: "fr",
      nlPath: "/diensten",
      frPath: "/fr/services",
    }),
  component: FrServices,
});

function FrServices() {
  return (
    <PageShell>
      <PageHero kicker={frServices.eyebrow} title={frServices.title} lede={frServices.lede} />
      <section className="mx-auto max-w-[1220px] px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {frServices.items.map((s) => (
            <article key={s.n} className="border-t border-line pt-6">
              <p className="spec-num text-ice">{s.n}</p>
              <h2 className="mt-4 text-3xl">{s.title}</h2>
              <p className="mt-4 text-muted">{s.text}</p>
            </article>
          ))}
        </div>
        <div className="prose mt-16 max-w-[40rem]">
          <h2>{frServices.partnerTitle}</h2>
          <p>
            {frServices.partnerBody.split("Taponderhoud").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <a href={contact.companyUrl} target="_blank" rel="noreferrer">
                    {contact.company}
                  </a>
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </p>
          <p>
            <Link to="/fr/contact">Prendre rendez-vous →</Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-bg-2 px-5 py-20 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>{frServices.adviceTitle}</h2>
          <p>
            Que vous cherchiez un <ProductLink id="v100">V100 sous bar</ProductLink> ou une{" "}
            <ProductLink id="goldy">Goldy sur bar</ProductLink> pour events : nous dimensionnons
            sur le volume de pointe, le meuble et la tuyauterie. Voir aussi la{" "}
            <Link to="/fr/faq">FAQ</Link>.
          </p>
          <h3>{frServices.regionsTitle}</h3>
          <p>
            Depuis Kasterlee (Tielen) nous conseillons et livrons en {contact.regions}, plus les
            Pays-Bas.
          </p>
          <h3>{frServices.howTitle}</h3>
          <p>
            {frServices.howBody} (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ). Questions ? Voir la <Link to="/fr/faq">FAQ</Link> ou{" "}
            <Link to="/fr/contact">demander un devis</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
