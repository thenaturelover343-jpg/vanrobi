/** NL↔FR path pairs that have real equivalent pages (paths only, no absolute URLs). */

const PAIRS: { nl: string; fr: string }[] = [
  { nl: "/", fr: "/fr/" },
  { nl: "/producten/", fr: "/fr/produits/" },
  { nl: "/diensten/", fr: "/fr/services/" },
  { nl: "/over-ons/", fr: "/fr/a-propos/" },
  { nl: "/faq/", fr: "/fr/faq/" },
  { nl: "/contact/", fr: "/fr/contact/" },
];

export const FR_PRODUCT_IDS = [
  "goldy",
  "picky",
  "v100",
  "v200",
  "v100-portable",
  "v200-portable",
] as const;

for (const id of FR_PRODUCT_IDS) {
  PAIRS.push({
    nl: `/producten/${id}/`,
    fr: `/fr/produits/${id}/`,
  });
}

function normalize(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path !== "/" && !path.endsWith("/")) path = `${path}/`;
  return path;
}

/** Return path-level language map (values are site paths, not absolute URLs). */
export function languagePathsFor(
  path: string
): Record<string, string> | undefined {
  const p = normalize(path);
  const pair = PAIRS.find((x) => x.nl === p || x.fr === p);
  if (!pair) return undefined;
  return {
    "nl-BE": pair.nl,
    "fr-BE": pair.fr,
    "x-default": pair.nl,
  };
}
