import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/data/journal";
import styles from "./journal.module.css";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Perspectives on luxury objects — authentication, condition, provenance, and the practice of collecting.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className="eyebrow">The Journal</span>
        <h1 className={styles.title}>Perspectives on rare objects.</h1>
      </header>

      <div className={`shell ${styles.grid}`}>
        {JOURNAL_POSTS.map((post, i) => (
          <article key={post.slug} className={`${styles.card} ${i === 0 ? styles.cardFeatured : ""}`}>
            <Link href={`/journal/${post.slug}`} className={styles.cardLink}>
              <div className={styles.imageWrap}>
                <Image
                  src={`/products/${post.image}`}
                  alt={post.title}
                  fill
                  sizes={i === 0 ? "80vw" : "(max-width: 768px) 90vw, 40vw"}
                  className={styles.image}
                  unoptimized
                />
              </div>
              <div className={styles.cardMeta}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{post.category}</span>
                  <time className={styles.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
