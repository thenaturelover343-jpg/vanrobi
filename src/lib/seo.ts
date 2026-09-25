import { site } from "./site";
import { withBase } from "./base";

/** Definitief domein (nog niet live). Canonicals wijzen hierheen. */
export const CANONICAL_ORIGIN = "https://www.vanrobi.be";
export const PAGES_ORIGIN = "https://thenaturelover343-jpg.github.io/vanrobi";

const onGithubPages = (import.meta.env.BASE_URL || "/").includes("vanrobi");

export function canonicalUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${CANONICAL_ORIGIN}/`;
  return `${CANONICAL_ORIGIN}${p.replace(/\/+$/, "")}`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: `${CANONICAL_ORIGIN}/`,
    email: site.email,
    telephone: site.phoneTel,
    image: `${CANONICAL_ORIGIN}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressRegion: "Antwerpen",
      addressCountry: "BE",
    },
    areaServed: ["BE", "NL"],
    description:
      "Specialist in bierkoelers (ijsbankkoelers) en kegkoelers (fustenkoelers) voor horeca en events in België en Nederland.",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function productJsonLd(p: {
  name: string;
  description: string;
  image: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: p.image.startsWith("http") ? p.image : `${CANONICAL_ORIGIN}${p.image.replace(/^\/vanrobi/, "")}`,
    brand: { "@type": "Brand", name: "VanRobi" },
    url: canonicalUrl(p.path),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonicalUrl("/contact"),
      priceCurrency: "EUR",
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function itemListJsonLd(
  items: { name: string; path: string }[],
  listName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  lang?: "nl" | "fr";
  image?: string;
  nlPath?: string;
  frPath?: string;
  jsonLd?: object[];
};

export function seoHead({
  title,
  description,
  path,
  lang = "nl",
  image,
  nlPath,
  frPath,
  jsonLd = [],
}: SeoInput) {
  const url = canonicalUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${CANONICAL_ORIGIN}${image}`
    : `${CANONICAL_ORIGIN}/og.jpg`;
  const nl = canonicalUrl(nlPath ?? (lang === "nl" ? path : "/"));
  const fr = canonicalUrl(frPath ?? (lang === "fr" ? path : "/fr"));
  const schemas = [localBusinessJsonLd(), ...jsonLd];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: onGithubPages ? "noindex, follow" : "index, follow",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "VanRobi" },
      { property: "og:locale", content: lang === "fr" ? "fr_BE" : "nl_BE" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", href: nl, hrefLang: "nl-BE" },
      { rel: "alternate", href: nl, hrefLang: "nl-NL" },
      { rel: "alternate", href: fr, hrefLang: "fr-BE" },
      { rel: "alternate", href: url, hrefLang: "x-default" },
      { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") },
    ],
    scripts: schemas.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}
