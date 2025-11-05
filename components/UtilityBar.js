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
  const [scrolled, setScrolled] = useState(false);
  const [isHighContrast, setHighContrast] = useState(false);

  const dialogRef = useRef(null);
  const toolsRef = useRef(null);
  const lastFocusRef = useRef(null);

  const syncHighContrastState = useCallback(() => {
    if (typeof document === "undefined") return;
    setHighContrast(document.documentElement.classList.contains("hc"));
  }, []);

  // Kontrast tercih yükle
  useEffect(() => {
    if (typeof document === "undefined") return;
    const saved = typeof window !== "undefined" ? localStorage.getItem("hc") : null;
    if (saved === "1") document.documentElement.classList.add("hc");
    syncHighContrastState();
  }, [syncHighContrastState]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const onStorage = (event) => {
      if (event.key === "hc") {
        if (event.newValue === "1") {
          document.documentElement.classList.add("hc");
        } else {
          document.documentElement.classList.remove("hc");
        }
        syncHighContrastState();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [syncHighContrastState]);

  // Scroll durumu (görünürlük/animasyon)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setActiveTool(null);
      }
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

  const utilityButtonBase =
    "relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 motion-reduce:transform-none motion-reduce:transition-none utility-hc-button";

  return (
    <>
      {/* Sağ sabit bar (mobil sağ-alt, masaüstü orta-sağ) */}
      <div
        ref={toolsRef}
        className={[
          "utility-surface fixed z-[1000] flex -translate-y-0 md:-translate-y-1/2 flex-col items-center gap-2",
          "rounded-3xl border border-white/30 bg-white/90 p-2 md:p-3",
          "text-slate-800 shadow-2xl outline outline-1 outline-black/5 backdrop-blur-lg",
          "transition-all duration-300 will-change-transform motion-reduce:transition-none",
          // Konum
          "right-4 bottom-20 md:bottom-auto md:right-4 md:top-1/2",
          // Görünürlük (mobilde scroll sonrası göster)
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto",
          // Boyut
          "max-w-[56px] md:max-w-[72px]",
        ].join(" ")}
        style={{
          // Güvenli alan: iOS alt çentik
          marginBottom: "max(0px, env(safe-area-inset-bottom))",
        }}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {/* Erişilebilirlik */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${isAccessibilityOpen ? "scale-105 bg-gradient-to-br from-fuchsia-400 to-rose-500" : ""}`}
              onClick={() => toggleTool("accessibility")}
              title="Erişilebilirlik araçları"
              aria-expanded={isAccessibilityOpen}
              aria-controls={isAccessibilityOpen ? "utility-accessibility" : undefined}
            >
              <span aria-hidden="true">♿</span>
              <span
                className={`absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 transition-opacity duration-300 ${isAccessibilityOpen ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </button>

            {/* Modal olmayan panel */}
            {isAccessibilityOpen && (
              <div
                id="utility-accessibility"
                className="absolute right-full top-1/2 z-[1001] mr-2 -translate-y-1/2 md:mr-3"
                role="region"
                aria-labelledby="utility-accessibility-title"
              >
                <h2 id="utility-accessibility-title" className="sr-only">
                  Erişilebilirlik araçları
                </h2>
                <div className="space-y-4 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
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
                    aria-label="Yüksek kontrast modunu değiştir"
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
              className={`${utilityButtonBase} ${activeTool === "search" ? "scale-105 bg-gradient-to-br from-fuchsia-400 to-rose-500" : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              aria-controls={isSearchOpen ? "search-dialog" : undefined}
            >
              <span aria-hidden="true">🔍</span>
              <span
                className={`absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 transition-opacity duration-300 ${activeTool === "search" ? "opacity-100" : "opacity-0"}`}
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
              <span aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${isContactOpen ? "scale-105 bg-gradient-to-br from-fuchsia-400 to-rose-500" : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
              aria-expanded={isContactOpen}
              aria-controls={isContactOpen ? "utility-contact" : undefined}
            >
              <span aria-hidden="true">📞</span>
              <span
                className={`absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 transition-opacity duration-300 ${isContactOpen ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </button>

            {isContactOpen && (
              <div
                id="utility-contact"
                className="absolute right-full top-1/2 z-[1001] mr-2 -translate-y-1/2 md:mr-3"
                role="region"
                aria-labelledby="utility-contact-title"
              >
                <h2 id="utility-contact-title" className="sr-only">
                  Hızlı iletişim
                </h2>
                <div className="flex w-48 flex-col gap-2 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
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
          className="fixed inset-0 z-[10000] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center"
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
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
              <h2 id="search-title" className="sr-only">
                Site içi arama
              </h2>

              <div className="relative w-full flex-1">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-500" aria-hidden="true">
                  🔍
                </div>
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
                  <div className="text-5xl opacity-50" aria-hidden="true">
                    🔍
                  </div>
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
                      <span className="w-6 text-lg" aria-hidden="true">
                        {route.icon}
                      </span>
                      <span className="flex-1 font-medium">{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p>
                <strong>İpucu:</strong> "sahne", "led ekran", "ses sistemi" gibi anahtar kelimeler deneyin
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}