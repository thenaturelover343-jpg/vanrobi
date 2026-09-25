import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { ProductCatalog } from "@/components/product-catalog";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/lib/products";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/producten/")({
  head: () =>
    seoHead({
      title: "Bierkoeler, kegkoeler en ijsbankkoeler | VanRobi",
      description:
        "Catalogus bierkoelers, kegkoelers en serpentijnen voor horeca. Filter op capaciteit en vraag een offerte. Levering in België en Nederland.",
      path: "/producten",
      frPath: "/fr/produits",
    }),
  component: Catalog,
});

function Catalog() {
  return (
    <PageShell>
      <PageHero
        kicker="Assortiment"
        title="Bierkoeler, kegkoeler en ijsbankkoeler"
        lede={`${products.length} producten: bierkoelers (ijsbank), kegkoelers (fustenkoelers), serpentijnen, tap & zuilen en onderdelen. Een kegkoeler koelt het vat; een bierkoeler koelt de leiding. België & Nederland.`}
      />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <ProductCatalog />
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>Hulp bij de keuze?</h2>
          <p>
            Lees onze gidsen:{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-kegkoeler-of-ijsbank" }}>
              bierkoeler, kegkoeler of ijsbank
            </Link>
            ,{" "}
            <Link to="/gids/$slug" params={{ slug: "wat-is-een-ijsbankkoeler" }}>
              wat is een ijsbankkoeler
            </Link>
            ,{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-kopen-belgie-nederland" }}>
              bierkoeler kopen BE/NL
            </Link>
            ,{" "}
            <Link to="/gids/$slug" params={{ slug: "v100-vs-v200" }}>
              V100 vs V200
            </Link>
            ,{" "}
            <Link to="/gids/$slug" params={{ slug: "goldy-vs-v100" }}>
              Goldy vs V100
            </Link>
            . Bekijk ook de <Link to="/faq">FAQ</Link> en{" "}
            <Link to="/regio">regio's</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
