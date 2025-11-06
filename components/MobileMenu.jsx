// components/MobileMenu.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileMenu({
  isOpen,
  onClose,
  activeFn,
  serviceLinks,
  whatsappBtnClass,
  burst,
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // escape ile kapat
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // body scroll kilidi
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || ""; };
  }, [isOpen]);

  // backdrop
  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Menüyü kapat"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="lg:hidden fixed z-50 left-0 right-0 top-16 bg-white border-t border-neutral-200/70 rounded-b-2xl shadow-2xl transition-all duration-500 will-change-transform overflow-hidden max-h-[80vh] opacity-100"
      >
        <div className="px-5 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link
            href="/hakkimizda"
            onClick={onClose}
            className="flex items-center gap-3 py-3.5 px-4 text-neutral-800 font-bold text-[15px] rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 border border-transparent hover:border-blue-200/60"
            aria-current={activeFn("/hakkimizda") ? "page" : undefined}
            title="Sahneva Hakkında"
          >
            <span className="text-lg" aria-hidden="true">👥</span>
            Hakkımızda
          </Link>

          <div className="py-1">
            <button
              type="button"
              onClick={() => setServicesOpen((s) => !s)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-list"
              className="w-full flex items-center justify-between gap-3 py-3.5 px-4 text-[15px] font-bold text-neutral-900 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 border border-transparent hover:border-blue-200/60 min-h-[44px]"
              title="Sahneva Hizmetler Menüsü"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">🎯</span>
                <span>Hizmetler</span>
              </span>
              <svg
                className={`w-5 h-5 shrink-0 text-neutral-700 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              id="mobile-services-list"
              className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <div className="ml-4 rounded-lg border border-neutral-200/60 bg-white p-2">
                {serviceLinks.map(({ href, label, title, icon, description }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="flex items-start gap-3 px-3 py-2 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-200 w-full"
                    aria-current={activeFn(href) ? "page" : undefined}
                    title={title}
                  >
                    <span className="text-base opacity-70 mt-0.5 flex-shrink-0" aria-hidden="true">{icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-neutral-800">{label}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={onClose}
            className="flex items-center gap-3 py-3.5 px-4 text-neutral-800 font-bold text-[15px] rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 border border-transparent hover:border-blue-200/60"
            aria-current={activeFn("/iletisim") ? "page" : undefined}
            title="Sahneva İletişim"
          >
            <span className="text-lg" aria-hidden="true">📞</span>
            İletişim
          </Link>

          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Teklif — yeni sekmede açılır"
            className={whatsappBtnClass}
            onClick={(e) => {
              burst?.(e, ["#10b981", "#059669"]);
              onClose?.();
            }}
            title="WhatsApp'tan teklif alın"
          >
            <span aria-hidden="true" className="text-base">💬</span>
            <span>WhatsApp Teklif</span>
            <span className="sr-only"> — yeni sekmede açılır</span>
          </a>
        </div>
      </div>
    </>
  );
}
