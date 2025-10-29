// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";

// Client bileşenlerini dinamik yükle - ssr: false kaldırıldı
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

const FaqLazy = dynamic(
  () => import("../../components/Faq"),
  { 
    loading: () => <SectionSkeleton label="SSS yükleniyor" />,
  }
);

const CorporateEventsLazy = dynamic(
  () => import("../../components/CorporateEvents"),
  { 
    loading: () => <SectionSkeleton label="Kurumsal etkinlikler yükleniyor" />,
  }
);

export const revalidate = 3600;

// Basitleştirilmiş skeleton component
function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div
      className="container py-12"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-6 w-48 rounded bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <div className="h-32 w-full rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

// Hizmetler section'ını Client Component olarak sarmalayalım
function ServicesSection() {
  return (
    <section 
      className="relative py-16 bg-gradient-to-b from-white to-neutral-50/80"
      aria-labelledby="hizmetler-title"
    >
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 id="hizmetler-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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

// Optimize edilmiş Schema markup
function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EventService',
    'name': 'Sahneva - Profesyonel Etkinlik Ekipmanları Kiralama',
    'description': 'Türkiye genelinde sahne kiralama, podyum kurulumu, LED ekran kiralama, ses ve ışık sistemleri kiralama hizmetleri',
    'url': 'https://sahneva.com',
    'telephone': '+905453048671',
    'areaServed': 'TR',
    'serviceType': 'Etkinlik Ekipmanları Kiralama',
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

// Hero görselini optimize et
const optimizedHeroBg = {
  src: "/img/hero-bg.webp",
  blurDataURL: "data:image/webp;base64,UklGRkoCAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAAQUxQSAIAAAABgERlCxigAQAAABUAFACAlAYA1gEAAQAATwgICACdfwDqfwFmAFZQOCBgAgAAsBABARABMhAN4uNBPWkSkeT/3/8HMMAEExhggAEGGGCAASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgNMYIAJDDCBASYwwAQGmMAAExhgAgN",
  width: 1920,
  height: 1080
};

// Critical CSS için inline stil (performans için)
const criticalStyles = `
  .critical-bg { background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); }
  .critical-text { color: #ffffff; }
  @media (max-width: 768px) {
    .critical-hero { padding: 2rem 0; min-height: 80vh; }
  }
`;

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Critical CSS */}
      <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
      
      {/* Structured Data */}
      <StructuredData />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* HERO SECTION - Optimize edilmiş */}
      <section
        className="full-bleed relative overflow-x-hidden critical-bg min-h-[80vh] flex items-center critical-hero"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Background Image - Optimize edilmiş */}
        <div className="absolute inset-0">
          <Image
            src={optimizedHeroBg.src}
            alt="Profesyonel sahne kurulumu, LED ekranlar, ses ve ışık ekipmanlarıyla hazırlanmış etkinlik alanı - Sahneva Türkiye geneli sahne kiralama hizmeti"
            fill
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={optimizedHeroBg.blurDataURL}
            fetchPriority="high"
          />
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-blue-900/40 to-purple-900/30"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 container py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              id="hero-title"
              className="critical-text text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight"
            >
              Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 block mt-2">Sahne Sistemleri</span> Kiralama
            </h1>
            
            <p className="critical-text text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed font-medium opacity-95">
              Türkiye genelinde <strong className="text-blue-300">sahne kiralama</strong>, <strong className="text-purple-300">podyum kurulumu</strong>, <strong className="text-blue-300">LED ekran</strong> ve <strong className="text-purple-300">ses-ışık sistemleri</strong> kiralama hizmeti
            </p>

            {/* CTA Butonları */}
            <div className="mb-12">
              <HeroCtasClient />
            </div>

            {/* Özellikler Grid - Basitleştirilmiş */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
              aria-label="Sahneva avantajları"
            >
              {[
                { 
                  icon: "⭐", 
                  label: "4.9/5 Puan", 
                  keyword: "müşteri memnuniyeti"
                },
                { 
                  icon: "⚡", 
                  label: "Aynı Gün", 
                  keyword: "hızlı kurulum"
                },
                { 
                  icon: "👷", 
                  label: "Uzman Ekip", 
                  keyword: "profesyonel ekip"
                },
              ].map(({ icon, label, keyword }, i) => (
                <li key={i} className="group" aria-label={keyword}>
                  <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/25 hover:bg-white/25 transition-all duration-300">
                    <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
                    <div className="text-white font-bold text-sm">{label}</div>
                  </div>
                </li>
              ))}
            </ul>
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
          className="py-16 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="projeler-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="projeler-title" className="text-3xl md:text-4xl font-black text-white mb-4">
                Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projelerimiz</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
              </p>
            </div>
            
            <Suspense 
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-neutral-800 rounded-xl animate-pulse h-64" />
                  ))}
                </div>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Corporate Events */}
        <section className="py-16 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="kurumsal-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çözümlerimiz</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Fortune 500 şirketleri, devlet kurumları ve lider markalar için profesyonel etkinlik çözümleri
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton label="Kurumsal etkinlikler yükleniyor" />}>
              <CorporateEventsLazy />
            </Suspense>
          </div>
        </section>

        {/* Why Choose Us Section - Optimize edilmiş */}
        <section
          className="py-16 bg-gradient-to-br from-blue-50/80 to-purple-50/60"
          aria-labelledby="neden-tercih-heading"
        >
          <div className="container">
            <div className="text-center mb-12">
              <h2
                id="neden-tercih-heading"
                className="text-3xl md:text-4xl font-black text-neutral-900 mb-4"
              >
                Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sahneva</span>'yı Tercih Etmelisiniz?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⭐",
                  title: "Yüksek Müşteri Memnuniyeti",
                  desc: "Her organizasyonda %98'in üzerinde müşteri memnuniyeti sağlıyoruz.",
                  stat: "%98",
                  keyword: "müşteri memnuniyeti"
                },
                {
                  icon: "⚡",
                  title: "Hızlı Kurulum",
                  desc: "Aynı gün içinde profesyonel sahne kurulumu ve sistem kurulumu.",
                  stat: "2-6 Saat",
                  keyword: "hızlı kurulum"
                },
                {
                  icon: "🖥️",
                  title: "Premium LED Ekran",
                  desc: "P2, P3, P4, P5, P6 pixel pitch seçenekleriyle yüksek çözünürlük.",
                  stat: "P2-P6",
                  keyword: "LED ekran kiralama"
                },
                {
                  icon: "👷",
                  title: "Uzman Teknik Ekip",
                  desc: "10+ yıl deneyimli ses, ışık, sahne ve LED ekran uzmanları.",
                  stat: "15+ Uzman",
                  keyword: "teknik ekip"
                },
                {
                  icon: "💰",
                  title: "Rekabetçi Fiyat",
                  desc: "Kaliteli hizmeti en uygun fiyat garantisiyle sunuyoruz.",
                  stat: "%30 Tasarruf",
                  keyword: "uygun fiyat"
                },
                {
                  icon: "🏙️",
                  title: "Türkiye Geneli",
                  desc: "Türkiye'nin 81 ilinde profesyonel ekipman kiralama hizmeti.",
                  stat: "81 İl",
                  keyword: "Türkiye geneli"
                },
              ].map(({ icon, title, desc, stat, keyword }, i) => (
                <article
                  key={i}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-neutral-100 hover:border-blue-200/70"
                  aria-label={keyword}
                >
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {stat}
                  </div>
                  <div className="text-3xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-black text-lg mb-3 text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Sections - Optimize edilmiş */}
        <section className="py-16 bg-white" aria-labelledby="seo-title">
          <div className="container">
            <h2 id="seo-title" className="text-3xl md:text-4xl font-black text-center mb-12 text-neutral-900">
              Türkiye'nin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">1 Numaralı</span> Etkinlik Teknoloji Partneri
            </h2>

            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
              <article className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="font-black text-xl mb-4 text-neutral-900">
                  Uçtan Uca Teknik Hizmet ve Profesyonel Çözümler
                </h3>
                <div className="text-neutral-700">
                  <p className="leading-relaxed mb-4">
                    <strong>Sahneva</strong> olarak Türkiye genelinde sahne kiralama, podyum kurulumu, LED ekran kiralama ve ses ışık sistemi kurulumu hizmetlerinde komple çözümler sunuyoruz.
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {[
                      "IP65 su geçirmez dış mekân LED paneller",
                      "Profesyonel line-array ses sistemleri",
                      "Modüler podyum ve sahne platformları",
                      "DMX kontrollü ışık sistemleri"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h3 className="font-black text-xl mb-4 text-neutral-900">
                  Hızlı Kurulum, Şeffaf Fiyatlandırma
                </h3>
                <div className="text-neutral-700">
                  <p className="leading-relaxed mb-4">
                    İstanbul merkezli ekibimizle <strong>Türkiye'nin 81 ilinde</strong> hizmet veriyoruz. 
                    Aynı gün kurulum ve 7/24 teknik destek ile riskleri minimize ediyoruz.
                  </p>
                  
                  <div className="p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                    <a
                      href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Sahne+kiralama+ve+LED+ekran+fiyatları+hakkında+detaylı+teklif+almak+istiyorum."
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp üzerinden hemen teklif alın"
                    >
                      <span>WhatsApp'tan Teklif Al</span>
                    </a>
                    <p className="text-xs text-neutral-600 mt-2">
                      <strong>2 saat içinde</strong> detaylı teklif
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-xl mx-auto">
                Sahne kiralama, LED ekran fiyatları ve teknik detaylar hakkında merak ettikleriniz
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton label="SSS yükleniyor" />}>
              <FaqLazy />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
