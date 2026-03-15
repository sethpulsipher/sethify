import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { IndustryWebDesignPage } from "@/components/web-design/IndustryWebDesignPage";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Dental Website Design | Patient-Focused Sites | Sethify",
  description: "Hand-coded websites for dental practices. Built to attract new patients, rank on Google, and make booking easy. Starting at $3,000 or $150/month.",
};

export default function DentalWebDesignPage() {
  return (
    <>
      <Landing
        title="Website Design for Dental Practices"
      />
      <IndustryWebDesignPage
        openingParagraph="New patients search for a dentist the same way they search for everything else. Google first. Your website is the first impression. If it looks outdated, loads slow, or makes it hard to book an appointment, they pick the next practice on the list. We specialize in dental website design that looks professional, loads fast, and makes it easy for patients to schedule their first visit."
        features={[
          "Hand-coded website built from scratch. No WordPress themes.",
          "Online appointment booking built into every page.",
          "Mobile-first design. Most dental searches happen on phones.",
          "SEO built into every page so you rank for \"[city] dentist\" and related searches.",
          "Service pages for each procedure you offer (cleanings, implants, cosmetic, emergency).",
          "Patient-friendly design. Clean layouts, clear calls to action, easy navigation.",
          "Google PageSpeed scores above 90.",
        ]}
        crossLink={{
          text: "We also build AI receptionist systems for dental offices. Automate patient scheduling, reduce no-shows, and answer calls 24/7.",
          href: "/ai-systems/dental",
        }}
        image={{
          src: "/images/industries/dental.webp",
          alt: "Modern dental practice reception area",
        }}
        faqs={[
          {
            question: "How much does a dental website cost?",
            answer: "We offer two options: a one-time build for $3,000 where you own the site outright, or a $150/month subscription with a 12-month minimum that includes hosting, maintenance, and updates.",
          },
          {
            question: "Can patients book appointments directly from the website?",
            answer: "Yes. We build online appointment booking into every page so patients can schedule their visit without calling your office.",
          },
          {
            question: "Will you create pages for each procedure we offer?",
            answer: "Yes. We create dedicated service pages for cleanings, implants, cosmetic dentistry, emergency visits, and any other procedures you want to highlight. Each page is optimized for search.",
          },
          {
            question: "How long does it take to build a dental website?",
            answer: "Most dental websites are ready in 2-4 weeks depending on the number of service pages and how quickly you can provide photos and any specific content preferences.",
          },
          {
            question: "Do I need to provide my own photos?",
            answer: "We include professional stock photography that fits your practice. If you have photos of your office, team, or before-and-after work, we can incorporate those for a more personal touch.",
          },
        ]}
      />
      <FinalCTA
        heading="Your next patient is searching right now."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
