import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  EyeIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon,
  CheckIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Bookkeeping Services from $300/mo | Unparalleled Consulting",
  description:
    "Professional bookkeeping, consulting & speaking services for growing businesses. Plans from $300/mo. BBB accredited. Serving Savannah, GA & Chicago, IL. Get a free consultation today.",
  openGraph: {
    title: "Bookkeeping Services from $300/mo | Unparalleled Consulting",
    description:
      "Professional bookkeeping, consulting & speaking services for growing businesses. Plans from $300/mo. BBB accredited.",
    type: "website",
    url: "https://www.unparalleledconsulting.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookkeeping Services from $300/mo | Unparalleled Consulting",
    description:
      "Professional bookkeeping, consulting & speaking services for growing businesses. Plans from $300/mo. BBB accredited.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unparalleled Consulting & Management LLC",
  url: "https://www.unparalleledconsulting.com",
  logo: "https://www.unparalleledconsulting.com/logo.png",
  description:
    "Professional bookkeeping, business consulting, and speaking services for small and mid-sized businesses.",
  telephone: "+15551234567",
  email: "info@unparalleledconsulting.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "100 Bull Street, Suite 200",
      addressLocality: "Savannah",
      addressRegion: "GA",
      postalCode: "31401",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "1655 S Blue Island",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60608",
      addressCountry: "US",
    },
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15551234567",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

const stats = [
  { value: "97%", label: "Client Satisfaction" },
  { value: "BBB", label: "Accredited" },
  { value: "2", label: "Office Locations" },
  { value: "24hr", label: "Response Time" },
];

const starterFeatures = [
  "Monthly bookkeeping & reconciliation",
  "Cash-basis bookkeeping",
  "Bank & credit card integration",
  "Year-end tax package",
  "Email support",
];

const professionalFeatures = [
  "Everything in Starter, plus:",
  "Dedicated bookkeeper",
  "Cash or accrual-basis",
  "Custom chart of accounts",
  "Reports by 10th business day",
  "Phone & email support",
];

const enterpriseFeatures = [
  "Everything in Professional, plus:",
  "Complex entity support",
  "Custom workflows & reporting",
  "Faster reporting (6th day)",
  "Full AR/AP management",
  "Payroll administration",
  "Priority support",
];

const addOns = [
  {
    icon: DocumentTextIcon,
    title: "Tax Preparation",
    description:
      "Comprehensive individual and business tax preparation services, including quarterly estimates and year-end filings.",
  },
  {
    icon: ChartBarIcon,
    title: "CFO Services",
    description:
      "Strategic financial leadership including forecasting, cash flow management, and financial reporting for informed decision-making.",
  },
  {
    icon: CogIcon,
    title: "COO Services",
    description:
      "Operational oversight and process optimization to streamline your business, improve efficiency, and drive scalable growth.",
  },
];

const consultingPoints = [
  "Business plan development",
  "Strategic planning",
  "Operational process improvement",
  "Market analysis",
];

const speakingPoints = [
  "Keynote presentations",
  "Corporate workshops",
  "Financial literacy seminars",
  "Custom topics available",
];

