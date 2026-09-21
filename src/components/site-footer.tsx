import { Link } from "@tanstack/react-router";
import { nav, site } from "@/lib/site";
import { featuredProducts } from "@/lib/products";
import { guides } from "@/lib/guides";
import { frFooter, frNav, frFeaturedIds } from "@/lib/fr";
import { useLang } from "@/lib/i18n";
import { LangSwitch } from "./lang-switch";
import { withBase } from "@/lib/base";

const machineIds = ["goldy", "picky", "v100", "v200", "v100-portable", "v200-portable"];

export function SiteFooter() {
  const lang = useLang();
  const isFr = lang === "fr";
  const links = isFr ? frNav : nav;
  const machines = isFr ? [...frFeaturedIds] : machineIds;

  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {isFr
              ? frFooter.blurb
              : `Specialist in professionele ijsbankkoelers voor België en Nederland. Levering & onderhoud via ${site.partner.name}.`}
          </p>
          <LangSwitch className="mt-6" />
        </div>
        <div>
          <p className="kicker mb-4">{isFr ? frFooter.nav : "Navigatie"}</p>
          <ul className="space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <a href={withBase(item.href)} className="text-muted hover:text-ice">
                  {item.label}
                </a>
              </li>
            ))}
            {isFr ? (
              <li>
                <Link to="/producten" className="text-muted hover:text-ice">
                  {frFooter.catalog}
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/regio" className="text-muted hover:text-ice">
                  Regio's
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">{isFr ? frFooter.machines : "Machines"}</p>
          <ul className="space-y-2 text-sm">
            {machines.map((id) => {
              const product = featuredProducts.find((x) => x.id === id);
              if (!product) return null;
              return (
                <li key={id}>
                  <a
                    href={withBase(isFr ? `/fr/produits/${id}` : `/producten/${id}`)}
                    className="text-muted hover:text-ice"
                  >
                    {product.name}
                  </a>
                </li>
              );
            })}
            <li>
              <a href={withBase("/producten")} className="text-muted hover:text-ice">
                {isFr ? frFooter.catalog : "Volledige catalogus"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ice">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-ice">
                {site.phone}
              </a>
            </li>
            <li>{site.address.line}</li>
            <li>
              {isFr ? frFooter.maintenance : "Onderhoud via"}{" "}
              <a href={site.partner.url} className="text-ice hover:underline" target="_blank" rel="noreferrer">
                {site.partner.name}
              </a>
            </li>
          </ul>
          {isFr ? null : (
            <>
              <p className="kicker mt-8 mb-3">Gidsen</p>
              <ul className="space-y-2 text-sm">
                {guides.slice(0, 4).map((g) => (
                  <li key={g.slug}>
                    <Link to="/gids/$slug" params={{ slug: g.slug }} className="text-muted hover:text-ice">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-[0.7rem] uppercase tracking-[0.14em] text-muted md:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} VanRobi · BE/NL · Kasterlee</span>
          <LangSwitch />
        </div>
      </div>
    </footer>
  );
}
