import { FounderStory } from "@/components/about/FounderStory";
import { Values } from "@/components/about/Values";
import { TechStack } from "@/components/about/TechStack";
import { FinalCTA } from "@/components/common/CTA";
import Landing from "@/components/common/Landing";

export const metadata = {
  title: "About Sethify | Built by a Developer Who Cares",
  description: "Learn about the philosophy behind Sethify and how we help small businesses succeed with custom web development and AI automation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing 
        title="Your Web Design & Development Partner"
        description="We believe in quality over quantity, transparency, and building long-term partnerships."
      />
      <FounderStory />
      <Values />
      <TechStack />
      <FinalCTA />
    </div>
  );
}
