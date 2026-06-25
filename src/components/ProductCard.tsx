import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import StatusTag from "./StatusTag";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const cover = product.images[0];
  return (
    <article className={styles.card}>
      <Link
        href={`/product/${product.id}`}
        className={styles.link}
        aria-label={`${product.brand} ${product.model}`}
      >
        <div className={styles.frame}>
          <Image
            src={cover}
            alt={`${product.brand} ${product.model}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
            className={styles.img}
            priority={priority}
          />
        </div>
        <div className={styles.meta}>
          <span className={`eyebrow ${styles.brand}`}>{product.brand}</span>
          <h3 className={styles.model}>{product.model}</h3>
          <p className={styles.detail}>{product.detailLine}</p>
          <StatusTag status={product.status} />
        </div>
      </Link>
    </article>
  );
}
