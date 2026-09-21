import { categories } from "@/lib/products";
import { Reveal } from "./reveal";
import { OptimizedImage } from "./optimized-image";
import { useLang } from "@/lib/i18n";
import { frAssortmentCopy } from "@/lib/fr";
import { withBase } from "@/lib/base";

export function AssortmentCats() {
  const fr = useLang() === "fr";
  return (
    <section className="border-t border-line px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1220px]">
        <Reveal>
          <p className="kicker">{fr ? frAssortmentCopy.kicker : "Assortiment"}</p>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {fr ? (
              <>
                L'
                <em className="italic text-ice">{frAssortmentCopy.em}</em> assortiment
              </>
            ) : (
              <>
                Het volledige <em className="italic text-ice">assortiment</em>
              </>
            )}
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            {fr
              ? frAssortmentCopy.lede
              : "Ijsbankkoelers, serpentijnen, tap & uitschenken en onderdelen, het volledige assortiment via VanRobi."}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <a
              key={c.index}
              href={fr ? withBase("/fr/produits") : c.href}
              className="group relative min-h-[280px] overflow-hidden bg-bg"
            >
              <OptimizedImage
                src={c.image}
                alt={c.alt}
                loading="lazy"
                className="image-grade absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <span className="relative flex h-full items-end p-6 font-display text-3xl">
                <em className="mr-3 not-italic text-ice">{c.index}</em>{" "}
                {fr ? frAssortmentCopy.labels[i] : c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}