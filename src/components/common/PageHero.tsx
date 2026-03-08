"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export function PageHero({ title, description, className, children, centered = true }: PageHeroProps) {
  return (
    <section className={cn(
      "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
      className
    )}>
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-cream-dark/50 to-transparent dark:from-ink-light/20 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn("max-w-4xl space-y-6", centered ? "mx-auto text-center" : "")}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink dark:text-cream leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg sm:text-xl text-stone dark:text-stone-light max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {children}
        </motion.div>
      </div>
    </section>
  );
}
