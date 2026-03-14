import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryWebDesignPage } from "@/components/web-design/IndustryWebDesignPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "HVAC Website Design | Websites That Generate Leads | Sethify",
  description: "Hand-coded websites for HVAC companies. Built to rank on Google, load fast, and turn visitors into booked service calls. Starting at $3,000 or $150/month.",
};

export default function HVACWebDesignPage() {
  return (
    <>
      <Landing
        title="Website Design for HVAC Companies"
      />
      <IndustryWebDesignPage
        openingParagraph="Your customers search Google when their AC breaks or their furnace stops working. They pick whoever shows up first with a professional site and a phone number. If your HVAC website is slow, outdated, or buried on page three, you lose the job to a competitor. We handle HVAC website design the right way. Hand-coded, fast, and built to convert visitors into booked service calls."
        features={[
          "Hand-coded website built from scratch. No WordPress themes.",
          "Mobile-first design. Most emergency HVAC searches happen on phones.",
          "SEO built into every page so you rank for \"[city] HVAC repair\" and similar searches.",
          "Click-to-call buttons and contact forms on every page.",
          "Service area pages targeting the cities and zip codes you cover.",
          "Google PageSpeed scores above 90.",
        ]}
        pricingIntro="Wondering about HVAC website cost? Two options. Same quality."
        crossLink={{
          text: "We also build AI phone systems for HVAC companies. Your AI receptionist answers every call, books appointments, and follows up with leads. Even after hours.",
          href: "/ai-systems/hvac",
        }}
        image={{
          src: "/images/industries/hvac.jpg",
          alt: "HVAC technician servicing an air conditioning unit",
        }}
        faqs={[
          {
            question: "How much does an HVAC website cost?",
            answer: "We offer two options: a one-time build for $3,000 where you own the site outright, or a $150/month subscription with a 12-month minimum that includes hosting, maintenance, and updates.",
          },
          {
            question: "How long does it take to build an HVAC website?",
            answer: "Most HVAC websites are ready in 2-4 weeks depending on content readiness and the number of service area pages you need.",
          },
          {
            question: "Will my HVAC website show up on Google?",
            answer: "Yes. Every page is built with SEO fundamentals: fast load times, proper heading structure, meta tags, and schema markup. We also create service area pages targeting the cities you serve.",
          },
          {
            question: "Do I need to provide the content and photos?",
            answer: "We write all the copy for you based on your services, service area, and what makes your company different. Stock photos are included, and we can incorporate your own project photos if you have them.",
          },
          {
            question: "Can I update the website myself after launch?",
            answer: "If you are on the subscription plan, we handle all updates for you. If you purchase the one-time build, we can train you on basic edits or you can reach out to us for changes.",
          },
        ]}
      />
      <FinalCTA
        heading="Stop losing jobs to a bad website."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
