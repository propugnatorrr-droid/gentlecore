import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProduct,
  getRelated,
  products,
  categoryLabel,
  isArchived,
} from "@/data/products";
import { site } from "@/lib/site";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import StatusTag from "@/components/StatusTag";
import WhatsAppButton from "@/components/WhatsAppButton";
import DossierForm from "@/components/DossierForm";
import CTAButton from "@/components/CTAButton";
import SectionReveal from "@/components/SectionReveal";
import TrustSection from "@/components/TrustSection";
import Accordion from "@/components/Accordion";
import styles from "./product.module.css";

const assurances: { q: string; a: string }[] = [
  {
    q: "Authentication",
    a: "Every piece is examined and verified by specialists before it is presented. Where applicable, original documentation, serials, and date stamps are confirmed. A statement of authenticity accompanies each acquisition.",
  },
  {
    q: "Shipping & Delivery",
    a: "Fully insured, discreet worldwide shipping arranged per destination, in unbranded packaging. Hand delivery and private viewing are available by appointment. Tracking is shared throughout.",
  },
  {
    q: "Returns & Buyer Protection",
    a: "If a piece is materially not as described, it may be returned within the agreed window for a full refund. Every detail is disclosed in advance so that there are no surprises — only confidence.",
  },
];

type Params = { id: string };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getProduct(params.id);
  if (!p) return { title: "Piece" };
  const title = `${p.brand} ${p.model}`;
  return {
    title,
    description: `${title} — ${p.detailLine}. Presented for private acquisition by Gentle Core.`,
    openGraph: {
      title: `${title} · ${site.name}`,
      description: `${p.detailLine}. Presented for private acquisition.`,
      images: [{ url: `/products/${p.images[0]}`, alt: title }],
      type: "website",
    },
  };
}

export default function ProductPage({ params }: { params: Params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const archived = isArchived(product);
  const related = getRelated(product);
  const pieceName = `${product.brand} ${product.model}`;
  const pageUrl = `${site.url}/product/${product.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pieceName,
    brand: { "@type": "Brand", name: product.brand },
    category: categoryLabel(product.category),
    color: product.color,
    material: product.material,
    description: product.overview,
    image: product.images.map((i) => `${site.url}/products/${i}`),
    sku: product.id,
    ...(product.reference ? { mpn: product.reference } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: archived
        ? "https://schema.org/SoldOut"
        : product.status === "Reserved"
        ? "https://schema.org/LimitedAvailability"
        : "https://schema.org/InStock",
      url: pageUrl,
      seller: { "@type": "Organization", name: site.legalName },
    },
  };

  const facts: { k: string; v: string }[] = [
    { k: "Material", v: product.material },
    { k: "Hardware", v: product.hardware },
    ...(product.reference ? [{ k: "Reference", v: product.reference }] : []),
    ...(product.year ? [{ k: "Year", v: product.year }] : []),
    { k: "Colour", v: product.color },
    { k: "Condition", v: product.condition },
    { k: "Category", v: categoryLabel(product.category) },
  ];

  return (
    <article className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="shell">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href={`/${product.category}`}>{categoryLabel(product.category)}</Link>
          <span aria-hidden="true">/</span>
          <span>{product.model}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.galleryCol}>
            <ProductGallery images={product.images} alt={pieceName} />
          </div>

          <div className={styles.panel}>
            <span className={styles.brand}>{product.brand}</span>
            <h1 className={styles.model}>{product.model}</h1>
            {product.reference && <span className={styles.ref}>{product.reference}</span>}
            <StatusTag status={product.status} />
            <p className={styles.detailLine}>{product.detailLine}</p>

            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Price</span>
              <span className={styles.priceValue}>Private inquiry</span>
            </div>

            <p className={styles.presentedNote}>
              Presented for private acquisition. Request the private dossier to receive
              price, condition notes, set details, additional media, and viewing
              arrangements.
            </p>

            {archived ? (
              <div className={styles.ctas}>
                <CTAButton href="/source-request" variant="solid" block>
                  Source a Comparable Piece
                </CTAButton>
              </div>
            ) : (
              <div className={styles.ctas}>
                <CTAButton href="#dossier" variant="solid" block>
                  Request Private Dossier
                </CTAButton>
                <WhatsAppButton pieceName={pieceName} variant="gold" />
              </div>
            )}

            <p className={styles.authNote}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                <path d="M12 3l7 2.5v5.5c0 4.6-3.1 7.6-7 8.8-3.9-1.2-7-4.2-7-8.8V5.5L12 3z" strokeLinejoin="round" />
                <path d="M9 11.8l2.2 2.2 4-4.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Authenticated by specialists. Buyer protection on every acquisition.</span>
            </p>

            <dl className={styles.quickFacts}>
              {facts.slice(0, 5).map((f) => (
                <div className={styles.fact} key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Sections */}
        <div className={styles.sections}>
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Overview</h2>
            <div className={styles.blockBody}>
              <p>{product.overview}</p>
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Details</h2>
            <div className={styles.blockBody}>
              <dl className={styles.detailGrid}>
                {facts.map((f) => (
                  <div className={styles.fact} key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Condition</h2>
            <div className={styles.blockBody}>
              <p>
                Presented in {product.condition.toLowerCase()} condition. Full condition
                notes — including close detail on wear, corners, and finish — are provided in
                the private dossier on request.
              </p>
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Set Contents</h2>
            <div className={styles.blockBody}>
              <ul className={styles.setList}>
                {product.setContents.map((item) => (
                  <li className={styles.setItem} key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Assurances</h2>
            <div className={styles.blockBody}>
              <Accordion items={assurances} defaultOpen={0} />
            </div>
          </section>

          {!archived && (
            <section className={styles.block} id="dossier">
              <h2 className={styles.blockTitle}>Request the Dossier</h2>
              <div className={`${styles.blockBody} ${styles.dossierWrap}`}>
                <DossierForm pieceName={pieceName} />
              </div>
            </section>
          )}
        </div>

        <TrustSection
          label="The Gentle Core Standard"
          heading="Every acquisition, held to the same standard."
        />

        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="related-h">
            <SectionReveal>
              <header className={styles.relatedHead}>
                <span className="label">Related Pieces</span>
                <h2 id="related-h" className={styles.relatedTitle}>
                  More from {categoryLabel(product.category)}
                </h2>
              </header>
            </SectionReveal>
            <ProductGrid products={related} columns={3} />
          </section>
        )}
      </div>
    </article>
  );
}
