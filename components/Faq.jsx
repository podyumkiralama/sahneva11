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
      className="group bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl p-4 mb-3 transition-all duration-300 hover:shadow-md hover:border-blue-200/80"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary
        id={summaryId}
        aria-controls={panelId}
        aria-expanded={open}
        className="cursor-pointer flex items-center justify-between font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 min-h-[50px]"
        itemProp="name"
      >
        <span className="pr-6 text-base leading-relaxed">
          {question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100 ${open ? 'bg-blue-100 rotate-90' : ''}`}>
          <svg
            className="w-3 h-3 text-blue-600 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M8 5l8 7-8 7" />
          </svg>
        </div>
      </summary>

      <div 
        id={panelId} 
        className="mt-3 text-gray-700 border-t border-gray-100/60 pt-3"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div itemProp="text" className="leading-relaxed text-sm text-gray-600">
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
      className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* ✅ Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* ❌ BAŞLIK KALDIRILDI - Anasayfadan gelecek */}

        {/* ✅ Daha Dar Aralıklı FAQ Grid */}
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-3">
            {FAQ_ITEMS.map((item) => (
              <FaqRow key={item.slug} {...item} />
            ))}
          </div>
        </div>

        {/* ✅ Daha Kompakt CTA Bölümü */}
        <div className="mt-12 text-center">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                🌟 Cevabını Bulamadığınız Soru mu Var?
              </h3>
              <p className="text-blue-100 text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                Uzman ekibimiz size en doğru çözümü sunmaktan mutluluk duyacaktır.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="/sss"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 min-h-[50px] text-sm"
                  aria-label="Tüm sık sorulan soruları görüntüle - Sahneva SSS sayfası"
                  title="Sahneva hizmetleri hakkında tüm soru ve cevapları görüntüle"
                >
                  <span className="text-lg">📋</span>
                  <span>Tüm Soruları Gör</span>
                </a>
                
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 min-h-[50px] text-sm"
                  aria-label="Canlı destek ekibimizle iletişime geçin - Sahneva iletişim"
                  title="Sahneva canlı destek ve iletişim sayfası"
                >
                  <span className="text-lg">💬</span>
                  <span>Canlı Destek</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Çok Daha Dar İletişim Bilgileri */}
        <div className="mt-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/60 p-4 max-w-2xl mx-auto">
            <h4 className="text-base font-bold text-gray-900 mb-3">
              Hızlı İletişim Kanalları
            </h4>
            
            <nav aria-label="Hızlı iletişim seçenekleri">
              <ul className="flex flex-wrap gap-2 justify-center items-center">
                <li>
                  <a 
                    href="tel:+905453048671"
                    className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-h-[44px] text-xs"
                    aria-label="Telefon ile iletişim - +90 545 304 86 71"
                    title="Sahneva telefon iletişim"
                  >
                    <span className="text-base" aria-hidden="true">📞</span>
                    <div className="text-left">
                      <div className="text-xs font-medium">Telefon</div>
                      <div className="text-[10px] opacity-75">+90 545 304 8671</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/905453048671"
                    className="inline-flex items-center gap-2 bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-h-[44px] text-xs"
                    aria-label="WhatsApp üzerinden iletişim"
                    title="Sahneva WhatsApp iletişim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-base" aria-hidden="true">💬</span>
                    <div className="text-left">
                      <div className="text-xs font-medium">WhatsApp</div>
                      <div className="text-[10px] opacity-75">Hızlı Mesaj</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@sahneva.com"
                    className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-h-[44px] text-xs"
                    aria-label="E-posta gönder - info@sahneva.com"
                    title="Sahneva e-posta iletişim"
                  >
                    <span className="text-base" aria-hidden="true">✉️</span>
                    <div className="text-left">
                      <div className="text-xs font-medium">E-posta</div>
                      <div className="text-[10px] opacity-75">info@sahneva.com</div>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* ✅ Çok Daha Dar Boşluklu Durum Bilgisi */}
            <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <span>7/24 Destek</span>
              </div>
              <div className="w-px h-2 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <span>5 Dakikada Yanıt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FAQ Schema.org JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </section>
  );
}
