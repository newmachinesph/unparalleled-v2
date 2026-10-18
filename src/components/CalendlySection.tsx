"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function CalendlySection() {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootEl(document.body);
  }, []);

  if (!rootEl) {
    return (
      <span className="inline-block bg-primary px-10 py-4 text-lg font-semibold text-white">
        Loading...
      </span>
    );
  }

  return (
    <PopupButton
      url="https://calendly.com/smithnicole-unparalleledconsulting"
      rootElement={rootEl}
      text="Schedule a Free Consultation"
      className="inline-block bg-primary px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
    />
  );
}
