"use client";

import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
    return (
        <>
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
        </>
    );
}