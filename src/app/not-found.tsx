'use client';

import Link from 'next/link';
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <FuzzyText 
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover
        fontSize="clamp(3rem, 25vw, 12rem)"
        fontWeight={700}
        color={"var(--ink)"}
      >
        404
      </FuzzyText>
      
      <p className="mt-8 text-lg text-center max-w-md">
        Page not found.
      </p>
      
      <Link 
        href="/"
        className="mt-8 btn-secondary"
      >
        Back to Home
      </Link>
    </div>
  );
}