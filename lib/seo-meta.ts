import type { Metadata } from "next";
import type { Product } from "./products";
import type { Guide } from "./guides";
import { pageMeta } from "./site";

/** Centralized on-page SEO: titles ≤60 chars, descriptions ≤155. */

export type SeoEntry = {
 title: string;
 description: string;
 path: string;
 locale?: "nl_BE" | "fr_BE";
 ogType?: "website" | "article";
};

export const pageSeo: Record<string, SeoEntry> = {
 home: {
 title: "Ijsbankkoeler & bierkoeler | VanRobi",
 description:
 "Specialist ijsbankkoelers BE & NL. Ijsbankkoelers en bierkoelers: Goldy, V100, V200, portable. Advies vanuit Kasterlee (Kempen).",
 path: "/",
 },
 producten: {
 title: "Professionele ijsbankkoelers & bierkoelers | VanRobi",
 description:
 "Catalogus via VanRobi: Goldy, Picky, V100, V200, portable. Onder-bar en over-bar ijsbankkoelers voor horeca en events in België & Nederland.",
 path: "/producten/",
 },
 diensten: {
 title: "Diensten: levering, advies & onderhoud | VanRobi",
 description:
 "Levering van ijsbankkoelers BE/NL, selectieadvies en onderhoud via Taponderhoud. Ijsbankkoelers voor horeca in Vlaanderen, Brussel, Kempen & NL.",
 path: "/diensten/",
 },
 voorWie: {
 title: "Voor horeca, events & installateurs | VanRobi",
 description:
 "Professionele bierkoelers via VanRobi voor restaurants, bars, festivals, craft en installateurs in België en Nederland.",
 path: "/voor-wie/",
 },
 overOns: {
 title: "Over VanRobi | Ijsbankkoelers BE & NL",
 description:
 "VanRobi is specialist in professionele ijsbankkoelers voor België en Nederland. Basis Kasterlee (Tielen), partner Taponderhoud. Kemelbeekstraat 16.",
 path: "/over-ons/",
 },
 regio: {
 title: "Regio's: ijsbankkoeler België & Nederland",
 description:
 "Ijsbankkoeler België & Nederland via VanRobi. Antwerpen, Limburg, Vlaams-Brabant, Brussel, Oost-Vlaanderen, Kempen + NL. Basis Kasterlee.",
 path: "/regio/",
 },
 contact: {
 title: "Contact & offerte ijsbankkoeler | VanRobi",
 description:
 "Offerte voor een ijsbankkoeler of bierkoeler? Mail info@vanrobi.be of bel +32 (0)14 71 80 80. Kemelbeekstraat 16, 2460 Kasterlee (Tielen).",
 path: "/contact/",
 },
 faq: {
 title: "FAQ ijsbankkoeler & bierkoeler | VanRobi",
 description:
 "Vragen over professionele ijsbankkoelers: V100 vs V200, Goldy, events, installatie BE/NL, onderhoud Taponderhoud. Antwoorden van VanRobi.",
 path: "/faq/",
 },
 gids: {
 title: "Gidsen: ijsbankkoeler & bierkoeler kiezen",
 description:
 "Gidsen: wat is een ijsbankkoeler, V100 vs V200, bierkoeler voor events, kopen in België & Nederland, VanRobi-assortiment. Via VanRobi.",
 path: "/gids/",
 },
 frHome: {
 title: "Refroidisseur à banquise | VanRobi BE/NL",
 description:
 "Spécialiste refroidisseurs Belgique & Pays-Bas. Goldy, V100, V200 pour horeca et events. Conseil depuis Kasterlee (Campine).",
 path: "/fr/",
 locale: "fr_BE",
 },
 frProduits: {
 title: "Produits refroidisseurs | VanRobi BE & NL",
 description:
 "Catalogue VanRobi: Goldy, V100, V200, portables. Refroidisseurs sous-bar et over-bar pour horeca et events en BE/NL.",
 path: "/fr/produits/",
 locale: "fr_BE",
 },
 frServices: {
 title: "Services: livraison, conseil & entretien",
 description:
 "Livraison de refroidisseurs BE/NL, conseil de sélection, placement et entretien via Taponderhoud. Depuis Kasterlee (Campine).",
 path: "/fr/services/",
 locale: "fr_BE",
 },
 frAPropos: {
 title: "À propos de VanRobi | Refroidisseurs BE/NL",
 description:
 "VanRobi, spécialiste des refroidisseurs à banquise en Belgique et aux Pays-Bas. Siège Kasterlee (Tielen), partenaire Taponderhoud.",
 path: "/fr/a-propos/",
 locale: "fr_BE",
 },
 frFaq: {
 title: "FAQ refroidisseur à banquise | VanRobi",
 description:
 "FAQ refroidisseurs: V100 vs V200, Goldy, events, installation Belgique/Pays-Bas, entretien Taponderhoud. Réponses VanRobi.",
 path: "/fr/faq/",
 locale: "fr_BE",
 },
 frContact: {
 title: "Contact & devis refroidisseur | VanRobi",
 description:
 "Devis refroidisseur à banquise? info@vanrobi.be · +32 (0)14 71 80 80. Kemelbeekstraat 16, 2460 Kasterlee (Tielen).",
 path: "/fr/contact/",
 locale: "fr_BE",
 },
};

