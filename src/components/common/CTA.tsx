"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  heading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function FinalCTA({
  heading = "Ready to grow your business?",
  buttonText = "Book Your Free Consultation",
  buttonHref = "/contact",
}: FinalCTAProps) {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden">
{/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-coral/30 to-transparent" />
          <div className="absolute top-1/4 left-12 w-32 h-32 border border-coral/10 rounded-full hidden lg:block" />
          <div className="absolute bottom-1/4 right-24 w-48 h-48 border border-coral/10 rounded-full hidden lg:block" />

          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="label-tag">Get Started</span>
              <div className="line-accent mx-auto mt-4 mb-8" />

              <h2 className="text-cream mb-8 capitalize">
                {heading}
              </h2>

              <p className="text-xl text-stone-light mb-12 max-w-2xl mx-auto">
                Book a free consultation. We'll show you exactly where you're losing money and how to fix it. No obligation, no sales pressure.
              </p>

              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center bg-coral text-white px-10 py-5 text-lg font-medium hover:bg-coral-dark transition-colors duration-300"
                style={{ borderRadius: '2px' }}
              >
                {buttonText}
              </Link>

              <p className="text-stone mt-8 text-sm">
                Typical response time: Under 2 hours during business hours
              </p>
            </div>
          </div>
    </section>
  );
}
