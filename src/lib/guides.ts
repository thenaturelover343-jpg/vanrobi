export type Guide = {
 slug: string;
 title: string;
 eyebrow: string;
 description: string;
 lede: string;
 /** Visible last-updated (ISO date YYYY-MM-DD), real editorial date only */
 updated: string;
 /** Optional first published date */
 published?: string;
};

export const guides: Guide[] = [
 {
 slug: "bierkoeler-kegkoeler-of-ijsbank",
 title: "Bierkoeler, kegkoeler of ijsbankkoeler?",
 eyebrow: "Zoektermen",
 description:
 "Bierkoeler, kegkoeler of ijsbankkoeler: wat elk woord betekent, en welke machine de leiding of het vat koelt.",
 lede: "In de horeca zoekt bijna niemand op “ijsbankkoeler”. Ze typen bierkoeler, tapkoeler of kegkoeler. Dit is het verschil, zonder de verkeerde machine te verkopen.",
 updated: "2026-09-25",
 published: "2026-09-25",
 },
 {
 slug: "ijsbankkoeler-vs-gamko",
 title: "Ijsbankkoeler of complete tapinstallatie: wat past bij uw bar?",
 eyebrow: "Vergelijking",
 description:
 "Wanneer een dedicated ijsbankkoeler de betere match is dan een complete tapmeubellijn: buffer, onderhoud en horeca in België & Nederland.",
 lede: "Niet elke bar heeft dezelfde koeling nodig. We zetten ijsbankkoelers af tegen complete tapinstallaties, vanuit het perspectief van een specialist voor BE/NL.",
 updated: "2026-09-21",
 published: "2026-09-18",
 },
 {
 slug: "v100-vs-v200",
 title: "V100 vs V200: welke ijsbankkoeler kiest u?",
 eyebrow: "Vergelijking",
 description:
 "Verschil tussen V100 en V200: debiet, ijsreserve, formaat en wanneer u de zwaardere onder-bar kiest.",
 lede: 'Beide zijn onder-bar werkpaarden. Het verschil zit in volume en piekbelasting, niet in "goedkoop versus duur".',
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "bierkoeler-voor-events",
 title: "Bierkoeler voor events & festivals",
 eyebrow: "Gids",
 description:
 "Bierkoeler voor events en festivals: Goldy, V100 portable of V200 portable, op stroom, opbouw en capaciteit.",
 lede: "Op het terrein telt mobiliteit, snelle opbouw en genoeg koude wanneer de piek komt. Deze gids helpt u kiezen.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "wat-is-een-ijsbankkoeler",
 title: "Wat is een ijsbankkoeler?",
 eyebrow: "Uitleg",
 description:
 "Wat is een ijsbankkoeler? Werking, verschil met een doorstroomkoeler, en wanneer een bierkoeler past.",
 lede: "Een ijsbankkoeler koelt bier (of andere drank) via een ijsreserve in een waterbad, stabiel, stil en geschikt voor professionele horeca en events.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "bierkoeler-kopen-belgie-nederland",
 title: "Bierkoeler kopen in België & Nederland",
 eyebrow: "Koopgids",
 description:
 "Bierkoeler kopen in België of Nederland: capaciteit, levertijd en waar u op let voor u bestelt.",
 lede: "Van Antwerpen tot Amsterdam: waar u let op bij aankoop, welke capaciteit u nodig heeft, en waarom een professioneel VanRobi-kanaal telt.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "vanrobi-distributeur-belgie-nederland",
 title: "VanRobi: ijsbankkoelers België & Nederland",
 eyebrow: "Specialist",
 description:
 "VanRobi is de specialist in professionele ijsbankkoelers voor België en Nederland. Assortiment, advies, levering en onderhoudspartner Taponderhoud.",
 lede: "Zoekt u een betrouwbaar kanaal voor professionele ijsbankkoelers in de Benelux? VanRobi levert en adviseert vanuit Kasterlee (Tielen) voor BE en NL.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "onder-bar-bierkoeler",
 title: "Onder-bar bierkoeler: V100 & V200",
 eyebrow: "Onder-bar",
 description:
 "Onder-bar bierkoeler kiezen: V100 of V200 voor vaste horeca, op debiet, ijsreserve en barmeubel.",
 lede: "Onder de bar verdwijnt de machine uit het zicht, maar capaciteit en voetafdruk blijven cruciaal. Zo kiest u tussen V100 en V200.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "goldy-vs-v100",
 title: "Goldy vs V100: over-bar of onder-bar?",
 eyebrow: "Vergelijking",
 description:
 "Goldy of V100: over-bar of onder-bar. Vergelijk debiet, ijsreserve en waar de machine in de bar past.",
 lede: "Compacte zichtbare Goldy of vast onder-bar werkpaard V100? De keuze hangt af van ruimte, volume en of de bar zichtbaar mag blijven.",
 updated: "2026-09-19",
 published: "2026-09-18",
 },
 {
 slug: "ijsbankkoeler-vs-dry-cooler",
 title: "IJsbankkoeler vs dry cooler: wat is het verschil?",
 eyebrow: "Uitleg",
 description:
 "Verschil tussen ijsbankkoeler en dry cooler (luchtgekoelde doorstroomkoeler): buffer, pieken, ruimte en wanneer VanRobi ijsbank past.",
 lede: "Beide koelen bier, maar het principe, de buffer en het gedrag bij pieken verschillen. Geen dogma: wel een heldere keuze.",
 updated: "2026-09-19",
 published: "2026-09-19",
 },
 {
 slug: "spiralen-tapinstallatie",
 title: "Spiralen & tapinstallatie: wat moet u weten?",
 eyebrow: "Techniek",
 description:
 "Spiralen in de ijsbankkoeler, leidinglengte en tapinstallatie: hoe ijsbankkoelers aansluiten op uw bar. Advies & Taponderhoud.",
 lede: "De machine is één schakel. Spiralen, leidingen en de kraan bepalen of het glas koud én stabiel aankomt.",
 updated: "2026-09-19",
 published: "2026-09-19",
 },
 {
 slug: "bierkoeler-kiezen-checklist",
 title: "Bierkoeler kiezen: checklist in 7 stappen",
 eyebrow: "Checklist",
 description:
 "Checklist om een bierkoeler te kiezen: vast of mobiel, debiet, ijsreserve, meubel, stroom en spiralen.",
 lede: "Zeven concrete stappen, van piekvolume tot onderhoudspartner, zodat u geen machine koopt die te klein of te groot is.",
 updated: "2026-09-19",
 published: "2026-09-19",
 },
];

export function getGuide(slug: string): Guide | undefined {
 return guides.find((g) => g.slug === slug);
}

/** Format YYYY-MM-DD for visible NL date */
export function formatGuideDate(iso: string): string {
 const [y, m, d] = iso.split("-");
 const months = [
 "januari",
 "februari",
 "maart",
 "april",
 "mei",
 "juni",
 "juli",
 "augustus",
 "september",
 "oktober",
 "november",
 "december",
 ];
 const mi = Number(m) - 1;
 return `${Number(d)} ${months[mi] ?? m} ${y}`;
}
