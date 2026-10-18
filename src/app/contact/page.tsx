import type { Metadata } from "next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import CalendlySection from "@/components/CalendlySection";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation",
  description:
    "Schedule a free bookkeeping consultation with Unparalleled Consulting. Offices in Savannah, GA & Chicago, IL. Call, email, or book online today.",
  openGraph: {
    title: "Contact Unparalleled Consulting & Management LLC",
    description:
      "Schedule a free bookkeeping consultation. Offices in Savannah, GA & Chicago, IL.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Unparalleled Consulting & Management LLC",
    description:
      "Schedule a free bookkeeping consultation. Offices in Savannah, GA & Chicago, IL.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/contact",
  },
};

const localBusinessJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Unparalleled Consulting & Management LLC — Savannah",
    image: "https://www.unparalleledconsulting.com/logo.png",
    telephone: "+15551234567",
    email: "info@unparalleledconsulting.com",
    url: "https://www.unparalleledconsulting.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Bull Street, Suite 200",
      addressLocality: "Savannah",
      addressRegion: "GA",
      postalCode: "31401",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Unparalleled Consulting & Management LLC — Chicago",
    image: "https://www.unparalleledconsulting.com/logo.png",
    telephone: "+15551234567",
    email: "info@unparalleledconsulting.com",
    url: "https://www.unparalleledconsulting.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1655 S Blue Island",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60608",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
  },
];

const CONTACT_CARDS = [
  {
    icon: PhoneIcon,
    title: "Multiple Contact Options",
    description:
      "You can reach us through our toll-free number at (555) 123-4567 for a convenient and cost-free way to connect.",
  },
  {
    icon: EnvelopeIcon,
    title: "Get in Touch via Email",
    description:
      "Have a question or need assistance? Feel free to reach out to us via email at info@unparalleledconsulting.com.",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us at Our Location",
    description:
      "Savannah: 100 Bull Street, Suite 200, Savannah, GA 31401. Chicago: 1655 S Blue Island, Chicago, IL 60608.",
  },
];

export default function ContactPage() {
  return (
    <>
      {localBusinessJsonLd.map((biz, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(biz),
          }}
        />
      ))}
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Get in Touch Today
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Ready to get your books in order? Get in touch and let&rsquo;s
              discuss how we can help your business thrive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CONTACT_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="group flex flex-col items-center border border-border p-8 text-center transition-shadow hover:shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary-light">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-2xl text-slate leading-relaxed">
                Ready to achieve financial clarity? Contact us today to learn
                more about our comprehensive bookkeeping and consulting
                services.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="border border-border bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CALENDLY SECTION ===== */}
      <section id="schedule" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Schedule Your Free Consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mb-10 max-w-2xl text-slate leading-relaxed">
              Book a time that works for you. We&rsquo;ll discuss your
              bookkeeping needs and find the right plan for your business.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <CalendlySection />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OFFICE HOURS ===== */}
      <section className="border-t border-border bg-gray-bg py-12">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 px-6 text-center">
          <ClockIcon className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold text-foreground">
            Office Hours: Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM EST
          </p>
        </div>
      </section>
    </>
  );
}
