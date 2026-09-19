import { withBase } from "./base";
export type Product = {
  id: string;
  index: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  cropClass: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "goldy",
    index: "01",
    name: "Goldy",
    badge: "Events · Over-bar",
    description:
      "Compacte mobiele koeler voor events, beurzen en craft. Over-bar installatie — gepatenteerd door Golderos.",
    image: withBase("/assets/products-clean/goldy.jpg"),
    alt: "Golderos Goldy — compacte over-bar ijsbankkoeler met twee kranen",
    cropClass: "crop-goldy",
    specs: [
      { label: "Afmetingen", value: "540 × 320 × 360 mm" },
      { label: "Cuba", value: "20 L" },
      { label: "IJsreserve", value: "9 kg" },
      { label: "Debiet", value: "tot 44 L/u" },
      { label: "Spiralen", value: "1 – 2" },
      { label: "Compressor", value: "1/4 Cv · 220V/50Hz" },
    ],
  },
  {
    id: "v100",
    index: "02",
    name: "V100",
    badge: "Horeca · Onder-bar",
    description:
      "Vaste onder-bar installatie in medium formaat. Stabiel debiet voor restaurants en bars met beperkte ruimte.",
    image: withBase("/assets/products-clean/v100.jpg"),
    alt: "Golderos V100 — verticale onder-bar ijsbankkoeler",
    cropClass: "crop-v100",
    specs: [
      { label: "Afmetingen", value: "717 × 430 × 430 mm" },
      { label: "Cuba", value: "40 L" },
      { label: "IJsreserve", value: "19 kg" },
      { label: "Debiet", value: "tot 87 L/u" },
      { label: "Spiralen", value: "1 – 4" },
      { label: "Compressor", value: "3/8 Cv · ook horizontaal" },
    ],
  },
  {
    id: "v100p",
    index: "03",
    name: "V100 portable",
    badge: "Events · Mobiel",
    description:
      "Mobiele V100 voor festivals en feesten. Klaar voor snelle opbouw — optioneel met zuil en kranen.",
    image: withBase("/assets/products-clean/v100-portable.jpg"),
    alt: "Golderos V100 portable — mobiele eventkoeler op wielen met tapzuil",
    cropClass: "crop-v100p",
    specs: [
      { label: "Afmetingen", value: "890 × 450 × 450 mm" },
      { label: "Cuba", value: "40 L" },
      { label: "IJsreserve", value: "19 kg" },
      { label: "Debiet", value: "tot 87 L/u" },
      { label: "Spiralen", value: "1 – 3" },
      { label: "Opstelling", value: "Mobiel · wielen · zuil" },
    ],
  },
  {
    id: "v200",
    index: "04",
    name: "V200",
    badge: "High volume · Onder-bar",
    description:
      "Voor drukke bars en high-volume service. Maximale ijsreserve en debiet — ook als horizontale variant.",
    image: withBase("/assets/products-clean/v200.jpg"),
    alt: "Golderos V200 — grote verticale onder-bar ijsbankkoeler",
    cropClass: "crop-v200",
    specs: [
      { label: "Afmetingen", value: "900 × 495 × 495 mm" },
      { label: "Cuba", value: "66 L" },
      { label: "IJsreserve", value: "38 kg" },
      { label: "Debiet", value: "tot 160 L/u" },
      { label: "Spiralen", value: "1 – 6" },
      { label: "Compressor", value: "1/2 Cv · ook horizontaal" },
    ],
  },
];

export const categories = [
  {
    href: "#offerte",
    image: withBase("/assets/cats/horeca.jpg"),
    alt: "Bier tappen aan een professionele zuil",
    index: "01",
    label: "Horeca vast",
    delay: "",
  },
  {
    href: "#offerte",
    image: withBase("/assets/cats/events.jpg"),
    alt: "Festivalterrein met high-volume drankvoorziening",
    index: "02",
    label: "Events & festivals",
    delay: "reveal-delay-1",
  },
  {
    href: "#offerte",
    image: withBase("/assets/cats/craft.jpg"),
    alt: "Detail van Golderos ijsbankkoeler met kraan",
    index: "03",
    label: "Craft & brouwerijen",
    delay: "reveal-delay-2",
  },
  {
    href: "#offerte",
    image: withBase("/assets/cats/install.jpg"),
    alt: "Koperen koeltechniek en compressor van een ijsbankkoeler",
    index: "04",
    label: "Installateurs",
    delay: "",
  },
  {
    href: "#offerte",
    image: withBase("/assets/cats/bars.jpg"),
    alt: "Sfeervolle bar met professionele taplijn",
    index: "05",
    label: "Bars & restaurants",
    delay: "reveal-delay-1",
  },
  {
    href: "#offerte",
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
    text: "Offertes, levering en opvolging vanuit de regio. Snel schakelen wanneer de bar open moet.",
    delay: "reveal-delay-2",
  },
  {
    n: "04",
    title: "Op maat",
    text: "Van Goldy tot V200 — we matchen volume, ruimte en events aan de juiste unit.",
    delay: "reveal-delay-3",
  },
];
