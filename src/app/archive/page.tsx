import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArchive } from "@/data/products";
import styles from "./archive.module.css";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Pieces that have found their next chapter — a record of Gentle Core's curation.",
};

export default function ArchivePage() {
  const pieces = getArchive();
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className="eyebrow">The Archive</span>
        <h1 className={styles.title}>The Archive</h1>
        <p className={styles.sub}>Pieces that have found their next chapter.</p>
      </header>

      {pieces.length > 0 ? (
        <div className={`shell ${styles.grid}`}>
          {pieces.map((p) => (
            <article key={p.id} className={styles.card}>
              <Link href={`/product/${p.id}`} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <Image
                    src={`/products/${p.images[0]}`}
                    alt={`${p.brand} ${p.model}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1080px) 45vw, 25vw"
                    className={styles.image}
                    unoptimized={p.images[0].endsWith(".svg")}
                  />
                  <span className={styles.tag}>{p.status}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.brand}>{p.brand}</span>
                  <h3 className={styles.model}>{p.model}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={`shell ${styles.empty}`}>
          <p>
            <em>The archive grows as pieces move on. Source a comparable piece by request.</em>
          </p>
          <Link href="/source-request" className="btn btn-outline">Source by Request</Link>
        </div>
      )}
    </div>
  );
}
