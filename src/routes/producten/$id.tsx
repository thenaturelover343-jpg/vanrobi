import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { products, getProduct, iceKgOf, flowOf, reservoirOf, useLabels } from "@/lib/products";
import { faqsForProduct } from "@/lib/faq";
import { ContactForm } from "@/components/contact-form";
import { SocialProof } from "@/components/social-proof";
import { offerteHref, site } from "@/lib/site";
import { MagneticCta } from "@/components/magnetic-cta";
import { ProductGallery } from "@/components/product-gallery";
import { ProductCompareButton } from "@/components/product-compare-button";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "@/components/optimized-image";

export const Route = createFileRoute("/producten/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — VanRobi` },
      {
        name: "description",
        content: loaderData?.product.longDescription ?? loaderData?.product.description ?? "",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const faqs = faqsForProduct(product.id);
  const others = products
    .filter((candidate) => candidate.id !== product.id)
    .sort((a, b) => {
      const score = (candidate: typeof product) =>
        (candidate.group === product.group ? 4 : 0) +
        candidate.uses.filter((use) => product.uses.includes(use)).length;
      return score(b) - score(a) || a.index.localeCompare(b.index);
    })
    .slice(0, 4);
  const ice = iceKgOf(product);
  const flow = flowOf(product);
  const cuba = reservoirOf(product);

  return (
    <PageShell>
      <section className="grid min-h-[100svh] border-b border-line lg:grid-cols-2">
        <ProductGallery product={product} />
        <div className="flex flex-col justify-end px-5 py-24 md:px-12">
          <p className="kicker">{product.index} · Via VanRobi · BE & NL</p>
          <h1 className="mt-4 text-5xl md:text-7xl">{product.name}</h1>
          <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-ice uppercase">
            {product.badge}
          </p>
          <p className="mt-6 max-w-xl text-muted">{product.longDescription}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {product.uses.map((u) => (
              <li
                key={u}
                className="border border-line px-2 py-1 text-[0.62rem] tracking-[0.12em] text-muted uppercase"
              >
                {useLabels[u]}
              </li>
            ))}
          </ul>
          {ice || flow || cuba ? (
            <dl className="mt-10 grid grid-cols-3 gap-3">
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="ice" /> IJs
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {ice ? `${ice}` : "—"}
                  {ice ? (
                    <span className="ml-1 text-base font-medium text-muted md:text-lg">kg</span>
                  ) : null}
                </dd>
              </div>
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="flow" /> Debiet
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {flow ? `${flow}` : "—"}
                  {flow ? (
                    <span className="ml-1 text-base font-medium text-muted md:text-lg">L/u</span>
                  ) : null}
                </dd>
              </div>
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="tank" /> Waterbad
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {cuba ? `${cuba}` : "—"}
                  {cuba ? (
                    <span className="ml-1 text-base font-medium text-muted md:text-lg">L</span>
                  ) : null}
                </dd>
              </div>
            </dl>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticCta>
              <a href={offerteHref(product.name)} className="btn btn-ice">
                Offerte voor {product.name}
              </a>
            </MagneticCta>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
              Bel {site.phone}
            </a>
            <ProductCompareButton id={product.id} name={product.name} />
            <a href={withBase(`/spec-sheets/${product.id}.pdf`)} className="btn btn-ghost" download>
              Spec-sheet PDF ↓
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Of vul het{" "}
            <Link to="/contact" className="text-ice">
              contactformulier
            </Link>{" "}
            in. Lees ook de{" "}
            <Link to="/faq" className="text-ice">
              FAQ
            </Link>
            {" · "}
            <Link
              to="/gids/$slug"
              params={{ slug: "bierkoeler-kiezen-checklist" }}
              className="text-ice"
            >
              keuze-checklist
            </Link>
            {product.id === "v100" || product.id === "v200" ? (
              <>
                {" · "}
                <Link to="/gids/$slug" params={{ slug: "v100-vs-v200" }} className="text-ice">
                  V100 vs V200
                </Link>
                {" · "}
                <Link
                  to="/gids/$slug"
                  params={{ slug: "onder-bar-bierkoeler" }}
                  className="text-ice"
                >
                  onder-bar gids
                </Link>
              </>
            ) : null}
            {product.id === "goldy" || product.id === "v100" ? (
              <>
                {" · "}
                <Link to="/gids/$slug" params={{ slug: "goldy-vs-v100" }} className="text-ice">
                  Goldy vs V100
                </Link>
              </>
            ) : null}
            {product.uses.includes("events") || product.uses.includes("mobiel") ? (
              <>
                {" · "}
                <Link
                  to="/gids/$slug"
                  params={{ slug: "bierkoeler-voor-events" }}
                  className="text-ice"
                >
                  Eventgids
                </Link>
              </>
            ) : null}
            {" · "}
            <Link
              to="/gids/$slug"
              params={{ slug: "spiralen-tapinstallatie" }}
              className="text-ice"
            >
              spiralen & tap
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="specificaties" className="border-b border-line px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="kicker">Technische gegevens</p>
            <h2 className="mt-3 text-4xl">Specificaties van {product.name}</h2>
            <p className="mt-5 max-w-md text-muted">
              Een helder overzicht van de beschikbare productgegevens. We stemmen de definitieve
              uitvoering af op uw installatie en piekvolume.
            </p>
            <a
              href={withBase(`/spec-sheets/${product.id}.pdf`)}
              className="text-link mt-6 inline-flex"
              download
            >
              Download productsheet PDF ↓
            </a>
          </div>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table">
              <caption className="sr-only">Technische specificaties van {product.name}</caption>
              <thead>
                <tr>
                  <th scope="col">Kenmerk</th>
                  <th scope="col">Waarde</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr key={`${spec.label}-${index}`}>
                    <th scope="row">{spec.label}</th>
                    <td className="spec-num">{spec.value}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Toepassing</th>
                  <td>{product.uses.map((use) => useLabels[use]).join(" · ")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {faqs.length ? (
        <section className="mx-auto max-w-[800px] px-5 py-20 md:px-8">
          <p className="kicker">Vragen</p>
          <h2 className="mt-3 text-4xl">FAQ over {product.name}</h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <dt className="text-lg">{f.question}</dt>
                <dd className="mt-2 text-sm text-muted">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <SocialProof modelId={product.id} />

      <section className="border-t border-line px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Offerte</p>
            <h2 className="mt-3 text-4xl">Vraag {product.name} aan</h2>
            <p className="mt-4 text-muted">
              Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en eventueel
              barfoto's. Zo adviseren we gericht.
            </p>
          </div>
          <ContactForm preset={product.name} />
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Gerelateerde modellen</p>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.id}
                to="/producten/$id"
                params={{ id: p.id }}
                className="product-card group block p-0"
              >
                <div className="product-visual flex aspect-square items-center justify-center overflow-hidden">
                  <OptimizedImage
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="px-4 pt-3 text-2xl group-hover:text-ice">{p.name}</h3>
                <p className="px-4 pb-4 text-sm text-muted">{p.badge}</p>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase">
              Volledige catalogus →
            </Link>
          </p>
        </div>
      </section>

      <MagneticCta className="product-sticky-quote">
        <a
          href={offerteHref(product.name)}
          className="btn btn-ice product-sticky-quote-link"
          aria-label={`Vraag een offerte aan voor ${product.name}`}
        >
          Vraag offerte
          <span aria-hidden>→</span>
        </a>
      </MagneticCta>
    </PageShell>
  );
}

function MetricIcon({ kind }: { kind: "ice" | "flow" | "tank" }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
    className: "text-ice",
  };
  if (kind === "ice") {
    return (
      <svg {...common}>
        <path
          d="M8 1.5 L8 14.5 M3.5 4.2 L12.5 11.8 M12.5 4.2 L3.5 11.8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "flow") {
    return (
      <svg {...common}>
        <path
          d="M2 8h9M8.5 4.5 12.5 8 8.5 11.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="4" width="10" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 8h10" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
