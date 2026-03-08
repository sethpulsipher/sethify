'use client';

import Link from 'next/link';
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <FuzzyText 
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover
        fontSize="clamp(3rem, 15vw, 12rem)"
        fontWeight={900}
        color="#fff"
      >
        404
      </FuzzyText>
      
      <p className="mt-8 text-lg text-gray-400 text-center max-w-md">
        Page not found.
      </p>
      
      <Link 
        href="/"
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}