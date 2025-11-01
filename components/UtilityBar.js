// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Anasayfa", title: "Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama" },
  { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva Hakkında - Şirket bilgileri ve referanslar" },
  { href: "/iletisim", label: "İletişim", title: "Sahneva İletişim - Bize ulaşın ve teklif alın" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama", title: "Podyum Kiralama - Modüler podyum sistemleri" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", title: "LED Ekran Kiralama - Yüksek çözünürlüklü ekranlar" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri", title: "Ses ve Işık Sistemleri - Profesyonel ekipman" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama", title: "Çadır Kiralama - Açık hava etkinlik çözümleri" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama", title: "Masa Sandalye Kiralama - Oturma çözümleri" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama", title: "Sahne Kiralama - Profesyonel sahne kurulumu" },
];

export default function UtilityBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef(null);

  // ✅ İYİLEŞTİRİLDİ: ESC ile arama modalını kapat
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setOpenSearch(false);
    };
    if (openSearch) {
      window.addEventListener("keydown", onEsc);
      return () => window.removeEventListener("keydown", onEsc);
    }
  }, [openSearch]);

  const filtered =
    query.trim().length === 0
      ? ROUTES
      : ROUTES.filter((r) =>
          r.label.toLowerCase().includes(query.toLowerCase().trim())
        );

  // ✅ İYİLEŞTİRİLDİ: Yazı boyutu kontrolü
  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--fs") || "100%"
    );
    const pct = Number.isNaN(current) ? 100 : current;
    const next = Math.min(130, Math.max(85, Math.round(pct + delta)));
    root.style.setProperty("--fs", `${next}%`);
  }, []);

  // ✅ İYİLEŞTİRİLDİ: Yüksek kontrast modu
  const toggleContrast = useCallback(() => {
    document.documentElement.classList.toggle("hc");
  }, []);

  // ✅ İYİLEŞTİRİLDİ: En üste dön
  const scrollTopSmooth = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş burst efekti
  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight - 80;
      const n = 8; // ✅ Optimize: 12'den 8'e
      const life = 500; // ✅ Optimize: 600ms'den 500ms'ye

      // ✅ İYİLEŞTİRİLDİ: DocumentFragment kullanımı
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.25;
        const dist = 32 + Math.random() * 30; // ✅ Optimize: mesafe azaltıldı
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 50 - 25).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");
        
        const s = 5 + Math.random() * 5; // ✅ Optimize: boyut küçültüldü
        el.style.width = el.style.height = `${s}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, life + 40); // ✅ Optimize: timeout azaltıldı
      }
      
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş event handler
  const withBurst = useCallback((fn) => (e) => {
    burst(e);
    fn?.();
  }, [burst]);

  return (
    <>
      {/* ✅ İYİLEŞTİRİLDİ: Bottom utility bar */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-neutral-200 shadow-lg pb-safe"
        role="region"
        aria-label="Erişilebilirlik araçları ve hızlı navigasyon"
      >
        <div className="mx-auto max-w-screen-md px-3">
          <div className="grid grid-cols-5 gap-2 py-3">
            {/* ✅ İYİLEŞTİRİLDİ: Yazı küçült */}
            <button
              className="bar-item min-h-[44px] text-sm font-medium"
              onClick={withBurst(() => bumpFont(-5))}
              aria-label="Yazı boyutunu küçült"
              title="Yazı boyutunu küçült - Erişilebilirlik"
            >
              A-
            </button>

            {/* ✅ İYİLEŞTİRİLDİ: Yazı büyüt */}
            <button
              className="bar-item min-h-[44px] text-sm font-medium"
              onClick={withBurst(() => bumpFont(+5))}
              aria-label="Yazı boyutunu büyüt"
              title="Yazı boyutunu büyüt - Erişilebilirlik"
            >
              A+
            </button>

            {/* ✅ İYİLEŞTİRİLDİ: Arama */}
            <button
              className="bar-item min-h-[44px] text-sm font-medium"
              onClick={(e) => {
                burst(e);
                setOpenSearch(true);
                setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 60);
              }}
              aria-haspopup="dialog"
              aria-expanded={openSearch}
              aria-controls={openSearch ? "site-search-dialog" : undefined}
              title="Site içi arama - Hızlı navigasyon"
            >
              🔍 Ara
            </button>

            {/* ✅ İYİLEŞTİRİLDİ: En üste dön */}
            <button
              className="bar-item min-h-[44px] text-sm font-medium"
              onClick={withBurst(scrollTopSmooth)}
              aria-label="Sayfanın en üstüne dön"
              title="En üste dön - Hızlı navigasyon"
            >
              ⬆️ Yukarı
            </button>

            {/* ✅ İYİLEŞTİRİLDİ: Hızlı iletişim */}
            <div className="relative">
              <details className="group">
                <summary
                  className="bar-item list-none cursor-pointer min-h-[44px] text-sm font-medium"
                  onClick={burst}
                  aria-label="Hızlı iletişim seçenekleri"
                  title="Hızlı iletişim - Telefon ve WhatsApp"
                >
                  📞 İletişim
                </summary>
                <div className="absolute right-0 bottom-14 mb-2 min-w-48 rounded-xl border border-neutral-200 bg-white p-3 shadow-xl z-50">
                  {/* ✅ DEĞİŞTİRİLDİ: Hero ile aynı buton renkleri */}
                  <a
                    href="tel:+905453048671"
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-white bg-indigo-700 hover:bg-indigo-800 transition-colors text-center mb-2"
                    onClick={burst}
                    title="Hemen arayın - Ücretsiz danışmanlık"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors text-center"
                    onClick={burst}
                    title="WhatsApp'tan anında teklif alın"
                  >
                    💬 WhatsApp Teklif
                  </a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ İYİLEŞTİRİLDİ: Arama modalı SEO optimizasyonu */}
      {openSearch && (
        <div
          id="site-search-dialog"
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Site içi arama - Hızlı sayfa navigasyonu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSearch(false);
          }}
        >
          <div className="w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center gap-3 px-4 py-4 border-b border-neutral-200">
              <div className="flex-1 relative">
                <input
                  type="search"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Ne aramıştınız? (örn: LED ekran, podyum, sahne...)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Arama kutusu"
                  title="Site içi arama - Anahtar kelimeler girin"
                />
              </div>
              <button
                className="ml-1 rounded-xl px-4 py-3 text-sm font-semibold bg-neutral-100 hover:bg-neutral-200 transition-colors min-h-[44px]"
                onClick={() => setOpenSearch(false)}
                aria-label="Arama modalını kapat"
                title="Aramayı kapat"
              >
                Kapat
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filtered.length === 0 ? (
                <div className="px-3 py-4 text-center text-neutral-600">
                  <p className="text-lg font-medium">Sonuç bulunamadı</p>
                  <p className="text-sm mt-1">Lütfen farklı bir anahtar kelime deneyin</p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {filtered.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="block rounded-lg px-4 py-3 text-base hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-transparent hover:border-indigo-200"
                        onClick={() => setOpenSearch(false)}
                        title={r.title}
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* ✅ YENİ: Arama ipuçları */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 text-center">
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
