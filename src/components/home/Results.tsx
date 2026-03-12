"use client";

import Link from "next/link";

export default function Results() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="label-tag">Real Results</span>
            <div className="line-accent mt-4 mb-6" />
            <h2 className="text-ink mb-6">
              Real outcomes for service businesses
            </h2>
            <p className="text-xl text-stone mb-12">
              These aren't projections. These are actual results from businesses
              like yours.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="stat-number text-coral">12</div>
                <p className="text-stone mt-2">
                  Additional leads per month captured from missed calls (HVAC
                  average)
                </p>
              </div>
              <div>
                <div className="stat-number">
                  3<span className="text-3xl">min</span>
                </div>
                <p className="text-stone mt-2">
                  Average response time to new leads (down from 4+ hours)
                </p>
              </div>
              <div>
                <div className="stat-number">
                  18<span className="text-3xl">hrs</span>
                </div>
                <p className="text-stone mt-2">
                  Team time saved weekly on scheduling and repetitive
                  communication
                </p>
              </div>
              <div>
                <div className="stat-number text-coral">$15K</div>
                <p className="text-stone mt-2">
                  Average monthly revenue increase across our clients
                </p>
              </div>
            </div>
          </div>

          {/* Right: Honesty card */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-coral/20"
              style={{ borderRadius: "2px" }}
            />
            <div
              className="bg-ink text-white p-10 md:p-12 relative"
              style={{ borderRadius: "2px" }}
            >
              <h3 className="text-2xl md:text-3xl mb-6 text-white">
                Not every system works for every business
              </h3>
              <p className="text-stone-light text-lg leading-relaxed">
                We're honest about what AI can and can't do. Some calls need
                human judgment. Some workflows are better manual. We recommend
                what actually makes sense for your specific operation—not what's
                trendy or maximizes our revenue.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-coral hover:text-white transition-colors duration-300 group"
                >
                  Learn about our approach
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
