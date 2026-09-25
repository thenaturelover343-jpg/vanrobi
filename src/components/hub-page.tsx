import { Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { OptimizedImage } from "@/components/optimized-image";
import { ProductLink } from "@/components/product-link";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd, seoHead } from "@/lib/seo";
import {
  products,
  iceKgOf,
  flowOf,
  groupLabels,
  useLabels,
  type Product,
} from "@/lib/products";
import { hubs, hubOrder, type HubDef, type HubKey } from "@/lib/hubs";
import { frCatalogUi, frGroupLabels, frProductCopy, frUseLabels } from "@/lib/fr";
import { cn } from "@/lib/cn";
import { withBase } from "@/lib/base";
import { experience } from "@/lib/experience";

function hubProducts(hub: HubDef) {
  return products.filter((p) => p.group === hub.group);
}

function productPath(id: string, lang: "nl" | "fr") {
  return lang === "fr" ? `/fr/produits/${id}` : `/producten/${id}`;
}

export function hubSeo(hub: HubDef, lang: "nl" | "fr") {
  const copy = lang === "fr" ? hub.fr : hub.nl;
  const path = lang === "fr" ? hub.frPath : hub.nlPath;
  const list = hubProducts(hub);
  return seoHead({
    title: copy.title,
    description: copy.description,
    path,
    lang,
    nlPath: hub.nlPath,
    frPath: hub.frPath,
    jsonLd: [
      breadcrumbJsonLd([
        {
          name: lang === "fr" ? "Accueil" : "Home",
          path: lang === "fr" ? "/fr" : "/",
        },
        {
          name: lang === "fr" ? "Produits" : "Producten",
          path: lang === "fr" ? "/fr/produits" : "/producten",
        },
        { name: copy.breadcrumb, path },
      ]),
      itemListJsonLd(
        list.map((p) => ({
          name: `${p.name} ${copy.productKeyword}`,
          path: productPath(p.id, lang),
        })),
        copy.h1,
      ),
      faqJsonLd(copy.faqs),
    ],
  });
}

