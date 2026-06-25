import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import SourceRequestForm from "@/components/SourceRequestForm";

export const metadata: Metadata = {
  title: "Source Request",
  description: "Commission the house to source a specific piece.",
};

export default function SourceRequestPage() {
  return (
    <>
      <PageIntro
        label="Private Commission"
        title="Source Request"
        intro="Describe the piece you are seeking — material, hardware, condition. We respond with what we can source and timing."
      />
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 640,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(32px, 4vw, 48px)",
          }}
        >
          <SectionReveal>
            <p className="body body-lg">
              Sourcing is discreet and obligation-free. Provide as much
              specification as you can; we will review availability quietly
              through our network and present only what meets the brief.
            </p>
          </SectionReveal>
          <SectionReveal>
            <SourceRequestForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
