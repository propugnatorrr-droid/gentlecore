import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Gentle Core handles personal information.",
};

const sections: Array<{ heading: string; body: string[] }> = [
  {
    heading: "What we collect",
    body: [
      `${site.name} collects only the information you provide directly: name, contact details, location, and the substance of any inquiry. We do not run advertising trackers and do not sell data to third parties.`,
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use submitted information to respond to inquiries, prepare private dossiers, arrange delivery, and maintain the discreet records appropriate to a private resale house.",
    ],
  },
  {
    heading: "How we store it",
    body: [
      "Inquiry records are stored on secured systems with access limited to authorised members of the house. Anonymised, aggregated traffic analytics may be used to maintain the site.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You may request a copy of the information we hold on you, or its deletion, at any time by writing to " +
        site.email +
        ". We will respond within a reasonable period.",
    ],
  },
  {
    heading: "Updates",
    body: [
      "This statement may be revised from time to time. Material changes will be reflected here.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="Statement"
        title="Privacy"
        intro="A short, plain statement on how we handle the information you share with the house."
      />
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 680,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(32px, 4vw, 48px)",
          }}
        >
          {sections.map((s) => (
            <div
              key={s.heading}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                borderTop: "1px solid var(--ink-10)",
                paddingTop: 24,
              }}
            >
              <h2 className="h3">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="body body-lg">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
