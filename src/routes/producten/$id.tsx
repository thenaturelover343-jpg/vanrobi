import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import {
  featuredProducts,
  getProduct,
  iceKgOf,
  flowOf,
  reservoirOf,
  useLabels,
} from "@/lib/products";
import { faqsForProduct } from "@/lib/faq";
import { ContactForm } from "@/components/contact-form";
import { SocialProof } from "@/components/social-proof";
import { offerteHref, site } from "@/lib/site";

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
  const others = featuredProducts.filter((p) => p.id !== product.id).slice(0, 4);
  const ice = iceKgOf(product);
  const flow = flowOf(product);
  const cuba = reservoirOf(product);

  return (
    <PageShell>
      <section className="grid min-h-[100svh] border-b border-line lg:grid-cols-2">
        <div
          className={`relative flex min-h-[52vh] items-center justify-center overflow-hidden border-b border-line lg:min-h-full lg:border-b-0 lg:border-r ${
            product.imageKind === "diagram" ? "bg-diagram" : "bg-well"
          }`}
        >
          <img
            src={product.image}
            alt={product.alt}
            width={1400}
            height={1400}
            className={`max-h-[88%] max-w-[88%] object-contain ${
              product.imageKind === "diagram" ? "mix-blend-multiply" : ""
            }`}
          />
          {product.imageKind === "diagram" ? (
            <span className="absolute top-5 left-5 bg-bg/80 px-2 py-1 text-[0.58rem] tracking-[0.14em] text-ice uppercase">
              Technische tekening
            </span>
          ) : null}
        </div>
        <div className="flex flex-col justify-end px-5 py-24 md:px-12">
          <p className="kicker">
            {product.index} · Via VanRobi · BE & NL
          </p>
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
                  {ice ? <span className="ml-1 text-base font-medium text-muted md:text-lg">kg</span> : null}
                </dd>
              </div>
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="flow" /> Debiet
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {flow ? `${flow}` : "—"}
                  {flow ? <span className="ml-1 text-base font-medium text-muted md:text-lg">L/u</span> : null}
                </dd>
              </div>
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="tank" /> Waterbad
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {cuba ? `${cuba}` : "—"}
                  {cuba ? <span className="ml-1 text-base font-medium text-muted md:text-lg">L</span> : null}
                </dd>
              </div>
            </dl>
          ) : null}
          <ul className="mt-8 space-y-3">
            {product.specs.map((s) => (
              <li key={s.label} className="flex justify-between gap-4 border-b border-line pb-3 text-sm">
                <span className="text-muted">{s.label}</span>
                <strong className="spec-num font-medium">{s.value}</strong>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={offerteHref(product.name)} className="btn btn-ice">
              Offerte voor {product.name}
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
              Bel {site.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Of vul het <Link to="/contact" className="text-ice">contactformulier</Link> in.
            {" "}Lees ook de <Link to="/faq" className="text-ice">FAQ</Link>
            {" · "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-kiezen-checklist" }} className="text-ice">
              keuze-checklist
            </Link>
            {product.id === "v100" || product.id === "v200" ? (
              <>
                {" · "}
                <Link to="/gids/$slug" params={{ slug: "v100-vs-v200" }} className="text-ice">
                  V100 vs V200
                </Link>
                {" · "}
                <Link to="/gids/$slug" params={{ slug: "onder-bar-bierkoeler" }} className="text-ice">
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
                <Link to="/gids/$slug" params={{ slug: "bierkoeler-voor-events" }} className="text-ice">
                  Eventgids
                </Link>
              </>
            ) : null}
            {" · "}
            <Link to="/gids/$slug" params={{ slug: "spiralen-tapinstallatie" }} className="text-ice">
              spiralen & tap
            </Link>
            .
          </p>
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
              Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en
              eventueel barfoto's. Zo adviseren we gericht.
            </p>
          </div>
          <ContactForm preset={product.name} />
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Ook in het assortiment</p>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {others.map((p) => (
              <Link key={p.id} to="/producten/$id" params={{ id: p.id }} className="product-card group block p-0">
                <div className="bg-well flex aspect-square items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.alt} className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]" />
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
        <path d="M8 1.5 L8 14.5 M3.5 4.2 L12.5 11.8 M12.5 4.2 L3.5 11.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "flow") {
    return (
      <svg {...common}>
        <path d="M2 8h9M8.5 4.5 12.5 8 8.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

