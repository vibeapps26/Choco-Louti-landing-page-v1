export const BRAND_COLORS = {
  deepGreen: '#173D32',
  luxuryGold: '#C5A45A',
  warmIvory: '#F3EBDD',
  deepChocolate: '#3B241D',
  caramel: '#B9875B',
  softSage: '#DCE4D9',
} as const;

export const BRAND_ASSETS = {
  logo: {
    src: '/assets/aistudio/08-3_Plan_de_travail_1_010e3247.png',
    width: 10462,
    height: 1919,
    alt: 'Logo CHOCO LOUTI — Artisan Chocolatier',
  },
  logoDarkGold: {
    src: '/assets/aistudio/08-3-Gold-Color-for-dark-background_Plan_de_travail_1_981e7988.png',
    width: 10462,
    height: 1919,
    alt: 'Logo CHOCO LOUTI Or sur fond sombre',
  },
  logoDarkWhite: {
    src: '/assets/aistudio/08-3-WHITE-Color-for-dark-background_Plan_de_travail_1_62b37c6d.png',
    width: 10462,
    height: 1919,
    alt: 'Logo CHOCO LOUTI Blanc sur fond sombre',
  },
  iconGold: {
    src: '/assets/aistudio/08-4-Gold-Colo-icon-for-dark-background_97787115.png',
    width: 5268,
    height: 5210,
    alt: 'Icône CHOCO LOUTI Or',
  },
  iconWhite: {
    src: '/assets/aistudio/08-4-WHITE-Colo-icon-for-dark-background_01127e35.png',
    width: 5268,
    height: 5210,
    alt: 'Icône CHOCO LOUTI Blanc',
  },
  macroRose: {
    src: '/assets/aistudio/choco_louti_01_macro_rose_da29d1c0.png',
    width: 1014,
    height: 2048,
    alt: 'Fleur en chocolat noir sculptée, présentée dans sa collerette en dentelle sur fond vert profond, accompagnée d’un ruban de chocolat et d’une fleur ivoire en arrière-plan',
  },
  architecturalBlooms: {
    src: '/assets/aistudio/choco_louti_02_architectural_blooms_c78e14c8.png',
    width: 1016,
    height: 2048,
    alt: 'Trio de fleurs en chocolat noir et chocolat blanc disposées dans une alcôve architecturale couleur ivoire, chacune sertie dans une collerette de dentelle délicate',
  },
  signatureGiftbox: {
    src: '/assets/aistudio/choco_louti_03_signature_giftbox_4d5aab80.png',
    width: 1014,
    height: 2048,
    alt: 'Coffret signature CHOCO LOUTI couleur ivoire orné d’un ruban de satin vert profond, renfermant un assortiment ordonné de fleurs en chocolat noir et blanc',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Maison', href: '#maison' },
  { label: 'Nos Créations', href: '#creations' },
  { label: 'Occasions', href: '#occasions' },
  { label: 'Personnalisation', href: '#personnalisation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export interface CreationItem {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  image: (typeof BRAND_ASSETS)['signatureGiftbox' | 'architecturalBlooms' | 'macroRose'];
  focalNote: string;
}

export const VERIFIED_CREATIONS: readonly CreationItem[] = [
  {
    id: 'coffret-signature',
    title: 'Coffret Signature — Fleurs en chocolat personnalisées',
    subtitle: 'Présentation en écrin ivoire & ruban vert profond',
    caption:
      'Un coffret de présentation couleur ivoire fermé par un ruban de satin vert profond, dévoilant une alternance harmonieuse de fleurs en chocolat noir et chocolat blanc dans leur écrin de dentelle.',
    image: BRAND_ASSETS.signatureGiftbox,
    focalNote: 'Écrin de présentation · Alternance chocolat noir et chocolat blanc',
  },
  {
    id: 'triptyque-floral',
    title: 'Triptyque Floral — Harmonie Noir & Ivoire',
    subtitle: 'Fleurs en chocolat sculptées en pétales',
    caption:
      'Une composition verticale réunissant le contraste naturel du chocolat noir et la douceur lumineuse du chocolat blanc, chaque fleur délicatement posée dans sa collerette.',
    image: BRAND_ASSETS.architecturalBlooms,
    focalNote: 'Composition florale · Reliefs et pétales façonnés',
  },
  {
    id: 'rose-macro',
    title: 'Rose en Chocolat Noir — Détail artisanal',
    subtitle: 'Sculpture florale & finesse des pétales',
    caption:
      'La profondeur du cacao s’exprime à travers des pétales superposés avec minutie, révélant une texture satinée et une silhouette florale singulière.',
    image: BRAND_ASSETS.macroRose,
    focalNote: 'Étude de détail · Pétales sculptés & collerette ajourée',
  },
] as const;

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const VERIFIED_FAQ: readonly FAQItem[] = [
  {
    id: 'demande-personnalisee',
    question: 'Comment fonctionne une demande de création personnalisée ?',
    answer:
      'Chaque projet débute par un échange autour de votre occasion et de votre inspiration. Vous pouvez partager votre idée via le formulaire de contact afin que nous puissions imaginer ensemble une composition adaptée à votre attention.',
  },
  {
    id: 'occasions',
    question: 'Pour quelles occasions réalisez-vous des créations ?',
    answer:
      'Nos créations accompagnent les mariages et fiançailles, les anniversaires, les naissances, les attentions romantiques, les remerciements ainsi que toute demande sur mesure pensée pour un moment particulier.',
  },
  {
    id: 'creations-disponibles',
    question: 'Quelles créations composent l’univers CHOCO LOUTI ?',
    answer:
      'CHOCO LOUTI met à l’honneur des fleurs en chocolat personnalisées, façonnées en chocolat noir et en chocolat blanc, présentées individuellement en collerette de dentelle ou réunies dans un coffret signature.',
  },
  {
    id: 'tarifs',
    question: 'Comment obtenir des informations sur les tarifs ?',
    answer:
      'Les créations étant imaginées selon votre occasion et vos souhaits de personnalisation, les informations tarifaires sont communiquées sur demande lors de notre prise de contact directe.',
  },
  {
    id: 'commande-contact',
    question: 'Comment passer commande ou entrer en contact avec la Maison ?',
    answer:
      'Vous pouvez préparer votre demande directement dans la section Contact en précisant votre occasion et votre inspiration. Les canaux de prise de contact directs de la Maison y seront rattachés lors de la mise en ligne finale.',
  },
] as const;
