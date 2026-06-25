"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "gentlecore.consent";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: string;
};

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.necessary === true) {
      return parsed as Consent;
    }
    return null;
  } catch {
    return null;
  }
}

function writeConsent(c: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    /* ignore */
  }
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const leaveTimer = useRef<number | null>(null);
  const baseId = useId();

  useEffect(() => {
    setMounted(true);
    if (!readConsent()) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setLeaving(false);
      setShowPrefs(false);
      const existing = readConsent();
      if (existing) {
        setAnalytics(!!existing.analytics);
        setMarketing(!!existing.marketing);
      }
      setOpen(true);
    };
    window.addEventListener("consent:open", handler as EventListener);
    return () => window.removeEventListener("consent:open", handler as EventListener);
  }, []);

  const dismiss = () => {
    setLeaving(true);
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      setOpen(false);
      setLeaving(false);
      setShowPrefs(false);
    }, 220);
  };

  const acceptAll = () => {
    writeConsent({ necessary: true, analytics: true, marketing: true, ts: new Date().toISOString() });
    dismiss();
  };

  const rejectNonEssential = () => {
    writeConsent({ necessary: true, analytics: false, marketing: false, ts: new Date().toISOString() });
    dismiss();
  };

  const savePrefs = () => {
    writeConsent({ necessary: true, analytics, marketing, ts: new Date().toISOString() });
    dismiss();
  };

  if (!mounted || !open) return null;

  const necLabelId = `${baseId}-nec-label`;
  const anaLabelId = `${baseId}-ana-label`;
  const mktLabelId = `${baseId}-mkt-label`;

  return (
    <div
      className={`${styles.banner} ${leaving ? styles.bannerLeaving : styles.bannerVisible}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby={`${baseId}-title`}
    >
      <span className={`eyebrow ${styles.eyebrow}`}>Cookies &amp; Privacy</span>
      <h3 id={`${baseId}-title`} className={styles.title}>
        A note on your privacy.
      </h3>
      <p className={styles.body}>
        We use only the cookies strictly necessary to operate the site. We never sell or share your data.
        You may adjust your preferences at any time.
      </p>

      {showPrefs && (
        <div className={styles.prefList}>
          <div className={styles.prefRow}>
            <div>
              <div id={necLabelId} className={styles.prefLabel}>
                Necessary
              </div>
              <p className={styles.prefBody}>
                Required for the site to function. Includes session and consent storage.
              </p>
            </div>
            <button
              type="button"
              className={`${styles.toggle} ${styles.toggleDisabled}`}
              aria-labelledby={necLabelId}
              aria-checked="true"
              aria-disabled="true"
              role="switch"
              disabled
            >
              <span className={styles.srOnly}>Always on</span>
              <span className={styles.toggleKnob} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.prefRow}>
            <div>
              <div id={anaLabelId} className={styles.prefLabel}>
                Analytics
              </div>
              <p className={styles.prefBody}>
                Currently not in use. We do not run analytics on this site.
              </p>
            </div>
            <button
              type="button"
              className={`${styles.toggle} ${analytics ? styles.toggleOn : ""}`}
              aria-labelledby={anaLabelId}
              aria-checked={analytics}
              role="switch"
              onClick={() => setAnalytics((v) => !v)}
            >
              <span className={styles.srOnly}>Toggle analytics</span>
              <span className={styles.toggleKnob} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.prefRow}>
            <div>
              <div id={mktLabelId} className={styles.prefLabel}>
                Marketing
              </div>
              <p className={styles.prefBody}>
                Currently not in use. We do not run marketing trackers on this site.
              </p>
            </div>
            <button
              type="button"
              className={`${styles.toggle} ${marketing ? styles.toggleOn : ""}`}
              aria-labelledby={mktLabelId}
              aria-checked={marketing}
              role="switch"
              onClick={() => setMarketing((v) => !v)}
            >
              <span className={styles.srOnly}>Toggle marketing</span>
              <span className={styles.toggleKnob} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <div className={styles.actions}>
        {showPrefs ? (
          <>
            <button type="button" className="cartier-link" onClick={savePrefs}>
              Save preferences
            </button>
            <button
              type="button"
              className={`cartier-link ${styles.actionSecondary}`}
              onClick={() => setShowPrefs(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" className="cartier-link" onClick={acceptAll}>
              Accept
            </button>
            <button
              type="button"
              className={`cartier-link ${styles.actionSecondary}`}
              onClick={rejectNonEssential}
            >
              Reject non-essential
            </button>
            <button
              type="button"
              className={`cartier-link ${styles.actionSecondary}`}
              onClick={() => setShowPrefs(true)}
            >
              Preferences
            </button>
          </>
        )}
      </div>

      <p className={styles.fineprint}>
        Read our <Link href="/cookies">Cookie Policy</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </div>
  );
}
