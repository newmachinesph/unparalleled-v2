import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
  Services: [
    { name: "Bookkeeping", href: "/services#bookkeeping" },
    { name: "Tax & CFO Services", href: "/services#add-ons" },
    { name: "Consulting", href: "/services#consulting" },
    { name: "Speaking Engagements", href: "/services#consulting" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  Support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Schedule Consultation", href: "/contact#schedule" },
    { name: "FAQ", href: "/faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-section text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm leading-tight block">
                  UNPARALLELED
                </span>
                <span className="text-[10px] text-white/60 tracking-widest uppercase block">
                  Consulting & Management
                </span>
              </div>
            </div>
            <div className="space-y-3 mt-6 text-sm text-white/70">
              <a
                href="tel:5551234567"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@unparalleledconsulting.com"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="break-all">info@unparalleledconsulting.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  100 Bull Street, Suite 200
                  <br />
                  Savannah, GA 31401
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Unparalleled Consulting &
            Management LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
