import styles from "./MaisonStrip.module.css";

// Quiet, slow marquee of the maisons we present. Text only — never logos
// (nominative use; no brand marks). Duplicated once for a seamless loop.
const MAISONS = [
  "Hermès",
  "Rolex",
  "Patek Philippe",
  "Cartier",
  "Chanel",
  "Audemars Piguet",
  "Van Cleef & Arpels",
];

export default function MaisonStrip() {
  const row = [...MAISONS, ...MAISONS];
  return (
    <section className={styles.wrap} aria-label="Maisons we present">
      <p className={styles.caption}>Presenting pieces by</p>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {row.map((m, i) => (
            <li key={`${m}-${i}`} className={styles.item} aria-hidden={i >= MAISONS.length}>
              {m}
              <span className={styles.dot} aria-hidden="true">·</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
