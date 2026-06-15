"use client";

import Link from "next/link";
import { whatsappLink, dossierMessage } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import styles from "./MobileCtaBar.module.css";

// Thumb-friendly sticky bottom CTA for mobile (most traffic arrives from Instagram).
export default function MobileCtaBar({ pieceName }: { pieceName?: string }) {
  return (
    <div className={styles.bar} role="region" aria-label="Quick actions">
      <Link href="/contact" className={styles.dossier}>
        Request Dossier
      </Link>
      <a
        className={styles.wa}
        href={whatsappLink(dossierMessage(pieceName))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
