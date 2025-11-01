// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// Kart genişliğine göre gerçekçi sizes değerleri (3 kolon)
const COVER_SIZES =
  "(max-width: 640px) calc(100vw - 2rem), " +
  "(max-width: 1024px) calc((100vw - 3rem) / 2), " +
  "calc((100vw - 4rem) / 3)";

const LIGHTBOX_SIZES =
  "(max-width: 768px) 100vw, " +
  "(max-width: 1200px) 90vw, " +
  "min(1024px, 80vw)";

// Galeriler
const GALLERIES = {
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
    description:
      "Yüksek çözünürlüklü LED ekran kurulumları ve profesyonel etkinlik prodüksiyonları",
    stats: "50+ Kurumsal Etkinlik",
    icon: "🖥️",
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
    description:
      "Açık hava etkinlikleri için premium çadır kurulumları ve profesyonel çözümler",
    stats: "100+ Açık Hava Organizasyonu",
    icon: "⛺",
  },
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
    description:
      "Profesyonel podyum kurulumları ve modüler podyum sistemleri",
    stats: "200+ Profesyonel Kurulum",
    icon: "👑",
  },
};

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R";

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

  useEffect(() => setMounted(true), []);

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
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    }, 200);
  }, []);

  const prev = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((c) => (c - 1 + items.length) % items.length);
  }, [items]);

  const next = useCallback(() => {
    if (items.length <= 1) return;
    setIndex((c) => (c + 1) % items.length);
  }, [items]);

  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    const sw = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.overflow = "hidden";
    if (sw > 0) document.body.style.paddingRight = `${sw}px`;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 100);

    return () => {
      const y = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, y);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const dx = touchEndX.current - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
  };

  if (!mounted) {
    return (
      <section className="relative pt-2 pb-8 bg-transparent">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((k) => (
              <div key={k} className="group">
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse mb-3" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4 mb-1.5" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full mb-1" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    // Boşluklar azaltıldı + şerit kaldırıldı
    <section className="relative pt-2 pb-8 bg-transparent">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {Object.entries(GALLERIES).map(([groupTitle, galleryData], i) => {
            const images = galleryData.images;
            const cover = images[0];

            return (
              <article
                key={groupTitle}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200/60 hover:border-blue-200/80 overflow-hidden"
                role="listitem"
              >
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
                      quality={75}         // → byte düşür
                      loading={i < 2 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      priority={i === 0}   // → LCP’yi iyileştir
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-2xl">{galleryData.icon}</span>
                        <span className="text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                          {images.length} Profesyonel Proje
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 transform -translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          <span>🔍</span>
                          Galeriyi İncele
                        </span>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-2xl text-gray-700">{galleryData.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{groupTitle}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-3 line-clamp-2">
                    {galleryData.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
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

      {/* Screen reader live region */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />

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
          <button
            ref={closeBtnRef}
            className="absolute top-6 right-6 z-10 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-2xl p-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center backdrop-blur-sm border border-white/20"
            onClick={close}
            aria-label="Galeriyi kapat"
          >
            <span className="text-lg font-bold">✕</span>
          </button>

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
              quality={85}
              priority
            />
          </div>

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
