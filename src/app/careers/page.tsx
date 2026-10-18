import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AcademicCapIcon,
  HomeModernIcon,
  HeartIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Careers — Join Our Growing Team",
  description:
    "Explore open positions at Unparalleled Consulting. Bookkeeping, consulting & client success roles. Remote-first culture, competitive benefits. Apply now.",
  openGraph: {
    title: "Careers at Unparalleled Consulting & Management LLC",
    description:
      "Explore open positions in bookkeeping, consulting & client success. Remote-first culture.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Unparalleled Consulting & Management LLC",
    description:
      "Explore open positions in bookkeeping, consulting & client success. Remote-first culture.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/careers",
  },
};

const perks = [
  {
    title: "Professional Growth",
    description:
      "Continuous learning opportunities and career development paths.",
    icon: AcademicCapIcon,
  },
  {
    title: "Flexible Work",
    description: "Remote-first culture with flexible scheduling options.",
    icon: HomeModernIcon,
  },
  {
    title: "Competitive Benefits",
    description: "Comprehensive health, dental, and vision coverage.",
    icon: HeartIcon,
  },
  {
    title: "Community Impact",
    description:
      "Make a tangible difference in local businesses and communities.",
    icon: GlobeAmericasIcon,
  },
];

const openPositions = [
  {
    title: "Senior Bookkeeper",
    type: "Full-time",
    location: "Remote",
    description:
      "Manage a portfolio of client accounts with accuracy and efficiency.",
  },
  {
    title: "Business Consultant",
    type: "Full-time",
    location: "Savannah, GA",
    description:
      "Provide strategic guidance to small businesses and startups.",
  },
  {
    title: "Junior Accountant",
    type: "Full-time",
    location: "Chicago, IL",
    description:
      "Support our bookkeeping team with data entry, reconciliation, and reporting.",
  },
  {
    title: "Client Success Manager",
    type: "Full-time",
    location: "Remote",
    description:
      "Ensure client satisfaction and manage relationships across our portfolio.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Join Our Team
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Build your career with a company that values growth, integrity,
              and making a real impact on businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold text-foreground">
              Why Work With Us
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center bg-primary-light">
                    <perk.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{perk.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Culture
                </h2>
                <p className="mt-4 leading-relaxed text-slate">
                  At Unparalleled Consulting, we believe in creating an
                  environment where every team member can thrive. Our culture is
                  built on collaboration, continuous improvement, and a shared
                  commitment to helping businesses succeed. We invest in our
                  people because we know that great teams deliver exceptional
                  results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative h-72 overflow-hidden lg:h-80">
                <Image
                  src="/marketing-development-strategy.jpg"
                  alt="Modern office workspace with team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground">
              Open Positions
            </h2>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {openPositions.map((position, index) => (
              <ScrollReveal key={position.title} delay={index * 0.08}>
                <div className="flex flex-col justify-between gap-4 border border-border bg-white p-6 transition-shadow hover:shadow-lg sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {position.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate">
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {position.location}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate">
                      {position.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Apply Now
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mt-3 text-lg text-white/80">
              We&apos;re always looking for talented people. Send us your resume
              and tell us how you can contribute.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-bg"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
