"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const focusableSelectors = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/sss", label: "SSS" },
];

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const previousFocus = useRef(null);

  const openMenu = () => {
    previousFocus.current = document.activeElement;
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const menuEl = menuRef.current;
    if (!menuEl) return undefined;

    const focusable = menuEl.querySelectorAll(focusableSelectors);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key === "Tab") {
        if (focusable.length === 0) {
          event.preventDefault();
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => first?.focus());

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.removeProperty("overflow");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && previousFocus.current instanceof HTMLElement) {
      previousFocus.current.focus();
    }
  }, [isMenuOpen]);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          aria-label="Sahneva ana sayfası"
        >
          Sahneva
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Ana menü">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 md:hidden"
          onClick={openMenu}
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" className="text-lg">☰</span>
          Menü
        </button>
      </div>

      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
          <div className="mx-auto mt-10 w-11/12 max-w-sm rounded-3xl bg-white p-6" ref={menuRef}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Site navigasyonu</h2>
              <button
                type="button"
                className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapat
              </button>
            </div>
            <ul className="mt-6 space-y-3">
              {navLinks.map((item) => (
                <li key={`mobile-${item.href}`}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
