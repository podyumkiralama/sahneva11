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
  const [isSearchOpen, setSearchOpen] = useState(false); // ✅ DEĞİŞTİRİLDİ: openSearch -> isSearchOpen
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC ile kapatma
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false); // ✅ DEĞİŞTİRİLDİ
        setActiveTool(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Dışarı tıklama
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setActiveTool(null);
      }
    };

    if (activeTool) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeTool]);

  const filtered = query.trim().length === 0 ? ROUTES : 
    ROUTES.filter((r) => r.label.toLowerCase().includes(query.toLowerCase().trim()));

  // Yazı boyutu
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).getPropertyValue("--fs") || "100");
    const next = Math.min(130, Math.max(85, current + delta));
    root.style.setProperty("--fs", `${next}%`);
    setActiveTool(null);
  }, []);

  // Kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("hc");
    setActiveTool(null);
  }, []);

  // En üste dön
  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  // Tool toggle
  const toggleTool = useCallback((toolName) => {
    setActiveTool(activeTool === toolName ? null : toolName);
  }, [activeTool]);

  // ✅ DÜZELTME: Arama açma fonksiyonu - isim değiştirildi
  const openSearchModal = useCallback(() => {
    setSearchOpen(true);
    setActiveTool(null);
    setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 100);
  }, []);

  return (
    <>
      <div
        ref={toolsRef}
        className={`utility-bar-container ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="utility-bar-content">
          
          {/* Erişilebilirlik Butonu */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn ${activeTool === 'accessibility' ? 'utility-btn-active' : ''}`}
              onClick={() => toggleTool('accessibility')}
              title="Erişilebilirlik araçları"
            >
              <span className="utility-icon">♿</span>
            </button>

            {activeTool === 'accessibility' && (
              <div className="utility-tooltip">
                <div className="utility-tooltip-content">
                  <div className="font-size-controls">
                    <span>Yazı Boyutu</span>
                    <div className="font-buttons">
                      <button onClick={() => bumpFont(-5)}>A-</button>
                      <button onClick={() => bumpFont(5)}>A+</button>
                    </div>
                  </div>
                  <button onClick={toggleContrast}>🎨 Kontrast Modu</button>
                </div>
              </div>
            )}
          </div>

          {/* Arama Butonu */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn"
              onClick={openSearchModal} {/* ✅ DEĞİŞTİRİLDİ: openSearch -> openSearchModal */}
              title="Site içi arama"
            >
              <span className="utility-icon">🔍</span>
            </button>
          </div>

          {/* Yukarı Çık Butonu */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn"
              onClick={scrollTop}
              title="En üste dön"
            >
              <span className="utility-icon">⬆️</span>
            </button>
          </div>

          {/* İletişim Butonu */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn ${activeTool === 'contact' ? 'utility-btn-active' : ''}`}
              onClick={() => toggleTool('contact')}
              title="Hızlı iletişim"
            >
              <span className="utility-icon">📞</span>
            </button>

            {activeTool === 'contact' && (
              <div className="utility-tooltip">
                <div className="utility-tooltip-content">
                  <a href="tel:+905453048671" className="contact-btn phone">
                    📞 Hemen Ara
                  </a>
                  <a 
                    href="https://wa.me/905453048671" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-btn whatsapp"
                  >
                    💬 WhatsApp'tan Yaz
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ✅ DÜZELTME: Arama Modalı - state değişkeni güncellendi */}
      {isSearchOpen && (
        <div 
          className="search-modal-overlay"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            ref={dialogRef}
            className="search-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <div className="search-input-wrapper">
                <div className="search-icon">🔍</div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Ne aramıştınız?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="search-input"
                  name="search"
                />
              </div>
              <button 
                className="search-close-btn"
                onClick={() => setSearchOpen(false)} {/* ✅ DEĞİŞTİRİLDİ */}
              >
                Kapat
              </button>
            </div>

            <div className="search-results">
              {filtered.length === 0 ? (
                <div className="no-results">
                  <p>Sonuç bulunamadı</p>
                </div>
              ) : (
                <div className="results-list">
                  {filtered.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="result-item"
                      onClick={() => setSearchOpen(false)} {/* ✅ DEĞİŞTİRİLDİ */}
                    >
                      <span>{route.icon}</span>
                      <span>{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
