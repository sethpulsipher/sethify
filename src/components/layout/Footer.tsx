"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative z-10 bg-cream-dark dark:bg-ink border-t border-border pt-16 pb-8 md:pt-24 md:pb-12 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-32 h-10">
                <img 
                  src="/logo.svg" 
                  alt="Sethify Logo" 
                  className="h-full w-auto object-contain dark:hidden"
                />
                <img 
                  src="/logo-alt.svg" 
                  alt="Sethify Logo" 
                  className="h-full w-auto object-contain hidden dark:block"
                />
              </div>
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              Faster sites. Smarter systems. We design revenue-driven websites and build AI-powered systems for growing businesses.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-coral hover:bg-coral/10 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-coral hover:bg-coral/10 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-coral hover:bg-coral/10 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-base hover:text-coral transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-base hover:text-coral transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="text-base hover:text-coral transition-colors">Our Work</Link>
              </li>
              <li>
                <Link href="/contact" className="text-base hover:text-coral transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#web-development" className="text-base hover:text-coral transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-base hover:text-coral transition-colors">Shopify / E-Commerce</Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="text-base hover:text-coral transition-colors">AI Automation</Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-base hover:text-coral transition-colors">Maintenance Plans</Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-muted-foreground">
                <Mail className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                <a href="mailto:hello@sethify.com" className="hover:text-coral transition-colors">hello@sethify.com</a>
              </li>
              <li className="flex items-start gap-3 text-base text-muted-foreground">
                <Phone className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-coral transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3 text-base text-muted-foreground">
                <MapPin className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Remote-First Agency<br/>Based in USA</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild className="w-full bg-coral hover:bg-coral-dark text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sethify, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-coral transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
