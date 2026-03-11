"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X, Ban } from "lucide-react";

export function WebDesignPricing() {
  const plans = [
    {
      name: "Monthly",
      price: "$150",
      period: "/month",
      description: "$150 upfront. Cancel anytime after 12 months.",
      features: [
        "Custom Design & Development",
        "Hosting Included",
        "Unlimited Edits",
        "24/7 Support",
        "Lifetime Updates",
        "+$100/page After 5 Pages",
        "Additional Features Starting at $100"
      ],
      cta: "Get Started",
      featured: true,
      href: "/contact?plan=monthly",
    },
    {
      name: "Lump Sum",
      price: "$3,000",
      period: "one-time",
      description: "50% upfront, 50% on launch. No hosting included.",
      features: [
        "Custom Design & Development",
        "+$25/month Hosting",
        "$100/hour for edits after launch",
        "+$250 To Add A Blog",
        "+$100/page After 5 Pages",
      ],
      discludes: [
        "24/7 Support",
        "Lifetime Updates"
      ],
      cta: "Learn More",
      featured: false,
      href: "/services#web-development",
    },
  ];

  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Choose the model that fits your business. No hidden fees.
          </p>
        </div>

        <div className="grid gap-8 mx-auto mb-24 max-w-lg md:grid-cols-2 md:max-w-4xl lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 lg:p-12 border transition-all duration-300 ${
                plan.featured 
                  ? "bg-white dark:bg-ink border-coral shadow-xl shadow-coral/10 scale-105 z-10" 
                  : "bg-background border-border hover:border-coral/30 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <span className="bg-coral text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-stone dark:text-stone-light mb-2">{plan.name}</h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">{plan.price}</span>
                  <span className="text-lg text-stone-light">{plan.period}</span>
                </div>
                
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
                {plan.discludes?.map((exclude, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Ban className="w-4 h-4 text-stone-light shrink-0 mt-0.5" />
                    <span className="text-stone dark:text-stone-light text-sm md:text-base">{exclude}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                plan.featured 
                  ? "bg-coral hover:bg-coral-dark text-white shadow-lg hover:shadow-coral/20" 
                  : "bg-ink-light hove:bg-ink text-white dark:bg-cream dark:text-ink dark:hover:bg-white"
              }`}>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
         <div className="max-w-4xl mx-auto bg-cream-dark dark:bg-ink-light rounded-2xl p-8 md:p-12">
           <h3 className="text-2xl font-bold text-ink dark:text-cream mb-8 text-center">Why Hand-Coded Websites Beat WordPress Websites</h3>
           <div className="grid md:grid-cols-2 gap-8">
             <div>
               <h4 className="font-bold text-lg mb-4 text-coral">Hand-coded</h4>
               <ul className="space-y-3">
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Loads in 1 second or less</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Better SEO performance</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> More secure (no plugins)</li>
                 <li className="flex gap-2 items-start"><Check className="w-5 h-5 text-coral shrink-0" /> Creative freedom (no templates)</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-lg mb-4 text-stone">WordPress</h4>
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
