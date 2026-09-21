import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/contact";
import { frServices } from "@/lib/fr";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/services")({
  head: () =>
    seoHead({
      title: "Services — VanRobi",
      description: frServices.lede,
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
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <ol className="space-y-8">
          {frServices.items.map((item) => (
            <li key={item.n} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line pt-6">
              <span className="spec-num text-ice">{item.n}</span>
              <div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Reveal>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-3xl">{frServices.partnerTitle}</h2>
            <p className="mt-4 text-muted">
              {frServices.partnerBody.split("Taponderhoud").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href={contact.companyUrl} className="text-ice" target="_blank" rel="noreferrer">
                      {contact.company}
                    </a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </p>
            <h2 className="mt-10 text-3xl">{frServices.howTitle}</h2>
            <p className="mt-4 text-muted">{frServices.howBody}</p>
            <p className="mt-8">
              <Link to="/fr/contact" className="text-sm tracking-[0.12em] text-ice uppercase">
                Prendre rendez-vous →
              </Link>
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
