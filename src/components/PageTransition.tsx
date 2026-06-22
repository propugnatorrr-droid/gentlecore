"use client";

import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 1.02 },
  enter:   { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}
