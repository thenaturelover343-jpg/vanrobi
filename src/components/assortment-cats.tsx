import { categories } from "@/lib/products";
import { Reveal } from "./reveal";
import { OptimizedImage } from "./optimized-image";
import { useLang } from "@/lib/i18n";
import { frAssortmentCopy } from "@/lib/fr";
import { withBase } from "@/lib/base";
import { cn } from "@/lib/cn";

const frHubHrefs = [
  withBase("/fr/refroidisseurs-biere"),
  withBase("/fr/serpentins"),
  withBase("/fr/colonnes-robinets"),
  withBase("/fr/pieces"),
  withBase("/fr"),
  withBase("/fr/services"),
];

/** White-studio product plates — contain so taps/coil tops stay in frame on mobile. */
const STUDIO_CONTAIN = new Set(["01", "02", "03", "04"]);

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
              : "Bierkoelers, kegkoelers, serpentijnen, tap & zuilen en onderdelen — het volledige assortiment."}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const studio = STUDIO_CONTAIN.has(c.index);
            return (
              <a
                key={c.index}
                href={fr ? (frHubHrefs[i] ?? withBase("/fr/produits")) : c.href}
                className={cn(
                  "group relative min-h-[400px] overflow-hidden md:min-h-[320px]",
                  studio ? "bg-well" : "bg-bg",
                )}
              >
                <OptimizedImage
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.04]",
                    studio
                      ? "image-grade object-contain object-center"
                      : "image-grade object-cover object-center",
                  )}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-bg/55 via-bg/10 to-transparent" />
                <span className="relative flex h-full items-end p-6 font-display text-3xl text-fg">
                  <em className="mr-3 not-italic text-ice">{c.index}</em>{" "}
                  {fr ? frAssortmentCopy.labels[i] : c.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
