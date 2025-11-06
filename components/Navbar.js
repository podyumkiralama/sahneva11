// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

// 🔻 Mobil menüyü ayrı chunk olarak yükle (ilk yüklemeyi hafifletir)
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

/* ... serviceLinks aynı ... */

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimer = useRef(null);

  const active = useCallback(
    (href) => pathname === href || (href !== "/" && pathname?.startsWith(href)),
    [pathname]
  );

  // Daha hafif başlık: mobilde ağır blur yerine sade arka plan
  const isTouch = typeof window !== "undefined" && matchMedia?.("(pointer: coarse)").matches;
  const headerBase = isTouch
    ? "bg-white/98 border-neutral-200/70" // mobil: blur yok → boyama daha az
    : "bg-white/98 backdrop-blur-xl border-neutral-200/70";

  // scroll dinleme
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

  // dış tıklama
  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    }
    if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  // rota değişince kapat
  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  const openNow = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setServicesOpen(true); };
  const closeWithDelay = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const onBlurSafe = useCallback((e) => { if (e.currentTarget.contains(e.relatedTarget)) return; closeWithDelay(); }, []);

  const whatsappBtnClass =
    "ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-white text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] border border-green-600/20";

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white">
        Ana içeriğe atla
      </a>

      {/* Header — mobilde blur kaldırıldı, z-index/isolate yüksek */}
      <header
        className={`fixed top-0 inset-x-0 z-[200] isolate transition-all duration-500 border-b ${headerBase} ${scrolled || mobileOpen ? "" : "border-transparent"}`}
        itemScope itemType="https://schema.org/Organization"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Sahneva - Profesyonel sahne ve etkinlik ekipmanları kiralama" title="Sahneva Ana Sayfa" itemProp="url">
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
            </Link>

            {/* Masaüstü menü (değişmedi) */}
            {/* ... mevcut desktop nav + hizmetler dropdown ... */}

            {/* Mobil menü butonu */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-xl bg-white/95 border border-neutral-200/60 hover:border-neutral-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 min-h-[44px] min-w-[44px]"
              aria-label="Menüyü aç veya kapat"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              title="Mobil menü"
            >
              <span className="relative w-6 h-6" aria-hidden="true">
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-2"}`} />
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-2"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 🔻 Mobil menü — ayrı chunk */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeFn={active}
        serviceLinks={serviceLinks}
        whatsappBtnClass={
          "block text-center mt-4 rounded-xl px-5 py-3 text-white text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] flex items-center justify-center gap-2 border border-green-600/20"
        }
        burst={(e, c) => {
          if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
          // hafif partikül
          const x = e?.clientX ?? window.innerWidth / 2;
          const y = e?.clientY ?? 80;
          const n = 6, life = 350;
          const frag = document.createDocumentFragment();
          for (let i = 0; i < n; i++) {
            const el = document.createElement("span");
            el.className = "burst-particle";
            el.setAttribute("aria-hidden", "true");
            const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
            const dist = 26 + Math.random() * 20;
            el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
            el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
            el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
            el.style.setProperty("--life", `${life}ms`);
            el.style.setProperty("--burst-c1", c?.[0] ?? "#10b981");
            el.style.setProperty("--burst-c2", c?.[1] ?? "#059669");
            const s = 4 + Math.random() * 3;
            el.style.width = el.style.height = s + "px";
            el.style.left = `${x}px`; el.style.top = `${y}px`;
            frag.appendChild(el);
            setTimeout(() => el.remove(), life + 40);
          }
          document.body.appendChild(frag);
        }}
      />

      {/* Animasyon sınıfları küçük ve global tutulabilir */}
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
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) rotate(var(--dr)); opacity: 0; }
        }
      `}</style>
    </>
  );
}
