// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";

// Client bileşenlerini dinamik yükle
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { 
    loading: () => <SectionSkeleton label="Hizmetler yükleniyor" />,
  }
);

const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { 
    loading: () => <SectionSkeleton label="Projeler yükleniyor" />,
  }
);

export const revalidate = 3600;

function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div
      className="container py-12"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

// Hizmetler section'ını Client Component olarak sarmalayalım
function ServicesSection() {
  return (
    <section 
      className="relative py-20 bg-gradient-to-b from-white to-neutral-50/80"
      aria-labelledby="hizmetler-title"
    >
      <div className="absolute inset-0 bg-grid-neutral-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" aria-hidden="true" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 id="hizmetler-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Türkiye geneli sahne, podyum, LED ekran kiralama ve ses-ışık sistemleri kurulumu
          </p>
        </div>
        
        <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
          <ServicesTabsLazy />
        </Suspense>
      </div>
    </section>
  );
}

// Schema markup için ayrı fonksiyon
function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EventService',
    'name': 'Sahneva - Profesyonel Etkinlik Ekipmanları Kiralama',
    'description': 'Türkiye genelinde sahne kiralama, podyum kurulumu, LED ekran kiralama, ses ve ışık sistemleri kiralama hizmetleri',
    'url': 'https://sahneva.com',
    'telephone': '+905453048671',
    'areaServed': 'TR',
    'serviceType': [
      'Sahne Kiralama',
      'Podyum Kiralama', 
      'LED Ekran Kiralama',
      'Ses Sistemi Kiralama',
      'Işık Sistemi Kiralama',
      'Etkinlik Prodüksiyon'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Etkinlik Ekipmanları Kiralama',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Sahne Kiralama'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'LED Ekran Kiralama'
          }
        }
      ]
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'TR'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Structured Data */}
      <StructuredData />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* HERO SECTION */}
      <section
        className="full-bleed relative overflow-x-hidden bg-gradient-to-br from-blue-900/95 to-purple-900/90 min-h-screen flex items-center"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/hero-bg.webp"
            alt="Profesyonel sahne kurulumu, LED ekranlar, ses ve ışık ekipmanlarıyla hazırlanmış etkinlik alanı - Sahneva Türkiye geneli sahne kiralama hizmeti"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
          />
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-blue-900/40 to-purple-900/30"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 container py-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1
              id="hero-title"
              className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
            >
              Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 block mt-2">Sahne Sistemleri</span> Kiralama
            </h1>
            
            <p className="text-white/95 text-2xl md:text-3xl lg:text-4xl mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
              Türkiye genelinde <strong className="text-blue-300">sahne kiralama</strong>, <strong className="text-purple-300">podyum kurulumu</strong>, <strong className="text-blue-300">LED ekran</strong> ve <strong className="text-purple-300">ses-ışık sistemleri</strong> kiralama hizmeti
            </p>

            {/* CTA Butonları */}
            <div className="mb-16">
              <HeroCtasClient />
            </div>

            {/* Özellikler Grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20"
              aria-label="Sahneva avantajları"
            >
              {[
                { 
                  icon: "⭐", 
                  label: "4.9/5 Müşteri Puanı", 
                  desc: "500+ Mutlu Müşteri",
                  keyword: "müşteri memnuniyeti"
                },
                { 
                  icon: "⚡", 
                  label: "Aynı Gün Kurulum", 
                  desc: "Hızlı Teslimat Garantisi",
                  keyword: "hızlı kurulum"
                },
                { 
                  icon: "👷", 
                  label: "Uzman Ekip", 
                  desc: "10+ Yıl Deneyim",
                  keyword: "profesyonel ekip"
                },
              ].map(({ icon, label, desc, keyword }, i) => (
                <li key={i} className="group" aria-label={keyword}>
                  <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/25 hover:bg-white/25 transition-all duration-500 group-hover:scale-105 shadow-2xl">
                    <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                    <div className="text-white font-bold text-lg mb-1">{label}</div>
                    <div className="text-white/80 text-sm">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Güven Göstergesi */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-10 border border-white/20 max-w-4xl mx-auto shadow-2xl">
              <div className="text-5xl mb-6" aria-hidden="true">🎤</div>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Ücretsiz Profesyonel Danışmanlık
              </h2>
              <p className="text-white/90 text-xl leading-relaxed max-w-3xl mx-auto">
                Etkinliğiniz için en uygun <strong>sahne çözümleri</strong>, <strong>LED ekran seçenekleri</strong> ve <strong>ses-ışık sistemlerini</strong> ücretsiz teknik danışmanlık ile planlayalım. <strong>2 saat içinde detaylı teklif</strong> sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main id="main" className="relative">
        {/* Review Banner */}
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Gallery */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="projeler-title"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="projeler-title" className="text-4xl md:text-5xl font-black text-white mb-4">
                Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projelerimiz</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
              </p>
            </div>
            
            <Suspense 
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-neutral-800 rounded-2xl animate-pulse h-80" />
                  ))}
                </div>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Corporate Events */}
        <section className="py-20 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="kurumsal-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
                Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çözümlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Fortune 500 şirketleri, devlet kurumları ve lider markalar için profesyonel etkinlik çözümleri
              </p>
            </div>
            <CorporateEvents />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="py-20 bg-gradient-to-br from-blue-50/80 to-purple-50/60"
          aria-labelledby="neden-tercih-heading"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2
                id="neden-tercih-heading"
                className="text-4xl md:text-5xl font-black text-neutral-900 mb-6"
              >
                Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sahneva</span>'yı Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                10 yılı aşkın deneyimimiz, uzman ekibimiz ve kaliteli ekipmanlarımızla fark yaratıyoruz
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⭐",
                  title: "Yüksek Müşteri Memnuniyeti",
                  desc: "Her organizasyonda %98'in üzerinde müşteri memnuniyeti sağlıyoruz. Referanslarımız ve Google yorumlarımız bizim en büyük güvencemiz.",
                  stat: "%98 Memnuniyet",
                  keyword: "müşteri memnuniyeti"
                },
                {
                  icon: "⚡",
                  title: "Hızlı Kurulum ve Teslimat",
                  desc: "Aynı gün içinde profesyonel sahne kurulumu, LED ekran montajı ve ses-ışık sistemlerinin kurulumunu tamamlıyoruz.",
                  stat: "2-6 Saat",
                  keyword: "hızlı kurulum"
                },
                {
                  icon: "🖥️",
                  title: "Premium LED Ekran Teknolojisi",
                  desc: "P2, P3, P4, P5, P6 pixel pitch seçenekleriyle yüksek çözünürlüklü indoor ve outdoor LED ekran kiralama hizmeti.",
                  stat: "P2-P6",
                  keyword: "LED ekran kiralama"
                },
                {
                  icon: "👷",
                  title: "Uzman Teknik Ekip",
                  desc: "10+ yıl deneyimli ses, ışık, sahne ve LED ekran uzmanlarından oluşan profesyonel teknik kadromuz.",
                  stat: "15+ Uzman",
                  keyword: "teknik ekip"
                },
                {
                  icon: "💰",
                  title: "Rekabetçi Fiyat Garantisi",
                  desc: "Kaliteli hizmeti en uygun fiyat garantisiyle sunuyor, bütçenize uygun çözümler üretiyoruz.",
                  stat: "%30 Tasarruf",
                  keyword: "uygun fiyat"
                },
                {
                  icon: "🏙️",
                  title: "Türkiye Geneli Hizmet",
                  desc: "İstanbul, Ankara, İzmir başta olmak üzere Türkiye'nin 81 ilinde profesyonel sahne ve ekipman kiralama hizmeti.",
                  stat: "81 İl",
                  keyword: "Türkiye geneli"
                },
              ].map(({ icon, title, desc, stat, keyword }, i) => (
                <article
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-100 hover:border-blue-200/70 hover:scale-105"
                  aria-label={keyword}
                >
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {stat}
                  </div>
                  <div className="text-4xl mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-black text-xl mb-4 text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Sections */}
        <section className="py-20 bg-white" aria-labelledby="seo-title">
          <div className="container">
            <h2 id="seo-title" className="text-4xl md:text-5xl font-black text-center mb-16 text-neutral-900">
              Türkiye'nin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">1 Numaralı</span> Etkinlik Teknoloji Partneri
            </h2>

            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <article className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="font-black text-2xl mb-6 text-neutral-900 flex items-center gap-3">
                  <span className="bg-blue-500 text-white p-2 rounded-lg">🚀</span>
                  Uçtan Uca Teknik Hizmet ve Profesyonel Çözümler
                </h3>
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="text-lg leading-relaxed">
                    <strong>Sahneva</strong> olarak Türkiye genelinde{' '}
                    <a href="/sahne-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      sahne kiralama
                    </a>
                    ,{' '}
                    <a href="/podyum-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      podyum kurulumu
                    </a>
                    ,{' '}
                    <a href="/led-ekran-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      LED ekran kiralama
                    </a>{' '}
                    ve{' '}
                    <a href="/ses-isik-sistemleri" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      ses ışık sistemi kurulumu
                    </a>{' '}
                    hizmetlerinde komple çözümler sunuyoruz. Keşif, planlama, kurulum ve canlı yönetim aşamalarının tamamını profesyonel ekibimiz yürütüyor.
                  </p>
                  
                  <ul className="mt-6 space-y-3 text-neutral-700">
                    {[
                      "IP65 su geçirmez dış mekân LED paneller, 4500+ nit parlaklık",
                      "Profesyonel line-array ses sistemleri, dijital mikserler",
                      "Modüler podyum ve sahne platformları, truss sistemleri",
                      "DMX kontrollü ışık sistemleri ve ambiyans aydınlatma çözümleri"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="font-black text-2xl mb-6 text-neutral-900 flex items-center gap-3">
                  <span className="bg-purple-500 text-white p-2 rounded-lg">⚡</span>
                  Hızlı Kurulum, Şeffaf Fiyatlandırma ve Güvenilir Hizmet
                </h3>
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="text-lg leading-relaxed">
                    İstanbul merkezli ekibimizle <strong>Türkiye'nin 81 ilinde</strong> hizmet veriyoruz. 
                    Aynı gün kurulum, yedekli ekipman stoğu ve 7/24 teknik destek ile riskleri minimize ediyoruz. 
                    Müşterilerimize şeffaf fiyatlandırma ve detaylı teklif sunuyoruz.
                  </p>
                  
                  <div className="mt-6 p-6 bg-white rounded-xl border border-purple-200 shadow-lg">
                    <p className="font-bold text-purple-900 text-lg mb-3">Hızlı Teklif İsteği:</p>
                    <a
                      href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Sahne+kiralama+ve+LED+ekran+fiyatları+hakkında+detaylı+teklif+almak+istiyorum."
                      className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp üzerinden hemen teklif alın"
                    >
                      <span>WhatsApp'tan Hemen Teklif Al</span>
                      <span className="text-xl">→</span>
                    </a>
                    <p className="text-sm text-neutral-600 mt-3">
                      <strong>2 saat içinde</strong> detaylı teklif ve profesyonel danışmanlık
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Premium Content Block */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/50">
          <div className="container max-w-6xl">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-neutral-200">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-neutral-900">
                Büyük Ölçekli Etkinliklerde <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Neden Sahneva?</span>
              </h2>

              <div className="prose prose-lg prose-blue max-w-none">
                <p className="text-xl leading-relaxed text-neutral-700 mb-8">
                  Konser, fuar, kongre, lansman ve protokol seviyesindeki etkinliklerde yalnızca güçlü ekipman değil,{' '}
                  <strong className="text-blue-600">kusursuz operasyon yönetimi</strong> ve{' '}
                  <strong className="text-blue-600">güvenli rigging çözümleri</strong> esastır. Sahneva;{' '}
                  <a href="/sahne-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                    sahne ve podyum tasarımı
                  </a>
                  'ndan{' '}
                  <a href="/led-ekran-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                    P2-P6 LED ekran
                  </a>{' '}
                  konfigürasyonlarına,{' '}
                  <a href="/ses-isik-sistemleri" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                    ses-ışık optimizasyonu
                  </a>
                  'ndan truss ve scaffolding üst yapılara kadar tüm bileşenleri tek bir teknik omurga altında birleştirir.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                      <span className="bg-blue-500 text-white p-2 rounded-lg">🏆</span>
                      Teknik Üstünlük ve İnovasyon
                    </h3>
                    <ul className="space-y-4 text-neutral-700">
                      {[
                        "Yüksek parlaklık için optimize edilmiş LED ekran konumlandırması (P2-P6 pixel pitch)",
                        "Truss ve scaffolding sistemleriyle güvenli rigging çözümleri",
                        "Alan akustiğine göre ölçeklenen profesyonel ses sistemleri",
                        "DMX kontrollü akıllı ışıklandırma ve efekt sistemleri",
                        "Modüler sahne ve podyum sistemleriyle esnek kurulum"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                      <span className="bg-purple-500 text-white p-2 rounded-lg">🛡️</span>
                      Operasyonel Mükemmellik ve Güvenlik
                    </h3>
                    <ul className="space-y-4 text-neutral-700">
                      {[
                        "7/24 teknik destek ve profesyonel sahne yönetimi",
                        "Kapsamlı risk analizi ve yönetim planı",
                        "Şeffaf teklifleme ve kurumsal raporlama sistemi",
                        "ISO standartlarında kalite kontrol ve güvence",
                        "Yedekli ekipman stoğu ve acil durum planları",
                        "Türkiye geneli lojistik ve koordinasyon ağı"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                  <h4 className="font-black text-xl text-blue-900 mb-3">Komple Etkinlik Çözümleri</h4>
                  <p className="text-blue-800">
                    <a href="/cadir-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                      Çadır kurulumu
                    </a>
                    , zemin hazırlığı, dekoratif uygulamalar ve güç sistemleri dâhil; etkinliğinizin tüm teknik ihtiyaçlarını tek çatı altında yönetiyoruz. 
                    <strong> Türkiye'nin her yerinde aynı kalite ve profesyonellik garantisi.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="faq-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Sahne kiralama, LED ekran fiyatları ve teknik detaylar hakkında merak ettikleriniz
              </p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
    </div>
  );
}
