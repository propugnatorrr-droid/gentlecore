import Link from "next/link";
import Image from "next/image";
import { getFeatured, getArchive } from "@/data/products";
import { whatsappLink, dossierMessage } from "@/lib/site";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import ProductGrid from "@/components/ProductGrid";
import TrustSection from "@/components/TrustSection";
import styles from "./home.module.css";

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);
  const archivePreview = getArchive().slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/products/hero.svg"
            alt="A piece from the Gentle Core private preview"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
            unoptimized
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <SectionReveal>
            <p className={styles.heroKicker}>Private Luxury Resale House · Worldwide</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className={styles.heroHeadline}>
              Curated luxury,
              <br />
              authenticated
              <br />
              and resold.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className={styles.heroLede}>
              Rare Hermès, fine timepieces, and signed jewellery — each piece
              verified, condition-graded, and presented privately.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <a
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Begin a Private Inquiry
            </a>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p className={styles.heroTagline}>By appointment. Private inquiry only.</p>
          </SectionReveal>
        </div>
        <div className={styles.heroScrollHint}>
          <span>Scroll</span>
          <div className={styles.heroLine} />
        </div>
      </section>

      {/* ── TRUST ── */}
      <TrustSection />

      <hr className="hairline" />

      {/* ── CURATED SELECTION ── */}
      <section className={styles.presenting}>
        <div className="shell">
          <div className={styles.presentingHead}>
            <div>
              <span className="label">The Collection</span>
              <h2 className={styles.presentingTitle}>Currently Presented</h2>
            </div>
            <Link href="/new-arrivals" className="btn-ghost">
              View all pieces
            </Link>
          </div>
          <ProductGrid products={featured} columns={3} />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className="shell-narrow">
          <SectionReveal>
            <p className={styles.philosophyText}>
              Gentle Core is an independent private resale house for those who buy
              rarely and well. Every piece is sourced, authenticated, and presented
              with full condition disclosure — no auctions, no uncertainty, no theatre.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className={styles.philosophyText}>
              Only the quiet confidence of knowing exactly what you are acquiring.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className={styles.philosophyActions}>
              <CTAButton href="/about" variant="outline">Our Approach</CTAButton>
              <CTAButton href="/source-request" variant="ghost">Source a Specific Piece</CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── ARCHIVE TEASER ── */}
      {archivePreview.length > 0 && (
        <section className={styles.archive}>
          <div className="shell">
            <div className={styles.archiveHead}>
              <span className="label">The Archive</span>
              <h2 className={styles.archiveTitle}>What has found a home</h2>
            </div>
            <div className={styles.archiveGrid}>
              {archivePreview.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 0.1}>
                  <Link href={`/product/${p.id}`} className={styles.archiveCard}>
                    <div className={styles.archiveFrame}>
                      <Image
                        src={`/products/${p.images[0]}`}
                        alt={p.model}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className={styles.archiveImg}
                        unoptimized={p.images[0].endsWith(".svg")}
                      />
                    </div>
                    <div className={styles.archiveMeta}>
                      <p className={styles.archiveBrand}>{p.brand}</p>
                      <p className={styles.archiveModel}>{p.model}</p>
                      <span className={styles.archiveStatus}>{p.status}</span>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
            <div className={styles.archiveFoot}>
              <CTAButton href="/archive" variant="ghost">Explore the archive</CTAButton>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
