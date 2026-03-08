"use client";

import { Section } from "@/components/common/Section";
import { Handshake, Search, Scale, Sparkles } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Scale,
      title: "Quality Over Quantity",
      description: "We don't just fill a pipeline. We take on projects we can deliver exceptionally well, giving each client the attention they deserve.",
    },
    {
      icon: Search,
      title: "Transparency",
      description: "Clear pricing, clear timelines, no surprises. We believe in open communication throughout the entire process.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description: "We don't disappear after launch. Your ongoing success is our success, and we're here to support you as you grow.",
    },
    {
      icon: Sparkles,
      title: "Technology That Serves You",
      description: "We implement what works for your specific needs, not just what's trendy. Practical, effective solutions.",
    },
  ];

  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide uppercase text-coral">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            What We Stand For 
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Our guiding principles that define how we work and what we believe in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6 items-start p-6 rounded-2xl bg-white dark:bg-ink/50 border border-transparent hover:border-coral/20 transition-all duration-300">
              <div className="shrink-0 w-12 h-12 bg-coral/10 text-coral rounded-xl flex items-center justify-center mt-1">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">{value.title}</h3>
                <p className="text-stone dark:text-stone-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
