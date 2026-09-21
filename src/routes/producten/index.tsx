import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { ProductCatalog } from "@/components/product-catalog";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/lib/products";

export const Route = createFileRoute("/producten/")({
  head: () => ({
    meta: [
      {
        title: `Ijsbankkoeler-catalogus — ${products.length} producten | VanRobi`,
      },
      {
        name: "description",
        content: `${products.length} producten in de VanRobi-catalogus: koelers, serpentijnen, dispensing en onderdelen. Filter op gebruik of productgroep — voor installateurs, horeca en events in België & Nederland.`,
      },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  return (
    <PageShell>
      <PageHero
        kicker="Assortiment"
        title="Ijsbankkoeler-catalogus. Via VanRobi."
        lede={`${products.length} producten: koelers, serpentijnen, tap & uitschenken en onderdelen. Filter op gebruik of productgroep — voor installateurs, horeca en events in België & Nederland.`}
      />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <ProductCatalog />
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>Hulp bij de keuze?</h2>
          <p>
            Lees onze gidsen:{" "}
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
