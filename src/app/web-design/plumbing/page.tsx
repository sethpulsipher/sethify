import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryWebDesignPage } from "@/components/web-design/IndustryWebDesignPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Plumber Website Design | Get More Service Calls | Sethify",
  description: "Hand-coded websites for plumbers. Built to rank on Google, load fast, and turn searches into booked jobs. Starting at $3,000 or $150/month.",
};

export default function PlumbingWebDesignPage() {
  return (
    <>
      <Landing
        title="Website Design for Plumbers"
      />
      <IndustryWebDesignPage
        openingParagraph="When a pipe bursts at midnight, your customer grabs their phone and searches for a plumber. They pick the first result with a professional site and a way to call. If your plumbing website is slow or looks like it was built in 2015, they scroll past you. We handle plumber website design the right way. Hand-coded sites that show up on Google, load fast, and make it easy for homeowners to call or book online."
        features={[
          "Hand-coded website built from scratch. No WordPress themes.",
          "Mobile-first design. Emergency plumbing searches are almost always on phones.",
          "SEO built into every page so you rank for \"[city] plumber\" and \"[city] emergency plumbing.\"",
          "Click-to-call buttons on every page. One tap to book.",
          "Service pages for every job type you handle (drain cleaning, water heater, repiping, sewer, emergency).",
          "Service area pages targeting the cities and zip codes you cover.",
          "Google PageSpeed scores above 90.",
        ]}
        crossLink={{
          text: "We also build AI phone answering and automated scheduling for plumbers. Your AI answers every call, books the job, and follows up. Even at 2 AM.",
          href: "/ai-systems/plumbing",
        }}
        image={{
          src: "/images/industries/plumbing.webp",
          alt: "Plumber working on a residential plumbing repair",
        }}
        faqs={[
          {
            question: "How much does a plumber website cost?",
            answer: "We offer two options: a one-time build for $3,000 where you own the site outright, or a $150/month subscription with a 12-month minimum that includes hosting, maintenance, and updates.",
          },
          {
            question: "Will my website rank for emergency plumbing searches?",
            answer: "We build SEO into every page targeting terms like \"[city] emergency plumber\" and \"[city] plumber near me.\" Combined with fast load times and mobile-first design, your site is built to rank for the searches that matter most.",
          },
          {
            question: "Can you create service area pages for every city I cover?",
            answer: "Yes. We build dedicated service area pages for each city and zip code you want to target. This helps you rank in multiple locations without paying for separate websites.",
          },
          {
            question: "How long does it take to build a plumbing website?",
            answer: "Most plumbing websites are ready in 2-4 weeks depending on the number of service and area pages you need.",
          },
          {
            question: "Do you handle the website content or do I need to write it?",
            answer: "We write all the copy for you based on your services, service area, and what makes your company stand out. You just review and approve.",
          },
        ]}
      />
      <FinalCTA
        heading="Your next job is one search away."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
