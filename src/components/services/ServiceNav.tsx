"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ServiceNav() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "web-development", label: "Web Design & Development" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "ai-automation", label: "AI Automation" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-[68px] z-30 bg-background/80 backdrop-blur-md border-b border-border py-4 overflow-x-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4 sm:gap-8 min-w-max">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "text-sm sm:text-base font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-full",
              activeSection === section.id
                ? "bg-coral text-white shadow-md shadow-coral/20"
                : "text-stone hover:text-coral hover:bg-coral/5"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              setActiveSection(section.id);
            }}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
