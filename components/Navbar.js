// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
];

const LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesBtnRef = useRef(null);
  const servicesMenuRef = useRef(null);

  // Body scroll kilidi (mobil menü açıkken)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Hizmetler açılır menü – dış tıklama kapatma
  useEffect(() => {
    function onDocClick(e) {
      if (!servicesOpen) return;
      const btn = servicesBtnRef.current;
      const menu = servicesMenuRef.current;
      if (btn && btn.contains(e.target)) return;
      if (menu && menu.contains(e.target)) return;
      setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [servicesOpen]);

  // Klavye: Esc ile menüyü kapat
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-[100] bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Ana içeriğe atla
      </a>

      {/* Üst bilgi barı */}
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+905453048671" className="hover:underline">
              📞 +90 545 304 86 71
            </a>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C%20etkinli%C4%9Fimiz%20i%C3%A7in%20h%C4%B1zl%C4%B1%20teklif%20alabilir%20miyim%3F"
              className="hover:underline"
              target="_blank"
              rel="noopener nofollow"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <span aria-hidden="true">⏱️</span>
              <span>2 saat içinde dönüş</span>
            </span>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <header
        className="sticky top-0 inset-x-0 z-50 transition-all duration-500 border-b bg-white/80 backdrop-blur-md border-slate-200"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center">
                <span className="sr-only">Sahneva – Anasayfa</span>
                <Image
                  src="/img/logo.png"
                  alt="Sahneva Logo - Profesyonel sahne, podyum, LED ekran kiralama"
                  width={120}
                  height={40}
                />
              </Link>
            </div>

            {/* Masaüstü menü */}
            <nav className="hidden lg:block" aria-label="Ana menü">
              <ul className="flex items-center gap-2">
                {/* Hizmetler açılır menü (erişilebilir) */}
                <li className="relative">
                  <button
                    type="button"
                    ref={servicesBtnRef}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((s) => !s)}
                    className={[
                      "px-3 py-2 rounded-xl text-sm font-medium transition-colors inline-flex items-center gap-2",
                      servicesOpen
                        ? "text-white bg-blue-700"
                        : "text-slate-800 hover:text-blue-700 hover:bg-blue-50",
                    ].join(" ")}
                  >
                    Hizmetler
                    <span className="inline-block w-4 h-4" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
                      </svg>
                    </span>
                  </button>

                  {/* Açılır panel */}
                  <div
                    id="services-menu"
                    ref={servicesMenuRef}
                    className={[
                      "absolute left-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-lg",
                      servicesOpen ? "block" : "hidden",
                    ].join(" ")}
                  >
                    <ul className="py-2">
                      {SERVICES.map((s) => {
                        const active = isActive(s.href);
                        return (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              aria-current={active ? "page" : undefined}
                              className={[
                                "block px-4 py-2 rounded-lg text-sm",
                                active
                                  ? "text-white bg-blue-700"
                                  : "text-slate-800 hover:text-blue-700 hover:bg-blue-50",
                              ].join(" ")}
                              onClick={() => setServicesOpen(false)}
                            >
                              {s.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                {/* Diğer üst seviye sayfalar */}
                {LINKS.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                          active
                            ? "text-white bg-blue-700"
                            : "text-slate-800 hover:text-blue-700 hover:bg-blue-50",
                        ].join(" ")}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Sağ CTA alanı (masaüstü) */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C%20etkinli%C4%9Fimiz%20i%C3%A7in%20LED%20ekran%20%2F%20podyum%20teklifi%20almak%20istiyorum."
                className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener nofollow"
              >
                <span aria-hidden="true">💬</span>
                <span className="ml-2">WhatsApp Teklif</span>
              </a>
              <a
                href="tel:+905453048671"
                className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors"
              >
                <span aria-hidden="true">📞</span>
                <span className="ml-2">Hemen Ara</span>
              </a>
            </div>

            {/* Mobil menü butonu */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 bg-white/70 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menüyü aç veya kapat"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((s) => !s)}
              >
                <span className="relative w-6 h-6" aria-hidden="true">
                  <span
                    className={[
                      "absolute left-1/2 top-1/2 w-5 h-0.5 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-900 transition-transform duration-300",
                      mobileOpen ? "rotate-45" : "-translate-y-2",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-1/2 top-1/2 w-5 h-0.5 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-900 transition-opacity duration-300",
                      mobileOpen ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-1/2 top-1/2 w-5 h-0.5 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-900 transition-transform duration-300",
                      mobileOpen ? "-rotate-45" : "translate-y-2",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobil menü paneli */}
        <div
          id="mobile-menu"
          className={[
            "lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur",
            mobileOpen ? "block" : "hidden",
          ].join(" ")}
        >
          <nav aria-label="Mobil menü">
            {/* Hizmetler grubu */}
            <div className="px-4 py-3">
              <p className="px-2 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Hizmetler
              </p>
              <ul className="space-y-1">
                {SERVICES.map((s) => {
                  const active = isActive(s.href);
                  return (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "block w-full px-3 py-3 rounded-lg text-base font-medium",
                          active
                            ? "text-white bg-blue-700"
                            : "text-slate-800 hover:text-blue-700 hover:bg-blue-50",
                        ].join(" ")}
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Diğer bağlantılar */}
            <div className="px-4 pb-4">
              <p className="px-2 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Kurumsal
              </p>
              <ul className="space-y-1">
                {LINKS.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "block w-full px-3 py-3 rounded-lg text-base font-medium",
                          active
                            ? "text-white bg-blue-700"
                            : "text-slate-800 hover:text-blue-700 hover:bg-blue-50",
                        ].join(" ")}
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* CTA blokları */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/905453048671?text=Merhaba%2C%20etkinlik%20i%C3%A7in%20h%C4%B1zl%C4%B1%20teklif%20rica%20ederim."
                  className="inline-flex items-center justify-center px-3 py-3 rounded-lg text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener nofollow"
                  onClick={() => setMobileOpen(false)}
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center px-3 py-3 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  📞 Ara
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
