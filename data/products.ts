// ─────────────────────────────────────────────────────────────
// Gentle Core — catalogue (no database; this file is the source of truth).
//
// To add a piece:
//   1. Drop photos in /public/products/<slug>/ as 1.jpg, 2.jpg…
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

// Helper — every image lives at /public/products/<id>/<n>.jpg
const imgs = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/products/${slug}/${i + 1}.jpg`);

export const products: Product[] = [
  {
    id: "hermes-himalaya-birkin",
    brand: "Hermès",
    model: "Himalaya Birkin 30",
    category: "handbags",
    material: "Niloticus Crocodile",
    hardware: "Palladium & Diamond Hardware",
    detailLine: "Niloticus Crocodile · Palladium & Diamond Hardware",
    color: "Himalaya White",
    condition: "Pristine",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock", "CITES documentation"],
    location: "Worldwide",
    status: "Available",
    overview:
      "The Himalaya Birkin 30 — the most coveted handbag in modern collecting. Hand-painted to evoke a snow-capped summit, set in palladium with diamond touches. Each example is the result of years on a private list; this one comes full set with CITES.",
    images: imgs("hermes-himalaya-birkin", 6),
    featured: true,
    newArrival: true,
    collector: true,
  },
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
    location: "Worldwide",
    status: "Available",
    overview:
      "The Mini Kelly II in Bleu Celeste — a serene, hard-to-source shade rendered in structured Epsom calfskin. Crisp lines, palladium hardware, and the quiet authority of one of the most requested silhouettes in modern collecting.",
    images: imgs("hermes-mini-kelly-ii-bleu-celeste", 6),
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-mini-kelly-ii",
    brand: "Hermès",
    model: "Mini Kelly II",
    category: "handbags",
    material: "Epsom Calfskin",
    hardware: "Gold Hardware",
    detailLine: "Epsom Calfskin · Gold Hardware",
    color: "Classic",
    condition: "Pristine",
    setContents: ["Dust bag", "Box", "Rain cover", "Clochette, keys & lock"],
    location: "Worldwide",
    status: "Available",
    overview:
      "The Mini Kelly II — the silhouette that defines a generation of collectors. Structured Epsom calfskin, gold hardware, full accompaniments. Restraint, scaled down.",
    images: imgs("hermes-mini-kelly-ii", 5),
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
    location: "Worldwide",
    status: "Available",
    overview:
      "A Birkin 30 in Gris Perle ostrich — the soft grey punctuated by the natural quill follicles of the leather, finished in gold hardware. Among the most coveted neutrals in exotic collecting.",
    images: imgs("hermes-birkin-gris-perle-ostrich", 6),
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-birkin-touch",
    brand: "Hermès",
    model: "Birkin Touch 25",
    category: "handbags",
    material: "Togo / Matte Alligator",
    hardware: "Gold Hardware",
    detailLine: "Togo / Matte Alligator · Gold Hardware",
    color: "Noir",
    condition: "Excellent",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock", "CITES documentation"],
    location: "Worldwide",
    status: "Available",
    overview:
      "The Birkin Touch 25 — Togo calfskin married to matte alligator on the handles and flap. A study in restraint and rarity; gold hardware warms the noir leather. CITES accompanies.",
    images: imgs("hermes-birkin-touch", 6),
    featured: true,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-constance-24",
    brand: "Hermès",
    model: "Constance 24",
    category: "handbags",
    material: "Calfskin",
    hardware: "Gold Hardware",
    detailLine: "Calfskin · Gold Hardware",
    color: "Classic",
    condition: "Excellent",
    setContents: ["Dust bag", "Box"],
    location: "Worldwide",
    status: "Available",
    overview:
      "A Constance 24 — the signature H clasp in gold, proportions impeccable. The piece for the collector who prefers their rarity understated.",
    images: imgs("hermes-constance-24", 6),
    featured: true,
    newArrival: false,
    collector: true,
  },
  {
    id: "hermes-kelly-depeches",
    brand: "Hermès",
    model: "Kelly Dépêches",
    category: "handbags",
    material: "Box Calf",
    hardware: "Palladium Hardware",
    detailLine: "Box Calf · Palladium Hardware",
    color: "Noir",
    condition: "Excellent",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock"],
    location: "Worldwide",
    status: "Available",
    overview:
      "The Kelly Dépêches — the briefcase rendered in Box calf with the unmistakable Kelly turn-lock. A piece of architectural restraint, equally at home in the boardroom and the archive.",
    images: imgs("hermes-kelly-depeches", 6),
    featured: false,
    newArrival: true,
    collector: true,
  },
  {
    id: "hermes-ombre-lizard",
    brand: "Hermès",
    model: "Kelly Ombré Lizard",
    category: "handbags",
    material: "Niloticus Lizard",
    hardware: "Palladium Hardware",
    detailLine: "Niloticus Lizard, Ombré · Palladium Hardware",
    color: "Ombré",
    condition: "Pristine",
    setContents: ["Dust bag", "Box", "Clochette, keys & lock", "CITES documentation"],
    location: "Worldwide",
    status: "Available",
    overview:
      "A Kelly in ombré Niloticus lizard — the colour deepens from spine to belly in a single piece, the rarest of skin selections. Palladium hardware, full CITES, presented complete.",
    images: imgs("hermes-ombre-lizard", 6),
    featured: false,
    newArrival: true,
    collector: true,
  },
  {
    id: "rolex-day-date-40",
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
    location: "Worldwide",
    status: "Available",
    overview:
      "The Day-Date 40 in 18k Everose gold, Ref. 228235, with a chocolate dial set with diamond hour markers on the President bracelet. Quiet warmth and unmistakable presence — full set.",
    images: imgs("rolex-day-date-40", 6),
    featured: true,
    newArrival: true,
    collector: false,
  },
  {
    id: "patek-nautilus-5980r",
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
    status: "Available",
    overview:
      "The Nautilus Chronograph 5980R-001 in rose gold on a leather strap — the integrated case in precious metal, the flyback chronograph beneath. A serious collector reference, presented with full accompaniments.",
    images: imgs("patek-nautilus-5980r", 6),
    featured: true,
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