type ProductSeo = { title: string; description: string; h1: string };

const productSeo: Record<string, ProductSeo> = {
 goldy: {
 title: "Goldy ijsbankkoeler over-bar | VanRobi",
 description:
 "Goldy: compacte over-bar ijsbankkoeler voor events en craftbars. ±44 L/u, 9 kg ijs. Officieel via VanRobi België & Nederland.",
 h1: "Goldy — over-bar ijsbankkoeler",
 },
 picky: {
 title: "Picky compacte ijsbankkoeler | VanRobi",
 description:
 "Picky: ultracompacte over-bar bierkoeler voor foodtrucks, pop-ups en kleine bars. Via VanRobi, distributeur BE & NL.",
 h1: "Picky — compacte over-bar bierkoeler",
 },
 "gold-ice": {
 title: "Gold Ice ijsbankkoeler | VanRobi",
 description:
 "Gold Ice: ijsreserve en stabiele koude voor horeca en events. Officieel geleverd door VanRobi in België en Nederland.",
 h1: "Gold Ice — ijsbankkoeler voor horeca",
 },
 v100: {
 title: "V100 onder-bar bierkoeler | VanRobi",
 description:
 "V100: onder-bar ijsbankkoeler ±87 L/u, 19 kg ijs. Werkpaard voor restaurants en bars. Officieel via VanRobi BE & NL.",
 h1: "V100 — onder-bar bierkoeler",
 },
 "v100-portable": {
 title: "V100 portable mobiele bierkoeler | VanRobi",
 description:
 "V100 portable: mobiele ijsbankkoeler op wielen voor festivals en events. Leverbaar via VanRobi in België en Nederland.",
 h1: "V100 portable — mobiele bierkoeler",
 },
 v200: {
 title: "V200 high-volume bierkoeler | VanRobi",
 description:
 "V200: high-volume onder-bar ijsbankkoeler ±160 L/u, 38 kg ijs. Voor drukke horeca. Officieel via VanRobi BE & NL.",
 h1: "V200 — high-volume onder-bar bierkoeler",
 },
 "v200-portable": {
 title: "V200 portable eventkoeler | VanRobi",
 description:
 "V200 portable: high-volume mobiele bierkoeler voor festivals en grote events. Via VanRobi België & Nederland.",
 h1: "V200 portable — mobiele high-volume koeler",
 },
 v300: {
 title: "V300 onder-bar ijsbankkoeler | VanRobi",
 description:
 "V300: hoge capaciteit onder-bar ijsbankkoeler voor intense horecaservice. Dimensionering via VanRobi BE & NL.",
 h1: "V300 — high-volume onder-bar ijsbankkoeler",
 },
 v90: {
 title: "V90 compacte onder-bar koeler | VanRobi",
 description:
 "V90: compacte onder-bar ijsbankkoeler voor bars met beperkte diepte. Professionele koude via VanRobi BE & NL.",
 h1: "V90 — compacte onder-bar bierkoeler",
 },
 h50: {
 title: "H50 horizontale ijsbankkoeler | VanRobi",
 description:
 "H50: horizontale onder-bar ijsbankkoeler voor lage baropstellingen. Via VanRobi, distributeur BE & NL.",
 h1: "H50 — horizontale onder-bar ijsbankkoeler",
 },
 v500: {
 title: "V500 topmodel ijsbankkoeler | VanRobi",
 description:
 "V500: topmodel high-volume ijsbankkoeler tot ±282 L/u en 60 kg ijs. Dimensionering via VanRobi België & Nederland.",
 h1: "V500 — high-volume ijsbankkoeler",
 },
 "barrilero-doble": {
 title: "Barrilero doble vatkoeler | VanRobi",
 description:
 "Barrilero doble: dubbele vatkoeler voor bieropslag dicht bij de tap. Leverbaar via VanRobi in België en Nederland.",
 h1: "Barrilero doble — dubbele vatkoeler",
 },
 "unidad-condensadora": {
 title: "Condensorunit | VanRobi BE/NL",
 description:
 "Condensorunit voor split-opstellingen en technische ruimtes. Officieel leverbaar via VanRobi in België en Nederland.",
 h1: "Condensorunit — VanRobi component",
 },
 "g8-agua-aire": {
 title: "G8 water/lucht roermotor | VanRobi",
 description:
 "G8 water/lucht roermotor met condensor voor ijsbankcirculatie. Onderdeel via VanRobi, distributeur BE & NL.",
 h1: "G8 water/lucht — roermotor met condensor",
 },
 "g8-aire": {
 title: "G8 lucht roermotor | VanRobi",
 description:
 "G8 luchtgekoelde roermotor met condensor voor ijsbankkoelers. Leverbaar via VanRobi België & Nederland.",
 h1: "G8 lucht — roermotor met condensor",
 },
 "g8-agua": {
 title: "G8 water roermotor | VanRobi",
 description:
 "G8 watergekoelde roermotor met condensor voor stabiele ijsbankcirculatie. Via VanRobi BE & NL.",
 h1: "G8 water — roermotor met condensor",
 },
 "g98-con": {
 title: "G98 roermotor met condensor | VanRobi",
 description:
 "G98 roermotor met condensor (220/115V) voor ijsbanksystemen. Via VanRobi, distributeur BE & NL.",
 h1: "G98 met condensor — roermotor",
 },
 "g98-sin": {
 title: "G98 roermotor zonder condensor | VanRobi",
 description:
 "G98 zonder ingebouwde condensor voor split-opstellingen. Leverbaar via VanRobi België & Nederland.",
 h1: "G98 zonder condensor — roermotor",
 },
 "g92-sin": {
 title: "G92 roermotor zonder condensor | VanRobi",
 description:
 "G92-serie zonder condensor voor specifieke configuraties en vervanging. Via VanRobi BE & NL.",
 h1: "G92 zonder condensor — roermotor",
 },
 "cuba-frio": {
 title: "Koudwaterbad industrieel | VanRobi",
 description:
 "Koudwaterbad voor proceskoeling en speciale toepassingen. Op aanvraag via VanRobi, België & Nederland.",
 h1: "Koudwaterbad — industrieel via VanRobi",
 },
 "cuba-caliente": {
 title: "Warmwaterbad industrieel | VanRobi",
 description:
 "Warmwaterbad voor industriële procesverwarming. Op aanvraag via VanRobi in België en Nederland.",
 h1: "Warmwaterbad — industrieel via VanRobi",
 },
};

