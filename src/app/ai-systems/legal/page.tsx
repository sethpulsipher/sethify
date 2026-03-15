import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryAISystemsPage } from "@/components/ai-systems/IndustryAISystemsPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "AI Answering Service for Law Firms | Automate Client Intake | Sethify",
  description: "AI answering service and chatbot for law firms. Answer client calls 24/7, automate intake, and follow up with every lead. No missed consultations.",
};

export default function LegalAISystemsPage() {
  return (
    <>
      <Landing
        title="AI Answering Service for Law Firms"
      />
      <IndustryAISystemsPage
        openingParagraph="Potential clients call when their problem is urgent. Divorce filing. Accident injury. Criminal charge. If nobody answers, they call the next firm on the list. Most law firms lose leads to voicemail during lunch, after hours, and on weekends. An AI answering service for your law firm makes sure every call gets answered and every lead gets captured."
        features={[
          "AI answering service that handles client calls 24/7. Professional, conversational, and trained on your firm's practice areas.",
          "AI client intake for your law firm. Your AI collects case details, contact information, and urgency level before the first consultation. No manual forms. No back-and-forth emails.",
          "After-hours call handling. A potential client calling at 10 PM gets the same experience as one calling at 10 AM.",
          "Lead follow-up sequences. Every inquiry gets a timely response, even when your team is in court.",
          "Chatbot for your law firm website. Visitors get instant answers to common questions and a clear path to book a consultation.",
        ]}
        howItWorks="A potential client calls about a personal injury case. Your AI answering service picks up, asks about the incident, collects their contact details, and schedules a consultation on your calendar. You get a summary with all the case details before the meeting. No missed calls. No lost leads."
        crossLink={{
          text: "Need a law firm website that builds trust and ranks?",
          href: "/web-design/legal",
        }}
        image={{
          src: "/images/industries/legal-ai.webp",
          alt: "Law firm office with AI-powered client intake system",
        }}
        faqs={[
          {
            question: "What is an AI answering service for law firms?",
            answer: "It is an AI-powered system that answers your firm's phone calls 24/7. It greets callers professionally, asks about their legal matter, collects contact and case details, and schedules consultations on your calendar.",
          },
          {
            question: "Is client information kept confidential?",
            answer: "Yes. All data is encrypted and handled with the same security standards you would expect for sensitive legal communications. We do not share or store client data beyond what is needed for your intake workflow.",
          },
          {
            question: "Can the AI handle different practice areas?",
            answer: "Yes. We train the AI on your specific practice areas so it asks the right questions for personal injury, family law, criminal defense, estate planning, or whatever your firm handles.",
          },
          {
            question: "How much does an AI answering service cost for a law firm?",
            answer: "Setup ranges from $500 to $2,000 depending on complexity. Monthly management starts at $200/month. We scope every project individually based on your call volume and practice areas.",
          },
          {
            question: "Does it replace my receptionist or paralegal?",
            answer: "No. It handles the calls your team cannot get to, especially after hours, during lunch, and when they are busy with existing clients. Think of it as backup that never takes a break.",
          },
        ]}
      />
      <FinalCTA
        heading="Stop losing clients to voicemail."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
