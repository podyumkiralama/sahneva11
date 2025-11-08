"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { href: "/sahne-kiralama", label: "Sahne Kiralama", description: "Modüler sahne sistemleri" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", description: "HD video wall çözümleri" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri", description: "Konser kalitesinde ekipman" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama", description: "Etkinlik podyumları" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama", description: "Etkinlik çadırları" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", description: "Toplantı ve davet ekipmanları" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white focus:font-semibold"
      >
        Ana içeriğe atla
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md border-b border-neutral-200" : "bg-white/90"
        } backdrop-blur-lg`}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" title="Sahneva Ana Sayfa" itemProp="url">
            <Image
              src="/img/logo.png"
              alt="Sahneva Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
              itemProp="logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Ana menü">
            <Link
              href="/hakkimizda"
              className={`text-[15px] font-medium px-3 py-2 rounded-lg transition ${
                isActive("/hakkimizda")
                  ? "text-blue-700 bg-blue-50 border border-blue-200"
                  : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
              }`}
              aria-current={isActive("/hakkimizda") ? "page" : undefined}
            >
              Hakkımızda
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((s) => !s)}
                className={`text-[15px] font-medium px-3 py-2 rounded-lg transition ${
                  servicesOpen
                    ? "text-blue-700 bg-blue-50 border border-blue-200"
                    : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Hizmetler
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-80 bg-white border border-neutral-200 rounded-xl shadow-lg z-50"
                  role="menu"
                >
                  <div className="flex flex-col p-2">
                    {serviceLinks.map(({ href, label, description }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex flex-col px-4 py-3 rounded-lg hover:bg-neutral-100 transition"
                        role="menuitem"
                        title={label}
                      >
                        <span className="text-sm font-semibold text-neutral-900">{label}</span>
                        <span className="text-xs text-neutral-500">{description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className={`text-[15px] font-medium px-3 py-2 rounded-lg transition ${
                isActive("/iletisim")
                  ? "text-blue-700 bg-blue-50 border border-blue-200"
                  : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
              }`}
              aria-current={isActive("/iletisim") ? "page" : undefined}
            >
              İletişim
            </Link>

            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-md"
            >
              Teklif Al
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden p-3 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition"
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

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        className={`md:hidden fixed top-16 inset-x-0 z-40 bg-white border-t border-neutral-200 shadow-xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 space-y-4">
          <Link href="/hakkimizda" onClick={() => setMobileOpen(false)} className="block text-[15px] font-medium text-neutral-800 px-4 py-3 rounded-lg hover:bg-neutral-100 transition">
            Hakkımızda
          </Link>

          <button
            type="button"
            onClick={()
