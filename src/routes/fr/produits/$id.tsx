import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { getProduct, iceKgOf, flowOf, reservoirOf } from "@/lib/products";
import { frFeaturedIds, frProductCopy } from "@/lib/fr";
import { offerteMailto, site } from "@/lib/site";
import { withBase } from "@/lib/base";

export const Route = createFileRoute("/fr/produits/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const copy = loaderData ? frProductCopy[loaderData.product.id] : undefined;
    return {
      meta: [
        { title: `${loaderData?.product.name ?? "Produit"} — VanRobi` },
        {
          name: "description",
          content: copy?.longDescription ?? loaderData?.product.description ?? "",
        },
      ],
    };
  },
  component: FrProduct,
});

function FrProduct() {
  const { product } = Route.useLoaderData();
  const copy = frProductCopy[product.id];
  const ice = iceKgOf(product);
  const flow = flowOf(product);
  const bath = reservoirOf(product);
  const others = frFeaturedIds.filter((id) => id !== product.id).slice(0, 4);

  return (
    <PageShell>
      <section className="grid min-h-[100svh] border-b border-line lg:grid-cols-2">
        <div className="product-visual relative flex min-h-[52vh] items-center justify-center overflow-hidden border-b border-line lg:min-h-full lg:border-b-0 lg:border-r">
          <img
            src={product.image}
            alt={copy ? product.name : product.alt}
            width={1400}
            height={1400}
            className="max-h-[88%] max-w-[88%] object-contain"
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-24 md:px-12">
          <p className="kicker">{product.index} · Via VanRobi · BE & NL</p>
          <h1 className="mt-4 text-5xl md:text-7xl">{product.name}</h1>
          <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-ice uppercase">
            {copy?.badge ?? product.badge}
          </p>
          <p className="mt-6 max-w-xl text-muted">
            {copy?.longDescription ?? product.longDescription}
          </p>
          {ice || flow || bath ? (
            <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
              <div>
                <dt className="text-[0.62rem] tracking-[0.16em] text-muted uppercase">Glace</dt>
                <dd className="spec-num font-display text-4xl text-ice">
                  {ice ? `${ice} kg` : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] tracking-[0.16em] text-muted uppercase">Débit</dt>
                <dd className="spec-num font-display text-4xl">{flow ? `${flow} L/h` : "—"}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] tracking-[0.16em] text-muted uppercase">Bain</dt>
                <dd className="spec-num font-display text-4xl">{bath ? `${bath} L` : "—"}</dd>
              </div>
            </dl>
          ) : null}
          <ul className="mt-8 space-y-3">
            {product.specs.map((s) => (
              <li
                key={s.label}
                className="flex justify-between gap-4 border-b border-line pb-3 text-sm"
              >
                <span className="text-muted">{s.label}</span>
                <strong className="spec-num font-medium">{s.value}</strong>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={offerteMailto(product.name)} className="btn btn-ice">
              Devis {product.name}
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Aussi</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {others.map((id) => {
              const p = getProduct(id);
              if (!p) return null;
              return (
                <a
                  key={id}
                  href={withBase(`/fr/produits/${id}`)}
                  className="text-sm tracking-[0.12em] text-ice uppercase"
                >
                  {p.name} →
                </a>
              );
            })}
            <Link to="/producten" className="text-sm tracking-[0.12em] text-muted uppercase">
              Catalogue NL →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
