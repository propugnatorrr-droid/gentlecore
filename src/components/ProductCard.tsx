import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { isArchived } from "@/data/products";
import StatusTag from "./StatusTag";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const archived = isArchived(product);
  return (
    <article className={styles.card}>
      <Link
        href={`/product/${product.id}`}
        className={styles.link}
        aria-label={`${product.brand} ${product.model} — view piece`}
      >
        <div className={styles.frame}>
          <Image
            src={`/products/${product.images[0]}`}
            alt={`${product.brand} ${product.model} — ${product.detailLine}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
            className={styles.img}
            priority={priority}
            unoptimized={product.images[0].endsWith(".svg")}
          />
        </div>

        <div className={styles.meta}>
          <span className={styles.brand}>{product.brand}</span>
          <h3 className={styles.model}>{product.model}</h3>
          <p className={styles.detail}>{product.detailLine}</p>
          <div className={styles.foot}>
            <span className={styles.loc}>{product.location}</span>
            <StatusTag status={product.status} />
          </div>
          <span className={styles.cta}>
            {archived ? "View Piece" : "Request Dossier"}
            <span className={styles.arrow} aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
