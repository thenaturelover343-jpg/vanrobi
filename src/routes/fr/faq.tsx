import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { frFaq } from "@/lib/fr";
import { faqJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/faq")({
  head: () =>
    seoHead({
      title: "FAQ — VanRobi",
      description: frFaq.lede,
      path: "/fr/faq",
      lang: "fr",
      nlPath: "/faq",
      frPath: "/fr/faq",
      jsonLd: [faqJsonLd(frFaq.items)],
    }),
  component: FrFaq,
});

function FrFaq() {
  return (
    <PageShell>
      <PageHero kicker={frFaq.eyebrow} title={frFaq.title} lede={frFaq.lede} />
      <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8">
        <dl className="space-y-10">
          {frFaq.items.map((f) => (
            <div key={f.question} className="border-b border-line pb-8">
              <dt className="font-display text-3xl">{f.question}</dt>
              <dd className="mt-3 text-muted">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <CtaBand />
    </PageShell>
  );
}
