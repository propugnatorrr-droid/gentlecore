"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product, CategorySlug } from "@/data/products";
import { CATEGORIES } from "@/data/products";
import styles from "./MasonryCollection.module.css";

const STATUS_COLOR: Record<string, string> = {
  Available: "#4a7c59",
  Reserved: "#c47c1a",
  "Previously Presented": "#8a8276",
  Acquired: "#8a8276",
};

type Filter = "all" | CategorySlug;
type StatusFilter = "all" | "Available" | "Reserved";

export default function MasonryCollection({ products }: { products: Product[] }) {
  const [catFilter, setCatFilter] = useState<Filter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (catFilter !== "all" && p.category !== catFilter) return false;
      if (statusFilter !== "all" && p.status !== statusFilter) return false;
      return true;
    });
  }, [products, catFilter, statusFilter]);

  return (
    <div className={styles.wrap}>
      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.chips}>
          <button
            className={`${styles.chip} ${catFilter === "all" ? styles.chipActive : ""}`}
            onClick={() => setCatFilter("all")}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              className={`${styles.chip} ${catFilter === c.slug ? styles.chipActive : ""}`}
              onClick={() => setCatFilter(c.slug)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className={styles.selects}>
          <select
            className={styles.select}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          >
            <option value="all">All availability</option>
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>
        <p className={styles.count} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {/* Masonry grid */}
      {filtered.length > 0 ? (
        <div className={styles.masonry}>
          {filtered.map((p) => (
            <article key={p.id} className={styles.item}>
              <Link href={`/product/${p.id}`} className={styles.itemLink}>
                <div className={styles.imageWrap}>
                  <Image
                    src={`/products/${p.images[0]}`}
                    alt={`${p.brand} ${p.model}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1080px) 45vw, 30vw"
                    className={styles.image}
                    unoptimized={p.images[0].endsWith(".svg")}
                  />
                </div>
                <div className={styles.meta}>
                  <span className={styles.brand}>{p.brand}</span>
                  <h3 className={styles.model}>{p.model}</h3>
                  <div className={styles.foot}>
                    <span
                      className={styles.dot}
                      style={{ background: STATUS_COLOR[p.status] ?? "#8a8276" }}
                    />
                    <span className={styles.status}>{p.status}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>
            <em>The atelier is quiet. Source a piece by request.</em>
          </p>
          <Link href="/source-request" className="btn btn-outline">
            Source by Request
          </Link>
        </div>
      )}
    </div>
  );
}
