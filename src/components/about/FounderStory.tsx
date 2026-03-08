"use client";

import { Section } from "@/components/common/Section";
import Image from "next/image";

export function FounderStory() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-6">
              A Personal Note from the Founder
            </h2>
            <div className="space-y-6 text-stone dark:text-stone-light text-lg leading-relaxed">
              <p>
                [Placeholder: Personal story about technical background and the decision to start Sethify. Why this agency exists and what makes it different.]
              </p>
              <p>
                "I started Sethify because I saw too many small businesses getting sold generic templates for premium prices. I wanted to build something that actually helps businesses grow—with clean code, real strategy, and a hands-on approach."
              </p>
              <p>
                [Placeholder: Brief paragraph about the "gap in the market" — the need for real developers who understand business, not just code.]
              </p>
              <div className="pt-4">
                <p className="font-bold text-ink dark:text-cream text-xl">Sethify Founder</p>
                <p className="text-stone-light">Lead Developer & Strategist</p>
              </div>
            </div>
          </div>
          
          <div className="md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-stone-light/10">
            {/* Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-stone-200 dark:bg-stone-800 text-stone-500">
              <span className="text-lg font-medium">[Founder Photo Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
