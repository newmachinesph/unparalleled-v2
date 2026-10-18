import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BookOpenIcon,
  ArrowTrendingUpIcon,
  CalculatorIcon,
  ChartBarIcon,
  NewspaperIcon,
  StarIcon,
  ClockIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Blog — Bookkeeping Tips & Business Insights",
  description:
    "Expert articles on bookkeeping, tax tips, financial management & business growth. Stay informed with insights from Unparalleled Consulting. Subscribe today.",
  openGraph: {
    title: "Blog | Unparalleled Consulting & Management LLC",
    description:
      "Expert articles on bookkeeping, tax tips, financial management & business growth strategies.",
    type: "website",
    url: "https://www.unparalleledconsulting.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Unparalleled Consulting & Management LLC",
    description:
      "Expert articles on bookkeeping, tax tips, financial management & business growth strategies.",
  },
  alternates: {
    canonical: "https://www.unparalleledconsulting.com/blog",
  },
};

const blogPosts = [
  {
    title: "5 Bookkeeping Mistakes That Cost Small Businesses Thousands",
    category: "Bookkeeping",
    excerpt:
      "Learn about the most common bookkeeping errors and how to avoid them to save your business money.",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    icon: BookOpenIcon,
  },
  {
    title: "Why Every Growing Business Needs a Dedicated Bookkeeper",
    category: "Business Growth",
    excerpt:
      "Discover how a dedicated bookkeeper can transform your financial operations and free you to focus on growth.",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    icon: ArrowTrendingUpIcon,
  },
  {
    title:
      "Tax Season Preparation: A Complete Checklist for Small Businesses",
    category: "Tax Tips",
    excerpt:
      "Stay ahead of tax season with this comprehensive preparation checklist designed for small business owners.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    icon: CalculatorIcon,
  },
  {
    title:
      "Understanding Cash vs. Accrual Accounting: Which Is Right for You?",
    category: "Financial Planning",
    excerpt:
      "A clear breakdown of both accounting methods to help you make the right choice for your business.",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    icon: ChartBarIcon,
  },
  {
    title: "How CFO Services Can Accelerate Your Business Growth",
    category: "Industry News",
    excerpt:
      "Explore how fractional CFO services provide enterprise-level financial strategy at a fraction of the cost.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    icon: NewspaperIcon,
  },
  {
    title: "From Startup to Scale: A Client Success Story",
    category: "Client Success",
    excerpt:
      "How one entrepreneur went from struggling with spreadsheets to scaling with confidence using our services.",
    date: "Feb 10, 2026",
    readTime: "3 min read",
    icon: StarIcon,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Insights &amp; Resources
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Expert articles on bookkeeping, financial management, and business
              growth strategies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="group grid items-stretch gap-0 border border-border transition-shadow hover:shadow-lg md:grid-cols-2">
              <div className="relative aspect-[16/9] md:aspect-auto">
                <Image
                  src="/growth-funding-opportunities.jpg"
                  alt="Modern corporate building representing business growth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-sm font-semibold text-primary">Featured</span>
                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  <Link href="#" className="transition-colors hover:text-primary">
                    Scaling Your Business: Financial Strategies for Sustainable Growth
                  </Link>
                </h2>
                <p className="mt-3 text-slate">
                  A comprehensive guide to building financial foundations that support
                  rapid yet sustainable business growth, from cash flow management to
                  strategic investment planning.
                </p>
                <p className="mt-4 text-xs text-slate">Mar 12, 2026 &middot; 8 min read</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.08}>
                <article className="group border border-border bg-white transition-shadow hover:shadow-lg">
                  <div className="flex h-48 items-center justify-center bg-gray-bg">
                    <post.icon className="h-12 w-12 text-slate" />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      <Link
                        href="#"
                        className="transition-colors hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-slate">
                      <span className="flex items-center gap-1">
                        <CalendarDaysIcon className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <EnvelopeIcon className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 text-3xl font-bold text-foreground">
                Stay Updated
              </h2>
              <p className="mt-3 text-slate">
                Subscribe to our newsletter for the latest bookkeeping tips and
                business insights.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate focus:border-primary focus:outline-none sm:w-80"
                />
                <button
                  type="button"
                  className="w-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold">
              Have a Topic You&apos;d Like Us to Cover?
            </h2>
            <p className="mt-3 text-lg text-white/80">
              We&apos;re always looking for new ways to help businesses succeed.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-bg"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
