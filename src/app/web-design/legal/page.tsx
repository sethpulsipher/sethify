import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryWebDesignPage } from "@/components/web-design/IndustryWebDesignPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Law Firm Website Design | Client-Generating Sites | Sethify",
  description: "Hand-coded websites for law firms. Built to establish credibility, rank on Google, and convert visitors into consultations. Starting at $3,000 or $150/month.",
};

export default function LegalWebDesignPage() {
  return (
    <>
      <Landing
        title="Website Design for Law Firms"
      />
      <IndustryWebDesignPage
        openingParagraph="Potential clients research law firms online before they call. Your website tells them whether you are credible, experienced, and worth the consultation. If your site looks like a template, loads slow, or buries your contact information, they move on to the next firm. We handle law firm website design that establishes trust on the first visit and makes it easy for prospects to reach out."
        features={[
          "Hand-coded website built from scratch. No WordPress themes.",
          "Practice area pages for every service you offer (personal injury, family law, criminal defense, estate planning, etc.).",
          "Attorney profile pages that build credibility.",
          "Mobile-first responsive design.",
          "SEO built into every page so you rank for \"[city] [practice area] attorney\" searches.",
          "Consultation request forms and click-to-call on every page.",
          "Google PageSpeed scores above 90.",
        ]}
        pricingIntro="Thinking about law firm website cost? Two options. Same quality."
        crossLink={{
          text: "We also build AI systems for law firms. Automate client intake, answer calls after hours, and follow up with every lead.",
          href: "/ai-systems/legal",
        }}
        image={{
          src: "/images/industries/legal.jpg",
          alt: "Professional law firm office environment",
        }}
        faqs={[
          {
            question: "How much does a law firm website cost?",
            answer: "We offer two options: a one-time build for $3,000 where you own the site outright, or a $150/month subscription with a 12-month minimum that includes hosting, maintenance, and updates.",
          },
          {
            question: "Will you create pages for each practice area?",
            answer: "Yes. We build dedicated pages for every practice area you handle. Each page targets relevant search terms like \"[city] personal injury attorney\" to help you rank for the cases you want.",
          },
          {
            question: "Can you add attorney bio pages?",
            answer: "Yes. We create individual attorney profile pages with headshots, credentials, practice areas, and professional background. These pages build credibility with potential clients before they reach out.",
          },
          {
            question: "How long does it take to build a law firm website?",
            answer: "Most law firm websites are ready in 2-4 weeks depending on the number of practice area pages, attorney profiles, and how quickly content and photos are provided.",
          },
          {
            question: "Will my website be compliant with bar advertising rules?",
            answer: "We are aware of general bar advertising guidelines and build sites accordingly. We recommend you have your state bar review the final copy before launch to ensure full compliance with your jurisdiction.",
          },
        ]}
      />
      <FinalCTA
        heading="Your next client is comparing firms right now."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
