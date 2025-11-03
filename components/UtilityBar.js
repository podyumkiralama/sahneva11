// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

  const dialogRef = useRef(null);
  const toolsRef = useRef(null);
  const lastFocusRef = useRef(null);

  // Kontrast tercih yükle
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("hc") : null;
    if (saved === "1") document.documentElement.classList.add("hc");
  }, []);

  // Scroll durumu (buton konumu/animasyonu)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
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

  const filtered =
    query.trim().length === 0
      ? ROUTES
      : ROUTES.filter((r) => r.label.toLowerCase().includes(query.toLowerCase().trim()));

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

  return (
    <>
      {/* Sağ sabit bar */}
      <div
        ref={toolsRef}
        className={`utility-bar-container ${scrolled ? "scrolled" : ""}`}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        <div className="utility-bar-content">
          {/* Erişilebilirlik */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn ${isAccessibilityOpen ? "utility-btn-active" : ""}`}
              onClick={() => toggleTool("accessibility")}
              title="Erişilebilirlik araçları"
              aria-expanded={isAccessibilityOpen}
              // aria-controls sadece panel DOM'dayken eklenir
              aria-controls={isAccessibilityOpen ? "utility-accessibility" : undefined}
            >
              <span className="utility-icon" aria-hidden="true">♿</span>
              <span className="utility-dot" aria-hidden="true" />
            </button>

            {/* Modal olmayan panel => role="region" + sr-only başlık */}
            {isAccessibilityOpen && (
              <div
                id="utility-accessibility"
                className="utility-tooltip"
                role="region"
                aria-labelledby="utility-accessibility-title"
              >
                <h2 id="utility-accessibility-title" className="sr-only">Erişilebilirlik araçları</h2>
                <div className="utility-tooltip-content">
                  <div className="font-size-controls">
                    <div className="control-label">Yazı Boyutu</div>
                    <div className="font-buttons">
                      <button onClick={() => bumpFont(-1)} className="font-btn" aria-label="Yazı boyutunu küçült">A-</button>
                      <button onClick={() => bumpFont(1)} className="font-btn" aria-label="Yazı boyutunu büyüt">A+</button>
                    </div>
                  </div>
                  <button
                    onClick={toggleContrast}
                    className="contrast-btn"
                    aria-pressed={document.documentElement.classList.contains("hc")}
                  >
                    🎨 Yüksek Kontrast
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Arama */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn ${activeTool === "search" ? "utility-btn-active" : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              aria-controls={isSearchOpen ? "search-dialog" : undefined}
            >
              <span className="utility-icon" aria-hidden="true">🔍</span>
              <span className="utility-dot" aria-hidden="true" />
            </button>
          </div>

          {/* Yukarı */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn"
              onClick={scrollTop}
              title="En üste dön"
              aria-label="Sayfanın en üstüne git"
            >
              <span className="utility-icon" aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn ${isContactOpen ? "utility-btn-active" : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
              aria-expanded={isContactOpen}
              aria-controls={isContactOpen ? "utility-contact" : undefined}
            >
              <span className="utility-icon" aria-hidden="true">📞</span>
              <span className="utility-dot" aria-hidden="true" />
            </button>

            {/* Modal olmayan panel => role="region" + sr-only başlık */}
            {isContactOpen && (
              <div
                id="utility-contact"
                className="utility-tooltip"
                role="region"
                aria-labelledby="utility-contact-title"
              >
                <h2 id="utility-contact-title" className="sr-only">Hızlı iletişim</h2>
                <div className="utility-tooltip-content">
                  <a
                    href="tel:+905453048671"
                    className="contact-btn phone"
                    onClick={() => setActiveTool(null)}
                    aria-label="Telefon ile ara"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn whatsapp"
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

      {/* Arama Modalı (gerçek dialog) */}
      {isSearchOpen && (
        <div
          id="search-dialog"
          className="search-modal-overlay"
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
            className="search-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <h2 id="search-title" className="sr-only">Site içi arama</h2>

              <div className="search-input-wrapper">
                <div className="search-icon" aria-hidden="true">🔍</div>
                <input
                  type="text"
                  className="search-input"
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
                className="search-close-btn"
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

            <div id="search-results" className="search-results">
              {filtered.length === 0 ? (
                <div className="no-results" role="status" aria-live="polite">
                  <div className="no-results-icon" aria-hidden="true">🔍</div>
                  <div className="no-results-title">Sonuç bulunamadı</div>
                  <div className="no-results-description">Farklı anahtar kelimeler deneyin</div>
                </div>
              ) : (
                <div className="results-list" role="list">
                  {filtered.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="result-item"
                      onClick={() => {
                        setSearchOpen(false);
                        setActiveTool(null);
                        lastFocusRef.current?.focus?.();
                      }}
                      aria-label={`${route.label} sayfasına git`}
                    >
                      <span className="result-icon" aria-hidden="true">{route.icon}</span>
                      <span className="result-label">{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="search-tips">
              <p className="tips-text">
                <strong>İpucu:</strong> "sahne", "led ekran", "ses sistemi" gibi anahtar kelimeler deneyin
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
