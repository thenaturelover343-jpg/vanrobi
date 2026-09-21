import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { generalFaqs } from "@/lib/faq";
import { CtaBand } from "@/components/cta-band";
import { faqJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    seoHead({
      title: "FAQ — VanRobi",
      description:
        "Veelgestelde vragen over ijsbankkoelers, levering, onderhoud, V100 vs V200, events en offertes.",
      path: "/faq",
      frPath: "/fr/faq",
      jsonLd: [faqJsonLd(generalFaqs)],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageShell>
      <PageHero
        kicker="FAQ"
        title="Veelgestelde vragen."
        lede="Als het niet in deze lijst staat, mailen is sneller dan raden. Onderhoud via Taponderhoud."
      />
      <section className="mx-auto max-w-[800px] px-5 py-16 md:px-8">
        <dl className="space-y-10">
          {generalFaqs.map((f) => (
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
