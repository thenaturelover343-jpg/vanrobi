import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { ProductCatalog } from "@/components/product-catalog";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/lib/products";
import { frProductsIntro } from "@/lib/fr";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/produits/")({
  head: () =>
    seoHead({
      title: "Refroidisseur de bière, de fût et à banquise | VanRobi",
      description:
        "Catalogue de refroidisseurs de bière, de fût et de serpentins pour l'horeca. Filtrez par capacité et demandez un devis. Belgique et Pays-Bas.",
      path: "/fr/produits",
      lang: "fr",
      nlPath: "/producten",
      frPath: "/fr/produits",
    }),
  component: FrProduits,
});

function FrProduits() {
  return (
    <PageShell>
      <PageHero
        kicker={frProductsIntro.eyebrow}
        title={frProductsIntro.title}
        lede={`${products.length} produits : ${frProductsIntro.lede}`}
      />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <ProductCatalog />
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>{frProductsIntro.helpTitle}</h2>
          <p>
            Consultez la <Link to="/fr/faq">FAQ</Link> : Goldy vs V100, events, devis. Ou{" "}
            <Link to="/fr/contact">demandez un devis</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
