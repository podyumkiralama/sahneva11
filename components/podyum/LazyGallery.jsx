"use client";

import { useEffect, useRef, useState } from "react";
import CaseGallery from "@/components/CaseGallery";

export default function LazyGallery({ images, visibleCount }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full">
      {isVisible ? (
        <CaseGallery images={images} visibleCount={visibleCount} />
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-hidden="true">
          {Array.from({ length: visibleCount ?? Math.min(images?.length ?? 0, 4) }).map((_, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] animate-pulse overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-200"
            />
          ))}
        </div>
      )}
    </div>
  );
}
