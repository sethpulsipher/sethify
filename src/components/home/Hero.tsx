"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, TrendingUp } from "lucide-react";
import Flasher from "@/components/home/Flasher";
import Dashboard from "@/components/Dashboard";

export function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-40 lg:pt-32">
      {/* Geometric decorations */}
      <div className="absolute top-32 right-12 w-64 h-64 border border-coral/20 rounded-full hidden lg:block" />
      <div className="absolute top-48 right-28 w-32 h-32 border border-coral/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-48 h-48 bg-coral/5 rounded-full blur-2xl" />
      
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        {/* <ColorBends
          colors={["#0F172A", "#0F172A", "#0F172A"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        /> */}

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left, var(--tw-gradient-stops))] from-coral/5 via-transparent to-transparent opacity-50 dark:opacity-20" />
        <div className="absolute top-1/4 right-0 w-125 h-125 bg-royal-gold/10 rounded-full blur-[100px] opacity-30 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-100 h-100 bg-coral/5 rounded-full blur-[80px] opacity-30" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 items-center lg:grid-cols-12 lg:gap-4">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* <Flasher message="Accepting New Projects for March"/> */}
              <span className="label-tag animate-fade-up">Faster sites. Smarter systems.</span>
              <div className="line-accent animate-line-grow" />

              <h1 className=" tracking-tight text-ink dark:text-cream leading-[1.15] mb-6">
                Web Design & AI Automation for Small Service Businesses
              </h1>
              
              <p className="lg:mx-0 text-lg text-stone dark:text-stone-light mb-8 leading-relaxed max-w-lg">
                We design revenue-driven websites and build AI-powered systems so your business captures more leads, answers every call, and runs without the busywork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
                <Link href="/services" className="btn-secondary gap-2">See How It Works</Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="relative mb-12 lg:col-span-5 lg:border-l border-ink/10 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, rotateY: -5, x: 20 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >

              <Dashboard />

            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
