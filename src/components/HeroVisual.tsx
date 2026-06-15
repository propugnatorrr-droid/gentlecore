"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroVisual.module.css";

// Editorial hero plate with a quiet scroll-driven parallax drift.
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "11%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <motion.div
      ref={ref}
      className={styles.visual}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <span className={styles.kicker} aria-hidden="true">N° 01</span>
      <span className={styles.side} aria-hidden="true">Private Preview</span>
      <motion.div className={styles.imgWrap} style={{ y, scale }}>
        <Image
          src="/products/hero.svg"
          alt="A piece from the Gentle Outlet private preview"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 46vw"
          className={styles.img}
          unoptimized
        />
      </motion.div>
      <span className={styles.badge}>Presented for private acquisition</span>
    </motion.div>
  );
}
