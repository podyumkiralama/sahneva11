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

// ✅ OPTİMİZE: SEO friendly galeri verileri
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
    "/img/galeri/podyum-kiralama-11.webp",
    "/img/galeri/podyum-kiralama-12.webp",
    "/img/galeri/podyum-kiralama-13.webp",
    "/img/galeri/podyum-kiralama-14.webp",
    "/img/galeri/podyum-kiralama-15.webp",
    "/img/galeri/podyum-kiralama-16.webp",
    "/img/galeri/podyum-kiralama-17.webp",
    "/img/galeri/podyum-kiralama-18.webp",
    "/img/galeri/podyum-kiralama-19.webp",
    "/img/galeri/podyum-kiralama-20.webp",
    "/img/galeri/podyum-kiralama-21.webp",
    "/img/galeri/podyum-kiralama-22.webp",
    "/img/galeri/podyum-kiralama-23.webp",
    "/img/galeri/podyum-kiralama-24.webp",
    "/img/galeri/podyum-kiralama-25.webp",
    "/img/galeri/podyum-kiralama-26.webp",
    "/img/galeri/podyum-kiralama-27.webp",
    "/img/galeri/podyum-kiralama-28.webp",
    "/img/galeri/podyum-kiralama-29.webp",
    "/img/galeri/podyum-kiralama-30.webp",
    "/img/galeri/podyum-kiralama-31.webp",
    "/img/galeri/podyum-kiralama-32.webp",
    "/img/galeri/podyum-kiralama-33.webp",
    "/img/galeri/podyum-kiralama-34.webp",
    "/img/galeri/podyum-kiralama-35.webp",
    "/img/galeri/podyum-kiralama-36.webp",
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
    "/img/galeri/led-ekran-kiralama-11.webp",
    "/img/galeri/led-ekran-kiralama-12.webp",
    "/img/galeri/led-ekran-kiralama-13.webp",
    "/img/galeri/led-ekran-kiralama-14.webp",
    "/img/galeri/led-ekran-kiralama-15.webp",
    "/img/galeri/led-ekran-kiralama-16.webp",
    "/img/galeri/led-ekran-kiralama-17.webp",
    "/img/galeri/led-ekran-kiralama-18.webp",
    "/img/galeri/led-ekran-kiralama-19.webp",
    "/img/galeri/led-ekran-kiralama-20.webp",
    "/img/galeri/led-ekran-kiralama-21.webp",
    "/img/galeri/led-ekran-kiralama-22.webp",
    "/img/galeri/led-ekran-kiralama-23.webp",
    "/img/galeri/led-ekran-kiralama-24.webp",
    "/img/galeri/led-ekran-kiralama-25.webp",
    "/img/galeri/led-ekran-kiralama-26.webp",
    "/img/galeri/led-ekran-kiralama-27.webp",
    "/img/galeri/led-ekran-kiralama-28.webp",
    "/img/galeri/led-ekran-kiralama-29.webp",
    "/img/galeri/led-ekran-kiralama-30.webp",
    "/img/galeri/led-ekran-kiralama-31.webp",
    "/img/galeri/led-ekran-kiralama-32.webp",
    "/img/galeri/led-ekran-kiralama-33.webp",
    "/img/galeri/led-ekran-kiralama-34.webp",
    "/img/galeri/led-ekran-kiralama-35.webp",
    "/img/galeri/led-ekran-kiralama-36.webp",
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
    "/img/galeri/cadir-kiralama-11.webp",
    "/img/galeri/cadir-kiralama-12.webp",
    "/img/galeri/cadir-kiralama-13.webp",
    "/img/galeri/cadir-kiralama-14.webp",
    "/img/galeri/cadir-kiralama-15.webp",
    "/img/galeri/cadir-kiralama-16.webp",
    "/img/galeri/cadir-kiralama-17.webp",
    "/img/galeri/cadir-kiralama-18.webp",
    "/img/galeri/cadir-kiralama-19.webp",
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
  const [mounted, setMounted] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lastFocus = useRef(null);
  const closeBtnRef = useRef(null);
  const scrollYRef = useRef(0);
  const liveRef = useRef(null);
  const headingId = "projects-heading";

  // ✅ FIX: Hydration hatası için useEffect
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
      liveRef.current.textContent = `${groupTitle} proje galerisi açıldı, ${images.length} fotoğraf mevcut.`;
      setTimeout(() => {
        if (liveRef.current) liveRef.current.textContent = "";
      }, 1500);
    }
  }, []);

  const close = useCallback(() => {
    setAnim(false);
    setTimeout(() => {
      setIsOpen(false);
      if (lastFocus.current && typeof lastFocus.current.focus === "function") {
        try {
          lastFocus.current.focus();
        } catch (e) {
          console.log("Focus error:", e);
        }
      }
    }, 200);
  }, []);

  const prev = useCallback(() => {
    if (!items || items.length <= 1) return;
    setIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  }, [items]);

  const next = useCallback(() => {
    if (!items || items.length <= 1) return;
    setIndex((currentIndex) => (currentIndex + 1) % items.length);
  }, [items]);

  // ✅ FIX: Basitleştirilmiş body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Body scroll'u kilitle
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
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
    
    // Focus'u kapat butonuna ver
    setTimeout(() => {
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    }, 100);

    return () => {
      // Scroll kilidini kaldır
      const scrollY = scrollYRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.scrollTo(0, scrollY);
      
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, prev, next]);

  // ✅ FIX: Basitleştirilmiş touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    
    if (Math.abs(deltaX) > 50) { // Minimum swipe distance
      if (deltaX > 0) {
        prev();
      } else {
        next();
      }
    }
  };

  // Sunucu tarafında render için loading state
  if (!mounted) {
    return (
      <section className="container py-16 md:py-20" aria-labelledby={headingId}>
        <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Tamamlanan Projeler ve Referanslar
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-48 md:h-60 lg:h-72 bg-gray-200 rounded-2xl animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
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
      <h2 id={headingId} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Tamamlanan Projeler ve Referanslar
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        Sahne, podyum, LED ekran ve çadır kurulumlarımızdan seçilmiş referans projeler. 
        Profesyonel ekipman ve uzman ekibimizle hayata geçirdiğimiz etkinlikler.
      </p>

      {/* ✅ OPTİMİZE: Grid layout ve SEO */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
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
            >
              <h3 id={labelId} className="text-xl font-bold text-gray-900">
                {groupTitle}
              </h3>

              <button
                type="button"
                onClick={() => open(groupTitle, images, 0)}
                className="relative w-full h-48 md:h-60 lg:h-72 overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2"
                aria-labelledby={labelId}
                aria-describedby={metaId}
                title={galleryData.titleAttr}
              >
                <Image
                  src={cover}
                  alt={`${groupTitle} - Sahneva profesyonel kurulum örneği ve referans projesi`}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    prefersReducedMotion ? "" : "group-hover:scale-110"
                  }`}
                  sizes={COVER_SIZES}
                  quality={70}
                  loading={i < 2 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
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
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {galleryData.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Ekran okuyucu bildirimi */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />

      {/* ✅ FIX: Basitleştirilmiş Lightbox */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md ${
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
        >
          {/* Kapat butonu */}
          <button
            ref={closeBtnRef}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={close}
            aria-label="Galeriyi kapat"
          >
            <span className="text-xl font-bold">✕</span>
          </button>

          {/* Navigasyon okları */}
          {items.length > 1 && (
            <>
              <button
                className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 items-center justify-center text-3xl shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10"
                onClick={prev}
                aria-label="Önceki proje görseli"
              >
                ‹
              </button>

              <button
                className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-14 h-14 items-center justify-center text-3xl shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 z-10"
                onClick={next}
                aria-label="Sonraki proje görseli"
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
              onError={() => {
                // Basit error handling - sonraki resme geç
                if (items.length > 1) {
                  next();
                }
              }}
            />
          </div>

          {/* Bilgi çubuğu */}
          <div className="absolute bottom-20 md:bottom-6 left-0 right-0 text-center text-white/90 text-base font-medium bg-black/40 backdrop-blur-sm py-2 mx-auto max-w-md rounded-full">
            {title} — {index + 1} / {items.length}
          </div>

          {/* Mobil kontrol çubuğu */}
          {items.length > 1 && (
            <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur py-4">
              <div className="mx-auto max-w-xl flex items-center justify-between gap-3 px-4">
                <button
                  onClick={prev}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Önceki görsel"
                >
                  ‹ Önceki
                </button>
                <button
                  onClick={close}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                  aria-label="Galeriyi kapat"
                >
                  ✕ Kapat
                </button>
                <button
                  onClick={next}
                  className="flex-1 rounded-xl bg-white/20 text-white py-3 font-semibold text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
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
