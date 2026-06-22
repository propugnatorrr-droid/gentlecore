import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JOURNAL_POSTS, getPost } from "@/data/journal";
import styles from "./article.module.css";

type Params = { slug: string };

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlePage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className={styles.page}>
      <div className={styles.shell}>
        <Link href="/journal" className={styles.back}>← Journal</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <time className={styles.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </header>

        <div className={styles.body}>
          {post.content.map((block, i) => {
            if (block.type === "p") {
              return <p key={i} className={styles.paragraph}>{block.text}</p>;
            }
            if (block.type === "h2") {
              return <h2 key={i} className={styles.h2}>{block.text}</h2>;
            }
            if (block.type === "pullquote") {
              return (
                <blockquote key={i} className={styles.pullquote}>
                  <p>{block.text}</p>
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        <footer className={styles.footer}>
          <hr className="hairline" />
          <Link href="/journal" className="btn btn-outline">More from the Journal</Link>
        </footer>
      </div>
    </article>
  );
}
