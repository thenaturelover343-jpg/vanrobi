import { tagline } from "./experience";
import { withBase } from "./base";

export const site = {
  name: "VanRobi",
  get tagline() {
    return tagline();
  },
  email: "info@vanrobi.be",
  phone: "+32 (0)14 71 80 80",
  phoneTel: "+3214718080",
  liveOriginal: "https://thenaturelover343-jpg.github.io/vanrobi/",
  partner: {
    name: "Taponderhoud",
    url: "https://www.taponderhoud.be",
  },
  address: {
    street: "Kemelbeekstraat 16",
    postal: "2460",
    city: "Kasterlee",
    district: "Tielen",
    country: "België",
    line: "Kemelbeekstraat 16, 2460 Kasterlee (Tielen)",
  },
  regions:
    "Antwerpen, Limburg, Vlaams-Brabant, Brussel, Oost-Vlaanderen, en Nederland — basis in de Kempen.",
} as const;

export const nav = [
  { href: "/producten", label: "Producten" },
  { href: "/vergelijk", label: "Vergelijk" },
  { href: "/diensten", label: "Diensten" },
  { href: "/gids", label: "Gids" },
  { href: "/faq", label: "FAQ" },
  { href: "/voor-wie", label: "Voor wie" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

export function offerteMailto(product?: string) {
  const subject = product
    ? `Offerteaanvraag VanRobi — ${product}`
    : "Offerteaanvraag VanRobi";
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export function offerteHref(product?: string) {
  const q = product ? `?model=${encodeURIComponent(product)}` : "";
  return withBase(`/contact${q}`);
}
