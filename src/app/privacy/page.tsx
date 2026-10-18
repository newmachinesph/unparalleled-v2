import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Unparalleled Consulting & Management LLC collects, uses, and protects your personal information. Your data security matters to us.",
  openGraph: {
    title: "Privacy Policy | Unparalleled Consulting",
    description:
      "How we collect, use, and protect your personal information.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Unparalleled Consulting",
    description:
      "How we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
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
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Introduction
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Unparalleled Consulting &amp; Management LLC (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Information We Collect
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Personal Information
                  </h3>
                  <p className="mt-2 leading-7 text-slate">
                    We may collect personal information that you voluntarily
                    provide to us, including:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>
                      Business information provided through forms or
                      consultations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Automatically Collected Information
                  </h3>
                  <p className="mt-2 leading-7 text-slate">
                    When you visit our website, we may automatically collect
                    certain information, including:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>
                  To send communications about our services, updates, and
                  promotions
                </li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Information Sharing
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We do not sell your personal information to third parties. We may
                share your information with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>
                  Service providers who assist us in operating our business and
                  delivering services
                </li>
                <li>
                  Legal authorities when required by law or to protect our rights
                </li>
                <li>Business partners, only with your prior consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Data Security
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or method of electronic storage is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Your Rights
              </h2>
              <p className="mt-4 leading-7 text-slate">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-slate">
                <li>Access your personal data that we hold</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>
                  Request portability of your data in a structured, commonly used
                  format
                </li>
              </ul>
              <p className="mt-4 leading-7 text-slate">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
              <p className="mt-4 leading-7 text-slate">
                We use cookies and similar tracking technologies to improve your
                experience on our website. Cookies are small data files stored on
                your device that help us understand how you use our site. You can
                control or disable cookies through your browser settings.
                However, disabling cookies may affect the functionality of
                certain features on our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Third-Party Links
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those third-party sites. We encourage you to review
                the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Children&apos;s Privacy
              </h2>
              <p className="mt-4 leading-7 text-slate">
                Our services are not directed to individuals under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If we become aware that we have collected personal
                information from a child under 13, we will take steps to delete
                that information promptly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-4 leading-7 text-slate">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the &quot;Last
                updated&quot; date at the top.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-4 leading-7 text-slate">
                If you have questions about this Privacy Policy, please contact
                us at:
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
                href="/terms"
                className="font-medium text-primary hover:underline"
              >
                View our Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
