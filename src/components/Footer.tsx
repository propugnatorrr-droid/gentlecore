import Link from "next/link";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import styles from "./Footer.module.css";

const nav = [
  { href: "/collection", label: "Collection" },
  { href: "/archive", label: "Archive" },
  { href: "/journal", label: "Journal" },
  { href: "/atelier", label: "Atelier" },
  { href: "/source-request", label: "Source a Piece" },
  { href: "/how-to-buy", label: "How to Buy" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.wordmark}>Gentle Core</span>
          <p className={styles.tagline}><em>Private luxury resale. Worldwide.</em></p>
        </div>

        <nav className={styles.center} aria-label="Footer navigation">
          {nav.map((l, i) => (
            <span key={l.href}>
              <Link href={l.href} className={styles.navLink}>{l.label}</Link>
              {i < nav.length - 1 && <span className={styles.sep} aria-hidden="true" />}
            </span>
          ))}
        </nav>

        <address className={styles.right}>
          <p className={styles.contactLabel}>Private Enquiries</p>
          <a
            className={styles.contactLink}
            href={whatsappLink(dossierMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a className={styles.contactLink} href={`mailto:${site.email}`}>{site.email}</a>
          <p className={styles.contactMuted}>{site.address.line1}</p>
          <a
            className={styles.instagramLink}
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @{site.instagram}
          </a>
        </address>
      </div>

      <div className={`shell ${styles.bottom}`}>
        <hr className="hairline" />
        <p className={styles.legal}>
          <em>
            © {year} {site.legalName}. All rights reserved. {site.legalDisclaimer}
          </em>
        </p>
      </div>
    </footer>
  );
}
