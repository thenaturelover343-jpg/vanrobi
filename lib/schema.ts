import { contact } from "./contact";
import type { Product } from "./products";
import { absoluteUrl, SITE_ORIGIN } from "./site";

export type FaqItem = { question: string; answer: string };

function orgCore() {
  return {
    "@type": ["Organization", "LocalBusiness"] as string[],
    "@id": absoluteUrl("/#organization"),
    name: "VanRobi",
    legalName: "VanRobi",
    url: absoluteUrl("/"),
    email: contact.email,
    telephone: contact.phoneTel,
    image: absoluteUrl("/assets/logo.svg"),
    logo: absoluteUrl("/assets/logo.svg"),
    description:
      "Officiële Golderos-distributeur voor België en Nederland. Professionele ijsbankkoelers voor horeca en events.",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      postalCode: contact.address.postal,
      addressLocality: contact.address.city,
      addressRegion: "Antwerpen",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.2405,
      longitude: 4.8345,
    },
    areaServed: [
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Netherlands" },
    ],
    sameAs: [contact.companyUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phoneTel,
      email: contact.email,
      contactType: "sales",
      availableLanguage: ["nl", "fr", "en"],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...orgCore(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: "VanRobi",
    url: absoluteUrl("/"),
    inLanguage: ["nl-BE", "fr-BE"],
    description:
      "Officiële Golderos-distributeur België & Nederland, ijsbankkoelers en bierkoelers voor horeca en events.",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

/** Home @graph: WebSite + Organization/LocalBusiness (use instead of separate org on home) */
export function homeGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: "VanRobi",
        url: absoluteUrl("/"),
        inLanguage: ["nl-BE", "fr-BE"],
        description:
          "Officiële Golderos-distributeur België & Nederland, ijsbankkoelers en bierkoelers voor horeca en events.",
        publisher: { "@id": absoluteUrl("/#organization") },
      },
      orgCore(),
    ],
  };
}

/**
 * Product JSON-LD matching visible specs only.
 * No fabricated price, aggregate rating, or InStock claim (prices not shown).
 */
export function productSchema(product: Product) {
  // product.image is already withBase()'d (/vanrobi/assets/...)
  const resolvedImage = product.image.startsWith("http")
    ? product.image
    : `${SITE_ORIGIN}${product.image.startsWith("/") ? product.image : `/${product.image}`}`;

  const additionalProperty = product.specs.map((s) => ({
    "@type": "PropertyValue",
    name: s.label,
    value: s.value,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Golderos ${product.name}`,
    description: product.longDescription || product.description,
    image: resolvedImage,
    brand: {
      "@type": "Brand",
      name: "Golderos",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Golderos",
    },
    sku: product.id,
    url: absoluteUrl(`/producten/${product.id}/`),
    ...(additionalProperty.length ? { additionalProperty } : {}),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/producten/${product.id}/`),
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "VanRobi",
        url: absoluteUrl("/"),
      },
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "nl-BE",
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    author: {
      "@type": "Organization",
      name: "VanRobi",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "VanRobi",
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}

/** HowTo only when the page has visible numbered steps matching these. */
export function howToSchema(input: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "nl-BE",
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
