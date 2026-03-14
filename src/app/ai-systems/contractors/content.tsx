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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  {
    number: "60-80%",
    label: "of incoming customer calls missed by contractors",
  },
  {
    number: "42%",
    label: "of small businesses lose $500+ every month to missed calls",
  },
  {
    number: "$15K-$75K",
    label: "in lost revenue from a single missed remodel lead",
  },
];

const features = [
  {
    heading: "Answers Every Call. 24/7.",
    body: "Your AI receptionist for contractors picks up the phone every time. Morning, evening, weekends, holidays. It greets callers, asks about their project, answers common questions about your services and service area, and sounds like a professional receptionist. Not a robot.",
  },
  {
    heading: "Books Estimates on Your Calendar.",
    body: "A homeowner calls about a bathroom remodel. Your AI asks about the project, checks your availability, and books an on-site estimate. You get a text with the address, project details, and appointment time. No phone tag. No callbacks. The estimate is booked before you leave the current job site.",
  },
  {
    heading: "Follows Up With Every Lead.",
    body: "Someone fills out a form on your website at 11 PM. Your AI sends a follow-up text within minutes. Someone calls but hangs up before finishing? Follow-up text. No lead gets forgotten. No inquiry goes cold.",
  },
  {
    heading: "Sends You a Summary After Every Call.",
    body: "After every conversation, you get a text or email with the caller's name, phone number, project description, and appointment time. You walk into every estimate prepared.",
  },
];

const processSteps = [
  {
    heading: "We set it up.",
    body: "We configure your AI receptionist with your business details. Services you offer, areas you cover, your availability, and how you want calls handled. Takes about a week.",
  },
  {
    heading: "It answers your calls.",
    body: "When a customer calls, your AI picks up. It has a real conversation. Asks about the project. Answers questions. Books the estimate. Sends you the details.",
  },
  {
    heading: "You show up and close the job.",
    body: "You get a text with everything you need. Address. Project scope. Contact info. You walk in prepared and focused on winning the work.",
  },
];

const faqs = [
  {
    question: "Does it sound like a real person?",
    answer:
      "Yes. Your AI receptionist has natural conversations. It is not a phone tree. Callers talk to it the same way they would talk to a receptionist at your office. It asks follow-up questions, gives real answers, and handles the conversation naturally.",
  },
  {
    question: "What happens if the caller needs to talk to me directly?",
    answer:
      "Your AI can transfer urgent calls to your cell phone based on rules you set. Everything else gets handled and you get a summary after.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "About a week. We configure your AI with your services, service area, availability, and call handling preferences. You test it before it goes live.",
  },
  {
    question: "Does it integrate with my calendar?",
    answer:
      "Yes. Estimates and appointments are booked directly on your calendar. Google Calendar, Outlook, or whatever you use.",
  },
  {
    question: "What if a caller asks something the AI does not know?",
    answer:
      "It tells them honestly that it does not have that information and offers to take a message or transfer the call to you. It does not make things up.",
  },
];

export function ContractorAIContent() {
  return (
    <>
      {/* ── The Problem — stat block + story ── */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Stat block */}
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

            {/* Story body */}
            <div className="lg:col-span-7">
              <p className="text-lg lg:text-xl text-stone dark:text-stone-light leading-relaxed">
                You are on a job site. Your hands are full. A homeowner calls
                about a kitchen remodel. You cannot answer. They call the next
                contractor on Google. By the time you call back that evening,
                they already booked an estimate with someone else. This happens
                every week. The jobs you lose are not the ones you bid wrong.
                They are the ones you never heard about.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── What Your AI Does — stacked alternating blocks, NOT card grid ── */}
      <Section className="py-20 md:py-28 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">Capabilities</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              What Your AI Receptionist Does
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`lg:col-span-7 ${
                    i % 2 === 1 ? "lg:col-start-6" : ""
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-semibold text-ink dark:text-cream mb-4">
                    {feature.heading}
                  </h3>
                  <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── How It Works — 3 steps (simpler than web design) ── */}
      <Section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">Process</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">How It Works</h2>
          </div>

          {/* Desktop: horizontal with connecting line */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border" />
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <span className="inline-block text-5xl font-heading font-bold text-coral mb-6 relative z-10 bg-background px-3">
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

      {/* ── The Math — ROI callout, no pricing cards ── */}
      <Section className="py-20 md:py-28 bg-cream dark:bg-ink-light/50">
        <div className="container-custom">
          <div className="mb-14">
            <span className="label-tag">ROI</span>
            <div className="line-accent" />
            <h2 className="text-ink dark:text-cream">
              The Math on Missed Calls
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-stone dark:text-stone-light leading-relaxed mb-8">
              Say you miss 5 calls a week. Even if only 2 of those were real
              leads, and your average project is worth $20,000, that is $40,000 a
              week in potential revenue you never got a chance to bid on. In a
              month, that is:
            </p>

            <div className="my-10">
              <span className="block text-6xl lg:text-7xl font-bold text-coral font-heading leading-none">
                $160,000
              </span>
              <span className="text-stone dark:text-stone-light text-xl mt-3 block">
                in lost opportunities per month
              </span>
            </div>

            <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
              Your AI answering service costs a fraction of one lost project. It
              pays for itself the first week.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section className="py-20 md:py-28 bg-background">
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

      {/* ── Cross-link — subtle callout ── */}
      <Section className="py-16 bg-coral/5 dark:bg-coral/5">
        <div className="container-custom">
          <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-lg text-ink dark:text-cream leading-relaxed">
              Need a contractor website that ranks on Google and books projects?
              We build those too.
            </p>
            <Link
              href="/web-design/contractors"
              className="inline-flex items-center gap-2 text-coral font-semibold hover:text-coral-dark transition-colors shrink-0 group"
            >
              Contractor website design
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
