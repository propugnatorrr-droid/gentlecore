import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({
  label,
  href,
  image,
  caption,
  eyebrow = "House Discipline",
}: {
  label: string;
  href: string;
  image: string;
  caption?: string;
  eyebrow?: string;
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.frame}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 760px) 90vw, 33vw"
          className={styles.img}
        />
      </div>
      <div className={styles.meta}>
        <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
        <h3 className={`h3 ${styles.label}`}>{label}</h3>
        {caption && <span className={styles.caption}>{caption}</span>}
        <span className={`cartier-link ${styles.cta}`}>
          View <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
