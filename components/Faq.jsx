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
      className="group bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 mb-4 transition-all duration-300 hover:shadow-lg hover:border-blue-200/80"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary
        id={summaryId}
        aria-controls={panelId}
        aria-expanded={open}
        className="cursor-pointer flex items-center justify-between text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 min-h-[60px]"
        itemProp="name"
      >
        <span className="pr-8 text-lg leading-relaxed">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100 ${open ? 'bg-blue-100 rotate-90' : ''}`}>
          <svg
            className="w-4 h-4 text-blue-600 transition-transform duration-300"
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
        className="mt-4 text-gray-700 border-t border-gray-100/60 pt-4"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div itemProp="text" className="leading-relaxed text-base text-gray-600">
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
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* ✅ Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* ❌ BAŞLIK KALDIRILDI - Anasayfadan gelecek */}

        {/* ✅ Premium FAQ Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {FAQ_ITEMS.map((item) => (
              <FaqRow key={item.slug} {...item} />
            ))}
          </div>
        </div>

        {/* ✅ Premium CTA Bölümü */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🌟 Cevabını Bulamadığınız Soru mu Var?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Uzman ekibimiz size en doğru çözümü sunmaktan mutluluk duyacaktır. 
                7/24 destek hattımızla iletişime geçebilirsiniz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/sss"
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 min-h-[60px]"
                  aria-label="Tüm sık sorulan soruları görüntüle - Sahneva SSS sayfası"
                  title="Sahneva hizmetleri hakkında tüm soru ve cevapları görüntüle"
                >
                  <span className="text-xl">📋</span>
                  <span>Tüm Soruları Gör</span>
                </a>
                
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-green-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 min-h-[60px]"
                  aria-label="Canlı destek ekibimizle iletişime geçin - Sahneva iletişim"
                  title="Sahneva canlı destek ve iletişim sayfası"
                >
                  <span className="text-xl">💬</span>
                  <span>Canlı Destek</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Premium İletişim Bilgileri */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Hızlı İletişim Kanalları
            </h4>
            
            <nav aria-label="Hızlı iletişim seçenekleri">
              <ul className="flex flex-wrap gap-4 justify-center items-center">
                <li>
                  <a 
                    href="tel:+905453048671"
                    className="inline-flex items-center gap-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[60px]"
                    aria-label="Telefon ile iletişim - +90 545 304 86 71"
                    title="Sahneva telefon iletişim"
                  >
                    <span className="text-xl" aria-hidden="true">📞</span>
                    <div className="text-left">
                      <div className="text-sm font-medium">Telefon</div>
                      <div className="text-xs opacity-75">+90 545 304 8671</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/905453048671"
                    className="inline-flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[60px]"
                    aria-label="WhatsApp üzerinden iletişim"
                    title="Sahneva WhatsApp iletişim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl" aria-hidden="true">💬</span>
                    <div className="text-left">
                      <div className="text-sm font-medium">WhatsApp</div>
                      <div className="text-xs opacity-75">Hızlı Mesaj</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@sahneva.com"
                    className="inline-flex items-center gap-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[60px]"
                    aria-label="E-posta gönder - info@sahneva.com"
                    title="Sahneva e-posta iletişim"
                  >
                    <span className="text-xl" aria-hidden="true">✉️</span>
                    <div className="text-left">
                      <div className="text-sm font-medium">E-posta</div>
                      <div className="text-xs opacity-75">info@sahneva.com</div>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>7/24 Müşteri Desteği</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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
