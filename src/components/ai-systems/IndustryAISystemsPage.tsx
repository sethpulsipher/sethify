"use client";

import { Section } from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryAISystemsPageProps {
  openingParagraph: string;
  features: string[];
  howItWorks: string;
  crossLink: { text: string; href: string };
  image: { src: string; alt: string };
  faqs: FAQ[];
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function IndustryAISystemsPage({
  openingParagraph,
  features,
  howItWorks,
  crossLink,
  image,
  faqs,
}: IndustryAISystemsPageProps) {
  return (
    <>
      {/* Intro — two-column layout like Hero */}
      <Section className="py-24 bg-white dark:bg-ink-light">
        <div className="container-custom">
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
                {openingParagraph}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact" className="btn-primary">
                  <span>Get a Free Quote</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Build — card grid */}
      <Section className="py-24 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="label-tag">What We Build</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              Everything included with your AI system.
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-4 max-w-5xl"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-4 p-6 bg-white dark:bg-ink border border-border/50 hover:border-coral/20 hover:shadow-lg hover:shadow-coral/5 hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderRadius: "2px" }}
              >
                <div className="w-8 h-8 bg-coral/10 text-coral rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-ink dark:text-cream/90 leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="label-tag">How It Works</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream mb-6">
              Simple setup. Immediate results.
            </h2>
            <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
              {howItWorks}
            </p>
          </div>
        </div>
      </Section>

      {/* Cross-Link — inverted card */}
      <Section className="py-20 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <Link
            href={crossLink.href}
            className="group block max-w-4xl bg-ink dark:bg-cream p-8 sm:p-10 hover:shadow-xl transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            <div className="flex items-center justify-between gap-6">
              <p className="text-lg font-medium text-cream dark:text-ink leading-relaxed">
                {crossLink.text}
              </p>
              <ArrowRight className="w-6 h-6 text-coral shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="label-tag">FAQ</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              Common questions
            </h2>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50">
                  <AccordionTrigger className="text-left text-lg font-medium text-ink dark:text-cream hover:text-coral transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone dark:text-stone-light leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
}
