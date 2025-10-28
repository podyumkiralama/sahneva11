// components/Faq.jsx
"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../lib/faqData";

function FaqRow({ question, answer, slug }) {
  const [open, setOpen] = useState(false);
  const summaryId = `${slug}-summary`;
  const panelId = `${slug}-panel`;

  return (
    <details
      className="faqCard p-4 open:shadow-sm"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary
        id={summaryId}
        aria-controls={panelId}
        aria-expanded={open}
        className="
          faqSummary cursor-pointer rounded-md
          px-2 py-3 min-h-11            /* hedef boyutu ≥ 44px */
          focus-visible:outline-2 focus-visible:outline-[#6d28d9] focus-visible:outline-offset-2
        "
      >
        <span className="font-semibold text-neutral-900">{question}</span>
        <svg
          className="ml-2 h-5 w-5 shrink-0 text-neutral-800 transition-transform data-[open=true]:rotate-90"
          data-open={open}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5l8 7-8 7" />
        </svg>
      </summary>

      <div id={panelId} className="faqAnim mt-2 text-neutral-700">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function Faq() {
  return (
    <section className="container py-14 md:py-20" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Sık Sorulan Sorular
      </h2>

      <div className="mx-auto max-w-3xl space-y-4">
        {FAQ_ITEMS.map((item) => (
          <FaqRow key={item.slug} {...item} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/sss"
          className="inline-block rounded-lg bg-[#6d28d9] px-6 py-3 font-semibold text-white shadow
                     transition hover:bg-[#5b21b6] focus-visible:ring-2 focus-visible:ring-[#6d28d9]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Tüm Soruları Gör
        </a>
      </div>
    </section>
  );
}
