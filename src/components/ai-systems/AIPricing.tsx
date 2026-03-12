"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export function AIPricing() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            AI Automation Pricing
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Custom setup based on your workflows. No long-term contracts required.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-ink border border-border/50 rounded-sm p-8 lg:p-12">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">$500 - $2,000</span>
            </div>
            <p className="text-stone dark:text-stone-light mb-2">One-time setup. Price depends on the number of automations and complexity.</p>
            <p className="text-stone dark:text-stone-light mb-8">
              Monthly management from <span className="font-semibold text-ink dark:text-cream">$200/mo</span>.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">AI Receptionist & Phone Answering</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Automated Scheduling & Reminders</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Lead Follow-Up Sequences</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Review Collection Automation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">CRM & Calendar Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-ink dark:text-cream/90">Website Chatbot</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full bg-coral hover:bg-coral-dark text-white shadow-lg hover:shadow-coral/20 py-6 text-lg rounded-sm">
              <Link href="/contact?service=ai-systems">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
