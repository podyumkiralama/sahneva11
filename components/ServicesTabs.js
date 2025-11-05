"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  // ... your services array remains the same
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('sahne');

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Butonları - Mobil için kaydırılabilir */}
      <div className="relative mb-12">
        <div 
          className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide -mx-4 px-4"
          role="tablist"
          aria-label="Hizmetler"
        >
          {services.map((service) => (
            <button
              key={service.id}
              role="tab"
              aria-selected={activeTab === service.id}
              aria-controls={`panel-${service.id}`}
              id={`tab-${service.id}`}
              onClick={() => setActiveTab(service.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm 
                transition-all duration-300 border-2 whitespace-nowrap flex-shrink-0
                focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70
                ${activeTab === service.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                }
              `}
            >
              <span className="text-lg">{service.icon}</span>
              <span className="hidden sm:inline">{service.title}</span>
              <span className="sm:hidden">
                {service.title.includes('&') ? service.title.split('&')[0].trim() : service.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
        
        {/* Gradient overlay for scroll indication */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Tab Content */}
      <div 
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100"
        role="region"
        id={`panel-${activeService?.id}`}
        aria-labelledby={`tab-${activeService?.id}`}
      >
        {activeService && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* İçerik */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activeService.icon}</span>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900">
                  {activeService.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {activeService.description}
              </p>

              {/* Özellikler */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hizmet Özellikleri:
                </h4>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detaylı Bilgi Butonu */}
              <div className="pt-4">
                <Link
                  href={activeService.href}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full md:w-auto justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70"
                >
                  <span>Detaylı Bilgi ve Fiyat Teklifi Al</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* OPTIMIZED Görsel */}
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 group">
              <Image
                src={activeService.image}
                alt={`${activeService.title} - Sahneva profesyonel hizmeti`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
                quality={75}
                loading="lazy"
                decoding="async"
                placeholder="empty"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 text-lg">{activeService.title}</h4>
                  <p className="text-gray-600 text-sm">Profesyonel Çözüm</p>
                </div>
              </div>
              
              {/* Sayfa Linki Overlay */}
              <Link 
                href={activeService.href}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                title="Detaylı bilgi için tıklayın"
                aria-label={`${activeService.title} sayfasına git`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
