import Link from "next/link";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import styles from "./Footer.module.css";

const explore = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/handbags", label: "Handbags" },
  { href: "/watches", label: "Watches" },
  { href: "/jewelry", label: "Jewelry" },
  { href: "/archive", label: "Archive" },
];

const house = [
  { href: "/source-request", label: "Source Request" },
  { href: "/how-to-buy", label: "How to Buy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy & Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.wordmark}>Gentle Core</span>
            <p className={styles.descriptor}>
              {site.descriptor} — {site.city}
            </p>
            <p className={styles.blurb}>
              Rare handbags, watches, jewelry, and accessories presented for private
              acquisition.
            </p>
          </div>

          <nav className={styles.col} aria-label="Collections">
            <h3 className={styles.colTitle}>Collections</h3>
            {explore.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <nav className={styles.col} aria-label="The House">
            <h3 className={styles.colTitle}>The House</h3>
            {house.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Private Enquiries</h3>
            <a href={whatsappLink(dossierMessage())} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p className={styles.addr}>{site.address.line1}</p>
            <p className={styles.addr}>{site.address.line2}</p>
          </div>
        </div>

        <hr className="hairline" />

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{site.legalDisclaimer}</p>
          <p className={styles.copy}>© {year} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
