"use client";

import { useEffect, useRef } from "react";
import styles from "./PhilosophyScene.module.css";

const lines = [
  "We do not sell loudly.",
  "We authenticate honestly.",
  "We present only what we would acquire ourselves.",
];

export default function PhilosophyScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          pinSpacing: true,
        });

        linesRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: `top+=${i * 80} top`,
                end: `top+=${i * 80 + 200} top`,
                scrub: false,
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, section);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.scene}>
      <div className={styles.inner}>
        {lines.map((line, i) => (
          <p
            key={line}
            ref={(el) => { linesRef.current[i] = el; }}
            className={styles.line}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
