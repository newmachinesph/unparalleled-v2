import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Bookkeeping & Consulting Questions",
  description:
    "Answers to common questions about bookkeeping plans, pricing, consulting, and tax services. Learn how we help small businesses thrive. Contact us for more info.",
  openGraph: {
    title: "Frequently Asked Questions | Unparalleled Consulting",
    description:
      "Answers to common questions about bookkeeping plans, pricing, consulting, and tax services.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Unparalleled Consulting",
    description:
      "Answers to common questions about bookkeeping plans, pricing, consulting, and tax services.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/faq",
  },
};

const faqCategories = [
  {
    title: "General",
    items: [
      {
        question: "What types of businesses do you work with?",
        answer:
          "We serve a diverse range of clients including small businesses, startups, entrepreneurs, non-profits, and established companies. Our services are tailored to meet the unique needs of each business, regardless of industry or size.",
      },
      {
        question: "How do I get started with your services?",
        answer:
          "Getting started is simple. Schedule a free consultation through our website, and we'll discuss your needs, recommend the right plan, and walk you through our onboarding process. Most clients are fully set up within 1-2 weeks.",
      },
      {
        question: "Do you offer remote services?",
        answer:
          "Yes! We provide fully remote bookkeeping and consulting services. Our team uses secure cloud-based tools to manage your finances from anywhere. We also have physical offices in Savannah, GA and Chicago, IL for in-person meetings.",
      },
      {
        question:
          "What sets Unparalleled Consulting & Management LLC apart?",
        answer:
          "Our client-centered approach, BBB accreditation, and commitment to transparency set us apart. We assign dedicated bookkeepers to every client, provide clear pricing with no hidden fees, and integrate seamlessly into your business operations.",
      },
    ],
  },
  {
    title: "Bookkeeping Services",
    items: [
      {
        question: "What's included in the bookkeeping plans?",
        answer:
          "All plans include monthly bookkeeping and reconciliation, bank and credit card data integration, and a year-end tax preparer package. Higher-tier plans add dedicated bookkeepers, custom chart of accounts, and faster reporting timelines.",
      },
      {
        question: "How does the onboarding process work?",
        answer:
          "After your consultation, we'll gather access to your financial accounts, set up your chart of accounts, and begin organizing your books. The process typically takes 1-2 weeks, and your dedicated bookkeeper will guide you through every step.",
      },
      {
        question: "What accounting software do you support?",
        answer:
          "We work with all major accounting platforms including QuickBooks Online, Xero, FreshBooks, and Wave. If you don't have a preferred platform, we'll recommend the best option for your business needs.",
      },
      {
        question: "When will I receive my monthly reports?",
        answer:
          "Report delivery depends on your plan. Professional plan clients receive reports by the 10th business day of each month, while Enterprise clients receive them by the 6th business day.",
      },
    ],
  },
  {
    title: "Pricing & Plans",
    items: [
      {
        question: "How is pricing structured?",
        answer:
          "Our bookkeeping plans start at $300/month for the Starter plan and $600/month for the Professional plan. Enterprise plans are custom-priced based on your business complexity. Add-on services like Tax Preparation, CFO, and COO services are available for bookkeeping clients.",
      },
      {
        question: "Can I upgrade my plan later?",
        answer:
          "Absolutely. You can upgrade your plan at any time as your business grows. We'll help you transition smoothly and ensure continuity in your bookkeeping.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "We offer monthly billing for all our bookkeeping plans. For consulting and speaking engagements, we can discuss payment arrangements during your consultation.",
      },
      {
        question: "What are the add-on services?",
        answer:
          "Add-on services include Tax Preparation, CFO Services (financial modeling, investor reporting, cash flow forecasting), and COO Services (payroll administration, HR coordination, vendor management). These are available exclusively for bookkeeping clients.",
      },
    ],
  },
  {
    title: "Consulting & Speaking",
    items: [
      {
        question: "What consulting services do you offer?",
        answer:
          "We offer comprehensive business consulting including business plan development, strategic planning, operational process improvement, organizational change management, and market analysis.",
      },
      {
        question: "What speaking topics are available?",
        answer:
          "Our speaking engagements cover keynote presentations, corporate workshops, financial literacy seminars, entrepreneurship and business growth, and custom topics tailored to your audience.",
      },
      {
        question:
          "Do I need to be a bookkeeping client to use consulting services?",
        answer:
          "No! Our business consulting and speaking engagement services are available to all clients, regardless of whether you use our bookkeeping services.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
              Find answers to common questions about our bookkeeping plans,
              consulting services, and pricing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <FAQAccordion categories={faqCategories} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Still Have Questions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Our team is ready to help. Reach out and we&apos;ll get back to
              you within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact#schedule"
              className="mt-8 inline-block bg-white px-8 py-4 text-lg font-semibold text-primary hover:bg-gray-bg transition-colors"
            >
              Schedule Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
