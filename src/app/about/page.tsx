import { FounderStory } from "@/components/about/FounderStory";
import { Values } from "@/components/about/Values";
import { TechStack } from "@/components/about/TechStack";
import { FinalCTA } from "@/components/common/CTA";
import Landing from "@/components/common/Landing";

export const metadata = {
  title: "About Sethify | Web Design & AI Automation Studio for Small Business",
  description: "Sethify is a web development and AI automation studio built for small service businesses. Founded by a developer. No templates. No page builders. No fluff.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing 
        tag="Who We Are"
        title="A Developer-Led Studio Built for Small Service Businesses"
        description="We believe in quality over quantity, transparency, and building long-term partnerships."
      />
      <FounderStory />
      <Values />
      <TechStack />
      <FinalCTA />
    </div>
  );
}
