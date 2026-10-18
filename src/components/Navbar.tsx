"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-white text-sm text-center py-2 px-4">
        Professional Bookkeeping & Consulting for Growing Businesses.{" "}
        <Link href="/services" className="underline font-semibold hover:text-white/80">
          View Plans
        </Link>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-foreground text-sm leading-tight block">
                  UNPARALLELED
                </span>
                <span className="text-[10px] text-slate tracking-widest uppercase block">
                  Consulting & Management
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact#schedule"
                className="hidden md:inline-flex bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Free Consultation
              </Link>
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium ${
                    pathname === item.href
                      ? "text-primary bg-primary-light"
                      : "text-foreground hover:bg-gray-bg"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact#schedule"
                onClick={() => setMobileOpen(false)}
                className="block bg-primary text-white text-center px-5 py-2.5 text-sm font-semibold mt-2 hover:bg-primary-dark transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
