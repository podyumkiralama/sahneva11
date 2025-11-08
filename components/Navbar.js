"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const serviceLinks = [
  {
    href: "/podyum-kiralama",
    label: "Podyum Kiralama",
    title: "Modüler podyum kiralama - Sahneva",
    icon: "👑",
    description: "Modüler podyum sistemleri"
  },
  {
    href: "/led-ekran-kiralama",
    label: "LED Ekran Kiralama",
    title: "LED ekran kiralama - Sahneva",
    icon: "🖥️",
    description: "HD video wall çözümleri"
  },
  {
    href: "/ses-isik-sistemleri",
    label: "Ses & Işık Sistemleri",
    title: "Ses ışık kiralama - Sahneva",
    icon: "🎭",
    description: "Konser kalitesinde ekipman"
  },
  {
    href: "/cadir-kiralama",
    label: "Çadır Kiralama",
    title: "Etkinlik çadırı kiralama - Sahneva",
    icon: "⛺",
    description: "Her türlü etkinlik için çadır"
  },
  {
    href: "/masa-sandalye-kiralama",
    label: "Masa Sandalye",
    title: "Masa sandalye kiralama - Sahneva",
    icon: "🪑",
    description: "Toplantı ve davet ekipmanları"
  },
  {
    href: "/sahne-kiralama",
    label: "Sahne Kiralama",
    title: "Sahne kiralama - Sahneva",
    icon: "🎪",
    description: "Portatif sahne sistemleri"
  }
];
export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  const active = useCallback(
    (href) => pathname === href || pathname.startsWith(href),
    [pathname]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
    return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md border-b border-neutral-200"
            : "bg-white/90"
        } backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            title="Sahneva Ana Sayfa"
            aria-label="Sahneva Ana Sayfa"
          >
            <Image
              src="/img/logo.png"
              alt="Sahneva - Sahne, LED ekran, podyum kiralama"
              width={160}
              height={40}
              priority={pathname === "/"}
              loading="eager"
              sizes="(max-width: 768px) 120px, 160px"
              className="h-8 lg:h-10 w-auto transition-all duration-300"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Ana menü"
          >
            <Link
              href="/hakkimizda"
              className={`text-[15px] font-medium px-3 py-2 rounded-lg transition ${
                active("/hakkimizda")
                  ? "text-blue-700 bg-blue-50 border border-blue-200"
                  : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
              }`}
              aria-current={active("/hakkimizda") ? "page" : undefined}
            >
              Hakkımızda
            </Link>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`text-[15px] font-medium px-3 py-2 rounded-lg transition flex items-center gap-1 ${
                  servicesOpen
                    ? "text-blue-700 bg-blue-50 border border-blue-200"
                    : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
              >
                Hizmetler
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Hover köprüsü */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-full h-2"
                onMouseEnter={() => setServicesOpen(true)}
              />

              {servicesOpen && (
                <div
                  id="services-menu"
                  role="menu"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-80 bg-white border border-neutral-200 rounded-xl shadow-lg z-50"
                >
                  <div className="flex flex-col p-2">
                    {serviceLinks.map(
                      ({ href, label, title, icon, description }) => (
                        <Link
                          key={href}
                          href={href}
                          className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-neutral-100 transition"
                          role="menuitem"
                          title={title}
                        >
                          <span className="text-lg mt-0.5">{icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-neutral-900">
                              {label}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {description}
                            </div>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className={`text-[15px] font-medium px-3 py-2 rounded-lg transition ${
                active("/iletisim")
                  ? "text-blue-700 bg-blue-50 border border-blue-200"
                  : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
              }`}
              aria-current={active("/iletisim") ? "page" : undefined}
            >
              İletişim
            </Link>

            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 transition shadow-md"
              title="WhatsApp üzerinden teklif alın"
            >
              💬 WhatsApp
            </a>
          </nav>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden p-3 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition"
            aria-label="Menüyü aç/kapat"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="w-6 h-6 relative" aria-hidden="true">
              <span className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${mobileOpen ? "rotate-45 top-2.5" : "top-1"} left-0`} />
              <span className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${mobileOpen ? "opacity-0" : "top-2.5"} left-0`} />
              <span className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${mobileOpen ? "-rotate-45 top-2.5" : "top-4"} left-0`} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobil menü backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobil menü içeriği */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        className={`lg:hidden fixed z-50 left-0 right-0 top-16 bg-white border-t border-neutral-200 rounded-b-2xl shadow-2xl transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link
            href="/hakkimizda"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-neutral-800 px-4 py-3 rounded-lg hover:bg-neutral-100 transition"
          >
            👥 Hakkımızda
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((s) => !s)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-list"
            className="w-full text-left text-[15px] font-medium text-neutral-800 px-4 py-3 rounded-lg hover:bg-neutral-100 transition flex items-center justify-between"
          >
            <span className="flex items-center gap-2">🎯 Hizmetler</span>
            <svg
              className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div
            id="mobile-services-list"
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 border-l border-neutral-200 pl-4 space-y-2">
              {serviceLinks.map(({ href, label, title, icon, description }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-neutral-100 transition"
                  title={title}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">{label}</div>
                      <div className="text-xs text-neutral-500">{description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-neutral-800 px-4 py-3 rounded-lg hover:bg-neutral-100 transition"
          >
            📞 İletişim
          </Link>

          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center rounded-lg px-5 py-3 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 transition shadow-md"
          >
            💬 WhatsApp Teklif
          </a>
        </div>
      </div>
    </>
  );
}
