import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  GlobeAmericasIcon,
  CheckBadgeIcon,
  UserIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About Us — Our Story & Values",
  description:
    "Meet the team behind Unparalleled Consulting. BBB accredited bookkeeping & consulting in Savannah, GA and Chicago, IL. Learn our story and schedule a free consultation.",
  openGraph: {
    title: "About Unparalleled Consulting & Management LLC",
    description:
      "BBB accredited bookkeeping & consulting empowering businesses in Savannah, GA and Chicago, IL.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Unparalleled Consulting & Management LLC",
    description:
      "BBB accredited bookkeeping & consulting empowering businesses in Savannah, GA and Chicago, IL.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-r from-[#0078D4] to-[#005A9E] py-28 text-center text-white">
        <ScrollReveal>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Professional bookkeeping, consulting, and speaking services that
            empower businesses to achieve financial clarity and sustainable
            growth.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Story Section ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Block 1 */}
          <ScrollReveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/business-development-services.jpg"
                  alt="Team collaborating on business strategy at whiteboard"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Trusted Solutions in the Heart of the Community
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  We serve businesses of all sizes. Attacks and misfortune can
                  hit at any time. Unparalleled Consulting is on duty and ready
                  when you need us the most. We&apos;re continuously monitoring,
                  tracking, and managing your financials to keep your business
                  secure.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Block 2 */}
          <ScrollReveal>
            <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Our Journey: A Commitment to Excellence
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  What truly sets our services apart is how we integrate into
                  your daily life and business needs. When we say we&apos;re an
                  extension of your daily operations, we mean it. We work
                  side-by-side with you and your team to keep your most important
                  financial data protected and organized.
                </p>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden lg:order-2">
                <Image
                  src="/financial-legal-services.jpg"
                  alt="Professional reviewing financial documents at desk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Block 3 */}
          <ScrollReveal>
            <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/project-management-consulting.jpg"
                  alt="Consultant presenting project management strategy"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  On-Demand Business Support Services
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">
                  Unparalleled Consulting offers convenient on-demand business
                  support services, so you no longer have to deal with the
                  hassle of managing complex financials alone. Our professionals
                  are background checked and verified, and they carry
                  identification for easy verification.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section id="mission" className="bg-gray-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Vision &amp; Mission
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="border-l-4 border-primary bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  To be the most trusted partner for small and mid-sized
                  businesses seeking financial clarity, operational efficiency,
                  and sustainable growth — setting the standard for excellence
                  in bookkeeping and consulting services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-4 border-primary bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  To empower businesses with accurate, timely, and insightful
                  financial management services that simplify complexity, reduce
                  risk, and unlock growth potential — delivering unparalleled
                  value through integrity, expertise, and a client-first
                  approach.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate">
              The principles that guide everything we do.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: UserGroupIcon,
                title: "Client-Centered Approach",
                description:
                  "We deliver tailored solutions built around your unique needs. We listen first, then craft strategies that align with your goals and budget.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Integrity & Transparency",
                description:
                  "Upfront pricing, clear processes, and accurate reporting you can count on. No hidden fees, no surprises — just honest, reliable service.",
              },
              {
                icon: AcademicCapIcon,
                title: "Continuous Improvement",
                description:
                  "We invest in professional development and stay current with industry standards, tax codes, and best practices to serve you better every day.",
              },
              {
                icon: GlobeAmericasIcon,
                title: "Community Impact",
                description:
                  "We provide accessible, high-quality services to businesses in Savannah, GA and Chicago, IL — strengthening local economies one client at a time.",
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="h-full border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <value.icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Professional Standards ─── */}
      <section className="bg-gray-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Professional Standards
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: StarIcon,
                stat: "97%",
                label: "Client Satisfaction",
                description:
                  "Our clients consistently rate us among the best for reliability and results.",
              },
              {
                icon: CheckBadgeIcon,
                stat: "BBB",
                label: "Accredited Business",
                description:
                  "Recognized by the Better Business Bureau for ethical practices and trust.",
              },
              {
                icon: UserIcon,
                stat: "Decades",
                label: "Combined Experience",
                description:
                  "Our experienced team brings decades of combined expertise in financial management.",
              },
              {
                icon: MapPinIcon,
                stat: "2",
                label: "Locations",
                description:
                  "Proudly serving businesses from our offices in Savannah, GA and Chicago, IL.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <div className="flex flex-col items-center bg-white p-8 text-center shadow-sm">
                  <item.icon className="h-10 w-10 text-primary" />
                  <span className="mt-4 text-4xl font-bold text-primary">
                    {item.stat}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-[#0078D4] to-[#005A9E] py-24 text-center text-white">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Get Your Books in Order?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Let our team handle the numbers so you can focus on growing your
            business.
          </p>
          <Link
            href="/contact#schedule"
            className="mt-8 inline-block bg-white px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Schedule Consultation
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
