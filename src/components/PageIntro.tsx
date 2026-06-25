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
      <div className="container">
        <SectionReveal>
          <span className={`eyebrow ${styles.eyebrow}`}>{label}</span>
          <h1 className={`h1 ${styles.title}`}>{title}</h1>
          <hr className={styles.rule} />
          {intro && <p className={`body body-lg ${styles.lede}`}>{intro}</p>}
        </SectionReveal>
      </div>
    </header>
  );
}
