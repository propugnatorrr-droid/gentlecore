import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/data/journal";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Editorial dispatches from the house.",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function JournalPage() {
  const posts = JOURNAL_POSTS;

  return (
    <>
      <PageIntro
        label="Editorial"
        title="Journal"
        intro="Dispatches on collecting, authentication, and the quiet discipline of fine objects."
      />
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p
              className="body"
              style={{
                textAlign: "center",
                color: "var(--ink-60)",
                maxWidth: 480,
                margin: "clamp(40px, 6vw, 80px) auto",
              }}
            >
              Coming soon — editorial dispatches from the house.
            </p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(24px, 3vw, 48px)",
              }}
              className="journalGrid"
            >
              {posts.map((post, i) => (
                <SectionReveal as="li" key={post.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/journal/${post.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4 / 5",
                        background: "var(--mist)",
                        overflow: "hidden",
                      }}
                    />
                    <span className="eyebrow">
                      {formatDate(post.date)} · {post.category}
                    </span>
                    <h3 className="h3">{post.title}</h3>
                    <p
                      className="body"
                      style={{ color: "var(--ink-60)", maxWidth: "40ch" }}
                    >
                      {post.excerpt}
                    </p>
                    <span className="cartier-link" style={{ marginTop: 8 }}>
                      Read <span className="arrow">→</span>
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .journalGrid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .journalGrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
