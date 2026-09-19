/** Site constants for SEO, canonicals, OG */
import type { Metadata } from "next";
import { BASE_PATH } from "./base";
import { languagePathsFor } from "./hreflang";

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
 /** Open Graph locale, default nl_BE */
 locale?: "nl_BE" | "fr_BE";
 /** Override or supplement auto hreflang from path pairs */
 languages?: Record<string, string>;
 ogType?: "website" | "article";
};

export function pageMeta({
 title,
 description,
 path,
 ogImage,
 noIndex,
 locale = "nl_BE",
 languages,
 ogType = "website",
}: PageMetaInput): Metadata {
 const url = absoluteUrl(path);
 const image = ogImage
 ? absoluteUrl(ogImage)
 : absoluteUrl("/assets/hero-official.jpg");
 const pathLangs = languagePathsFor(path);
 const langs =
 languages ??
 (pathLangs
 ? Object.fromEntries(
 Object.entries(pathLangs).map(([k, v]) => [k, absoluteUrl(v)])
 )
 : undefined);

 return {
 title,
 description,
 alternates: {
 canonical: url,
 ...(langs ? { languages: langs } : {}),
 },
 openGraph: {
 title,
 description,
 url,
 siteName: "VanRobi",
 locale,
 type: ogType,
 images: [
 {
 url: image,
 width: 1200,
 height: 630,
 alt: "VanRobi, specialist in ijsbankkoelers voor België en Nederland",
 },
 ],
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