const whyUs = [
  {
    icon: UserGroupIcon,
    title: "Client-Centered Approach",
    description:
      "Every engagement is tailored to your unique business needs. We listen first, then build solutions that fit.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Integrity & Transparency",
    description:
      "Clear pricing, honest communication, and no surprises. Your trust is the foundation of everything we do.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Continuous Improvement",
    description:
      "We stay ahead of industry changes and technology to deliver increasingly better results for your business.",
  },
  {
    icon: HeartIcon,
    title: "Community Impact",
    description:
      "We reinvest in the communities we serve through education, mentorship, and supporting local entrepreneurs.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      {/* ─── Hero Section ─── */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0078D4 0%, #005A9E 100%)",
        }}
      >
        {/* Geometric pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, white 20px, white 21px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
                Unparalleled Consulting &amp; Management LLC
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Bookkeeping for
                <br />
                Growing Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
                Professional bookkeeping, strategic consulting, and engaging
                speaking services designed to give your business the financial
                clarity it needs to thrive.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services#bookkeeping"
                  className="inline-flex items-center bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
                >
                  View Plans
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden border-4 border-white/20">
                <Image
                  src="/business-consulting-hero.jpg"
                  alt="Business professionals shaking hands over financial data"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="bg-gray-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                  <EyeIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="mt-5 leading-relaxed text-slate">
                To become the trusted bookkeeping and consulting partner for
                small businesses, providing the financial clarity and operational
                support needed for sustainable growth and community impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                  <RocketLaunchIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="mt-5 leading-relaxed text-slate">
                To deliver professional, accurate bookkeeping and strategic
                consulting services that empower businesses to make data-driven
                decisions, maintain financial health, and achieve their goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Bookkeeping Plans Preview ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <ScrollReveal className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pricing
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Bookkeeping Plans
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate">
              Transparent monthly pricing with no hidden fees. Choose the plan
              that fits your business today and scale when you are ready.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Starter */}
            <ScrollReveal>
              <div className="flex h-full flex-col border border-border bg-white p-8 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-foreground">Starter</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    $300
                  </span>
                  <span className="text-slate">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {starterFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span className="text-slate">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block border-2 border-primary py-3 text-center text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Professional */}
            <ScrollReveal delay={0.1}>
              <div className="relative flex h-full flex-col border-2 border-primary bg-white p-8 transition-shadow hover:shadow-lg">
                <span className="absolute -top-px right-6 -translate-y-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  Popular
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  Professional
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    $600
                  </span>
                  <span className="text-slate">/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {professionalFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span className="text-slate">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-primary py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.2}>
              <div className="flex h-full flex-col border border-border bg-white p-8 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-foreground">
                  Enterprise
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground">
                    Custom
                  </span>
                  <p className="mt-1 text-sm text-slate">
                    Pricing tailored to your needs
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {enterpriseFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span className="text-slate">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block border-2 border-primary py-3 text-center text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Add-On Services ─── */}
      <section className="bg-gray-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <ScrollReveal className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Enhance Your Plan
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Add-On Services
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {addOns.map((addon, i) => (
              <ScrollReveal key={addon.title} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-border bg-white p-8 transition-shadow hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary-light">
                    <addon.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {addon.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {addon.description}
                  </p>
                  <span className="mt-6 inline-block self-start border border-primary/20 bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Bookkeeping clients only
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Consulting & Speaking ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <ScrollReveal className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Beyond Bookkeeping
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Consulting &amp; Speaking
            </h2>
          </ScrollReveal>

          <div className="mb-14">
            <ScrollReveal>
              <div className="relative mx-auto aspect-[21/9] max-w-4xl overflow-hidden">
                <Image
                  src="/staff-development-training.jpg"
                  alt="Professional consulting workshop in modern office"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <h3 className="text-xl font-bold text-foreground">
                Business Consulting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Data-driven strategies and hands-on guidance to help your
                business navigate challenges and seize opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                {consultingPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/services#consulting"
                className="mt-8 inline-flex items-center text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-primary-dark"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="text-xl font-bold text-foreground">
                Speaking Engagements
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Engaging presentations on entrepreneurship, financial literacy,
                and business operations for organizations of all sizes.
              </p>
              <ul className="mt-6 space-y-3">
                {speakingPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckIcon className="h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/services#consulting"
                className="mt-8 inline-flex items-center text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-primary-dark"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="bg-dark-section text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <ScrollReveal className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
              The Unparalleled Difference
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex h-12 w-12 items-center justify-center bg-white/10">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-base font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0078D4 0%, #005A9E 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, white 20px, white 21px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Get Your Books in Order?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Schedule a free consultation and discover how professional
              bookkeeping can transform the way you run your business.
            </p>
            <Link
              href="/contact#schedule"
              className="mt-10 inline-flex items-center bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              Schedule Consultation
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
