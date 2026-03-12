import Link from "next/link";
import Image from "next/image";

export default function Footer2() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo-alt.svg"
                  alt="Sethify Logo"
                  width={128}
                  height={40}
                />
              </div>
            </Link>
            <p className="text-stone-light text-lg leading-relaxed max-w-md mb-8">
              Faster sites, smarter systems. We design revenue-driven websites
              and build AI-powered systems for growing businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-coral hover:border-coral transition-all duration-300"
                style={{ borderRadius: "2px" }}
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:col-span-7">
            {/* Industries */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-6">
                Industries
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    HVAC
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Dental
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Plumbing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/web-design"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-systems/#phone-systems"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    AI Phone Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-systems/#chat"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    AI Chat & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-systems/#automation"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Workflow Automation
                  </Link>
                </li>
              </ul>
            </div>


            {/* Company */}
            {/* <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/results"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-stone-light hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white hover:text-coral transition-colors duration-300 group"
                  >
                    Book a Call
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </li>
              </ul>
            </div> */}

            {/* CTA Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-6">
                Get Started
              </h4>
              <p className="text-stone-light mb-6">
                Ready to capture the revenue you&apos;re losing?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-coral transition-colors duration-300 group"
              >
                Book a Call
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-light text-sm">
            &copy; {new Date().getFullYear()} Sethify. Web Development & AI
            Studio.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-stone-light hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-stone-light hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
