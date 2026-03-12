"use client";

import { Section } from "@/components/common/Section";
import { CalendarDays, Star, MailCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const automations = [
  {
    icon: CalendarDays,
    title: "Automated Scheduling",
    description: "Customers book online or through your AI receptionist. Confirmation texts and reminders go out automatically.",
  },
  {
    icon: Star,
    title: "Review Collection",
    description: "After every completed job, your system asks for a Google review. More reviews, better local rankings.",
  },
  {
    icon: MailCheck,
    title: "Lead Follow-Up",
    description: "New leads get an instant response. If they do not book, your system follows up on a schedule you set.",
  },
  {
    icon: Workflow,
    title: "Tool Integrations",
    description: "Connect your CRM, calendar, and email. Data flows between your tools without manual entry.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AutomatedScheduling() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Beyond the Phone
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Automated Scheduling & Workflows
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            Workflow automation for small business goes further than answering calls. We build systems that handle scheduling, follow-ups, review requests, and data entry so you spend less time on admin work.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {automations.map((auto, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-5 p-6 bg-cream dark:bg-ink-light/50 rounded-sm border border-transparent hover:border-coral/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 text-coral rounded-sm flex items-center justify-center shrink-0">
                <auto.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink dark:text-cream mb-2">
                  {auto.title}
                </h3>
                <p className="text-stone dark:text-stone-light leading-relaxed text-sm">
                  {auto.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
