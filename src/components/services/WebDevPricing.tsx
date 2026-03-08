"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X } from "lucide-react";

export function WebDevPricing() {
  const plans = [
    {
      name: "Monthly",
      price: "$150",
      period: "/month",
      subtext: "$0 down, 12-month minimum",
      description: "Perfect for small businesses that want a professional site without the large upfront cost.",
      features: [
        "Custom Design & Development",
        "Hosting Included",
        "Unlimited Edits",
        "24/7 Support",
        "Lifetime Updates",
        "SEO Optimization",
        "Google Analytics Setup",
        "Mobile Responsive",
      ],
      cta: "Get Standard Plan",
      href: "/contact?plan=standard",
      highlight: true,
    },
    {
      name: "Lump Sum",
      price: "$2,500",
      period: "one-time",
      subtext: "50% upfront, 50% on completion",
      description: "For businesses that prefer to own their site outright. Includes 3 revision rounds.",
      features: [
        "Custom Design & Development",
        "Ownership of Code",
        "3 Revision Rounds",
        "4-Week Turnaround",
        "Standard Hosting ($25/mo)",
        "SEO Optimization",
        "Google Analytics Setup",
        "Mobile Responsive",
      ],
      cta: "Get Lump Sum Plan",
      href: "/contact?plan=lump-sum",
      highlight: false,
    },
  ];

  return (
    <Section id="web-development" className="bg-background py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Websites That Work As Hard As You Do
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Hand-coded for performance, designed for conversion. Choose the payment model that fits your cash flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-24">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 lg:p-12 border transition-all duration-300 ${
                plan.highlight 
                  ? "bg-white dark:bg-ink border-coral shadow-xl shadow-coral/10 scale-105 z-10" 
                  : "bg-cream dark:bg-ink-light border-transparent"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <span className="bg-coral text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8 text-center pb-8 border-b border-border">
                <h3 className="text-2xl font-bold text-ink dark:text-cream mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">{plan.price}</span>
                  <span className="text-lg text-stone-light">{plan.period}</span>
                </div>
                <p className="text-sm font-medium text-coral">{plan.subtext}</p>
                <p className="mt-4 text-stone dark:text-stone-light leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                    <span className="text-ink dark:text-cream/90 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                plan.highlight 
                  ? "bg-coral hover:bg-coral-dark text-white shadow-lg hover:shadow-coral/20" 
                  : "bg-ink dark:bg-cream text-white dark:text-ink hover:bg-ink-light dark:hover:bg-cream-dark"
              }`}>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
         <div className="max-w-4xl mx-auto bg-cream-dark dark:bg-ink-light rounded-2xl p-8 md:p-12">
           <h3 className="text-2xl font-bold text-ink dark:text-cream mb-8 text-center">Why Hand-Coded vs. WordPress?</h3>
           <div className="grid md:grid-cols-2 gap-8">
             <div>
               <h4 className="font-bold text-lg mb-4 text-coral">Sethify (Hand-Coded)</h4>
               <ul className="space-y-3">
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Faster load times (no bloat)</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Better SEO performance</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> More secure (no plugins)</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Cleaner, maintainable code</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-lg mb-4 text-stone">Page Builders / WordPress</h4>
               <ul className="space-y-3 text-stone dark:text-stone-light">
                 <li className="flex gap-2 items-start"><X className="w-5 h-5 text-stone-light shrink-0" /> Slow loading due to bloat</li>
                 <li className="flex gap-2 items-start"><X className="w-5 h-5 text-stone-light shrink-0" /> Constant plugin updates needed</li>
                 <li className="flex gap-2 items-start"><X className="w-5 h-5 text-stone-light shrink-0" /> Vulnerable to security hacks</li>
                 <li className="flex gap-2 items-start"><X className="w-5 h-5 text-stone-light shrink-0" /> Restricted by template limits</li>
               </ul>
             </div>
           </div>
         </div>
      </div>
    </Section>
  );
}
