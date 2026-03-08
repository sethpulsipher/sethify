"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  const faqs = [
    {
      question: "How long does a website take?",
      answer: "Typically 2-4 weeks for standard sites depending on complexity and content readiness. Larger e-commerce projects may take 4-8 weeks.",
    },
    {
      question: "Do you work with businesses outside the US?",
      answer: "Yes, we serve businesses globally, though our primary market is in the US. We are a remote-first agency.",
    },
    {
      question: "What if I need changes after launch?",
      answer: "Our monthly plans include unlimited edits. Lump-sum projects come with a dedicated support period, and we offer maintenance packages afterward.",
    },
    {
      question: "Do I need both a website and AI automation?",
      answer: "Not necessarily. We meet you where you are. Many clients start with web development and add automation as their business grows.",
    },
    {
      question: "What if I already have a website?",
      answer: "We can rebuild, redesign, or add AI automation to your existing setup. We often migrate clients from Wix/Squarespace to custom code for better performance.",
    },
  ];

  return (
    <div className="space-y-12 h-full flex flex-col justify-center">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-ink dark:text-cream uppercase tracking-wider mb-6 border-b pb-4">Contact Information</h3>
        
        <ul className="space-y-6">
          <li className="flex items-start gap-4 p-4 bg-cream dark:bg-ink-light/50 rounded-xl hover:bg-cream-dark transition-colors">
            <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-cream">Email Us</p>
              <a href="mailto:hello@sethify.com" className="text-stone dark:text-stone-light hover:text-coral transition-colors">hello@sethify.com</a>
            </div>
          </li>
          
          <li className="flex items-start gap-4 p-4 bg-cream dark:bg-ink-light/50 rounded-xl hover:bg-cream-dark transition-colors">
            <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-cream">Call Us</p>
              <a href="tel:+15551234567" className="text-stone dark:text-stone-light hover:text-coral transition-colors">+1 (555) 123-4567</a>
            </div>
          </li>

          <li className="flex items-start gap-4 p-4 bg-cream dark:bg-ink-light/50 rounded-xl hover:bg-cream-dark transition-colors">
            <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-cream">Availability</p>
              <p className="text-stone dark:text-stone-light">Mon-Fri, 9am - 5pm EST<br/>24/7 Emergency Support for Monthly Plans</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-ink dark:text-cream uppercase tracking-wider mb-6 border-b pb-4">Common Questions</h3>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-stone-200 dark:border-stone-800">
              <AccordionTrigger className="text-left font-medium text-ink dark:text-cream hover:text-coral transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone dark:text-stone-light leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
