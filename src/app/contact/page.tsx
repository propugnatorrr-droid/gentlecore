import type { Metadata } from "next";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Open a private line to Gentle Core.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Private Line"
        title="Contact"
        intro="A note arrives privately. We respond in kind, usually within hours."
      />

      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 640,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(40px, 5vw, 64px)",
          }}
        >
          <SectionReveal>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                borderTop: "1px solid var(--ink-10)",
                borderBottom: "1px solid var(--ink-10)",
                padding: "28px 0",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 24,
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <span className="eyebrow">WhatsApp</span>
                <a
                  href={whatsappLink(dossierMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cartier-link"
                >
                  Open a private chat <span className="arrow">→</span>
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 24,
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <span className="eyebrow">Email</span>
                <a href={`mailto:${site.email}`} className="cartier-link">
                  {site.email} <span className="arrow">→</span>
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 24,
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <span className="eyebrow">Instagram</span>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cartier-link"
                >
                  @{site.instagram} <span className="arrow">→</span>
                </a>
              </li>
            </ul>
          </SectionReveal>

          <SectionReveal>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
