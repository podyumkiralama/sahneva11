// components/ReviewBanner.jsx
"use client";

import { useEffect, useState, useCallback } from "react";

const REVIEW_URL = "https://g.page/r/CZhkMzkNOdgnEBI/review";
const LS_KEY = "rvb.dismissed.v2"; // ✅ Yeni versiyon key

export default function ReviewBanner({
  mode = "sticky",
  className = "",
  title = "Sahneva Organizasyon'u Google'da Değerlendirin",
  subtitle = "Müşteri memnuniyeti bizim için çok önemli. Deneyiminizi paylaşır mısınız?",
  ctaLabel = "Yorum Yap",
}) {
  const [hidden, setHidden] = useState(true);
  const [mounted, setMounted] = useState(false);

  // ✅ İYİLEŞTİRİLDİ: useEffect optimizasyonu
  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem(LS_KEY) === "1";
    setHidden(dismissed);
  }, []);

  const dismiss = useCallback(() => {
    try { 
      localStorage.setItem(LS_KEY, "1"); 
    } catch (e) {
      console.warn('LocalStorage erişilemiyor:', e);
    }
    setHidden(true);
  }, []);

  // ✅ İYİLEŞTİRİLDİ: SSR uyumluluğu
  if (!mounted || hidden) return null;

  // ✅ İYİLEŞTİRİLDİ: useCallback ile optimize edilmiş Content component'i
  const Content = useCallback(() => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div
        aria-hidden="true"
        role="presentation"
        className="flex items-center justify-center rounded-full bg-yellow-400/20 text-yellow-600 w-12 h-12 text-xl shrink-0"
        title="5 Yıldızlı Değerlendirme"
      >
        ⭐
      </div>

      <div className="min-w-0 flex-1 text-center sm:text-left">
        <p 
          className="text-sm sm:text-base font-bold text-gray-900" 
          id="review-title"
          itemProp="name"
        >
          {title}
        </p>
        <p 
          className="text-xs sm:text-sm text-gray-700 mt-1" 
          id="review-subtitle"
          itemProp="description"
        >
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {/* ✅ İYİLEŞTİRİLDİ: Google Review Link SEO optimizasyonu */}
        <a
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer nofollow" // ✅ nofollow eklendi
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white text-sm font-semibold px-5 py-3 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309] focus-visible:ring-offset-2 min-h-[44px] min-w-[120px]"
          aria-label="Google Maps'te Sahneva için yorum yazın - Yeni sekmede açılır"
          title="Sahneva Google Yorumları - Müşteri deneyiminizi paylaşın"
          itemProp="url"
        >
          <span aria-hidden="true">📝</span>
          {ctaLabel}
        </a>

        {/* ✅ İYİLEŞTİRİLDİ: Erişilebilir kapat butonu */}
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex items-center justify-center rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Değerlendirme bildirimini kapat"
          title="Bildirimi kapat"
        >
          <span aria-hidden="true" className="text-lg font-bold">×</span>
        </button>
      </div>
    </div>
  ), [title, subtitle, ctaLabel, dismiss]); // ✅ Bağımlılıklar eklendi

  // ✅ İYİLEŞTİRİLDİ: Schema.org markup için wrapper
  const BannerWrapper = ({ children, ...props }) => (
    <div
      {...props}
      itemScope
      itemType="https://schema.org/Review"
      itemProp="review"
    >
      {children}
    </div>
  );

  if (mode === "inline") {
    return (
      <BannerWrapper
        className={`container my-6 rounded-2xl border border-yellow-200 bg-yellow-50 shadow-sm p-4 sm:p-6 ${className}`}
        role="region"
        aria-labelledby="review-title"
        aria-describedby="review-subtitle"
      >
        <Content />
      </BannerWrapper>
    );
  }

  return (
    <BannerWrapper
      role="region"
      aria-live="polite"
      aria-labelledby="review-title"
      aria-describedby="review-subtitle"
      className={`fixed bottom-4 left-4 right-4 z-[60] sm:left-6 sm:right-6 ${className}`}
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-yellow-200 bg-yellow-50 shadow-xl p-4 sm:p-5 backdrop-blur-sm bg-yellow-50/95">
        <Content />
        
        {/* ✅ YENİ: Ek bilgi */}
        <div className="mt-3 pt-3 border-t border-yellow-200/50">
          <p className="text-xs text-gray-600 text-center">
            <strong>4.9/5 ⭐</strong> ortalama puan • <strong>250+</strong> müşteri yorumu
          </p>
        </div>
      </div>
    </BannerWrapper>
  );
}
