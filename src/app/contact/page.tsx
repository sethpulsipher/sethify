import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Section } from "@/components/common/Section";

export const metadata = {
  title: "Contact | Start Your Project with Sethify",
  description: "Get in touch with us to discuss your web development or AI automation needs. Remote-first agency serving businesses across the US.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Let's Build Something Amazing"
        description="Whether you need a new website or want to automate your workflow, we're ready to help. Reach out directly."
        centered={true}
      />
      
      <Section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </Section>
    </div>
  );
}
