"use client";

import { Section } from "@/components/common/Section";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Product Brands",
    description: "You have a growing product line and need a store that reflects your brand quality.",
  },
  {
    title: "DTC Companies",
    description: "You sell direct to consumer and need a checkout experience that converts.",
  },
  {
    title: "Established Retailers",
    description: "You are moving online or upgrading from a basic theme that no longer fits.",
  },
  {
    title: "Subscription Businesses",
    description: "You need recurring billing, customer portals, and retention-focused UX.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ShopifyAudience() {
  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Who This Is For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Ecommerce Website Design for Growing Businesses
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            Custom Shopify development is for businesses that have outgrown templates or are launching something worth building right the first time.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 bg-white dark:bg-ink rounded-sm border border-transparent hover:border-coral/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-ink dark:text-cream mb-2">
                {audience.title}
              </h3>
              <p className="text-stone dark:text-stone-light leading-relaxed text-sm">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
