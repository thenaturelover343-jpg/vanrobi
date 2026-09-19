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
      text: "Capacité, spirales, débit, specs nettes pour installateurs et conception de bar.",
    },
    {
      n: "03",
      title: "À proximité",
      text: "Devis, livraison et maintenance depuis la Campine. Réactivité quand le bar doit ouvrir.",
    },
    {
      n: "04",
      title: "Sur mesure",
      text: "De la Goldy à la V200, nous associons volume, espace et events à la bonne machine.",
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
      "Refroidisseur compact sur bar pour events, salons et craft, breveté par Golderos.",
    longDescription:
      "La Goldy est le refroidisseur à banc de glace compact sur bar de Golderos : idéal quand l'espace manque et que le bar doit rester visible. Parfait pour events, craft bars et pop-ups. Livré via VanRobi avec conseil sur spirales, débit et implantation.",
  },
  picky: {
    badge: "Compact · Sur bar",
    description:
      "Refroidisseur ultra-compact sur bar pour petits bars, foodtrucks et pop-ups.",
    longDescription:
      "La Picky est le plus petit refroidisseur à banc de glace sur bar de Golderos, conçu pour les espaces étroits sans sacrifier le froid professionnel. Idéale pour foodtrucks, pop-ups et craft bars compactes.",
  },
  v100: {
    badge: "Horeca · Sous bar",
    description:
      "Installation fixe sous bar format medium. Débit stable pour restaurants et bars.",
    longDescription:
      "La V100 est le cheval de bataille pour restaurants et bars. Format medium, débit stable et réserve de glace suffisante pour un usage Horeca quotidien. Aussi en variante horizontale, VanRobi vous aide à choisir.",
  },
  v200: {
    badge: "High volume · Sous bar",
    description:
      "Pour bars très fréquentés et service high volume. Réserve de glace et débit max.",
    longDescription:
      "La V200 est conçue pour les bars intensifs. Réserve de glace maximale et haut débit. Aussi disponible en horizontal, VanRobi aligne volume, espace et horaires d'ouverture.",
  },
  "v100-portable": {
    badge: "Events · Mobile",
    description:
      "V100 mobile pour festivals et fêtes. Prête pour un montage rapide, option colonne.",
    longDescription:
      "La V100 portable apporte la capacité V100 sur le terrain festival. Sur roues, montage rapide, colonne de tirage en option. Idéale pour traiteurs et bars temporaires.",
  },
  "v200-portable": {
    badge: "Events · Mobile",
    description:
      "Refroidisseur mobile high volume pour festivals et grands events.",
    longDescription:
      "La V200 portable combine capacité high volume et mobilité. Pour festivals, stades et grands bars temporaires sans installation fixe.",
  },
};

export const frContact = {
  eyebrow: "Contact",
  title: ["Devis ou", "question ?"],
  lede:
    "Envoyez votre demande, réponse sous un jour ouvrable. Machines via VanRobi, maintenance via Taponderhoud.",
  formNote:
    "Le formulaire complet est disponible en néerlandais ; vous pouvez aussi écrire directement à info@vanrobi.be (FR bienvenu).",
};

export const frServices = {
  eyebrow: "Services",
  title: ["De la machine à", "la maintenance."],
  lede:
    "VanRobi livre et conseille les refroidisseurs Golderos. Maintenance, nettoyage et réparations via Taponderhoud, une équipe locale.",
  items: [
    {
      n: "01",
      title: "Conseil & sélection",
      text: "Quelle machine Golderos pour votre bar, event ou brasserie ? Nous alignons volume, espace, spirales et débit, sans discours commercial.",
    },
    {
      n: "02",
      title: "Livraison BE & NL",
      text: "Distribution officielle Golderos pour la Belgique et les Pays-Bas. Pas d'import gris : bonnes specs, garantie et suivi.",
    },
    {
      n: "03",
      title: "Placement & démontage",
      text: "Placement et démontage de refroidissements, adaptés à votre ligne de tirage et à votre meuble de bar.",
    },
    {
      n: "04",
      title: "Maintenance & nettoyage",
      text: "Entretien périodique et nettoyage des installations de tirage, via Taponderhoud, certifié froid, depuis la Campine.",
    },
    {
      n: "05",
      title: "Réparations",
      text: "Panne de compresseur, moteur d'agitation ou tuyauterie ? Diagnostic et réparation rapides pour garder le bar ouvert.",
    },
    {
      n: "06",
      title: "Couverture régionale",
      text: "Anvers, Limbourg, Brabant flamand, Bruxelles, Flandre orientale, et livraison aux Pays-Bas.",
    },
  ],
};

