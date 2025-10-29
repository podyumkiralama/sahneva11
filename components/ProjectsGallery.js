// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// ✅ OPTİMİZE: Daha iyi responsive sizes değerleri
const COVER_SIZES =
  "(max-width: 640px) calc(100vw - 2rem), " +
  "(max-width: 768px) calc((100vw - 3rem) / 2), " +
  "calc((100vw - 4rem) / 3)";

const LIGHTBOX_SIZES = 
  "(max-width: 768px) 100vw, " +
  "(max-width: 1200px) 90vw, " +
  "min(1024px, 80vw)";

// ✅ OPTİMİZE: SEO friendly galeri verileri - sadece 3 ana hizmet
const GALLERIES = {
  "LED Ekran Kiralama": {
    images: [
      "/img/galeri/led-ekran-kiralama-1.webp",
      "/img/galeri/led-ekran-kiralama-2.webp",
      "/img/galeri/led-ekran-kiralama-3.webp",
      "/img/galeri/led-ekran-kiralama-4.webp",
      "/img/galeri/led-ekran-kiralama-5.webp",
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
    ],
    description: "Açık hava etkinlikleri için profesyonel çadır kurulumları - Sahneva çadır kiralama",
    titleAttr: "Çadır Kiralama Referansları - Açık Hava Etkinlik Çözümleri"
  },
};

// ✅ OPTİMİZE: Basit blur data URL
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R";

export default function ProjectsGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lastFocus = useRef(null);
  const closeBtnRef = useRef(null);
  const scrollYRef = useRef(0);
  const liveRef = useRef(null);
  const headingId = "projects-heading";

  // ✅ OPTİMİZE: Basit mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  const open = useCallback((groupTitle, images, startIndex = 0) => {
    lastFocus.current = document.activeElement;
    setTitle(groupTitle);
    setItems(images);
    setIndex(startIndex);
    setIsOpen(true);
    setTimeout(() => setAnim(true), 10);
    
    // Ekran okuyucu bildirimi
    if (liveRef.current) {
      setTimeout(() => {
        liveRef.current.textContent = `${groupTitle} galerisi açıldı, ${images.length} fotoğraf`;
        setTimeout(() => {
          if (liveRef.current) liveRef.current.textContent = "";
        }, 2000);
      }, 100);
    }
  }, []);

  const close = useCallback(() => {
    setAnim(false);
    setTimeout(() => {
      setIsOpen(false);
      lastFocus.current?.focus?.();
    }, 200);
  }, []);

  const prev = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((current) => (current - 1 + items.length) % items.length);
  }, [items]);

  const next = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((current) => (current + 1) % items.length);
  }, [items]);

  // ✅ OPTİMİZE: Basitleştirilmiş scroll lock
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    
    setTimeout(() => closeBtnRef.current?.focus(), 100);

    return () => {
      const scrollY = scrollYRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, prev, next]);

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? prev() : next();
    }
  };

  // ✅ OPTİMİZE: Basit loading state
  if (!mounted) {
    return (
      <section className="container py-16 md:py-20" aria-labelledby={headingId}>
        <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Başarılı Projelerimiz
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-64 md:h-72 bg-gray-200 rounded-2xl animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const prefersReducedMotion = typeof window !== "undefined" ? 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  return (
    <section 
      className="container py-16 md:py-20" 
      aria-labelledby={headingId}
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {/* ✅ OPTİMİZE: SEO friendly başlık ve açıklama */}
      <header className="text-center mb-12">
        <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Başarılı Projelerimiz
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
        </p>
      </header>

      {/* ✅ OPTİMİZE: Grid layout ve SEO */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" 
        role="list" 
        aria-label="Proje galerisi kategorileri"
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
              itemType="https://schema.org/CreativeWork"
            >
              <h3 id={labelId} className="text-xl font-bold text-gray-900" itemProp="name">
                {groupTitle}
              </h3>

              <button
                type="button"
                onClick={() => open(groupTitle, images, 0)}
                className="relative w-full h-64 md:h-72 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
                aria-labelledby={labelId}
                aria-describedby={metaId}
                title={galleryData.titleAttr}
              >
                <Image
                  src={cover}
                  alt={`${groupTitle} - Sahneva profesyonel kurulum örneği`}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    prefersReducedMotion ? "" : "group-hover:scale-105"
                  }`}
                  sizes={COVER_SIZES}
                  quality={75}
                  loading={i === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  itemProp="image"
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
                
                {/* Hover overlay */}
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
      <div ref={liveRef} aria-live="polite" className="sr-only" />

      {/* ✅ OPTİMİZE: Basitleştirilmiş Lightbox */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm ${
            prefersReducedMotion ? "" : "transition-opacity duration-300"
          } ${anim ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} proje galerisi`}
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Kapat butonu */}
          <button
            ref={closeBtnRef}
            className="absolute top-4 right-4 z-10 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={close}
            aria-label="Galeriyi kapat"
          >
            <span className="text-xl font-bold">✕</span>
          </button>

          {/* Navigasyon okları */}
          {items.length > 1 && (
            <>
              <button
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 items-center justify-center text-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={prev}
                aria-label="Önceki görsel"
              >
                ‹
              </button>
              <button
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 items-center justify-center text-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={next}
                aria-label="Sonraki görsel"
              >
                ›
              </button>
            </>
          )}

          {/* Görsel alanı */}
          <div
            className={`relative w-full max-w-4xl aspect-[4/3] ${
              prefersReducedMotion ? "" : "transition-transform duration-300"
            } ${anim ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <Image
              key={items[index]}
              src={items[index]}
              alt={`${title} - ${index + 1}. referans proje görseli`}
              fill
              className="object-contain"
              sizes={LIGHTBOX_SIZES}
              quality={85}
              priority
            />
          </div>

          {/* Bilgi çubuğu */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium bg-black/50 backdrop-blur-sm py-2 px-4 rounded-full">
            {title} — {index + 1} / {items.length}
          </div>

          {/* Mobil kontrol çubuğu */}
          {items.length > 1 && (
            <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur py-3">
              <div className="mx-auto max-w-sm flex items-center justify-between gap-2 px-4">
                <button
                  onClick={prev}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Önceki görsel"
                >
                  ‹ Önceki
                </button>
                <button
                  onClick={next}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Sonraki görsel"
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
