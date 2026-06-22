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
  const src = (f: string) => `/products/${f}`;
  const isSvg = (f: string) => f.endsWith(".svg");

  return (
    <div className={styles.gallery}>
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
              <Image
                src={src(img)}
                alt=""
                fill
                sizes="80px"
                className={styles.thumbImg}
                unoptimized={isSvg(img)}
              />
            </button>
          ))}
        </div>
      )}

      <div className={styles.main}>
        {images.map((img, i) => (
          <div
            key={img}
            className={`${styles.mainSlide} ${i === active ? styles.mainSlideActive : ""}`}
            aria-hidden={i !== active}
          >
            <Image
              src={src(img)}
              alt={i === 0 ? alt : ""}
              fill
              priority={i === 0}
              sizes="(max-width: 900px) 100vw, 60vw"
              className={styles.mainImg}
              unoptimized={isSvg(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
