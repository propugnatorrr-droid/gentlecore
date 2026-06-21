import Link from "next/link";
import Image from "next/image";
import { getFeatured } from "@/data/products";
import { whatsappLink, dossierMessage } from "@/lib/site";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import ProductGrid from "@/components/ProductGrid";
import TrustSection from "@/components/TrustSection";
import styles from "./home.module.css";

export default function HomePage() {
  const pieces = getFeatured().slice(0, 6);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <SectionReveal>
            <p className={styles.heroKicker}>Private Luxury Resale House · Worldwide</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h1 className={styles.heroHeadline}>
              Curated luxury,<br />
              authenticated<br />
              and resold.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.18}>
            <p className={styles.heroLede}>
              Rare Hermès, fine timepieces, and signed jewellery — each piece
              verified, condition-graded, and presented privately.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.26}>
            <a
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroWaBtn}
            >
              Begin a Private Inquiry
            </a>
          </SectionReveal>
          <SectionReveal delay={0.34}>
            <p className={styles.heroTagline}>By appointment. Private inquiry only.</p>
          </SectionReveal>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroFrame}>
            <Image
              src="/products/hero.svg"
              alt="A piece from the Gentle Core private preview"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.heroImg}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── TRUST — surfaced high, never buried ── */}
      <TrustSection />

      <hr className="hairline" />

      {/* ── CURATED SELECTION ── */}
      <section className={styles.presenting}>
        <div className={styles.presentingHead}>
          <span className={styles.sectionLabel}>Currently Presented</span>
          <Link href="/new-arrivals" className={styles.viewAll}>View all pieces</Link>
        </div>
        <ProductGrid products={pieces} columns={3} />
      </section>

      {/* ── BRAND STORY ── */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <SectionReveal>
            <span className={styles.storyLabel}>The House</span>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <p className={styles.storyStatement}>
              Gentle Core is an independent private resale house for those who buy
              rarely and well. Every piece is sourced, authenticated, and presented
              with full condition disclosure — no auctions, no uncertainty, no theatre.
              Only the quiet confidence of knowing exactly what you are acquiring.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <div className={styles.storyActions}>
              <CTAButton href="/about" variant="outline">Our Approach</CTAButton>
              <CTAButton href="/source-request" variant="ghost">Source a Specific Piece</CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
