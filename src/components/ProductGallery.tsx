"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((a) => (a + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((a) => (a - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        {images.map((img, i) => (
          <div
            key={img}
            className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
            aria-hidden={i !== active}
          >
            <Image
              src={img}
              alt={i === 0 ? alt : ""}
              fill
              priority={i === 0}
              sizes="(max-width: 900px) 100vw, 60vw"
              className={styles.img}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs} role="tablist" aria-label="Product images">
          {images.map((img, i) => (
            <button
              key={img}
              role="tab"
              aria-selected={active === i}
              aria-label={`Image ${i + 1} of ${images.length}`}
              className={`${styles.thumb} ${active === i ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
            >
              <Image src={img} alt="" fill sizes="100px" className={styles.thumbImg} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
