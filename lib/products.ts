import { withBase } from "./base";
import { productsExtra } from "./products-extra.generated";

export type ProductUse = "horeca" | "events" | "onder-bar" | "mobiel";

export type ProductGroup =
  | "koelers"
  | "serpentijnen"
  | "dispensing"
  | "onderdelen"
  | "service"
  | "overig";

export type Product = {
  id: string;
  index: string;
  name: string;
  badge: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  cropClass: string;
  uses: ProductUse[];
  /** Catalog group for browse filters (koelers, serpentijnen, …) */
  group?: ProductGroup;
  specs: { label: string; value: string }[];
  featured?: boolean;
  /** photo = lifestyle/product shot; diagram = technical line drawing (not a photo) */
  imageKind?: "photo" | "diagram";
};

export const useLabels: Record<ProductUse, string> = {
  horeca: "Horeca",
  events: "Events",
  "onder-bar": "Onder-bar",
  mobiel: "Mobiel",
};

export const groupLabels: Record<ProductGroup, string> = {
  koelers: "Koelers",
  serpentijnen: "Serpentijnen",
  dispensing: "Dispensing",
  onderdelen: "Onderdelen",
  service: "Service",
  overig: "Overig",
};

const productsCore: Product[] = [
 {
 id: "goldy",
 index: "01",
 name: "Goldy",
 badge: "Events · Over-bar",
 description:
 "Compacte over-bar ijsbankkoeler voor events, beurzen en craftbars, met gepatenteerde opbouw via VanRobi.",
 longDescription:
 "De Goldy is de compacte over-bar ijsbankkoeler in het VanRobi-assortiment: ideaal wanneer ruimte schaars is en de bar zichtbaar mag blijven. Perfect voor events, craftbars en pop-ups. Via VanRobi geleverd met advies over spiralen, debiet en opstelling.",
 image: withBase("/assets/products-official/goldy.jpg"),
 alt: "Goldy over-bar ijsbankkoeler met kranen, bierkoeler via VanRobi België",
 cropClass: "crop-goldy",
 uses: ["events", "mobiel", "horeca"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "540 x 320 x 360" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 1/4" },
 { label: "Cuba", value: "(l): 20" },
 { label: "IJsreserve", value: "9" },
 { label: "Debiet (L/u)", value: "44" },
 ],
 },
 {
 id: "picky",
 index: "02",
 name: "Picky",
 badge: "Compact · Over-bar",
 description:
 "Ultracompacte over-bar koeler voor kleine bars, foodtrucks en pop-ups.",
 longDescription:
 "De Picky is de kleinste over-bar ijsbankkoeler in ons assortiment, gemaakt voor krappe ruimtes zonder in te boeten op professionele koeling. Ideaal voor foodtrucks, pop-ups en compacte craftbars.",
 image: withBase("/assets/products-catalog/picky.jpg"),
 alt: "Picky compacte over-bar ijsbankkoeler voor events, via VanRobi",
 cropClass: "crop-picky",
 uses: ["events", "mobiel", "horeca"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "440 x 215 x 300" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 1/8" },
 { label: "Cuba", value: "(l): 6" },
 { label: "IJsreserve", value: "4" },
 { label: "Debiet (L/u)", value: "20" },
 ],
 },
 {
 id: "gold-ice",
 index: "03",
 name: "Gold Ice",
 badge: "IJs · Horeca",
 description:
 "Gold Ice, snelle ijsproductie en stabiele koude voor horeca en events.",
 longDescription:
 "Gold Ice in het VanRobi-assortiment combineert ijsreserve met eenvoudig onderhoud. Via VanRobi beschikbaar voor Belgische en Nederlandse horeca die betrouwbare koude nodig heeft zonder complexe installatie.",
 image: withBase("/assets/products-catalog/gold-ice.jpg"),
 alt: "Gold Ice, technische tekening via VanRobi",
 cropClass: "crop-gold-ice",
 uses: ["horeca", "events"],
 featured: false,
 imageKind: "diagram",
 specs: [
 { label: "Merk", value: "VanRobi · BE & NL" },
 { label: "Leverancier", value: "VanRobi · België & Nederland" },
 ],
 },
 {
 id: "v100",
 index: "04",
 name: "V100",
 badge: "Horeca · Onder-bar",
 description:
 "Vaste onder-bar installatie in medium formaat. Stabiel debiet voor restaurants en bars.",
 longDescription:
 "De V100 is het werkpaard voor restaurants en bars. Medium formaat, stabiel debiet en voldoende ijsreserve voor dagelijks horecagebruik. Ook als horizontale variant, VanRobi helpt bij de juiste keuze.",
 image: withBase("/assets/products-official/v100.jpg"),
 alt: "V100 onder-bar ijsbankkoeler / bierkoeler voor horeca, via VanRobi",
 cropClass: "crop-v100",
 uses: ["horeca", "onder-bar"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "717 x 430 x 430" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 3/8" },
 { label: "Cuba", value: "(l): 40" },
 { label: "IJsreserve", value: "19" },
 { label: "Debiet (L/u)", value: "87" },
 ],
 },
 {
 id: "v100-portable",
 index: "05",
 name: "V100 portable",
 badge: "Events · Mobiel",
 description:
 "Mobiele V100 voor festivals en feesten. Klaar voor snelle opbouw, optioneel met zuil.",
 longDescription:
 "De V100 portable brengt V100-capaciteit naar het festivalterrein. Op wielen, snel opgebouwd, optioneel met tapzuil. Ideaal voor cateraars en tijdelijke bars.",
 image: withBase("/assets/products-official/v100-portable.jpg"),
 alt: "V100 portable mobiele bierkoeler op wielen voor festivals, via VanRobi",
 cropClass: "crop-v100-portable",
 uses: ["events", "mobiel"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "890 x 450 x 450" },
 { label: "Spanning", value: "220V / 50 Hz" },
 { label: "Compressor", value: "( Cv ): 3/8" },
 { label: "Cuba (L)", value: "40" },
 { label: "IJsreserve (kg)", value: "21" },
 { label: "Debiet (L/u)", value: "87" },
 ],
 },
 {
 id: "v200",
 index: "06",
 name: "V200",
 badge: "High volume · Onder-bar",
 description:
 "Voor drukke bars en high-volume service. Maximale ijsreserve en debiet.",
 longDescription:
 "De V200 is gebouwd voor drukke bars. Maximale ijsreserve en hoog debiet. Ook horizontaal leverbaar, VanRobi matcht volume, ruimte en openingsuren.",
 image: withBase("/assets/products-official/v200.jpg"),
 alt: "V200 high-volume onder-bar bierkoeler, via VanRobi België & Nederland",
 cropClass: "crop-v200",
 uses: ["horeca", "onder-bar", "events"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "900 x 495 x 495" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 5/8" },
 { label: "Cuba", value: "(l): 66" },
 { label: "IJsreserve", value: "38" },
 { label: "Debiet (L/u)", value: "160" },
 ],
 },
 {
 id: "v200-portable",
 index: "07",
 name: "V200 portable",
 badge: "Events · Mobiel",
 description:
 "Mobiele high-volume koeler voor festivals en grote events.",
 longDescription:
 "De V200 portable combineert high-volume capaciteit met mobiliteit. Voor festivals, stadions en grote tijdelijke bars die geen vaste installatie kunnen plaatsen.",
 image: withBase("/assets/products-catalog/v200-portable.jpg"),
 alt: "V200 portable high-volume event bierkoeler, via VanRobi",
 cropClass: "crop-v200-portable",
 uses: ["events", "mobiel"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "996 x 500 x 500" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor (pk)", value: "1/2" },
 { label: "Cuba (L)", value: "66" },
 { label: "IJsreserve", value: "38" },
 { label: "Debiet (L/u)", value: "160" },
 ],
 },
 {
 id: "v300",
 index: "08",
 name: "V300",
 badge: "High volume · Onder-bar",
 description:
 "Grote onder-bar koeler voor intense service en meerdere spiralen.",
 longDescription:
 "De V300 levert hogere capaciteit voor drukke horeca. Meer spiralen, meer debiet, wanneer de V200 net niet genoeg is.",
 image: withBase("/assets/products-catalog/v300.jpg"),
 alt: "V300 onder-bar ijsbankkoeler, via VanRobi",
 cropClass: "crop-v300",
 uses: ["horeca", "onder-bar", "events"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "900 x 495 x 495" },
 { label: "Spanning", value: "220V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 1" },
 { label: "Cuba", value: "(l): 66" },
 { label: "IJsreserve", value: "40" },
 { label: "Debiet (L/u)", value: "207" },
 ],
 },
 {
 id: "v90",
 index: "09",
 name: "V90",
 badge: "Horeca · Onder-bar",
 description:
 "Compacte onder-bar koeler voor bars met beperkte diepte.",
 longDescription:
 "De V90 is ontworpen voor bars waar diepte beperkt is. Professionele ijsbankkoeling in een compacter footprint.",
 image: withBase("/assets/products-catalog/v90.jpg"),
 alt: "V90 compacte onder-bar ijsbankkoeler, via VanRobi",
 cropClass: "crop-v90",
 uses: ["horeca", "onder-bar"],
 featured: false,
 specs: [
 { label: "Afmetingen", value: "720 x 430 x 290" },
 { label: "Spanning", value: "220V / 50 Hz" },
 { label: "Compressor", value: "( Cv ): 3/8" },
 { label: "Cuba (L)", value: "–" },
 { label: "IJsreserve (kg)", value: "–" },
 { label: "Debiet (L/u)", value: "–" },
 ],
 },
 {
 id: "h50",
 index: "10",
 name: "H50",
 badge: "Horeca · Onder-bar",
 description:
 "Horizontale onder-bar koeler (H50) voor lage opstellingen.",
 longDescription:
 "De H50 is de horizontale variant voor lage onder-bar opstellingen. Zelfde industriële kwaliteit als de rest van de lijn, aangepast aan barhoogte en meubelontwerp.",
 image: withBase("/assets/products-catalog/h50.jpg"),
 alt: "H50 horizontale ijsbankkoeler, via VanRobi",
 cropClass: "crop-h50",
 uses: ["horeca", "onder-bar"],
 featured: false,
 specs: [
 { label: "Afmetingen", value: "900 x 557 x 557" },
 { label: "Spanning", value: "230 – 400V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 11/4" },
 { label: "Cuba", value: "(l): 100" },
 { label: "IJsreserve", value: "60" },
 { label: "Debiet (L/u)", value: "282" },
 ],
 },
 {
 id: "v500",
 index: "11",
 name: "V500",
 badge: "High volume · Industrie",
 description:
 "Topmodel voor extreme volumes, tot 282 L/u en 60 kg ijsreserve.",
 longDescription:
 "De V500 is het topmodel in ons assortiment voor extreme volumes: 100 L cuba, 60 kg ijs, tot 282 L/u. Ook als speciale tankkoelvariant. VanRobi adviseert bij dimensionering.",
 image: withBase("/assets/products-catalog/v500.jpg"),
 alt: "V500 high-volume ijsbankkoeler, via VanRobi",
 cropClass: "crop-v500",
 uses: ["horeca", "onder-bar", "events"],
 featured: true,
 specs: [
 { label: "Afmetingen", value: "990 x 557 x 557" },
 { label: "Spanning", value: "230 – 400V/ 50 Hz" },
 { label: "Compressor", value: "(Cv): 11/4" },
 { label: "Cuba", value: "(l): 100" },
 { label: "IJsreserve", value: "60" },
 { label: "Debiet (L/u)", value: "282" },
 ],
 },
 {
 id: "barrilero-doble",
 index: "12",
 name: "Barrilero doble",
 badge: "Vatkoeling · Horeca",
 description:
 "Dubbele vatkoeler voor bieropslag dicht bij de tap.",
 longDescription:
 "De Barrilero doble houdt twee vaten op temperatuur, dicht bij de taplijn. Voor bars die korte leidingen en stabiele vatkoeling willen.",
 image: withBase("/assets/products-catalog/barrilero-doble.jpg"),
 alt: "Barrilero doble, via VanRobi",
 cropClass: "crop-barrilero-doble",
 uses: ["horeca", "onder-bar"],
 featured: false,
 specs: [
 { label: "Merk", value: "VanRobi · BE & NL" },
 { label: "Leverancier", value: "VanRobi · België & Nederland" },
 ],
 },
 {
 id: "unidad-condensadora",
 index: "13",
 name: "Condensorunit",
 badge: "Component · Condensor",
 description:
 "Externe condensorunit voor split-opstellingen en technische ruimtes.",
 longDescription:
 "Condensorunit in ons assortiment voor installaties waarbij de warmteafvoer gescheiden moet, technische ruimtes, lange leidingen, split-systemen.",
 image: withBase("/assets/products-catalog/unidad-condensadora.jpg"),
 alt: "Condensorunit, via VanRobi",
 cropClass: "crop-unidad-condensadora",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Merk", value: "VanRobi · BE & NL" },
 { label: "Leverancier", value: "VanRobi · België & Nederland" },
 ],
 },
 {
 id: "g8-agua-aire",
 index: "14",
 name: "G8 water/lucht met condensor",
 badge: "Roermotor · G8",
 description:
 "G8 roermotor water/lucht met condensor, voor ijsbankcirculatie.",
 longDescription:
 "G8-serie roermotoren in ons assortiment voor betrouwbare ijsbankcirculatie. Water/lucht-variant met condensor.",
 image: withBase("/assets/products-catalog/g8-agua-aire.jpg"),
 alt: "G8 water/lucht met condensor, via VanRobi",
 cropClass: "crop-g8-agua-aire",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: ":" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "carcasa plástico" },
 ],
 },
 {
 id: "g8-aire",
 index: "15",
 name: "G8 lucht met condensor",
 badge: "Roermotor · G8",
 description:
 "G8 roermotor luchtgekoeld met condensor.",
 longDescription:
 "G8 luchtgekoelde roermotor met condensor, onderdeel van het VanRobi-ecosysteem voor ijsbankkoelers.",
 image: withBase("/assets/products-catalog/g8-aire.jpg"),
 alt: "G8 lucht met condensor, via VanRobi",
 cropClass: "crop-g8-aire",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: "V 220, Hz 50, W 60/80/120" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "carcasa de  acero inoxidable + carcasa plástico" },
 ],
 },
 {
 id: "g8-agua",
 index: "16",
 name: "G8 water met condensor",
 badge: "Roermotor · G8",
 description:
 "G8 roermotor watergekoeld met condensor.",
 longDescription:
 "G8 watergekoelde roermotor met condensor voor stabiele ijsbankcirculatie in professionele installaties.",
 image: withBase("/assets/products-catalog/g8-agua.jpg"),
 alt: "G8 water met condensor, via VanRobi",
 cropClass: "crop-g8-agua",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: "V 220, Hz 50, W 60/80/120" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "carcasa de acero inoxidable" },
 ],
 },
 {
 id: "g98-con",
 index: "17",
 name: "G98 met condensor",
 badge: "Roermotor · G98",
 description:
 "G98 roermotor met condensor, 220/115V.",
 longDescription:
 "G98 met condensor: flexibele spanning (220/115V), ontworpen voor professionele ijsbanksystemen via VanRobi.",
 image: withBase("/assets/products-catalog/g98-con.jpg"),
 alt: "G98 met condensor, via VanRobi",
 cropClass: "crop-g98-con",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "carcasa plástico" },
 ],
 },
 {
 id: "g98-sin",
 index: "18",
 name: "G98 zonder condensor",
 badge: "Roermotor · G98",
 description:
 "G98 roermotor zonder condensor, voor split-opstellingen.",
 longDescription:
 "G98 zonder ingebouwde condensor, wanneer de condensor elders geplaatst wordt.",
 image: withBase("/assets/products-catalog/g98-sin.jpg"),
 alt: "G98 zonder condensor, via VanRobi",
 cropClass: "crop-g98-sin",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "–" },
 ],
 },
 {
 id: "g92-sin",
 index: "19",
 name: "G92 zonder condensor",
 badge: "Roermotor · G92",
 description:
 "G92 roermotor zonder condensor.",
 longDescription:
 "G92-serie zonder condensor voor specifieke ijsbankconfiguraties en vervangingsprojecten via VanRobi.",
 image: withBase("/assets/products-catalog/g92-sin.jpg"),
 alt: "G92 zonder condensor, via VanRobi",
 cropClass: "crop-g92-sin",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
 { label: "Uitgangen", value: "1- 3 salidas para riego" },
 { label: "Draaibescherming", value: "–" },
 ],
 },
 {
 id: "cuba-frio",
 index: "20",
 name: "Koudwaterbad",
 badge: "Industrie · Bad",
 description:
 "Koudwaterbad voor proceskoeling en speciale toepassingen.",
 longDescription:
 "Koudwaterbad in ons assortiment voor industriële en speciale toepassingen, van deeg tot chemische processen. Via VanRobi op aanvraag.",
 image: withBase("/assets/products-catalog/cuba-frio.jpg"),
 alt: "Koudwaterbad, via VanRobi",
 cropClass: "crop-cuba-frio",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Merk", value: "VanRobi · BE & NL" },
 { label: "Leverancier", value: "VanRobi · België & Nederland" },
 ],
 },
 {
 id: "cuba-caliente",
 index: "21",
 name: "Warmwaterbad",
 badge: "Industrie · Bad",
 description:
 "Warmwaterbad voor industriële procesverwarming.",
 longDescription:
 "Warmwaterbad in ons assortiment voor industriële procesverwarming en speciale toepassingen. Op aanvraag via VanRobi in België en Nederland.",
 image: withBase("/assets/products-catalog/cuba-caliente.jpg"),
 alt: "Warmwaterbad, via VanRobi",
 cropClass: "crop-cuba-caliente",
 uses: ["horeca"],
 featured: false,
 specs: [
 { label: "Merk", value: "VanRobi · BE & NL" },
 { label: "Leverancier", value: "VanRobi · België & Nederland" },
 ],
 },
];

