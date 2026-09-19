import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";
import { FR_PRODUCT_IDS, languagePathsFor } from "@/lib/hreflang";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/producten/", changeFrequency: "weekly", priority: 0.9 },
    { path: "/diensten/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/voor-wie/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/over-ons/", changeFrequency: "monthly", priority: 0.6 },
    { path: "/regio/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/faq/", changeFrequency: "monthly", priority: 0.75 },
    { path: "/gids/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/fr/", changeFrequency: "weekly", priority: 0.85 },
    { path: "/fr/produits/", changeFrequency: "weekly", priority: 0.8 },
    { path: "/fr/services/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/fr/a-propos/", changeFrequency: "monthly", priority: 0.65 },
    { path: "/fr/faq/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/fr/contact/", changeFrequency: "monthly", priority: 0.75 },
  ];

  const productPages = products.map((p) => ({
    path: `/producten/${p.id}/`,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.85 : 0.65,
  }));

  const guidePages = guides.map((g) => ({
    path: `/gids/${g.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const frProducts = FR_PRODUCT_IDS.map((id) => ({
    path: `/fr/produits/${id}/`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...productPages, ...guidePages, ...frProducts].map(
    (p) => {
      const pathLangs = languagePathsFor(p.path);
      const langs = pathLangs
        ? Object.fromEntries(
            Object.entries(pathLangs).map(([k, v]) => [k, absoluteUrl(v)])
          )
        : undefined;
      return {
        url: absoluteUrl(p.path),
        lastModified: now,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
        ...(langs ? { alternates: { languages: langs } } : {}),
      };
    }
  );
}
