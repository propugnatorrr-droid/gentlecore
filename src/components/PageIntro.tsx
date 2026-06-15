import SectionReveal from "./SectionReveal";
import styles from "./PageIntro.module.css";

export default function PageIntro({
  label,
  title,
  intro,
  align = "left",
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`${styles.intro} ${align === "center" ? styles.center : ""}`}>
      <div className="shell">
        <SectionReveal>
          <span className="label">{label}</span>
          <h1 className={styles.title}>{title}</h1>
          {intro && <p className={styles.lede}>{intro}</p>}
        </SectionReveal>
      </div>
    </header>
  );
}
