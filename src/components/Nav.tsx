"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappLink, dossierMessage, site } from "@/lib/site";
import styles from "./Nav.module.css";

const utility = [
  { href: "/contact", label: "Worldwide" },
  { href: "/contact", label: "Contact" },
  { href: "/source-request", label: "Private Viewing" },
];

const primary = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/handbags", label: "Handbags" },
  { href: "/watches", label: "Watches" },
  { href: "/jewelry", label: "Jewelry" },
  { href: "/collection", label: "Collection" },
  { href: "/archive", label: "Archive" },
  { href: "/atelier", label: "Atelier" },
  { href: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      {/* Utility row */}
      <div className={styles.utility}>
        <div className={`container ${styles.utilityInner}`}>
          <div className={styles.utilityLeft}>
            {utility.map((l) => (
              <Link key={l.label} href={l.href} className={`eyebrow ${styles.utilityLink}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.utilityRight}>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`eyebrow ${styles.utilityLink}`}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Logo row */}
      <div className={`container ${styles.logoRow}`}>
        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`${styles.line} ${open ? styles.l1 : ""}`} />
          <span className={`${styles.line} ${open ? styles.l2 : ""}`} />
        </button>

        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          Gentle Core
        </Link>

        <a
          className={styles.waMobile}
          href={whatsappLink(dossierMessage())}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Inquire on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 1.97.57 3.81 1.55 5.36L2 22l4.79-1.52A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </a>
      </div>

      {/* Primary nav */}
      <nav className={styles.primary} aria-label="Primary">
        <div className={`container ${styles.primaryInner}`}>
          <div className={styles.primarySpacer} />
          <ul className={styles.primaryLinks}>
            {primary.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`eyebrow ${styles.primaryLink}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.primaryRight}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
            <a
              className={styles.iconBtn}
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inquire on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 1.97.57 3.81 1.55 5.36L2 22l4.79-1.52A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.sheet} role="dialog" aria-modal="true">
          <nav className={styles.sheetNav} aria-label="Mobile">
            {primary.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.sheetLink}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className={styles.sheetFoot}>
            {utility.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`eyebrow ${styles.sheetUtil}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`eyebrow ${styles.sheetUtil}`}
            >
              Instagram
            </a>
            <a
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={`cartier-link ${styles.sheetCta}`}
              onClick={() => setOpen(false)}
            >
              Open a private inquiry <span className="arrow">→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
