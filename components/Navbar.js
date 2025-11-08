"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white focus:font-semibold"
      >
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md border-b border-neutral-200" : "bg-white/90"
        } backdrop-blur-lg`}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
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

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Ana menü">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[15px] font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive(href)
                    ? "text-blue-700 bg-blue-50 border border-blue-200"
                    : "text-neutral-800 hover:text-blue-700 hover:bg-neutral-100"
                }`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              Teklif Al
            </a>
          </nav>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-3 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            aria-label="Menüyü aç/kapat"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="w-6 h-6 relative" aria-hidden="true">
              <span
                className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${
                  mobileOpen ? "rotate-45 top-2.5" : "top-1"
                } left-0`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${
                  mobileOpen ? "opacity-0" : "top-2.5"
                } left-0`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-neutral-800 transform transition ${
                  mobileOpen ? "-rotate-45 top-2.5" : "top-4"
                } left-0`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobil Menü */}
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
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block text-[15px] font-medium text-neutral-800 px-4 py-3 rounded-lg hover:bg-neutral-100 transition"
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}

          {/* Mobil WhatsApp CTA */}
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center rounded-lg px-5 py-3 text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </>
  );
}
