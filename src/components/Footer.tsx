import Link from "next/link";
import { site, whatsappLink, dossierMessage } from "@/lib/site";
import styles from "./Footer.module.css";
import CookiePreferencesLink from "./CookiePreferencesLink";

const HOUSE = [
  { href: "/about", label: "About" },
  { href: "/atelier", label: "Atelier" },
  { href: "/journal", label: "Journal" },
  { href: "/source-request", label: "Source Request" },
];

const PIECES = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/handbags", label: "Handbags" },
  { href: "/watches", label: "Watches" },
  { href: "/jewelry", label: "Jewelry" },
  { href: "/collection", label: "Collection" },
  { href: "/archive", label: "Archive" },
];

const SERVICES = [
  { href: "/how-to-buy", label: "How to Buy" },
  { href: "/atelier", label: "Authentication" },
  { href: "/shipping", label: "Discreet Delivery" },
  { href: "/source-request", label: "Private Viewing" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/imprint", label: "Imprint" },
  { href: "/returns", label: "Returns & Cancellation" },
  { href: "/shipping", label: "Shipping & Delivery" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <Link href="/" className={styles.wordmark}>
            Gentle Core
          </Link>
          <p className={`body ${styles.brandLine}`}>
            Private luxury resale, presented through dossiers. Worldwide.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={`eyebrow ${styles.colHead}`}>House</h4>
            <ul className={styles.list}>
              {HOUSE.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={`eyebrow ${styles.colHead}`}>Pieces</h4>
            <ul className={styles.list}>
              {PIECES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={`eyebrow ${styles.colHead}`}>Services</h4>
            <ul className={styles.list}>
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={`eyebrow ${styles.colHead}`}>Legal</h4>
            <ul className={styles.list}>
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesLink />
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={`eyebrow ${styles.colHead}`}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a
                  href={whatsappLink(dossierMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={styles.link}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.legalRow}>
          <p className={`eyebrow ${styles.legal}`}>
            Gentle Core — Private Luxury Resale House. Worldwide.
          </p>
          <p className={`eyebrow ${styles.legal}`}>© 2026 Gentle Core</p>
        </div>

        <p className={`${styles.fineprint}`}>{site.legalDisclaimer}</p>
      </div>
    </footer>
  );
}
