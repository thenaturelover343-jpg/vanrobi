/** Site constants for SEO, canonicals, OG */
import type { Metadata } from "next";
import { BASE_PATH } from "./base";

/** GitHub Pages origin (no trailing slash, no basePath). */
export const SITE_ORIGIN = "https://thenaturelover343-jpg.github.io";

/** Effective base path for public URLs */
export const PUBLIC_BASE = BASE_PATH || "/vanrobi";

/** Public site root including basePath, e.g. https://…/vanrobi */
export const SITE_URL = `${SITE_ORIGIN}${PUBLIC_BASE}`;

export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${PUBLIC_BASE}${p === "/" ? "/" : p}`;
}

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage
    ? absoluteUrl(ogImage)
    : absoluteUrl("/assets/hero-official.jpg");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "VanRobi",
      locale: "nl_BE",
      type: "website",
      images: [{ url: image, alt: "VanRobi — Golderos distributeur" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
