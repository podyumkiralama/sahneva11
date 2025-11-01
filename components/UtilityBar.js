// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Anasayfa", title: "Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama", icon: "🏠" },
  { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva Hakkında - Şirket bilgileri ve referanslar", icon: "👥" },
  { href: "/iletisim", label: "İletişim", title: "Sahneva İletişim - Bize ulaşın ve teklif alın", icon: "📞" },
  { href: "/podyum-kiralama", label: "Podyum", title: "Podyum Kiralama - Modüler podyum sistemleri", icon: "👑" },
  { href: "/led-ekran-kiralama", label: "LED Ekran", title: "LED Ekran Kiralama - Yüksek çözünürlüklü ekranlar", icon: "🖥️" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık", title: "Ses ve Işık Sistemleri - Profesyonel ekipman", icon: "🎭" },
  { href: "/cadir-kiralama", label: "Çadır", title: "Çadır Kiralama - Açık hava etkinlik çözümleri", icon: "⛺" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", title: "Masa Sandalye Kiralama - Oturma çözümleri", icon: "🪑" },
  { href: "/sahne-kiralama", label: "Sahne", title: "Sahne Kiralama - Profesyonel sahne kurulumu", icon: "🎪" },
];

export default function UtilityBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC ile kapatma
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenSearch(false);
        setActiveTool(null);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // ✅ DÜZELTME: Dışarı tıklama - event listener'ı doğru şekilde ekleyelim
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setActiveTool(null);
      }
    };
    
    // ✅ Event listener'ı sadece activeTool varsa ekleyelim
    if (activeTool) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeTool]); // ✅ activeTool bağımlılık olarak eklendi

  const filtered = query.trim().length === 0
    ? ROUTES
    : ROUTES.filter((r) =>
        r.label.toLowerCase().includes(query.toLowerCase().trim())
      );

  // ✅ DÜZELTME: Yazı boyutu fonksiyonunu basitleştirelim
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).getPropertyValue("--fs") || "100");
    const next = Math.min(130, Math.max(85, Math.round(current + delta)));
    
    root.style.setProperty("--fs", `${next}%`);
    setActiveTool(null); // ✅ İşlem sonrası menüyü kapat
  }, []);

  // ✅ DÜZELTME: Kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("hc");
    setActiveTool(null);
  }, []);

  // En üste dön
  const scrollTopSmooth = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  // ✅ DÜZELTME: Basitleştirilmiş burst efekti
  const burst = useCallback((e, colors = ["#6366f1", "#8b5cf6"]) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Basit particle efekti
      for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 4px;
          height: 4px;
          background: ${colors[i % colors.length]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 4;
        const distance = 20;
        const translateX = Math.cos(angle) * distance;
        const translateY = Math.sin(angle) * distance;
        
        particle.animate([
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${translateX}px, ${translateY}px) scale(0)`, opacity: 0 }
        ], {
          duration: 400,
          easing: 'ease-out'
        });
        
        setTimeout(() => {
          if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, 400);
      }
    } catch (error) {
      console.log('Burst effect error:', error);
    }
  }, []);

  // ✅ DÜZELTME: Tool toggle fonksiyonu - daha güvenli
  const toggleTool = useCallback((toolName, e) => {
    if (e) {
      e.stopPropagation(); // ✅ Event bubbling'i önle
      burst(e, ["#06b6d4", "#8b5cf6"]);
    }
    setActiveTool(activeTool === toolName ? null : toolName);
  }, [activeTool, burst]);

  // ✅ DÜZELTME: Arama açma fonksiyonu
  const openSearchModal = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      burst(e, ["#10b981", "#06b6d4"]);
    }
    setOpenSearch(true);
    setActiveTool(null);
    setTimeout(() => {
      dialogRef.current?.querySelector("input")?.focus();
    }, 100);
  }, [burst]);

  return (
    <>
      <div
        ref={toolsRef}
        className={`utility-bar-container ${scrolled ? 'scrolled' : ''}`}
        role="region"
        aria-label="Erişilebilirlik araçları ve hızlı navigasyon"
      >
        <div className="utility-bar-content">
          {/* Erişilebilirlik araçları */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn group ${activeTool === 'accessibility' ? 'utility-btn-active' : ''}`}
              onClick={(e) => toggleTool('accessibility', e)}
              aria-label="Erişilebilirlik araçları"
              title="Erişilebilirlik araçları - Yazı boyutu ve kontrast"
              type="button"
            >
              <span className="utility-icon">♿</span>
              <div className="utility-dot"></div>
            </button>

            {activeTool === 'accessibility' && (
              <div className="utility-tooltip">
                <div className="utility-tooltip-content">
                  <div className="font-size-controls">
                    <span className="control-label">Yazı Boyutu</span>
                    <div className="font-buttons">
                      <button
                        className="font-btn"
                        onClick={() => bumpFont(-5)}
                        aria-label="Yazı boyutunu küçült"
                        type="button"
                      >
                        A-
                      </button>
                      <button
                        className="font-btn"
                        onClick={() => bumpFont(+5)}
                        aria-label="Yazı boyutunu büyüt"
                        type="button"
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  
                  <button
                    className="contrast-btn"
                    onClick={toggleContrast}
                    aria-label="Yüksek kontrast modunu aç/kapat"
                    type="button"
                  >
                    🎨 Kontrast Modu
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Arama butonu */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn group"
              onClick={openSearchModal}
              aria-haspopup="dialog"
              aria-expanded={openSearch}
              title="Site içi arama - Hızlı navigasyon"
              type="button"
            >
              <span className="utility-icon">🔍</span>
              <div className="utility-dot"></div>
            </button>
          </div>

          {/* En üste dön */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn group"
              onClick={(e) => {
                if (e) e.stopPropagation();
                burst(e, ["#f59e0b", "#ef4444"]);
                scrollTopSmooth();
              }}
              aria-label="Sayfanın en üstüne dön"
              title="En üste dön - Hızlı navigasyon"
              type="button"
            >
              <span className="utility-icon">⬆️</span>
              <div className="utility-dot"></div>
            </button>
          </div>

          {/* Hızlı iletişim */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn group ${activeTool === 'contact' ? 'utility-btn-active' : ''}`}
              onClick={(e) => toggleTool('contact', e)}
              aria-label="Hızlı iletişim seçenekleri"
              title="Hızlı iletişim - Telefon ve WhatsApp"
              type="button"
            >
              <span className="utility-icon">📞</span>
              <div className="utility-dot"></div>
            </button>

            {activeTool === 'contact' && (
              <div className="utility-tooltip">
                <div className="utility-tooltip-content">
                  <a
                    href="tel:+905453048671"
                    className="contact-btn phone"
                    onClick={(e) => {
                      e.stopPropagation();
                      burst(e, ["#3b82f6", "#8b5cf6"]);
                      setActiveTool(null);
                    }}
                    title="Hemen arayın - Ücretsiz danışmanlık"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Sahne+kiralama+ve+LED+ekran+fiyatları+hakkında+detaylı+teklif+almak+istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn whatsapp"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTool(null);
                    }}
                    aria-label="WhatsApp iletişim"
                  >
                    <span className="whatsapp-icon">💬</span>
                    WhatsApp'tan Hemen Teklif Al
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arama modalı */}
      {openSearch && (
        <div
          id="site-search-dialog"
          ref={dialogRef}
          className="search-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site içi arama - Hızlı sayfa navigasyonu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSearch(false);
          }}
        >
          <div className="search-modal-container">
            <div className="search-header">
              <div className="search-input-wrapper">
                <div className="search-icon">🔍</div>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Ne aramıştınız? (örn: LED ekran, podyum, sahne...)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Arama kutusu"
                  title="Site içi arama - Anahtar kelimeler girin"
                />
              </div>
              <button
                className="search-close-btn"
                onClick={() => setOpenSearch(false)}
                aria-label="Arama modalını kapat"
                title="Aramayı kapat"
                type="button"
              >
                Kapat
              </button>
            </div>
            <div className="search-results">
              {filtered.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <p className="no-results-title">Sonuç bulunamadı</p>
                  <p className="no-results-description">Lütfen farklı bir anahtar kelime deneyin</p>
                </div>
              ) : (
                <ul className="results-list">
                  {filtered.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="result-item"
                        onClick={() => setOpenSearch(false)}
                        title={r.title}
                      >
                        <span className="result-icon">
                          {r.icon}
                        </span>
                        <span className="result-label">{r.label}</span>
                        <span className="result-url">
                          {r.href}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="search-tips">
                <p className="tips-text">
                  <strong>İpucu:</strong> "podyum", "led ekran", "ses sistemi" gibi anahtar kelimelerle arama yapabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}