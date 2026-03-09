"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewport?: { once?: boolean; amount?: number };
}

export function Section({ children, delay = 0, className, viewport = { once: true, amount: 0.2 }, ...props }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
        delay 
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={`py-20 md:py-28 lg:py-32 ${className ? className : ""}`}
      {...props as any}
    >
      {children}
    </motion.section>
  );
}
