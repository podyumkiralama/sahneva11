// components/HeroCtasClient.jsx
"use client";
import { useCallback } from "react";

export default function HeroCtasClient() {
  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 100;
      const n = 8;
      const life = 500;

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");

        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
        const dist = 32 + Math.random() * 28;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");

        const s = 5 + Math.random() * 5;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        fragment.appendChild(el);
        setTimeout(() => el.remove(), life + 50);
      }

      document.body.appendChild(fragment);
    } catch {}
  }, []);

  const baseBtn =
    "inline-flex items-center justify-center rounded-xl px-6 py-4 min-w-[180px] min-h-[56px] font-semibold tracking-wide transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 transform hover:-translate-y-1 active:translate-y-0 ";

  return (
    <div
      className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
      role="group"
      aria-label="Hızlı iletişim ve teklif alma seçenekleri"
    >
      {/* Telefon */}
      <a
        href="tel:+905453048671"
        className={`${baseBtn} bg-indigo-700 hover:bg-indigo-800 text-white focus-visible:ring-indigo-300`}
        onClick={burst}
        title="Sahneva ile telefonla görüşün"
        itemProp="telephone"
      >
        <span className="mr-2" aria-hidden="true">📞</span>
        <span>Hemen Ara</span>
        <span className="sr-only"> — +90 545 304 86 71</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} bg-emerald-700 hover:bg-emerald-800 text-white focus-visible:ring-emerald-300`}
        title="WhatsApp üzerinden anında teklif alın"
        onClick={burst}
      >
        <span className="mr-2" aria-hidden="true">💬</span>
        <span>WhatsApp Teklif</span>
        <span className="sr-only"> — yeni sekmede açılır</span>
      </a>
    </div>
  );
}