const guideMetaTitle: Record<string, string> = {
 "ijsbankkoeler-vs-gamko": "Ijsbankkoeler vs Gamko: vergelijken",
 "v100-vs-v200": "V100 vs V200: welke bierkoeler past?",
 "bierkoeler-voor-events": "Bierkoeler voor events & festivals",
 "wat-is-een-ijsbankkoeler": "Wat is een ijsbankkoeler? Uitleg",
 "bierkoeler-kopen-belgie-nederland": "Bierkoeler kopen België & Nederland",
 "vanrobi-distributeur-belgie-nederland": "VanRobi distributeur België & Nederland",
 "onder-bar-bierkoeler": "Onder-bar bierkoeler: V100 & V200",
 "goldy-vs-v100": "Goldy vs V100: over-bar of onder-bar?",
 "ijsbankkoeler-vs-dry-cooler": "Ijsbankkoeler vs dry cooler: verschil",
 "spiralen-tapinstallatie": "Spiralen & tapinstallatie uitgelegd",
 "bierkoeler-kiezen-checklist": "Bierkoeler kiezen: checklist 7 stappen",
};

function clip(s: string, n: number) {
 if (s.length <= n) return s;
 return s.slice(0, n - 1).trimEnd() + "…";
}

export function metaFromEntry(entry: SeoEntry): Metadata {
 return pageMeta({
 title: clip(entry.title, 60),
 description: clip(entry.description, 155),
 path: entry.path,
 locale: entry.locale,
 ogType: entry.ogType,
 });
}

export function metaForProduct(product: Product): Metadata {
 const o = productSeo[product.id];
 const title = clip(
 o?.title ?? `${product.name} ijsbankkoeler | VanRobi BE/NL`,
 60
 );
 const description = clip(
 o?.description ??
 `${product.description} Geleverd via VanRobi, specialist ijsbankkoelers in België & Nederland.`,
 155
 );
 const ogImage = product.image.includes("/assets/")
 ? `/assets/${product.image.split("/assets/").pop()}`
 : undefined;
 return pageMeta({
 title,
 description,
 path: `/producten/${product.id}/`,
 ogImage,
 });
}

export function productH1(product: Product): string {
 return oH1(product);
}

function oH1(product: Product): string {
 return (
 productSeo[product.id]?.h1 ?? `${product.name} — ijsbankkoeler via VanRobi`
 );
}

export function metaForGuide(guide: Guide): Metadata {
 const title = clip(
 guideMetaTitle[guide.slug] ?? guide.title,
 60
 );
 return pageMeta({
 title,
 description: clip(guide.description, 155),
 path: `/gids/${guide.slug}/`,
 ogType: "article",
 });
}

export function metaForFrProduct(
 product: Product,
 frDescription: string
): Metadata {
 return pageMeta({
 title: clip(`${product.name} VanRobi`, 60),
 description: clip(frDescription, 155),
 path: `/fr/produits/${product.id}/`,
 locale: "fr_BE",
 });
}

/** All static page metas for deliverable docs */
export function allStaticMetas(): { path: string; title: string; description: string }[] {
 return Object.values(pageSeo).map((e) => ({
 path: e.path,
 title: e.title,
 description: e.description,
 }));
}
