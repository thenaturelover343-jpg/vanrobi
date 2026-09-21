import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { frFaq } from "@/lib/fr";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/faq")({
  head: () =>
    seoHead({
      title: "FAQ — VanRobi",
      description: frFaq.lede,
      path: "/fr/faq",
      lang: "fr",
      nlPath: "/faq",
      frPath: "/fr/faq",
    }),
  component: FrFaq,
});

function FrFaq() {
  return (
    <PageShell>
      <PageHero kicker={frFaq.eyebrow} title={frFaq.title} lede={frFaq.lede} />
      <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8">
        <div className="space-y-0">
          {frFaq.items.map((item) => (
            <details key={item.question} className="border-t border-line py-5">
              <summary className="cursor-pointer text-xl">{item.question}</summary>
              <p className="mt-3 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 flex flex-wrap gap-6">
          <Link to="/fr/contact" className="text-sm tracking-[0.12em] text-ice uppercase">
            Demander un devis →
          </Link>
          <Link to="/faq" className="text-sm tracking-[0.12em] text-muted uppercase">
            FAQ complète (NL)
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
