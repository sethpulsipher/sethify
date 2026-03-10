"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.svg"
              alt="Sethify Logo"
              className="h-full w-auto object-contain dark:hidden"
              width={128}
              height={40}
              priority
            />
            <Image
              src="/logo-alt.svg"
              alt="Sethify Logo"
              className="h-full w-auto object-contain hidden dark:block"
              width={128}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-coral relative group ${
                pathname === link.href
                  ? "*:text-coral"
                  : "text-ink dark:text-cream/90"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full",
                  ${pathname === link.href ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button & Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="btn-primary">
            <span>Get Started</span>
          </Link>
          {/* <ModeToggle /> */}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <ModeToggle /> */}
          <Sheet>
            <SheetTrigger asChild>
              {/* <Button
                variant="ghost"
                size="icon"
                className="text-ink dark:text-cream"
              >
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button> */}

              
              <button className="inline-flex items-center justify-center text-ink dark:text-cream hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9">
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50 p-6 flex flex-col justify-between"
            >
              <div className="space-y-8 mt-12">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-lg font-medium py-2 border-b border-border/30 transition-colors hover:text-coral flex items-center justify-between group
                          ${
                            pathname === link.href
                              ? "text-coral"
                              : "text-foreground"
                          }`}
                      >
                        {link.name}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-coral">
                          →
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pb-8">
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-coral hover:bg-coral-dark text-white text-lg"
                  >
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </SheetClose>

                <div className="text-center text-sm text-muted-foreground w-full">
                  <p>© {new Date().getFullYear()} Sethify, LLC</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
