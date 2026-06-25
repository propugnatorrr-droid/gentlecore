import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "How to Buy",
  description: "The four steps of a private acquisition.",
};

const steps = [
  {
    n: "01",
    title: "Inquire",
    body:
      "Send a quiet note — either about a specific piece, or a brief describing what you are seeking. We respond privately, usually within hours.",
  },
  {
    n: "02",
    title: "Dossier",
    body:
      "We prepare a private dossier: photographs in natural light, full specification, condition report, provenance, and pricing. Shared one-to-one, not published.",
  },
  {
    n: "03",
    title: "Authenticate & Reserve",
    body:
      "A reservation holds the piece for a defined window. Independent authentication may be arranged at your request before settlement.",
  },
  {
    n: "04",
    title: "Delivery",
    body:
      "Insured, unbranded worldwide shipment. For pieces of particular weight, hand delivery is arranged by private appointment.",
  },
];

export default function HowToBuyPage() {
  return (
    <>
      <PageIntro
        label="Process"
        title="How to Buy"
        intro="Four quiet steps, from first inquiry to delivery."
      />
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 720,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(40px, 6vw, 80px)",
          }}
        >
          {steps.map((s, i) => (
            <SectionReveal key={s.n} delay={i * 0.04}>
              <article
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  borderTop: "1px solid var(--ink-10)",
                  paddingTop: 24,
                }}
              >
                <span className="eyebrow" style={{ color: "var(--ink-40)" }}>
                  {s.n}
                </span>
                <h3 className="h3">{s.title}</h3>
                <p className="body body-lg">{s.body}</p>
              </article>
            </SectionReveal>
          ))}

          <SectionReveal>
            <p
              className="body"
              style={{
                textAlign: "center",
                color: "var(--ink-60)",
                marginTop: 16,
              }}
            >
              Ready to begin?{" "}
              <Link href="/source-request" className="cartier-link">
                Open a Private Inquiry <span className="arrow">→</span>
              </Link>
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
