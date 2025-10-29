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
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);

  // ✅ ESC ile arama modalını kapat
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

  // ✅ Dışarı tıklama ile araçları kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setActiveTool(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = query.trim().length === 0
    ? ROUTES
    : ROUTES.filter((r) =>
        r.label.toLowerCase().includes(query.toLowerCase().trim())
      );

  // ✅ Yazı boyutu kontrolü - BİLEŞİK ANİMASYON ile
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--fs") || "100"
    );
    const next = Math.min(130, Math.max(85, Math.round(current + delta)));
    
    root.style.setProperty("--fs", `${next}%`);
    
    // ✅ Bileşik animasyon: sadece transform
    document.body.classList.add('font-change-active');
    setTimeout(() => document.body.classList.remove('font-change-active'), 300);
  }, []);

  // ✅ Yüksek kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("hc");
    setActiveTool(null);
  }, []);

  // ✅ En üste dön
  const scrollTopSmooth = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  // ✅ Optimize edilmiş BİLEŞİK burst efekti
  const burst = useCallback((e, colors = ["#6366f1", "#8b5cf6"]) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight - 80;
      const n = 6;
      const life = 400;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        
        // ✅ BİLEŞİK ANİMASYON: sadece transform ve opacity
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.2;
        const dist = 25 + Math.random() * 20;
        
        // Transform kullan - bileşik animasyon
        const translateX = Math.cos(angle) * dist;
        const translateY = Math.sin(angle) * dist;
        const rotate = (Math.random() * 40 - 20);
        
        el.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
        el.style.opacity = '1';
        
        el.style.setProperty("--life", `${life}ms`);
        el.style.background = `linear-gradient(135deg, ${i % 2 === 0 ? colors[0] : colors[1]}, ${i % 2 === 0 ? colors[1] : colors[0]})`;
        
        const s = 4 + Math.random() * 4;
        el.style.width = `${s}px`;
        el.style.height = `${s}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        
        // ✅ Animasyon sonunda elementi kaldır
        el.animate([
          { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          { transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`, opacity: 0 }
        ], {
          duration: life,
          easing: 'ease-out',
          fill: 'forwards'
        });
        
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, life);
      }
      
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  // ✅ Tool toggle fonksiyonu
  const toggleTool = useCallback((toolName, e) => {
    burst(e, ["#06b6d4", "#8b5cf6"]);
    setActiveTool(activeTool === toolName ? null : toolName);
  }, [activeTool, burst]);

  return (
    <>
      {/* ✅ Bottom utility bar - BİLEŞİK ANİMASYONLAR ile */}
      <div
        ref={toolsRef}
        className="utility-bar-container"
        role="region"
        aria-label="Erişilebilirlik araçları ve hızlı navigasyon"
      >
        <div className="utility-bar-content">
          {/* ✅ Erişilebilirlik araçları */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn group ${activeTool === 'accessibility' ? 'utility-btn-active' : ''}`}
              onClick={(e) => toggleTool('accessibility', e)}
              aria-label="Erişilebilirlik araçları"
              title="Erişilebilirlik araçları - Yazı boyutu ve kontrast"
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
                      >
                        A-
                      </button>
                      <button
                        className="font-btn"
                        onClick={() => bumpFont(+5)}
                        aria-label="Yazı boyutunu büyüt"
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  
                  <button
                    className="contrast-btn"
                    onClick={toggleContrast}
                    aria-label="Yüksek kontrast modunu aç/kapat"
                  >
                    🎨 Kontrast Modu
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ✅ Arama butonu */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn group"
              onClick={(e) => {
                burst(e, ["#10b981", "#06b6d4"]);
                setOpenSearch(true);
                setActiveTool(null);
                setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 60);
              }}
              aria-haspopup="dialog"
              aria-expanded={openSearch}
              aria-controls={openSearch ? "site-search-dialog" : undefined}
              title="Site içi arama - Hızlı navigasyon"
            >
              <span className="utility-icon">🔍</span>
              <div className="utility-dot"></div>
            </button>
          </div>

          {/* ✅ En üste dön */}
          <div className="utility-tool-wrapper">
            <button
              className="utility-btn group"
              onClick={(e) => {
                burst(e, ["#f59e0b", "#ef4444"]);
                scrollTopSmooth();
              }}
              aria-label="Sayfanın en üstüne dön"
              title="En üste dön - Hızlı navigasyon"
            >
              <span className="utility-icon">⬆️</span>
              <div className="utility-dot"></div>
            </button>
          </div>

          {/* ✅ Hızlı iletişim */}
          <div className="utility-tool-wrapper">
            <button
              className={`utility-btn group ${activeTool === 'contact' ? 'utility-btn-active' : ''}`}
              onClick={(e) => toggleTool('contact', e)}
              aria-label="Hızlı iletişim seçenekleri"
              title="Hızlı iletişim - Telefon ve WhatsApp"
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
                    onClick={(e) => burst(e, ["#3b82f6", "#8b5cf6"])}
                    title="Hemen arayın - Ücretsiz danışmanlık"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Sahne+kiralama+ve+LED+ekran+fiyatları+hakkında+detaylı+teklif+almak+istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn whatsapp"
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

      {/* ✅ Arama modalı */}
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

      {/* ✅ CSS Styles - BİLEŞİK ANİMASYONLAR ile */}
      <style jsx>{`
        .utility-bar-container {
          position: fixed;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          height: 64px;
          min-height: 64px;
        }

        .utility-bar-content {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          height: 100%;
        }

        .utility-tool-wrapper {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .utility-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform ve opacity */
          transition: transform 0.3s ease, opacity 0.3s ease;
          font-size: 16px;
        }

        .utility-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transform: translateY(-2px) scale(1.05);
        }

        .utility-btn:active {
          transform: translateY(0) scale(1);
        }

        .utility-btn-active {
          background: rgba(59, 130, 246, 0.1);
          color: rgb(37, 99, 235);
        }

        .utility-icon {
          font-size: 18px;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .utility-btn:hover .utility-icon {
          transform: scale(1.1);
        }

        .utility-dot {
          position: absolute;
          top: -2px;
          right: -1px;
          width: 8px;
          height: 8px;
          background: rgb(59, 130, 246);
          border-radius: 50%;
          opacity: 0;
          /* ✅ BİLEŞİK ANİMASYON: sadece opacity */
          transition: opacity 0.3s ease;
        }

        .utility-btn:hover .utility-dot {
          opacity: 1;
        }

        .utility-tooltip {
          position: absolute;
          bottom: 100%;
          left: 0;
          margin-bottom: 0.5rem;
          min-width: 192px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 0.75rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 60;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform ve opacity */
          animation: tooltipAppear 0.2s ease-out;
        }

        @keyframes tooltipAppear {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .utility-tooltip-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .font-size-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .control-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgb(55, 65, 81);
        }

        .font-buttons {
          display: flex;
          gap: 0.25rem;
        }

        .font-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgb(243, 244, 246);
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.2s ease;
        }

        .font-btn:hover {
          background: rgb(229, 231, 235);
          transform: scale(1.05);
        }

        .contrast-btn {
          width: 100%;
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          background: linear-gradient(135deg, rgb(59, 130, 246), rgb(139, 92, 246));
          color: white;
          border: none;
          cursor: pointer;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .contrast-btn:hover {
          transform: translateY(-1px);
        }

        .contact-btn {
          display: block;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .contact-btn.phone {
          background: linear-gradient(135deg, rgb(37, 99, 235), rgb(139, 92, 246));
          color: white;
        }

        .contact-btn.whatsapp {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgb(22, 163, 74);
          color: white;
        }

        .contact-btn:hover {
          transform: translateY(-1px) scale(1.02);
        }

        .whatsapp-icon {
          font-size: 16px;
        }

        /* ✅ Arama Modal Styles */
        .search-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 0;
        }

        @media (min-width: 640px) {
          .search-modal-overlay {
            align-items: center;
            padding: 1.5rem;
          }
        }

        .search-modal-container {
          width: 100%;
          max-width: 42rem;
          border-radius: 16px 16px 0 0;
          background: linear-gradient(135deg, rgb(255, 255, 255), rgba(243, 244, 246, 0.8));
          backdrop-filter: blur(8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (min-width: 640px) {
          .search-modal-container {
            border-radius: 16px;
          }
        }

        .search-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(209, 213, 219, 0.6);
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgb(156, 163, 175);
        }

        .search-input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          background: rgba(255, 255, 255, 0.8);
          padding-left: 2.5rem;
          padding-right: 1rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          font-size: 1.125rem;
          outline: none;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform ve opacity */
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .search-input:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }

        .search-close-btn {
          margin-left: 0.25rem;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          background: rgba(243, 244, 246, 0.8);
          border: none;
          cursor: pointer;
          min-height: 44px;
          backdrop-filter: blur(8px);
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .search-close-btn:hover {
          background: rgba(229, 231, 235, 0.8);
          transform: scale(1.05);
        }

        .search-results {
          max-height: 60vh;
          overflow-y: auto;
          padding: 0.75rem;
        }

        .no-results {
          padding: 2rem 0.75rem;
          text-align: center;
          color: rgb(75, 85, 99);
        }

        .no-results-icon {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }

        .no-results-title {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .no-results-description {
          font-size: 0.875rem;
          color: rgb(107, 114, 128);
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: inherit;
          text-decoration: none;
          border: 1px solid transparent;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .result-item:hover {
          background: rgba(59, 130, 246, 0.1);
          color: rgb(37, 99, 235);
          transform: translateX(4px);
        }

        .result-icon {
          font-size: 18px;
          opacity: 0.6;
          /* ✅ BİLEŞİK ANİMASYON: sadece transform */
          transition: transform 0.3s ease;
        }

        .result-item:hover .result-icon {
          opacity: 1;
          transform: scale(1.1);
        }

        .result-label {
          flex: 1;
        }

        .result-url {
          font-size: 0.75rem;
          color: rgb(156, 163, 175);
          /* ✅ BİLEŞİK ANİMASYON: sadece color */
          transition: color 0.3s ease;
        }

        .result-item:hover .result-url {
          color: rgb(96, 165, 250);
        }

        .search-tips {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(209, 213, 219, 0.6);
        }

        .tips-text {
          font-size: 0.75rem;
          color: rgb(107, 114, 128);
          text-align: center;
        }

        /* ✅ Font change animation */
        .font-change-active {
          animation: fontChangePulse 0.3s ease;
        }

        @keyframes fontChangePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        /* ✅ Burst particle base styles */
        .burst-particle {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50%;
          animation: burst-animation var(--life, 400ms) ease-out forwards;
        }

        @keyframes burst-animation {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
