import { PageHero } from "@/components/common/PageHero";
import { ServiceNav } from "@/components/services/ServiceNav";
import { WebDevPricing } from "@/components/services/WebDevPricing";
import { Ecommerce } from "@/components/services/Ecommerce";
import { AIAutomation } from "@/components/services/AIAutomation";
import { Process } from "@/components/services/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Services | Sethify Web Design & AI Automation",
  description: "Comprehensive digital services including custom web design, e-commerce solutions, and AI automation to streamline your business.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Comprehensive Digital Solutions"
        description="From hand-coded websites to intelligent automation, we provide everything you need to grow your business online."
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
