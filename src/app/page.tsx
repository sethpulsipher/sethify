import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { SocialProof } from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import Results from "@/components/home/Results";
import { FinalCTA } from "@/components/common/CTA";

export const metadata = {
  title: "Web Design & AI Automation for Small Business | Sethify",
  description: "Sethify builds high-converting websites and AI automation systems for service businesses. Get more leads, save time, and grow. Free consultation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhoWeWorkWith className="bg-cream-dark" />
      <Results />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
