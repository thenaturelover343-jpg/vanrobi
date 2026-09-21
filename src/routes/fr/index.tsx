import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { TempRail } from "@/components/temp-rail";
import { HomeHero } from "@/components/home-hero";
import { Cutaway } from "@/components/cutaway";
import { WhyVanRobi } from "@/components/why-vanrobi";
import { MachineStage } from "@/components/machine-stage";
import { AssortmentCats } from "@/components/assortment-cats";
import { Worlds } from "@/components/worlds";
import { PartnerBand } from "@/components/partner-band";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Sizer } from "@/components/sizer";
import { frFaq, frHome } from "@/lib/fr";
import { products } from "@/lib/products";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/")({
  head: () =>
    seoHead({
      title: "VanRobi — Refroidisseurs à banquise professionnels pour l'horeca",
      description: frHome.lede,
      path: "/fr",
      lang: "fr",
      nlPath: "/",
      frPath: "/fr",
    }),
  component: FrHome,
});

function FrHome() {
  return (
    <PageShell>
      <TempRail />
      <HomeHero />
      <Cutaway />
      <WhyVanRobi />
      <MachineStage />
      <AssortmentCats />
      <Worlds />
      <PartnerBand />
      <section className="border-t border-line px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="kicker">FAQ</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Choisir en connaissance.</h2>
              <p className="mt-5 max-w-xl text-muted">{frFaq.lede}</p>
            </Reveal>
            <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
              {frFaq.items.slice(0, 6).map((item) => (
                <Link
                  key={item.question}
                  to="/fr/faq"
                  className="bg-bg p-7 transition-colors hover:bg-surface"
                >
                  <p className="kicker">FAQ</p>
                  <h3 className="mt-4 text-2xl">{item.question}</h3>
                  <p className="mt-3 text-sm text-muted">{item.answer}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 flex flex-wrap gap-6">
              <Link to="/fr/faq" className="text-sm tracking-[0.12em] text-ice uppercase hover:underline">
                Toute la FAQ →
              </Link>
              <Link
                to="/fr/produits"
                className="text-sm tracking-[0.12em] text-ice uppercase hover:underline"
              >
                {products.length} produits →
              </Link>
            </p>
          </div>
          <Sizer />
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
