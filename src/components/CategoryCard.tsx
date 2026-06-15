import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({
  label,
  href,
  image,
  caption,
}: {
  label: string;
  href: string;
  image: string;
  caption?: string;
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.frame}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 760px) 50vw, 33vw"
          className={styles.img}
          unoptimized={image.endsWith(".svg")}
        />
        <span className={styles.overlay} aria-hidden="true" />
      </div>
      <div className={styles.meta}>
        <span className={styles.label}>{label}</span>
        {caption && <span className={styles.caption}>{caption}</span>}
      </div>
    </Link>
  );
}
