"use client";

import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function ProjectList() {
  const projects = [
    {
      title: "Alpine Fitness",
      subtitle: "High-Performance Gym Website",
      tags: ["Web Design", "Local SEO"],
      description: "A conversion-focused landing page that increased membership signups by 40% in the first month.",
      image: "bg-gradient-to-br from-stone-800 via-stone-900 to-black", 
      href: "/projects/alpine-fitness",
    },
    {
      title: "Lumina Interiors",
      subtitle: "E-Commerce Experience",
      tags: ["Shopify", "Custom Theme"],
      description: "Custom Shopify store with advanced product filtering and AR visualization integration.",
      image: "bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900",
      href: "/projects/lumina",
    },
    {
      title: "TechFlow AI",
      subtitle: "SaaS Marketing Site",
      tags: ["Next.js", "Framer Motion"],
      description: "Clean, modern marketing site for an AI startup, featuring complex animations and high-speed performance.",
      image: "bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-950",
      href: "/projects/techflow",
    },
  ];

  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-card border border-border">
              {/* Image Placeholder */}
              <div className={`aspect-[4/3] w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Link href="#" className="flex items-center gap-2 bg-white text-ink font-semibold px-6 py-3 rounded-full hover:bg-cream transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider text-coral bg-coral/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-ink dark:text-cream mb-2 group-hover:text-coral transition-colors">{project.title}</h3>
                <p className="text-stone-light text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-stone dark:text-stone-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream dark:bg-ink-light rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-dashed border-stone-300 dark:border-stone-700">
          <p className="text-lg text-stone dark:text-stone-light mb-6">
            Currently curating our full portfolio. In the meantime, book a call and we'll walk you through our recent work live.
          </p>
          <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
            <Link href="/contact">Schedule a Walkthrough</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
