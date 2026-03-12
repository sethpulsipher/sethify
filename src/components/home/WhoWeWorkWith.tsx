"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "HVAC",
    slug: "hvac",
    description: "Heating, cooling, and air quality companies.",
  },
  {
    name: "Dental",
    slug: "dental",
    description: "Dental practices and orthodontic offices.",
  },
  {
    name: "Legal",
    slug: "legal",
    description: "Law firms and solo attorneys.",
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    description: "Plumbing and drain service providers.",
  },
  {
    name: "Contractors",
    slug: "contractors",
    description: "General contractors and home service pros.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export interface WhoWeWorkWithProps {
  className: string;
}

export function WhoWeWorkWith({ className }: WhoWeWorkWithProps) {
  return (
    <Section className={`py-24 ${className ? className : ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <span className="label-tag">Who We Work With</span>
          <div className="line-accent mx-auto"/>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Built for Small Service Businesses
          </h2>

          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            We build websites and AI systems for service businesses that depend on local leads and booked appointments. If your phone ringing means revenue, we can help.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.slug}
              variants={item}
              className="bg-white dark:bg-ink p-6 rounded-sm border border-border/50 hover:border-coral/30 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-ink dark:text-cream mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-stone dark:text-stone-light mb-4">
                {industry.description}
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href={`/web-design/${industry.slug}`}
                  className="inline-flex items-center text-sm text-coral font-medium hover:text-coral-dark transition-colors group/link"
                >
                  Business Websites
                  <ArrowRight className="ml-1 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/ai-systems/${industry.slug}`}
                  className="inline-flex items-center text-sm text-coral font-medium hover:text-coral-dark transition-colors group/link"
                >
                  AI Systems
                  <ArrowRight className="ml-1 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
