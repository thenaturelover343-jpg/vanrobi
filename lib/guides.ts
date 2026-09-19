export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  lede: string;
};

export const guides: Guide[] = [
  {
    slug: "golderos-vs-gamko",
    title: "Golderos vs Gamko: wat past bij uw bar?",
    eyebrow: "Vergelijking",
    description:
      "Vergelijk Golderos ijsbankkoelers (via VanRobi) met Gamko-achtige oplossingen: focus, onderhoud en wanneer Golderos de betere match is voor BE/NL horeca.",
    lede: "Twee namen die vaak vallen bij bierkoeling. Wij zetten de praktische verschillen op een rij — vanuit het perspectief van een officiële Golderos-verdeler.",
  },
  {
    slug: "v100-vs-v200",
    title: "V100 vs V200: welke Golderos-koeler kiest u?",
    eyebrow: "Vergelijking",
    description:
      "Verschil tussen Golderos V100 en V200: debiet, ijsreserve, formaat en typische toepassingen. Helder advies via VanRobi.",
    lede: "Beide zijn onder-bar werkpaarden. Het verschil zit in volume en piekbelasting — niet in “goedkoop versus duur”.",
  },
  {
    slug: "bierkoeler-voor-events",
    title: "Bierkoeler voor events & festivals",
    eyebrow: "Gids",
    description:
      "Welke Golderos-koeler voor festivals en events? Goldy, V100 portable en V200 portable — opbouw, stroom en capaciteit via VanRobi.",
    lede: "Op het terrein telt mobiliteit, snelle opbouw en genoeg koude wanneer de piek komt. Deze gids helpt u kiezen.",
  },
  {
    slug: "wat-is-een-ijsbankkoeler",
    title: "Wat is een ijsbankkoeler?",
    eyebrow: "Uitleg",
    description:
      "Uitleg ijsbankkoeler (bierkoeler): werking, verschil met doorstroomkoeling, wanneer u er één nodig heeft. Advies via VanRobi — officiële Golderos BE/NL.",
    lede: "Een ijsbankkoeler koelt bier (of andere drank) via een ijsreserve in een waterbad — stabiel, stil en geschikt voor professionele horeca en events.",
  },
  {
    slug: "bierkoeler-kopen-belgie-nederland",
    title: "Bierkoeler kopen in België & Nederland",
    eyebrow: "Koopgids",
    description:
      "Bierkoeler kopen in België of Nederland: checklist, lokale levering vanuit Kasterlee/Kempen, Golderos via VanRobi. Officieel kanaal BE & NL.",
    lede: "Van Antwerpen tot Amsterdam: waar u let op bij aankoop, welke capaciteit u nodig heeft, en waarom een officieel Golderos-kanaal telt.",
  },
  {
    slug: "golderos-distributeur-belgie-nederland",
    title: "Golderos distributeur België & Nederland",
    eyebrow: "Officieel",
    description:
      "VanRobi is de officiële Golderos-distributeur voor België en Nederland. Assortiment, advies, levering en onderhoudspartner Taponderhoud.",
    lede: "Zoekt u de officiële Golderos-verdeler in de Benelux? VanRobi levert ijsbankkoelers vanuit Kasterlee (Tielen) voor BE en NL.",
  },
  {
    slug: "onder-bar-bierkoeler",
    title: "Onder-bar bierkoeler: V100 & V200",
    eyebrow: "Onder-bar",
    description:
      "Onder-bar bierkoeler kiezen: Golderos V100 en V200 voor vaste horeca. Debiet, ijsreserve en barmeubel — advies via VanRobi.",
    lede: "Onder de bar verdwijnt de machine uit het zicht — maar capaciteit en voetafdruk blijven cruciaal. Zo kiest u tussen V100 en V200.",
  },
  {
    slug: "goldy-vs-v100",
    title: "Goldy vs V100: over-bar of onder-bar?",
    eyebrow: "Vergelijking",
    description:
      "Vergelijk Golderos Goldy en V100: over-bar vs onder-bar, debiet, ijsreserve en typische toepassingen. Specs via VanRobi.",
    lede: "Compacte zichtbare Goldy of vast onder-bar werkpaard V100? De keuze hangt af van ruimte, volume en of de bar zichtbaar mag blijven.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
