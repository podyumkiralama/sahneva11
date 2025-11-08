// components/CaseGallery.js
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CaseGallery({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const lastFocus = useRef(null);
  const yRef = useRef(0);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  const show = (i) => {
    lastFocus.current = document.activeElement;
    setIdx(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  // Lightbox açıkken body scroll kilidi + ESC/ok kontrolleri + ilk odak
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    yRef.current = window.scrollY;
    const prev = {
      pos: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${yRef.current}px`;
    body.style.overflow = "hidden";

    // İlk odak: kapat düğmesi, yoksa dialog
    const toFocus = closeBtnRef.current || dialogRef.current;
    toFocus?.focus?.();

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setIdx((x) => (x - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIdx((x) => (x + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      body.style.position = prev.pos || "";
      body.style.top = prev.top || "";
      body.style.overflow = prev.overflow || "";
      window.scrollTo(0, yRef.current);
      if (lastFocus.current?.focus) lastFocus.current.focus();
    };
  }, [open, images.length]);

  return (
    <div>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-white"
            onClick={() => show(i)}
            aria-label="Görseli büyüt"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:768px) 50vw, (max-width:1024px) 25vw, 280px"
              className="object-cover"
              loading={i < 2 ? "eager" : "lazy"}
              quality={70}
            />
          </button>
        ))}
      </div>

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
            Esc ile kapanır. Sol/sağ ok tuşları ile görseller arasında gezinebilirsiniz.
          </p>

          {/* Kapat */}
          <button
            ref={closeBtnRef}
            type="button"
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={close}
            aria-label="Kapat"
          >
            ✕
          </button>

          {/* Sol/Yan oklar (desktop) */}
          <button
            type="button"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 items-center justify-center text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={() => setIdx((x) => (x - 1 + images.length) % images.length)}
            aria-label="Önceki"
          >
            ‹
          </button>

          {/* Görsel */}
          <div className="relative w-full max-w-5xl aspect-[16/9]">
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
          </div>

          {/* Sağ ok */}
          <button
            type="button"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 items-center justify-center text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            onClick={() => setIdx((x) => (x + 1) % images.length)}
            aria-label="Sonraki"
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
              >
                Kapat
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg bg-white/15 text-white py-2"
                onClick={() => setIdx((x) => (x - 1 + images.length) % images.length)}
              >
                Önceki
              </button>
              <button
                type="button"
                className="flex-1 rounded-lg bg-white/15 text-white py-2"
                onClick={() => setIdx((x) => (x + 1) % images.length)}
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
