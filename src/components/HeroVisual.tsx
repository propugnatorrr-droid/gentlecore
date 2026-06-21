"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroVisual.module.css";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className={styles.imgWrap} style={{ y, scale }}>
        <Image
          src="/products/hero.svg"
          alt="A piece from the Gentle Outlet private preview"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.img}
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}
