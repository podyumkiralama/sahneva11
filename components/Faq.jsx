// components/Faq.jsx
"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../lib/faqData";
import Script from "next/script";

function FaqRow({ question, answer, slug }) {
  const [open, setOpen] = useState(false);
  const summaryId = `${slug}-summary`;
  const panelId = `${slug}-panel`;

  return (
    <details
      className="faqCard p-4 open:shadow-sm border border-gray-200 rounded-lg bg-white mb-4"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary
        id={summaryId}
        aria-controls={panelId}
        aria-expanded={open}
        className="
          cursor-pointer rounded-md
          px-4 py-4 min-h-[44px] /* ✅ WCAG uyumlu dokunma hedefi */
          focus-visible:outline-2 focus-visible:outline-[#6d28d9] focus-visible:outline-offset-2
          hover:bg-gray-50 transition-colors duration-200
          flex items-center justify-between
          text-lg font-semibold text-gray-900 /* ✅ Yeterli kontrast */
        "
        itemProp="name"
      >
        <span className="pr-4">
          {question}
        </span>
        <svg
          className="ml-2 h-6 w-6 shrink-0 text-gray-700 transition-transform duration-300 data-[open=true]:rotate-90"
          data-open={open}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5l8 7-8 7" />
        </svg>
      </summary>

      <div 
        id={panelId} 
        className="faqAnim mt-3 text-gray-700 px-4 pb-4"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div itemProp="text" className="leading-relaxed text-base">
          <p>{answer}</p>
        </div>
      </div>
    </details>
  );
}

// ✅ FAQ Schema.org verisi
const generateFaqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

export default function Faq() {
  const faqSchema = generateFaqSchema(FAQ_ITEMS);

  return (
    <section 
      className="container py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" 
      aria-labelledby="faq-heading"
    >
      {/* ✅ FAQ Schema.org JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="text-center mb-12">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Sahne, podyum, LED ekran kiralama ve kurulum hizmetlerimiz hakkında 
          en çok merak edilen sorular ve cevapları
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {FAQ_ITEMS.map((item) => (
          <FaqRow key={item.slug} {...item} />
        ))}
      </div>

      {/* ✅ DÜZELTİLDİ: Erişilebilir CTA Bölümü */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            🌟 Cevabını Bulamadığınız Soru mu Var?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Uzman ekibimiz size en doğru çözümü sunmaktan mutluluk duyacaktır. 
            7/24 destek hattımızla iletişime geçebilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/sss"
              className="inline-flex items-center justify-center rounded-lg bg-[#6d28d9] px-8 py-4 font-semibold text-white shadow-lg
                         transition-all hover:bg-[#5b21b6] hover:shadow-xl 
                         focus-visible:ring-4 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 
                         focus-visible:outline-none
                         min-h-[44px] min-w-[44px] text-lg" /* ✅ WCAG dokunma hedefi */
              aria-label="Tüm sık sorulan soruları görüntüle - Sahneva SSS sayfası"
              title="Sahneva hizmetleri hakkında tüm soru ve cevapları görüntüle"
              style={{ lineHeight: '1.2' }}
            >
              📋 Tüm Soruları Gör
            </a>
            
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#6d28d9] px-8 py-4 
                         font-semibold text-[#6d28d9] bg-white
                         transition-all hover:bg-[#6d28d9] hover:text-white hover:shadow-lg
                         focus-visible:ring-4 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 
                         focus-visible:outline-none
                         min-h-[44px] min-w-[44px] text-lg" /* ✅ WCAG dokunma hedefi */
              aria-label="Canlı destek ekibimizle iletişime geçin - Sahneva iletişim"
              title="Sahneva canlı destek ve iletişim sayfası"
              style={{ lineHeight: '1.2' }}
            >
              💬 Canlı Destek
            </a>
          </div>
        </div>
      </div>

      {/* ✅ DÜZELTİLDİ: Erişilebilir İletişim Bilgileri */}
      <div className="mt-8 text-center">
        <nav aria-label="Hızlı iletişim seçenekleri">
          <ul className="inline-flex flex-wrap gap-4 justify-center items-center">
            <li>
              <a 
                href="tel:+905453048671"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200
                           transition-colors min-h-[44px] text-gray-900 font-medium text-sm
                           focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:outline-none"
                aria-label="Telefon ile iletişim - +90 545 304 86 71"
                title="Sahneva telefon iletişim"
              >
                <span aria-hidden="true">📞</span>
                +90 545 304 8671
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/905453048671"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-green-50 hover:bg-green-100
                           transition-colors min-h-[44px] text-gray-900 font-medium text-sm
                           focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:outline-none"
                aria-label="WhatsApp üzerinden iletişim"
                title="Sahneva WhatsApp iletişim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp
              </a>
            </li>
            <li>
              <a 
                href="mailto:info@sahneva.com"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-50 hover:bg-blue-100
                           transition-colors min-h-[44px] text-gray-900 font-medium text-sm
                           focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:outline-none"
                aria-label="E-posta gönder - info@sahneva.com"
                title="Sahneva e-posta iletişim"
              >
                <span aria-hidden="true">✉️</span>
                E-posta
              </a>
            </li>
          </ul>
        </nav>
        
        <p className="text-xs text-gray-600 mt-4 max-w-md mx-auto">
          <strong>Hızlı Yanıt:</strong> Müşteri temsilcilerimiz ortalama 5 dakika içinde dönüş yapmaktadır
        </p>
      </div>
    </section>
  );
}
