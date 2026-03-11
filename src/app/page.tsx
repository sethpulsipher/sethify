import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Web Design & AI Automation for Small Business | Sethify",
  description: "Sethify builds high-converting websites and AI automation systems for service businesses. Get more leads, save time, and grow. Free consultation.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}
