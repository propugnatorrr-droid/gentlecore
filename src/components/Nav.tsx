"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappLink, dossierMessage, site } from "@/lib/site";
import { getFeatured } from "@/data/products";
import styles from "./Nav.module.css";

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

const utility = [
  { href: "/about", label: "The House" },
  { href: "/how-to-buy", label: "How to Buy" },
  { href: "/contact", label: "Contact" },
  { href: "/source-request", label: "Private Viewing" },
];

const featurePiece = getFeatured()[0];

export default function Nav() {
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setRevealed(window.scrollY > 120);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`${styles.bar} ${revealed || open ? styles.barShow : ""}`}
        data-open={open || undefined}
      >
        <div className={styles.barInner}>
          <button
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles.menuGlyph} aria-hidden="true">
              <span className={`${styles.menuLine} ${open ? styles.menuLineA : ""}`} />
              <span className={`${styles.menuLine} ${open ? styles.menuLineB : ""}`} />
            </span>
            <span className={`eyebrow ${styles.menuLabel}`}>
              {open ? "Close" : "Menu"}
            </span>
          </button>

          <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
            Gentle Core
          </Link>

          <div className={styles.right}>
            <Link
              href="/source-request"
              className={`eyebrow ${styles.inquireLink}`}
              onClick={() => setOpen(false)}
            >
              Inquire
            </Link>
            <a
              className={styles.iconBtn}
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 21l1.6-5A9 9 0 1 1 8 18.4L3 21z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.overlayGrid}>
          <nav className={styles.primaryColumn} aria-label="Primary">
            <ol className={styles.primaryList}>
              {primary.map((l, i) => (
                <li
                  key={l.href}
                  className={styles.primaryItem}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <Link
                    href={l.href}
                    className={styles.primaryLink}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.primaryIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.primaryWord}>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className={styles.utilityBlock}>
              {utility.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`eyebrow ${styles.utilityLink}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`eyebrow ${styles.utilityLink}`}
              >
                Instagram
              </a>
            </div>
          </nav>

          {featurePiece && (
            <aside className={styles.featureColumn}>
              <Link
                href={`/product/${featurePiece.id}`}
                className={styles.featureLink}
                onClick={() => setOpen(false)}
              >
                <span className={`eyebrow ${styles.featureKicker}`}>
                  Now Presenting
                </span>
                <span className={styles.featureImageWrap}>
                  <Image
                    src={featurePiece.images[0]}
                    alt={`${featurePiece.brand} ${featurePiece.model}`}
                    fill
                    sizes="(max-width: 900px) 0vw, 36vw"
                    className={styles.featureImage}
                  />
                </span>
                <span className={styles.featureMeta}>
                  <span className={`eyebrow ${styles.featureBrand}`}>
                    {featurePiece.brand}
                  </span>
                  <span className={styles.featureModel}>
                    {featurePiece.model}
                  </span>
                  <span className={`eyebrow ${styles.featureCta}`}>
                    View the piece <span aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            </aside>
          )}
        </div>
      </div>
    </>
  );
}
