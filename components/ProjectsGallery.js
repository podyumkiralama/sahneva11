// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// ✅ İYİLEŞTİRİLDİ: Daha optimize sizes değerleri
const COVER_SIZES =
  "(max-width: 640px) calc(100vw - 2rem), " +
  "(max-width: 768px) calc((100vw - 3rem) / 2), " +
  "calc((100vw - 4rem) / 3)";

const LIGHTBOX_SIZES = 
  "(max-width: 768px) 100vw, " +
  "(max-width: 1200px) 90vw, " +
  "min(1024px, 80vw)";

// ✅ İYİLEŞTİRİLDİ: SEO optimize edilmiş galeri verileri
const GALLERIES = {
  "Podyum Kiralama": {
    images: [
      "/img/galeri/podyum-kiralama-1.webp",
      "/img/galeri/podyum-kiralama-2.webp",
      "/img/galeri/podyum-kiralama-3.webp",
      "/img/galeri/podyum-kiralama-4.webp",
      "/img/galeri/podyum-kiralama-5.webp",
      "/img/galeri/podyum-kiralama-6.webp",
      "/img/galeri/podyum-kiralama-7.webp",
      "/img/galeri/podyum-kiralama-8.webp",
      "/img/galeri/podyum-kiralama-9.webp",
      "/img/galeri/podyum-kiralama-10.webp",
      // ... diğer görseller
    ],
    description: "Profesyonel podyum kurulumları ve modüler podyum sistemleri - Sahneva referans projeleri",
    titleAttr: "Podyum Kiralama Referansları - Profesyonel Kurulum Örnekleri"
  },
  "LED Ekran Kiralama": {
    images: [
      "/img/galeri/led-ekran-kiralama-1.webp",
      "/img/galeri/led-ekran-kiralama-2.webp",
      "/img/galeri/led-ekran-kiralama-3.webp",
      "/img/galeri/led-ekran-kiralama-4.webp",
      "/img/galeri/led-ekran-kiralama-5.webp",
      "/img/galeri/led-ekran-kiralama-6.webp",
      "/img/galeri/led-ekran-kiralama-7.webp",
      "/img/galeri/led-ekran-kiralama-8.webp",
      "/img/galeri/led-ekran-kiralama-9.webp",
      "/img/galeri/led-ekran-kiralama-10.webp",
      // ... diğer görseller
    ],
    description: "Yüksek çözünürlüklü LED ekran kurulumları ve etkinlik prodüksiyonları - Sahneva",
    titleAttr: "LED Ekran Kiralama Referansları - Büyük Ölçekli Kurulumlar"
  },
  "Çadır Kiralama": {
    images: [
      "/img/galeri/cadir-kiralama-1.webp",
      "/img/galeri/cadir-kiralama-2.webp",
      "/img/galeri/cadir-kiralama-3.webp",
      "/img/galeri/cadir-kiralama-4.webp",
      "/img/galeri/cadir-kiralama-5.webp",
      "/img/galeri/cadir-kiralama-6.webp",
      "/img/galeri/cadir-kiralama-7.webp",
      "/img/galeri/cadir-kiralama-8.webp",
      "/img/galeri/cadir-kiralama-9.webp",
      "/img/galeri/cadir-kiralama-10.webp",
      // ... diğer görseller
    ],
    description: "Açık hava etkinlikleri için profesyonel çadır kurulumları - Sahneva çadır kiralama",
    titleAttr: "Çadır Kiralama Referansları - Açık Hava Etkinlik Çözümleri"
  },
};

