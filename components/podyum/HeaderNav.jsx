"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#teknik", label: "Teknik" },
  { href: "#sss", label: "SSS" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const previousBodyStyles = useRef({ overflow: "", paddingRight: "" });

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = previousBodyStyles.current.overflow;
      document.body.style.paddingRight = previousBodyStyles.current.paddingRight;
      return;
    }

    lastFocusedRef.current = document.activeElement;
    previousBodyStyles.current = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollBarWidth > 0 ? `${scrollBarWidth}px` : previousBodyStyles.current.paddingRight;

    const focusables = menuRef.current?.querySelectorAll(FOCUSABLE_SELECTOR) ?? [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === "Tab" && focusables.length) {
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    first?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyStyles.current.overflow;
      document.body.style.paddingRight = previousBodyStyles.current.paddingRight;
      lastFocusedRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const navLinks = useMemo(
    () =>
      NAV_LINKS.map((link) => (
        <li key={link.href}>
          {link.href.startsWith("/") ? (
            <Link
              href={link.href}
              className="block px-4 py-2 text-lg font-semibold text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              onClick={() => setOpen(false)}
              aria-label={`${link.label} sayfasına git`}
            >
              {link.label}
            </Link>
          ) : (
            <a
              href={link.href}
              className="block px-4 py-2 text-lg font-semibold text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              onClick={() => setOpen(false)}
              aria-label={`${link.label} bölümüne git`}
            >
              {link.label}
            </a>
          )}
        </li>
      )),
    [setOpen]
  );

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-lg font-black uppercase tracking-widest text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Sahneva anasayfa"
          >
            Sahneva
          </Link>
          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex items-center gap-6 text-sm font-semibold text-white/90">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                      aria-label={`${link.label} sayfasına git`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                      aria-label={`${link.label} bölümüne git`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 lg:hidden"
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls="podyum-mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            ref={triggerRef}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
            <nav
              id="podyum-mobile-menu"
              ref={menuRef}
              className="mx-auto mt-24 w-11/12 max-w-sm rounded-3xl border border-white/20 bg-slate-900/90 p-6 shadow-2xl"
              aria-label="Mobil menü"
            >
              <ul className="space-y-2">{navLinks}</ul>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl border border-white/30 px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                onClick={() => setOpen(false)}
              >
                Menüyü Kapat
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
