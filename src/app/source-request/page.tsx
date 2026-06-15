import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import SourceRequestForm from "@/components/SourceRequestForm";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Source by Request",
  description:
    "Searching for a specific Hermès, Rolex, Patek Philippe, Cartier, Chanel, or rare collector piece? Submit a private request to Gentle Outlet.",
};

export default function SourceRequestPage() {
  return (
    <>
      <PageIntro
        label="Source by Request"
        title="Tell us what you are seeking."
        intro="Searching for a specific Hermès, Rolex, Patek Philippe, Cartier, Chanel, or rare collector piece? Submit a private request and our team will review availability through our network."
      />

      <section className="shell section">
        <div className={styles.split}>
          <aside className={styles.splitAside}>
            <div className={styles.body}>
              <h3>A discreet, obligation-free search.</h3>
              <p>
                Our network extends well beyond what is presented publicly. Share the brief —
                the more detail, the better — and we will return only pieces that genuinely
                match.
              </p>
              <p>
                Sourcing covers handbags, watches, jewelry, and rare collector accessories.
                Dubai viewing by arrangement; worldwide buyer inquiries accepted.
              </p>
            </div>
          </aside>
          <SectionReveal delay={0.08}>
            <SourceRequestForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
