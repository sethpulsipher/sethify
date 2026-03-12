"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export function ShopifyPricing() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Shopify Development Pricing
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Custom ecommerce website design starts at $8,000. Price depends on catalog size, integrations, and design complexity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-ink border border-border/50 rounded-sm p-8 lg:p-12">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">$8,000+</span>
            </div>
            <p className="text-stone dark:text-stone-light mb-8">
              50% upfront, 50% on launch. Includes design, development, and launch support.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Custom Shopify Theme Development</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Mobile-First Responsive Design</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Payment & Shipping Configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">App Integration & Setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">SEO & Performance Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">CMS Training So You Can Manage Products</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full bg-coral hover:bg-coral-dark text-white shadow-lg hover:shadow-coral/20 py-6 text-lg rounded-sm">
              <Link href="/contact?service=shopify">Start Your Store</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
