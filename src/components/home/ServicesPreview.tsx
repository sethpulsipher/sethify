"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Smartphone, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesPreview() {
  return (
    <Section className="bg-cream-dark dark:bg-ink-light py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Custom Websites and AI <br /> Systems for Every Stage of Growth
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            We provide hand-coded website design and development, AI automation solutions, and integration services that help small businesses capture more leads, book more appointments, and run without the busywork. Whether you need a new site or want to automate your operations, we have a solution that fits your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Web Development Card */}
          <motion.div 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-card text-card-foreground rounded-3xl p-8 sm:p-12 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-coral/5 transition-all duration-300 border border-border/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-cream text-coral rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-ink dark:text-cream">Custom Business Websites</h3>
              <p className="text-stone dark:text-stone-light text-lg mb-8 leading-relaxed flex-grow">
                Professional websites that convert. Clean code, fast performance, designed to grow with your business. Straightforward pricing, clear deliverables, no surprises.
              </p>
              
              <Link href="/services#web-development" className="inline-flex items-center text-coral font-semibold hover:text-coral-dark transition-colors group/link mt-auto">
                Explore Web Services 
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* AI Automation Card */}
          <motion.div 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-card text-card-foreground rounded-3xl p-8 sm:p-12 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 border border-border/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-cream text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-ink dark:text-cream">AI Automation</h3>
              <p className="text-stone dark:text-stone-light text-lg mb-8 leading-relaxed flex-grow">
                AI that actually works for your business. We implement automation that captures leads, books appointments, and handles the operational tasks that slow you down.
              </p>
              
              <Link href="/services#ai-automation" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link mt-auto">
                Explore Automation 
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
