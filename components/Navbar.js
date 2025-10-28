// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const serviceLinks = [
  { 
    href: "/podyum-kiralama", 
    label: "Podyum Kiralama",
    title: "Modüler podyum kiralama ve kurulum hizmeti - Sahneva"
  },
  { 
    href: "/led-ekran-kiralama", 
    label: "LED Ekran Kiralama",
    title: "Yüksek çözünürlüklü LED ekran kiralama - Sahneva"
  },
  { 
    href: "/ses-isik-sistemleri", 
    label: "Ses & Işık Sistemleri",
    title: "Profesyonel ses ve ışık sistemi kiralama - Sahneva"
  },
  { 
    href: "/cadir-kiralama", 
    label: "Çadır Kiralama",
    title: "Etkinlik çadırı kiralama ve kurulum - Sahneva"
  },
  { 
    href: "/masa-sandalye-kiralama", 
    label: "Masa Sandalye Kiralama",
    title: "Masa sandalye kiralama hizmeti - Sahneva"
  },
  { 
    href: "/sahne-kiralama", 
    label: "Sahne Kiralama",
    title: "Profesyonel sahne kiralama ve kurulum - Sahneva"
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const hoverTimer = useRef(null);
  const servicesBtnId = "nav-services-button";
  const servicesMenuId = "nav-services-menu";

  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş burst animasyonu
  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 80;
      const n = 6; // ✅ Optimize: 10'dan 6'ya düşürüldü
      const life = 400; // ✅ Optimize: 600ms'den 400ms'ye

      // ✅ İYİLEŞTİRİLDİ: DocumentFragment kullanımı
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
        const dist = 28 + Math.random() * 24; // ✅ Optimize: mesafe azaltıldı
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", "#22c55e");
        el.style.setProperty("--burst-c2", "#6d28d9");
        
        const s = 4 + Math.random() * 4; // ✅ Optimize: boyut küçültüldü
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        }, life + 40); // ✅ Optimize: timeout azaltıldı
      }
      
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const active = useCallback(
    (href) => pathname === href || (href !== "/" && pathname?.startsWith(href)),
    [pathname]
  );

  const openNow = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };
  const closeWithDelay = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Ana içeriğe atla
      </a>

      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-colors border-b",
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur border-neutral-200 shadow-sm"
            : "bg-white border-transparent",
        ].join(" ")}
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ✅ İYİLEŞTİRİLDİ: Logo SEO optimizasyonu */}
            <Link 
              href="/" 
              className="flex items-center gap-2" 
              aria-label="Sahneva - Profesyonel sahne ve etkinlik ekipmanları kiralama"
              title="Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama"
              itemProp="url"
            >
              <Image
                src="/img/logo.png"
                alt="Sahneva Logo - Profesyonel sahne, podyum, LED ekran kiralama"
                width={160}
                height={40}
                priority={pathname === "/"}
                sizes="(max-width: 768px) 120px, 160px"
                className="h-10 w-auto"
                itemProp="logo"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6" aria-label="Ana menü">
              {/* ✅ İYİLEŞTİRİLDİ: Link SEO optimizasyonu */}
              <Link
                href="/hakkimizda"
                className={[
                  "text-sm font-medium transition",
                  active("/hakkimizda") ? "text-[#6d28d9]" : "text-neutral-800",
                  "hover:text-[#6d28d9]",
                ].join(" ")}
                aria-current={active("/hakkimizda") ? "page" : undefined}
                title="Sahneva Hakkında - Şirket bilgileri ve referanslar"
              >
                Hakkımızda
              </Link>

              {/* ✅ İYİLEŞTİRİLDİ: Hizmetler Dropdown SEO optimizasyonu */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={openNow}
                onMouseLeave={closeWithDelay}
                onFocus={openNow}
                onBlur={closeWithDelay}
              >
                <button
                  id={servicesBtnId}
                  type="button"
                  className={[
                    "text-sm font-medium px-1 py-2 rounded transition",
                    active("/hizmetler") ? "text-[#6d28d9]" : "text-neutral-800",
                    "hover:text-[#6d28d9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/30",
                  ].join(" ")}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls={servicesMenuId}
                  onClick={() => setServicesOpen((s) => !s)}
                  title="Sahneva Hizmetler - Tüm ekipman kiralama hizmetlerimiz"
                >
                  Hizmetler
                </button>

                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-full h-2"
                  onMouseEnter={openNow}
                />

                <div
                  id={servicesMenuId}
                  role="menu"
                  aria-labelledby={servicesBtnId}
                  hidden={!servicesOpen}
                  className={`absolute left-0 top-full mt-2 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg z-[60]
                              ${servicesOpen ? "" : "pointer-events-none"} `}
                  onMouseEnter={openNow}
                  onMouseLeave={closeWithDelay}
                >
                  <ul className="py-1">
                    {serviceLinks.map(({ href, label, title }) => (
                      <li key={href} role="none">
                        <Link
                          role="menuitem"
                          href={href}
                          className="block px-4 py-2 text-sm text-neutral-800 hover:bg-[#f3f0ff] hover:text-[#6d28d9] transition-colors"
                          onClick={() => setServicesOpen(false)}
                          aria-current={active(href) ? "page" : undefined}
                          title={title}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/iletisim"
                className={[
                  "text-sm font-medium transition",
                  active("/iletisim") ? "text-[#6d28d9]" : "text-neutral-800",
                  "hover:text-[#6d28d9]",
                ].join(" ")}
                aria-current={active("/iletisim") ? "page" : undefined}
                title="Sahneva İletişim - Bize ulaşın ve teklif alın"
              >
                İletişim
              </Link>

              {/* ✅ İYİLEŞTİRİLDİ: WhatsApp butonu SEO optimizasyonu */}
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)"
                className="ml-2 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white text-sm font-semibold
                           bg-[#15803d] hover:bg-[#166534] transition-colors focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-[#6d28d9]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           min-h-[40px]"
                onClick={burst}
                title="WhatsApp'tan anında teklif alın - Sahneva"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp Teklif
              </a>
            </nav>

            {/* ✅ Mobil menü butonu - değişmedi */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40
                         min-h-[44px] min-w-[44px]"
              aria-label="Menüyü aç veya kapat"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              title="Mobil menü"
            >
              <svg
                className="h-7 w-7 text-neutral-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* ✅ İYİLEŞTİRİLDİ: Mobil menü SEO optimizasyonu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
        className={[
          "md:hidden fixed z-50 left-0 right-0 top-16",
          "bg-white border-t border-neutral-200 rounded-b-2xl shadow-lg",
          "transition-all duration-300 will-change-transform",
          mobileOpen ? "max-h-[70vh]" : "max-h-0 overflow-hidden",
        ].join(" ")}
      >
        <div className="px-4 py-3 space-y-3 max-h-[70vh] overflow-y-auto">
          <Link
            href="/hakkimizda"
            onClick={() => setMobileOpen(false)}
            className="block py-3 border-b text-neutral-800 font-medium text-base"
            aria-current={active("/hakkimizda") ? "page" : undefined}
            title="Sahneva Hakkında"
          >
            Hakkımızda
          </Link>

          <div className="py-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
              className="w-full flex items-center justify-between gap-3 py-3 text-base font-semibold text-neutral-900
                         min-h-[44px]"
              title="Sahneva Hizmetler Menüsü"
            >
              <span>Hizmetler</span>
              <svg
                className={`h-5 w-5 shrink-0 text-neutral-700 transition-transform ${
                  mobileServicesOpen ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
            </button>

            <div
              id="mobile-services-list"
              className={`overflow-hidden transition-[max-height] duration-300 ${
                mobileServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50">
                {serviceLinks.map(({ href, label, title }) => (
                  <li key={href} className="border-b last:border-b-0 border-neutral-200">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-sm text-neutral-800 hover:bg-[#f3f0ff] hover:text-[#6d28d9] transition-colors
                                 min-h-[44px] flex items-center"
                      aria-current={active(href) ? "page" : undefined}
                      title={title}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="block py-3 border-t text-neutral-800 font-medium text-base"
            aria-current={active("/iletisim") ? "page" : undefined}
            title="Sahneva İletişim"
          >
            İletişim
          </Link>

          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)"
            className="block text-center mt-3 rounded-lg px-4 py-3 text-white text-base font-semibold 
                       bg-[#15803d] hover:bg-[#166534] transition-colors focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-[#6d28d9]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                       min-h-[44px] flex items-center justify-center gap-2"
            onClick={(e) => {
              burst(e);
              setMobileOpen(false);
            }}
            title="WhatsApp'tan teklif alın"
          >
            <span aria-hidden="true">💬</span>
            WhatsApp Teklif
          </a>
        </div>
      </div>
    </>
  );
}
