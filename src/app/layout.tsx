import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://www.unparalleledconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Unparalleled Consulting & Management LLC | Bookkeeping, Consulting & Speaking",
    template: "%s | Unparalleled Consulting & Management",
  },
  description:
    "Professional bookkeeping services starting at $300/month, business consulting, and speaking engagements. Tax, CFO, and COO services available. Serving Savannah, GA and Chicago, IL.",
  keywords: [
    "bookkeeping services",
    "small business bookkeeping",
    "business consulting",
    "tax preparation",
    "CFO services",
    "COO services",
    "speaking engagements",
    "Savannah GA bookkeeper",
    "Chicago IL bookkeeper",
    "financial management",
  ],
  authors: [{ name: "Unparalleled Consulting & Management LLC" }],
  creator: "Unparalleled Consulting & Management LLC",
  publisher: "Unparalleled Consulting & Management LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Unparalleled Consulting & Management LLC",
    title:
      "Unparalleled Consulting & Management LLC | Bookkeeping, Consulting & Speaking",
    description:
      "Professional bookkeeping services starting at $300/month, business consulting, and speaking engagements. Serving Savannah, GA and Chicago, IL.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Unparalleled Consulting & Management LLC | Bookkeeping, Consulting & Speaking",
    description:
      "Professional bookkeeping services starting at $300/month, business consulting, and speaking engagements. Serving Savannah, GA and Chicago, IL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-6 focus:py-3 focus:text-white focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
