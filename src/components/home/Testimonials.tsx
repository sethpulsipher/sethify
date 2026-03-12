"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative">
        <div className="max-w-3xl mb-16">
          <span className="label-tag">Testimonials</span>
          <div className="line-accent mt-4 mb-6" />
          <h2 className="text-ink">
            Built for service businesses that need it to just work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "We were missing 20-30 calls per week. Now every call gets answered, even at 10pm. The AI books appointments directly into our calendar. It's like hiring someone who never sleeps.",
              name: "Mike R.",
              role: "HVAC Company Owner",
            },
            {
              quote:
                "Other developers disappeared after launch. Bridge actually sticks around. When we had an issue at 7am, they fixed it by 9am. That's the partnership we needed.",
              name: "Sarah L.",
              role: "Law Firm Partner",
            },
            {
              quote:
                "The website alone doubled our leads. Add the AI chat and phone system, and we're converting 40% more quotes to jobs. Best business decision we've made.",
              name: "Tom K.",
              role: "Landscaping Business",
            },
          ].map((testimonial, i) => (
            <div key={i} className="card relative">
              <svg
                className="w-10 h-10 text-coral/20 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-ink text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-ink/10">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-stone text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-secondary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
