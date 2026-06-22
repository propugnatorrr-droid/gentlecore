"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation, type AnimationControls } from "framer-motion";

export interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { y = 60, duration = 1.0, delay = 0, stagger = 0.08 } = options;
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-15%" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return { ref, controls, containerVariants, itemVariants };
}

export function useSimpleReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const controls: AnimationControls = useAnimation();
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-15%" });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return {
    ref,
    animate: controls,
    initial: { opacity: 0, y: 60 },
    transition: { duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] },
  };
}
