import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  CheckCircleIcon,
  CalculatorIcon,
  ChartBarIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  MicrophoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services & Pricing — Bookkeeping from $300/mo",
  description:
    "Bookkeeping plans from $300/mo, tax prep, CFO & COO services, consulting, and speaking. Transparent pricing, no hidden fees. Get started with a free consultation today.",
  openGraph: {
    title: "Bookkeeping Services & Pricing | Unparalleled Consulting",
    description:
      "Bookkeeping plans from $300/mo, tax prep, CFO & COO services, consulting, and speaking. Transparent pricing.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookkeeping Services & Pricing | Unparalleled Consulting",
    description:
      "Bookkeeping plans from $300/mo, tax prep, CFO & COO services, consulting, and speaking. Transparent pricing.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bookkeeping Service Plans",
  itemListElement: [
    {
      "@type": "Service",
      name: "Starter Bookkeeping Plan",
      description:
        "Monthly bookkeeping & reconciliation, cash-basis bookkeeping, bank & credit card data integration, year-end tax package, and email support.",
      provider: {
        "@type": "Organization",
        name: "Unparalleled Consulting & Management LLC",
      },
      offers: {
        "@type": "Offer",
        price: "300.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "300.00",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    },
    {
      "@type": "Service",
      name: "Professional Bookkeeping Plan",
      description:
        "Everything in Starter plus dedicated bookkeeper, cash or accrual-basis, custom chart of accounts, reports by 10th business day, phone & email support.",
      provider: {
        "@type": "Organization",
        name: "Unparalleled Consulting & Management LLC",
      },
      offers: {
        "@type": "Offer",
        price: "600.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "600.00",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    },
    {
      "@type": "Service",
      name: "Enterprise Bookkeeping Plan",
      description:
        "Everything in Professional plus complex entity support, custom workflows & reporting, faster reporting, full AR/AP management, payroll administration, and priority support.",
      provider: {
        "@type": "Organization",
        name: "Unparalleled Consulting & Management LLC",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    },
  ],
};

const starterFeatures = [
  "Monthly bookkeeping & reconciliation",
  "Cash-basis bookkeeping",
  "Bank & credit card data integration",
  "Standard chart of accounts",
  "Year-end tax preparer package",
  "Email support",
];

const professionalFeatures = [
  "Everything in Starter, plus:",
  "Dedicated bookkeeper",
  "Cash or accrual-basis options",
  "Multi-source data integration",
  "Custom chart of accounts",
  "Reports by 10th business day",
  "Phone & email support",
];

const enterpriseFeatures = [
  "Everything in Professional, plus:",
  "Complex entity support",
  "Custom workflows & reporting",
  "Faster reporting (6th business day)",
  "Full AR/AP management",
  "Payroll administration",
  "Priority support",
];

const addOnServices = [
  {
    title: "Tax Preparation",
    icon: CalculatorIcon,
    description:
      "Comprehensive tax filing services. Federal, state, and entity-specific returns.",
    features: [
      "Annual tax return preparation",
      "Multi-state filing support",
      "Tax planning consultation",
      "Quarterly estimated tax calculations",
    ],
  },
  {
    title: "CFO Services",
    icon: ChartBarIcon,
    description:
      "Strategic financial leadership for growing businesses.",
    features: [
      "Financial modeling & forecasting",
      "Investor reporting & presentations",
      "Cash flow forecasting & management",
      "Weekly strategy sessions",
    ],
  },
  {
    title: "COO Services",
    icon: CogIcon,
    description:
      "Operational management to streamline your business.",
    features: [
      "Payroll administration",
      "HR coordination & compliance",
      "Vendor management & negotiations",
      "Process optimization & documentation",
    ],
  },
];

const consultingFeatures = [
  "Business plan development",
  "Strategic planning & facilitation",
  "Operational process improvement",
  "Organizational change management",
  "Market analysis & competitive assessment",
];

const speakingTopics = [
  "Keynote presentations",
  "Corporate workshops & training",
  "Financial literacy seminars",
  "Entrepreneurship & business growth",
  "Custom topics available",
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative bg-gradient-to-br from-[#0078D4] to-[#005A9E] py-28 text-white md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Complete Business Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Explore our range of services to help your business achieve
              financial clarity and sustainable growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BOOKKEEPING PLANS                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section id="bookkeeping" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Bookkeeping Plans
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Starter */}
            <ScrollReveal delay={0}>
              <div className="flex h-full flex-col border border-border bg-white p-8">
                <h3 className="text-xl font-bold text-foreground">Starter</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">$300</span>
                  <span className="text-slate">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {starterFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-10 block w-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Professional (Popular) */}
            <ScrollReveal delay={0.1}>
              <div className="relative flex h-full flex-col border-2 border-primary bg-white p-8 shadow-lg">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Professional
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">$600</span>
                  <span className="text-slate">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {professionalFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-10 block w-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.2}>
              <div className="flex h-full flex-col border border-border bg-white p-8">
                <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                  <span className="ml-2 text-slate">Pricing</span>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {enterpriseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-10 block w-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ADD-ON SERVICES                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section id="add-ons" className="bg-gray-bg py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Add-On Services
              </h2>
              <p className="mt-4 text-slate">
                Available for bookkeeping clients only
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {addOnServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="flex h-full flex-col border border-border bg-white p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-primary-light">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <span className="mt-4 inline-block w-fit bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Bookkeeping Clients Only
                  </span>

                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    {service.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                        <span className="text-sm text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Learn More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONSULTING & SPEAKING                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="consulting" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Consulting &amp; Speaking
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Business Consulting */}
            <ScrollReveal delay={0}>
              <div className="flex h-full flex-col border border-border bg-white p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary-light">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Business Consulting
                  </h3>
                </div>

                <span className="mt-4 inline-block w-fit bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                  Available to All Clients
                </span>

                <p className="mt-4 text-sm leading-relaxed text-slate">
                  Strategic guidance to help you make informed decisions, optimize
                  operations, and position your business for long-term success.
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {consultingFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact#schedule"
                  className="mt-10 block w-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Schedule Consultation
                </Link>
              </div>
            </ScrollReveal>

            {/* Speaking Engagements */}
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col border border-border bg-white p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary-light">
                    <MicrophoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Speaking Engagements
                  </h3>
                </div>

                <span className="mt-4 inline-block w-fit bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                  Available to All Clients
                </span>

                <p className="mt-4 text-sm leading-relaxed text-slate">
                  Engaging presentations and workshops tailored to your audience,
                  covering topics from financial literacy to entrepreneurship and
                  business growth strategies.
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {speakingTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                      <span className="text-sm text-slate">{topic}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact#schedule"
                  className="mt-10 block w-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Schedule Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not Sure Which Plan You Need?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Schedule a free consultation and we&apos;ll help you find the right
              bookkeeping solution for your business.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact#schedule"
              className="mt-10 inline-block bg-white px-8 py-4 text-sm font-bold text-primary transition-colors hover:bg-white/90"
            >
              Schedule Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
