import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelated, products } from "@/data/products";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import StatusTag from "@/components/StatusTag";
import styles from "./product.module.css";

type Params = { id: string };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const p = getProduct(params.id);
  if (!p) return { title: "Piece" };
  return {
    title: `${p.brand} ${p.model} · ${site.name}`,
    description: p.overview,
  };
}

export default function ProductPage({ params }: { params: Params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = getRelated(product, 3);
  const pieceName = `${product.brand} ${product.model}`;

  const specs: Array<[string, string | undefined]> = [
    ["Material", product.material],
    ["Hardware", product.hardware],
    ["Reference", product.reference],
    ["Year", product.year],
    ["Condition", product.condition],
    ["Set Contents", product.setContents?.join(" · ")],
    ["Location", product.location],
  ];

  return (
    <>
      <section className={styles.wrap}>
        <div className="container">
          <div className={styles.layout}>
            <ProductGallery images={product.images} alt={pieceName} />

            <div className={styles.detail}>
              <span className={`eyebrow ${styles.brand}`}>{product.brand}</span>
              <h1 className={styles.title}>{product.model}</h1>
              <span className={`eyebrow ${styles.detailLine}`}>
                {product.detailLine}
              </span>
              <StatusTag status={product.status} />
              <p className={`body body-lg ${styles.overview}`}>
                {product.overview}
              </p>

              <dl className={styles.specs}>
                {specs
                  .filter(([, v]) => v && v.length > 0)
                  .map(([label, value]) => (
                    <div key={label}>
                      <dt className={`eyebrow ${styles.specLabel}`}>{label}</dt>
                      <dd className={styles.specValue}>{value}</dd>
                    </div>
                  ))}
              </dl>

              <div className={styles.ctas}>
                <Link href="/source-request" className="cartier-link">
                  Open Private Dossier <span className="arrow">→</span>
                </Link>
                <a
                  href={whatsappLink(dossierMessage(pieceName))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cartier-link"
                >
                  Message on WhatsApp <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <hr className={styles.relatedDivider} />
            <div className={styles.relatedHead}>
              <span className="eyebrow">Related Pieces</span>
              <h2 className={styles.relatedTitle}>
                From the same discipline
              </h2>
            </div>
            <ProductGrid products={related} columns={3} />
          </div>
        </section>
      )}
    </>
  );
}
