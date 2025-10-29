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
    title: "Modüler podyum kiralama ve kurulum hizmeti - Sahneva",
    icon: "👑"
  },
  { 
    href: "/led-ekran-kiralama", 
    label: "LED Ekran Kiralama",
    title: "Yüksek çözünürlüklü LED ekran kiralama - Sahneva",
    icon: "🖥️"
  },
  { 
    href: "/ses-isik-sistemleri", 
    label: "Ses & Işık Sistemleri",
    title: "Profesyonel ses ve ışık sistemi kiralama - Sahneva",
    icon: "🎭"
  },
  { 
    href: "/cadir-kiralama", 
    label: "Çadır Kiralama",
    title: "Etkinlik çadırı kiralama ve kurulum - Sahneva",
    icon: "⛺"
  },
  { 
    href: "/masa-sandalye-kiralama", 
    label: "Masa Sandalye Kiralama",
    title: "Masa sandalye kiralama hizmeti - Sahneva",
    icon: "🪑"
  },
  { 
    href: "/sahne-kiralama", 
    label: "Sahne Kiralama",
    title: "Profesyonel sahne kiralama ve kurulum - Sahneva",
    icon: "🎪"
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

  // ✅ DÜZELTİLDİ: Optimize edilmiş burst animasyonu
  const burst = useCallback((e, colors = ["#6366f1", "#8b5cf6"]) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 80;
      const n = 6;
      const life = 400;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
        const dist = 28 + Math.random() * 24;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", colors[0]);
        el.style.setProperty("--burst-c2", colors[1]);
        
        const s = 4 + Math.random() * 4;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        }, life + 40);
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

  // ✅ DÜZELTİLDİ: Sabit className değerleri
  const whatsappBtnClass = "ml-2 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px]";
  
  const mobileWhatsappBtnClass = "block text-center mt-4 rounded-xl px-6 py-4 text-white text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] flex items-center justify-center gap-3";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gradient-to-r focus:from-blue-600 focus:to-purple-600 focus:px-3 focus:py-2 focus:text-white focus:font-semibold"
      >
        Ana içeriğe atla
      </a>

      {/* ✅ DÜZELTİLDİ: Header with gradient and backdrop blur */}
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b",
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-xl border-neutral-200/60 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-transparent",
        ].join(" ")}
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ✅ DÜZELTİLDİ: Logo - arkadaki gradient kaldırıldı */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group" 
              aria-label="Sahneva - Profesyonel sahne ve etkinlik ekipmanları kiralama"
              title="Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama"
              itemProp="url"
            >
              <Image
                src="/img/logo.png"
                alt="Sahneva Logo - Profesyonel sahne, podyum, LED ekran kiralama"
                width={scrolled ? 140 : 160}
                height={scrolled ? 35 : 40}
                priority={pathname === "/"}
                sizes="(max-width: 768px) 120px, 160px"
                className="transition-all duration-300 h-8 lg:h-10 w-auto"
                itemProp="logo"
              />
              {!scrolled && (
                <div className="hidden lg:block h-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
              )}
            </Link>

            {/* ✅ DÜZELTİLDİ: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Ana menü">
              <Link
                href="/hakkimizda"
                className={[
                  "relative text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg",
                  active("/hakkimizda") 
                    ? "text-blue-600 bg-blue-50/80" 
                    : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80",
                ].join(" ")}
                aria-current={active("/hakkimizda") ? "page" : undefined}
                title="Sahneva Hakkında - Şirket bilgileri ve referanslar"
              >
                Hakkımızda
              </Link>

              {/* ✅ DÜZELTİLDİ: Services Dropdown with enhanced design */}
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
                    "relative text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 group",
                    active("/hizmetler") || servicesOpen
                      ? "text-blue-600 bg-blue-50/80" 
                      : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                  ].join(" ")}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls={servicesMenuId}
                  onClick={() => setServicesOpen((s) => !s)}
                  title="Sahneva Hizmetler - Tüm ekipman kiralama hizmetlerimiz"
                >
                  <span className="flex items-center gap-1">
                    Hizmetler
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
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
                  className={`absolute left-0 top-full mt-1 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 rounded-xl shadow-2xl z-[60] overflow-hidden
                              ${servicesOpen ? "animate-fadeIn" : "pointer-events-none"} `}
                  onMouseEnter={openNow}
                  onMouseLeave={closeWithDelay}
                >
                  <div className="p-2">
                    {serviceLinks.map(({ href, label, title, icon }) => (
                      <Link
                        key={href}
                        role="menuitem"
                        href={href}
                        className="group flex items-center gap-3 px-3 py-3 text-sm text-neutral-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-200/60"
                        onClick={() => setServicesOpen(false)}
                        aria-current={active(href) ? "page" : undefined}
                        title={title}
                      >
                        <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                          {icon}
                        </span>
                        <span className="flex-1 font-medium">{label}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/iletisim"
                className={[
                  "relative text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg",
                  active("/iletisim") 
                    ? "text-blue-600 bg-blue-50/80" 
                    : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80",
                ].join(" ")}
                aria-current={active("/iletisim") ? "page" : undefined}
                title="Sahneva İletişim - Bize ulaşın ve teklif alın"
              >
                İletişim
              </Link>

              {/* ✅ DÜZELTİLDİ: WhatsApp butonu with fixed className */}
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)"
                className={whatsappBtnClass}
                onClick={(e) => burst(e, ["#10b981", "#059669"])}
                title="WhatsApp'tan anında teklif alın - Sahneva"
              >
                <span aria-hidden="true" className="text-lg">💬</span>
                <span>WhatsApp Teklif</span>
              </a>
            </nav>

            {/* ✅ DÜZELTİLDİ: Mobil menü butonu */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200/60 hover:bg-white hover:border-neutral-300 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 min-h-[44px] min-w-[44px]"
              aria-label="Menüyü aç veya kapat"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              title="Mobil menü"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ✅ DÜZELTİLDİ: Mobil menü with enhanced design */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
        className={[
          "lg:hidden fixed z-50 left-0 right-0 top-16",
          "bg-white/95 backdrop-blur-xl border-t border-neutral-200/60 rounded-b-2xl shadow-2xl",
          "transition-all duration-500 will-change-transform overflow-hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/hakkimizda"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 py-4 px-4 text-neutral-800 font-semibold text-base rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60"
            aria-current={active("/hakkimizda") ? "page" : undefined}
            title="Sahneva Hakkında"
          >
            <span className="text-lg">👥</span>
            Hakkımızda
          </Link>

          <div className="py-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
              className="w-full flex items-center justify-between gap-3 py-4 px-4 text-base font-semibold text-neutral-900 rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60 min-h-[44px]"
              title="Sahneva Hizmetler Menüsü"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <span>Hizmetler</span>
              </div>
              <svg
                className={`w-5 h-5 shrink-0 text-neutral-700 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              id="mobile-services-list"
              className={`overflow-hidden transition-all duration-500 ${
                mobileServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 space-y-1 rounded-xl border border-neutral-200/60 bg-white/80 p-2">
                {serviceLinks.map(({ href, label, title, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-neutral-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-200/60 min-h-[44px]"
                    aria-current={active(href) ? "page" : undefined}
                    title={title}
                  >
                    <span className="text-base opacity-70">{icon}</span>
                    <span className="flex-1 font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 py-4 px-4 text-neutral-800 font-semibold text-base rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60"
            aria-current={active("/iletisim") ? "page" : undefined}
            title="Sahneva İletişim"
          >
            <span className="text-lg">📞</span>
            İletişim
          </Link>

          {/* ✅ DÜZELTİLDİ: Mobil WhatsApp butonu with fixed className */}
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)"
            className={mobileWhatsappBtnClass}
            onClick={(e) => {
              burst(e, ["#10b981", "#059669"]);
              setMobileOpen(false);
            }}
            title="WhatsApp'tan teklif alın"
          >
            <span aria-hidden="true" className="text-lg">💬</span>
            <span>WhatsApp Teklif</span>
          </a>
        </div>
      </div>

      {/* ✅ DÜZELTİLDİ: Burst particle styles */}
      <style jsx>{`
        .burst-particle {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          background: linear-gradient(135deg, var(--burst-c1), var(--burst-c2));
          border-radius: 50%;
          animation: burst-animation var(--life) ease-out forwards;
        }

        @keyframes burst-animation {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dx), var(--dy)) rotate(var(--dr));
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
