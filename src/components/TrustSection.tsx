import SectionReveal from "./SectionReveal";
import styles from "./TrustSection.module.css";

type Pillar = { title: string; body: string; icon: React.ReactNode };

const Seal = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <circle cx="16" cy="13" r="9" />
    <path d="M12 13.4l3 3 5.4-6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 22.5l-1.5 6 6.5-3 6.5 3-1.5-6" strokeLinejoin="round" />
  </svg>
);

const Lens = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <circle cx="14" cy="14" r="8.5" />
    <path d="M20.5 20.5l5.5 5.5" strokeLinecap="round" />
    <path d="M11 14h6M14 11v6" strokeLinecap="round" opacity="0.55" />
  </svg>
);

const Shield = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <path d="M16 4l10 3.5v8c0 6.5-4.4 10.8-10 12.5C10.4 26.3 6 22 6 15.5v-8L16 4z" strokeLinejoin="round" />
    <path d="M12 15.8l3 3 5.2-5.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pillars: Pillar[] = [
  {
    icon: <Seal />,
    title: "Every piece authenticated",
    body: "Each item is examined and verified by specialists before it is presented. Nothing reaches you unchecked.",
  },
  {
    icon: <Lens />,
    title: "Condition graded & photographed",
    body: "An honest condition grade with close, unretouched detail on wear, corners, and finish — disclosed in full.",
  },
  {
    icon: <Shield />,
    title: "Insured, discreet delivery",
    body: "Fully insured worldwide shipping, handled privately, with buyer protection on every acquisition.",
  },
];

export default function TrustSection({
  heading = "Confidence is the only luxury that matters.",
  label = "Why Gentle Core",
}: {
  heading?: string;
  label?: string;
}) {
  return (
    <section className={styles.trust} aria-labelledby="trust-h">
      <div className={styles.inner}>
        <SectionReveal>
          <div className={styles.head}>
            <span className={styles.label}>{label}</span>
            <h2 id="trust-h" className={styles.heading}>{heading}</h2>
          </div>
        </SectionReveal>
        <ul className={styles.grid}>
          {pillars.map((p, i) => (
            <SectionReveal as="li" key={p.title} delay={i * 0.08} className={styles.item}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.itemTitle}>{p.title}</h3>
              <p className={styles.itemBody}>{p.body}</p>
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
