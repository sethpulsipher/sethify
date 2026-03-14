"use client";

import { Section } from "@/components/common/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { number: "60-80%", label: "of contractor calls go unanswered while on the job site" },
  { number: "85%", label: "of homeowners search online before hiring a contractor" },
  { number: "$15K-$75K", label: "average remodel project value. One lost lead is one lost project." },
];

const features = [
  {
    heading: "Hand-Coded From Scratch",
    body: "No WordPress. No Squarespace. No templates from a marketplace. Your site is built line by line for speed, control, and search rankings.",
  },
  {
    heading: "Built for Phones First",
    body: "Homeowners search for contractors on their phone while standing in the room they want remodeled. Your site works perfectly on every screen size.",
  },
  {
    heading: "Project Portfolio",
    body: "Photos and descriptions of your completed work. Before and after shots. Project scope and timeline. Let your work sell the next job.",
  },
  {
    heading: "SEO That Targets Your Area",
    body: "Your site ranks for \"[your city] general contractor\" and the surrounding zip codes. Not vanity keywords. The searches your customers type when they need work done.",
  },
  {
    heading: "Quote Request on Every Page",
    body: "Contact form and click-to-call button on every page. A homeowner should never have to hunt for a way to reach you.",
  },
  {
    heading: "Fast Load Times",
    body: "Every site scores 90+ on Google PageSpeed. Slow sites get buried in search results and frustrate visitors. Yours will not.",
  },
];

const portfolio = [
  { label: "Kitchen Remodel", result: "Generated 40+ quote requests in the first 3 months" },
  { label: "New Construction", result: "Ranked #1 for \"[city] custom home builder\" within 90 days" },
  { label: "Commercial Buildout", result: "3x increase in commercial project inquiries after launch" },
];

const processSteps = [
  {
    heading: "Tell us about your business.",
    body: "Fill out a short form or book a call. We learn what kind of work you do, where you operate, and what your customers look for.",
  },
  {
    heading: "We plan your site.",
    body: "We map out the pages, write the content, and nail down the design direction before any code gets written. You approve everything before we build.",
  },
  {
    heading: "We build it.",
    body: "Hand-coded, mobile-first, SEO-optimized. You see progress along the way and give feedback in real time.",
  },
  {
    heading: "Launch.",
    body: "Your site goes live. We handle DNS, hosting setup, and make sure every page loads fast and ranks. You start getting quote requests.",
  },
];

const faqs = [
  {
    question: "How long does it take to build a contractor website?",
    answer: "Most projects launch within 3-4 weeks. Complex sites with large portfolios or multiple service areas take closer to 5-6 weeks.",
  },
  {
    question: "Do I need to write the content?",
    answer: "No. We write all the copy based on a kickoff conversation about your business. You review and approve before anything goes live.",
  },
  {
    question: "Will my site show up on Google?",
    answer: "Every site is built with SEO best practices from day one. We optimize for local search terms like \"[your city] general contractor\" and set up your Google Business Profile integration.",
  },
  {
    question: "What if I already have a website?",
    answer: "We handle the full migration. Your existing domain transfers over. We rebuild from scratch so nothing from the old site carries over except the URL.",
  },
  {
    question: "Can I update the site myself?",
    answer: "Subscription clients send us update requests and we handle them. One-time clients own the code and can hire anyone to make changes, or come back to us.",
  },
];

