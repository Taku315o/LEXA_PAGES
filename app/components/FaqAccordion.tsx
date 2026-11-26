"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-semibold text-[#111113] transition hover:text-[#E62236] dark:text-[#F5F5F7] dark:hover:text-[#ff6b78] sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-[#6E6E73] transition-transform duration-200 dark:text-[#9A9AA3] ${
                    isOpen ? "rotate-180 text-[#E62236] dark:text-[#ff6b78]" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-8 text-sm leading-7 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
