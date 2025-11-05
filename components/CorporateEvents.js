// components/CorporateEvents.jsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 'konferans',
    title: 'Konferans & Toplantılar',
    description: 'Kurumsal toplantılar, seminerler ve konferanslar için profesyonel sahne, podyum ve teknik ekipman çözümleri.',
    image: '/img/kurumsal/konferans.webp',
    features: ['Protokol podyumu', 'Ses sistemi', 'Projeksiyon', 'Işıklandırma'],
    stats: '250+ Kurumsal Etkinlik',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'lansman',
    title: 'Ürün Lansmanları',
    description: 'Yeni ürün ve hizmet lansmanları için etkileyici sahne tasarımları ve yüksek çözünürlüklü LED ekran çözümleri.',
    image: '/img/kurumsal/lansman.webp',
    features: ['LED Ekran', 'Özel sahne tasarımı', 'Ses sistemi', 'Işık şovu'],
    stats: '150+ Lansman',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'fuar',
    title: 'Fuar & Sergiler',
    description: 'Fuarlar ve sergiler için modüler sahne sistemleri, podyumlar ve etkileşimli LED ekran kurulumları.',
    image: '/img/kurumsal/fuar.webp',
    features: ['Modüler sahne', 'LED ekran', 'Ses sistemi', 'Aydınlatma'],
    stats: '300+ Fuar Standı',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'odul',
    title: 'Ödül Törenleri',
    description: 'Ödül törenleri ve galalar için şık podyum tasarımları, özel ışıklandırma ve profesyonel ses sistemleri.',
    image: '/img/kurumsal/odul-toreni.webp',
    features: ['Özel podyum', 'Spot ışıklar', 'Ses sistemi', 'Kırmızı halı'],
    stats: '100+ Ödül Töreni',
    color: 'from-orange-500 to-red-500'
  }
];

export default function CorporateEvents() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (eventId) => {
    setImageErrors(prev => ({
      ...prev,
      [eventId]: true
    }));
  };

  const getImageSrc = (event, image) => {
    if (imageErrors[event.id]) {
      return '/img/placeholder-service.webp';
    }
    return image;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <article
            key={event.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden"
            role="article"
            aria-labelledby={`event-${event.id}`}
          >
            {/* Görsel */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={getImageSrc(event, event.image)}
                alt={`${event.title} - Sahneva kurumsal çözümü`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                quality={75}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                placeholder="empty"
                onError={() => handleImageError(event.id)}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              
              {/* İstatistik */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  {event.stats}
                </span>
              </div>
              
              {/* Başlık */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 
                  id={`event-${event.id}`}
                  className="text-white font-black text-xl mb-2"
                >
                  {event.title}
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-white to-white/70 rounded-full" aria-hidden="true" />
              </div>
            </div>

            {/* İçerik */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Özellikler */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hizmet Özellikleri:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden="true" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Butonu */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                  Detaylı bilgi için
                </span>
                <Link
                  href="/iletisim"
                  className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70"
                  aria-label={`${event.title} için teklif al`}
                >
                  <span>Teklif Al</span>
                  <svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Kurumsal Çözümler Özet */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Kurumsal Etkinliklerde <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Neden Sahneva?</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "10+ yıl deneyimli profesyonel ekip",
                "7/24 teknik destek ve sahne yönetimi",
                "ISO standartlarında kalite güvencesi",
                "Türkiye geneli lojistik ve kurulum",
                "Yedekli ekipman stoğu ve acil durum planı"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl mb-2" aria-hidden="true">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Hızlı Teklif</h4>
              <p className="text-sm text-gray-600 mb-4">
                2 saat içinde detaylı teklif ve profesyonel danışmanlık
              </p>
              <Link
                href="https://wa.me/905453048671?text=Merhaba%2C+kurumsal+etkinli%C4%9Fim+i%C3%A7in+profesyonel+%C3%A7%C3%B6z%C3%BCmlere+ihtiyac%C4%B1m+var.+Detayl%C4%B1+teklif+almak+istiyorum.&utm_source=corporate&utm_medium=component&utm_campaign=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70"
                aria-label="WhatsApp üzerinden kurumsal teklif iste"
              >
                <span className="text-lg" aria-hidden="true">💬</span>
                <span>WhatsApp'tan Yaz</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
