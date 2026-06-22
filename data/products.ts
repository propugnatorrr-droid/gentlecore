// ─────────────────────────────────────────────────────────────
// Gentle Core — catalogue (no database; this file is the source of truth).
//
// To add a piece:
//   1. Drop photos in /public (multiple angles).
//   2. Add an entry below; `images` lists filenames in display order.
//   3. Set `featured: true` to surface it in "Now Presenting".
//   4. Set `status` to control how it reads across the site.
//
// Brand names appear ONLY to describe genuine items (nominative fair use).
// No prices are ever shown — every piece is "Private inquiry".
// ─────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { slug: "handbags", label: "Handbags" },
  { slug: "watches", label: "Watches" },
  { slug: "jewelry", label: "Jewelry" },
  { slug: "accessories", label: "Accessories" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

// How a piece reads. Quiet language only — never "SOLD".
export type Status =
  | "Available"
  | "Reserved"
  | "Previously Presented"
  | "Acquired";

export interface Product {
  id: string;
  brand: string;
  model: string;
  category: CategorySlug;
  material: string;
  hardware: string;
  detailLine: string;
  color: string;
  condition: string;
  setContents: string[];
  location: string;
  status: Status;
  year?: string;
  reference?: string;
  overview: string;
  provenance?: string;
  dimensions?: string;
  conditionNotes?: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  collector: boolean;
}

export const products: Product[] = [
  {
    id: "hermes-mini-kelly-ii-bleu-celeste",
    brand: "Hermès",
    model: "Mini Kelly II",
    category: "handbags",
    material: "Bleu Celeste Epsom",
    hardware: "Palladium Hardware",
    detailLine: "Bleu Celeste Epsom · Palladium Hardware",
    color: "Bleu Celeste",
    condition: "Pristine",
    setContents: ["Dust bag", "Box", "Rain cover", "Clochette, keys & lock"],
    location: "Dubai",
    status: "Available",
    overview:
      "The Mini Kelly II in Bleu Celeste — a serene, hard-to-source shade rendered in structured Epsom calfskin. Crisp lines, palladium hardware, and the quiet authority of one of the most requested silhouettes in modern collecting.",
    images: ["mini-kelly-1.svg", "mini-kelly-2.svg", "mini-kelly-3.svg"],
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-birkin-touch-25-black-alligator",
    brand: "Hermès",
    model: "Birkin Touch 25",
    category: "handbags",
    material: "Black Togo / Matte Alligator",
    hardware: "Gold Hardware",
    detailLine: "Black Togo / Matte Alligator · Gold Hardware",
    color: "Black",
    condition: "Excellent",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock", "CITES documentation"],
    location: "Dubai",
    status: "Available",
    overview:
      "The Birkin Touch 25 unites Togo calfskin with matte alligator handles and flap — a study in restraint and rarity. Gold hardware warms the black leather; CITES documentation accompanies the piece.",
    images: ["birkin-touch-1.svg", "birkin-touch-2.svg", "birkin-touch-3.svg"],
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-constance-24-burgundy-exotic",
    brand: "Hermès",
    model: "Constance 24",
    category: "handbags",
    material: "Deep Burgundy Exotic",
    hardware: "Gold Hardware",
    detailLine: "Deep Burgundy Exotic · Gold Hardware",
    color: "Burgundy",
    condition: "Excellent",
    setContents: ["Dust bag", "Box", "CITES documentation"],
    location: "Dubai",
    status: "Available",
    overview:
      "A Constance 24 in deep burgundy exotic leather — the signature H clasp in gold, the proportions impeccable. A piece for the collector who prefers their rarity understated.",
    images: ["constance-1.svg", "constance-2.svg"],
    featured: true,
    newArrival: false,
    collector: true,
  },
  {
    id: "rolex-day-date-40-228235-chocolate-diamond",
    brand: "Rolex",
    model: "Day-Date 40",
    category: "watches",
    reference: "Ref. 228235",
    material: "Everose Gold",
    hardware: "Chocolate Diamond Dial",
    detailLine: "Everose Gold · Chocolate Diamond Dial",
    color: "Everose / Chocolate",
    condition: "Excellent",
    year: "2021",
    setContents: ["Box", "Papers", "Card"],
    location: "Dubai",
    status: "Available",
    overview:
      "The Day-Date 40 in 18k Everose gold, Ref. 228235, with a chocolate dial set with diamond hour markers on the President bracelet. Quiet warmth and unmistakable presence — full set.",
    images: ["daydate-1.svg", "daydate-2.svg"],
    featured: true,
    newArrival: true,
    collector: false,
  },
  {
    id: "patek-philippe-nautilus-5980r-001",
    brand: "Patek Philippe",
    model: "Nautilus Chronograph",
    category: "watches",
    reference: "5980R-001",
    material: "Rose Gold",
    hardware: "Leather Strap",
    detailLine: "Rose Gold · Leather Strap",
    color: "Rose Gold",
    condition: "Excellent",
    year: "2019",
    setContents: ["Box", "Papers", "Setting pin"],
    location: "On request",
    status: "Reserved",
    overview:
      "The Nautilus Chronograph 5980R-001 in rose gold on a leather strap — the integrated case in precious metal, the flyback chronograph beneath. A serious collector reference, presented with full accompaniments.",
    images: ["nautilus-1.svg", "nautilus-2.svg"],
    featured: true,
    newArrival: false,
    collector: true,
  },
  {
    id: "hermes-birkin-gris-perle-ostrich",
    brand: "Hermès",
    model: "Birkin 30 Ostrich",
    category: "handbags",
    material: "Gris Perle Ostrich",
    hardware: "Gold Hardware",
    detailLine: "Gris Perle Ostrich · Gold Hardware",
    color: "Gris Perle",
    condition: "Pristine",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock", "CITES documentation"],
    location: "Dubai",
    status: "Available",
    overview:
      "A Birkin 30 in Gris Perle ostrich — the soft grey punctuated by the natural quill follicles of the leather, finished in gold hardware. Among the most coveted neutrals in exotic collecting.",
    images: ["birkin-ostrich-1.svg", "birkin-ostrich-2.svg"],
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "cartier-panthere-diamond-watch",
    brand: "Cartier",
    model: "Panthère de Cartier",
    category: "watches",
    material: "Yellow Gold",
    hardware: "Diamond Bezel",
    detailLine: "Yellow Gold · Diamond Bezel",
    color: "Yellow Gold",
    condition: "Excellent",
    setContents: ["Box", "Papers"],
    location: "Dubai",
    status: "Available",
    overview:
      "The Panthère de Cartier in yellow gold with a diamond-set bezel — supple, sculptural, and unmistakably Cartier. A jewelry-watch in the truest sense.",
    images: ["panthere-1.svg", "panthere-2.svg"],
    featured: false,
    newArrival: true,
    collector: false,
  },
  {
    id: "cartier-love-bracelet-diamond",
    brand: "Cartier",
    model: "Love Bracelet",
    category: "jewelry",
    material: "18k Yellow Gold",
    hardware: "Four Diamonds",
    detailLine: "18k Yellow Gold · Four Diamonds",
    color: "Yellow Gold",
    condition: "Excellent",
    setContents: ["Box", "Papers", "Screwdriver"],
    location: "Dubai",
    status: "Available",
    overview:
      "The Love bracelet in 18k yellow gold set with four diamonds — the enduring icon of intentional design, presented with its screwdriver and accompaniments.",
    images: ["love-bracelet-1.svg", "love-bracelet-2.svg"],
    featured: false,
    newArrival: false,
    collector: false,
  },
  {
    id: "van-cleef-alhambra-necklace",
    brand: "Van Cleef & Arpels",
    model: "Vintage Alhambra 10-Motif",
    category: "jewelry",
    material: "Mother-of-Pearl",
    hardware: "18k Yellow Gold",
    detailLine: "Mother-of-Pearl · 18k Yellow Gold",
    color: "White / Gold",
    condition: "Excellent",
    setContents: ["Box", "Papers"],
    location: "On request",
    status: "Available",
    overview:
      "The Vintage Alhambra 10-motif long necklace in mother-of-pearl and 18k yellow gold — the lucky clover motif rendered with the house's signature beaded edge.",
    images: ["alhambra-1.svg", "alhambra-2.svg"],
    featured: false,
    newArrival: true,
    collector: true,
  },
  {
    id: "chanel-classic-flap-medium-black",
    brand: "Chanel",
    model: "Classic Flap Medium",
    category: "handbags",
    material: "Black Caviar",
    hardware: "Gold Hardware",
    detailLine: "Black Caviar · Gold Hardware",
    color: "Black",
    condition: "Very Good",
    setContents: ["Dust bag", "Box", "Authenticity card"],
    location: "Dubai",
    status: "Previously Presented",
    overview:
      "The Classic Flap in medium, black caviar calfskin with gold hardware — the most enduring silhouette in modern handbag collecting. Previously presented by Gentle Core.",
    images: ["chanel-flap-1.svg", "chanel-flap-2.svg"],
    featured: false,
    newArrival: false,
    collector: false,
  },
  {
    id: "hermes-kelly-pochette-rose",
    brand: "Hermès",
    model: "Kelly Pochette",
    category: "handbags",
    material: "Rose Sakura Swift",
    hardware: "Palladium Hardware",
    detailLine: "Rose Sakura Swift · Palladium Hardware",
    color: "Rose Sakura",
    condition: "Excellent",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock"],
    location: "Dubai",
    status: "Acquired",
    overview:
      "The Kelly Pochette in Rose Sakura Swift — an evening piece of rare delicacy. Acquired through Gentle Core; shown here as part of the archive.",
    images: ["kelly-pochette-1.svg", "kelly-pochette-2.svg"],
    featured: false,
    newArrival: false,
    collector: true,
  },
  {
    id: "audemars-piguet-royal-oak-15500",
    brand: "Audemars Piguet",
    model: "Royal Oak 41",
    category: "watches",
    reference: "Ref. 15500ST",
    material: "Stainless Steel",
    hardware: "Blue Dial",
    detailLine: "Stainless Steel · Blue 'Grande Tapisserie' Dial",
    color: "Steel / Blue",
    condition: "Excellent",
    year: "2020",
    setContents: ["Box", "Papers"],
    location: "On request",
    status: "Previously Presented",
    overview:
      "The Royal Oak 41 Ref. 15500ST in stainless steel with the blue 'Grande Tapisserie' dial — the integrated icon of Gérald Genta's design. Previously presented.",
    images: ["royal-oak-1.svg", "royal-oak-2.svg"],
    featured: false,
    newArrival: false,
    collector: true,
  },
];

// ── Status helpers ───────────────────────────────────────────
export const isInquirable = (p: Product) =>
  p.status === "Available" || p.status === "Reserved";

export const isArchived = (p: Product) =>
  p.status === "Previously Presented" || p.status === "Acquired";

// ── Query helpers ────────────────────────────────────────────
export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug && !isArchived(p));

export const getFeatured = () =>
  products.filter((p) => p.featured && isInquirable(p));

export const getNewArrivals = () =>
  products.filter((p) => p.newArrival && isInquirable(p));

export const getCollector = () => products.filter((p) => p.collector);

export const getArchive = () => products.filter(isArchived);

export const getRelated = (product: Product, limit = 3) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id && isInquirable(p))
    .slice(0, limit);

export const categoryLabel = (slug: CategorySlug) =>
  CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
