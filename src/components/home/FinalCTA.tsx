"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section className="py-24 bg-coral text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-coral-dark/50 mix-blend-overlay" />
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rotate-12 blur-3xl transform scale-150" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Ready to Get the Site<br className="hidden sm:block" /> You Always Wanted?
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let&apos;s build something amazing together. No templates, no shortcuts. Just results.
        </p>
        
        <div className="flex justify-center">
          <Link href="/contact" className="btn-primary">
            <span>
              Book Your Free Consultation <ArrowRight className="w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
