import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms governing bookkeeping, consulting, and speaking services from Unparalleled Consulting & Management LLC. Payment terms, confidentiality & more.",
  openGraph: {
    title: "Terms of Service | Unparalleled Consulting",
    description:
      "Review the terms governing our bookkeeping, consulting, and speaking services.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Unparalleled Consulting",
    description:
      "Review the terms governing our bookkeeping, consulting, and speaking services.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/terms",
  },
};

export default function TermsOfService() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Last updated: February 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Agreement to Terms
              </h2>
              <p className="mt-4 leading-7 text-slate">
                By accessing or using the services provided by Unparalleled
                Consulting &amp; Management LLC, you agree to be bound by these
                Terms of Service. If you do not agree with any part of these
                terms, you may not use our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Services</h2>
              <p className="mt-4 leading-7 text-slate">
                We provide professional bookkeeping, business consulting, tax
                preparation, CFO and COO services, and speaking engagements. The
                specific services, scope, and deliverables will be defined in
                individual service agreements.
              </p>
            </div>

            {/* Service Agreements */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Service Agreements
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Each engagement will be governed by a separate service agreement
                that outlines:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>Scope of services</li>
                <li>Pricing and payment schedule</li>
                <li>Timeline and deliverables</li>
                <li>Confidentiality obligations</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Payment Terms
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate">
                <li>Bookkeeping services are billed monthly in advance.</li>
                <li>
                  Consulting and speaking engagements may require a retainer or
                  deposit.
                </li>
                <li>Payment is due within 30 days of invoice.</li>
                <li>
                  Late payments may incur a 1.5% monthly fee on the outstanding
                  balance.
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-4 leading-7 text-slate">
                All materials, reports, and deliverables created during
                engagements remain the intellectual property of Unparalleled
                Consulting &amp; Management LLC until full payment is received,
                at which point ownership transfers to the client unless otherwise
                specified in a separate service agreement.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Confidentiality
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We maintain strict confidentiality of all client information. We
                will not disclose your financial data or business information to
                third parties without your consent, except as required by law.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Our liability is limited to the fees paid for the specific
                services giving rise to the claim. We are not liable for
                indirect, incidental, special, or consequential damages,
                including but not limited to loss of profits, data, or business
                opportunities.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Client Responsibilities
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Clients are responsible for:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>Providing accurate and timely information</li>
                <li>Maintaining access to financial accounts and systems</li>
                <li>Responding to requests within reasonable timeframes</li>
                <li>Complying with applicable laws and regulations</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Termination
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Either party may terminate services with 30 days written notice.
                Upon termination, all outstanding fees become immediately due. We
                will provide reasonable assistance in transitioning your records
                to a new service provider.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Dispute Resolution
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Any disputes arising from these terms or our services will be
                resolved through good-faith negotiation. If negotiation fails,
                disputes will be submitted to binding arbitration in Savannah,
                Georgia, in accordance with applicable arbitration rules.
              </p>
            </div>

            {/* Website Use */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Website Use
              </h2>
              <p className="mt-4 leading-7 text-slate">
                You may use our website for lawful purposes only. You may not:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>
                  Attempt to gain unauthorized access to any part of the website
                  or its systems
                </li>
                <li>
                  Use automated systems, bots, or scrapers to collect content
                  from the website
                </li>
                <li>
                  Interfere with or disrupt the website&apos;s functionality or
                  security
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Changes to Terms
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective when posted on this page.
                Continued use of our services after changes constitutes
                acceptance of the modified terms.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-4 leading-7 text-slate">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 space-y-2 text-slate">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:info@unparalleledconsulting.com"
                    className="text-primary hover:underline"
                  >
                    info@unparalleledconsulting.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:+15551234567"
                    className="text-primary hover:underline"
                  >
                    (555) 123-4567
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Address:
                  </span>{" "}
                  100 Bull Street, Suite 200, Savannah, GA 31401
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-border pt-8">
              <Link
                href="/privacy"
                className="font-medium text-primary hover:underline"
              >
                View our Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
