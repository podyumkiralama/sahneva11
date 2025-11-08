"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";

const COVER_SIZES =
  "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw";

export default function CaseGallery({ images = [] }) {
  // images: [{ src, alt, category }]
  const [filter, setFilter] = useState("Tümü");
  const [lightSrc, setLightSrc] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(["Tümü"]);
    for (const it of images) if (it?.category) set.add(it.category);
    return Array.from(set);
  }, [images]);

  const list = useMemo(() => {
    if (filter === "Tümü") return images;
    return images.filter((i) => i.category === filter);
  }, [images, filter]);

  // ESC ile kapanış
  useEffect(() => {
    if (!lightSrc) return;
    const onKey = (e) => e.key === "Escape" && setLightSrc(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightSrc]);

  const open = useCallback((src) => setLightSrc(src), []);
  const close = useCallback(() => setLightSrc(null), []);

  return (
    <div className="space-y-6">
      {/* Filtreler */}
      {categories.length > 1 && (
        <div
          className="flex flex-wrap gap-2 justify-center"
          role="tablist"
          aria-label="Galeri kategorileri"
        >
          {categories.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${active
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <ul
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label="Proje görselleri"
      >
        {list.map((img, i) => (
          <li key={img.src || i} role="listitem">
            <button
              onClick={() => open(img.src)}
              className="group relative w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={`${img.alt || "Görsel"} — büyüt`}
            >
              <Image
                src={img.src}
                alt={img.alt || ""}
                width={1000}
                height={750}
                sizes={COVER_SIZES}
                className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {img.category && (
                <span className="absolute left-2 top-2 rounded-full bg-black/60 text-white text-xs font-semibold px-2 py-1">
                  {img.category}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox (inline, CSP dostu) */}
      {lightSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={close}
              aria-label="Kapat"
              className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold shadow hover:bg-white"
            >
              Kapat ✕
            </button>
            <Image
              src={lightSrc}
              alt=""
              width={1920}
              height={1280}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}