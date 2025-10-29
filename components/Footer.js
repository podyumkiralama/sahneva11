// components/Footer.js
"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Footer() {
  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş burst efekti (sadece sosyal medya için)
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
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");
        
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
      className="bg-[#0f1115] bg-gradient-to-t from-[#0c0e12] to-[#12141a] text-gray-300 border-t border-white/5"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6">
        {/* Marka bölümü */}
        <section aria-labelledby="ft-brand" itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <h2 id="ft-brand" className="sr-only">
            Sahneva Hakkında
          </h2>
          <div className="flex items-center gap-3 text-white font-bold text-xl mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg" aria-hidden="true">⭐</span> 
            <span itemProp="name" className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SAHNEVA
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-400 mb-4" itemProp="description">
            Profesyonel etkinlik prodüksiyon & ekipman kiralama hizmetleri.
            Türkiye geneli sahne, podyum, LED ekran ve ses-ışık sistemleri.
          </p>

          {/* Sosyal medya linkleri */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/sahnevaorganizasyon"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva Instagram sayfası (yeni sekmede açılır)"
              title="Sahneva Instagram - Etkinlik fotoğrafları ve projeler"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[36px] min-w-[36px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span aria-hidden="true" className="text-lg">📷</span>
            </a>
            <a
              href="https://www.youtube.com/@sahneva"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva YouTube kanalı (yeni sekmede açılır)"
              title="Sahneva YouTube - Kurulum videoları ve referanslar"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[36px] min-w-[36px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span aria-hidden="true" className="text-lg">▶</span>
            </a>
          </div>
        </section>

        {/* Hizmetler navigasyonu */}
        <nav aria-labelledby="ft-services">
          <h2 id="ft-services" className="text-white font-semibold mb-4 text-lg">
            Hizmetlerimiz
          </h2>
          <ul className="space-y-2 text-sm">
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
                  className="text-gray-400 hover:text-white focus:text-white hover:underline underline-offset-4 transition-colors duration-200 block py-1"
                  title={title}
                  itemProp="url"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hızlı erişim */}
        <nav aria-labelledby="ft-quick">
          <h2 id="ft-quick" className="text-white font-semibold mb-4 text-lg">
            Hızlı Erişim
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva hakkında bilgi ve referanslar" },
              { href: "/hizmetler", label: "Hizmetler", title: "Tüm hizmetlerimiz ve çözümler" },
              { href: "/sss", label: "Sık Sorulan Sorular", title: "Sıkça sorulan sorular ve cevapları" },
              { href: "/kvkk", label: "KVKK / Gizlilik", title: "Gizlilik politikası ve KVKK bilgilendirmesi" },
            ].map(({ href, label, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-400 hover:text-white focus:text-white hover:underline underline-offset-4 transition-colors duration-200 block py-1"
                  title={title}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* İletişim bölümü - Butonlar kaldırıldı */}
        <section aria-labelledby="ft-contact">
          <h2 id="ft-contact" className="text-white font-semibold mb-4 text-lg">
            İletişim Bilgileri
          </h2>

          <address className="not-italic space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-gray-400 text-base mt-0.5" aria-hidden="true">📍</span>
              <div>
                <span className="block text-white font-medium">İstanbul / Türkiye</span>
                <span className="text-gray-400">Türkiye geneli hizmet</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-base" aria-hidden="true">📞</span>
              <a
                href="tel:+905453048671"
                className="text-gray-400 hover:text-white font-medium transition-colors"
                aria-label="Hemen Ara – Telefon: +90 545 304 8671"
                title="Sahneva telefon iletişim - Hemen arayın"
                itemProp="telephone"
              >
                +90 545 304 8671
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-base" aria-hidden="true">✉️</span>
              <a
                href="mailto:info@sahneva.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="E-posta: info@sahneva.com"
                title="Sahneva e-posta iletişim"
                itemProp="email"
              >
                info@sahneva.com
              </a>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gray-400 text-base mt-0.5" aria-hidden="true">⏰</span>
              <div>
                <span className="block text-white font-medium">Hafta içi 09:00–19:00</span>
                <span className="text-gray-400">7/24 acil destek</span>
              </div>
            </div>
          </address>

          {/* Google Business bağlantıları */}
          <div className="mt-4 space-y-2">
            <a
              href="https://g.page/r/CZhkMzkNOdgnEBI"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Google Haritalar'da Sahneva lokasyonu (yeni sekmede açılır)"
              title="Google Haritalar'da Sahneva - İstanbul lokasyonu"
            >
              <span aria-hidden="true">📍</span>
              Google Haritalar'da bizi bulun
            </a>
            <br />
            <a
              href="https://g.page/r/CZhkMzkNOdgnEBI/review"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Google'da Sahneva için yorum yazın (yeni sekmede açılır)"
              title="Google Yorum - Müşteri deneyiminizi paylaşın"
            >
              <span aria-hidden="true">⭐</span>
              Google'da yorum yazın
            </a>
          </div>
        </section>
      </div>

      {/* Alt bar - daha kompakt */}
      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-4 bg-[#0a0c0f]">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-xs text-gray-500">
            Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri ve kurulum hizmetleri.
          </p>
          <p suppressHydrationWarning itemProp="copyrightYear" className="text-xs">
            © {new Date().getFullYear()} <span itemProp="name">Sahneva</span> — Tüm hakları saklıdır.
            <span className="mx-2">•</span>
            <Link href="/kvkk" className="hover:text-white underline-offset-4 hover:underline transition-colors" title="KVKK Aydınlatma Metni">
              KVKK Aydınlatma Metni
            </Link>
          </p>
        </div>
      </div>

      {/* Burst particle styles */}
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
