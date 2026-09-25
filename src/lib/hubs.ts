import type { ProductGroup } from "./products";

export type HubKey =
  | "bierkoelers"
  | "kegkoelers"
  | "serpentijnen"
  | "tap-zuilen"
  | "onderdelen";

export type HubCopy = {
  h1: string;
  kicker: string;
  title: string;
  description: string;
  intro: string;
  bodyExtra?: string;
  relatedLabel: string;
  catalogLabel: string;
  quoteLabel: string;
  breadcrumb: string;
};

export type HubDef = {
  key: HubKey;
  group: ProductGroup;
  nlPath: string;
  frPath: string;
  nl: HubCopy;
  fr: HubCopy;
};

export const hubs: Record<HubKey, HubDef> = {
  bierkoelers: {
    key: "bierkoelers",
    group: "koelers",
    nlPath: "/bierkoelers",
    frPath: "/fr/refroidisseurs-biere",
    nl: {
      h1: "Bierkoelers",
      kicker: "Ijsbank · Leidingkoeling · BE & NL",
      title: "Bierkoelers kopen België & Nederland | VanRobi",
      description:
        "Bierkoelers kopen België & Nederland: ijsbankkoelers (tapkoeler / leidingkoeling) voor horeca. Goldy, Picky, V90, H50, V100–V500 en portables. Geen catalogusprijzen — vraag offerte.",
      intro:
        "Een bierkoeler (ook tapkoeler genoemd) koelt de leiding naar de kraan. Bij VanRobi zijn dat ijsbankkoelers: spiralen in een ijswaterbad met ijsreserve als buffer bij pieken. Geschikt voor horeca in België en Nederland. Dat is iets anders dan een kegkoeler, die het vat zelf koelt.",
      bodyExtra:
        "Doorstroomkoeler is een verwante zoekterm: ijsbankkoelers koelen ook doorstromend via spiralen, maar houden bovendien een ijsreserve aan. Droogkoelers zonder ijsbank zitten niet in dit overzicht — vraag advies als u twijfelt.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Bierkoelers",
    },
    fr: {
      h1: "Refroidisseurs de bière",
      kicker: "Banquise · Ligne · BE & NL",
      title: "Refroidisseurs de bière acheter Belgique & Pays-Bas | VanRobi",
      description:
        "Refroidisseurs de bière acheter Belgique & Pays-Bas : banquise (refroidissement de ligne) pour l'horeca. Goldy, Picky, V90, H50, V100–V500 et portables. Demandez un devis.",
      intro:
        "Un refroidisseur de bière (aussi appelé refroidisseur de tirage) refroidit la ligne vers le robinet. Chez VanRobi, ce sont des refroidisseurs à banquise : serpentins dans un bain d'eau glacée avec réserve de glace. Pour l'horeca en Belgique et aux Pays-Bas. Différent d'un refroidisseur de fût, qui refroidit le fût lui-même.",
      bodyExtra:
        "Un refroidisseur à circulation (doorstroom) est lié : la banquise refroidit aussi en circulation via les serpentins, avec en plus une réserve de glace. Les dry coolers sans banquise ne figurent pas ici — demandez conseil si besoin.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Refroidisseurs de bière",
    },
  },
  kegkoelers: {
    key: "kegkoelers",
    group: "kegkoelers",
    nlPath: "/kegkoelers",
    frPath: "/fr/refroidisseurs-fut",
    nl: {
      h1: "Kegkoelers",
      kicker: "Fustenkoeler · Vatenkoeler · BE & NL",
      title: "Kegkoelers kopen België & Nederland | VanRobi",
      description:
        "Kegkoelers kopen België & Nederland: fustenkoeler / vatenkoeler (barrilero) die het vat koelt. In het assortiment: Barrilero Doble. Offerte op maat.",
      intro:
        "Een kegkoeler (fustenkoeler, vatenkoeler, barrilero) koelt het vat zelf op temperatuur vóór het tappen — niet de leiding naar de kraan. Voor horeca in België en Nederland. Leidingkoeling vindt u bij onze bierkoelers (ijsbank).",
      bodyExtra:
        "In het VanRobi-assortiment staat één kegmodel: de Barrilero Doble (dubbel; er is ook een individuele uitvoering). Maten en opstelling bespreken we bij de offerte.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Kegkoelers",
    },
    fr: {
      h1: "Refroidisseurs de fût",
      kicker: "Keg · Barrilero · BE & NL",
      title: "Refroidisseurs de fût acheter Belgique & Pays-Bas | VanRobi",
      description:
        "Refroidisseurs de fût acheter Belgique & Pays-Bas : keg / barrilero qui refroidit le fût. Assortiment : Barrilero Doble. Devis sur mesure.",
      intro:
        "Un refroidisseur de fût (keg, barrilero) met le fût à température avant le tirage — pas la ligne vers le robinet. Pour l'horeca en Belgique et aux Pays-Bas. Le froid de ligne se trouve chez nos refroidisseurs de bière (banquise).",
      bodyExtra:
        "Dans l'assortiment VanRobi : un modèle keg, le Barrilero Doble (double ; il existe aussi une version individuelle). Dimensions et installation à la demande.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Refroidisseurs de fût",
    },
  },
  serpentijnen: {
    key: "serpentijnen",
    group: "serpentijnen",
    nlPath: "/serpentijnen",
    frPath: "/fr/serpentins",
    nl: {
      h1: "Serpentijnen",
      kicker: "Spiralen · Bier & drank · BE & NL",
      title: "Serpentijnen kopen België & Nederland | VanRobi",
      description:
        "Serpentijnen kopen België & Nederland: RVS-spiralen voor bier, water, cider en frisdrank in de ijsbank. Passend bij onze bierkoelers.",
      intro:
        "Serpentijnen (spiralen) liggen in het ijswaterbad van de bierkoeler en brengen de drank op temperatuur vóór de kraan. Voor horeca in België en Nederland — afgestemd op uw koeler en product.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Serpentijnen",
    },
    fr: {
      h1: "Serpentins",
      kicker: "Spirales · Bière & boissons · BE & NL",
      title: "Serpentins acheter Belgique & Pays-Bas | VanRobi",
      description:
        "Serpentins acheter Belgique & Pays-Bas : spirales inox pour bière, eau, cidre et softs dans la banquise. Compatibles avec nos refroidisseurs.",
      intro:
        "Les serpentins (spirales) se placent dans le bain d'eau glacée du refroidisseur et amènent la boisson à température avant le robinet. Pour l'horeca en Belgique et aux Pays-Bas.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Serpentins",
    },
  },
  "tap-zuilen": {
    key: "tap-zuilen",
    group: "dispensing",
    nlPath: "/tap-zuilen",
    frPath: "/fr/colonnes-robinets",
    nl: {
      h1: "Tapzuilen en tapkranen",
      kicker: "Tapkraan · Tapzuil · Lekbak · BE & NL",
      title: "Tapzuilen en tapkranen kopen België & Nederland | VanRobi",
      description:
        "Tapzuilen en tapkranen kopen België & Nederland: zuilen, kranen, lekbakken en koppelingen voor de taplijn. Passend bij bierkoelers en kegkoelers.",
      intro:
        "Tapzuilen, tapkranen, lekbakken en koppelingen maken de taplijn af. Voor horeca in België en Nederland — afgestemd op uw koeler, debiet en barontwerp.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Tap & zuilen",
    },
    fr: {
      h1: "Colonnes et robinets",
      kicker: "Colonne · Robinet · Bac · BE & NL",
      title: "Colonnes et robinets acheter Belgique & Pays-Bas | VanRobi",
      description:
        "Colonnes et robinets acheter Belgique & Pays-Bas : colonnes, robinets, bacs et raccords pour la ligne de tirage.",
      intro:
        "Colonnes de tirage, robinets, bacs d'égouttage et raccords complètent la ligne. Pour l'horeca en Belgique et aux Pays-Bas — adaptés à votre refroidisseur et au bar.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Colonnes et robinets",
    },
  },
  onderdelen: {
    key: "onderdelen",
    group: "onderdelen",
    nlPath: "/onderdelen",
    frPath: "/fr/pieces",
    nl: {
      h1: "Onderdelen",
      kicker: "Tapkraan-onderdelen · Techniek · BE & NL",
      title: "Onderdelen kopen België & Nederland | VanRobi",
      description:
        "Onderdelen kopen België & Nederland: roermotoren, thermostaten, sondes en technische onderdelen voor ijsbankkoelers en de taplijn.",
      intro:
        "Technische onderdelen en tapkraan-onderdelen voor het VanRobi-ecosysteem: roermotoren, thermostaten, sondes en meer. Voor horeca en installateurs in België en Nederland.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Onderdelen",
    },
    fr: {
      h1: "Pièces",
      kicker: "Pièces techniques · Tirage · BE & NL",
      title: "Pièces acheter Belgique & Pays-Bas | VanRobi",
      description:
        "Pièces acheter Belgique & Pays-Bas : moteurs d'agitation, thermostats, sondes et pièces techniques pour banquise et ligne de tirage.",
      intro:
        "Pièces techniques pour l'écosystème VanRobi : moteurs d'agitation, thermostats, sondes et plus. Pour l'horeca et les installateurs en Belgique et aux Pays-Bas.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Pièces",
    },
  },
};

export const hubOrder: HubKey[] = [
  "bierkoelers",
  "kegkoelers",
  "serpentijnen",
  "tap-zuilen",
  "onderdelen",
];

export function hubByNlPath(path: string): HubDef | undefined {
  return hubOrder.map((k) => hubs[k]).find((h) => h.nlPath === path);
}

export function hubByFrPath(path: string): HubDef | undefined {
  return hubOrder.map((k) => hubs[k]).find((h) => h.frPath === path);
}
