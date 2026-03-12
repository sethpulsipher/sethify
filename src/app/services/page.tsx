import Landing from "@/components/common/Landing";
import { ServiceNav } from "@/components/services/ServiceNav";
import { WebDevPricing } from "@/components/services/WebDevPricing";
import { Ecommerce } from "@/components/services/Ecommerce";
import { AIAutomation } from "@/components/services/AIAutomation";
import { Process } from "@/components/services/Process";
import { FinalCTA } from "@/components/common/CTA";

export const metadata = {
  title: "Services | Sethify Web Design & AI Automation",
  description: "Comprehensive digital services including custom web design, e-commerce solutions, and AI automation to streamline your business.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing
        tag="Our Services"
        title="Our Services"
        description="Explore our range of services designed to help your business thrive in the digital age. Whether you need a stunning website, an e-commerce platform, or AI-powered automation, we have you covered."
        centered={false}
      />
      
      <ServiceNav />
      
      <WebDevPricing />
      <Ecommerce />
      <AIAutomation />
      <Process />
      <FinalCTA />
    </div>
  );
}
