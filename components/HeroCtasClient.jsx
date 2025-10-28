// components/HeroCtasClient.jsx
"use client";
import { useCallback } from "react";

export default function HeroCtasClient() {
  const burst = useCallback((e) => {
    try {
      // Hareket azalt tercihinde animasyonu çalıştırma
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 100;
      const n = 10;
      const life = 600;

      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.35;
        const dist = 36 + Math.random() * 34;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 80 - 40).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");
        const s = 6 + Math.random() * 6;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), life + 80);
      }
    } catch {}
  }, []);

  const baseBtn =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 min-w-[164px] " +
    "font-semibold tracking-wide transition-colors shadow-sm " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <div className="flex justify-center gap-4" role="group" aria-label="Hızlı iletişim ve teklif alma seçenekleri">
      {/* Kontrastı artırılmış: indigo-700/800 + beyaz metin */}
      <a
        href="tel:+905453048671"
        className={`${baseBtn} bg-indigo-700 hover:bg-indigo-800 text-white focus-visible:ring-indigo-300`}
        onClick={burst}
        aria-label="Hemen Ara – Telefonla bize ulaşın (+90 545 304 8671)"
        title="+90 545 304 8671"
      >
        Hemen Ara
      </a>

      {/* Kontrastı artırılmış: emerald-700/800 + beyaz metin */}
      <a
        href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
        target="_blank"
        rel="external noopener noreferrer"
        className={`${baseBtn} bg-emerald-700 hover:bg-emerald-800 text-white focus-visible:ring-emerald-300`}
        aria-label="WhatsApp Teklif – WhatsApp üzerinden teklif iste (yeni sekmede açılır)"
        onClick={burst}
      >
        WhatsApp Teklif
      </a>
    </div>
  );
}
