import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { getFeatured, products, isArchived } from "@/data/products";
import { whatsappLink, dossierMessage } from "@/lib/site";
import styles from "./home.module.css";

const HorizontalGallery = dynamic(
  () => import("@/components/HorizontalGallery"),
  { ssr: false }
);

const PhilosophyScene = dynamic(
  () => import("@/components/PhilosophyScene"),
  { ssr: false }
);

const heroText = [
  { text: "Curated.", delay: 0.3 },
  { text: "Authenticated.", delay: 0.45 },
  { text: "Acquired.", delay: 0.6 },
];

const trustPillars = [
  {
    title: "Authentication",
    body: "Every piece is examined by specialists. Materials, hardware, provenance — verified before presentation.",
  },
  {
    title: "Condition Grading",
    body: "Each item is graded and disclosed in full. No surprises — only confidence.",
  },
  {
    title: "Discreet Delivery",
    body: "Insured, unbranded worldwide shipping. Hand delivery available by appointment.",
  },
];

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);
  const archived = products.filter(isArchived).slice(0, 3);

  return (
    <>
      {/* ── SCENE 1: THE ATELIER (HERO) ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/products/mini-kelly-1.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
            unoptimized
          />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroKicker}>
            <span>Private Luxury Resale House</span>
            <span className={styles.dot} />
            <span>Worldwide</span>
          </p>

          <h1 className={styles.heroHeadline} aria-label="Curated. Authenticated. Acquired.">
            {heroText.map(({ text, delay }) => (
              <span key={text} className={styles.heroLine} style={{ "--delay": `${delay}s` } as React.CSSProperties}>
                <span className={styles.heroLineInner}>{text}</span>
              </span>
            ))}
          </h1>

          <p className={styles.heroLede}>
            Rare pieces for those who buy rarely and well.
          </p>

          <a
            href="#collection"
            className={`btn btn-light ${styles.heroCta}`}
          >
            Enter the Collection
          </a>
        </div>

        <div className={styles.scrollLine} aria-hidden="true" />
      </section>

      {/* ── SCENE 2: THE PHILOSOPHY ── */}
      <PhilosophyScene />

      {/* ── SCENE 3: CURRENTLY PRESENTED (HORIZONTAL SCROLL) ── */}
      <div id="collection">
        <HorizontalGallery products={featured} />
      </div>

      {/* ── SCENE 4: CREDENTIALS ── */}
      <section className={styles.credentials}>
        <div className={`shell ${styles.credentialsInner}`}>
          <div className={styles.credentialsLeft}>
            <span className="eyebrow">Our Standard</span>
            <h2 className={styles.credentialsHeading}>
              Confidence is the only luxury that matters.
            </h2>
          </div>
          <div className={styles.credentialsRight}>
            {trustPillars.map((p, i) => (
              <div
                key={p.title}
                className={styles.pillar}
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}><em>{p.body}</em></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENE 5: THE ARCHIVE TEASER ── */}
      {archived.length > 0 && (
        <section className={styles.archiveTeaser}>
          <div className={`shell ${styles.archiveTeaserInner}`}>
            <p className={styles.archiveLabel}>
              <em>What has found a home.</em>
            </p>
            <div className={styles.archiveGrid}>
              {archived.map((p, i) => (
                <div
                  key={p.id}
                  className={styles.archiveCard}
                  style={{ "--offset": `${i % 2 === 0 ? -4 : 4}%` } as React.CSSProperties}
                >
                  <div className={styles.archiveImageWrap}>
                    <Image
                      src={`/products/${p.images[0]}`}
                      alt={`${p.brand} ${p.model}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 28vw"
                      className={styles.archiveImage}
                      unoptimized={p.images[0].endsWith(".svg")}
                    />
                  </div>
                  <div className={styles.archiveCardMeta}>
                    <span className={styles.archiveBrand}>{p.brand}</span>
                    <span className={styles.archiveModel}>{p.model}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/archive" className={`btn btn-outline ${styles.archiveLink}`}>
              View the Archive
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
