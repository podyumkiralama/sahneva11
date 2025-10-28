// components/Accordion.jsx
"use client";
import { useState } from "react";

/**
 * Kullanım:
 * <Accordion items={[{ q: "Soru?", a: "Cevap." }]} />
 * <Accordion variant="dark" items={[...]} />  // Koyu arka plan için
 */
export default function Accordion({ items = [], variant = "light" }) {
  const [open, setOpen] = useState(null);

  const isDark = variant === "dark";

  const cardBase =
    "rounded-xl border transition shadow-sm " +
    (isDark ? "bg-white/5 border-white/15" : "bg-white border-neutral-200");

  const btnBase =
    "w-full px-4 py-3 text-left flex items-center justify-between gap-4 focus:outline-none " +
    (isDark
      ? "text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/25"
      : "text-neutral-800 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-[#815be0]/30");

  const qClass = "font-medium";
  const aClass =
    (isDark ? "text-white/85" : "text-neutral-700") +
    " px-4 pb-4 pt-1 leading-relaxed";

  const iconClass =
    "inline-flex h-6 w-6 items-center justify-center rounded-full transition " +
    (isDark ? "text-white/80" : "text-neutral-700");

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className={cardBase}>
            <button
              className={btnBase}
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${idx}`}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className={qClass}>{it.q}</span>

              {/* Chevron icon */}
              <svg
                className={`${iconClass} ${isOpen ? "rotate-90" : ""}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 5l8 7-8 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isOpen && (
              <div id={`acc-panel-${idx}`} className={aClass}>
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
