"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  categories,
}: {
  categories: FAQCategory[];
}) {
  return (
    <div className="space-y-16">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {category.title}
          </h2>
          <div className="divide-y divide-border border-t border-b border-border">
            {category.items.map((item) => (
              <Disclosure key={item.question} as="div">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between py-5 px-1 text-left text-foreground hover:text-primary transition-colors">
                      <span className="text-lg font-medium pr-4">
                        {item.question}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 shrink-0 text-slate transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="pb-5 px-1 text-slate leading-relaxed">
                      {item.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
