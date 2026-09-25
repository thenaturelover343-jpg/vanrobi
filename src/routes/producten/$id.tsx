import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { ProductDetail } from "@/components/product-detail";
import { breadcrumbJsonLd, productJsonLd, productMetaDescription, productTitle, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/producten/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return seoHead({ title: "Product | VanRobi", description: "", path: "/producten" });
    return seoHead({
      title: productTitle(product, "nl"),
      description: productMetaDescription(product, "nl"),
      path: `/producten/${product.id}`,
      frPath: `/fr/produits/${product.id}`,
      jsonLd: [
        productJsonLd({
          name: product.name,
          description: product.longDescription || product.description,
          image: product.image,
          path: `/producten/${product.id}`,
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Producten", path: "/producten" },
          { name: product.name, path: `/producten/${product.id}` },
        ]),
      ],
    });
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
