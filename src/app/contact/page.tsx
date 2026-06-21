import type { Metadata } from "next";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import PageIntro from "@/components/PageIntro";
import SectionReveal from "@/components/SectionReveal";
import DossierForm from "@/components/DossierForm";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import styles from "../content.module.css";
import local from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gentle Core — WhatsApp, email, and Instagram. Private viewing by appointment; worldwide buyer inquiries accepted.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Begin a private conversation."
        intro="WhatsApp is the fastest way to reach us. Private viewing by appointment; worldwide buyer inquiries accepted."
      />

      <section className="shell section">
        <div className={styles.split}>
          <aside className={styles.splitAside}>
            <div className={local.channels}>
              <a
                className={local.primary}
                href={whatsappLink(dossierMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                <span>
                  <strong>WhatsApp</strong>
                  <em>Fastest response — message us directly</em>
                </span>
              </a>

              <div className={local.line}>
                <span className="label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className={local.line}>
                <span className="label">Instagram</span>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{site.instagram}
                </a>
              </div>
              <div className={local.line}>
                <span className="label">Boutique</span>
                <p>{site.address.line1}</p>
                <p>{site.address.line2}</p>
              </div>
            </div>
          </aside>

          <SectionReveal delay={0.08}>
            <div className={local.formHead}>
              <span className="label">Request a Dossier</span>
              <h2 className={local.formTitle}>Send a private enquiry.</h2>
            </div>
            <DossierForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
