// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

const services = [
  { href: "/podyum-kiralama", label: "Podyum Kiralama", icon: "👑" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", icon: "🖥️" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri", icon: "🎭" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎤" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama", icon: "⛺" },
];

const primary = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const servicesBtnRef = useRef(null);

  const navId = "primary-navigation";
  const servicesPanelId = "services-submenu";

  const closeAll = useCallback(() => {
    setOpen(false);
    setServicesOpen(false);
  }, []);

  // Close on route change
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeAll();
        // Odak menü butonuna dönsün
        const btn = document.getElementById("nav-toggle-btn");
        btn?.focus();
      }
    }
    if (open || servicesOpen) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, servicesOpen, closeAll]);

  // Focus first link when mobile menu opens
  useEffect(() => {
    if (open) {
      // küçük bir gecikme odak için daha güvenli
      const t = setTimeout(() => firstLinkRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Click outside to close (only for mobile drawer)
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        closeAll();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, closeAll]);

  const isCurrent = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <nav
        className="container mx-auto px-4 lg:px-6 py-3"
        aria-label="Ana gezinme"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60 rounded-lg"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <span aria-hidden="true">⭐</span>
              </span>
              <span className="sr-only">Sahneva Anasayfa</span>
              <span
                className="font-extrabold tracking-tight text-neutral-900 text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700"
                aria-hidden="true"
              >
                SAHNEVA
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" id={navId} role="menubar">
            {/* Hizmetler (menülü) */}
            <li role="none" className="relative">
              <button
                ref={servicesBtnRef}
                className="min-h-[44px] px-3 py-2 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls={servicesPanelId}
                onClick={() => setServicesOpen((s) => !s)}
              >
                Hizmetler
                <span className="sr-only">{servicesOpen ? "alt menü açık" : "alt menü kapalı"}</span>
              </button>

              <div
                id={servicesPanelId}
                role="menu"
                aria-label="Hizmetler alt menü"
                className={`absolute left-0 mt-2 w-64 rounded-xl border border-neutral-200 bg-white shadow-lg p-2 transition ${
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                } motion-reduce:transition-none`}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.stopPropagation();
                    setServicesOpen(false);
                    servicesBtnRef.current?.focus();
                  }
                }}
              >
                <ul className="grid grid-cols-1 gap-1" role="none">
                  {services.map((item, idx) => (
                    <li role="none" key={item.href}>
                      <Link
                        role="menuitem"
                        href={item.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                      >
                        <span aria-hidden="true">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Diğer üst bağlantılar */}
            {primary.map((item, i) => (
              <li role="none" key={item.href}>
                <Link
                  role="menuitem"
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`min-h-[44px] px-3 py-2 rounded-lg text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60 ${
                    isCurrent(item.href)
                      ? "text-blue-700 bg-blue-50"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* WhatsApp CTA */}
            <li role="none">
              <a
                role="menuitem"
                href="https://wa.me/905453048671?text=Merhaba%2C+Sahneva%27dan+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 min-h-[44px]"
                aria-label="WhatsApp üzerinden teklif iste"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp Teklif
                <span className="sr-only">(yeni sekmede açılır)</span>
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            id="nav-toggle-btn"
            className="lg:hidden inline-flex items-center justify-center rounded-lg min-h-[44px] min-w-[44px] px-3 py-2 text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
            aria-controls={navId}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          ref={menuRef}
          className={`lg:hidden mt-3 rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden transition-all ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          } motion-reduce:transition-none`}
          aria-hidden={!open}
        >
          <div className="p-2">
            <div className="px-2 pb-2 pt-3 text-xs font-semibold text-neutral-500">Hizmetler</div>
            <ul className="px-2 pb-2 space-y-1">
              {services.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    ref={idx === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-2 pt-2 text-xs font-semibold text-neutral-500">Genel</div>
            <ul className="px-2 py-2 space-y-1">
              {primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/905453048671?text=Merhaba%2C+Sahneva%27dan+teklif+almak+istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 min-h-[44px]"
                  aria-label="WhatsApp üzerinden teklif iste"
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden="true">💬</span>
                  WhatsApp Teklif
                  <span className="sr-only">(yeni sekmede açılır)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
