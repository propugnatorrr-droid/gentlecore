import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Gentle Core collects, uses, and protects personal data under the GDPR.",
};

const sections: Array<{ heading: string; body: string[] }> = [
  {
    heading: "Who we are",
    body: [
      `${site.legalName} ("Gentle Core", "we", "us") is the data controller for the purposes of Article 4(7) of the General Data Protection Regulation (GDPR) in respect of personal data processed via gentlecore.co. You may contact us by email at ${site.email}. Postal contact is by appointment, worldwide.`,
    ],
  },
  {
    heading: "What information we collect",
    body: [
      "We collect data you submit directly through our source-request form, contact form, and dossier inquiries — typically your name, email address, WhatsApp number, and the content of your message.",
      "When you visit the site, our hosting provider (Vercel) records limited technical data — IP address, user agent, and language preference — in server access logs for security, abuse prevention, and operational diagnostics.",
    ],
  },
  {
    heading: "Why we process it (lawful bases under GDPR Article 6)",
    body: [
      "(a) Performance of a contract or pre-contractual measures (Art. 6(1)(b)) — to respond to inquiries you initiate and progress them toward a possible transaction.",
      "(b) Legitimate interests (Art. 6(1)(f)) — to operate, secure, and improve the site, and to maintain records appropriate to a private resale house.",
      "(c) Consent (Art. 6(1)(a)) — where applicable, such as for any non-essential cookies. We currently use no such cookies.",
    ],
  },
  {
    heading: "Sharing your data",
    body: [
      "We do not sell or rent your personal data. We share it only with the limited recipients required to operate the site and respond to you:",
      "Vercel Inc. — hosting and edge infrastructure (USA and EU regions), processing under the Vercel Data Processing Addendum.",
      "WhatsApp / Meta Platforms Ireland — only if you choose to contact us through WhatsApp, in which case the conversation is carried over their infrastructure under their own terms and privacy policy.",
    ],
  },
  {
    heading: "International transfers",
    body: [
      "Vercel processes data globally, including outside the European Economic Area. Such transfers rely on Standard Contractual Clauses approved by the European Commission under Article 46 of the GDPR, with supplementary measures where required.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "Inquiry messages are retained for the duration of the conversation plus 24 months thereafter, for follow-up and legitimate business records. Server access logs are rotated by our hosting provider in accordance with their published policy.",
    ],
  },
  {
    heading: "Your rights under GDPR",
    body: [
      "Subject to the conditions in the Regulation, you have the right to: access your data (Art. 15), have it rectified (Art. 16), erased (Art. 17), or restricted (Art. 18); to data portability (Art. 20); to object to processing (Art. 21); to withdraw consent at any time where processing is based on it (Art. 7); and to lodge a complaint with a supervisory authority in your country of habitual residence (Art. 77).",
      `To exercise any of these rights, please email ${site.email}.`,
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use only strictly necessary cookies and equivalent storage. Please see our Cookie Policy for details.",
    ],
  },
  {
    heading: "Children's data",
    body: [
      "The site is not directed to children under the age of 16, and we do not knowingly collect personal data from them.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We will note any material changes on this page and update the \"Last updated\" date below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="Privacy"
        title="Privacy Policy"
        intro="How we collect, use, and protect your personal data under the General Data Protection Regulation."
      />
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {sections.map((s) => (
              <div key={s.heading} style={{ marginBottom: "2.25em" }}>
                <h2
                  className="h3"
                  style={{ marginBottom: "0.6em" }}
                >
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                      marginBottom: "0.9em",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="eyebrow" style={{ color: "var(--ink-60)", marginTop: "3em" }}>
              Last updated: 2026-06-25
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
