import { withBase } from "./base";

export type ProductUse = "horeca" | "events" | "onder-bar" | "mobiel";

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
  specs: { label: string; value: string }[];
  featured?: boolean;
};

export const useLabels: Record<ProductUse, string> = {
  horeca: "Horeca",
  events: "Events",
  "onder-bar": "Onder-bar",
  mobiel: "Mobiel",
};

export const products: Product[] = [
  {
    id: "goldy",
    index: "01",
    name: "Goldy",
    badge: "Events · Over-bar",
    description:
      "Compacte over-bar ijsbankkoeler voor events, beurzen en craft — gepatenteerd door Golderos.",
    longDescription:
      "De Goldy is de compacte over-bar ijsbankkoeler van Golderos: ideaal wanneer ruimte schaars is en de bar zichtbaar mag blijven. Perfect voor events, craftbars en pop-ups. Via VanRobi geleverd met advies over spiralen, debiet en opstelling.",
    image: withBase("/assets/products-official/goldy.jpg"),
    alt: "Golderos Goldy — via VanRobi",
    cropClass: "crop-goldy",
    uses: ["events", "mobiel", "horeca"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "540 x 320 x 360" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 1/4" },
      { label: "Cuba", value: "(l): 20" },
      { label: "IJsreserve", value: "9" },
      { label: "Capacidad de dispensado (l/h", value: "44" },
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
      "De Picky is de kleinste over-bar ijsbankkoeler van Golderos — gemaakt voor krappe ruimtes zonder in te boeten op professionele koeling. Ideaal voor foodtrucks, pop-ups en compacte craftbars.",
    image: withBase("/assets/products-catalog/picky.jpg"),
    alt: "Golderos Picky — via VanRobi",
    cropClass: "crop-picky",
    uses: ["events", "mobiel", "horeca"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "440 x 215 x 300" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 1/8" },
      { label: "Cuba", value: "(l): 6" },
      { label: "IJsreserve", value: "4" },
      { label: "Capacidad de dispensado (l/h", value: "20" },
    ],
  },
  {
    id: "gold-ice",
    index: "03",
    name: "Gold Ice",
    badge: "IJs · Horeca",
    description:
      "Gold Ice — snelle ijsproductie en stabiele koude voor horeca en events.",
    longDescription:
      "Gold Ice van Golderos combineert ijsreserve met eenvoudig onderhoud. Via VanRobi beschikbaar voor Belgische en Nederlandse horeca die betrouwbare koude nodig heeft zonder complexe installatie.",
    image: withBase("/assets/products-catalog/gold-ice.jpg"),
    alt: "Golderos Gold Ice — via VanRobi",
    cropClass: "crop-gold-ice",
    uses: ["horeca", "events"],
    featured: false,
    specs: [
      { label: "Herkomst", value: "Golderos · Spanje" },
      { label: "Distributeur", value: "VanRobi · BE & NL" },
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
      "De V100 is het werkpaard voor restaurants en bars. Medium formaat, stabiel debiet en voldoende ijsreserve voor dagelijks horecagebruik. Ook als horizontale variant — VanRobi helpt bij de juiste keuze.",
    image: withBase("/assets/products-official/v100.jpg"),
    alt: "Golderos V100 — via VanRobi",
    cropClass: "crop-v100",
    uses: ["horeca", "onder-bar"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "717 x 430 x 430" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 3/8" },
      { label: "Cuba", value: "(l): 40" },
      { label: "IJsreserve", value: "19" },
      { label: "Capacidad de dispensado (l/h", value: "87" },
    ],
  },
  {
    id: "v100-portable",
    index: "05",
    name: "V100 portable",
    badge: "Events · Mobiel",
    description:
      "Mobiele V100 voor festivals en feesten. Klaar voor snelle opbouw — optioneel met zuil.",
    longDescription:
      "De V100 portable brengt V100-capaciteit naar het festivalterrein. Op wielen, snel opgebouwd, optioneel met tapzuil. Ideaal voor cateraars en tijdelijke bars.",
    image: withBase("/assets/products-official/v100-portable.jpg"),
    alt: "Golderos V100 portable — via VanRobi",
    cropClass: "crop-v100-portable",
    uses: ["events", "mobiel"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "890 x 450 x 450" },
      { label: "Spanning", value: "220V / 50 Hz" },
      { label: "Compressor", value: "( Cv ): 3/8" },
      { label: "Capacité du réservoir (l)", value: "40" },
      { label: "Bloc de glace (Kg)", value: "21" },
      { label: "Capacité de distribution (l/", value: "87" },
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
      "De V200 is gebouwd voor drukke bars. Maximale ijsreserve en hoog debiet. Ook horizontaal leverbaar — VanRobi matcht volume, ruimte en openingsuren.",
    image: withBase("/assets/products-official/v200.jpg"),
    alt: "Golderos V200 — via VanRobi",
    cropClass: "crop-v200",
    uses: ["horeca", "onder-bar", "events"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "900 x 495 x 495" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 5/8" },
      { label: "Cuba", value: "(l): 66" },
      { label: "IJsreserve", value: "38" },
      { label: "Capacidad de dispensado (l/h", value: "160" },
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
    alt: "Golderos V200 portable — via VanRobi",
    cropClass: "crop-v200-portable",
    uses: ["events", "mobiel"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "996 x 500 x 500" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Potencia de compresor ( Cv )", value: "1/2" },
      { label: "Capacidad de cuba (l)", value: "66" },
      { label: "IJsreserve", value: "38" },
      { label: "Capacidad e despensado (l/h)", value: "160" },
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
      "De V300 levert hogere capaciteit voor drukke horeca. Meer spiralen, meer debiet — wanneer de V200 net niet genoeg is.",
    image: withBase("/assets/products-catalog/v300.jpg"),
    alt: "Golderos V300 — via VanRobi",
    cropClass: "crop-v300",
    uses: ["horeca", "onder-bar", "events"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "900 x 495 x 495" },
      { label: "Spanning", value: "220V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 1" },
      { label: "Cuba", value: "(l): 66" },
      { label: "IJsreserve", value: "40" },
      { label: "Capacidad de dispensado (l/h", value: "207" },
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
    alt: "Golderos V90 — via VanRobi",
    cropClass: "crop-v90",
    uses: ["horeca", "onder-bar"],
    featured: false,
    specs: [
      { label: "Afmetingen", value: "720 x 430 x 290" },
      { label: "Spanning", value: "220V / 50 Hz" },
      { label: "Compressor", value: "( Cv ): 3/8" },
      { label: "Capacité du réservoir (l)", value: "–" },
      { label: "Bloc de glace (Kg)", value: "–" },
      { label: "Capacité de distribution (l/", value: "–" },
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
      "De H50 is de horizontale variant voor lage onder-bar opstellingen. Zelfde Golderos-kwaliteit, aangepast aan barhoogte en meubelontwerp.",
    image: withBase("/assets/products-catalog/h50.jpg"),
    alt: "Golderos H50 — via VanRobi",
    cropClass: "crop-h50",
    uses: ["horeca", "onder-bar"],
    featured: false,
    specs: [
      { label: "Afmetingen", value: "900 x 557 x 557" },
      { label: "Spanning", value: "230 – 400V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 11/4" },
      { label: "Cuba", value: "(l): 100" },
      { label: "IJsreserve", value: "60" },
      { label: "Capacidad de dispensado (l/h", value: "282" },
    ],
  },
  {
    id: "v500",
    index: "11",
    name: "V500",
    badge: "High volume · Industrie",
    description:
      "Topmodel voor extreme volumes — tot 282 L/u en 60 kg ijsreserve.",
    longDescription:
      "De V500 is het topmodel van Golderos voor extreme volumes: 100 L cuba, 60 kg ijs, tot 282 L/u. Ook als speciale tankkoelvariant. VanRobi adviseert bij dimensionering.",
    image: withBase("/assets/products-catalog/v500.jpg"),
    alt: "Golderos V500 — via VanRobi",
    cropClass: "crop-v500",
    uses: ["horeca", "onder-bar", "events"],
    featured: true,
    specs: [
      { label: "Afmetingen", value: "990 x 557 x 557" },
      { label: "Spanning", value: "230 – 400V/ 50 Hz" },
      { label: "Compressor", value: "(Cv): 11/4" },
      { label: "Cuba", value: "(l): 100" },
      { label: "IJsreserve", value: "60" },
      { label: "Capacidad de dispensado (l/h", value: "282" },
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
    alt: "Golderos Barrilero doble — via VanRobi",
    cropClass: "crop-barrilero-doble",
    uses: ["horeca", "onder-bar"],
    featured: false,
    specs: [
      { label: "Herkomst", value: "Golderos · Spanje" },
      { label: "Distributeur", value: "VanRobi · BE & NL" },
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
      "Condensorunit van Golderos voor installaties waarbij de warmteafvoer gescheiden moet — technische ruimtes, lange leidingen, split-systemen.",
    image: withBase("/assets/products-catalog/unidad-condensadora.jpg"),
    alt: "Golderos Condensorunit — via VanRobi",
    cropClass: "crop-unidad-condensadora",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Herkomst", value: "Golderos · Spanje" },
      { label: "Distributeur", value: "VanRobi · BE & NL" },
    ],
  },
  {
    id: "g8-agua-aire",
    index: "14",
    name: "G8 water/lucht met condensor",
    badge: "Roermotor · G8",
    description:
      "G8 roermotor water/lucht met condensor — voor ijsbankcirculatie.",
    longDescription:
      "G8-serie roermotoren van Golderos voor betrouwbare ijsbankcirculatie. Water/lucht-variant met condensor.",
    image: withBase("/assets/products-catalog/g8-agua-aire.jpg"),
    alt: "Golderos G8 water/lucht met condensor — via VanRobi",
    cropClass: "crop-g8-agua-aire",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: ":" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "carcasa plástico" },
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
      "G8 luchtgekoelde roermotor met condensor — onderdeel van het Golderos-ecosysteem voor ijsbankkoelers.",
    image: withBase("/assets/products-catalog/g8-aire.jpg"),
    alt: "Golderos G8 lucht met condensor — via VanRobi",
    cropClass: "crop-g8-aire",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: "V 220, Hz 50, W 60/80/120" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "carcasa de  acero inoxidable + carcasa plástico" },
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
    alt: "Golderos G8 water met condensor — via VanRobi",
    cropClass: "crop-g8-agua",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: "V 220, Hz 50, W 60/80/120" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "carcasa de acero inoxidable" },
    ],
  },
  {
    id: "g98-con",
    index: "17",
    name: "G98 met condensor",
    badge: "Roermotor · G98",
    description:
      "G98 roermotor met condensor — 220/115V.",
    longDescription:
      "G98 met condensor: flexibele spanning (220/115V), ontworpen voor Golderos-ijsbanksystemen.",
    image: withBase("/assets/products-catalog/g98-con.jpg"),
    alt: "Golderos G98 met condensor — via VanRobi",
    cropClass: "crop-g98-con",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "carcasa plástico" },
    ],
  },
  {
    id: "g98-sin",
    index: "18",
    name: "G98 zonder condensor",
    badge: "Roermotor · G98",
    description:
      "G98 roermotor zonder condensor — voor split-opstellingen.",
    longDescription:
      "G98 zonder ingebouwde condensor — wanneer de condensor elders geplaatst wordt.",
    image: withBase("/assets/products-catalog/g98-sin.jpg"),
    alt: "Golderos G98 zonder condensor — via VanRobi",
    cropClass: "crop-g98-sin",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "–" },
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
      "G92-serie zonder condensor voor specifieke Golderos-configuraties en vervangingsprojecten.",
    image: withBase("/assets/products-catalog/g92-sin.jpg"),
    alt: "Golderos G92 zonder condensor — via VanRobi",
    cropClass: "crop-g92-sin",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Specificaties", value: "V 220/ V 115, Hz 50/ 60 Hz, W 55" },
      { label: "Uitgangen", value: "1- 3 salidas para riego" },
      { label: "Protector de giro", value: "–" },
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
      "Koudwaterbad van Golderos voor industriële en speciale toepassingen — van deeg tot chemische processen. Via VanRobi op aanvraag.",
    image: withBase("/assets/products-catalog/cuba-frio.jpg"),
    alt: "Golderos Koudwaterbad — via VanRobi",
    cropClass: "crop-cuba-frio",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Herkomst", value: "Golderos · Spanje" },
      { label: "Distributeur", value: "VanRobi · BE & NL" },
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
      "Warmwaterbad van Golderos voor industriële toepassingen. Op aanvraag via VanRobi.",
    image: withBase("/assets/products-catalog/cuba-caliente.jpg"),
    alt: "Golderos Warmwaterbad — via VanRobi",
    cropClass: "crop-cuba-caliente",
    uses: ["horeca"],
    featured: false,
    specs: [
      { label: "Herkomst", value: "Golderos · Spanje" },
      { label: "Distributeur", value: "VanRobi · BE & NL" },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}


export const categories = [
  {
    href: withBase("/voor-wie/"),
    image: withBase("/assets/cats/horeca.jpg"),
    alt: "Bier tappen aan een professionele zuil",
    index: "01",
    label: "Horeca vast",
    delay: "",
  },
  {
    href: withBase("/voor-wie/"),
    image: withBase("/assets/cats/events.jpg"),
    alt: "Festivalterrein met high-volume drankvoorziening",
    index: "02",
    label: "Events & festivals",
    delay: "reveal-delay-1",
  },
  {
    href: withBase("/voor-wie/"),
    image: withBase("/assets/cats/craft.jpg"),
    alt: "Detail van Golderos ijsbankkoeler met kraan",
    index: "03",
    label: "Craft & brouwerijen",
    delay: "reveal-delay-2",
  },
  {
    href: withBase("/voor-wie/"),
    image: withBase("/assets/cats/install.jpg"),
    alt: "Koperen koeltechniek en compressor van een ijsbankkoeler",
    index: "04",
    label: "Installateurs",
    delay: "",
  },
  {
    href: withBase("/diensten/"),
    image: withBase("/assets/cats/bars.jpg"),
    alt: "Sfeervolle bar met professionele taplijn",
    index: "05",
    label: "Bars & restaurants",
    delay: "reveal-delay-1",
  },
  {
    href: withBase("/diensten/"),
    image: withBase("/assets/cats/service.jpg"),
    alt: "Technisch detail van koelleidingen en motor",
    index: "06",
    label: "Onderdelen & service",
    delay: "reveal-delay-2",
  },
];

export const whyItems = [
  {
    n: "01",
    title: "Officieel kanaal",
    text: "Gecertificeerde Golderos-distributeur voor België en Nederland. Geen grijze import.",
    delay: "",
  },
  {
    n: "02",
    title: "Techniek die klopt",
    text: "IJsbankcapaciteit, spiralen, debiet — heldere specs voor installateurs en barontwerp.",
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
    text: "Van Goldy tot V200 — we matchen volume, ruimte en events aan de juiste unit.",
    delay: "reveal-delay-3",
  },
];
