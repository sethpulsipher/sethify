import { Metadata } from "next";
import Landing from "@/components/common/Landing";
import { ShopifyDifference } from "@/components/shopify/ShopifyDifference";
import { ShopifyAudience } from "@/components/shopify/ShopifyAudience";
import { ShopifyPricing } from "@/components/shopify/ShopifyPricing";
import { FinalCTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Custom Shopify Development & Ecommerce Design | Sethify",
  description: "Custom Shopify storefronts built from scratch. No cookie-cutter themes. Designed to sell. Starting at $8,000.",
};

export default function ShopifyPage() {
  return (
    <>
      <Landing
        title="Custom Shopify Development for Growing Businesses"
        description="Custom Shopify storefronts designed and built from scratch. No templates, no theme tweaks. Your store, built to sell."
      />
      <ShopifyDifference />
      <ShopifyAudience />
      <ShopifyPricing />
      <FinalCTA />
    </>
  );
}
