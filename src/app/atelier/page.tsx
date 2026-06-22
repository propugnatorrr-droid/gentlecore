import type { Metadata } from "next";
import Link from "next/link";
import styles from "./atelier.module.css";

export const metadata: Metadata = {
  title: "The Atelier",
  description:
    "Gentle Core is an independent private resale house. Our process, our philosophy, and our commitment to honest authentication.",
};

const steps = [
  {
    number: "01",
    title: "Sourced",
    body: "Pieces are acquired directly from collectors, private estates, and trusted networks — not bulk lots, not auction overruns. Each source is known.",
  },
  {
    number: "02",
    title: "Authenticated",
    body: "Every piece is examined by specialists: material, hardware, date codes, stitching, provenance documentation. No piece is presented with doubt unresolved.",
  },
  {
    number: "03",
    title: "Graded",
    body: "Condition is documented in full — corners, lining, hardware, finish. The condition report delivered with every dossier contains no omissions.",
  },
  {
    number: "04",
    title: "Presented",
    body: "Private dossiers are prepared: full photography, condition notes, set documentation. Each piece is offered for private acquisition only.",
  },
];

export default function AtelierPage() {
  return (
    <article className={styles.page}>
      {/* Hero band */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className="eyebrow">The Atelier</span>
          <h1 className={styles.heroTitle}>
            We buy carefully.<br />
            We authenticate honestly.<br />
            We present privately.
          </h1>
        </div>
      </header>

      {/* Philosophy */}
      <section className={`shell ${styles.philosophy}`}>
        <div className={styles.philLeft}>
          <span className="label">Our Philosophy</span>
          <h2 className={styles.philHeading}>
            The luxury market is full of theatre. We prefer silence.
          </h2>
        </div>
        <div className={styles.philRight}>
          <p className={styles.philBody}>
            Gentle Core was founded on a simple premise: that the most trustworthy way to
            acquire a rare luxury object is through a house that sources deliberately,
            authenticates rigorously, and discloses completely.
          </p>
          <p className={styles.philBody}>
            We do not use auction theatrics, countdown timers, or manufactured scarcity.
            Every piece is presented with its full history and its full condition — and
            nothing is withheld from the buyer&apos;s dossier.
          </p>
          <p className={styles.philBody}>
            We are independent. We are not affiliated with any of the brands we carry.
            Our only interest is in placing the right piece with the right collector.
          </p>
        </div>
      </section>

      {/* Process timeline */}
      <section className={`${styles.process}`}>
        <div className="shell">
          <span className="label">Our Process</span>
          <h2 className={styles.processTitle}>From source to presentation.</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.number} className={styles.step}>
                <div className={styles.stepNode}>
                  <span className={styles.stepNum}>{s.number}</span>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`shell ${styles.cta}`}>
        <h2 className={styles.ctaTitle}>
          When you are ready to enquire, we are ready to prepare your dossier.
        </h2>
        <div className={styles.ctaActions}>
          <Link href="/collection" className="btn btn-solid">Browse the Collection</Link>
          <Link href="/source-request" className="btn btn-outline">Source a Specific Piece</Link>
        </div>
      </section>
    </article>
  );
}
