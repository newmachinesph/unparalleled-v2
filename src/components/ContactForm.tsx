"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Bookkeeping — Starter ($300/mo)",
  "Bookkeeping — Professional ($600/mo)",
  "Bookkeeping — Enterprise (Custom)",
  "Tax Preparation (Bookkeeping Clients)",
  "CFO Services (Bookkeeping Clients)",
  "COO Services (Bookkeeping Clients)",
  "Business Consulting",
  "Speaking Engagement",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center bg-primary">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground">
          Message Sent!
        </h3>
        <p className="max-w-md text-slate">
          Thank you for reaching out. We will get back to you within one
          business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          }}
          className="mt-6 border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Message textarea — left, takes 3 columns */}
        <div className="lg:col-span-3">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business needs..."
            className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-slate/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Right column — name, email, phone */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-slate/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-slate/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-foreground"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-slate/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Service of Interest dropdown */}
      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-semibold text-foreground"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Send Message
      </button>
    </form>
  );
}
