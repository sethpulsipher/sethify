"use client";

import { Section } from "@/components/common/Section";
import { Zap, MonitorSmartphone, Code2, HeartHandshake, SearchCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function WhyHandCoded() {
  const features = [
    // ... features array unchanged
    {
      icon: MonitorSmartphone,
      title: "Mobile-First Design",
      description: "Optimized for every screen size, ensuring a perfect experience on any device.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Load Times",
      description: "No bloated code. We build for speed to keep your visitors engaged.",
    },
    {
      icon: Code2,
      title: "100% Hand-Coded",
      description: "Clean, efficient code. No drag-and-drop builders or heavy templates.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support & Updates",
      description: "We don't just launch and leave. We're your long-term digital partner.",
    },
    {
      icon: SearchCheck,
      title: "SEO-Optimized",
      description: "Built with search engines in mind to help your customers find you easily.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description: "No vulnerable plugins. Static site architecture means fewer security risks.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            What Sets Us Apart 
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Better websites for your small business.
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            No WordPress. No page builders. We design and develop hand-coded websites that are fast, secure, and built to grow with your business.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream dark:bg-ink-light/50 border border-transparent hover:border-coral/20 hover:bg-cream-dark dark:hover:bg-ink-light transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-coral/5"
            >
              <div className="w-12 h-12 bg-coral/10 text-coral rounded-xl flex items-center justify-center mb-6 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-ink dark:text-cream">{feature.title}</h3>
              <p className="text-stone dark:text-stone-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
