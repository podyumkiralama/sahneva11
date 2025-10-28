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
      className="faqCard p-4 open:shadow-sm border border-gray-200 rounded-lg bg-white"
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
          faqSummary cursor-pointer rounded-md
          px-4 py-4 min-h-14
          focus-visible:outline-2 focus-visible:outline-[#6d28d9] focus-visible:outline-offset-2
          hover:bg-gray-50 transition-colors duration-200
          flex items-center justify-between
        "
        itemProp="name"
      >
        <span className="font-semibold text-neutral-900 text-lg pr-4">
          {question}
        </span>
        <svg
          className="ml-2 h-6 w-6 shrink-0 text-neutral-600 transition-transform duration-300 data-[open=true]:rotate-90"
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
        className="faqAnim mt-3 text-neutral-700 px-4 pb-3"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div itemProp="text" className="leading-relaxed">
          <p className="text-base">{answer}</p>
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
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sahne, podyum, LED ekran kiralama ve kurulum hizmetlerimiz hakkında 
          en çok merak edilen sorular ve cevapları
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {FAQ_ITEMS.map((item) => (
          <FaqRow key={item.slug} {...item} />
        ))}
      </div>

      {/* ✅ İYİLEŞTİRİLMİŞ: CTA Bölümü */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            🌟 Cevabını Bulamadığınız Soru mu Var?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Uzman ekibimiz size en doğru çözümü sunmaktan mutluluk duyacaktır. 
            7/24 destek hattımızla iletişime geçebilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sss"
              className="inline-flex items-center justify-center rounded-lg bg-[#6d28d9] px-8 py-4 font-semibold text-white shadow-lg
                         transition-all hover:bg-[#5b21b6] hover:shadow-xl transform hover:-translate-y-1
                         focus-visible:ring-4 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 
                         focus-visible:outline-none min-h-[56px] text-lg"
              aria-label="Tüm sık sorulan soruları görüntüle - Sahneva SSS sayfası"
              title="Sahneva hizmetleri hakkında tüm soru ve cevapları görüntüle"
            >
              📋 Tüm Soruları Gör
            </a>
            
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#6d28d9] px-8 py-4 font-semibold text-[#6d28d9] 
                         transition-all hover:bg-[#6d28d9] hover:text-white hover:shadow-lg transform hover:-translate-y-1
                         focus-visible:ring-4 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 
                         focus-visible:outline-none min-h-[56px] text-lg"
              aria-label="Canlı destek ekibimizle iletişime geçin - Sahneva iletişim"
              title="Sahneva canlı destek ve iletişim sayfası"
            >
              💬 Canlı Destek
            </a>
          </div>
        </div>
      </div>

      {/* ✅ YENİ: Hızlı İletişim Bilgileri */}
      <div className="mt-8 text-center">
        <div className="inline-flex flex-wrap gap-6 justify-center items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-600">📞</span>
            <a 
              href="tel:+905453048671" 
              className="hover:text-[#6d28d9] hover:underline font-medium"
              title="Sahneva telefon iletişim"
            >
              +90 545 304 8671
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">💬</span>
            <a 
              href="https://wa.me/905453048671" 
              className="hover:text-[#6d28d9] hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
              title="Sahneva WhatsApp iletişim"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✉️</span>
            <a 
              href="mailto:info@sahneva.com" 
              className="hover:text-[#6d28d9] hover:underline font-medium"
              title="Sahneva e-posta iletişim"
            >
              info@sahneva.com
            </a>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto">
          <strong>Hızlı Yanıt:</strong> Müşteri temsilcilerimiz ortalama 5 dakika içinde dönüş yapmaktadır
        </p>
      </div>
    </section>
  );
}
