import type { Metadata } from "next";
import { products, isInquirable } from "@/data/products";
import MasonryCollection from "@/components/MasonryCollection";
import styles from "./collection.module.css";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "The current collection — rare handbags, watches, and jewellery, each authenticated and available for private acquisition worldwide.",
};

export default function CollectionPage() {
  const available = products.filter(isInquirable);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className="eyebrow">Currently Presented</span>
        <h1 className={styles.title}>The Collection</h1>
        <p className={styles.intro}>
          Each piece is authenticated, condition-graded, and offered for private acquisition.
        </p>
      </header>
      <MasonryCollection products={available} />
    </div>
  );
}
