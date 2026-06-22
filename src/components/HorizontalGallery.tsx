"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Product } from "@/data/products";
import StatusTag from "./StatusTag";
import styles from "./HorizontalGallery.module.css";

export default function HorizontalGallery({ products }: { products: Product[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const totalWidth = track.scrollWidth - window.innerWidth;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth + window.innerHeight * 0.5}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        tl.to(track, {
          x: -totalWidth,
          ease: "none",
        });
      }, section);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.track} ref={trackRef}>
        {products.map((p) => (
          <article key={p.id} className={styles.slide}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrap}>
                <Image
                  src={`/products/${p.images[0]}`}
                  alt={`${p.brand} ${p.model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className={styles.image}
                  unoptimized={p.images[0].endsWith(".svg")}
                />
              </div>
            </div>
            <div className={styles.infoCol}>
              <span className={`${styles.brand} mono`}>{p.brand.toUpperCase()}</span>
              <h2 className={styles.model}>{p.model}</h2>
              <p className={styles.detail}>{p.detailLine}</p>
              <div className={styles.status}>
                <StatusTag status={p.status} />
              </div>
              <Link href={`/product/${p.id}`} className={`btn btn-outline ${styles.cta}`}>
                View Dossier →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.progressBar} aria-hidden="true">
        <div ref={progressRef} className={styles.progressFill} />
      </div>
    </section>
  );
}
