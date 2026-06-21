"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { categoryLabel } from "@/data/products";
import ProductCard from "./ProductCard";
import SectionReveal from "./SectionReveal";
import styles from "./CollectionBrowser.module.css";

type Filter = { key: string; label: string };

export default function CollectionBrowser({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [condition, setCondition] = useState("all");

  const categories: Filter[] = useMemo(() => {
    const seen = new Map<string, string>();
    products.forEach((p) => seen.set(p.category, categoryLabel(p.category)));
    return [{ key: "all", label: "All" }, ...[...seen].map(([key, label]) => ({ key, label }))];
  }, [products]);

  const brands: Filter[] = useMemo(() => {
    const seen = [...new Set(products.map((p) => p.brand))].sort();
    return [{ key: "all", label: "All Maisons" }, ...seen.map((b) => ({ key: b, label: b }))];
  }, [products]);

  const conditions: Filter[] = useMemo(() => {
    const seen = [...new Set(products.map((p) => p.condition))];
    return [{ key: "all", label: "Any Condition" }, ...seen.map((c) => ({ key: c, label: c }))];
  }, [products]);

  const filtered = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (brand === "all" || p.brand === brand) &&
      (condition === "all" || p.condition === condition)
  );

  return (
    <div className={styles.browser}>
      <div className={styles.bar}>
        <div className={styles.filterGroup} role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`${styles.chip} ${category === c.key ? styles.chipActive : ""}`}
              onClick={() => setCategory(c.key)}
              aria-pressed={category === c.key}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={styles.selects}>
          <label className={styles.select}>
            <span className={styles.srOnly}>Filter by maison</span>
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              {brands.map((b) => (
                <option key={b.key} value={b.key}>{b.label}</option>
              ))}
            </select>
          </label>
          <label className={styles.select}>
            <span className={styles.srOnly}>Filter by condition</span>
            <select value={condition} onChange={(e) => setCondition(e.target.value)}>
              {conditions.map((c) => (
                <option key={c.key} value={c.key}>{c.label}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className={styles.count} aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      {filtered.length > 0 ? (
        <ul className={styles.grid}>
          {filtered.map((p, i) => (
            <SectionReveal as="li" key={p.id} delay={(i % 3) * 0.06}>
              <ProductCard product={p} priority={i < 3} />
            </SectionReveal>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          No pieces match this selection at present. Adjust the filters, or
          source by request and our team will review availability through our network.
        </p>
      )}
    </div>
  );
}
