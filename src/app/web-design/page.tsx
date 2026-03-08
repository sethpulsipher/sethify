import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { WhyHandCoded } from "@/components/web-design/WhyHandCoded";


export const metadata: Metadata = {
    title: "Small Business Website Design | Sethify",
    description: "Custom, hand-coded websites designed to drive revenue for small businesses. No templates. No page builders. See our process and book a free consultation.",
}

export default function WebDesignPage() {
    return (
        <>
        <PageHero 
            title="Small Business Website Design"
            description="Custom, hand-coded websites designed to drive revenue for small businesses. No templates. No page builders. See our process and book a free consultation."
        />
        <WhyHandCoded />
        </>
    );
}