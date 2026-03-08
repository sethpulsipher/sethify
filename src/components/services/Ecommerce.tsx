"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, CreditCard, Settings, Users } from "lucide-react";

export function Ecommerce() {
  return (
    <Section id="ecommerce" className="bg-cream-dark dark:bg-ink-light py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Shopify Experts
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-6">
              Online Stores That Sell
            </h2>
            <p className="text-lg text-stone dark:text-stone-light mb-8 leading-relaxed">
              We build custom Shopify experiences that convert visitors into loyal customers. From custom themes to complex app integrations, we handle the technical side so you can focus on your products.
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="bg-white dark:bg-ink p-2 rounded-lg shadow-sm shrink-0">
                  <ShoppingBag className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-ink dark:text-cream">Custom Theme Development</h4>
                  <p className="text-stone dark:text-stone-light text-sm">Unique designs that match your brand perfectly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white dark:bg-ink p-2 rounded-lg shadow-sm shrink-0">
                  <Settings className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-ink dark:text-cream">App Integration & Config</h4>
                  <p className="text-stone dark:text-stone-light text-sm">Seamless connection with your favorite tools.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white dark:bg-ink p-2 rounded-lg shadow-sm shrink-0">
                  <CreditCard className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-ink dark:text-cream">Payment & Shipping Setup</h4>
                  <p className="text-stone dark:text-stone-light text-sm">Frictionless checkout experiences.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white dark:bg-ink p-2 rounded-lg shadow-sm shrink-0">
                  <Users className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-ink dark:text-cream">CMS Training</h4>
                  <p className="text-stone dark:text-stone-light text-sm">We teach you how to manage your store.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button asChild size="lg" className="bg-ink hover:bg-ink-light text-white dark:bg-cream dark:text-ink dark:hover:bg-cream-dark w-full sm:w-auto">
                <Link href="/contact?service=ecommerce">Start Your Store (from $8,000)</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-ink p-8 rounded-3xl shadow-xl border border-border/50 relative">
             <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">LIVE PREVIEW</div>
             <div className="space-y-4 opacity-50 pointer-events-none filter blur-[1px]">
               <div className="h-8 bg-stone-light/20 rounded w-3/4"></div>
               <div className="h-64 bg-stone-light/10 rounded-xl"></div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="h-32 bg-stone-light/10 rounded-xl"></div>
                 <div className="h-32 bg-stone-light/10 rounded-xl"></div>
               </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="bg-background/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg font-bold text-ink dark:text-cream">
                 High-Performance E-Commerce
               </span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
