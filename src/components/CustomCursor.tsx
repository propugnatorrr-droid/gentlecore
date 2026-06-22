"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let hovering = false;
    let rafId: number;
    const LERP = 0.15;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      const isHover = !!t.closest("a, button, [role='button'], label, select, textarea, input, [tabindex]");
      if (isHover !== hovering) {
        hovering = isHover;
        ringRef.current?.classList.toggle(styles.hovered, hovering);
      }
    };

    const tick = () => {
      curX += (mouseX - curX) * LERP;
      curY += (mouseY - curY) * LERP;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${curX}px,${curY}px,0) translate(-50%,-50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={ringRef} className={styles.cursor} aria-hidden="true">
      <div className={styles.dot} />
    </div>
  );
}
