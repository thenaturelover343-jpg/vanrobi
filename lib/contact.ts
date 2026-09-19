export const contact = {
  brand: "VanRobi",
  company: "Taponderhoud",
  companyUrl: "https://www.taponderhoud.be",
  email: "info@vanrobi.be",
  phone: "+32 (0)14 71 80 80",
  phoneTel: "+3214718080",
  address: {
    street: "Kemelbeekstraat 16",
    postal: "2460",
    city: "Kasterlee",
    district: "Tielen",
    country: "België",
    line: "Kemelbeekstraat 16, 2460 Kasterlee (Tielen)",
  },
  regions:
    "Antwerpen, Limburg, Vlaams-Brabant, Brussel, Oost-Vlaanderen, basis in de Kempen",
  work: [
    "Tapinstallatie onderhoud",
    "Reiniging",
    "Herstellingen",
    "Plaatsing & demontage koelingen",
  ],
  certified: "Koelgecertificeerd",
} as const;

export function offerteMailto(product?: string) {
  const subject = product
    ? `Offerteaanvraag VanRobi, ${product}`
    : "Offerteaanvraag VanRobi";
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
