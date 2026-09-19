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
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
