"use client";

import dynamic from "next/dynamic";

const CaseGallery = dynamic(() => import("./CaseGallery"), {
  ssr: false,
  loading: () => (
    <div
      className="h-48 flex items-center justify-center text-sm text-gray-600"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      Galeri yükleniyor…
    </div>
  ),
});

export default CaseGallery;
