"use client";

import { Section } from "@/components/common/Section";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sell",
    description: "We talk about your business, goals, and what you need. If we are a good fit, we send a proposal.",
  },
  {
    number: "02",
    title: "Define",
    description: "We map out your sitemap, content, and design direction. You approve before we write a line of code.",
  },
  {
    number: "03",
    title: "Build",
    description: "We design and hand-code your site. You get progress updates and a staging link to review.",
  },
  {
    number: "04",
    title: "Ship",
    description: "We launch your site, set up analytics, and make sure everything runs. Then we stick around for support.",
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

export function WebDesignProcess() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            How We Build Your Website
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Four steps from first call to live site. No surprises.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative p-6 bg-cream dark:bg-ink-light/50 rounded-sm border border-transparent hover:border-coral/20 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-coral/15 absolute top-4 right-4">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">
                {step.title}
              </h3>
              <p className="text-stone dark:text-stone-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
