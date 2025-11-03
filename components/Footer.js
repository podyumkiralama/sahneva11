// components/Footer.js
"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Footer() {
  // Burst efektini kullanıcı "reduce motion" istiyorsa kapat
  const burst = useCallback((e) => {
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
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6366f1" : "#8b5cf6");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#8b5cf6" : "#06b6d4");

        const s = 4 + Math.random() * 4;
        el.style.width = el.style.height = `${s}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        fragment.appendChild(el);
        setTimeout(() => el.parentNode && el.parentNode.removeChild(el), life + 30);
      }
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-blue-900 border-t border-white/10"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Arkaplan efektleri */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
        {/* Marka */}
        <section aria-labelledby="ft-brand" itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <h2 id="ft-brand" className="sr-only">Sahneva Hakkında</h2>

          <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
            <div className="relative" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-75" />
              <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">⭐</span>
            </div>
            <span itemProp="name" className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SAHNEVA
            </span>
          </div>

          <p className="text-sm leading-6 text-gray-300 mb-
