import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import SectionReveal from "./SectionReveal";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({
  products,
  columns = 4,
  emptyNote = "No pieces are presented in this category at present. Source by request, and our team will review availability through our network.",
}: {
  products: Product[];
  columns?: 3 | 4;
  emptyNote?: string;
}) {
  if (products.length === 0) {
    return <p className={styles.empty}>{emptyNote}</p>;
  }
  return (
    <ul className={`${styles.grid} ${columns === 3 ? styles.three : styles.four}`}>
      {products.map((p, i) => (
        <SectionReveal as="li" key={p.id} delay={(i % columns) * 0.06}>
          <ProductCard product={p} priority={i < columns} />
        </SectionReveal>
      ))}
    </ul>
  );
}
