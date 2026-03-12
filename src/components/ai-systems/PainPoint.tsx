"use client";

import { Section } from "@/components/common/Section";

export function PainPoint() {
  return (
    <Section className="py-24 bg-white dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-6">
              Missed Calls Cost You Money
            </h2>
            <p className="text-lg text-stone dark:text-stone-light leading-relaxed mb-6">
              42% of small businesses lose $500 or more every month to missed calls. Contractors miss 60 to 80% of incoming customer calls because they are on a job site and can not pick up the phone.
            </p>
            <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
              Every unanswered call is a lead that goes to your competitor. AI automation for small business solves this by making sure no call, message, or booking request goes unanswered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-cream dark:bg-ink p-6 rounded-sm border border-border/50 text-center">
              <span className="block text-4xl font-bold text-coral mb-2">42%</span>
              <span className="text-sm text-stone dark:text-stone-light">of small businesses lose $500+/mo to missed calls</span>
            </div>
            <div className="bg-cream dark:bg-ink p-6 rounded-sm border border-border/50 text-center">
              <span className="block text-4xl font-bold text-coral mb-2">60-80%</span>
              <span className="text-sm text-stone dark:text-stone-light">of contractor calls go unanswered</span>
            </div>
            <div className="col-span-2 bg-ink dark:bg-cream p-6 rounded-sm text-center">
              <span className="block text-2xl font-bold text-cream dark:text-ink mb-2">Your AI answers in under 1 second.</span>
              <span className="text-sm text-stone-light dark:text-stone">24 hours a day. 7 days a week. No hold music.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
