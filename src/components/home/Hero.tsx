"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, TrendingUp } from "lucide-react";
import Flasher from "@/components/home/Flasher";

export function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-40 lg:pt-32 lg:pb-24">
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

      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Copy */}
          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Flasher message="Accepting New Projects for March"/>
              {/* <span className="label-tag animate-fade-up">web development studio</span>
              <div className="line-accent mt-4 mb-8 animate-line-grow" /> */}

              <h1 className=" tracking-tight text-ink dark:text-cream leading-[1.15] mb-6">
                Web Design & AI Automation for Small Businesses
              </h1>
              
              <p className="mx-auto lg:mx-0 text-lg text-stone dark:text-stone-light mb-8 leading-relaxed max-w-lg">
                We design revenue-driven websites and build AI-powered systems so your business captures more leads, answers every call, and runs without the busywork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  See Our Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="relative z-10 hidden lg:block perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: -5, x: 20 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-white dark:bg-ink-light rounded-2xl shadow-2xl border border-stone-100 dark:border-stone-800/50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="h-12 border-b border-stone-100 dark:border-stone-800 flex items-center px-4 gap-2 bg-stone-50/50 dark:bg-ink/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="ml-4 h-2 w-32 bg-stone-200 dark:bg-stone-700 rounded-full opacity-50" />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-stone-50 dark:bg-ink/30 p-4 rounded-xl border border-stone-100 dark:border-stone-800/50">
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Total Leads</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-ink dark:text-cream">1,284</span>
                        <span className="text-xs font-bold text-success flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" /> +47%
                        </span>
                      </div>
                    </div>
                    <div className="bg-stone-50 dark:bg-ink/30 p-4 rounded-xl border border-stone-100 dark:border-stone-800/50">
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Time Saved</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-ink dark:text-cream">15hr</span>
                        <span className="text-xs font-bold text-ink-lighter dark:text-stone-500">/week</span>
                      </div>
                    </div>
                    <div className="bg-stone-50 dark:bg-ink/30 p-4 rounded-xl border border-stone-100 dark:border-stone-800/50">
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Uptime</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-ink dark:text-cream">99.9%</span>
                        <span className="text-xs font-bold text-success">
                          <CheckCircle2 className="w-3 h-3 inline mr-1" />
                          Stable
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* "Graph" Area */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-ink dark:text-cream">Automation Activity</h4>
                      <div className="flex gap-2 text-xs text-stone-400">
                        <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-ink dark:text-stone-300">Daily</span>
                        <span className="cursor-pointer hover:text-coral">Weekly</span>
                      </div>
                    </div>
                    <div className="h-32 w-full flex items-end justify-between gap-2 px-1">
                      {[40, 65, 45, 80, 55, 90, 75, 85, 60, 95, 80, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                          className="w-full bg-coral/10 dark:bg-coral/20 rounded-t-lg relative group"
                        >
                          <div className={`absolute bottom-0 left-0 right-0 top-0 bg-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-coral to-coral-light rounded-t-lg`} style={{ height: '100%' }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements (Toasts) */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
                  className="absolute z-40 bottom-8 -right-8 bg-white dark:bg-ink-lighter p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 dark:border-stone-700 max-w-60"
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 mb-0.5">Just now</p>
                      <p className="text-sm font-semibold text-ink dark:text-cream">New Lead Captured via AI Chat</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, y: -40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8, ease: "backOut" }}
                  className=" absolute z-40 top-24 -left-12 bg-white dark:bg-ink-lighter p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 dark:border-stone-700 max-w-55 hidden xl:block"
                >
                  <div className="flex gap-3 items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                          <div className="w-full h-full bg-linear-to-br from-indigo-400 to-purple-400" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-ink-lighter" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink dark:text-cream">Consultation Booked</p>
                      <p className="text-xs text-stone-500 dark:text-stone-400">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                </motion.div>

              </div>
              
              {/* Decorative Blur behind card */}
              <div className="absolute -inset-4 bg-linear-to-r from-coral/20 to-purple-500/20 rounded-[32px] blur-2xl -z-10 opacity-60 dark:opacity-40" />
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
