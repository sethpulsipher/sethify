import { Metadata } from "next";
import { WhyHandCoded } from "@/components/web-design/WhyHandCoded";
import Landing from "@/components/common/Landing";


export const metadata: Metadata = {
    title: "Small Business Website Design | Sethify",
    description: "Custom, hand-coded websites designed to drive revenue for small businesses. No templates. No page builders. See our process and book a free consultation.",
}

export default function WebDesignPage() {
    return (
        <>
        <Landing 
            title="Small Business Website Design"
            description="Custom, hand-coded websites designed to drive revenue for small businesses. No templates. No page builders. See our process and book a free consultation."
        />
        <WhyHandCoded />
        </>
    );
}