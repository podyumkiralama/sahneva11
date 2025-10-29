// components/ServicesTabs.js
"use client";

import { useId, useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

// ✅ İYİLEŞTİRİLDİ: Daha optimize sizes değeri
const HIZMET_SIZES =
  "(max-width: 768px) 100vw, " +
  "(max-width: 1024px) calc((100vw - 4rem) / 2), " +
  "min(612px, 50vw)";

// ✅ İYİLEŞTİRİLDİ: SEO optimize edilmiş tab verileri
const tabs = [
  {
    key: "podyum",
    title: "Podyum Kiralama",
    img: "/img/hizmet-podyum.webp",
    alt: "Profesyonel modüler podyum kurulumu - Sahneva podyum kiralama hizmeti",
    href: "/podyum-kiralama",
    desc: "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri sunuyoruz. Kaymaz kaplama, korkuluk ve rampa seçenekleri; iç/dış mekân güvenli kurulum.",
    badge: "Modüler ölçüler, hızlı kurulum, güvenli taşıyıcı sistem.",
    titleAttr: "Podyum Kiralama Hizmeti - Modüler ve Güvenli Çözümler"
  },
  {
    key: "led",
    title: "LED Ekran Kiralama", 
    img: "/img/galeri/led-ekran-kiralama-1.webp",
    alt: "Yüksek çözünürlüklü LED ekran kurulumu - Sahneva LED ekran kiralama",
    href: "/led-ekran-kiralama",
    desc: "İç/dış mekân uygun pitch değerleri, yüksek parlaklık ve yayın yönetimi ile kesintisiz görüntü deneyimi sunuyoruz.",
    badge: "İç/dış mekân, yüksek parlaklık, canlı yayın desteği.",
    titleAttr: "LED Ekran Kiralama - Yüksek Çözünürlüklü Görüntü Sistemleri"
  },
  {
    key: "ses-isik",
    title: "Ses & Işık Sistemleri",
    img: "/img/ses-isik/ses-sistemi.webp",
    alt: "Profesyonel ses ve ışık sistemi kurulumu - Sahneva ses ışık kiralama",
    href: "/ses-isik-sistemleri", 
    desc: "Line array hoparlörler, robot ışıklar, DMX kontrol ile sahnenize uygun ses ve ışık tasarımı. Profesyonel ses mühendisliği.",
    badge: "Line array, robot ışık, DMX kontrol, profesyonel mix.",
    titleAttr: "Ses ve Işık Sistemleri Kiralama - Profesyonel Etkinlik Çözümleri"
  },
  {
    key: "sahne",
    title: "Sahne Kurulumu",
    img: "/img/hizmet-sahne.webp",
    alt: "Profesyonel sahne kurulumu ve kiralama - Sahneva sahne hizmetleri",
    href: "/sahne-kiralama",
    desc: "Etkinliğinize uygun ölçü ve yükseklikte güvenli sahne altyapısı; truss sistemleri ve profesyonel kurulum ekibi.",
    badge: "Özel ölçüler, güvenli taşıyıcı, truss sistemleri.",
    titleAttr: "Sahne Kiralama ve Kurulum - Profesyonel Sahne Çözümleri"
  },
  {
    key: "cadir",
    title: "Çadır Kiralama",
    img: "/img/galeri/cadir-kiralama-1.webp", 
    alt: "Etkinlik çadırı kurulumu ve kiralama - Sahneva çadır hizmetleri",
    href: "/cadir-kiralama",
    desc: "Farklı ebat ve tiplerde etkinlik çadırları; hızlı kurulum, zemin çözümleri, aydınlatma ve ısıtma sistemleri.",
    badge: "Hızlı kurulum, zemin çözümleri, aydınlatma sistemleri.",
    titleAttr: "Çadır Kiralama - Açık Hava Etkinlikleri İçin Profesyonel Çözümler"
  },
  {
    key: "masa-sandalye",
    title: "Masa & Sandalye Kiralama",
    img: "/img/hizmet-masa.webp",
    alt: "Masa ve sandalye kiralama hizmeti - Sahneva etkinlik mobilyaları",
    href: "/masa-sandalye-kiralama",
    desc: "Banket, kokteyl ve konferans tipinde oturma çözümleri; profesyonel taşıma, yerleşim ve kurulum hizmeti.",
    badge: "Banket/kokteyl, profesyonel yerleşim, taşıma hizmeti.",
    titleAttr: "Masa Sandalye Kiralama - Etkinlik Oturma Çözümleri"
  },
];
export default function ServicesTabs({ headingId: providedHeadingId, heading = "Hizmetlerimiz" }) {
  const rid = useId();
  const headingId = providedHeadingId ?? `${rid}-services-heading`;
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const liveRef = useRef(null);


  // ✅ İYİLEŞTİRİLDİ: Keyboard navigation optimize edildi
  const onKeyDown = useCallback(
    (e) => {
      const last = tabs.length - 1;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = active === last ? 0 : active + 1;
        setActive(next);
        tabsRef.current[next]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = active === 0 ? last : active - 1;
        setActive(prev);
        tabsRef.current[prev]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
        tabsRef.current[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(last);
        tabsRef.current[last]?.focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive((v) => v);
      }
    },
    [active]
  );

  useEffect(() => {
    if (!liveRef.current) return;
    liveRef.current.textContent = `${tabs[active].title} hizmet sekmesi açık.`;
    const timer = setTimeout(() => {
      if (liveRef.current) liveRef.current.textContent = "";
    }, 800);
    return () => clearTimeout(timer);
  }, [active]);

  // ✅ İYİLEŞTİRİLDİ: Optimize edilmiş burst animasyonu
  const burst = useCallback((e) => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const particleCount = 8; // ✅ Optimize: 12'den 8'e
      const fragment = document.createDocumentFragment(); // ✅ DocumentFragment kullanımı
      
      for (let i = 0; i < particleCount; i++) {
        const s = document.createElement("span");
        s.className = "burst-particle";
        s.setAttribute("aria-hidden", "true");
        s.setAttribute("role", "presentation");
        
        const size = Math.random() * 8 + 4; // ✅ Optimize: boyut küçültüldü
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const distance = 24 + Math.random() * 12; // ✅ Optimize: mesafe azaltıldı
        
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        s.style.left = `${x}px`;
        s.style.top = `${y}px`;
        s.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
        s.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
        s.style.setProperty("--dr", `${(Math.random() - 0.5) * 60}deg`);
        s.style.setProperty("--life", `${400 + Math.random() * 200}ms`);
        s.style.setProperty("--burst-c1", "#6d28d9");
        s.style.setProperty("--burst-c2", "#22c55e");
        
        fragment.appendChild(s);
        setTimeout(() => {
          if (s.parentNode) s.parentNode.removeChild(s);
        }, 600); // ✅ Optimize: timeout azaltıldı
      }
      
      btn.appendChild(fragment);
    } catch {}
  }, []); // ✅ Bağımlılık kaldırıldı

  return (
    <section 
      className="container py-12 md:py-16" 
      aria-labelledby={headingId}
      itemScope
      itemType="https://schema.org/Service"
    >
      <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        {heading}
      </h2>

      <div
        role="tablist"
        aria-labelledby={headingId}
        aria-orientation="horizontal"
        className="no-scrollbar mb-8 flex gap-2 overflow-x-auto rounded-xl bg-neutral-100 p-2"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.key}
              ref={(el) => (tabsRef.current[i] = el)}
              role="tab"
              type="button"
              id={`${rid}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${rid}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                "whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition-all min-h-[44px]",
                selected
                  ? "bg-[#6d28d9] text-white shadow-md"
                  : "bg-white text-neutral-800 hover:bg-neutral-50 hover:shadow-sm",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2",
              ].join(" ")}
              title={t.titleAttr}
            >
              {t.title}
            </button>
          );
        })}
      </div>

      <p ref={liveRef} aria-live="polite" className="sr-only" />

      {tabs.map((t, i) => {
        const isActive = i === active;
        const eager = i === 0;
        
        return (
          <div
            key={t.key}
            role="tabpanel"
            id={`${rid}-panel-${i}`}
            aria-labelledby={`${rid}-tab-${i}`}
            hidden={!isActive}
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300"
            itemScope
            itemProp="hasOfferCatalog"
            itemType="https://schema.org/OfferCatalog"
          >
            {isActive && (
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                {/* ✅ İYİLEŞTİRİLDİ: Image SEO optimizasyonu */}
                <div className="relative h-64 w-full md:h-80 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={t.img}
                    alt={t.alt}
                    fill
                    sizes={HIZMET_SIZES}
                    loading={eager ? "eager" : "lazy"}
                    // ✅ fetchPriority KALDIRILDI - loading attribute yeterli
                    decoding="async"
                    quality={75}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/img/placeholder-blur.webp"
                    title={t.titleAttr}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900" itemProp="name">
                    {t.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed" itemProp="description">
                    {t.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-full">
                    <span className="text-sm font-medium text-blue-700" itemProp="keywords">
                      {t.badge}
                    </span>
                  </div>

                  <div className="pt-4">
                    {/* ✅ İYİLEŞTİRİLDİ: Link SEO optimizasyonu */}
                    <a
                      className="relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-[#6d28d9] hover:bg-[#5b21b6] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 min-h-[50px] min-w-[160px]"
                      href={t.href}
                      onClick={burst}
                      aria-label={`${t.title} hizmeti için detaylı bilgi ve teklif al`}
                      title={`${t.title} - Detaylı bilgi ve fiyat teklifi alın`}
                      itemProp="url"
                    >
                      <span aria-hidden="true">🔍</span>
                      Detaylı İncele
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