export function ContractorWebDesignContent() {
  return (
    <>
      {/* ── The Problem ── */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Stat block — large editorial numbers, no icons */}
            <div className="lg:col-span-5 space-y-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="block text-5xl lg:text-6xl font-bold text-coral font-heading leading-none">
                    {stat.number}
                  </span>
                  <span className="text-stone dark:text-stone-light text-lg mt-2 block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="lg:col-span-7">
              <p className="text-lg lg:text-xl text-stone dark:text-stone-light leading-relaxed">
                Your competitors are getting the jobs you should be getting. Not
                because they do better work. Because their website shows up when
                homeowners search. Because it loads fast on a phone. Because it
                shows finished projects and makes it easy to request a quote.
                Good contractor website design is not about looking pretty. A bad
                website costs you real money every month.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── What Your Website Includes — 3×2 card grid, no icons ── */}
      <Section className="py-20 md:py-28 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">What You Get</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              What Your Website Includes
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white dark:bg-ink p-8 lg:p-10"
                style={{ borderRadius: "2px" }}
              >
                <h3 className="text-xl font-semibold text-ink dark:text-cream mb-3">
                  {feature.heading}
                </h3>
                <p className="text-stone dark:text-stone-light leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── Portfolio / Proof — staggered placeholders ── */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">Results</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              Work That Speaks for Itself
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {portfolio.map((project, i) => {
              const colors = [
                "bg-cream-dark dark:bg-ink-light",
                "bg-stone/10 dark:bg-stone/20",
                "bg-coral/5 dark:bg-coral/10",
              ];
              return (
                <div
                  key={i}
                  className={`relative aspect-4/3 group ${i === 1 ? "md:translate-y-8" : ""}`}
                  style={{ borderRadius: "2px", overflow: "hidden" }}
                >
                  <div className={`absolute inset-0 ${colors[i]}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-coral block mb-2">
                      {project.label}
                    </span>
                    <p className="text-ink dark:text-cream font-medium leading-snug">
                      {project.result}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── How It Works — horizontal steps with large numerals ── */}
      <Section className="py-20 md:py-28 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">Process</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">How It Works</h2>
          </div>

          {/* Desktop: horizontal with connecting line */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-border" />
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <span className="inline-block text-5xl font-heading font-bold text-coral mb-6 relative z-10 bg-cream dark:bg-ink-light/50 px-3">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink dark:text-cream mb-2">
                  {step.heading}
                </h3>
                <p className="text-stone dark:text-stone-light leading-relaxed text-sm">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-10">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-heading font-bold text-coral shrink-0 leading-none mt-1">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink dark:text-cream mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-stone dark:text-stone-light leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Pricing — two cards, same pattern as /web-design ── */}
      <Section id="pricing" className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">Pricing</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">Pricing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
            {/* One-Time */}
            <div
              className="relative bg-background border border-border hover:border-coral/30 hover:shadow-lg transition-all duration-300 p-8 lg:p-12"
              style={{ borderRadius: "2px" }}
            >
              <h3 className="text-xl font-semibold text-stone dark:text-stone-light mb-2">
                One-Time
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">
                  $3,000
                </span>
              </div>
              <p className="text-stone dark:text-stone-light leading-relaxed mb-6">
                You own the site outright. We build it, hand it off, and you
                host it wherever you want. No monthly fees. No lock-in.
              </p>
              <p className="text-sm text-stone dark:text-stone-light leading-relaxed">
                <span className="font-semibold text-ink dark:text-cream">
                  Includes:
                </span>{" "}
                Custom design, mobile optimization, SEO setup, contact forms,
                portfolio section, and launch support.
              </p>
            </div>

            {/* Subscription */}
            <div
              className="relative bg-white dark:bg-ink border border-coral shadow-xl shadow-coral/10 p-8 lg:p-12"
              style={{ borderRadius: "2px" }}
            >
              <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                <span className="bg-coral text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-stone dark:text-stone-light mb-2">
                Subscription
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-ink dark:text-cream">
                  $150
                </span>
                <span className="text-lg text-stone-light">/month</span>
              </div>
              <p className="text-stone dark:text-stone-light leading-relaxed mb-6">
                12-month minimum. We build, host, maintain, and update your
                site. No large upfront cost. Cancel after 12 months if it is not
                working.
              </p>
              <p className="text-sm text-stone dark:text-stone-light leading-relaxed">
                <span className="font-semibold text-ink dark:text-cream">
                  Includes:
                </span>{" "}
                Everything in the one-time option plus hosting, maintenance,
                content updates, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section className="py-20 md:py-28 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">FAQ</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">Common Questions</h2>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-ink dark:text-cream hover:text-coral transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone dark:text-stone-light leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Cross-link — subtle callout, not a banner ad ── */}
      <Section className="py-16 bg-coral/5 dark:bg-coral/5">
        <div className="container-custom">
          <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-lg text-ink dark:text-cream leading-relaxed">
              We also build AI answering systems for contractors. Answer every
              call, book every estimate, and follow up with every lead. Even when
              you are on the job site.
            </p>
            <Link
              href="/ai-systems/contractors"
              className="inline-flex items-center gap-2 text-coral font-semibold hover:text-coral-dark transition-colors shrink-0 group"
            >
              Learn about AI for contractors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
