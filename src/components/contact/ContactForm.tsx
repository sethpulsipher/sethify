"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-cream dark:bg-ink-light p-8 rounded-2xl border border-coral/20 text-center py-16">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-ink dark:text-cream mb-2">Message Sent!</h3>
        <p className="text-stone dark:text-stone-light">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-coral text-coral hover:bg-coral hover:text-white"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-ink p-8 md:p-10 rounded-3xl shadow-lg border border-border">
      <h2 className="text-2xl font-bold text-ink dark:text-cream mb-6">Send a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" required className="bg-cream dark:bg-ink-light border-transparent focus:border-coral" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="bg-cream dark:bg-ink-light border-transparent focus:border-coral" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-cream dark:bg-ink-light border-transparent focus:border-coral" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In</Label>
            <Select>
              <SelectTrigger className="bg-cream dark:bg-ink-light border-transparent focus:ring-coral">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-design">Web Design & Development</SelectItem>
                <SelectItem value="ecommerce">E-Commerce / Shopify</SelectItem>
                <SelectItem value="automation">AI Automation</SelectItem>
                <SelectItem value="not-sure">Not Sure</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range</Label>
            <Select>
              <SelectTrigger className="bg-cream dark:bg-ink-light border-transparent focus:ring-coral">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-2500">Under $2,500</SelectItem>
                <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000+">$10,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Details</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your project, goals, and timeline..." 
            className="min-h-[150px] bg-cream dark:bg-ink-light border-transparent focus:border-coral"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold bg-coral hover:bg-coral-dark text-white shadow-lg hover:shadow-coral/20 transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
