import { Link } from "@tanstack/react-router";
import { products, iceKgOf, flowOf, reservoirOf, useLabels, type Product } from "@/lib/products";
import { faqsForProduct } from "@/lib/faq";
import { ContactForm } from "@/components/contact-form";
import { SocialProof } from "@/components/social-proof";
import { site, offerteHref } from "@/lib/site";
import { MagneticCta } from "@/components/magnetic-cta";
import { ProductGallery } from "@/components/product-gallery";
import { ProductCompareButton } from "@/components/product-compare-button";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "@/components/optimized-image";
import { useLang } from "@/lib/i18n";
import { frProductCopy, frProductUi, frUseLabels } from "@/lib/fr";
import { ProductLink } from "@/components/product-link";
import { experience } from "@/lib/experience";
import { PageShell } from "@/components/page-shell";

export function ProductDetail({ product }: { product: Product }) {
  const fr = useLang() === "fr";
  const copy = fr ? frProductCopy[product.id] : undefined;
  const faqs = fr ? [] : faqsForProduct(product.id);
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
  const uses = fr ? frUseLabels : useLabels;
  const lang = fr ? "fr" : "nl";
  const quoteHref = offerteHref(product.name, lang);
  const badge = copy?.badge ?? product.badge;
  const longDescription = copy?.longDescription ?? product.longDescription;
  const ui = frProductUi;

  return (
    <PageShell>
      <section className="grid min-h-[100svh] border-b border-line lg:grid-cols-2">
        <ProductGallery product={product} />
        <div className="flex flex-col justify-end px-5 py-24 md:px-12">
          <p className="kicker">{product.index} · Via VanRobi · BE & NL</p>
          <h1 className="mt-4 text-5xl md:text-7xl">{product.name}</h1>
          <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-ice uppercase">{badge}</p>
          <p className="mt-6 max-w-xl text-muted">{longDescription}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {product.uses.map((u) => (
              <li
                key={u}
                className="border border-line px-2 py-1 text-[0.62rem] tracking-[0.12em] text-muted uppercase"
              >
                {uses[u]}
              </li>
            ))}
          </ul>
          {ice || flow || cuba ? (
            <dl className="mt-10 grid grid-cols-3 gap-3">
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="ice" /> {fr ? ui.ice : "IJs"}
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
                  <MetricIcon kind="flow" /> {fr ? ui.flow : "Debiet"}
                </dt>
                <dd className="spec-num metric-num mt-2 font-display text-4xl md:text-6xl">
                  {flow ? `${flow}` : "—"}
                  {flow ? (
                    <span className="ml-1 text-base font-medium text-muted md:text-lg">
                      {fr ? "L/h" : "L/u"}
                    </span>
                  ) : null}
                </dd>
              </div>
              <div className="metric-box">
                <dt className="flex items-center gap-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                  <MetricIcon kind="tank" /> {fr ? ui.bath : "Waterbad"}
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
              <a href={quoteHref} className="btn btn-ice">
                {fr ? `${ui.quote} ${product.name}` : `Offerte voor ${product.name}`}
              </a>
            </MagneticCta>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
              {fr ? `${ui.call} ${site.phone}` : `Bel ${site.phone}`}
            </a>
            {experience.compare ? (
              <ProductCompareButton id={product.id} name={product.name} />
            ) : null}
            <a href={withBase(`/spec-sheets/${product.id}.pdf`)} className="btn btn-ghost" download>
              {fr ? ui.specSheet : "Spec-sheet PDF ↓"}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            {fr ? (
              <>
                {ui.orFill}{" "}
                <Link to="/fr/contact" className="text-ice">
                  {ui.contactForm}
                </Link>
                . {ui.alsoRead}{" "}
                <Link to="/fr/faq" className="text-ice">
                  {ui.faq}
                </Link>
                .
              </>
            ) : (
              <>
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
              </>
            )}
          </p>
        </div>
      </section>

      <section id="specificaties" className="border-b border-line px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="kicker">{fr ? ui.specsKicker : "Technische gegevens"}</p>
            <h2 className="mt-3 text-4xl">
              {fr ? `${ui.specsTitle} ${product.name}` : `Specificaties van ${product.name}`}
            </h2>
            <p className="mt-5 max-w-md text-muted">
              {fr
                ? ui.specsLede
                : "Een helder overzicht van de beschikbare productgegevens. We stemmen de definitieve uitvoering af op uw installatie en piekvolume."}
            </p>
            <a
              href={withBase(`/spec-sheets/${product.id}.pdf`)}
              className="text-link mt-6 inline-flex"
              download
            >
              {fr ? ui.downloadSheet : "Download productsheet PDF ↓"}
            </a>
          </div>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table">
              <caption className="sr-only">
                {fr
                  ? `${ui.specsTitle} ${product.name}`
                  : `Technische specificaties van ${product.name}`}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{fr ? ui.feature : "Kenmerk"}</th>
                  <th scope="col">{fr ? ui.value : "Waarde"}</th>
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
                  <th scope="row">{fr ? ui.application : "Toepassing"}</th>
                  <td>{product.uses.map((use) => uses[use]).join(" · ")}</td>
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
            <p className="kicker">{fr ? ui.quoteKicker : "Offerte"}</p>
            <h2 className="mt-3 text-4xl">
              {fr ? `${ui.quoteTitle} ${product.name}` : `Vraag ${product.name} aan`}
            </h2>
            <p className="mt-4 text-muted">{fr ? ui.quoteLede : "Vermeld model (of piekvolume), vast versus mobiel, aantal kranen en eventueel barfoto's. Zo adviseren we gericht."}</p>
          </div>
          <ContactForm preset={product.name} />
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">{fr ? ui.related : "Gerelateerde modellen"}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {others.map((p) => (
              <ProductLink key={p.id} id={p.id} className="product-card group block p-0">
                <div className="product-visual flex aspect-square items-center justify-center overflow-hidden">
                  <OptimizedImage
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="px-4 pt-3 text-2xl group-hover:text-ice">{p.name}</h3>
                <p className="px-4 pb-4 text-sm text-muted">
                  {fr ? (frProductCopy[p.id]?.badge ?? p.badge) : p.badge}
                </p>
              </ProductLink>
            ))}
          </div>
          <p className="mt-10">
            <Link
              to={fr ? "/fr/produits" : "/producten"}
              className="text-sm tracking-[0.12em] text-ice uppercase"
            >
              {fr ? ui.catalog : "Volledige catalogus →"}
            </Link>
          </p>
        </div>
      </section>

      <MagneticCta className="product-sticky-quote">
        <a
          href={quoteHref}
          className="btn btn-ice product-sticky-quote-link"
          aria-label={
            fr
              ? `Demander un devis pour ${product.name}`
              : `Vraag een offerte aan voor ${product.name}`
          }
        >
          {fr ? ui.sticky : "Vraag offerte"}
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