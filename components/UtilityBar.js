// components/UtilityBar.js
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Anasayfa", title: "Sahneva Ana Sayfa", icon: "🏠" },
  { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva Hakkında", icon: "👥" },
  { href: "/iletisim", label: "İletişim", title: "Sahneva İletişim", icon: "📞" },
  { href: "/podyum-kiralama", label: "Podyum", title: "Podyum Kiralama", icon: "👑" },
  { href: "/led-ekran-kiralama", label: "LED Ekran", title: "LED Ekran Kiralama", icon: "🖥️" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık", title: "Ses ve Işık Sistemleri", icon: "🎭" },
  { href: "/cadir-kiralama", label: "Çadır", title: "Çadır Kiralama", icon: "⛺" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", title: "Masa Sandalye Kiralama", icon: "🪑" },
  { href: "/sahne-kiralama", label: "Sahne", title: "Sahne Kiralama", icon: "🎪" },
];

export default function UtilityBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null); // "accessibility" | "contact" | "search" | null
  const [isHighContrast, setHighContrast] = useState(false);

  const dialogRef = useRef(null);
  const toolsRef = useRef(null);
  const lastFocusRef = useRef(null);

  const syncHighContrastState = useCallback(() => {
    if (typeof document === "undefined") return;
    setHighContrast(document.documentElement.classList.contains("hc"));
  }, []);

  // Yüksek kontrast state yükle
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("hc") : null;
    if (saved === "1") document.documentElement.classList.add("hc");
    syncHighContrastState();
  }, [syncHighContrastState]);

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setActiveTool(null);
        lastFocusRef.current?.focus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Dış tıklama
  useEffect(() => {
    const onClick = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) setActiveTool(null);
      if (isSearchOpen && dialogRef.current && !dialogRef.current.contains(e.target)) {
        setSearchOpen(false);
        lastFocusRef.current?.focus?.();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isSearchOpen]);

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return ROUTES;
    const lower = trimmed.toLowerCase();
    return ROUTES.filter((r) => r.label.toLowerCase().includes(lower));
  }, [query]);

  // Yazı boyutu
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize) || 16;
    const next = Math.min(20, Math.max(12, current + delta));
    root.style.fontSize = `${next}px`;
    setActiveTool(null);
  }, []);

  // Yüksek kontrast
  const toggleContrast = useCallback(() => {
    const el = document.documentElement;
    const willEnable = !el.classList.contains("hc");
    el.classList.toggle("hc");
    localStorage.setItem("hc", willEnable ? "1" : "0");
    setActiveTool(null);
    setHighContrast(willEnable);
  }, []);

  // En üste dön
  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  // Araç toggle
  const toggleTool = useCallback((toolName) => {
    setActiveTool((prev) => (prev === toolName ? null : toolName));
    if (toolName !== "search") setSearchOpen(false);
  }, []);

  // Arama modal aç
  const openSearchModal = useCallback((e) => {
    lastFocusRef.current = e?.currentTarget || document.activeElement;
    setSearchOpen(true);
    setActiveTool("search");
    setTimeout(() => {
      const input = dialogRef.current?.querySelector("input");
      input?.focus();
      input?.select();
    }, 50);
  }, []);

  const isAccessibilityOpen = activeTool === "accessibility";
  const isContactOpen = activeTool === "contact";

  // ★ BÜYÜTÜLMÜŞ BUTON STİLİ (mobilde de görünür)
  const utilityButtonBase =
    "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl " +
    "bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-xl " +
    "transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-indigo-500 motion-reduce:transform-none motion-reduce:transition-none";

  const iconCls = "text-2xl md:text-3xl";

  return (
    <>
      {/* Sağ-alt sabit bar (DAHA BÜYÜK + belirgin) */}
      <div
        ref={toolsRef}
        className="
          fixed
          right-0
          bottom-0
          z-[1000]
          flex
          max-w-[80px]
          flex-col
          items-center
          gap-3
          rounded-3xl
          border border-white/20
          bg-white/95
          p-3
          text-slate-800
          shadow-2xl
          outline outline-1 outline-black/5
          backdrop-blur-lg
        "
        style={{
          // ekranın tam köşesine otururken safe-area payını koru
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          paddingRight: "max(0.5rem, env(safe-area-inset-right))",
        }}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Erişilebilirlik */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${isAccessibilityOpen ? "scale-105" : ""}`}
              onClick={() => toggleTool("accessibility")}
              title="Erişilebilirlik araçları"
              aria-expanded={isAccessibilityOpen}
              aria-controls={isAccessibilityOpen ? "utility-accessibility" : undefined}
            >
              <span className={iconCls} aria-hidden="true">♿</span>
              <span
                className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${isAccessibilityOpen ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </button>

            {isAccessibilityOpen && (
              <div
                id="utility-accessibility"
                className="utility-panel absolute right-full top-1/2 z-[1001] mr-2 -translate-y-1/2 animate-tooltip"
                role="region"
                aria-labelledby="utility-accessibility-title"
              >
                <h2 id="utility-accessibility-title" className="sr-only">Erişilebilirlik araçları</h2>
                <div className="space-y-4 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl w-56">
                  <div className="space-y-3">
                    <div className="text-center text-sm font-semibold text-slate-600">Yazı Boyutu</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => bumpFont(-1)}
                        className="flex-1 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600 transition hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        aria-label="Yazı boyutunu küçült"
                      >
                        A-
                      </button>
                      <button
                        onClick={() => bumpFont(1)}
                        className="flex-1 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600 transition hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        aria-label="Yazı boyutunu büyüt"
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={toggleContrast}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    aria-pressed={isHighContrast}
                  >
                    🎨 Yüksek Kontrast
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Arama */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${activeTool === "search" ? "scale-105" : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              aria-controls={isSearchOpen ? "search-dialog" : undefined}
            >
              <span className={iconCls} aria-hidden="true">🔍</span>
              <span
                className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${activeTool === "search" ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Yukarı */}
          <div className="relative flex justify-center">
            <button
              className={utilityButtonBase}
              onClick={scrollTop}
              title="En üste dön"
              aria-label="Sayfanın en üstüne git"
            >
              <span className={iconCls} aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${isContactOpen ? "scale-105" : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
              aria-expanded={isContactOpen}
              aria-controls={isContactOpen ? "utility-contact" : undefined}
            >
              <span className={iconCls} aria-hidden="true">📞</span>
              <span
                className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${isContactOpen ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </button>

            {isContactOpen && (
              <div
                id="utility-contact"
                className="utility-panel absolute right-full top-1/2 z-[1001] mr-2 -translate-y-1/2 animate-tooltip"
                role="region"
                aria-labelledby="utility-contact-title"
              >
                <h2 id="utility-contact-title" className="sr-only">Hızlı iletişim</h2>
                <div className="flex w-56 flex-col gap-2 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
                  <a
                    href="tel:+905453048671"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 font-medium text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    onClick={() => setActiveTool(null)}
                    aria-label="Telefon ile ara"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 font-medium text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                    onClick={() => setActiveTool(null)}
                    aria-label="WhatsApp'tan mesaj gönder"
                  >
                    💬 WhatsApp'tan Yaz
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arama Modalı */}
      {isSearchOpen && (
        <div
          id="search-dialog"
          className="animate-overlay fixed inset-0 z-[10000] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-title"
          onClick={() => {
            setSearchOpen(false);
            setActiveTool(null);
            lastFocusRef.current?.focus?.();
          }}
        >
          <div
            ref={dialogRef}
            className="animate-modal w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
              <h2 id="search-title" className="sr-only">Site içi arama</h2>

              <div className="relative w-full flex-1">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-500" aria-hidden="true">🔍</div>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-3 text-base text-slate-700 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  placeholder="Ne aramıştınız? (sahne, led ekran, ses sistemi...)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="search-input"
                  name="search"
                  autoComplete="off"
                  aria-describedby="search-results"
                />
              </div>

              <button
                className="w-full rounded-lg bg-slate-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 md:w-auto"
                onClick={() => {
                  setSearchOpen(false);
                  setActiveTool(null);
                  lastFocusRef.current?.focus?.();
                }}
                aria-label="Arama penceresini kapat"
              >
                Kapat
              </button>
            </div>

            <div id="search-results" className="max-h-[420px] overflow-y-auto p-4">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center text-slate-500" role="status" aria-live="polite">
                  <div className="text-5xl opacity-50" aria-hidden="true">🔍</div>
                  <div className="text-lg font-semibold text-slate-700">Sonuç bulunamadı</div>
                  <div className="text-sm opacity-70">Farklı anahtar kelimeler deneyin</div>
                </div>
              ) : (
                <div className="flex flex-col gap-2" role="list">
                  {filtered.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      onClick={() => {
                        setSearchOpen(false);
                        setActiveTool(null);
                        lastFocusRef.current?.focus?.();
                      }}
                      aria-label={`${route.label} sayfasına git`}
                    >
                      <span className="w-6 text-lg" aria-hidden="true">{route.icon}</span>
                      <span className="flex-1 font-medium">{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p><strong>İpucu:</strong> "sahne", "led ekran", "ses sistemi" gibi anahtar kelimeler deneyin</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}