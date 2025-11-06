// components/Footer.js
"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export default function Footer() {
  // Particle burst (reduced-motion ve odak kirliliği koruması ile)
  const portalRef = useRef(null);

  useEffect(() => {
    // Erişilebilirlik için parçacıklar ayrı, aria-hidden bir portala düşsün
    const portal = document.createElement("div");
    portal.setAttribute("aria-hidden", "true");
    portal.style.position = "fixed";
    portal.style.inset = "0";
    portal.style.pointerEvents = "none";
    portal.style.zIndex = "9999";
    document.body.appendChild(portal);
    portalRef.current = portal;
    return () => {
      try {
        document.body.removeChild(portal);
      } catch {}
    };
  }, []);

  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      const portal = portalRef.current;
      if (!portal) return;

      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight - 80;
      const n = 6;
      const life = 400;
      const f = document.createDocumentFragment();

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

        f.appendChild(el);
        setTimeout(() => el.remove(), life + 60);
      }
      portal.appendChild(f);
    } catch {}
  }, []);

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-blue-900 border-t border-white/10"
      role="contentinfo"
      aria-labelledby="site-footer-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Görsel arkaplan efektleri (dekoratif) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
      </div>

      {/* Programatik başlık */}
      <h2 id="site-footer-heading" className="sr-only">
        Site altbilgisi
      </h2>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
        {/* Marka / Hakkında */}
        <section
          aria-labelledby="ft-brand"
          itemProp="brand"
          itemScope
          itemType="https://schema.org/Brand"
        >
          <h3 id="ft-brand" className="sr-only">
            Sahneva Hakkında
          </h3>

          <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
            <div className="relative" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-75" />
              <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg" aria-hidden="true">⭐</span>
            </div>
            <span
              itemProp="name"
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              SAHNEVA
            </span>
          </div>

          <p className="text-sm leading-6 text-gray-300 mb-6" itemProp="description">
            <span className="block">Profesyonel etkinlik prodüksiyon & ekipman kiralama.</span>
            <span className="block">
              <span className="text-blue-300 font-medium">Türkiye geneli</span> sahne, podyum, LED ekran ve ses-ışık sistemleri.
            </span>
          </p>

          {/* Sosyal (butonlar listesi, anlamlı isimler) */}
          <ul className="flex gap-3" aria-label="Sahneva sosyal bağlantılar">
            <li>
              <a
                href="https://www.instagram.com/sahnevaorganizasyon"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="Instagram: Sahneva Organizasyon (yeni sekmede açılır)"
                title="Instagram"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[44px] min-w-[44px]"
                onClick={burst}
                itemProp="sameAs"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <span aria-hidden="true" className="text-lg relative z-10">📷</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@sahneva"
                target="_blank"
                rel="noopener noreferrer me"
                aria-label="YouTube: Sahneva (yeni sekmede açılır)"
                title="YouTube"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[44px] min-w-[44px]"
                onClick={burst}
                itemProp="sameAs"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <span aria-hidden="true" className="text-lg relative z-10">▶</span>
              </a>
            </li>
          </ul>
        </section>

        {/* Hizmetler */}
        <nav aria-labelledby="ft-services">
          <h3
            id="ft-services"
            className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Hizmetlerimiz
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/podyum-kiralama", label: "Podyum Kiralama" },
              { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
              { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
              { href: "/sahne-kiralama", label: "Sahne Kiralama" },
              { href: "/cadir-kiralama", label: "Çadır Kiralama" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group text-gray-300 hover:text-white focus-visible:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-blue-400 hover:pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm"
                >
                  <span className="group-hover:text-blue-300 transition-colors">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hızlı erişim */}
        <nav aria-labelledby="ft-quick">
          <h3
            id="ft-quick"
            className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Hızlı Erişim
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/hizmetler", label: "Hizmetler" },
              { href: "/sss", label: "Sık Sorulan Sorular" },
              { href: "/kvkk", label: "KVKK / Gizlilik" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group text-gray-300 hover:text-white focus-visible:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-purple-400 hover:pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 rounded-sm"
                >
                  <span className="group-hover:text-purple-300 transition-colors">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* İletişim */}
        <section aria-labelledby="ft-contact">
          <h3
            id="ft-contact"
            className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            İletişim Bilgileri
          </h3>

          <address className="not-italic space-y-4 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="flex items-start gap-3">
              <div className="relative" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50" />
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">📍</span>
              </div>
              <div>
                <span className="block text-white font-semibold" itemProp="addressLocality">İstanbul</span>
                <span className="text-gray-300">Türkiye geneli hizmet</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur-sm opacity-50" />
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">📞</span>
              </div>
              <a
                href="tel:+905453048671"
                className="text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-sm"
                itemProp="telephone"
              >
                +90 545 304 8671
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-sm opacity-50" />
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">✉️</span>
              </div>
              <a
                href="mailto:info@sahneva.com"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 rounded-sm"
                itemProp="email"
              >
                info@sahneva.com
              </a>
            </div>

            {/* Google Business bağlantıları */}
            <div className="flex items-center gap-3">
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm"
                title="Google Haritalar (yeni sekme)"
              >
                <span className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">📍</span>
                Google Haritalar'da bizi bulun
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI/review"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded-sm"
                title="Google Yorum (yeni sekme)"
              >
                <span className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">⭐</span>
                Google'da yorum yazın
              </a>
            </div>
          </address>
        </section>
      </div>

      {/* Alt bar */}
      <div className="relative border-t border-white/10 text-center text-sm text-gray-300 py-6 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-blue-900/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <p className="mb-3 text-gray-400">
            <span className="block">
              Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri ve kurulum hizmetleri.
            </span>
          </p>

          {/* mikro veri: görünmez meta ile yıl */}
          <meta itemProp="copyrightYear" content={String(new Date().getFullYear())} />
          <p className="text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span itemProp="name" className="text-white font-semibold">Sahneva</span> — Tüm hakları saklıdır.
            <span className="mx-3 text-blue-400" aria-hidden="true">•</span>
            <Link
              href="/kvkk"
              className="text-gray-300 hover:text-white underline-offset-4 hover:underline focus-visible:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-sm"
            >
              KVKK Aydınlatma Metni
            </Link>
            <span className="mx-3 text-blue-400" aria-hidden="true">•</span>
            <a
              href="#top"
              className="text-gray-300 hover:text-white underline-offset-4 hover:underline focus-visible:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-sm"
            >
              Başa dön
            </a>
          </p>
        </div>
      </div>

      {/* Burst particle styles */}
      <style jsx>{`
        .burst-particle {
          position: fixed;
          pointer-events: none;
          background: linear-gradient(135deg, var(--burst-c1), var(--burst-c2));
          border-radius: 50%;
          animation: burst-animation var(--life) ease-out forwards;
          will-change: transform, opacity;
        }
        @keyframes burst-animation {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) rotate(var(--dr)); opacity: 0; }
        }
      `}</style>
    </footer>
  );
}
