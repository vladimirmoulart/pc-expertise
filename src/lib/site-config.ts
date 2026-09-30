const phone = "06 56 82 56 75";

export const siteConfig = {
  name: "PC Expertise",
  // TODO : confirmer le domaine définitif du site
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pc-expertise.com",
  tagline: "Informatique & Télécom",
  // Environ 150 caractères pour ne pas être tronquée dans Google, numéro compris
  description: `Dépannage et réparation PC, portables, tablettes et téléphones à Bollène. Réseaux, domotique, Starlink, vente de matériel. Appelez le ${phone}.`,
  location: {
    street: "2 avenue Émile Lachaux",
    city: "Bollène",
    postalCode: "84500",
    region: "Vaucluse",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("PC Expertise, 2 avenue Émile Lachaux, 84500 Bollène"),
  },
  contact: {
    phone,
    phoneHref: "+33656825675",
    email: "info@pc-expertise.com",
  },
  navigation: [
    // Préfixés par « / » pour fonctionner aussi depuis les pages légales
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Méthode", href: "/#methode" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Contact", href: "/#contact" },
  ],
  // Informations de l'entreprise, reprises dans les mentions légales et la politique de confidentialité
  company: {
    owner: "Nicolas Moulin",
    legalForm: "Entrepreneur individuel",
    siret: "481 003 952 00050",
    registration: "481 003 952 R.C.S. Avignon",
    vat: "FR01481003952",
    publisherRole: "gérant",
  },
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
} as const;

export type ServiceIcon = "wrench" | "home" | "wifi" | "cart" | "gamepad" | "phone" | "camera" | "globe";

export const services = [
  {
    id: "reparation-depannage",
    title: "Réparation & dépannage",
    description: "Ordinateur, PC portable, tablette ou téléphone\u00a0: lenteur, panne, écran cassé ou virus, nous diagnostiquons et remettons en état votre appareil.",
    icon: "wrench",
  },
  {
    id: "domotique",
    title: "Domotique",
    description: "Une maison connectée\u00a0: pilotez vos équipements simplement, depuis votre téléphone.",
    icon: "home",
  },
  {
    id: "reseaux-connectivite",
    title: "Réseaux & connectivité",
    description: "Wi-Fi, box, réseau local et connexion satellite Starlink\u00a0: une connexion stable et sécurisée, partout où vous en avez besoin.",
    icon: "wifi",
  },
  {
    id: "vente-materiel",
    title: "Vente de matériel",
    description: "Du matériel adapté à vos usages, conseillé avant l’achat.",
    icon: "cart",
  },
  {
    id: "reparation-telephone",
    title: "Réparation téléphone",
    description: "Réparation d’écran, de batterie, de caméra\u00a0: tout type de pièces remplacées sur votre smartphone.",
    icon: "phone",
  },
  {
    id: "pc-gamer",
    title: "PC Gamer",
    description: "Configurations sur mesure pour le jeu, pensées selon vos usages et votre budget.",
    icon: "gamepad",
  },
  {
    id: "videosurveillance",
    title: "Vidéosurveillance & sécurité",
    description: "Protégez vos locaux et votre domicile.",
    icon: "camera",
  },
  {
    id: "sites-internet",
    title: "Création de sites Internet",
    description: "Une présence en ligne claire pour votre activité.",
    icon: "globe",
  },
] as const satisfies readonly { id: string; title: string; description: string; icon: ServiceIcon }[];
