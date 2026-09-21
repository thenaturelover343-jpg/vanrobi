import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { frHome, frProductCopy, frCta } from "@/lib/fr";
import { site, offerteMailto } from "@/lib/site";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "@/components/optimized-image";

const FR_MACHINES: { id: string; name: string; image: string }[] = [
  { id: "goldy", name: "Goldy", image: withBase("/products/goldy.jpg") },
  { id: "picky", name: "Picky", image: withBase("/products/picky.jpg") },
  { id: "v100", name: "V100", image: withBase("/products/v100.jpg") },
  { id: "v200", name: "V200", image: withBase("/products/v200.jpg") },
  { id: "v100-portable", name: "V100 portable", image: withBase("/products/v100-portable.jpg") },
  { id: "v200-portable", name: "V200 portable", image: withBase("/products/v200-portable.jpg") },
];

export const Route = createFileRoute("/fr/")({
  head: () => ({
    meta: [
      { title: "VanRobi — Refroidisseurs à banquise BE & NL" },
      { name: "description", content: frHome.lede },
    ],
  }),
  component: FrHome,
});

function FrHome() {
  const products = FR_MACHINES.map((m) => ({ ...m, ...frProductCopy[m.id] }));

  return (
    <PageShell>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="ice-fallback absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1220px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="kicker">{frHome.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-fg md:text-6xl">
            {frHome.title}
          </h1>
          <p className="mt-4 font-display text-2xl italic text-ice md:text-3xl">{frHome.slogan}</p>
          <p className="mt-6 max-w-xl text-[1.02rem] text-muted">{frHome.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/fr/contact" className="btn btn-ice">
              {frHome.cta}
            </Link>
            <Link to="/fr/produits" className="btn btn-ghost">
              {frHome.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg-2">
        <div className="mx-auto grid max-w-[1220px] gap-0 lg:grid-cols-2">
          <div className="photo-well bright min-h-[42vh] lg:min-h-[70vh]">
            <OptimizedImage
              src={withBase("/worlds/statement-tap.jpg")}
              alt=""
              width={1600}
              height={1067}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12">
            <Reveal>
              <p className="kicker">{frHome.statementKicker}</p>
              <h2 className="mt-4 text-4xl md:text-6xl">{frHome.statementTitle}</h2>
              <p className="mt-6 max-w-md text-lg text-muted">{frHome.statementSub}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <p className="kicker">{frHome.whyTitle}</p>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Un partenaire <em className="italic text-ice">local</em>
            </h2>
            <p className="mt-5 max-w-md text-muted">{frHome.whyIntro}</p>
          </Reveal>
          <ol className="mt-12 space-y-8">
            {frHome.why.map((item) => (
              <li
                key={item.n}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line pt-6"
              >
                <span className="spec-num text-ice">{item.n}</span>
                <div>
                  <h3 className="font-sans text-base tracking-[0.04em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <p className="kicker">{frHome.machinesKicker}</p>
            <h2 className="mt-4 text-4xl md:text-6xl">{frHome.machinesTitle}</h2>
            <p className="mt-5 max-w-lg text-muted">{frHome.machinesLede}</p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <a
                key={p.id}
                href={withBase(`/fr/produits/${p.id}`)}
                className="bg-bg p-6 transition-colors hover:bg-surface"
              >
                <div className="product-visual aspect-[5/4]">
                  <OptimizedImage
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full p-5"
                  />
                </div>
                <p className="kicker mt-5">{p.badge}</p>
                <h3 className="mt-2 text-3xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </a>
            ))}
          </div>
          <p className="mt-8">
            <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase">
              {frHome.catalogNl} →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line px-5 py-24 md:px-8" id="offerte">
        <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="kicker">{frCta.kicker}</p>
            <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">{frCta.title}</h2>
            <p className="mt-4 max-w-md text-muted">{frCta.lede}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={offerteMailto()} className="btn btn-ice">
              {frCta.mail}
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
