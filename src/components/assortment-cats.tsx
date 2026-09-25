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
    <section className="assort-section border-t border-line px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1220px]">
        <Reveal>
          <div className="assort-head">
            <div>
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
            </div>
            <p className="assort-lede">
              {fr
                ? frAssortmentCopy.lede
                : "Bierkoelers, kegkoelers, serpentijnen, tap & zuilen en onderdelen — het volledige assortiment."}
            </p>
          </div>
        </Reveal>
        <div className="assort-grid">
          {categories.map((c, i) => {
            const studio = STUDIO_CONTAIN.has(c.index);
            return (
              <a
                key={c.index}
                href={fr ? (frHubHrefs[i] ?? withBase("/fr/produits")) : c.href}
                className={cn(
                  "assort-card group",
                  studio && "assort-card--studio",
                  i === 0 && "assort-card--feature",
                )}
              >
                <div className="assort-card-well">
                  <OptimizedImage
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.035]",
                      studio
                        ? "image-grade object-contain object-center p-5 md:p-8"
                        : "image-grade object-cover object-center",
                    )}
                  />
                </div>
                <div className="assort-card-meta">
                  <em className="assort-card-index">{c.index}</em>
                  <span className="assort-card-label">
                    {fr ? frAssortmentCopy.labels[i] : c.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
