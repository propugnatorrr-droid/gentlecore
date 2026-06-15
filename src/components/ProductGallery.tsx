"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const src = (file: string) => `/products/${file}`;

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <Image
          key={images[active]}
          src={src(images[active])}
          alt={alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          className={styles.mainImg}
          unoptimized={images[active].endsWith(".svg")}
        />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs} role="tablist" aria-label="Product images">
          {images.map((img, i) => (
            <button
              key={img}
              role="tab"
              aria-selected={active === i}
              aria-label={`View image ${i + 1} of ${images.length}`}
              className={`${styles.thumb} ${active === i ? styles.active : ""}`}
              onClick={() => setActive(i)}
            >
              <Image src={src(img)} alt="" fill sizes="90px" className={styles.thumbImg} unoptimized={img.endsWith(".svg")} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
