// ─────────────────────────────────────────────────────────────
// Gentle Outlet — central brand & site configuration.
// Replace PLACEHOLDER values before launch (search repo for "PLACEHOLDER").
// ─────────────────────────────────────────────────────────────

// WhatsApp number — international format, digits only, no "+".
// PLACEHOLDER: set the house line here. Used by every WhatsApp CTA.
export const WHATSAPP_NUMBER = "9715XXXXXXXX";

export const site = {
  name: "Gentle Outlet",
  descriptor: "Private Luxury Resale House",
  city: "Dubai",
  legalName: "Gentle Outlet",

  // PLACEHOLDER — live domain, no trailing slash.
  url: "https://gentleoutlet.com",

  tagline: "Private luxury resale, curated in Dubai.",
  intro:
    "Rare handbags, watches, jewelry, and accessories — presented through private dossiers for serious buyers worldwide.",

  email: "private@gentleoutlet.com", // PLACEHOLDER
  instagram: "gentleoutlet",
  instagramUrl: "https://instagram.com/gentleoutlet",

  // PLACEHOLDER — confirm boutique / viewing address.
  address: {
    line1: "Private viewing by appointment",
    line2: "Dubai, United Arab Emirates",
  },

  legalDisclaimer:
    "Gentle Outlet is an independent luxury resale platform and is not affiliated with the brands featured.",
} as const;

// Builds a wa.me link with an optional pre-filled message.
export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

// Standard dossier enquiry message for a given piece.
export const dossierMessage = (pieceName?: string) =>
  pieceName
    ? `Hello, I'm interested in ${pieceName}. Please send the private dossier.`
    : "Hello, I'd like to enquire about a piece. Please send the private dossier.";
