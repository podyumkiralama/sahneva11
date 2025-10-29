// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// ✅ OPTİMİZE: Responsive sizes değerleri
const COVER_SIZES =
  "(max-width: 640px) calc(100vw - 2rem), " +
  "(max-width: 768px) calc((100vw - 3rem) / 2), " +
  "calc((100vw - 4rem) / 3)";

const LIGHTBOX_SIZES = 
  "(max-width: 768px) 100vw, " +
  "(max-width: 1200px) 90vw, " +
  "min(1024px, 80vw)";

// ✅ OPTİMİZE: 3 galeri ve premium içerik
const GALLERIES = {
  "LED Ekran Kiralama": {
    images: [
      "/img/galeri/led-ekran-kiralama-1.webp",
      "/img/galeri/led-ekran-kiralama-2.webp",
      "/img/galeri/led-ekran-kiralama-3.webp",
      "/img/galeri/led-ekran-kiralama-4.webp",
      "/img/galeri/led-ekran-kiralama-5.webp",
      "/img/galeri/led-ekran-kiralama-6.webp",
    ],
    description: "Yüksek çözünürlüklü LED ekran kurulumları ve profesyonel etkinlik prodüksiyonları",
    stats: "50+ Kurumsal Etkinlik",
    icon: "🖥️"
  },
  "Çadır Kiralama": {
    images: [
      "/img/galeri/cadir-kiralama-1.webp",
      "/img/galeri/cadir-kiralama-2.webp",
      "/img/galeri/cadir-kiralama-3.webp",
      "/img/galeri/cadir-kiralama-4.webp",
      "/img/galeri/cadir-kiralama-5.webp",
      "/img/galeri/cadir-kiralama-6.webp",
    ],
    description: "Açık hava etkinlikleri için premium çadır kurulumları ve profesyonel çözümler",
    stats: "100+ Açık Hava Organizasyonu",
    icon: "⛺"
  },
  "Ses & Işık Sistemleri": {
    images: [
      "/img/galeri/ses-isik-1.webp",
      "/img/galeri/ses-isik-2.webp",
      "/img/galeri/ses-isik-3.webp",
      "/img/galeri/ses-isik-4.webp",
      "/img/galeri/ses-isik-5.webp",
      "/img/galeri/ses-isik-6.webp",
    ],
    description: "Profesyonel ses ve ışık sistemleri ile unutulmaz etkinlik deneyimleri",
    stats: "200+ Profesyonel Kurulum",
    icon: "🎭"
  }
};

// ✅ OPTİMİZE: Premium blur placeholder
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
    
    if (liveRef.current) {
      setTimeout(() => {
        liveRef.current.textContent = `${groupTitle} galerisi açıldı, ${images.length} profesyonel proje`;
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

  // ✅ OPTİMİZE: Premium loading state
  if (!mounted) {
    return (
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          {/* ❌ BAŞLIK KALDIRILDI - Anasayfadan gelecek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse mb-4"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const prefersReducedMotion = typeof window !== "undefined" ? 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* ✅ OPTİMİZE: Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-green-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        {/* ❌ BAŞLIK KALDIRILDI - Anasayfadan gelecek */}

        {/* ✅ OPTİMİZE: Premium grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {Object.entries(GALLERIES).map(([groupTitle, galleryData], i) => {
            const images = galleryData.images;
            const cover = images[0];
            
            return (
              <article 
                key={groupTitle} 
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200/60 hover:border-blue-200/80 overflow-hidden"
                role="listitem"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => open(groupTitle, images, 0)}
                    className="absolute inset-0 w-full h-full focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-t-2xl"
                  >
                    <Image
                      src={cover}
                      alt={`${groupTitle} - Sahneva profesyonel kurulum referansı`}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        prefersReducedMotion ? "" : "group-hover:scale-110"
                      }`}
                      sizes={COVER_SIZES}
                      quality={80}
                      loading={i < 2 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{galleryData.icon}</span>
                        <span className="text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          {images.length} Profesyonel Proje
                        </span>
                      </div>
                    </div>

                    {/* Hover Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          <span>🔍</span>
                          Galeriyi İncele
                        </span>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl text-gray-700">{galleryData.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{groupTitle}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {galleryData.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                      {galleryData.stats}
                    </span>
                    <button
                      onClick={() => open(groupTitle, images, 0)}
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group/btn"
                    >
                      Tümünü Gör
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Ekran okuyucu bildirimi */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />

      {/* ✅ OPTİMİZE: Premium Lightbox */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md ${
            prefersReducedMotion ? "" : "transition-all duration-500"
          } ${anim ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} profesyonel proje galerisi`}
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Premium Close Button */}
          <button
            ref={closeBtnRef}
            className="absolute top-6 right-6 z-10 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-2xl p-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center backdrop-blur-sm border border-white/20"
            onClick={close}
            aria-label="Galeriyi kapat"
          >
            <span className="text-lg font-bold">✕</span>
          </button>

          {/* Premium Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-2xl w-14 h-14 items-center justify-center text-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 backdrop-blur-sm border border-white/20"
                onClick={prev}
                aria-label="Önceki proje"
              >
                ‹
              </button>
              <button
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-2xl w-14 h-14 items-center justify-center text-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 backdrop-blur-sm border border-white/20"
                onClick={next}
                aria-label="Sonraki proje"
              >
                ›
              </button>
            </>
          )}

          {/* Premium Image Container */}
          <div
            className={`relative w-full max-w-6xl aspect-[16/10] ${
              prefersReducedMotion ? "" : "transition-all duration-500"
            } ${anim ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
          >
            <Image
              key={items[index]}
              src={items[index]}
              alt={`${title} - ${index + 1}. profesyonel referans projemiz`}
              fill
              className="object-contain rounded-xl"
              sizes={LIGHTBOX_SIZES}
              quality={90}
              priority
            />
          </div>

          {/* Premium Info Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-base font-medium bg-black/50 backdrop-blur-sm py-3 px-6 rounded-2xl border border-white/20 min-w-[200px] text-center">
            <div className="font-semibold text-white mb-1">{title}</div>
            <div className="text-sm text-white/70">
              {index + 1} / {items.length} • Profesyonel Kurulum
            </div>
          </div>

          {/* Premium Mobile Controls */}
          {items.length > 1 && (
            <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur-lg border-t border-white/20 py-4">
              <div className="mx-auto max-w-sm flex items-center justify-between gap-3 px-4">
                <button
                  onClick={prev}
                  className="flex-1 rounded-xl bg-white/20 text-white py-4 font-semibold text-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[52px] backdrop-blur-sm border border-white/20"
                  aria-label="Önceki proje"
                >
                  ‹ Önceki
                </button>
                <button
                  onClick={next}
                  className="flex-1 rounded-xl bg-white/20 text-white py-4 font-semibold text-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[52px] backdrop-blur-sm border border-white/20"
                  aria-label="Sonraki proje"
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
