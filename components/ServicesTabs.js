"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'sahne',
    title: 'Sahne Kiralama',
    icon: '🎪',
    description: 'Profesyonel modüler sahne sistemleri, truss yapılar ve güvenlik ekipmanları. Konser, festival, fuar ve özel etkinlikler için özel tasarım sahne çözümleri.',
    image: '/img/hizmet-sahne.webp',
    features: [
      'Modüler sahne sistemleri (1x1m, 1x2m, 2x2m)',
      'Alüminyum truss ve scaffolding sistemleri',
      'Güvenlik bariyerleri ve crowd control',
      'Profesyonel kurulum ve söküm hizmeti',
      'Yüksek kapasiteli sahne platformları'
    ],
    href: '/sahne-kiralama'
  },
  {
    id: 'podyum',
    title: 'Podyum Kiralama',
    icon: '👑',
    description: 'Modüler podyum sistemleri, özel tasarım podyumlar ve protokol masaları. Toplantı, lansman ve ödül törenleri için profesyonel çözümler.',
    image: '/img/hizmet-podyum.webp',
    features: [
      'Modüler podyum sistemleri (30cm, 60cm, 90cm)',
      'Protokol masaları ve arkalık sistemleri',
      'Halı kaplama ve özel yüzey seçenekleri',
      'Hızlı kurulum ve taşınabilirlik',
      'Çeşitli renk ve boyut seçenekleri'
    ],
    href: '/podyum-kiralama'
  },
  {
    id: 'led',
    title: 'LED Ekran Kiralama',
    icon: '🖥️',
    description: 'Yüksek çözünürlüklü indoor/outdoor LED ekran çözümleri. P2, P3, P4, P5, P6 pixel pitch seçenekleri ile her türlü etkinlik için ideal.',
    image: '/img/galeri/led-ekran-kiralama-1.webp',
    features: [
      'P2-P6 pixel pitch seçenekleri',
      'IP65 su geçirmez outdoor ekranlar',
      '4500+ nit yüksek parlaklık',
      'HD video işleme ve kontrol sistemleri',
      'Kurulum ve teknik destek'
    ],
    href: '/led-ekran-kiralama'
  },
  {
    id: 'ses-isik',
    title: 'Ses & Işık Sistemleri',
    icon: '🎭',
    description: 'Profesyonel ses ve ışık sistemleri kiralama hizmeti. Konser, tiyatro, konferans ve özel etkinlikleriniz için komple ses ve ışık çözümleri.',
    image: '/img/ses-isik/ses-sistemi.webp',
    features: [
      'Line-array ses sistemleri ve dijital mikserler',
      'Kablosuz mikrofon ve monitor sistemleri',
      'Moving head, spot ve LED ışık sistemleri',
      'DMX kontrol ve ışık programlama',
      'Lazer, smoke machine ve özel efektler',
      'Ses ve ışık operatörlüğü hizmeti',
      'Alan akustiğine özel ses optimizasyonu'
    ],
    href: '/ses-isik-sistemleri'
  },
  {
    id: 'cadir',
    title: 'Çadır Kiralama',
    icon: '⛺',
    description: 'Açık hava etkinlikleri için profesyonel çadır kurulumları. Su geçirmez, rüzgar dayanıklı çadır sistemleri ve aksesuarları.',
    image: '/img/galeri/cadir-kiralama-1.webp',
    features: [
      '3x3m, 3x6m, 6x6m çadır sistemleri',
      'Su geçirmez ve UV dayanıklı kumaş',
      'Yan duvar ve zemin sistemleri',
      'Aydınlatma ve dekorasyon',
      'Profesyonel montaj ve demontaj'
    ],
    href: '/cadir-kiralama'
  },
  {
    id: 'masa-sandalye',
    title: 'Masa & Sandalye Kiralama',
    icon: '🪑',
    description: 'Toplantı, davet, düğün ve özel etkinlikler için profesyonel masa ve sandalye kiralama hizmeti. Şık ve konforlu çözümler.',
    image: '/img/hizmet-masa.webp',
    features: [
      'Toplantı masaları (yuvarlak, dikdörtgen)',
      'Konforlu sandalye ve oturma grupları',
      'Süslü düğün sandalyeleri',
      'Masa örtüsü ve dekorasyon',
      'Teslimat, kurulum ve toplama hizmeti'
    ],
    href: '/masa-sandalye-kiralama'
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('sahne');

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="w-full">
      <div 
        className="relative mb-12" 
        role="tablist" 
        aria-label="Hizmet seçenekleri"
      >
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide -mx-4 px-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm 
                transition-all duration-300 border-2 whitespace-nowrap flex-shrink-0
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${activeTab === service.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                }
              `}
              role="tab"
              aria-selected={activeTab === service.id}
              aria-controls={`tabpanel-${service.id}`}
              id={`tab-${service.id}`}
            >
              <span className="text-lg" aria-hidden="true">{service.icon}</span>
              <span className="hidden sm:inline">{service.title}</span>
              <span className="sm:hidden">
                {service.title.includes('&') ? service.title.split('&')[0].trim() : service.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden="true" />
      </div>

      <div 
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {activeService && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" aria-hidden="true">{activeService.icon}</span>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900">
                  {activeService.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {activeService.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={
