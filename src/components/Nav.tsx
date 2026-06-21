"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappLink, dossierMessage } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import styles from "./Nav.module.css";

const links = [
  { href: "/new-arrivals", label: "Collection" },
  { href: "/archive", label: "Archive" },
  { href: "/source-request", label: "Source a Piece" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.solid : ""}`}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          Gentle Core
        </Link>

        <nav className={styles.desktop} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
          <a
            className={styles.wa}
            href={whatsappLink(dossierMessage())}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`${styles.line} ${open ? styles.l1 : ""}`} />
          <span className={`${styles.line} ${open ? styles.l2 : ""}`} />
        </button>
      </div>

      {open && (
        <div className={styles.sheet}>
          <nav className={styles.sheetNav} aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={styles.sheetLink} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className={styles.sheetLink} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className={styles.sheetActions}>
            <a
              className="btn btn-gold btn-block"
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <Link className="btn btn-solid btn-block" href="/source-request" onClick={() => setOpen(false)}>
              Source by Request
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
