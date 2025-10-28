// components/Footer.js
"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Footer() {
  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş burst efekti
  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight - 80;
      const n = 8;
      const life = 500;

      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        el.setAttribute("aria-hidden", "true");
        el.setAttribute("role", "presentation");
        
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.25;
        const dist = 30 + Math.random() * 28;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 50 - 25).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6d28d9" : "#22c55e");
        el.style.setProperty("--burst-c2", i % 2 === 0 ? "#22c55e" : "#6d28d9");
        
        const s = 5 + Math.random() * 5;
        el.style.width = el.style.height = `${s}px`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        
        fragment.appendChild(el);
        setTimeout(() => {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, life + 40);
      }
      
      document.body.appendChild(fragment);
    } catch {}
  }, []);

  return (
    <footer
      role="contentinfo"
      className="bg-[#0f1115] bg-gradient-to-t from-[#0c0e12] to-[#12141a] text-gray-300 mt-10"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
        {/* Marka bölümü */}
        <section aria-labelledby="ft-brand" itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <h2 id="ft-brand" className="sr-only">
            Sahneva Hakkında
          </h2>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
            <span aria-hidden="true">⭐</span> 
            <span itemProp="name">SAHNEVA</span>
          </div>
          <p className="text-sm leading-6 text-gray-400" itemProp="description">
            Profesyonel etkinlik prodüksiyon &amp; ekipman kiralama hizmetleri.
            <br />
            Sahne, podyum, LED ekran, ses-ışık sistemleri ve anahtar teslim kurulum çözümleri.
          </p>

          {/* Sosyal medya linkleri */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/sahnevaorganizasyon"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva Instagram sayfası (yeni sekmede açılır)"
              title="Sahneva Instagram - Etkinlik fotoğrafları ve projeler"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span aria-hidden="true">📷</span>
            </a>
            <a
              href="https://www.youtube.com/@sahneva"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Sahneva YouTube kanalı (yeni sekmede açılır)"
              title="Sahneva YouTube - Kurulum videoları ve referanslar"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]"
              onClick={burst}
              itemProp="sameAs"
            >
              <span aria-hidden="true">▶</span>
            </a>
          </div>
        </section>

        {/* Hizmetler navigasyonu */}
        <nav aria-labelledby="ft-services">
          <h2 id="ft-services" className="text-white font-semibold mb-4 tracking-wide text-lg">
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
                  className="hover:text-white focus:underline hover:underline underline-offset-4 transition-colors duration-200 block py-1"
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
          <h2 id="ft-quick" className="text-white font-semibold mb-4 tracking-wide text-lg">
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
                  className="hover:text-white focus:underline hover:underline underline-offset-4 transition-colors duration-200 block py-1"
                  title={title}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Google Business bağlantıları */}
            <li>
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white focus:underline hover:underline underline-offset-4 transition-colors duration-200 block py-1"
                aria-label="Google Haritalar'da Sahneva lokasyonu (yeni sekmede açılır)"
                title="Google Haritalar'da Sahneva - İstanbul lokasyonu"
              >
                📍 Google Haritalar'da bizi bulun
              </a>
            </li>
            <li>
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI/review"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white focus:underline hover:underline underline-offset-4 transition-colors duration-200 block py-1 font-medium"
                aria-label="Google'da Sahneva için yorum yazın (yeni sekmede açılır)"
                title="Google Yorum - Müşteri deneyiminizi paylaşın"
              >
                ⭐ Google'da yorum yazın
              </a>
            </li>
          </ul>
        </nav>

        {/* İletişim bölümü */}
        <section aria-labelledby="ft-contact">
          <h2 id="ft-contact" className="text-white font-semibold mb-4 tracking-wide text-lg">
            İletişim Bilgileri
          </h2>

          <address className="not-italic space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg" aria-hidden="true">📍</span>
              <div>
                <span className="block text-white font-medium">İstanbul / Türkiye</span>
                <span className="text-xs text-gray-400">Türkiye geneli hizmet</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg" aria-hidden="true">📞</span>
              <a
                href="tel:+905453048671"
                className="hover:text-white font-semibold focus:underline hover:underline underline-offset-4 transition-colors"
                onClick={burst}
                aria-label="Hemen Ara – Telefon: +90 545 304 8671"
                title="Sahneva telefon iletişim - Hemen arayın"
                itemProp="telephone"
              >
                +90 545 304 8671
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg" aria-hidden="true">✉️</span>
              <a
                href="mailto:info@sahneva.com"
                className="hover:text-white focus:underline hover:underline underline-offset-4 transition-colors"
                onClick={burst}
                aria-label="E-posta: info@sahneva.com"
                title="Sahneva e-posta iletişim"
                itemProp="email"
              >
                info@sahneva.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg" aria-hidden="true">⏰</span>
              <div>
                <span className="block text-white font-medium">Hafta içi 09:00–19:00</span>
                <span className="text-xs text-gray-400">7/24 acil destek</span>
              </div>
            </div>
          </address>

          {/* ✅ DEĞİŞTİRİLDİ: Hero ile aynı buton renkleri */}
          <div className="flex flex-col gap-3 mt-6">
            <a
              href="tel:+905453048671"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-5 py-3 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115] min-h-[48px]"
              onClick={burst}
              aria-label="Hemen Ara – Telefon: +90 545 304 8671"
              title="Hemen arayın - Ücretsiz danışmanlık"
            >
              <span aria-hidden="true">📞</span>
              <span>Hemen Ara</span>
            </a>

            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-5 py-3 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115] min-h-[48px]"
              onClick={burst}
              aria-label="WhatsApp Teklif – üzerinden teklif iste (yeni sekmede açılır)"
              title="WhatsApp'tan anında teklif alın"
            >
              <span aria-hidden="true">💬</span>
              <span>WhatsApp Teklif</span>
            </a>
          </div>
        </section>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-6 bg-[#0a0c0f]">
        <div className="container mx-auto px-6">
          <p className="mb-2">
            Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri ve kurulum hizmetleri.
          </p>
          <p suppressHydrationWarning itemProp="copyrightYear">
            © {new Date().getFullYear()} <span itemProp="name">Sahneva</span> — Tüm hakları saklıdır.
            <span className="mx-2">•</span>
            <Link href="/kvkk" className="hover:text-white underline-offset-4 hover:underline transition-colors" title="KVKK Aydınlatma Metni">
              KVKK Aydınlatma Metni
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
