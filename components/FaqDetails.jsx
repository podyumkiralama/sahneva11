"use client";

import { useState } from "react";

export default function FaqDetails({ items = [] }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold text-neutral-900">{f.q}</span>
              <span aria-hidden className="text-neutral-400">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-2 text-neutral-600">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}