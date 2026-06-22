import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { isArchived } from "@/data/products";
import styles from "./ProductCard.module.css";

const STATUS_COLOR: Record<string, string> = {
  Available: "#4a7c59",
  Reserved: "#c47c1a",
  "Previously Presented": "#8a8276",
  Acquired: "#8a8276",
};

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const archived = isArchived(product);
  const second = product.images[1];
  const statusColor = STATUS_COLOR[product.status] ?? "#8a8276";

  return (
    <article className={styles.card}>
      <Link
        href={`/product/${product.id}`}
        className={styles.link}
        aria-label={`${product.brand} ${product.model}`}
      >
        <div className={styles.frame}>
          <Image
            src={`/products/${product.images[0]}`}
            alt={`${product.brand} ${product.model}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
            className={styles.img}
            priority={priority}
            unoptimized={product.images[0].endsWith(".svg")}
          />
          {second && (
            <Image
              src={`/products/${second}`}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
              className={styles.imgAlt}
              unoptimized={second.endsWith(".svg")}
            />
          )}
        </div>

        <div className={styles.meta}>
          <span className={styles.brand}>{product.brand}</span>
          <h3 className={styles.model}>{product.model}</h3>
          <div className={styles.foot}>
            <span
              className={styles.statusDot}
              style={{ background: statusColor }}
              aria-hidden="true"
            />
            <span className={styles.statusLabel}>{product.status}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
