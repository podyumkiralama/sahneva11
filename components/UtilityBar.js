// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
];

export default function UtilityBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef(null);

  // ESC ile arama modalını kapat
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setOpenSearch(false);
    };
    if (openSearch) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [openSearch]);

  const filtered =
    query.trim().length === 0
      ? ROUTES
      : ROUTES.filter((r) =>
          r.label.toLowerCase().includes(query.toLowerCase().trim())
        );

  // Yazı boyutu kontrolü (html --fs değişkeni)
  const bumpFont = (delta) => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--fs") || "100%"
    );
    const pct = Number.isNaN(current) ? 100 : current;
    const next = Math.min(130, Math.max(85, Math.round(pct + delta)));
    root.style.setProperty("--fs", `${next}%`);
    burst();
  };

  // Yüksek kontrast modu
  const toggleContrast = () => {
    document.documentElement.classList.toggle("hc");
    burst();
  };

  // En üste dön
  const scrollTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    burst();
  };

  // ==== Burst efekt ====
  const burst = (e) => {
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight - 80;
    const n = 12;
    const life = 600;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "burst-particle";
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
      const dist = 40 + Math.random() * 40;
      el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
      el.style.setProperty("--life", `${life}ms`);
      el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
      el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");
      const s = 6 + Math.random() * 6;
      el.style.width = el.style.height = `${s}px`;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), life + 50);
    }
  };

  const withBurst = (fn) => (e) => {
    burst(e);
    fn?.();
  };

  return (
    <>
      {/* Bottom utility bar (sadece mobil & tablet) */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-neutral-200 shadow-sm pb-safe"
        role="region"
        aria-label="Kullanıcı araç çubuğu"
      >
        <div className="mx-auto max-w-screen-md px-3">
          <div className="grid grid-cols-5 gap-2 py-2">
            {/* Yazı küçült */}
            <button
              className="bar-item"
              onClick={withBurst(() => bumpFont(-5))}
              aria-label="Yazı boyutunu küçült"
              title="Yazı küçült"
            >
              A-
            </button>

            {/* Yazı büyüt */}
            <button
              className="bar-item"
              onClick={withBurst(() => bumpFont(+5))}
              aria-label="Yazı boyutunu büyüt"
              title="Yazı büyüt"
            >
              A+
            </button>

            {/* Arama */}
            <button
              className="bar-item"
              onClick={(e) => {
                burst(e);
                setOpenSearch(true);
                setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 60);
              }}
              aria-haspopup="dialog"
              aria-expanded={openSearch}
              /* ⬇️ HATA DÜZELTME: Modal kapalıyken aria-controls verme */
              aria-controls={openSearch ? "site-search-dialog" : undefined}
              title="Sitede ara"
            >
              Ara
            </button>

            {/* En üste dön */}
            <button
              className="bar-item"
              onClick={withBurst(scrollTopSmooth)}
              aria-label="En üste dön"
              title="En üste dön"
            >
              ↑
            </button>

            {/* Hızlı iletişim */}
            <div className="relative">
              <details className="group">
                <summary
                  className="bar-item list-none cursor-pointer"
                  onClick={burst}
                  aria-label="Hızlı iletişim"
                  title="Hızlı iletişim"
                >
                  İletişim
                </summary>
                <div className="absolute right-0 bottom-12 mb-2 min-w-44 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg">
                  <a
                    href="tel:+905453048671"
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-white bg-[#6d28d9] hover:bg-[#5b21b6]"
                    onClick={burst}
                  >
                    Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block rounded-md px-3 py-2 text-sm font-semibold text-white bg-[#15803d] hover:bg-[#166534]"
                    onClick={burst}
                  >
                    WhatsApp Teklif
                  </a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Basit arama modalı */}
      {openSearch && (
        <div
          id="site-search-dialog"
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Site içi arama"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenSearch(false);
          }}
        >
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b">
              <input
                type="search"
                className="w-full rounded-md border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#6d28d9]/30"
                placeholder="Ne aramıştınız? (örn. LED ekran)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="ml-1 rounded-md px-3 py-2 text-sm font-semibold bg-neutral-100 hover:bg-neutral-200"
                onClick={() => setOpenSearch(false)}
              >
                Kapat
              </button>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-3 text-sm text-neutral-600">Sonuç bulunamadı.</li>
              )}
              {filtered.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-[#f3f0ff] hover:text-[#815be0]"
                    onClick={() => setOpenSearch(false)}
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