/** Existing core machines get group koelers (or onderdelen for motors/components). */
const coreGroupById: Record<string, ProductGroup> = {
  goldy: "koelers",
  picky: "koelers",
  "gold-ice": "koelers",
  v100: "koelers",
  "v100-portable": "koelers",
  v200: "koelers",
  "v200-portable": "koelers",
  v300: "koelers",
  v90: "koelers",
  h50: "koelers",
  v500: "koelers",
  "barrilero-doble": "koelers",
  "unidad-condensadora": "onderdelen",
  "g8-agua-aire": "onderdelen",
  "g8-aire": "onderdelen",
  "g8-agua": "onderdelen",
  "g98-con": "onderdelen",
  "g98-sin": "onderdelen",
  "g92-sin": "onderdelen",
  "cuba-frio": "overig",
  "cuba-caliente": "overig",
};

export const products: Product[] = [
  ...productsCore.map((p) => ({
    ...p,
    group: p.group ?? coreGroupById[p.id] ?? "koelers",
  })),
  ...productsExtra,
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(id: string): Product | undefined {
 return products.find((p) => p.id === id);
}


export const categories = [
 {
 href: withBase("/producten/#koelers"),
 image: withBase("/assets/cats/koelers.jpg"),
 alt: "Ijsbankkoelers en bierkoelers in het VanRobi-assortiment",
 index: "01",
 label: "Ijsbankkoelers",
 delay: "",
 },
 {
 href: withBase("/producten/#serpentijnen"),
 image: withBase("/assets/cats/serpentijnen.jpg"),
 alt: "RVS-serpentijnen voor bier en drank via VanRobi",
 index: "02",
 label: "Serpentijnen",
 delay: "reveal-delay-1",
 },
 {
 href: withBase("/producten/#dispensing"),
 image: withBase("/assets/cats/dispensing.jpg"),
 alt: "Tapzuilen, kranen en lekbakken voor horeca",
 index: "03",
 label: "Dispensing & tap",
 delay: "reveal-delay-2",
 },
 {
 href: withBase("/producten/#onderdelen"),
 image: withBase("/assets/cats/roermotoren.jpg"),
 alt: "Roermotoren en technische onderdelen",
 index: "04",
 label: "Roermotoren & onderdelen",
 delay: "",
 },
 {
 href: withBase("/voor-wie/"),
 image: withBase("/assets/cats/bars.jpg"),
 alt: "Sfeervolle bar met professionele taplijn",
 index: "05",
 label: "Bars & restaurants",
 delay: "reveal-delay-1",
 },
 {
 href: withBase("/producten/#service"),
 image: withBase("/assets/cats/service.jpg"),
 alt: "Service, reiniging en op-maat projecten",
 index: "06",
 label: "Service & op maat",
 delay: "reveal-delay-2",
 },
];


export const whyItems = [
 {
 n: "01",
 title: "Merk VanRobi",
 text: "VanRobi is het merk voor ijsbankkoelers in België en Nederland. Heldere specs, geen grijze import.",
 delay: "",
 },
 {
 n: "02",
 title: "Techniek die klopt",
 text: "IJsbankcapaciteit, spiralen, debiet, heldere specs voor installateurs en barontwerp.",
 delay: "reveal-delay-1",
 },
 {
 n: "03",
 title: "Dichtbij",
 text: "Offertes, levering en onderhoud vanuit de Kempen. Snel schakelen wanneer de bar open moet.",
 delay: "reveal-delay-2",
 },
 {
 n: "04",
 title: "Op maat",
 text: "Van Goldy tot V200. We matchen volume, ruimte en events aan de juiste unit.",
 delay: "reveal-delay-3",
 },
];
