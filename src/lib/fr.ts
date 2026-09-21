export const frNav = [
  { href: "/fr", label: "Accueil" },
  { href: "/fr/produits", label: "Produits" },
  { href: "/fr/services", label: "Services" },
  { href: "/fr/a-propos", label: "À propos" },
  { href: "/fr/faq", label: "FAQ" },
  { href: "/fr/contact", label: "Contact" },
] as const;

export const frHome = {
  eyebrow: "Marque VanRobi · BE & NL",
  title: "Refroidissement à la hauteur du service",
  slogan: "Le froid qui porte le bar.",
  lede: "VanRobi est le spécialiste des refroidisseurs à banquise pour la Belgique et les Pays-Bas. Refroidisseurs à banc de glace pour Horeca, events et installateurs.",
  cta: "Demander un devis",
  ctaSecondary: "Voir les produits",
  scroll: "Scroll",
  statementKicker: "Froid sous contrôle",
  statementTitle: "Pas plus vite. Plus juste.",
  statementSub: "Sur mesure. Proximité Benelux. Un froid qui tient pendant chaque service.",
  machinesKicker: "Produits phares",
  machinesTitle: "Machines essentielles.",
  machinesLede: "Refroidisseurs industriels, avec les specs dont les installateurs ont besoin.",
  whyTitle: "Pourquoi VanRobi",
  whyIntro: "VanRobi est la marque des refroidisseurs à banquise pour le Horeca Benelux, avec conseil, specs et livraison qui comprennent le bar.",
  why: [
    {
      n: "01",
      title: "Marque VanRobi",
      text: "VanRobi, marque de refroidisseurs à banquise pour la Belgique et les Pays-Bas. Specs correctes, suivi local.",
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
  catalogNl: "Catalogue complet (NL)",
};

export const frProductsIntro = {
  eyebrow: "Catalogue",
  title: "Machines VanRobi.",
  lede: "Sélection phare via VanRobi. Catalogue complet disponible en néerlandais.",
};

export const frProductCopy: Record<
  string,
  { badge: string; description: string; longDescription: string }
> = {
  goldy: {
    badge: "Events · Sur bar",
    description:
      "Refroidisseur compact sur bar pour events, salons et craft, conception brevetée, livré via VanRobi.",
    longDescription:
      "La Goldy est le refroidisseur à banc de glace compact sur bar de notre assortiment : idéal quand l'espace manque et que le bar doit rester visible. Parfait pour events, craft bars et pop-ups. Livré via VanRobi avec conseil sur spirales, débit et implantation.",
  },
  picky: {
    badge: "Compact · Sur bar",
    description: "Refroidisseur ultra-compact sur bar pour petits bars, foodtrucks et pop-ups.",
    longDescription:
      "La Picky est le plus petit refroidisseur à banc de glace sur bar de notre assortiment, conçu pour les espaces étroits sans sacrifier le froid professionnel. Idéale pour foodtrucks, pop-ups et craft bars compactes.",
  },
  v100: {
    badge: "Horeca · Sous bar",
    description: "Installation fixe sous bar format medium. Débit stable pour restaurants et bars.",
    longDescription:
      "La V100 est le cheval de bataille pour restaurants et bars. Format medium, débit stable et réserve de glace suffisante pour un usage Horeca quotidien. Aussi en variante horizontale, VanRobi vous aide à choisir.",
  },
  v200: {
    badge: "High volume · Sous bar",
    description: "Pour bars très fréquentés et service high volume. Réserve de glace et débit max.",
    longDescription:
      "La V200 est conçue pour les bars intensifs. Réserve de glace maximale et haut débit. Aussi disponible en horizontal, VanRobi aligne volume, espace et horaires d'ouverture.",
  },
  "v100-portable": {
    badge: "Events · Mobile",
    description: "V100 mobile pour festivals et fêtes. Prête pour un montage rapide, option colonne.",
    longDescription:
      "La V100 portable apporte la capacité V100 sur le terrain festival. Sur roues, montage rapide, colonne de tirage en option. Idéale pour traiteurs et bars temporaires.",
  },
  "v200-portable": {
    badge: "Events · Mobile",
    description: "Refroidisseur mobile high volume pour festivals et grands events.",
    longDescription:
      "La V200 portable combine capacité high volume et mobilité. Pour festivals, stades et grands bars temporaires sans installation fixe.",
  },
};

export const frContact = {
  eyebrow: "Contact",
  title: "Devis ou question ?",
  lede: "Envoyez votre demande, réponse sous un jour ouvrable. Machines via VanRobi, maintenance via Taponderhoud.",
  formNote:
    "Le formulaire complet est disponible en néerlandais ; vous pouvez aussi écrire directement à info@vanrobi.be (FR bienvenu).",
  details: "Coordonnées",
  write: "Écrire à",
  formNl: "Formulaire complet (NL)",
};

export const frServices = {
  eyebrow: "Services",
  title: "De la machine à la maintenance.",
  lede: "VanRobi livre et conseille les refroidisseurs VanRobi. Maintenance, nettoyage et réparations via Taponderhoud, une équipe locale.",
  items: [
    {
      n: "01",
      title: "Conseil & sélection",
      text: "Quelle machine pour votre bar, event ou brasserie ? Nous alignons volume, espace, spirales et débit, sans discours commercial.",
    },
    {
      n: "02",
      title: "Livraison BE & NL",
      text: "Livraison VanRobi de refroidisseurs pour la Belgique et les Pays-Bas. Pas d'import gris : bonnes specs, garantie et suivi.",
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
  partnerTitle: "Partenaire maintenance",
  partnerBody:
    "Pour l'entretien des installations de tirage, VanRobi collabore avec Taponderhoud. Refroidisseurs professionnels VanRobi + service belge certifié froid depuis la Campine.",
  howTitle: "Comment se déroule un projet ?",
  howBody:
    "Vous décrivez le volume, le nombre de robinets et le meuble (ou l'event). Nous proposons une machine adaptée, Goldy, V100, V200 ou portable, avec des specs visibles (débit, réserve de glace, bain d'eau). La livraison BE/NL est planifiée avec vous ; le placement et l'entretien peuvent suivre via Taponderhoud.",
};

export const frAbout = {
  eyebrow: "À propos",
  title: "VanRobi × refroidisseurs.",
  lede: "La marque VanRobi pour les refroidisseurs à banc de glace professionnels en Belgique et aux Pays-Bas, avec expertise locale en tirage et froid.",
  partnershipTitle: "Partenariat",
  partnership:
    "VanRobi regroupe des refroidisseurs à banquise professionnels pour le Horeca Benelux : qualité industrielle, specs claires et machines conçues pour tenir chaque service. Nous sommes l'interlocuteur pour la Belgique et les Pays-Bas — sélection, conseil et livraison depuis un seul point de contact, avec suivi local. Pas d'import gris.",
  localTitle: "Expertise locale",
  local:
    "VanRobi collabore avec Taponderhoud pour la maintenance, le nettoyage, les réparations et le placement des refroidissements. Certifié froid, basé en Campine (Kasterlee / Tielen). Ainsi, refroidisseurs professionnels VanRobi et service belge restent alignés après l'achat.",
  coverage:
    "Nous conseillons et livrons en Flandre, à Bruxelles et aux Pays-Bas. Pour le détail régional (Anvers, Limbourg, Brabant flamand, Flandre orientale), voir aussi la page régions en néerlandais.",
  factsTitle: "Ce que vous pouvez attendre",
};

export const frFaq = {
  eyebrow: "FAQ",
  title: "Réponses, sans détour.",
  lede: "VanRobi pour les refroidisseurs, maintenance via Taponderhoud, délais honnêtes. Votre question n'y figure pas, écrivez à info@vanrobi.be.",
  items: [
    {
      question: "VanRobi est-il le spécialiste des refroidisseurs à banquise pour la BE et les NL ?",
      answer:
        "Oui. VanRobi est le spécialiste des refroidisseurs à banquise pour la Belgique et les Pays-Bas. Vous achetez via un canal reconnu, pas d'import gris, avec specs correctes, suivi de garantie et support local depuis Kasterlee (Tielen).",
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
        "Oui. VanRobi dessert la Belgique et les Pays-Bas comme spécialiste des refroidisseurs à banquise. La livraison et le conseil sont planifiés avec vous, sans promesse de délai inventée : tout dépend du stock.",
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
      answer: "Kemelbeekstraat 16, 2460 Kasterlee (Tielen), Belgique, Campine. E-mail info@vanrobi.be · tél. +32 (0)14 71 80 80.",
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

export const frCta = {
  kicker: "Contact",
  title: "Prêt pour un froid stable ?",
  lede: "Parlez-nous de votre bar, event ou installation. Nous vous envoyons un devis.",
  mail: "Envoyer votre demande",
};

export const frFooter = {
  blurb:
    "Spécialiste des refroidisseurs à banquise professionnels pour la Belgique et les Pays-Bas. Livraison et maintenance via Taponderhoud.",
  nav: "Navigation",
  machines: "Machines",
  catalog: "Catalogue complet (NL)",
  maintenance: "Maintenance via",
};
