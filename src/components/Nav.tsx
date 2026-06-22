"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappLink, dossierMessage } from "@/lib/site";
import styles from "./Nav.module.css";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/archive", label: "Archive" },
  { href: "/journal", label: "Journal" },
  { href: "/atelier", label: "Atelier" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
        <nav className={styles.leftLinks} aria-label="Primary left">
          {links.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
          Gentle Core
        </Link>

        <div className={styles.rightGroup}>
          <nav className={styles.rightLinks} aria-label="Primary right">
            {links.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            className={styles.inquire}
            href={whatsappLink(dossierMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire
          </a>
        </div>

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
        <div className={styles.sheet} aria-modal="true" role="dialog">
          <nav className={styles.sheetNav} aria-label="Mobile">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.sheetLink}
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            className={`btn btn-gold btn-block ${styles.sheetWa}`}
            href={whatsappLink(dossierMessage())}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Begin a Private Inquiry
          </a>
        </div>
      )}
    </header>
  );
}
