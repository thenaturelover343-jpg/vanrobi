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
import { SocialProof } from "@/components/social-proof";
import { Sizer } from "@/components/sizer";
import { guides } from "@/lib/guides";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Bierkoeler en kegkoeler kopen | VanRobi België & Nederland",
      description:
        "Bierkoelers (ijsbankkoelers) voor de leiding, kegkoelers / fustenkoelers voor het vat, plus serpentijnen, kranen en zuilen. België en Nederland.",
      path: "/",
      frPath: "/fr",
    }),
  component: Home,
});

function Home() {
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
      <SocialProof />
      <section className="border-t border-line px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="kicker">Gidsen</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Kiezen met kennis.</h2>
              <p className="mt-5 max-w-xl text-muted">
                Uitleg, checklists en vergelijkingen — ijsbankkoeler, bierkoeler, tapkoeler, kegkoeler, dry cooler, spiralen, onder-bar en events. Start met{" "}
                <Link to="/gids/$slug" params={{ slug: "bierkoeler-kegkoeler-of-ijsbank" }} className="text-ice hover:underline">
                  bierkoeler, kegkoeler of ijsbankkoeler?
                </Link>
                .
              </p>
            </Reveal>
            <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
              {guides.slice(0, 6).map((g) => (
                <Link
                  key={g.slug}
                  to="/gids/$slug"
                  params={{ slug: g.slug }}
                  className="bg-bg p-7 transition-colors hover:bg-surface"
                >
                  <p className="kicker">{g.eyebrow}</p>
                  <h3 className="mt-4 text-2xl">{g.title}</h3>
                  <p className="mt-3 text-sm text-muted">{g.description}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 flex flex-wrap gap-6">
              <Link to="/gids" className="text-sm tracking-[0.12em] text-ice uppercase hover:underline">
                Alle gidsen →
              </Link>
              <Link to="/faq" className="text-sm tracking-[0.12em] text-ice uppercase hover:underline">
                FAQ →
              </Link>
              <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase hover:underline">
                {products.length} producten →
              </Link>
            </p>
          </div>
          <Sizer />
        </div>
      </section>
      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: site.name,
            email: site.email,
            telephone: site.phoneTel,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              postalCode: site.address.postal,
              addressLocality: site.address.city,
              addressCountry: "BE",
            },
          }),
        }}
      />
    </PageShell>
  );
}
