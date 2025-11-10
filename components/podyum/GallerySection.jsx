"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  ssr: false,
});

export default function GallerySection({ images }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="galeri-heading" className="bg-white py-20">
      <article className="mx-auto max-w-6xl px-4">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="galeri-heading" className="text-3xl font-black text-slate-900 sm:text-4xl">
            Podyum Kiralama Proje Galerisi
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Konser sahneleri, kurumsal lansmanlar ve düğün organizasyonları için gerçekleştirdiğimiz modüler podyum uygulamaları.
          </p>
        </header>
        {isVisible && <CaseGallery images={images} visibleCount={4} />}
        {!isVisible && (
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[16/9] animate-pulse rounded-xl border border-slate-200 bg-slate-100"
              />
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
