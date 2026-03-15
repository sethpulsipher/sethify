import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryAISystemsPage } from "@/components/ai-systems/IndustryAISystemsPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Offices | Automate Patient Scheduling | Sethify",
  description: "AI receptionist for dental offices. Answer patient calls 24/7, automate scheduling, reduce no-shows, and fill your calendar without extra front desk staff.",
};

export default function DentalAISystemsPage() {
  return (
    <>
      <Landing
        title="AI Receptionist for Dental Offices"
      />
      <IndustryAISystemsPage
        openingParagraph="Your front desk handles check-ins, insurance questions, follow-ups, and the phone. When all of those happen at once, calls go to voicemail. Voicemails turn into lost patients. An AI receptionist for your dental office answers every call, books appointments, and sends confirmations without pulling your front desk away from the patients already in the chair."
        features={[
          "AI receptionist that answers patient calls 24/7. Handles scheduling, rescheduling, and cancellations.",
          "Dental office automation for the tasks your front desk does not have time for. Appointment reminders via text and email. Reduce no-shows without manual follow-up.",
          "After-hours call handling. Patients booking at 9 PM get the same experience as patients booking at 9 AM.",
          "New patient intake collection before they walk through the door.",
          "Call summaries sent to your front desk after every conversation.",
        ]}
        howItWorks="A patient calls to schedule a cleaning. Your AI receptionist answers, checks available slots, books the appointment, and sends a confirmation text to the patient. Your front desk sees the booking in the calendar. No phone tag. No voicemail. No lost patients."
        crossLink={{
          text: "Need a dental website that attracts new patients?",
          href: "/web-design/dental",
        }}
        image={{
          src: "/images/industries/dental-ai.webp",
          alt: "Dental office front desk with automated scheduling",
        }}
        faqs={[
          {
            question: "What is an AI receptionist for dental offices?",
            answer: "It is an AI-powered system that answers patient phone calls 24/7, handles appointment scheduling, sends confirmation texts, and collects new patient information. It works alongside your front desk, not instead of it.",
          },
          {
            question: "Can it handle rescheduling and cancellations?",
            answer: "Yes. The AI can reschedule, cancel, and confirm appointments. It also sends automated reminders to reduce no-shows without your front desk having to make reminder calls.",
          },
          {
            question: "Does it integrate with my practice management software?",
            answer: "We integrate with most major dental practice management systems. During setup, we connect the AI to your existing calendar and scheduling tools.",
          },
          {
            question: "How much does an AI receptionist cost for a dental office?",
            answer: "Setup ranges from $500 to $2,000 depending on complexity. Monthly management starts at $200/month. We scope every project individually based on your call volume and needs.",
          },
          {
            question: "How does it handle new patient intake?",
            answer: "The AI collects new patient information over the phone or via text, including name, insurance details, reason for visit, and preferred appointment time. This information is ready for your front desk before the patient arrives.",
          },
        ]}
      />
      <FinalCTA
        heading="Fill your calendar without adding front desk staff."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
