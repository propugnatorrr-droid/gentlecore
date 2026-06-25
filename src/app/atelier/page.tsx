import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "The Atelier",
  description: "The process behind every piece presented by the house.",
};

const before = [
  "Every piece begins with a quiet conversation. An owner reaches out, or a specialist in our network surfaces something rare. The piece is requested in hand — not on consignment, not from photographs — before any commitment is made.",
  "Once it arrives, the work begins in the room. Natural light, loupe, calibrated scale, rare-earth magnet. The piece is examined against a private rubric developed over years of handling specific houses — Hermès leather grains, Rolex case profiles, Patek Philippe dial printing.",
  "Authentication is never a single test. It is the convergence of dozens of small certainties — each one a quiet checkmark — into an unambiguous conclusion. Documentation, where it exists, is treated as corroboration rather than proof.",
];

const after = [
  "Only pieces that pass without reservation are presented. Each is photographed in natural light against neutral ground, dossier copy is written by hand, and the file is sent privately to a small list of interested collectors.",
  "Negotiation, where it occurs, is conducted quietly between parties. We act as the trusted intermediary — never the seller of record beyond what is necessary, never the buyer beyond what is requested.",
  "Delivery is unbranded, insured, and worldwide. For pieces of particular weight, hand delivery is arranged by private appointment. The shipment lands without ceremony; the conversation ends as quietly as it began.",
];

export default function AtelierPage() {
  return (
    <>
      <PageIntro
        label="Process"
        title="The Atelier"
        intro="The work that sits behind every piece we present — sourcing, authentication, presentation, delivery."
      />
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 720,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 2.4vw, 32px)",
          }}
        >
          {before.map((p, i) => (
            <SectionReveal key={`b-${i}`} delay={i * 0.04}>
              <p className="body body-lg">{p}</p>
            </SectionReveal>
          ))}

          <SectionReveal delay={0.1}>
            <blockquote
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.012em",
                color: "var(--ink)",
                textAlign: "center",
                margin: "clamp(32px, 5vw, 64px) auto",
                maxWidth: "24ch",
              }}
            >
              &ldquo;Discretion is a discipline.&rdquo;
            </blockquote>
          </SectionReveal>

          {after.map((p, i) => (
            <SectionReveal key={`a-${i}`} delay={i * 0.04}>
              <p className="body body-lg">{p}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
