import type { Metadata } from "next";
import Image from "next/image";
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
import ConversationalInquiry from "@/components/ConversationalInquiry";
import styles from "./product.module.css";

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
    },
  };
}

const STATUS_COLOR: Record<string, string> = {
  Available: "#4a7c59",
  Reserved: "#c47c1a",
  "Previously Presented": "#8a8276",
  Acquired: "#8a8276",
};

export default function ProductPage({ params }: { params: Params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const archived = isArchived(product);
  const related = getRelated(product);
  const pieceName = `${product.brand} ${product.model}`;

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
      url: `${site.url}/product/${product.id}`,
      seller: { "@type": "Organization", name: site.legalName },
    },
  };

  const reportRows = [
    { k: "Material", v: product.material },
    { k: "Hardware", v: product.hardware },
    { k: "Colour", v: product.color },
    ...(product.year ? [{ k: "Year", v: product.year }] : []),
    ...(product.reference ? [{ k: "Reference", v: product.reference }] : []),
    { k: "Condition", v: product.condition },
    ...(product.dimensions ? [{ k: "Dimensions", v: product.dimensions }] : []),
    { k: "Category", v: categoryLabel(product.category) },
  ];

  const statusColor = STATUS_COLOR[product.status] ?? "#8a8276";

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ZONE — full viewport, edge-to-edge ── */}
      <div className={styles.heroZone}>
        <div className={styles.heroImage}>
          <Image
            src={`/products/${product.images[0]}`}
            alt={pieceName}
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
            unoptimized={product.images[0].endsWith(".svg")}
          />
          <div className={styles.heroOverlay} />
        </div>

        <Link href="/collection" className={styles.backLink}>
          ← Collection
        </Link>

        <div className={styles.heroText}>
          <span className={styles.heroBrand}>{product.brand}</span>
          <h1 className={styles.heroModel}>{product.model}</h1>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true" />
      </div>

      {/* ── THE DOSSIER — below fold ── */}
      <div className={`shell ${styles.dossierShell}`}>
        <div className={styles.dossier}>
          {/* Left: Condition Report */}
          <div className={styles.reportCol}>
            <p className={styles.reportLabel}>Condition Report</p>
            <dl className={styles.reportList}>
              {reportRows.map(({ k, v }) => (
                <div key={k} className={styles.reportRow}>
                  <dt className={styles.reportKey}>{k}</dt>
                  <span className={styles.reportDots} aria-hidden="true" />
                  <dd className={styles.reportVal}>{v}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.statusBadge}>
              <span
                className={styles.statusDot}
                style={{ background: statusColor }}
              />
              <span className={styles.statusText}>{product.status}</span>
            </div>
          </div>

          {/* Right: The Story */}
          <div className={styles.storyCol}>
            <p className={styles.overview}>{product.overview}</p>
            {product.provenance && (
              <p className={styles.provenance}>{product.provenance}</p>
            )}
            {!archived && (
              <div className={styles.heroActions}>
                <a
                  href="#inquiry"
                  className={`btn btn-solid ${styles.dossierCta}`}
                >
                  Request Private Dossier
                </a>
              </div>
            )}

            {/* Set contents */}
            <div className={styles.setSection}>
              <p className={styles.setLabel}>Accompanies</p>
              <div className={styles.setItems}>
                {product.setContents.map((item) => (
                  <div key={item} className={styles.setItem}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GALLERY ── */}
        <section className={styles.gallerySection}>
          <ProductGallery images={product.images} alt={pieceName} />
        </section>

        {/* ── INQUIRY ── */}
        {!archived && (
          <section className={styles.inquirySection} id="inquiry">
            <div className={styles.inquiryHead}>
              <span className="eyebrow">Private Acquisition</span>
              <h2 className={styles.inquiryTitle}>Begin the conversation.</h2>
            </div>
            <ConversationalInquiry pieceName={pieceName} />
          </section>
        )}

        {/* ── RELATED ── */}
        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.relatedHead}>
              <span className="eyebrow">Related Pieces</span>
              <h2 className={styles.relatedTitle}>
                More from {categoryLabel(product.category)}
              </h2>
            </div>
            <ProductGrid products={related} columns={3} />
          </section>
        )}
      </div>
    </article>
  );
}
