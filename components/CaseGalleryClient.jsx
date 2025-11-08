"use client";

import { useState } from "react";
import Image from "next/image";

const COVER_SIZES =
  "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw";

export default function CaseGalleryClient({ images = [] }) {
  const [light, setLight] = useState(null);
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            className="relative rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setLight(src)}
            aria-label={`Görseli büyüt (${i + 1}/${images.length})`}
          >
            <Image
              src={src}
              alt=""
              width={800}
              height={600}
              sizes={COVER_SIZES}
              className="object-cover aspect-[4/3]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* basit lightbox */}
      {light && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLight(null)}
        >
          <div className="max-w-5xl w-full">
            <Image
              src={light}
              alt=""
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}