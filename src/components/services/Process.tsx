"use client";

import { Section } from "@/components/common/Section";
import { Search, Map, Code, Rocket, LifeBuoy } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We learn about your business, goals, and what's not working.",
    },
    {
      icon: Map,
      title: "Strategy",
      description: "We recommend exactly what you need (not upsell what you don't).",
    },
    {
      icon: Code,
      title: "Build",
      description: "We build it. You see progress along the way.",
    },
    {
      icon: Rocket,
      title: "Launch & Handoff",
      description: "Goes live, we walk you through everything.",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      description: "We don't disappear. Long-term partnership is our goal.",
    },
  ];

  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            How It Works
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            A simple, transparent process from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white dark:bg-ink rounded-full border-4 border-cream dark:border-ink-light flex items-center justify-center mb-6 shadow-sm z-10 group-hover:scale-110 group-hover:border-coral/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-cream-dark dark:bg-ink-light rounded-full flex items-center justify-center text-coral">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="hidden lg:block absolute top-[60px] left-1/2 w-full h-0.5 bg-coral/20 -z-20 transition-all duration-500 w-0 group-hover:w-full origin-left" />

                <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">{step.title}</h3>
                <p className="text-sm text-stone dark:text-stone-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
                
                <div className="absolute top-0 right-0 text-9xl font-bold text-stone-light/5 -z-10 -translate-y-4 translate-x-4 select-none pointer-events-none">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
