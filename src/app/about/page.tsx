import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gentle Core is a private luxury resale house presenting rare handbags, watches, jewelry, and accessories for private acquisition worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="A private house for rare and considered pieces."
        intro="Gentle Core is a private luxury resale house presenting collector handbags, watches, jewelry, and accessories — quietly, and for serious buyers worldwide."
      />

      <section className="shell">
        <SectionReveal className={styles.block}>
          <h2 className={styles.blockLabel}>The House</h2>
          <div className={styles.body}>
            <h2>Curated, not catalogued.</h2>
            <p>
              We are not a marketplace. Each piece is selected by hand and presented through
              a private dossier — price, condition, and provenance shared directly with the
              buyer, never broadcast. The experience is intentional: unhurried, discreet, and
              built around the piece.
            </p>
            <p>
              We serve clients across the world. Many find us through
              referral; others arrive seeking a single, specific grail. In both cases the
              standard is the same.
            </p>
            <ul className={styles.facts}>
              <li className={styles.fact}>
                <span className={styles.factK}>Private Viewing</span>
                <span className={styles.factV}>BY APPOINTMENT</span>
              </li>
              <li className={styles.fact}>
                <span className={styles.factK}>Worldwide</span>
                <span className={styles.factV}>BUYER INQUIRIES ACCEPTED</span>
              </li>
              <li className={styles.fact}>
                <span className={styles.factK}>By Request</span>
                <span className={styles.factV}>SOURCING THROUGH OUR NETWORK</span>
              </li>
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.block}>
          <h2 className={styles.blockLabel}>How We Work</h2>
          <div className={styles.body}>
            <h2>Clarity is the luxury.</h2>
            <p>
              Condition is described honestly. Set details are disclosed per piece.
              Additional photographs and video are available before any acquisition. Nothing
              is left to assumption — because confidence, not pressure, is what serious
              collecting requires.
            </p>
            <p>
              When a piece is not in our preview, we source it. Share your brief and we will
              search through our network, returning only what genuinely fits.
            </p>
            <p>
              Read more about the{" "}
              <Link href="/how-to-buy">private acquisition process</Link>, or begin with a{" "}
              <Link href="/source-request">private request</Link>.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.block}>
          <h2 className={styles.blockLabel}>Independence</h2>
          <div className={styles.body}>
            <h2>An independent resale platform.</h2>
            <p>
              Gentle Core is an independent luxury resale platform and is not affiliated
              with the brands featured. Brand names are used only to describe the genuine
              pieces we present. All trademarks remain the property of their respective
              owners.
            </p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
