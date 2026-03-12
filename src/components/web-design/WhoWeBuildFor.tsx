"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { name: "HVAC", slug: "hvac" },
  { name: "Dental", slug: "dental" },
  { name: "Legal", slug: "legal" },
  { name: "Plumbing", slug: "plumbing" },
  { name: "Contractors", slug: "contractors" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function WhoWeBuildFor() {
  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Web Design Services for Small Business
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            We specialize in small business website design for service companies that rely on local customers. Your website should work as hard as you do.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div key={industry.slug} variants={item}>
              <Link
                href={`/web-design/${industry.slug}`}
                className="flex items-center justify-between p-5 bg-white dark:bg-ink rounded-sm border border-border/50 hover:border-coral/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="font-semibold text-ink dark:text-cream">
                  {industry.name}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-light group-hover:text-coral group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
