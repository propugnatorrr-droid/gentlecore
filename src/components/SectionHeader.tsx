import SectionReveal from "./SectionReveal";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  label,
  title,
  intro,
  align = "left",
  as = "h2",
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <SectionReveal className={`${styles.head} ${align === "center" ? styles.center : ""}`}>
      <span className={`eyebrow ${styles.label}`}>{label}</span>
      <Heading className={`h2 ${styles.title}`}>{title}</Heading>
      {intro && <p className={`body body-lg ${styles.intro}`}>{intro}</p>}
    </SectionReveal>
  );
}
