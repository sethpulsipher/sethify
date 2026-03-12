"use client";

import { Section } from "@/components/common/Section";
import { Check, X } from "lucide-react";

export function ShopifyDifference() {
  return (
    <Section className="py-24 bg-white dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Custom vs. Off-the-Shelf
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Why Custom Shopify Development Matters
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            Most Shopify stores use the same handful of themes with minor tweaks. Your customers can tell. Custom Shopify website design means your storefront is built from scratch to match your brand and convert your specific audience. No cookie-cutter layouts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-cream dark:bg-ink p-8 rounded-sm border border-border/50">
            <h3 className="font-bold text-lg mb-6 text-coral">Custom Shopify Storefront</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-coral shrink-0" />
                <span className="text-ink dark:text-cream">Designed around your products and customers</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-coral shrink-0" />
                <span className="text-ink dark:text-cream">Faster load times, better Core Web Vitals</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-coral shrink-0" />
                <span className="text-ink dark:text-cream">Full control over layout, features, and UX</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-coral shrink-0" />
                <span className="text-ink dark:text-cream">Built to scale with your catalog</span>
              </li>
            </ul>
          </div>

          <div className="bg-cream dark:bg-ink p-8 rounded-sm border border-border/50">
            <h3 className="font-bold text-lg mb-6 text-stone">Theme Install</h3>
            <ul className="space-y-4 text-stone dark:text-stone-light">
              <li className="flex gap-3 items-start">
                <X className="w-5 h-5 text-stone-light shrink-0" />
                <span>Same layout as thousands of other stores</span>
              </li>
              <li className="flex gap-3 items-start">
                <X className="w-5 h-5 text-stone-light shrink-0" />
                <span>Bloated code from unused theme features</span>
              </li>
              <li className="flex gap-3 items-start">
                <X className="w-5 h-5 text-stone-light shrink-0" />
                <span>Limited customization without breaking things</span>
              </li>
              <li className="flex gap-3 items-start">
                <X className="w-5 h-5 text-stone-light shrink-0" />
                <span>Dependent on theme developer updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
