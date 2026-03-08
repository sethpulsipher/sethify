"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, Mic2, Briefcase } from "lucide-react";

export function AIAutomation() {
  return (
    <Section id="ai-automation" className="bg-background py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Intelligent Automation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Stop Losing Leads. Start Automating.
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            We build systems that work 24/7 so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream dark:bg-ink-light p-8 rounded-2xl border border-transparent hover:border-indigo-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">AI Chatbots</h3>
            <p className="text-stone dark:text-stone-light leading-relaxed">
              Customer-facing chatbots that answer questions, qualify leads, and book appointments 24/7.
            </p>
          </div>
          
          <div className="bg-cream dark:bg-ink-light p-8 rounded-2xl border border-transparent hover:border-indigo-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              <Mic2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">AI Voice Agents</h3>
            <p className="text-stone dark:text-stone-light leading-relaxed">
              Phone agents that handle inbound calls, route inquiries, and never put anyone on hold.
            </p>
          </div>
          
          <div className="bg-cream dark:bg-ink-light p-8 rounded-2xl border border-transparent hover:border-indigo-500/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink dark:text-cream mb-3">Workflow Automation</h3>
            <p className="text-stone dark:text-stone-light leading-relaxed">
              Connect your tools (CRM, email, scheduling) so data flows automatically and nothing falls through the cracks.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-indigo-100 dark:border-indigo-900/30">
          <h3 className="text-2xl font-bold text-ink dark:text-cream mb-2">Automate Your Growth</h3>
          <p className="text-stone dark:text-stone-light mb-8 max-w-2xl mx-auto">
            Custom setup starting at <span className="font-bold text-indigo-600 dark:text-indigo-400">$500 – $2,000</span> depending on complexity. 
            Monthly management from <span className="font-bold text-indigo-600 dark:text-indigo-400">$200/mo</span>.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/20">
            <Link href="/contact?service=automation">Get a Custom Quote</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
