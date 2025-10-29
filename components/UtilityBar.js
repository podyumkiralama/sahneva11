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
  const [isMounted, setIsMounted] = useState(false);
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);

  // ✅ PREMIUM: Mount sonrası render için
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ PREMIUM: ESC ile arama modalını kapat
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

  // ✅ PREMIUM: Dışarı tıklama ile araçları kapat
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

  // ✅ PREMIUM: Yazı boyutu kontrolü - CLS optimize edilmiş
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--fs") || "100"
    );
    const next = Math.min(130, Math.max(85, Math.round(current + delta)));
    
    // ✅ Layout stabilizasyonu için smooth transition
    root.style.setProperty("--fs", `${next}%`);
    root.style.setProperty("--fs-transition", "font-size 0.3s ease");
    
    // ✅ PREMIUM: Haptic feedback için sınıf ekle
    document.body.classList.add('font-change-active');
    setTimeout(() => {
      document.body.classList.remove('font-change-active');
      root.style.removeProperty("--fs-transition");
    }, 300);
  }, []);

  // ✅ PREMIUM: Yüksek kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("hc");
    setActiveTool(null);
  }, []);

  // ✅ PREMIUM: En üste dön
  const scrollTopSmooth = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  // ✅ PREMIUM: Optimize edilmiş burst efekti
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
        
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.2;
        const dist = 25 + Math.random() * 20;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 40 - 20).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", i % 2 === 0 ? colors[0] : colors[1]);
        el.style.setProperty("--burst-c2", i % 2 === 0 ? colors[1] : colors[0]);
        
        const s = 4 + Math.random() * 4;
        el.style.width = el.style.height = `${s}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, life + 30);
      }
      
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  // ✅ PREMIUM: Tool toggle fonksiyonu
  const toggleTool = useCallback((toolName, e) => {
    burst(e, ["#06b6d4", "#8b5cf6"]);
    setActiveTool(activeTool === toolName ? null : toolName);
  }, [activeTool, burst]);

  // ✅ CLS önleme: İlk render için sabit yükseklik
  if (!isMounted) {
    return (
      <div 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
        style={{
          width: 'auto',
          height: '64px',
          minHeight: '64px',
          visibility: 'hidden'
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {/* ✅ PREMIUM: Bottom utility bar - CLS optimize edilmiş */}
      <div
        ref={toolsRef}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl utility-bar-container"
        style={{
          height: '64px',
          minHeight: '64px',
          maxHeight: '64px'
        }}
        role="region"
        aria-label="Erişilebilirlik araçları ve hızlı navigasyon"
      >
        <div className="flex items-center gap-1 p-2 h-full">
          {/* ✅ PREMIUM: Erişilebilirlik araçları */}
          <div className="relative h-full flex items-center">
            <button
              className={`utility-btn group ${activeTool === 'accessibility' ? 'bg-blue-50 text-blue-600' : ''}`}
              onClick={(e) => toggleTool('accessibility', e)}
              aria-label="Erişilebilirlik araçları"
              title="Erişilebilirlik araçları - Yazı boyutu ve kontrast"
            >
              <span className="text-lg">♿</span>
              <div className="absolute -top-2 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {activeTool === 'accessibility' && (
              <div className="absolute bottom-12 left-0 mb-2 min-w-48 rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl p-3 shadow-xl z-50 utility-tooltip">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-sm font-semibold text-gray-700">Yazı Boyutu</span>
                    <div className="flex gap-1">
                      <button
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold transition-colors"
                        onClick={() => bumpFont(-5)}
                        aria-label="Yazı boyutunu küçült"
                      >
                        A-
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold transition-colors"
                        onClick={() => bumpFont(+5)}
                        aria-label="Yazı boyutunu büyüt"
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  
                  <button
                    className="w-full rounded-lg px-3 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center"
                    onClick={toggleContrast}
                    aria-label="Yüksek kontrast modunu aç/kapat"
                  >
                    🎨 Kontrast Modu
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ✅ PREMIUM: Arama butonu */}
          <div className="h-full flex items-center">
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
              <span className="text-lg">🔍</span>
              <div className="absolute -top-2 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* ✅ PREMIUM: En üste dön */}
          <div className="h-full flex items-center">
            <button
              className="utility-btn group"
              onClick={(e) => {
                burst(e, ["#f59e0b", "#ef4444"]);
                scrollTopSmooth();
              }}
              aria-label="Sayfanın en üstüne dön"
              title="En üste dön - Hızlı navigasyon"
            >
              <span className="text-lg">⬆️</span>
              <div className="absolute -top-2 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* ✅ PREMIUM: Hızlı iletişim */}
          <div className="relative h-full flex items-center">
            <button
              className={`utility-btn group ${activeTool === 'contact' ? 'bg-green-50 text-green-600' : ''}`}
              onClick={(e) => toggleTool('contact', e)}
              aria-label="Hızlı iletişim seçenekleri"
              title="Hızlı iletişim - Telefon ve WhatsApp"
            >
              <span className="text-lg">📞</span>
              <div className="absolute -top-2 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {activeTool === 'contact' && (
              <div className="absolute bottom-12 right-0 mb-2 min-w-48 rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl p-3 shadow-xl z-50 utility-tooltip">
                <div className="space-y-2">
                  <a
                    href="tel:+905453048671"
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    onClick={(e) => burst(e, ["#3b82f6", "#8b5cf6"])}
                    title="Hemen arayın - Ücretsiz danışmanlık"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Sahne+kiralama+ve+LED+ekran+fiyatları+hakkında+detaylı+teklif+almak+istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    aria-label="WhatsApp iletişim"
                  >
                    <span className="text-lg">💬</span>
                    <span className="text-sm font-bold">WhatsApp'tan Hemen Teklif Al</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ PREMIUM: Arama modalı - CLS optimize edilmiş */}
      {openSearch && (
        <div
          id="site-search-dialog"
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Site içi arama - Hızlı sayfa navigasyonu"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSearch(false);
          }}
        >
          <div className="w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-2xl border border-white/20 search-modal-container">
            <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200/60">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
                <input
                  type="search"
                  className="w-full rounded-xl border border-gray-300/60 bg-white/80 pl-10 pr-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300"
                  placeholder="Ne aramıştınız? (örn: LED ekran, podyum, sahne...)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Arama kutusu"
                  title="Site içi arama - Anahtar kelimeler girin"
                />
              </div>
              <button
                className="ml-1 rounded-xl px-4 py-3 text-sm font-semibold bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-300 min-h-[44px] backdrop-blur-sm"
                onClick={() => setOpenSearch(false)}
                aria-label="Arama modalını kapat"
                title="Aramayı kapat"
              >
                Kapat
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filtered.length === 0 ? (
                <div className="px-3 py-8 text-center text-gray-600">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-lg font-medium">Sonuç bulunamadı</p>
                  <p className="text-sm mt-1 text-gray-500">Lütfen farklı bir anahtar kelime deneyin</p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {filtered.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-base hover:bg-blue-50/80 hover:text-blue-700 transition-all duration-300 border border-transparent hover:border-blue-200/60 backdrop-blur-sm"
                        onClick={() => setOpenSearch(false)}
                        title={r.title}
                      >
                        <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                          {r.icon}
                        </span>
                        <span className="flex-1">{r.label}</span>
                        <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors">
                          {r.href}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* ✅ PREMIUM: Arama ipuçları */}
              <div className="mt-4 pt-4 border-t border-gray-200/60">
                <p className="text-xs text-gray-500 text-center">
                  <strong>İpucu:</strong> "podyum", "led ekran", "ses sistemi" gibi anahtar kelimelerle arama yapabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ PREMIUM: CSS Styles - CLS optimize edilmiş */}
      <style jsx global>{`
        :root {
          --fs: 100%;
          --utility-bar-height: 64px;
        }

        .utility-bar-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          contain: layout style paint;
        }

        .utility-tooltip {
          transform-origin: bottom center;
          transition: opacity 0.2s ease, transform 0.2s ease;
          will-change: transform, opacity;
        }

        .search-modal-container {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
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
          transition: all 0.3s ease;
          font-size: 16px;
          will-change: transform;
        }

        .utility-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .utility-btn:active {
          transform: translateY(0);
        }

        .burst-particle {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          background: linear-gradient(135deg, var(--burst-c1), var(--burst-c2));
          border-radius: 50%;
          animation: burst-animation var(--life) ease-out forwards;
          will-change: transform, opacity;
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

        .font-change-active {
          animation: fontChangePulse 0.3s ease;
        }

        @keyframes fontChangePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        /* ✅ CLS önleme: Sayfa içeriği için rezerve alan */
        main {
          padding-bottom: var(--utility-bar-height);
        }

        /* ✅ Yazı boyutu değişikliği için smooth transition */
        * {
          transition: font-size 0.3s ease;
        }
      `}</style>
    </>
  );
}
