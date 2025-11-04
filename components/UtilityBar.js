// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import styles from "./UtilityBar.module.css";

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
        className={`${styles.utilityBarContainer} ${scrolled ? styles.scrolled : ""}`}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        <div className={styles.utilityBarContent}>
          {/* Erişilebilirlik */}
          <div className={styles.utilityToolWrapper}>
            <button
              className={`${styles.utilityBtn} ${isAccessibilityOpen ? styles.utilityBtnActive : ""}`}
              onClick={() => toggleTool("accessibility")}
              title="Erişilebilirlik araçları"
              aria-expanded={isAccessibilityOpen}
              // aria-controls sadece panel DOM'dayken eklenir
              aria-controls={isAccessibilityOpen ? "utility-accessibility" : undefined}
            >
              <span aria-hidden="true">♿</span>
              <span className={styles.utilityDot} aria-hidden="true" />
            </button>

            {/* Modal olmayan panel => role="region" + sr-only başlık */}
            {isAccessibilityOpen && (
              <div
                id="utility-accessibility"
                className={styles.utilityTooltip}
                role="region"
                aria-labelledby="utility-accessibility-title"
              >
                <h2 id="utility-accessibility-title" className="sr-only">Erişilebilirlik araçları</h2>
                <div className={styles.utilityTooltipContent}>
                  <div className={styles.fontSizeControls}>
                    <div className={styles.controlLabel}>Yazı Boyutu</div>
                    <div className={styles.fontButtons}>
                      <button onClick={() => bumpFont(-1)} className={styles.fontBtn} aria-label="Yazı boyutunu küçült">
                        A-
                      </button>
                      <button onClick={() => bumpFont(1)} className={styles.fontBtn} aria-label="Yazı boyutunu büyüt">
                        A+
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={toggleContrast}
                    className={styles.contrastBtn}
                    aria-pressed={document.documentElement.classList.contains("hc")}
                  >
                    🎨 Yüksek Kontrast
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Arama */}
          <div className={styles.utilityToolWrapper}>
            <button
              className={`${styles.utilityBtn} ${activeTool === "search" ? styles.utilityBtnActive : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              aria-controls={isSearchOpen ? "search-dialog" : undefined}
            >
              <span aria-hidden="true">🔍</span>
              <span className={styles.utilityDot} aria-hidden="true" />
            </button>
          </div>

          {/* Yukarı */}
          <div className={styles.utilityToolWrapper}>
            <button
              className={styles.utilityBtn}
              onClick={scrollTop}
              title="En üste dön"
              aria-label="Sayfanın en üstüne git"
            >
              <span aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className={styles.utilityToolWrapper}>
            <button
              className={`${styles.utilityBtn} ${isContactOpen ? styles.utilityBtnActive : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
              aria-expanded={isContactOpen}
              aria-controls={isContactOpen ? "utility-contact" : undefined}
            >
              <span aria-hidden="true">📞</span>
              <span className={styles.utilityDot} aria-hidden="true" />
            </button>

            {/* Modal olmayan panel => role="region" + sr-only başlık */}
            {isContactOpen && (
              <div
                id="utility-contact"
                className={styles.utilityTooltip}
                role="region"
                aria-labelledby="utility-contact-title"
              >
                <h2 id="utility-contact-title" className="sr-only">Hızlı iletişim</h2>
                <div className={styles.utilityTooltipContent}>
                  <a
                    href="tel:+905453048671"
                    className={`${styles.contactBtn} ${styles.contactBtnPhone}`}
                    onClick={() => setActiveTool(null)}
                    aria-label="Telefon ile ara"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.contactBtn} ${styles.contactBtnWhatsapp}`}
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
          className={styles.searchModalOverlay}
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
            className={styles.searchModalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchHeader}>
              <h2 id="search-title" className="sr-only">Site içi arama</h2>

              <div className={styles.searchInputWrapper}>
                <div className={styles.searchIcon} aria-hidden="true">🔍</div>
                <input
                  type="text"
                  className={styles.searchInput}
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
                className={styles.searchCloseBtn}
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

            <div id="search-results" className={styles.searchResults}>
              {filtered.length === 0 ? (
                <div className={styles.noResults} role="status" aria-live="polite">
                  <div className={styles.noResultsIcon} aria-hidden="true">🔍</div>
                  <div className={styles.noResultsTitle}>Sonuç bulunamadı</div>
                  <div className={styles.noResultsDescription}>Farklı anahtar kelimeler deneyin</div>
                </div>
              ) : (
                <div className={styles.resultsList} role="list">
                  {filtered.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={styles.resultItem}
                      onClick={() => {
                        setSearchOpen(false);
                        setActiveTool(null);
                        lastFocusRef.current?.focus?.();
                      }}
                      aria-label={`${route.label} sayfasına git`}
                    >
                      <span className={styles.resultIcon} aria-hidden="true">
                        {route.icon}
                      </span>
                      <span className={styles.resultLabel}>{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.searchTips}>
              <p className={styles.tipsText}>
                <strong>İpucu:</strong> "sahne", "led ekran", "ses sistemi" gibi anahtar kelimeler deneyin
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
