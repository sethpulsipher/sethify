import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { FinalCTA } from "@/components/common/CTA";
import { ContractorWebDesignContent } from "./content";

export const metadata: Metadata = {
  title: "Contractor Website Design | Websites That Book Jobs | Sethify",
  description:
    "Hand-coded websites for contractors. Built to rank on Google, showcase your work, and turn visitors into booked projects. Starting at $3,000 or $150/month.",
};

export default function ContractorsWebDesignPage() {
  return (
    <>
      <Landing tag="websites" title="Website Design for Contractors" description="" centered>
        <p className="text-xl text-stone max-w-xl mt-4">
          Homeowners check your website before they check your references. If
          your site looks like a template or does not show up on Google, you lose
          the project before you get a chance to bid.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="/contact"
            className="btn-primary"
          >
            <span>Get a Free Quote</span>
          </a>
          <a href="#" className="btn-secondary">See More</a>
        </div>
      </Landing>
      <ContractorWebDesignContent />
      <FinalCTA
        heading="Your next project starts with a better website."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
