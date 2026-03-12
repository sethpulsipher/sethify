"use client";

import { Section } from "@/components/common/Section";
import { Phone, MessageSquare, CalendarCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Phone,
    title: "AI Phone Answering Service",
    description: "Your AI receptionist picks up every call, qualifies the lead, and routes urgent requests to you instantly.",
  },
  {
    icon: MessageSquare,
    title: "SMS & Chat Follow-Up",
    description: "Automatic text responses after missed calls. Keeps the conversation going while you finish the job.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Callers book directly into your calendar. No back-and-forth. No double bookings.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Your AI virtual receptionist screens calls and collects the info you need before you call back.",
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

export function AIReceptionist() {
  return (
    <Section className="py-24 bg-cream dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-coral mb-2 block">
            Core Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            AI Receptionist & Answering Service
          </h2>
          <p className="text-lg text-stone dark:text-stone-light leading-relaxed">
            An AI answering service that handles your calls the way you would. It answers questions about your business, books appointments, and sends you a summary of every conversation. Works around the clock so you never lose a lead.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-5 p-6 bg-white dark:bg-ink rounded-sm border border-transparent hover:border-coral/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-coral/10 text-coral rounded-sm flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink dark:text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone dark:text-stone-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
