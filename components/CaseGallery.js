// components/CaseGallery.js
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export default function CaseGallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const lastFocusRef = useRef(null);
  const yRef = useRef(0);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  const show = useCallback((i) => {
    lastFocusRef.current = document.activeElement;
    setIdx(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Lightbox açıkken: body scroll kilidi + ESC/ok kontrolleri + ilk odak
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    yRef.current = window.scrollY;

    const prev = {
      pos: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${yRef.current}px`;
    body.style.overflow = "hidden";
    body.style.width = "100%";

    // ilk odak
    (closeBtnRef.current || dialogRef.current)?.focus?.();

    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") setIdx((x) => (x - 1 + images.length) % images.length);
      else if (e.key === "ArrowRight") setIdx((x) => (x + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      body.style.position = prev.pos || "";
      body.style.top = prev.top || "";
      body.style.overflow = prev.overflow || "";
      body.style.width = prev.width || "";
      window.scrollTo(0, yRef.current);
      lastFocusRef.current?.focus?.();
    };
  }, [open, images.length, close]);

  // Focus trap (dialog dışına tab kaçmasın)
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!dialogRef.current) return;
      if (!dialogRef.current.contains(e.target)) {
        e.stopPropagation();
        (closeBtnRef.current || dialogRef.current)?.focus?.();
      }
    };
    document.addEventListener("focusin", handler);
    return () => document.removeEventListener("focusin", handler);
  }, [open]);

  if (!images?.length) return null;

  return (
    <div>
      {/* Thumbnail grid */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3" role="list">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-white w-full"
              onClick={() => show(i)}
              aria-label={`Görseli büyüt: ${img.alt || "LED ekran görseli"}`}
              title="Görseli büyüt"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 50vw, (max-width:1024px) 25vw, 280px"
                className="object-cover"
                loading={i < 2 ? "eager" : "lazy"}
                quality={70}
                // fetchPriority yalnızca önemli ilk görseller için iyi; thumb'larda gerek yok
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-desc"
          tabIndex={-1}
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3"
          onClick={(e) => e.target === e.currentTarget && close()}
          style={{ overscrollBehavior: "contain" }}
        >
          {/* Erişilebilir başlık + açıklama (görünmez) */}
          <h2 id="lightbox-title" className="sr-only">
            LED ekran görseli — büyük önizleme
          </h2>
          <p id="lightbox-desc" className="sr-only">
            ESC ile kapatabilirsiniz. Sol/sağ ok tuşları ile görseller arasında gezinin.
          </p>

          {/* Kapat */}
          <button
            ref={closeBtnRef}
            type="button"
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={close}
            aria-label="Kapat"
            title="Kapat"
          >
            ✕
          </button>

          {/* Sol ok (desktop) */}
          <button
            type="button"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 items-center justify-center text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={() => setIdx((x) => (x - 1 + images.length) % images.length)}
            aria-label="Önceki görsel"
            title="Önceki"
          >
            ‹
          </button>

          {/* Görsel */}
          <figure className="relative w-full max-w-5xl aspect-[16/9]">
            <Image
              key={images[idx].src}
              src={images[idx].src}
              alt={images[idx].alt}
              fill
              sizes="100vw"
              className="object-contain"
              quality={80}
              priority
            />
            <figcaption className="sr-only">{images[idx].alt}</figcaption>
          </figure>

          {/* Sağ ok (desktop) */}
          <button
            type="button"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 items-center justify-center text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={() => setIdx((x) => (x + 1) % images.length)}
            aria-label="Sonraki görsel"
            title="Sonraki"
          >
            ›
          </button>

          {/* Mobil bar */}
          <div
            className="md:hidden fixed inset-x-0 bottom-0 bg-black/70 backdrop-blur"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
          >
            <div className="max-w-xl mx-auto flex gap-2 px-4 py-3">
              <button
                type="button"
                className="flex-1 rounded-lg bg-white/15 text-white py-2"
                onClick={close}
                aria-label="Kapat"
              >
                Kapat
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg bg-white/15 text-white py-2"
                onClick={() => setIdx((x) => (x - 1 + images.length) % images.length)}
                aria-label="Önceki görsel"
              >
                Önceki
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg bg-white/15 text-white py-2"
                onClick={() => setIdx((x) => (x + 1) % images.length)}
                aria-label="Sonraki görsel"
              >
                Sonraki
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
