export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: JournalBlock[];
}

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "pullquote"; text: string };

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "anatomy-of-a-birkin",
    title: "The Anatomy of a Birkin",
    category: "Education",
    date: "2024-11-18",
    excerpt:
      "What separates a Birkin from every other bag is not the name. It is the construction — 18 to 24 hours of a single artisan's attention, compressed into leather and palladium.",
    image: "journal-birkin.svg",
    content: [
      {
        type: "p",
        text: "The Hermès Birkin is, by most measures, the most recognised handbag in the world. Yet the vast majority of people who recognise it have never held one. What they know is the silhouette, the name, the mythology. What they do not know is the weight of it in the hand — specific, deliberate, expensive in the oldest sense of the word.",
      },
      {
        type: "h2",
        text: "The Frame",
      },
      {
        type: "p",
        text: "Every Birkin begins as a metal armature. The frame — the clasp, the turn-lock, the feet — is fabricated separately before a single piece of leather is cut. This is not decorative afterthought; it is the skeleton around which the bag is built. Palladium, gold, brushed ruthenium: the hardware is stamped with the Hermès blind stamp and the artisan's number before assembly.",
      },
      {
        type: "pullquote",
        text: "Eighteen to twenty-four hours of a single artisan's attention, uninterrupted, compressed into a bag that will outlive everyone who touched it.",
      },
      {
        type: "h2",
        text: "The Leather",
      },
      {
        type: "p",
        text: "Togo and Epsom are the collector's workhorse leathers — grained, forgiving of minor wear, resistant to scratching. Togo is softer, more pillowy; Epsom is structured, holds its shape under pressure. Box calf, by contrast, is the connoisseur's choice: smooth, develops a deep patina, shows every story. Nilo crocodile is a different category entirely — measured by the regularity of its scales, the symmetry of its tiles.",
      },
      {
        type: "h2",
        text: "What Authentication Looks For",
      },
      {
        type: "p",
        text: "When we authenticate a Birkin, we work outward from the inside. The interior stitching first — 22 to 25 saddle stitches per inch, each one pulled with equal tension. Then the blind stamp: the year letter, the artisan's mark, the Hermès Paris stamp. Then hardware: palladium hardware should resist a magnet entirely. Finally, the overall geometry — a genuine Birkin sits square. Replicas invariably sag at the base.",
      },
    ],
  },
  {
    slug: "how-we-authenticate",
    title: "How We Authenticate",
    category: "Process",
    date: "2024-10-04",
    excerpt:
      "There is no single test. Authentication is a discipline built from dozens of overlapping checks — each one a small certainty, together an unambiguous conclusion.",
    image: "journal-auth.svg",
    content: [
      {
        type: "p",
        text: "The word 'authentication' is used loosely in the luxury resale market. Some houses rely on certificates from third parties. Some rely on provenance documents that can be forged. We rely on the object itself — because the object is the only thing that cannot lie.",
      },
      {
        type: "h2",
        text: "Step One: Material Inspection",
      },
      {
        type: "p",
        text: "We begin with the leather, cloth, or skin under natural light and a loupe. Grain consistency, dye uniformity, cut edges. Hermès, Cartier, and Rolex each have material signatures that are extraordinarily difficult to replicate at scale. The leather on a genuine Hermès bag, for instance, carries a specific smell — a result of the tannery and dyeing process — that no synthetic has matched.",
      },
      {
        type: "h2",
        text: "Step Two: Hardware",
      },
      {
        type: "p",
        text: "Hardware is both the easiest and most commonly faked element. We test with a rare-earth magnet: genuine palladium and gold hardware shows zero magnetic attraction. We inspect engraving depth, font weight, and spacing. The Hermès clasp, for example, has a specific resistance when turned — too stiff or too loose and the mechanism is wrong.",
      },
      {
        type: "pullquote",
        text: "Authenticity is not a single test. It is the convergence of thirty small certainties into one unambiguous conclusion.",
      },
      {
        type: "h2",
        text: "Step Three: Provenance and Documentation",
      },
      {
        type: "p",
        text: "Where available, we verify original receipts, service records, and date codes. For watches, we cross-reference serial numbers with brand databases. For bags, we review date stamps and Hermès craftsman codes. We do not treat documentation as proof — we treat it as corroboration for what the object itself already tells us.",
      },
    ],
  },
  {
    slug: "collectors-note-on-patina",
    title: "A Collector's Note on Patina",
    category: "Opinion",
    date: "2024-09-12",
    excerpt:
      "New is not the highest condition. The finest pieces we have handled were not pristine — they were worn, faithfully, by someone who understood what they had.",
    image: "journal-patina.svg",
    content: [
      {
        type: "p",
        text: "There is a tendency in the luxury resale market to treat pristine condition as the apex. Unworn, full set, never touched. And for certain pieces — particularly watches with fragile dials or bags with delicate exotic skins — this makes sense. But for the collector who understands materials, pristine is only one kind of perfection.",
      },
      {
        type: "h2",
        text: "What Patina Is",
      },
      {
        type: "p",
        text: "Patina is the visible record of use. On box calf leather, it is the way the grain opens under repeated flexion, the way corners soften, the way the colour deepens at stress points. On a watch, it is the 'tropical' dial — originally a manufacturing defect, now among the most sought-after variants — or the warm yellowing of lume on a vintage Submariner.",
      },
      {
        type: "pullquote",
        text: "A piece that has been loved is not diminished. It is completed.",
      },
      {
        type: "h2",
        text: "When We Present Patinated Pieces",
      },
      {
        type: "p",
        text: "When we present a piece with honest wear, we disclose it in full — corner wear, base scratches, handle darkening, movement service history. We do not appraise patina as damage. We present it as context. The dossier for a patinated piece is typically longer than for a pristine one, because more must be said. We find that the buyers who most appreciate this honesty are also the buyers who keep their pieces longest.",
      },
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}
