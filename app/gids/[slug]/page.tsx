import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/CTA";
import { guides, getGuide, formatGuideDate } from "@/lib/guides";
import { GuideBody } from "@/lib/guide-content";
import {
 breadcrumbSchema,
 articleSchema,
 howToSchema,
} from "@/lib/schema";
import { metaForGuide } from "@/lib/seo-meta";

type Props = { params: Promise<{ slug: string }> };

const CHECKLIST_STEPS = [
 {
 name: "Vast of mobiel?",
 text: "Vaste horeca → onder-bar (V100, V200). Events → Goldy of portable. Craft/pop-up → vaak Goldy of Picky.",
 },
 {
 name: "Schat piekvolume",
 text: "Tel glazen in het drukste uur. Debiet (L/u) en ijsreserve (kg) moeten die piek aankunnen.",
 },
 {
 name: "Meet het meubel",
 text: "Diepte, hoogte en ventilatie van over-bar of onder-bar opstelling controleren.",
 },
 {
 name: "Tel kranen en spiralen",
 text: "Meerdere productlijnen of lange leidingen vragen meer buffer in de ijsbank.",
 },
 {
 name: "Check stroom",
 text: "Typisch 220V / 50 Hz; op events stabiele voeding voorzien.",
 },
 {
 name: "Kies het koelprincipe",
 text: "IJsbank vs dry cooler / doorstroom afwegen op pieken en ruimte.",
 },
 {
 name: "Merk VanRobi + onderhoud",
 text: "Aankoop via VanRobi (merk & specialist BE/NL); onderhoud via Taponderhoud.",
 },
];

export function generateStaticParams() {
 return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const g = getGuide(slug);
 if (!g) return { title: "Gids | VanRobi" };
 return metaForGuide(g);
}

export default async function GuidePage({ params }: Props) {
 const { slug } = await params;
 const g = getGuide(slug);
 if (!g) notFound();

 const titleParts = g.title.split(":");
 const heroTitle =
 titleParts.length > 1
 ? [
 titleParts[0] + ":",
 <em key="e">{titleParts.slice(1).join(":").trim()}</em>,
 ]
 : [g.title];

 const schemas: Record<string, unknown>[] = [
 breadcrumbSchema([
 { name: "Home", path: "/" },
 { name: "Gidsen", path: "/gids/" },
 { name: g.title, path: `/gids/${g.slug}/` },
 ]),
 articleSchema({
 title: g.title,
 description: g.description,
 path: `/gids/${g.slug}/`,
 dateModified: g.updated,
 datePublished: g.published ?? g.updated,
 }),
 ];

 if (slug === "bierkoeler-kiezen-checklist") {
 schemas.push(
 howToSchema({
 name: g.title,
 description: g.description,
 path: `/gids/${g.slug}/`,
 steps: CHECKLIST_STEPS,
 })
 );
 }

 return (
 <>
 <JsonLd data={schemas} />
 <Header />
 <main id="main">
 <PageHero eyebrow={g.eyebrow} title={heroTitle} lede={g.lede} />
 <p className="wrap" style={{ marginTop: "-1.5rem", marginBottom: "0.5rem" }}>
 <time dateTime={g.updated} className="muted" style={{ fontSize: "0.9rem" }}>
 Laatst bijgewerkt: {formatGuideDate(g.updated)}
 </time>
 </p>
 <GuideBody slug={g.slug} />
 <CTA />
 </main>
 <Footer />
 </>
 );
}
