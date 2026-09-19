import type { FaqItem } from "./schema";

/** General site FAQ (NL) */
export const generalFaqs: FaqItem[] = [
  {
    question: "Is VanRobi de officiële Golderos-verdeler voor België en Nederland?",
    answer:
      "Ja. VanRobi is de officiële Golderos-distributeur voor België en Nederland. U koopt via een erkend kanaal — geen grijze import — met correcte specs, garantieopvolging en lokale support.",
  },
  {
    question: "Wie doet het onderhoud van mijn tapinstallatie?",
    answer:
      "Onderhoud, reiniging en herstellingen verlopen via Taponderhoud (taponderhoud.be), onze koelgecertificeerde partner vanuit de Kempen. Machines via VanRobi; service via Taponderhoud.",
  },
  {
    question: "Hoe vraag ik een offerte aan?",
    answer:
      "Stuur een mail naar info@vanrobi.be, bel +32 14 71 80 80, of gebruik het contactformulier op de site. Vermeld model, toepassing (horeca/events) en eventueel aantal kranen — dan kunnen we gericht adviseren.",
  },
  {
    question: "Wat is de levertijd?",
    answer:
      "Levertijden hangen af van model en voorraad bij Golderos. Reken indicatief op enkele weken voor standaardunits; portable- en specials kunnen langer duren. We bevestigen een realistische planning bij elke offerte — geen beloftes die we niet kunnen houden.",
  },
  {
    question: "Wat is het verschil tussen de V100 en de V200?",
    answer:
      "De V100 is het medium onder-bar werkpaard (±87 L/u, 19 kg ijs). De V200 is high-volume (±160 L/u, 38 kg ijs) voor drukke bars. Kies V100 voor stabiele dagelijkse horeca; V200 wanneer pieken en volume zwaarder wegen. Zie ook onze vergelijkingsgids.",
  },
  {
    question: "Leveren jullie ook in Nederland?",
    answer:
      "Ja. VanRobi bedient België én Nederland als officieel Golderos-kanaal. Neem contact op voor levering, advies en opvolging in uw regio.",
  },
  {
    question: "Kan ik een machine voor festivals of events huren of kopen?",
    answer:
      "We focussen op verkoop van Golderos-koelers (o.a. Goldy, V100 portable, V200 portable). Voor events helpen we met de juiste mobiele unit en opbouwadvies. Huurvragen bekijken we case by case — mail info@vanrobi.be.",
  },
  {
    question: "Wat is het verschil tussen een ijsbankkoeler en een doorstroomkoeler?",
    answer:
      "Een ijsbankkoeler houdt een ijsreserve in een waterbad (cuba) aan — dat geeft buffer bij pieken. Een doorstroomkoeler koelt vooral terwijl er getapt wordt en is vaak compacter, maar heeft minder reserve. Welke beter is, hangt af van piekvolume, leidingen en ruimte. Lees onze gids “Wat is een ijsbankkoeler?” of vraag advies via info@vanrobi.be.",
  },
  {
    question: "Installeren jullie bierkoelers in België?",
    answer:
      "VanRobi levert en adviseert. Plaatsing, demontage en technische opvolging van koelingen verlopen via Taponderhoud (koelgecertificeerd, Kempen). Samen dekken we Antwerpen, Limburg, Vlaams-Brabant, Brussel, Oost-Vlaanderen — en levering in NL. Contact: info@vanrobi.be of +32 14 71 80 80.",
  },
  {
    question: "Welke bierkoeler voor een festival of outdoor event?",
    answer:
      "Voor de meeste festivals: V100 portable (capaciteit op wielen) of Goldy (compact over-bar). Grote pieken: V200 portable. Voorzie stabiele 220V, plaats uit de zon, en plan levertijd vooruit. Zie de gids “Bierkoeler voor events”.",
  },
  {
    question: "Goldy of V100 — wat past bij mijn bar?",
    answer:
      "Goldy is over-bar (zichtbaar, compact, ±44 L/u) — sterk voor events en craft. V100 is onder-bar (±87 L/u, meer ijs) voor vaste horeca. Vergelijking met echte specs staat in onze gids Goldy vs V100.",
  },
  {
    question: "Wat kost een Golderos-bierkoeler?",
    answer:
      "Prijs hangt af van model, opties (zuil, spiralen) en leveringsvoorwaarden. We geven geen catalogusprijzen online zonder context — stuur uw toepassing naar info@vanrobi.be voor een gerichte offerte.",
  },
  {
    question: "Kan ik een onder-bar koeler in een bestaand barmeubel plaatsen?",
    answer:
      "Vaak wel, mits diepte, ventilatie en leidingwerk kloppen. V100 (717×430×430) en V200 (900×495×495) hebben verschillende footprints; horizontale varianten bestaan voor lage opstellingen. Stuur meubelmaten mee bij de aanvraag.",
  },
];

