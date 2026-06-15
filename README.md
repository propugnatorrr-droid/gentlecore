# Gentle Outlet

A private luxury resale website for **Gentle Outlet** — a Dubai house presenting rare
handbags, watches, jewelry, and accessories for **private acquisition**.

This is a **brand + catalogue** experience, not a checkout store: there is **no cart, no
payment, no public prices**. Buyers request a **private dossier** or inquire via
**WhatsApp**.

Built with **Next.js (App Router) + TypeScript** and **plain CSS Modules** + a global
design-tokens stylesheet. No database — the catalogue is a typed data file.

---

## 1. Run locally

Requires Node 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (fully static)
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

---

## 2. Fill in real business details

Open **`src/lib/site.ts`** and replace every `PLACEHOLDER`:

| Field             | What to set                                              |
| ----------------- | ------------------------------------------------------- |
| `WHATSAPP_NUMBER` | WhatsApp number, international format, **digits only, no `+`** |
| `url`             | Live domain, e.g. `https://gentleoutlet.com`            |
| `email`           | Contact email                                           |
| `address`         | Viewing address lines                                   |
| `instagram`       | Instagram handle (already set to `gentleoutlet`)        |

> The WhatsApp number is the single most important value — every WhatsApp CTA and every
> form's hand-off uses `WHATSAPP_NUMBER`. Search the repo for `PLACEHOLDER` to find all.

---

## 3. Add or edit a piece

Everything lives in **`data/products.ts`**.

1. **Add photos** to `public/products/` (multiple angles). Real photos can be `.jpg` /
   `.webp`; the seed data uses placeholder `.svg` plates.
2. **Add an entry** to the `products` array:

   ```ts
   {
     id: "hermes-kelly-25-gold",          // slug -> /product/hermes-kelly-25-gold
     brand: "Hermès",
     model: "Kelly 25 Sellier",
     category: "handbags",                 // handbags | watches | jewelry | accessories
     material: "Gold Togo",
     hardware: "Gold Hardware",
     detailLine: "Gold Togo · Gold Hardware",  // shown on cards
     color: "Gold",
     condition: "Excellent",
     setContents: ["Dust bag", "Box", "Clochette, keys & lock"],
     location: "Dubai",
     status: "Available",                  // Available | Reserved | Previously Presented | Acquired
     reference: "",                        // optional (watches)
     year: "",                             // optional
     overview: "Editorial paragraph…",
     images: ["kelly-25-1.jpg", "kelly-25-2.jpg"],
     featured: true,                       // appears in "Now Presenting"
     newArrival: true,                     // appears in New Arrivals
     collector: true,                      // flagged as a collector piece
   },
   ```

3. Save. The piece appears automatically across its category, New Arrivals, the home
   preview, related pieces, and the sitemap.

**Status language is intentional.** `Available` / `Reserved` are inquirable; `Previously
Presented` / `Acquired` move the piece into the Archive (still visible, not inquirable).
There is deliberately no loud "SOLD".

### Categories

Defined once in `CATEGORIES` (`data/products.ts`) and used across nav, filters, and pages.

---

## 4. Deploy to Vercel (free)

1. Push to a GitHub repository.
2. vercel.com → **Add New… → Project** → import the repo. Next.js is auto-detected.
3. **Deploy.** No environment variables are required.

### Custom domain

Vercel project → **Settings → Domains** → add your domain → add the DNS records Vercel
shows at your registrar. HTTPS is automatic. After it's live, set `url` in `src/lib/site.ts`
and redeploy so SEO / sitemap / Open Graph use the final domain.

---

## 5. Architecture

```
data/products.ts          Catalogue + categories (single source of truth)
src/lib/site.ts           Brand constants, WHATSAPP_NUMBER, link builders
src/app/                  Routes (App Router), global CSS, sitemap/robots
src/components/            Reusable UI:
  Nav, Footer, MobileCtaBar           global chrome + sticky mobile CTA
  ProductCard, ProductGrid            auction-style catalogue entries
  CategoryCard, ProductGallery        previews + image switcher
  SectionHeader, SectionReveal        editorial headers + scroll reveal
  CTAButton, WhatsAppButton, StatusTag
  DossierForm, SourceRequestForm, ContactForm   (mock submit + WhatsApp hand-off)
public/products/          Imagery by filename
scripts/                  One-off placeholder-plate generator
```

## Notes

- **Forms** currently use a graceful mock submit: on send they confirm receipt and prepare
  a pre-filled WhatsApp message as the primary channel. To persist leads, wire the
  `handleSubmit` functions (marked with `TODO`) to an email service or CRM.
- **Trademark / positioning:** brand names describe genuine pieces only (nominative fair
  use); no brand logos are used. The independent-reseller disclaimer is in the footer on
  every page. No prices are shown — every piece is "Private inquiry".
- **Mobile-first:** sticky Request Dossier / WhatsApp bar, large imagery, thumb-friendly.
- **Performance/SEO:** `next/image` everywhere, static generation, per-page metadata + OG,
  Product JSON-LD on product pages, sitemap + robots.
