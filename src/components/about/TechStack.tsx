"use client";

import { Section } from "@/components/common/Section";

export function TechStack() {
  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Library" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "Shopify", category: "E-Commerce" },
    { name: "n8n", category: "Automation" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Vercel", category: "Deployment" },
  ];

  return (
    <Section className="py-24 bg-cream-dark dark:bg-ink-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-cream mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-stone dark:text-stone-light">
            We use modern, battle-tested tools to build fast, scalable, and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-background rounded-2xl shadow-sm border border-border hover:border-coral/30 hover:shadow-md transition-all duration-300 group">
              <span className="text-xl font-bold text-ink dark:text-cream group-hover:text-coral transition-colors">{tech.name}</span>
              <span className="text-sm text-stone-light mt-2">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
