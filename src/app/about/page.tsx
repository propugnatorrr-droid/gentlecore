import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About",
  description: "The Gentle Core house philosophy.",
};

const paragraphs = [
  "Gentle Core was founded on a simple observation: the most serious collectors of rare objects do not want a marketplace. They want a private line into a network they trust.",
  "We are a small house. We work through closed relationships with private owners, specialist dealers, and trusted intermediaries — and we present each acquisition by private dossier rather than by open catalogue. The pieces we offer are not advertised; they are introduced.",
  "Our reach is worldwide. A buyer in one capital may be matched with an owner in another within hours, with the piece in transit shortly after. Discretion is structural — it shapes how we source, how we communicate, and how we deliver.",
  "Authentication is the foundation of everything we do. Each piece is examined by specialists trained on the specific house — Hermès, Rolex, Patek Philippe, Cartier — and graded against a private rubric that has been refined over years of handling. We disclose every condition note in full.",
  "We do not believe that confidence is sold. We believe it is earned, quietly, through the consistency of small acts: the dossier that arrives within hours, the condition report that holds nothing back, the shipment that lands unmarked.",
  "If this is the kind of relationship you have been looking for, the door is open. Send a quiet inquiry, and we will respond in kind.",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="The House"
        title="A quiet house, by design."
        intro="Gentle Core is a private resale house presenting rare pieces to a small worldwide audience of serious collectors."
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
          {paragraphs.map((p, i) => (
            <SectionReveal key={i} delay={i * 0.04}>
              <p className="body body-lg">{p}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
