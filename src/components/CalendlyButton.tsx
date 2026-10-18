"use client";

import { PopupButton } from "react-calendly";

export default function CalendlyButton() {
  return (
    <PopupButton
      url="https://calendly.com/smithnicole-unparalleledconsulting"
      rootElement={
        typeof document !== "undefined"
          ? document.getElementById("__next") || document.body
          : (undefined as unknown as HTMLElement)
      }
      text="Schedule a Free Consultation"
      className="inline-block bg-primary px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
    />
  );
}
