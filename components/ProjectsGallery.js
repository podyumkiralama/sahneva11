// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// Kart kapakları (resim liste grid)
const COVER_SIZES =
  "(max-width: 640px) 320px, (max-width: 1024px) 480px, 414px";

// Lightbox büyük görsel
const LIGHTBOX_SIZES = "(max-width: 1024px) 100vw, 1024px";

// Görseller /public/img/galeri altında
const GALLERIES = {
  "Podyum Kiralama": [
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
  "LED Ekran Kiralama": [
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
  "Çadır Kiralama": [
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
};

export default function ProjectsGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(() => new Set()); // 404 verenleri işaretle

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
      liveRef.current.textContent = `${groupTitle} galerisi açıldı.`;
      setTimeout(() => {
        if (liveRef.current) liveRef.current.textContent = "";
      }, 1000);
    }
  };

  const close = useCallback(() => {
    setAnim(false);
    setTimeout(() => {
      setIsOpen(false);
      if (lastFocus.current && typeof lastFocus.current.focus === "function") {
        lastFocus.current.focus();
      }
    }, 180);
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

  // Lightbox açıkken: güçlü body-lock + cleanup (mobil adres çubuğu uyumlu)
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    const scrollbarW =
      window.innerWidth - document.documentElement.clientWidth;
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
    setTimeout(() => closeBtnRef.current?.focus(), 0);

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

  // Swipe
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

  // Komşu görselleri ön-yükle
  useEffect(() => {
    if (!isOpen || items.length < 2) return;
    const nextIdx = (index + 1) % items.length;
    const prevIdx = (index - 1 + items.length) % items.length;
    const a = new window.Image();
    const b = new window.Image();
    a.src = items[nextIdx];
    b.src = items[prevIdx];
  }, [isOpen, index, items]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="container py-14 md:py-16" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-center mb-10">
        Yaptıklarımız
      </h2>

      {/* 1 / 2 / 3 sütun grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Proje galerileri">
        {Object.entries(GALLERIES).map(([groupTitle, images], i) => {
          const cover = images[0];
          const labelId = `gallery-label-${i}`;
          const metaId = `gallery-meta-${i}`;
          return (
            <div key={groupTitle} className="space-y-3" role="listitem">
              <h3 id={labelId} className="text-lg font-semibold">{groupTitle}</h3>

              <button
                type="button"
                onClick={() => open(groupTitle, images, 0)}
                className="group relative w-full h-44 md:h-56 overflow-hidden rounded-2xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                aria-labelledby={labelId}
                aria-describedby={metaId}
              >
                <Image
                  src={cover}
                  alt={`${groupTitle} kapak görseli`}
                  fill
                  className={`object-cover ${
                    prefersReducedMotion
                      ? ""
                      : "group-hover:scale-105 transition-transform"
                  }`}
                  sizes={COVER_SIZES}
                  quality={60}
                  decoding="async"
                  loading={i < 3 ? "eager" : "lazy"}
                  fetchPriority={i < 3 ? "high" : "low"}
                />
                <span
                  className={`absolute inset-0 ${
                    prefersReducedMotion ? "" : "transition-colors"
                  } bg-black/0 group-hover:bg-black/10`}
                  aria-hidden="true"
                />
                <span
                  id={metaId}
                  className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60 text-white"
                >
                  {images.length} fotoğraf
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Ekran okuyucuya kısa durum bildirimi */}
      <p ref={liveRef} aria-live="polite" className="sr-only" />

      {/* LIGHTBOX */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm ${
            prefersReducedMotion ? "" : "transition-opacity duration-200"
          } ${anim ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} lightbox`}
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
          {/* Üst sağ: Kapat (safe-area ile) */}
          <button
            ref={closeBtnRef}
            data-lightbox-focus="1"
            className="hidden md:block absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={close}
            aria-label="Kapat"
            style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
          >
            ✕
          </button>

          {/* Yan oklar: sadece md+ ekranlarda */}
          <button
            data-lightbox-focus="1"
            className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 md:w-16 md:h-16 items-center justify-center text-3xl md:text-5xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={prev}
            aria-label="Önceki"
            aria-disabled={items.length <= 1}
            tabIndex={items.length <= 1 ? -1 : 0}
          >
            ‹
          </button>

          <button
            data-lightbox-focus="1"
            className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 md:w-16 md:h-16 items-center justify-center text-3xl md:text-5xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={next}
            aria-label="Sonraki"
            aria-disabled={items.length <= 1}
            tabIndex={items.length <= 1 ? -1 : 0}
          >
            ›
          </button>

          {/* Görsel alanı */}
          <div
            className={`relative w-full max-w-5xl aspect-[16/10] ${
              prefersReducedMotion
                ? ""
                : "transform transition-transform duration-200"
            } ${anim ? "scale-100" : "scale-95"}`}
          >
            <Image
              key={items[index]}
              src={items[index]}
              alt={`${title} görseli ${index + 1}`}
              fill
              className="object-contain"
              sizes={LIGHTBOX_SIZES}
              quality={80}
              priority
              decoding="async"
              onError={() => {
                const bad = items[index];
                setFailed((s) => new Set(s).add(bad));
                const nextIdx = findNextValid(index, +1);
                if (nextIdx === -1) close();
                else setIndex(nextIdx);
              }}
            />
          </div>

          {/* Bilgi/indikatör */}
          <div className="absolute bottom-[72px] md:bottom-4 left-0 right-0 text-center text-white/90 text-sm">
            {title} — {index + 1}/{items.length}
          </div>

          {/* Mobil alt kontrol çubuğu (her zaman görünür) */}
          <div
            className="md:hidden fixed inset-x-0 bottom-0 z-[10000] bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
          >
            <div className="mx-auto max-w-xl flex items-center justify-between gap-2 px-4 py-3">
              <button
                data-lightbox-focus="1"
                onClick={close}
                className="flex-1 rounded-lg bg-white/15 text-white py-2 font-semibold"
                aria-label="Kapat"
              >
                ✕ Kapat
              </button>
              <button
                data-lightbox-focus="1"
                onClick={prev}
                className="flex-1 rounded-lg bg-white/15 text-white py-2 font-semibold"
                aria-label="Önceki"
                aria-disabled={items.length <= 1}
              >
                ‹ Önceki
              </button>
              <button
                data-lightbox-focus="1"
                onClick={next}
                className="flex-1 rounded-lg bg-white/15 text-white py-2 font-semibold"
                aria-label="Sonraki"
                aria-disabled={items.length <= 1}
              >
                Sonraki ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