export const productFaqs: Record<string, FaqItem[]> = {
  goldy: [
    {
      question: "Waarvoor is de Goldy bedoeld?",
      answer:
        "De Goldy is een compacte over-bar ijsbankkoeler voor events, craftbars en pop-ups waar ruimte beperkt is en de bar zichtbaar mag blijven.",
    },
    {
      question: "Is de Goldy geschikt als vaste horeca-installatie?",
      answer:
        "Ja voor compacte bars, maar voor vaste high-volume service raden we eerder een onder-bar unit (V100/V200) aan. We helpen u matchen op volume en ruimte.",
    },
    {
      question: "Hoe vraag ik een offerte voor de Goldy?",
      answer:
        "Mail info@vanrobi.be of gebruik het contactformulier met vermelding “Goldy”. We bevestigen beschikbaarheid en levertijd bij de offerte.",
    },
  ],
  v100: [
    {
      question: "Is de V100 geschikt voor mijn restaurant of bar?",
      answer:
        "De V100 is het standaard werkpaard voor horeca: medium formaat, stabiel debiet (±87 L/u) en voldoende ijsreserve voor dagelijks gebruik.",
    },
    {
      question: "V100 of V200 — wat kies ik?",
      answer:
        "V100 voor normale tot drukke service; V200 wanneer u structureel high volume draait. Lees onze gids V100 vs V200 of vraag advies via info@vanrobi.be.",
    },
    {
      question: "Bestaat de V100 ook horizontaal?",
      answer:
        "Ja, er zijn horizontale varianten in de Golderos-lijn. VanRobi helpt bij de juiste keuze op basis van barmeubel en diepte.",
    },
  ],
  v200: [
    {
      question: "Wanneer heb ik een V200 nodig?",
      answer:
        "Bij drukke bars, high-volume service of meerdere kranen waar de V100 tekort schiet. De V200 levert ±160 L/u en 38 kg ijsreserve.",
    },
    {
      question: "Kan de V200 op events?",
      answer:
        "Voor vaste installaties is de V200 ideaal. Voor festivals bekijk ook de V200 portable. We adviseren op basis van terrein, stroom en opbouw.",
    },
    {
      question: "Hoe zit het met onderhoud?",
      answer:
        "Onderhoud en reiniging via Taponderhoud (taponderhoud.be). Machines en advies via VanRobi.",
    },
  ],
  "v100-portable": [
    {
      question: "Wat maakt de V100 portable anders?",
      answer:
        "Zelfde V100-capaciteit, maar mobiel op wielen voor festivals, feesten en tijdelijke bars — optioneel met tapzuil.",
    },
    {
      question: "Heb ik speciale stroom nodig?",
      answer:
        "Standaard 220V / 50 Hz. Op festivals: voorzie een stabiele voeding en plaatsing uit de zon. We geven opbouwadvies bij de offerte.",
    },
    {
      question: "Levertijd voor events?",
      answer:
        "Plan vooruit: levertijden zijn voorraad-afhankelijk. Vermeld uw eventdatum bij de aanvraag zodat we eerlijk kunnen plannen.",
    },
  ],
};

export function faqsForProduct(id: string): FaqItem[] {
  return productFaqs[id] ?? [];
}
