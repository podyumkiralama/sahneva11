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
        setSearchOpen(false);
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
      if (dialogRef.current && !dialogRef.current.contains(e.target) && isSearchOpen) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  const filtered = query.trim().length === 0 ? ROUTES : 
    ROUTES.filter((r) => r.label.toLowerCase().includes(query.toLowerCase().trim()));

  // Yazı boyutu
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize) || 16;
    const newSize = Math.min(20, Math.max(12, current + delta));
    document.documentElement.style.fontSize = `${newSize}px`;
    setActiveTool(null);
  }, []);

  // Kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("high-contrast");
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
    if (toolName !== 'search') {
      setSearchOpen(false);
    }
  }, [activeTool]);

  // Arama açma fonksiyonu
  const openSearchModal = useCallback(() => {
    setSearchOpen(true);
    setActiveTool('search');
    setTimeout(() => {
      const input = dialogRef.current?.querySelector("input");
      if (input) {
        input.focus();
        input.select();
      }
    }, 100);
  }, []);

  return (
    <>
      <div
        ref={toolsRef}
        className={`utility-bar ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="utility-bar-inner">
          
          {/* Erişilebilirlik Butonu */}
          <div className="utility-tool">
            <button
              className={`utility-btn ${activeTool === 'accessibility' ? 'active' : ''}`}
              onClick={() => toggleTool('accessibility')}
              title="Erişilebilirlik araçları"
              aria-expanded={activeTool === 'accessibility'}
              aria-controls="accessibility-tooltip"
            >
              <span className="utility-btn-icon">♿</span>
            </button>

            {activeTool === 'accessibility' && (
              <div id="accessibility-tooltip" className="utility-tooltip">
                <div className="tooltip-content">
                  <div className="accessibility-section">
                    <h4 className="section-title">Yazı Boyutu</h4>
                    <div className="font-size-controls">
                      <button 
                        onClick={() => bumpFont(-1)} 
                        className="font-size-btn decrease"
                        aria-label="Yazı boyutunu küçült"
                      >
                        A-
                      </button>
                      <button 
                        onClick={() => bumpFont(1)} 
                        className="font-size-btn increase"
                        aria-label="Yazı boyutunu büyüt"
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  
                  <div className="accessibility-section">
                    <button 
                      onClick={toggleContrast} 
                      className="contrast-toggle-btn"
                    >
                      <span className="contrast-icon">🎨</span>
                      Yüksek Kontrast
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Arama Butonu */}
          <div className="utility-tool">
            <button
              className={`utility-btn ${activeTool === 'search' ? 'active' : ''}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-expanded={isSearchOpen}
              aria-controls="search-modal"
            >
              <span className="utility-btn-icon">🔍</span>
            </button>
          </div>

          {/* Yukarı Çık Butonu */}
          <div className="utility-tool">
            <button
              className="utility-btn"
              onClick={scrollTop}
              title="En üste dön"
              aria-label="Sayfanın en üstüne git"
            >
              <span className="utility-btn-icon">⬆️</span>
            </button>
          </div>

          {/* İletişim Butonu */}
          <div className="utility-tool">
            <button
              className={`utility-btn ${activeTool === 'contact' ? 'active' : ''}`}
              onClick={() => toggleTool('contact')}
              title="Hızlı iletişim"
              aria-expanded={activeTool === 'contact'}
              aria-controls="contact-tooltip"
            >
              <span className="utility-btn-icon">📞</span>
            </button>

            {activeTool === 'contact' && (
              <div id="contact-tooltip" className="utility-tooltip">
                <div className="tooltip-content">
                  <a 
                    href="tel:+905453048671" 
                    className="contact-link phone"
                    onClick={() => setActiveTool(null)}
                  >
                    <span className="contact-icon">📞</span>
                    Hemen Ara
                  </a>
                  <a 
                    href="https://wa.me/905453048671" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link whatsapp"
                    onClick={() => setActiveTool(null)}
                  >
                    <span className="contact-icon">💬</span>
                    WhatsApp'tan Yaz
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
          className="search-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-input"
        >
          <div 
            ref={dialogRef}
            className="search-modal"
          >
            <div className="search-header">
              <div className="search-input-container">
                <div className="search-icon" aria-hidden="true">🔍</div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Ne aramıştınız? (Örnek: sahne, led ekran, ses sistemi...)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="search-input"
                  name="search"
                  autoComplete="off"
                  aria-describedby="search-results"
                />
              </div>
              <button 
                className="search-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Arama penceresini kapat"
              >
                ✕
              </button>
            </div>

            <div id="search-results" className="search-results">
              {filtered.length === 0 ? (
                <div className="no-results">
                  <p className="no-results-text">Aradığınız kriterlere uygun sonuç bulunamadı</p>
                  <p className="no-results-suggestion">
                    Öneriler: <strong>sahne</strong>, <strong>led ekran</strong>, <strong>ses sistemi</strong>
                  </p>
                </div>
              ) : (
                <div className="results-list">
                  {filtered.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="result-item"
                      onClick={() => {
                        setSearchOpen(false);
                        setActiveTool(null);
                      }}
                    >
                      <span className="result-icon" aria-hidden="true">{route.icon}</span>
                      <span className="result-text">{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .utility-bar {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .utility-bar.scrolled {
          bottom: 25px;
        }

        .utility-bar-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          padding: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .utility-tool {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .utility-btn {
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .utility-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .utility-btn.active {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          transform: scale(1.1);
        }

        .utility-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 1001;
          animation: slideDown 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .tooltip-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .accessibility-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .section-title {
          font-weight: 600;
          color: #333;
          font-size: 14px;
          margin: 0;
          text-align: center;
        }

        .font-size-controls {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .font-size-btn {
          flex: 1;
          padding: 8px 12px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          background: white;
          color: #333;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
        }

        .font-size-btn:hover {
          background: #f8f9fa;
          border-color: #667eea;
          transform: translateY(-1px);
        }

        .font-size-btn.decrease {
          background: #f8f9fa;
        }

        .font-size-btn.increase {
          background: #f8f9fa;
        }

        .contrast-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          background: white;
          color: #333;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 500;
          width: 100%;
        }

        .contrast-toggle-btn:hover {
          background: #f8f9fa;
          border-color: #667eea;
          transform: translateY(-1px);
        }

        .contrast-icon {
          font-size: 16px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          transition: all 0.2s ease;
          font-size: 14px;
          border: 1px solid transparent;
          font-weight: 500;
        }

        .contact-link:hover {
          background: #f8f9fa;
          border-color: #e1e5e9;
          transform: translateY(-1px);
        }

        .contact-link.phone:hover {
          color: #667eea;
        }

        .contact-link.whatsapp:hover {
          color: #25D366;
        }

        .contact-icon {
          font-size: 16px;
        }

        /* Arama Modal Stilleri */
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 1002;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 100px;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .search-modal {
          background: white;
          border-radius: 20px;
          width: 90%;
          max-width: 600px;
          max-height: 70vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: scaleIn 0.2s ease-out;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .search-header {
          display: flex;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e1e5e9;
          gap: 15px;
        }

        .search-input-container {
          flex: 1;
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border-radius: 12px;
          padding: 0 15px;
          border: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .search-input-container:focus-within {
          border-color: #667eea;
          background: white;
        }

        .search-icon {
          margin-right: 10px;
          color: #666;
        }

        .search-input {
          flex: 1;
          border: none;
          background: none;
          padding: 15px 0;
          font-size: 16px;
          outline: none;
          color: #333;
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          padding: 5px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .search-close:hover {
          background: #f8f9fa;
          color: #333;
        }

        .search-results {
          max-height: 400px;
          overflow-y: auto;
          padding: 20px;
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
        }

        .no-results-text {
          color: #666;
          margin-bottom: 10px;
          font-size: 16px;
        }

        .no-results-suggestion {
          color: #999;
          font-size: 14px;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .result-item:hover {
          background: #f8f9fa;
          border-color: #e1e5e9;
          transform: translateX(5px);
        }

        .result-icon {
          font-size: 18px;
        }

        .result-text {
          font-weight: 500;
        }

        /* High Contrast Mode */
        :global(.high-contrast) {
          filter: contrast(1.5) brightness(1.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .utility-bar {
            bottom: 10px;
            right: 10px;
          }

          .utility-bar-inner {
            padding: 10px;
          }

          .utility-btn {
            width: 45px;
            height: 45px;
            font-size: 16px;
          }

          .utility-tooltip {
            min-width: 180px;
            left: 50%;
            transform: translateX(-50%);
          }

          .search-overlay {
            padding-top: 50px;
          }

          .search-modal {
            width: 95%;
            max-height: 80vh;
          }
        }

        @media (max-width: 480px) {
          .utility-bar {
            bottom: 5px;
            right: 5px;
          }
          
          .utility-bar-inner {
            padding: 8px;
          }
          
          .utility-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