export default function ProjectsGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(() => new Set());

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lastFocus = useRef(null);
  const closeBtnRef = useRef(null);
  const scrollYRef = useRef(0);
  const liveRef = useRef(null);
  const headingId = "projects-heading";

  const open = (groupTitle, images, startIndex = 0) => {
    lastFocus.current = document.activeElement;
    setTitle(groupTitle);
    setItems(images);
    setIndex(startIndex);
    setIsOpen(true);
    requestAnimationFrame(() => setAnim(true));
    if (liveRef.current) {
      liveRef.current.textContent = `${groupTitle} proje galerisi açıldı, ${images.length} fotoğraf mevcut.`;
      setTimeout(() => {
        if (liveRef.current) liveRef.current.textContent = "";
      }, 1500);
    }
  };

  const close = useCallback(() => {
    setAnim(false);
    setTimeout(() => {
      setIsOpen(false);
      if (lastFocus.current && typeof lastFocus.current.focus === "function") {
        lastFocus.current.focus();
      }
    }, 200);
  }, []);

  const findNextValid = useCallback(
    (start, dir = 1) => {
      if (!items || items.length === 0) return -1;
      let i = start;
      for (let step = 0; step < items.length; step++) {
        i = (i + dir + items.length) % items.length;
        const src = items[i];
        if (!failed.has(src)) return i;
      }
      return -1;
    },
    [items, failed]
  );

  const prev = useCallback(() => {
    if (!items || items.length <= 1) return;
    setIndex((i) => {
      const nextIdx = findNextValid(i, -1);
      return nextIdx === -1 ? i : nextIdx;
    });
  }, [items, findNextValid]);

  const next = useCallback(() => {
    if (!items || items.length <= 1) return;
    setIndex((i) => {
      const nextIdx = findNextValid(i, +1);
      return nextIdx === -1 ? i : nextIdx;
    });
  }, [items, findNextValid]);

  // Lightbox body lock efekti - değişmedi
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    const body = document.body;
    const html = document.documentElement;

    const prevStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
      overflow: body.style.overflow,
      overscrollBehavior: body.style.overscrollBehavior,
    };
    body._prevLock = prevStyles;

    try {
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.width = "100%";
      if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;
      body.style.overflow = "hidden";
      body.style.overscrollBehavior = "contain";
      html.style.scrollBehavior = "auto";
    } catch {}

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const focusables = Array.from(
          document.querySelectorAll('[data-lightbox-focus="1"]')
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    setTimeout(() => closeBtnRef.current?.focus(), 50);

    return () => {
      try {
        const y = scrollYRef.current || 0;
        const restore = body._prevLock || {};
        body.style.position = restore.position || "";
        body.style.top = restore.top || "";
        body.style.width = restore.width || "";
        body.style.paddingRight = restore.paddingRight || "";
        body.style.overflow = restore.overflow || "";
        body.style.overscrollBehavior = restore.overscrollBehavior || "";
        window.scrollTo(0, y);
        html.style.scrollBehavior = "";
      } finally {
        window.removeEventListener("keydown", onKey);
      }
    };
  }, [isOpen, close, prev, next]);

  // Swipe gesture - değişmedi
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) prev();
    else next();
  };

  // Ön-yükleme optimizasyonu
  useEffect(() => {
    if (!isOpen || items.length < 2) return;
    const nextIdx = (index + 1) % items.length;
    const prevIdx = (index - 1 + items.length) % items.length;
    
    // ✅ İYİLEŞTİRİLDİ: Preload için Image component kullanımı
    const preloadImages = [items[nextIdx], items[prevIdx]].filter(src => !failed.has(src));
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [isOpen, index, items, failed]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section 
      className="container py-16 md:py-20" 
      aria-labelledby={headingId}
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Tamamlanan Projeler ve Referanslar
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        Sahne, podyum, LED ekran ve çadır kurulumlarımızdan seçilmiş referans projeler. 
        Profesyonel ekipman ve uzman ekibimizle hayata geçirdiğimiz etkinlikler.
      </p>

      {/* ✅ İYİLEŞTİRİLDİ: Grid layout ve SEO optimizasyonu */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
        role="list" 
        aria-label="Proje galerisi kategorileri"
        itemScope
        itemProp="hasPart"
        itemType="https://schema.org/ImageObject"
      >
        {Object.entries(GALLERIES).map(([groupTitle, galleryData], i) => {
          const images = galleryData.images;
          const cover = images[0];
          const labelId = `gallery-label-${i}`;
          const metaId = `gallery-meta-${i}`;
          
          return (
            <article 
              key={groupTitle} 
              className="space-y-4 group" 
              role="listitem"
              itemScope
              itemProp="image"
              itemType="https://schema.org/ImageObject"
            >
              <h3 id={labelId} className="text-xl font-bold text-gray-900" itemProp="name">
                {groupTitle}
              </h3>

              <button
                type="button"
                onClick={() => open(groupTitle, images, 0)}
                className="relative w-full h-48 md:h-60 lg:h-72 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-[#6d28d9] focus:outline-none focus:ring-4 focus:ring-[#6d28d9] focus:ring-offset-2"
                aria-labelledby={labelId}
                aria-describedby={metaId}
                title={galleryData.titleAttr}
              >
                {/* ✅ İYİLEŞTİRİLDİ: Image SEO optimizasyonu */}
                <Image
                  src={cover}
                  alt={`${groupTitle} - Sahneva profesyonel kurulum örneği ve referans projesi`}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    prefersReducedMotion ? "" : "group-hover:scale-110"
                  }`}
                  sizes={COVER_SIZES}
                  quality={70}
                  decoding="async"
                  loading={i < 2 ? "eager" : "lazy"} // ✅ Sadece loading kullanıldı
                  placeholder="blur"
                  blurDataURL="/img/placeholder-blur.webp"
                  itemProp="contentUrl"
                />
                <div 
                  className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${
                    prefersReducedMotion ? "" : "group-hover:bg-black/5"
                  }`}
                  aria-hidden="true"
                />
                <span
                  id={metaId}
                  className="absolute bottom-3 right-3 text-xs px-3 py-1.5 rounded-full bg-black/70 text-white font-medium backdrop-blur-sm"
                >
                  {images.length} Proje
                </span>
                
                {/* ✅ YENİ: Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
                    🔍 Galeriyi Görüntüle
                  </span>
                </div>
              </button>
              
              <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">
                {galleryData.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Ekran okuyucu bildirimi */}
      <p ref={liveRef} aria-live="polite" className="sr-only" />

      {/* ✅ İYİLEŞTİRİLDİ: Lightbox SEO ve erişilebilirlik optimizasyonu */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md ${
            prefersReducedMotion ? "" : "transition-opacity duration-300"
          } ${anim ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} proje galerisi - ${index + 1}. görsel`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Kapat butonu */}
          <button
            ref={closeBtnRef}
            data-lightbox-focus="1"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={close}
            aria-label="Galeriyi kapat"
            style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
            title="Galeriyi kapat"
          >
            <span className="text-xl font-bold">✕</span>
          </button>

          {/* Navigasyon okları */}
          {items.length > 1 && (
            <>
              <button
                data-lightbox-focus="1"
                className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 items-center justify-center text-3xl shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10 min-h-[56px] min-w-[56px]"
                onClick={prev}
                aria-label="Önceki proje görseli"
                title="Önceki görsel"
              >
                ‹
              </button>

              <button
                data-lightbox-focus="1"
                className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 items-center justify-center text-3xl shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10 min-h-[56px] min-w-[56px]"
                onClick={next}
                aria-label="Sonraki proje görseli"
                title="Sonraki görsel"
              >
                ›
              </button>
            </>
          )}

          {/* Görsel alanı */}
          <div
            className={`relative w-full max-w-6xl aspect-[16/10] ${
              prefersReducedMotion
                ? ""
                : "transform transition-transform duration-300"
            } ${anim ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <Image
              key={items[index]}
              src={items[index]}
              alt={`${title} - ${index + 1}. referans proje görseli, Sahneva profesyonel kurulum`}
              fill
              className="object-contain drop-shadow-2xl"
              sizes={LIGHTBOX_SIZES}
              quality={85}
              priority
              decoding="async"
              onError={() => {
                const bad = items[index];
                setFailed((s) => new Set(s).add(bad));
                const nextIdx = findNextValid(index, +1);
                if (nextIdx === -1) close();
                else setIndex(nextIdx);
              }}
              title={`${title} - Referans Proje ${index + 1}`}
            />
          </div>

          {/* Bilgi çubuğu */}
          <div className="absolute bottom-20 md:bottom-6 left-0 right-0 text-center text-white/90 text-base font-medium bg-black/40 backdrop-blur-sm py-2 mx-auto max-w-md rounded-full">
            <span itemProp="name">{title}</span> — <span itemProp="position">{index + 1}</span> / {items.length}
          </div>

          {/* Mobil kontrol çubuğu */}
          {items.length > 1 && (
            <div
              className="md:hidden fixed inset-x-0 bottom-0 z-[10000] bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60"
              style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
            >
              <div className="mx-auto max-w-xl flex items-center justify-between gap-3 px-4 py-4">
                <button
                  data-lightbox-focus="1"
                  onClick={close}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Galeriyi kapat"
                  title="Kapat"
                >
                  ✕ Kapat
                </button>
                <button
                  data-lightbox-focus="1"
                  onClick={prev}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Önceki görsel"
                  title="Önceki"
                >
                  ‹ Önceki
                </button>
                <button
                  data-lightbox-focus="1"
                  onClick={next}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Sonraki görsel"
                  title="Sonraki"
                >
                  Sonraki ›
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
