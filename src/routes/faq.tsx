import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { generalFaqs } from "@/lib/faq";
import { CtaBand } from "@/components/cta-band";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    seoHead({
      title: "FAQ bierkoeler en kegkoeler | VanRobi",
      description: "Vragen over bierkoelers en kegkoelers: V100 of V200, events, levering en onderhoud. Antwoord binnen één werkdag.",
      path: "/faq",
      frPath: "/fr/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageShell>
      <PageHero
        kicker="FAQ"
        title="Veelgestelde vragen."
        lede="Als het niet in deze lijst staat, mailen is sneller dan raden. Machines via VanRobi, onderhoud via Taponderhoud."
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
