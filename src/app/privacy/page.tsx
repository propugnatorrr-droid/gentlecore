import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Privacy & Terms",
  description:
    "Privacy and terms for Gentle Core — how enquiries and personal data are handled, and the terms under which pieces are presented.",
};

const sections = [
  {
    label: "Privacy",
    h: "How we handle your information",
    body: [
      "Details you share through our forms or WhatsApp are used solely to respond to your enquiry and to present pieces relevant to your request. We do not sell or share your information with third parties for marketing.",
      "We retain enquiry details only as long as needed to assist you, and you may request their removal at any time.",
    ],
  },
  {
    label: "Authenticity",
    h: "Authenticity & condition",
    body: [
      "Pieces are presented honestly, with condition described and set details disclosed per piece. Additional photographs and video are available before any acquisition so that you can review thoroughly.",
      "Where documentation accompanies a piece, it is noted in the dossier. We encourage every buyer to review the dossier in full before proceeding.",
    ],
  },
  {
    label: "Acquisition",
    h: "Pricing & acquisition",
    body: [
      "No prices are listed publicly; each piece is presented for private acquisition, with price shared in the dossier. Availability is confirmed at the time of enquiry, as pieces may be reserved or move on.",
      "Private viewing is by appointment. Worldwide buyer inquiries are accepted, with insured, discreet shipping arranged per destination. Any applicable duties or taxes are the responsibility of the recipient.",
    ],
  },
  {
    label: "Independence",
    h: "Trademarks & independence",
    body: [
      site.legalDisclaimer,
      "Brand names appear only to describe the genuine pieces we present. All trademarks and brand names remain the property of their respective owners.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="Privacy & Terms"
        title="Clear terms, privately held."
        intro="How we handle enquiries and personal information, and the terms under which pieces are presented."
      />
      <section className="shell">
        {sections.map((s) => (
          <SectionReveal className={styles.block} key={s.h}>
            <h2 className={styles.blockLabel}>{s.label}</h2>
            <div className={styles.body}>
              <h3>{s.h}</h3>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </SectionReveal>
        ))}
      </section>
    </>
  );
}
