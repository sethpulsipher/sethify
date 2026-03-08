"use client";

import { Section } from "@/components/common/Section";
import { Star } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      quote: "The best investment we made for our business this year. Our new site is beautiful and brings in leads automatically.",
      author: "Sarah J.",
      business: "Boutique Owner",
      rating: 5,
    },
    {
      quote: "Sethify understood exactly what we needed. No jargon, just results. The AI automation saves us hours every week.",
      author: "Mike T.",
      business: "Local Services",
      rating: 5,
    },
    {
      quote: "Finally, a web developer who cares about the details. The site is incredibly fast and looks amazing on mobile.",
      author: "Emily R.",
      business: "Consultant",
      rating: 5,
    },
  ];

  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            Real results for real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream dark:bg-ink-light/30 p-8 rounded-2xl relative">
              <div className="flex gap-1 text-coral mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-ink dark:text-cream/90 italic mb-6">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-ink dark:text-cream">{testimonial.author}</p>
                <p className="text-sm text-stone dark:text-stone-light">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
