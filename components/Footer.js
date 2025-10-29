// components/Footer.js
"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Footer() {
  // ✅ PREMIUM: Optimize edilmiş burst efekti
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
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, life + 30);
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
      {/* ✅ PREMIUM: Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
        {/* ✅ PREMIUM: Marka bölümü */}
        <section aria-labelledby="ft-brand" itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <h2 id="ft-brand" className="sr-only">
            Sahneva Hakkında
          </h2>
          <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-75"></div>
              <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg" aria-hidden="true">⭐</span> 
            </div>
            <span itemProp="name" className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SAHNEVA
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-300 mb-6" itemProp="description">
            Profesyonel etkinlik prodüksiyon & ekipman kiralama hizmetleri.
            <br />
            <span className="text-blue-300 font-medium">Türkiye geneli</span> sahne, podyum, LED ekran ve ses-ışık sistemleri.
          </p>

          {/* ✅ PREMIUM: Sosyal medya linkleri */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/sahnevaorganizasyon"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva Instagram sayfası (yeni sekmede açılır)"
              title="Sahneva Instagram - Etkinlik fotoğrafları ve projeler"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span aria-hidden="true" className="text-lg relative z-10">📷</span>
            </a>
            <a
              href="https://www.youtube.com/@sahneva"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva YouTube kanalı (yeni sekmede açılır)"
              title="Sahneva YouTube - Kurulum videoları ve referanslar"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span aria-hidden="true" className="text-lg relative z-10">▶</span>
            </a>
          </div>
        </section>

        {/* ✅ PREMIUM: Hizmetler navigasyonu */}
        <nav aria-labelledby="ft-services">
          <h2 id="ft-services" className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/podyum-kiralama", label: "Podyum Kiralama", title: "Modüler podyum kiralama ve kurulum hizmeti" },
              { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", title: "Yüksek çözünürlüklü LED ekran kiralama" },
              { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri", title: "Profesyonel ses ve ışık sistemi kiralama" },
              { href: "/sahne-kiralama", label: "Sahne Kiralama", title: "Profesyonel sahne kiralama ve kurulum" },
              { href: "/cadir-kiralama", label: "Çadır Kiralama", title: "Etkinlik çadırı kiralama ve kurulum hizmeti" },
            ].map(({ href, label, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group text-gray-300 hover:text-white focus:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-blue-400 hover:pl-3"
                  title={title}
                  itemProp="url"
                >
                  <span className="group-hover:text-blue-300 transition-colors">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ PREMIUM: Hızlı erişim */}
        <nav aria-labelledby="ft-quick">
          <h2 id="ft-quick" className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hızlı Erişim
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva hakkında bilgi ve referanslar" },
              { href: "/hizmetler", label: "Hizmetler", title: "Tüm hizmetlerimiz ve çözümler" },
              { href: "/sss", label: "Sık Sorulan Sorular", title: "Sıkça sorulan sorular ve cevapları" },
              { href: "/kvkk", label: "KVKK / Gizlilik", title: "Gizlilik politikası ve KVKK bilgilendirmesi" },
            ].map(({ href, label, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group text-gray-300 hover:text-white focus:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-purple-400 hover:pl-3"
                  title={title}
                >
                  <span className="group-hover:text-purple-300 transition-colors">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ PREMIUM: İletişim bölümü */}
        <section aria-labelledby="ft-contact">
          <h2 id="ft-contact" className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            İletişim Bilgileri
          </h2>

          <address className="not-italic space-y-4 text-sm">
            <div className="flex items-start gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50"></div>
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">📍</span>
              </div>
              <div>
                <span className="block text-white font-semibold">İstanbul / Türkiye</span>
                <span className="text-gray-300">Türkiye geneli hizmet</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur-sm opacity-50"></div>
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">📞</span>
              </div>
              <a
                href="tel:+905453048671"
                className="text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
                aria-label="Hemen Ara – Telefon: +90 545 304 8671"
                title="Sahneva telefon iletişim - Hemen arayın"
                itemProp="telephone"
              >
                +90 545 304 8671
              </a>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-sm opacity-50"></div>
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">✉️</span>
              </div>
              <a
                href="mailto:info@sahneva.com"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="E-posta: info@sahneva.com"
                title="Sahneva e-posta iletişim"
                itemProp="email"
              >
                info@sahneva.com
              </a>
            </div>
            
            <div className="flex items-start gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg blur-sm opacity-50"></div>
                <span className="relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm" aria-hidden="true">⏰</span>
              </div>
              <div>
                <span className="block text-white font-semibold">Hafta içi 09:00–19:00</span>
                <span className="text-gray-300">7/24 acil destek</span>
              </div>
            </div>
          </address>

          {/* ✅ PREMIUM: Google Business bağlantıları */}
          <div className="mt-6 space-y-3">
            <a
              href="https://g.page/r/CZhkMzkNOdgnEBI"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3"
              aria-label="Google Haritalar'da Sahneva lokasyonu (yeni sekmede açılır)"
              title="Google Haritalar'da Sahneva - İstanbul lokasyonu"
            >
              <span className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">📍</span>
              Google Haritalar'da bizi bulun
            </a>
            <br />
            <a
              href="https://g.page/r/CZhkMzkNOdgnEBI/review"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3"
              aria-label="Google'da Sahneva için yorum yazın (yeni sekmede açılır)"
              title="Google Yorum - Müşteri deneyiminizi paylaşın"
            >
              <span className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">⭐</span>
              Google'da yorum yazın
            </a>
          </div>
        </section>
      </div>

      {/* ✅ PREMIUM: Alt bar */}
      <div className="relative border-t border-white/10 text-center text-sm text-gray-300 py-6 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-blue-900/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="mb-3 text-gray-400">
            Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri ve kurulum hizmetleri.
          </p>
          <p suppressHydrationWarning itemProp="copyrightYear" className="text-gray-400">
            © {new Date().getFullYear()} <span itemProp="name" className="text-white font-semibold">Sahneva</span> — Tüm hakları saklıdır.
            <span className="mx-3 text-blue-400">•</span>
            <Link href="/kvkk" className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors duration-200" title="KVKK Aydınlatma Metni">
              KVKK Aydınlatma Metni
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ PREMIUM: Burst particle styles */}
      <style jsx>{`
        .burst-particle {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          background: linear-gradient(135deg, var(--burst-c1), var(--burst-c2));
          border-radius: 50%;
          animation: burst-animation var(--life) ease-out forwards;
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
      `}</style>
    </footer>
  );
}
