import { contact } from "./contact";
import type { Product } from "./products";
import { absoluteUrl, SITE_ORIGIN } from "./site";

export type FaqItem = { question: string; answer: string };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
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
      // Approximate Kasterlee/Tielen — refine if needed
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

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Golderos ${product.name}`,
    description: product.longDescription || product.description,
    image: product.image.startsWith("http")
      ? product.image
      : `${SITE_ORIGIN}${product.image.startsWith("/") ? product.image : `/${product.image}`}`,
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
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/producten/${product.id}/`),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "nl-BE",
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
