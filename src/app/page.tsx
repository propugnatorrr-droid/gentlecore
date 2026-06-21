import Link from "next/link";
import Image from "next/image";
import { getFeatured } from "@/data/products";
import { whatsappLink, dossierMessage } from "@/lib/site";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import styles from "./home.module.css";

const process = [
  { n: "I", label: "Inquire" },
  { n: "II", label: "Receive Dossier" },
  { n: "III", label: "Arrange Viewing" },
  { n: "IV", label: "Confirm Acquisition" },
];

export default function HomePage() {
  const pieces = getFeatured().slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <SectionReveal>
            <p className={styles.heroKicker}>Private Luxury Resale House · Dubai</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h1 className={styles.heroHeadline}>
              Curated Hermès.<br />
              Exceptional Timepieces.<br />
              Discreet Acquisition.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.18}>
            <div className={styles.heroMonogram} aria-hidden="true">GO</div>
          </SectionReveal>
          <SectionReveal delay={0.26}>
            <a
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroWaBtn}
            >
              WhatsApp Inquiry
            </a>
          </SectionReveal>
          <SectionReveal delay={0.34}>
            <p className={styles.heroTagline}>By Invitation. Private Inquiry Only.</p>
          </SectionReveal>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroFrame}>
            <Image
              src="/products/hero.svg"
              alt="A piece from the Gentle Outlet private preview"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.heroImg}
              unoptimized
            />
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* ── NOW PRESENTING — editorial stagger ── */}
      <section className={styles.presenting}>
        <div className={styles.presentingHead}>
          <span className={styles.sectionLabel}>Now Presenting</span>
          <Link href="/new-arrivals" className={styles.viewAll}>View all pieces</Link>
        </div>

        <div className={styles.editorialList}>
          {pieces.map((p, i) => (
            <SectionReveal key={p.id}>
              <Link href={`/product/${p.id}`} className={`${styles.editorialItem} ${i % 2 === 1 ? styles.reverse : ""}`}>
                <div className={styles.editorialImg}>
                  <Image
                    src={p.images[0]}
                    alt={`${p.brand} ${p.model}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className={styles.editorialPhoto}
                    unoptimized={p.images[0].endsWith(".svg")}
                  />
                </div>
                <div className={styles.editorialText}>
                  <p className={styles.editorialBrand}>{p.brand}</p>
                  <h2 className={styles.editorialModel}>{p.model}</h2>
                  {p.material && (
                    <p className={styles.editorialDetail}>
                      {p.material}{p.color ? ` · ${p.color}` : ""}
                    </p>
                  )}
                  <p className={styles.editorialCondition}>{p.condition}</p>
                  <span className={styles.editorialCta}>Request Dossier →</span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      <hr className="hairline" />

      {/* ── PROCESS — horizontal numbered list ── */}
      <section className={styles.process}>
        <div className={styles.processHead}>
          <span className={styles.sectionLabel}>How to Acquire</span>
        </div>
        <div className={styles.processList}>
          {process.map((s) => (
            <div key={s.n} className={styles.processStep}>
              <span className={styles.processNum}>{s.n}</span>
              <span className={styles.processLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.processAction}>
          <CTAButton href="/how-to-buy" variant="outline">Full Process</CTAButton>
        </div>
      </section>

      <hr className="hairline" />

      {/* ── CLOSING STATEMENT ── */}
      <section className={styles.closing}>
        <SectionReveal>
          <p className={styles.closingStatement}>
            Gentle Outlet is an independent private resale house based in Dubai.
            Every piece is sourced, authenticated, and presented with full condition disclosure.
            No auctions. No uncertainty. Private inquiry only.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <CTAButton href="/source-request" variant="outline">Source a Specific Piece</CTAButton>
        </SectionReveal>
      </section>
    </>
  );
}
