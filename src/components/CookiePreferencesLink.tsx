"use client";

import styles from "./Footer.module.css";

export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      className={styles.link}
      onClick={() => window.dispatchEvent(new CustomEvent("consent:open"))}
      style={{ textAlign: "left", background: "none", border: 0, padding: 0 }}
    >
      Cookie Preferences
    </button>
  );
}
