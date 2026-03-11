import { Metadata } from "next";
import { WhyHandCoded } from "@/components/web-design/WhyHandCoded";
import Landing from "@/components/common/Landing";
import { WebDesignPricing as Pricing} from "@/components/web-design/WebDesignPricing";
import { WebDevPricing } from "@/components/services/WebDevPricing";



export const metadata: Metadata = {
    title: "Small Business Website Design Services | Sethify",
    description: "Hand-coded websites for small service businesses. No templates. No page builders. Built to convert visitors into leads. Starting at $3,000 or $150/month.",
}

export default function WebDesignPage() {
    return (
        <>
            <Landing 
                title="Small Business Website Design"
                description="Custom, hand-coded websites designed to drive revenue for small businesses. No templates. No page builders. See our process and book a free consultation."
            />
            <WhyHandCoded />
            <Pricing />
            <WebDevPricing />
        </>
    );
}