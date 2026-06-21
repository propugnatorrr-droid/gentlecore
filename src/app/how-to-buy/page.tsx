import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "How to Buy",
  description:
    "The private acquisition process at Gentle Core — inquire, receive the dossier, review, arrange viewing or shipping, and confirm.",
};

const steps = [
  { n: "01", name: "Inquire", d: "Request the dossier for a piece, or brief us on what you are seeking. Every conversation is private and obligation-free." },
  { n: "02", name: "Receive Dossier", d: "We respond with price, condition notes, set details, and additional media — everything needed to consider the piece properly." },
  { n: "03", name: "Review Details", d: "Take your time. Request further photographs or video, and ask anything you need to decide with confidence." },
  { n: "04", name: "Arrange Viewing / Shipping", d: "View privately by appointment, or we arrange insured, discreet worldwide shipping to your location." },
  { n: "05", name: "Confirm Acquisition", d: "Finalise the acquisition privately, with documentation provided for the piece." },
];

const dossier = [
  { name: "Condition Notes", d: "A candid account of condition and wear." },
  { name: "Set Details", d: "Precisely what accompanies the piece." },
  { name: "Additional Media", d: "Further photos and video on request." },
  { name: "Private Viewing", d: "By arrangement, or shipping worldwide." },
];

export default function HowToBuyPage() {
  return (
    <>
      <PageIntro
        label="The Private Dossier — How It Works"
        title="A considered, private way to acquire."
        intro="No prices are listed publicly. Each piece is presented for private acquisition through a dossier prepared for you."
      />

      <section className="shell">
        <SectionReveal className={styles.block}>
          <h2 className={styles.blockLabel}>The Process</h2>
          <div className={styles.body}>
            <ol className={styles.steps}>
              {steps.map((s) => (
                <li className={styles.step} key={s.n}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <div>
                    <h3 className={styles.stepName}>{s.name}</h3>
                    <p className={styles.stepDesc}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.block}>
          <h2 className={styles.blockLabel}>What the Dossier Includes</h2>
          <div className={styles.body}>
            <div className={styles.defList}>
              {dossier.map((d) => (
                <div className={styles.def} key={d.name}>
                  <span className={styles.defTerm}>{d.name}</span>
                  <span className={styles.defDesc}>{d.d}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "var(--s4)" }}>
              Ready to begin? Request the dossier for a specific piece, or tell us what you
              are seeking.
            </p>
            <div style={{ display: "flex", gap: "var(--s2)", flexWrap: "wrap", marginTop: "var(--s2)" }}>
              <CTAButton href="/new-arrivals" variant="solid">View Available Pieces</CTAButton>
              <CTAButton href="/source-request" variant="gold">Source by Request</CTAButton>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
