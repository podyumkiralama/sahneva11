"use client";

import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 'sahne',
    title: 'Sahne Kiralama',
    description: 'Profesyonel modüler sahne sistemleri, truss yapılar ve güvenlik ekipmanları. Konser, festival, fuar ve özel etkinlikler için özel tasarım sahne çözümleri.',
    image: '/img/hero-bg.webp',
    features: [
      'Modüler sahne sistemleri (1x1m, 1x2m, 2x2m)',
      'Alüminyum truss ve scaffolding sistemleri',
      'Güvenlik bariyerleri ve crowd control',
      'Profesyonel kurulum ve söküm hizmeti',
      'Yüksek kapasiteli sahne platformları'
    ],
    cta: 'Sahne Kiralama Teklifi Al'
  },
  {
    id: 'podyum',
    title: 'Podyum Kiralama',
    description: 'Modüler podyum sistemleri, özel tasarım podyumlar ve protokol masaları. Toplantı, lansman ve ödül törenleri için profesyonel çözümler.',
    image: '/img/hero-bg.webp',
    features: [
      'Modüler podyum sistemleri (30cm, 60cm, 90cm)',
      'Protokol masaları ve arkalık sistemleri',
      'Halı kaplama ve özel yüzey seçenekleri',
      'Hızlı kurulum ve taşınabilirlik',
      'Çeşitli renk ve boyut seçenekleri'
    ],
    cta: 'Podyum Kiralama Teklifi Al'
  },
  {
    id: 'led',
    title: 'LED Ekran Kiralama',
    description: 'Yüksek çözünürlüklü indoor/outdoor LED ekran çözümleri. P2, P3, P4, P5, P6 pixel pitch seçenekleri ile her türlü etkinlik için ideal.',
    image: '/img/hero-bg.webp',
    features: [
      'P2-P6 pixel pitch seçenekleri',
      'IP65 su geçirmez outdoor ekranlar',
      '4500+ nit yüksek parlaklık',
      'HD video işleme ve kontrol sistemleri',
      'Kurulum ve teknik destek'
    ],
    cta: 'LED Ekran Teklifi Al'
  },
  {
    id: 'ses',
    title: 'Ses Sistemleri Kiralama',
    description: 'Profesyonel ses sistemleri ve ses mühendisliği hizmetleri. Line-array sistemler, dijital mikserler ve kablosuz ekipmanlar.',
    image: '/img/hero-bg.webp',
    features: [
      'Line-array ses sistemleri',
      'Dijital mikser ve ses işleme',
      'Kablosuz mikrofon sistemleri',
      'Ses mühendisliği ve operatörlük',
      'Monitor ve sahne içi ses sistemleri'
    ],
    cta: 'Ses Sistemi Teklifi Al'
  },
  {
    id: 'isik',
    title: 'Işık Sistemleri Kiralama',
    description: 'DMX kontrollü profesyonel ışık sistemleri, lazer, smoke machine ve efekt ekipmanları. Her türlü etkinlik için ışık tasarımı.',
    image: '/img/hero-bg.webp',
    features: [
      'Moving head ve spot ışıklar',
      'LED wash ve par canlıklar',
      'DMX kontrol ve programlama',
      'Lazer ve özel efekt sistemleri',
      'Işık operatörlüğü hizmeti'
    ],
    cta: 'Işık Sistemi Teklifi Al'
  },
  {
    id: 'cadir',
    title: 'Çadır Kiralama',
    description: 'Açık hava etkinlikleri için profesyonel çadır kurulumları. Su geçirmez, rüzgar dayanıklı çadır sistemleri ve aksesuarları.',
    image: '/img/hero-bg.webp',
    features: [
      '3x3m, 3x6m, 6x6m çadır sistemleri',
      'Su geçirmez ve UV dayanıklı kumaş',
      'Yan duvar ve zemin sistemleri',
      'Aydınlatma ve dekorasyon',
      'Profesyonel montaj ve demontaj'
    ],
    cta: 'Çadır Kiralama Teklifi Al'
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('sahne');

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Butonları */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border-2 ${
              activeTab === service.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
        {activeService && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* İçerik */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {activeService.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Özellikler */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Hizmet Özellikleri:</h4>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Butonu */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/905453048671?text=Merhaba,%20${encodeURIComponent(activeService.title)}%20hakkında%20teklif%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>{activeService.cta}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  WhatsApp'tan hemen teklif alın. 2 saat içinde yanıt veriyoruz.
                </p>
              </div>
            </div>

            {/* Görsel */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={activeService.image}
                alt={`${activeService.title} - Sahneva profesyonel hizmeti`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        )}
      </div>

      {/* Hızlı İletişim */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">Hızlı Teklif İstediğiniz Hizmet?</h4>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Aşağıdaki butondan doğrudan WhatsApp üzerinden tüm hizmetlerimiz hakkında detaylı teklif alabilirsiniz.
        </p>
        <a
          href="https://wa.me/905453048671?text=Merhaba,%20sahne%20ve%20etkinlik%20ekipmanları%20kiralama%20hizmetleriniz%20hakkında%20detaylı%20teklif%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>WhatsApp'tan Hemen Teklif Al</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