export const frAbout = {
  eyebrow: "À propos",
  title: ["VanRobi ×", "Golderos."],
  lede:
    "Canal de distribution officiel pour les refroidisseurs à banc de glace professionnels en Belgique et aux Pays-Bas, avec expertise locale en tirage et froid.",
  partnership:
    "Golderos est le fabricant espagnol de refroidisseurs à banc de glace professionnels, plus de 50 ans d'expérience en froid professionnel. VanRobi est le canal officiel pour la Belgique et les Pays-Bas : sélection, conseil et livraison depuis un seul interlocuteur. Pas d'import gris : specs correctes et suivi local.",
  local:
    "VanRobi collabore avec Taponderhoud pour la maintenance, le nettoyage, les réparations et le placement des refroidissements. Certifié froid, basé en Campine (Kasterlee / Tielen). Ainsi, machines industrielles Golderos et service belge restent alignés après l'achat.",
  coverage:
    "Nous conseillons et livrons en Flandre, à Bruxelles et aux Pays-Bas. Pour le détail régional (Anvers, Limbourg, Brabant flamand, Flandre orientale), voir aussi la page régions en néerlandais.",
};

export const frFaq = {
  eyebrow: "FAQ",
  title: ["Réponses,", "sans détour"],
  lede:
    "Canal officiel Golderos, maintenance via Taponderhoud, délais honnêtes. Votre question n'y figure pas, écrivez à info@vanrobi.be.",
  items: [
    {
      question:
        "VanRobi est-il le distributeur officiel Golderos pour la BE et les NL ?",
      answer:
        "Oui. VanRobi est le distributeur officiel Golderos pour la Belgique et les Pays-Bas. Vous achetez via un canal reconnu, pas d'import gris, avec specs correctes, suivi de garantie et support local depuis Kasterlee (Tielen).",
    },
    {
      question: "Qui assure la maintenance de mon installation de tirage ?",
      answer:
        "Maintenance, nettoyage et réparations via Taponderhoud (taponderhoud.be), notre partenaire certifié froid depuis la Campine. Machines via VanRobi ; service via Taponderhoud.",
    },
    {
      question: "Comment demander un devis ?",
      answer:
        "Écrivez à info@vanrobi.be, appelez le +32 (0)14 71 80 80, ou utilisez le formulaire. Indiquez le modèle, l'usage (Horeca/events), le nombre de robinets et si possible une photo du bar.",
    },
    {
      question: "Livrez-vous aussi aux Pays-Bas ?",
      answer:
        "Oui. VanRobi dessert la Belgique et les Pays-Bas comme canal officiel Golderos. La livraison et le conseil sont planifiés avec vous, sans promesse de délai inventée : tout dépend du stock.",
    },
    {
      question: "Quelle machine pour un festival ?",
      answer:
        "Souvent V100 portable ou Goldy ; pour les gros pics, V200 portable. Prévoir 220V stable, anticiper les délais et préciser la date de l'événement dans votre demande.",
    },
    {
      question: "Quelle différence entre Goldy et V100 ?",
      answer:
        "Goldy est un refroidisseur compact sur bar (events, craft, pop-ups). V100 est le cheval de bataille sous bar pour Horeca fixe, plus de débit et de réserve de glace. Le catalogue complet et les guides détaillés sont disponibles en néerlandais.",
    },
    {
      question: "Où êtes-vous situés ?",
      answer:
        "Kemelbeekstraat 16, 2460 Kasterlee (Tielen), Belgique, Campine. E-mail info@vanrobi.be · tél. +32 (0)14 71 80 80.",
    },
  ],
};

export const frFeaturedIds = [
  "goldy",
  "picky",
  "v100",
  "v200",
  "v100-portable",
  "v200-portable",
] as const;

export function frProductHref(id: string) {
  return withBase(`/fr/produits/${id}/`);
}
