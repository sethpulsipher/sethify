import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryAISystemsPage } from "@/components/ai-systems/IndustryAISystemsPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Automated Scheduling for Plumbers | AI Phone Answering | Sethify",
  description: "Automated scheduling and AI phone answering for plumbers. Answer every call, book every job, and follow up with every lead. 24/7. Even during emergencies.",
};

export default function PlumbingAISystemsPage() {
  return (
    <>
      <Landing
        title="Automated Scheduling & AI Phone Answering for Plumbers"
      />
      <IndustryAISystemsPage
        openingParagraph="You are under a sink or inside a crawl space when the phone rings. You cannot answer. The homeowner hangs up and calls the next plumber. This happens five, ten, twenty times a week. Every missed call is a missed job. Automated scheduling for plumbers paired with AI phone answering makes sure every call gets picked up and every job gets booked."
        features={[
          "Automated scheduling for your plumbing business synced to your calendar. Homeowners book their own service window without waiting for a callback.",
          "AI phone answering that picks up every call. 24/7. Handles emergency calls the same way it handles routine scheduling.",
          "After-hours and weekend call handling. Plumbing emergencies do not follow business hours. Your AI does not either.",
          "Lead follow-up. Every missed form submission or abandoned call gets a follow-up message.",
          "Job summaries sent to your phone after every booked appointment.",
        ]}
        howItWorks="A homeowner calls about a leaking water heater. Your AI answers, asks about the issue and location, checks your availability, and books the appointment. You get a text with the address and problem description. You show up. You get paid. No callbacks. No voicemail."
        crossLink={{
          text: "Need a plumbing website that ranks and converts?",
          href: "/web-design/plumbing",
        }}
        image={{
          src: "/images/industries/plumbing-ai.jpg",
          alt: "Plumber on the job receiving automated booking notifications",
        }}
        faqs={[
          {
            question: "What is automated scheduling for plumbers?",
            answer: "It is an AI-powered system that answers your phone calls and books jobs directly on your calendar. Homeowners describe their plumbing issue, the AI checks your availability, and the appointment is booked. You get a text with the details.",
          },
          {
            question: "Does it handle emergency plumbing calls?",
            answer: "Yes. The AI can identify emergency situations like burst pipes or sewer backups and prioritize those calls. It can route emergencies directly to your phone or book the next available slot.",
          },
          {
            question: "How much does AI phone answering cost for plumbers?",
            answer: "Setup ranges from $500 to $2,000 depending on complexity. Monthly management starts at $200/month. We scope every project individually based on your call volume and needs.",
          },
          {
            question: "Can it handle calls when I am on a job?",
            answer: "That is exactly what it is built for. The AI answers every call whether you are under a house, driving to the next job, or done for the day. You never miss a lead.",
          },
          {
            question: "How long does it take to set up?",
            answer: "Most plumbing AI phone systems are live within 1-2 weeks. We train the AI on your services, service area, pricing, and scheduling preferences before it goes live.",
          },
        ]}
      />
      <FinalCTA
        heading="Stop losing jobs while you are on the job."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
