import { withBase } from "./base";

export const frHome = {
  eyebrow: "Distributeur officiel BE & NL",
  title: ["Refroidissement", "à la hauteur"],
  titleEm: "du service",
  lede:
    "VanRobi est le distributeur officiel Golderos pour la Belgique et les Pays-Bas. Refroidisseurs à banc de glace pour Horeca, events et installateurs.",
  cta: "Demander un devis",
  ctaSecondary: "Voir les produits",
  whyTitle: "Pourquoi VanRobi",
  why: [
    {
      n: "01",
      title: "Canal officiel",
      text: "Distributeur Golderos certifié pour la Belgique et les Pays-Bas. Pas d'import gris.",
    },
    {
      n: "02",
      title: "Technique claire",
      text: "Capacité, spirales, débit — specs nettes pour installateurs et conception de bar.",
    },
    {
      n: "03",
      title: "À proximité",
      text: "Devis, livraison et maintenance depuis la Campine. Réactivité quand le bar doit ouvrir.",
    },
    {
      n: "04",
      title: "Sur mesure",
      text: "De la Goldy à la V200 — nous associons volume, espace et events à la bonne machine.",
    },
  ],
};

export const frProductsIntro = {
  eyebrow: "Catalogue",
  title: ["Machines", "Golderos"],
  lede:
    "Sélection phare via VanRobi. Catalogue complet disponible en néerlandais.",
};

export const frProductCopy: Record<
  string,
  { badge: string; description: string; longDescription: string }
> = {
  goldy: {
    badge: "Events · Sur bar",
    description:
      "Refroidisseur compact sur bar pour events, salons et craft — breveté par Golderos.",
    longDescription:
      "La Goldy est le refroidisseur à banc de glace compact sur bar de Golderos : idéal quand l'espace manque et que le bar doit rester visible. Parfait pour events, craft bars et pop-ups. Livré via VanRobi avec conseil sur spirales, débit et implantation.",
  },
  v100: {
    badge: "Horeca · Sous bar",
    description:
      "Installation fixe sous bar format medium. Débit stable pour restaurants et bars.",
    longDescription:
      "La V100 est le cheval de bataille pour restaurants et bars. Format medium, débit stable et réserve de glace suffisante pour un usage Horeca quotidien. Aussi en variante horizontale — VanRobi vous aide à choisir.",
  },
  v200: {
    badge: "High volume · Sous bar",
    description:
      "Pour bars très fréquentés et service high volume. Réserve de glace et débit max.",
    longDescription:
      "La V200 est conçue pour les bars intensifs. Réserve de glace maximale et haut débit. Aussi disponible en horizontal — VanRobi aligne volume, espace et horaires d'ouverture.",
  },
  "v100-portable": {
    badge: "Events · Mobile",
    description:
      "V100 mobile pour festivals et fêtes. Prête pour un montage rapide — option colonne.",
    longDescription:
      "La V100 portable apporte la capacité V100 sur le terrain festival. Sur roues, montage rapide, colonne de tirage en option. Idéale pour traiteurs et bars temporaires.",
  },
};

export const frContact = {
  eyebrow: "Contact",
  title: ["Devis ou", "question ?"],
  lede:
    "Envoyez votre demande — réponse sous un jour ouvrable. Machines via VanRobi, maintenance via Taponderhoud.",
  formNote:
    "Le formulaire complet est disponible en néerlandais ; vous pouvez aussi écrire directement à info@vanrobi.be (FR bienvenu).",
};

export const frFeaturedIds = ["goldy", "v100", "v200", "v100-portable"] as const;

export function frProductHref(id: string) {
  return withBase(`/fr/produits/${id}/`);
}
