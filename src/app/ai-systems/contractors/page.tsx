import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { FinalCTA } from "@/components/common/CTA";
import { ContractorAIContent } from "./content";

export const metadata: Metadata = {
  title: "AI Answering Service for Contractors | Stop Losing Leads | Sethify",
  description:
    "AI answering service and AI receptionist for contractors. Answer every call on the job site, book estimates automatically, and follow up with every lead. 24/7.",
};

export default function ContractorsAISystemsPage() {
  return (
    <>
      <Landing title="AI Answering Service for Contractors">
        <p className="text-xl text-stone max-w-xl mt-4">
          You miss calls because you are working. Your customer calls the next
          contractor. An AI answering service for contractors picks up every
          call, books every estimate, and never takes a day off.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-coral text-white px-8 py-4 text-lg font-medium hover:bg-coral-dark transition-colors duration-300"
            style={{ borderRadius: "2px" }}
          >
            Get a Free Quote
          </a>
        </div>
      </Landing>
      <ContractorAIContent />
      <FinalCTA
        heading="Stop losing jobs to missed calls."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
