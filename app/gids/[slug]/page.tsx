import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import { guides, getGuide } from "@/lib/guides";
import { GuideBody } from "@/lib/guide-content";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return { title: "Gids — VanRobi" };
  return pageMeta({
    title: `${g.title} | Golderos via VanRobi`,
    description: g.description,
    path: `/gids/${g.slug}/`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const titleParts = g.title.split(":");
  const heroTitle =
    titleParts.length > 1
      ? [titleParts[0] + ":", <em key="e">{titleParts.slice(1).join(":").trim()}</em>]
      : [g.title];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gidsen", path: "/gids/" },
          { name: g.title, path: `/gids/${g.slug}/` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: g.title,
          description: g.description,
          path: `/gids/${g.slug}/`,
        })}
      />
      <Header />
      <main id="main">
        <PageHero eyebrow={g.eyebrow} title={heroTitle} lede={g.lede} />
        <GuideBody slug={g.slug} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
