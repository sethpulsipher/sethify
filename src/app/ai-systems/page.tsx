import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { PainPoint } from "@/components/ai-systems/PainPoint";
import { AIReceptionist } from "@/components/ai-systems/AIReceptionist";
import { AutomatedScheduling } from "@/components/ai-systems/AutomatedScheduling";
import { AIIndustries } from "@/components/ai-systems/AIIndustries";
import { AIPricing } from "@/components/ai-systems/AIPricing";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "AI Receptionist & Automation for Small Business | Sethify",
  description: "Stop losing leads to missed calls. AI receptionist, automated scheduling, and workflow automation for service businesses. Free consultation.",
};

export default function AISystemsPage() {
  return (
    <>
      <Landing
        title="AI Automation for Small Businesses"
        description="AI receptionist, automated scheduling, and workflow automation built for service businesses. Answer every call, book every lead, and cut the busywork."
      />
      <PainPoint />
      <AIReceptionist />
      <AutomatedScheduling />
      <AIIndustries />
      <AIPricing />
      <FinalCTA />
    </>
  );
}
