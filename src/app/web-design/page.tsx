import { Metadata } from "next";
import { WhyHandCoded } from "@/components/web-design/WhyHandCoded";
import Landing from "@/components/common/Landing";
import { WebDesignPricing as Pricing } from "@/components/web-design/WebDesignPricing";
import { WhoWeBuildFor } from "@/components/web-design/WhoWeBuildFor";
import { WebDesignProcess } from "@/components/web-design/WebDesignProcess";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
    title: "Small Business Website Design Services | Sethify",
    description: "Hand-coded websites for small service businesses. No templates. No page builders. Built to convert visitors into leads. Starting at $3,000 or $150/month.",
}

export default function WebDesignPage() {
    return (
        <>
            <Landing
                title="Small Business Website Design Services"
                description="Custom website development for small service businesses. Hand-coded, fast, and built to turn visitors into leads. No templates. No page builders."
            />
            <WhyHandCoded />
            <WhoWeBuildFor />
            <Pricing />
            <WebDesignProcess />
            <FinalCTA />
        </>
    );
}
