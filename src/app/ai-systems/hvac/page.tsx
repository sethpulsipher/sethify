import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryAISystemsPage } from "@/components/ai-systems/IndustryAISystemsPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "AI Phone System for HVAC Companies | Never Miss a Service Call | Sethify",
  description: "AI phone system and automated scheduling for HVAC companies. Answer every call, book every job, and follow up with every lead. 24/7.",
};

export default function HVACAISystemsPage() {
  return (
    <>
      <Landing
        title="AI Phone System for HVAC Companies"
      />
      <IndustryAISystemsPage
        openingParagraph="HVAC is one of the highest-volume call industries in home services. Your phone rings during emergencies, after hours, and on weekends. Every missed call is a lost job. Contractors miss 60-80% of incoming customer calls. An AI phone system for your HVAC company answers every one of them."
        features={[
          "AI receptionist that answers calls 24/7. No hold music. No voicemail.",
          "Automated scheduling synced to your calendar. Callers book their own service window.",
          "After-hours call handling. Your AI answers the same way at 2 AM as it does at 2 PM.",
          "Lead follow-up sequences triggered when a form is submitted or a call is missed.",
          "Call summaries sent to your phone after every conversation.",
        ]}
        howItWorks="Your AI receptionist greets callers, asks about their issue, checks your availability, and books the appointment. You get a text with the details. No back-and-forth. No phone tag. The customer is booked before you finish the current job."
        crossLink={{
          text: "Need an HVAC website that ranks and converts?",
          href: "/web-design/hvac",
        }}
        image={{
          src: "/images/industries/hvac-ai.webp",
          alt: "HVAC company phone system handling customer calls",
        }}
        faqs={[
          {
            question: "What is an AI phone system for HVAC companies?",
            answer: "It is an AI-powered receptionist that answers your business phone calls 24/7. It greets callers, asks about their HVAC issue, checks your calendar, and books the appointment. You get a text summary after every call.",
          },
          {
            question: "Does it handle emergency HVAC calls?",
            answer: "Yes. The AI can identify emergency situations like no heat in winter or AC failures in summer and prioritize those calls. It can route urgent calls directly to you or book the next available emergency slot.",
          },
          {
            question: "How much does an AI phone system cost?",
            answer: "Setup ranges from $500 to $2,000 depending on complexity. Monthly management starts at $200/month. We scope every project individually based on your call volume and needs.",
          },
          {
            question: "How long does setup take?",
            answer: "Most HVAC AI phone systems are live within 1-2 weeks. We train the AI on your services, service area, pricing structure, and scheduling preferences before it goes live.",
          },
          {
            question: "Will callers know they are talking to an AI?",
            answer: "The AI is conversational and natural. Most callers do not notice a difference. It handles scheduling, questions about your services, and basic troubleshooting just like a trained receptionist would.",
          },
        ]}
      />
      <FinalCTA
        heading="Stop losing jobs to missed calls."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
