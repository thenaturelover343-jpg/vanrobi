import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { frProductCopy } from "@/lib/fr";
import { ProductDetail } from "@/components/product-detail";
import { breadcrumbJsonLd, productJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/fr/produits/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    const copy = product ? frProductCopy[product.id] : undefined;
    if (!product)
      return seoHead({ title: "Produit — VanRobi", description: "", path: "/fr/produits", lang: "fr" });
    const description = copy?.longDescription ?? product.longDescription ?? product.description;
    return seoHead({
      title: `${product.name} — VanRobi`,
      description,
      path: `/fr/produits/${product.id}`,
      lang: "fr",
      nlPath: `/producten/${product.id}`,
      frPath: `/fr/produits/${product.id}`,
      jsonLd: [
        productJsonLd({
          name: product.name,
          description,
          image: product.image,
          path: `/fr/produits/${product.id}`,
        }),
        breadcrumbJsonLd([
          { name: "Accueil", path: "/fr" },
          { name: "Produits", path: "/fr/produits" },
          { name: product.name, path: `/fr/produits/${product.id}` },
        ]),
      ],
    });
  },
  component: FrProduct,
});

function FrProduct() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