function HubProductCard({
  product,
  fr,
  productKeyword,
}: {
  product: Product;
  fr: boolean;
  productKeyword: string;
}) {
  const ice = iceKgOf(product);
  const flow = flowOf(product);
  const badge = fr ? (frProductCopy[product.id]?.badge ?? product.badge) : product.badge;
  const groups = fr ? frGroupLabels : groupLabels;
  const uses = fr ? frUseLabels : useLabels;
  const ui = frCatalogUi;
  const linkLabel = `${product.name} ${productKeyword}`;

  return (
    <article className="product-card group">
      <ProductLink id={product.id} className="block">
        <div
          className={cn(
            "product-visual relative aspect-[5/4] overflow-hidden",
            product.imageKind === "diagram" ? "is-diagram" : "",
          )}
        >
          <OptimizedImage
            src={product.image}
            alt={product.alt}
            width={800}
            height={800}
            loading="lazy"
            className={cn(
              "h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]",
              product.imageKind === "diagram" ? "mix-blend-multiply" : "p-3",
            )}
          />
          {product.imageKind === "diagram" ? (
            <span className="absolute top-3 left-3 bg-bg/90 px-2 py-1 text-[0.58rem] tracking-[0.14em] text-ice uppercase">
              {fr ? ui.drawing : "Technische tekening"}
            </span>
          ) : null}
        </div>
      </ProductLink>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-xl">
            <ProductLink id={product.id} className="hover:text-ice">
              {linkLabel}
            </ProductLink>
          </h2>
          <span className="spec-num text-xs text-muted">{product.index}</span>
        </div>
        <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-ice uppercase">{badge}</p>
        {ice || flow ? (
          <p className="spec-num mt-3 text-sm text-fg">
            {ice ? (fr ? `${ice} ${ui.ice}` : `${ice} kg ijs`) : null}
            {ice && flow ? " · " : null}
            {flow ? (fr ? `${flow} ${ui.flow}` : `${flow} L/u`) : null}
          </p>
        ) : (
          <p className="mt-3 text-xs tracking-[0.12em] text-muted uppercase">
            {product.group ? groups[product.group] : fr ? ui.assortment : "Assortiment"}
          </p>
        )}
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {product.uses.slice(0, 3).map((u) => (
            <li key={u} className="tag-chip text-[0.58rem] tracking-[0.1em] uppercase">
              {uses[u]}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProductLink id={product.id} className="btn btn-ghost !min-h-9 !px-3">
            {fr ? ui.details : "Details"}
          </ProductLink>
          <Link to={fr ? "/fr/contact" : "/contact"} className="btn btn-ice !min-h-9 !px-3">
            {fr ? "Devis" : "Offerte"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function HubPage({ hubKey, lang }: { hubKey: HubKey; lang: "nl" | "fr" }) {
  const hub = hubs[hubKey];
  const copy = lang === "fr" ? hub.fr : hub.nl;
  const fr = lang === "fr";
  const list = hubProducts(hub);
  const homePath = fr ? "/fr" : "/";
  const catalogPath = fr ? "/fr/produits" : "/producten";
  const contactPath = fr ? "/fr/contact" : "/contact";

  return (
    <PageShell>
      <PageHero kicker={copy.kicker} title={copy.h1} lede={copy.intro} />

      <nav
        className="mx-auto max-w-[1220px] px-5 pt-6 text-sm text-muted md:px-8"
        aria-label={fr ? "Fil d'Ariane" : "Broodkruimels"}
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to={homePath} className="hover:text-ice">
              {fr ? "Accueil" : "Home"}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link to={catalogPath} className="hover:text-ice">
              {fr ? "Produits" : "Producten"}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-fg">{copy.breadcrumb}</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-[1220px] px-5 py-12 md:px-8">
        {copy.bodyExtra ? (
          <p className="mb-10 max-w-[46rem] text-muted">{copy.bodyExtra}</p>
        ) : null}
        <p className="text-sm text-muted">
          {list.length}{" "}
          {fr
            ? list.length === 1
              ? frCatalogUi.product
              : frCatalogUi.products
            : list.length === 1
              ? "product"
              : "producten"}
          {experience.compare ? (fr ? frCatalogUi.compareMax : " · max. 3 vergelijken") : ""}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <HubProductCard
              key={p.id}
              product={p}
              fr={fr}
              productKeyword={copy.productKeyword}
            />
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-10 text-muted">{fr ? frCatalogUi.none : "Geen producten in deze categorie."}</p>
        ) : null}
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8" aria-labelledby="hub-faq">
        <div className="mx-auto max-w-[1220px]">
          <h2 id="hub-faq" className="text-2xl md:text-3xl">
            {fr ? "Questions fréquentes" : "Veelgestelde vragen"}
          </h2>
          <dl className="mt-8 space-y-6">
            {copy.faqs.map((f) => (
              <div key={f.question}>
                <dt className="text-lg font-medium text-fg">{f.question}</dt>
                <dd className="mt-2 max-w-[46rem] text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <h2 className="text-2xl md:text-3xl">{copy.relatedLabel}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {hubOrder
              .filter((k) => k !== hubKey)
              .map((k) => {
                const other = hubs[k];
                const label = fr ? other.fr.breadcrumb : other.nl.breadcrumb;
                const href = fr ? other.frPath : other.nlPath;
                return (
                  <li key={k}>
                    <a href={withBase(href)} className="btn btn-ghost !min-h-10">
                      {label}
                    </a>
                  </li>
                );
              })}
            <li>
              <Link to={catalogPath} className="btn btn-ghost !min-h-10">
                {copy.catalogLabel}
              </Link>
            </li>
            <li>
              <Link to={contactPath} className="btn btn-ice !min-h-10">
                {copy.quoteLabel}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
