import type { ProductGroup } from "./products";

export type HubKey =
  | "bierkoelers"
  | "kegkoelers"
  | "serpentijnen"
  | "tap-zuilen"
  | "onderdelen"
  | "glycolkoelers";

export type HubFaq = { question: string; answer: string };

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
  /** Keyword used once in product link text: "{name} {productKeyword}" */
  productKeyword: string;
  faqs: HubFaq[];
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
      kicker: "Tapkoeler · Leidingkoeling · Ijsbankkoeler",
      title: "Bierkoelers kopen voor horeca | VanRobi",
      description:
        "Bierkoelers (tapkoeler / leidingkoeling / ijsbankkoeler) voor horeca. Levering en advies in België en Nederland. Goldy, Picky, H50, V100–V500 en portables. Vraag een offerte.",
      intro:
        "Een bierkoeler — ook tapkoeler, leidingkoeling of ijsbankkoeler genoemd — koelt de leiding naar de kraan. Bij VanRobi zijn dat ijsbankkoelers: spiralen in een ijswaterbad met ijsreserve als buffer bij pieken. Geschikt voor horeca; levering en advies in België en Nederland. Dat is iets anders dan een kegkoeler (vat) of een glycolkoeler (glycolcircuit).",
      bodyExtra:
        "Doorstroomkoeler is een verwante zoekterm: ijsbankkoelers koelen ook doorstromend via spiralen, maar houden bovendien een ijsreserve aan. Droogkoelers zonder ijsbank en glycolkoelers zitten niet in dit overzicht.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Bierkoelers",
      productKeyword: "bierkoeler",
      faqs: [
        {
          question: "Wat is het verschil tussen een bierkoeler en een kegkoeler?",
          answer:
            "Een bierkoeler (tapkoeler / leidingkoeling / ijsbankkoeler) koelt de leiding naar de kraan. Een kegkoeler (fustenkoeler / vatenkoeler) koelt het vat zelf. Beide komen voor in de horeca; de keuze hangt af van uw opstelling.",
        },
        {
          question: "Is een bierkoeler hetzelfde als een doorstroomkoeler?",
          answer:
            "Doorstroomkoeler is een verwante term. Onze ijsbankkoelers koelen doorstromend via spiralen en houden daarnaast een ijsreserve aan. Het is niet hetzelfde zoekwoord als glycolkoeler of kegkoeler.",
        },
        {
          question: "Levert VanRobi bierkoelers in België en Nederland?",
          answer:
            "Ja. Levering en advies voor bierkoelers voor horeca in België en Nederland. Offerte op maat via het contactformulier.",
        },
      ],
    },
    fr: {
      h1: "Refroidisseurs de bière",
      kicker: "Tirage · Ligne · Banquise",
      title: "Refroidisseurs de bière acheter | VanRobi",
      description:
        "Refroidisseurs de bière (tirage / ligne / banquise) pour l'horeca. Livraison et conseil en Belgique et aux Pays-Bas. Goldy, Picky, H50, V100–V500 et portables. Demandez un devis.",
      intro:
        "Un refroidisseur de bière — aussi appelé refroidisseur de tirage, refroidissement de ligne ou banquise — refroidit la ligne vers le robinet. Chez VanRobi, ce sont des refroidisseurs à banquise : serpentins dans un bain d'eau glacée avec réserve de glace. Pour l'horeca ; livraison et conseil en Belgique et aux Pays-Bas. Différent d'un refroidisseur de fût ou d'un refroidisseur glycol.",
      bodyExtra:
        "Un refroidisseur à circulation (doorstroom) est lié : la banquise refroidit aussi en circulation via les serpentins, avec en plus une réserve de glace. Dry coolers et refroidisseurs glycol ne figurent pas ici.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Refroidisseurs de bière",
      productKeyword: "refroidisseur de bière",
      faqs: [
        {
          question: "Quelle différence entre refroidisseur de bière et de fût ?",
          answer:
            "Le refroidisseur de bière (tirage / ligne / banquise) refroidit la ligne vers le robinet. Le refroidisseur de fût (keg / barrilero) refroidit le fût lui-même.",
        },
        {
          question: "Refroidisseur de bière et doorstroom : est-ce la même chose ?",
          answer:
            "Doorstroom est un terme voisin. Nos banquises refroidissent en circulation via les serpentins et gardent une réserve de glace. Ce n'est pas un refroidisseur glycol ni un refroidisseur de fût.",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca en Belgique et aux Pays-Bas. Devis sur mesure via le formulaire de contact.",
        },
      ],
    },
  },
  kegkoelers: {
    key: "kegkoelers",
    group: "kegkoelers",
    nlPath: "/kegkoelers",
    frPath: "/fr/refroidisseurs-fut",
    nl: {
      h1: "Kegkoelers",
      kicker: "Fustenkoeler · Vatenkoeler · Barrilero",
      title: "Kegkoelers kopen voor horeca | VanRobi",
      description:
        "Kegkoelers (fustenkoeler / vatenkoeler / barrilero) voor horeca. Levering en advies in België en Nederland. In het assortiment: Barrilero Doble. Vraag een offerte.",
      intro:
        "Een kegkoeler — ook fustenkoeler, vatenkoeler of barrilero genoemd — koelt het vat zelf op temperatuur vóór het tappen, niet de leiding naar de kraan. Voor horeca; levering en advies in België en Nederland. Leidingkoeling vindt u bij onze bierkoelers (ijsbank). In dit overzicht: alleen de Barrilero Doble.",
      bodyExtra:
        "In het assortiment staat één kegmodel: de Barrilero Doble (dubbel; er is ook een individuele uitvoering). Maten en opstelling bespreken we bij de offerte.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Kegkoelers",
      productKeyword: "kegkoeler",
      faqs: [
        {
          question: "Wat is een kegkoeler of fustenkoeler?",
          answer:
            "Een kegkoeler (fustenkoeler, vatenkoeler, barrilero) koelt het vat zelf. Dat verschilt van een bierkoeler, die de leiding naar de kraan koelt.",
        },
        {
          question: "Welke kegkoeler zit in het VanRobi-assortiment?",
          answer:
            "Alleen de Barrilero Doble (dubbel model; er bestaat ook een individuele uitvoering). Andere kegmodellen staan niet in deze lijst.",
        },
        {
          question: "Levering van kegkoelers in BE en NL?",
          answer:
            "Ja. Levering en advies voor horeca in België en Nederland. Offerte via het contactformulier.",
        },
      ],
    },
    fr: {
      h1: "Refroidisseurs de fût",
      kicker: "Keg · Barrilero · Fût",
      title: "Refroidisseurs de fût acheter | VanRobi",
      description:
        "Refroidisseurs de fût (keg / barrilero) pour l'horeca. Livraison et conseil en Belgique et aux Pays-Bas. Assortiment : Barrilero Doble. Demandez un devis.",
      intro:
        "Un refroidisseur de fût — aussi keg ou barrilero — met le fût à température avant le tirage, pas la ligne vers le robinet. Pour l'horeca ; livraison et conseil en Belgique et aux Pays-Bas. Le froid de ligne se trouve chez nos refroidisseurs de bière (banquise). Ici : uniquement le Barrilero Doble.",
      bodyExtra:
        "Dans l'assortiment : un modèle keg, le Barrilero Doble (double ; il existe aussi une version individuelle). Dimensions et installation à la demande.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Refroidisseurs de fût",
      productKeyword: "refroidisseur de fût",
      faqs: [
        {
          question: "Qu'est-ce qu'un refroidisseur de fût ?",
          answer:
            "Un refroidisseur de fût (keg, barrilero) refroidit le fût lui-même. Différent d'un refroidisseur de bière, qui refroidit la ligne vers le robinet.",
        },
        {
          question: "Quel modèle keg dans l'assortiment ?",
          answer:
            "Uniquement le Barrilero Doble (modèle double ; il existe aussi une version individuelle).",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca en Belgique et aux Pays-Bas. Devis via le formulaire de contact.",
        },
      ],
    },
  },
  serpentijnen: {
    key: "serpentijnen",
    group: "serpentijnen",
    nlPath: "/serpentijnen",
    frPath: "/fr/serpentins",
    nl: {
      h1: "Serpentijnen",
      kicker: "Spiralen · Bier & drank",
      title: "Serpentijnen kopen voor horeca | VanRobi",
      description:
        "Serpentijnen (spiralen) voor bier, water, cider en frisdrank in de ijsbank. Levering en advies in België en Nederland. Passend bij onze bierkoelers.",
      intro:
        "Serpentijnen — ook spiralen genoemd — liggen in het ijswaterbad van de bierkoeler en brengen de drank op temperatuur vóór de kraan. Voor horeca; levering en advies in België en Nederland. Ze horen bij de ijsbanklijn, niet bij kegkoelers of glycolkoelers.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Serpentijnen",
      productKeyword: "serpentijn",
      faqs: [
        {
          question: "Waarvoor dienen serpentijnen of spiralen?",
          answer:
            "Serpentijnen (spiralen) liggen in het ijswaterbad van de bierkoeler en brengen de drank op temperatuur vóór de kraan.",
        },
        {
          question: "Passen serpentijnen bij elke koeler?",
          answer:
            "Ze worden afgestemd op uw bierkoeler (ijsbank) en product (bier, water, cider, frisdrank). Advies bij de offerte.",
        },
        {
          question: "Levering in België en Nederland?",
          answer:
            "Ja. Levering en advies voor horeca in België en Nederland.",
        },
      ],
    },
    fr: {
      h1: "Serpentins",
      kicker: "Spirales · Bière & boissons",
      title: "Serpentins acheter | VanRobi",
      description:
        "Serpentins (spirales) inox pour bière, eau, cidre et softs dans la banquise. Livraison et conseil en Belgique et aux Pays-Bas.",
      intro:
        "Les serpentins — aussi appelés spirales — se placent dans le bain d'eau glacée du refroidisseur et amènent la boisson à température avant le robinet. Pour l'horeca ; livraison et conseil en Belgique et aux Pays-Bas. Ils appartiennent à la ligne banquise, pas aux refroidisseurs de fût ou glycol.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Serpentins",
      productKeyword: "serpentin",
      faqs: [
        {
          question: "À quoi servent les serpentins ?",
          answer:
            "Les serpentins (spirales) se placent dans le bain d'eau glacée et amènent la boisson à température avant le robinet.",
        },
        {
          question: "Compatibles avec quel refroidisseur ?",
          answer:
            "Ils sont adaptés à votre refroidisseur à banquise et au produit (bière, eau, cidre, soft). Conseil à la demande.",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca en Belgique et aux Pays-Bas.",
        },
      ],
    },
  },
  "tap-zuilen": {
    key: "tap-zuilen",
    group: "dispensing",
    nlPath: "/tap-zuilen",
    frPath: "/fr/colonnes-robinets",
    nl: {
      h1: "Tapzuilen",
      kicker: "Tapkraan · Lekbak · Koppeling",
      title: "Tapzuilen kopen voor horeca | VanRobi",
      description:
        "Tapzuilen en tapkranen voor horeca: zuilen, kranen, lekbakken en koppelingen. Levering en advies in België en Nederland. Passend bij bierkoelers en kegkoelers.",
      intro:
        "Tapzuilen — met tapkranen, lekbakken en koppelingen — maken de taplijn af. Voor horeca; levering en advies in België en Nederland. Afgestemd op uw koeler (bierkoeler of kegkoeler), debiet en barontwerp — niet op glycolcircuits.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Tapzuilen",
      productKeyword: "tapzuil",
      faqs: [
        {
          question: "Wat valt onder tapzuilen?",
          answer:
            "Tapzuilen, tapkranen, lekbakken en koppelingen voor de taplijn — passend bij bierkoelers en kegkoelers.",
        },
        {
          question: "Kan ik tapkranen apart kiezen?",
          answer:
            "Ja. We stemmen zuil, kraan, lekbak en koppelingen af op uw installatie en barontwerp bij de offerte.",
        },
        {
          question: "Levering in België en Nederland?",
          answer:
            "Ja. Levering en advies voor horeca in België en Nederland.",
        },
      ],
    },
    fr: {
      h1: "Colonnes de tirage",
      kicker: "Robinet · Bac · Raccord",
      title: "Colonnes de tirage acheter | VanRobi",
      description:
        "Colonnes et robinets pour l'horeca : colonnes, robinets, bacs et raccords. Livraison et conseil en Belgique et aux Pays-Bas.",
      intro:
        "Les colonnes de tirage — avec robinets, bacs d'égouttage et raccords — complètent la ligne. Pour l'horeca ; livraison et conseil en Belgique et aux Pays-Bas. Adaptés à votre refroidisseur (bière ou fût), au débit et au bar — pas aux circuits glycol.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Colonnes de tirage",
      productKeyword: "colonne de tirage",
      faqs: [
        {
          question: "Que comprend cette catégorie ?",
          answer:
            "Colonnes, robinets, bacs d'égouttage et raccords pour la ligne de tirage, adaptés aux refroidisseurs de bière et de fût.",
        },
        {
          question: "Puis-je choisir les robinets séparément ?",
          answer:
            "Oui. Nous alignons colonne, robinet, bac et raccords sur votre installation à la demande.",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca en Belgique et aux Pays-Bas.",
        },
      ],
    },
  },
  onderdelen: {
    key: "onderdelen",
    group: "onderdelen",
    nlPath: "/onderdelen",
    frPath: "/fr/pieces",
    nl: {
      h1: "Onderdelen",
      kicker: "Roermotor · Thermostaat · Sonde",
      title: "Onderdelen kopen voor horeca | VanRobi",
      description:
        "Onderdelen voor ijsbankkoelers en de taplijn: roermotoren, thermostaten, sondes. Levering en advies in België en Nederland.",
      intro:
        "Technische onderdelen en tapkraan-onderdelen: roermotoren, thermostaten, sondes en meer voor het VanRobi-ecosysteem. Voor horeca en installateurs; levering en advies in België en Nederland. Gericht op ijsbank- en taplijn, niet op glycolmodellen.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Onderdelen",
      productKeyword: "onderdeel",
      faqs: [
        {
          question: "Welke onderdelen levert VanRobi?",
          answer:
            "Roermotoren, thermostaten, sondes en technische onderdelen voor ijsbankkoelers en de taplijn.",
        },
        {
          question: "Voor welke machines zijn de onderdelen bedoeld?",
          answer:
            "Voor het VanRobi-ecosysteem van ijsbankkoelers en taplijn. Specifieke compatibiliteit bespreken we bij de offerte.",
        },
        {
          question: "Levering in België en Nederland?",
          answer:
            "Ja. Levering en advies voor horeca en installateurs in België en Nederland.",
        },
      ],
    },
    fr: {
      h1: "Pièces",
      kicker: "Moteur · Thermostat · Sonde",
      title: "Pièces acheter | VanRobi",
      description:
        "Pièces pour banquise et ligne de tirage : moteurs d'agitation, thermostats, sondes. Livraison et conseil en Belgique et aux Pays-Bas.",
      intro:
        "Pièces techniques : moteurs d'agitation, thermostats, sondes et plus pour l'écosystème VanRobi. Pour l'horeca et les installateurs ; livraison et conseil en Belgique et aux Pays-Bas. Destinées à la banquise et à la ligne de tirage, pas aux modèles glycol.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Pièces",
      productKeyword: "pièce",
      faqs: [
        {
          question: "Quelles pièces proposez-vous ?",
          answer:
            "Moteurs d'agitation, thermostats, sondes et pièces techniques pour banquise et ligne de tirage.",
        },
        {
          question: "Pour quelles machines ?",
          answer:
            "Pour l'écosystème VanRobi (banquise et ligne). La compatibilité précise se discute à la demande.",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca et les installateurs en Belgique et aux Pays-Bas.",
        },
      ],
    },
  },
  glycolkoelers: {
    key: "glycolkoelers",
    group: "glycolkoelers",
    nlPath: "/glycolkoelers",
    frPath: "/fr/refroidisseurs-glycol",
    nl: {
      h1: "Glycolkoeler",
      kicker: "Glycolcircuit · Geen ijsbank",
      title: "Glycolkoeler kopen | VanRobi",
      description:
        "Glycolkoeler voor professionele koelcircuits. Levering en advies in België en Nederland. Geen ijsbank en geen leidingkoeler. In het assortiment: V90.",
      intro:
        "Een glycolkoeler koelt via een glycolcircuit — dit is geen ijsbank en geen leidingkoeler (bierkoeler / tapkoeler). Voor horeca waar glycolkoeling nodig is; levering en advies in België en Nederland. Verschilt van bierkoelers (ijsbank) en kegkoelers (vat). In dit overzicht: de V90.",
      bodyExtra:
        "IJsreservoir-, ijsreserve- en debietcijfers gelden niet voor glycolkoelers. Alleen geverifieerde specs (afmetingen, spanning, compressor) staan bij het product.",
      relatedLabel: "Andere categorieën",
      catalogLabel: "Volledige catalogus",
      quoteLabel: "Vraag een offerte",
      breadcrumb: "Glycolkoelers",
      productKeyword: "glycolkoeler",
      faqs: [
        {
          question: "Is een glycolkoeler een ijsbank of bierkoeler?",
          answer:
            "Nee. Een glycolkoeler is geen ijsbank en geen leidingkoeler. Bierkoelers (tapkoeler / ijsbank) koelen de leiding via een ijswaterbad; glycolkoelers werken met een glycolcircuit.",
        },
        {
          question: "Welke glycolkoeler zit in het assortiment?",
          answer:
            "De V90. Specs zonder geverifieerde liters of kg ijs: alleen afmetingen, spanning en compressor waar die bekend zijn.",
        },
        {
          question: "Levering in België en Nederland?",
          answer:
            "Ja. Levering en advies voor horeca in België en Nederland. Offerte via het contactformulier.",
        },
      ],
    },
    fr: {
      h1: "Refroidisseur glycol",
      kicker: "Circuit glycol · Pas une banquise",
      title: "Refroidisseur glycol acheter | VanRobi",
      description:
        "Refroidisseur glycol pour circuits professionnels. Livraison et conseil en Belgique et aux Pays-Bas. Ce n'est ni une banquise ni un refroidisseur de ligne. Assortiment : V90.",
      intro:
        "Un refroidisseur glycol refroidit via un circuit glycol — ce n'est ni une banquise ni un refroidisseur de ligne (bière / tirage). Pour l'horeca qui a besoin de glycol ; livraison et conseil en Belgique et aux Pays-Bas. Différent des refroidisseurs de bière (banquise) et de fût. Ici : la V90.",
      bodyExtra:
        "Les chiffres de réservoir de glace, réserve et débit ne s'appliquent pas aux refroidisseurs glycol. Seules les specs vérifiées (dimensions, tension, compresseur) figurent sur le produit.",
      relatedLabel: "Autres catégories",
      catalogLabel: "Catalogue complet",
      quoteLabel: "Demander un devis",
      breadcrumb: "Refroidisseurs glycol",
      productKeyword: "refroidisseur glycol",
      faqs: [
        {
          question: "Un refroidisseur glycol est-il une banquise ?",
          answer:
            "Non. Ce n'est ni une banquise ni un refroidisseur de ligne. Les refroidisseurs de bière refroidissent la ligne via un bain d'eau glacée ; le glycol utilise un circuit glycol.",
        },
        {
          question: "Quel modèle dans l'assortiment ?",
          answer:
            "La V90. Sans litres ou kg de glace inventés : uniquement dimensions, tension et compresseur lorsqu'ils sont connus.",
        },
        {
          question: "Livraison en Belgique et aux Pays-Bas ?",
          answer:
            "Oui. Livraison et conseil pour l'horeca en Belgique et aux Pays-Bas. Devis via le formulaire de contact.",
        },
      ],
    },
  },
};

export const hubOrder: HubKey[] = [
  "bierkoelers",
  "kegkoelers",
  "glycolkoelers",
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
