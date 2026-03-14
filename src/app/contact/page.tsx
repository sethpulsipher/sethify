import ContactForm from "@/components/ContactForm";
import Landing from "@/components/common/Landing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Start Your Project with Sethify",
  description: "Get in touch with us to discuss your web development or AI automation needs. Remote-first agency serving businesses across the US.",
};

export default function ContactPage() {

    const faqs = [
    {
      question: "How long does a website take?",
      answer: "Typically 2-4 weeks for standard sites depending on complexity and content readiness. Larger e-commerce projects may take 4-8 weeks.",
    },
    {
      question: "Do you work with businesses outside the US?",
      answer: "Yes, we serve businesses globally, though our primary market is in the US. We are a remote-first agency.",
    },
    {
      question: "What if I need changes after launch?",
      answer: "Our monthly plans include unlimited edits. Lump-sum projects come with a dedicated support period, and we offer maintenance packages afterward.",
    },
    {
      question: "Do I need both a website and AI automation?",
      answer: "Not necessarily. We meet you where you are. Many clients start with web development and add automation as their business grows.",
    },
    {
      question: "What if I already have a website?",
      answer: "We can rebuild, redesign, or add AI automation to your existing setup. We often migrate clients from Wix/Squarespace to custom code for better performance.",
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Landing 
        tag="Contact"
        title="Let's Build Something Amazing"
        description="Whether you need a new website or want to automate your workflow, we're ready to help. Reach out directly."
        centered={false}
      />

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white dark:bg-ink">
        <div className="container-custom">
          <div className="grid gap-12 items-start lg:grid-cols-12 lg:gap-20">
            
            {/* CONTACT FORM */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* OTHER INFO */}
            <div className="space-y-6 lg:col-span-5">
              
              {/* CONTACT INFO */}
              <div className="bg-cream-dark dark:bg-ink-light/50 p-8" style={{ borderRadius: '2px' }}>
                  <h3 className="text-xl mb-6 font-medium text-ink dark:text-cream uppercase tracking-wider border-b pb-4">Contact Information</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 py-2">
                      <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-ink dark:text-cream">Email Us</p>
                        <a href="mailto:hello@sethify.com" className="text-stone dark:text-stone-light hover:text-coral transition-colors">hello@sethify.com</a>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 py-2">
                      <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-ink dark:text-cream">Call Us</p>
                        <a href="tel:+15551234567" className="text-stone dark:text-stone-light hover:text-coral transition-colors">+1 (555) 123-4567</a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4 py-2">
                      <div className="bg-white dark:bg-ink p-3 rounded-lg shadow-sm text-coral">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-ink dark:text-cream">Availability</p>
                        <p className="text-stone dark:text-stone-light">Mon-Fri, 9am - 5pm EST<br/>24/7 Emergency Support for Monthly Plans</p>
                      </div>
                    </li>
                  </ul>
              </div>
            
                <div className="bg-white border border-ink/10 p-8" style={{ borderRadius: '2px' }}>
                  <h3 className="text-xl mb-4">Prefer to call?</h3>
                  <p className="text-stone mb-4">
                    We&apos;re available Monday-Friday, 8am-6pm MT
                  </p>
                  <a href="tel:+15555551234" className="text-coral text-xl font-medium hover:text-coral-dark transition-colors">
                    (555) 555-1234
                  </a>
                </div>

                <div className="bg-white border border-ink/10 p-8" style={{ borderRadius: '2px' }}>
                  <h3 className="text-xl mb-4">Response time</h3>
                  <div className="space-y-3 text-stone">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full" />
                      <span>Business hours: Under 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sage rounded-full" />
                      <span>After hours/weekends: Next business day</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-coral rounded-full" />
                      <span>Emergency support for clients: 1 hour</span>
                    </div>
                  </div>
                </div>

                <div className="bg-ink text-white p-8" style={{ borderRadius: '2px' }}>
                  {/* <h3 className="text-xl mb-6 text-white">Common questions</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium text-white mb-2">How much does it cost?</p>
                      <p className="text-stone-light text-sm">Depends on what you need. Typical range: $3K-10K implementation + $300-800/month ongoing. We'll give you exact pricing on the discovery call.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">How long does implementation take?</p>
                      <p className="text-stone-light text-sm">4-8 weeks for most projects. We break it into phases so you see progress quickly.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">Do you have a minimum commitment?</p>
                      <p className="text-stone-light text-sm">No long-term contracts. Month-to-month after implementation. We earn your business by delivering results.</p>
                    </div>
                  </div> */}

                  <h3 className="text-xl text-cream dark:text-cream mb-6">Common questions</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b-stone-200 dark:border-stone-800">
                        <AccordionTrigger className="text-left font-medium text-cream dark:text-cream hover:text-coral transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-light leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}