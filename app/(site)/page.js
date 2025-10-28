// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";

// Client bileşenlerini dinamik yükle - ssr:false KULLANMIYORUZ
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { 
    loading: () => <SectionSkeleton label="Hizmetler yükleniyor" />,
    // ssr: false kaldırıldı - Next.js 15 uyumluluğu için
  }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { 
    loading: () => <SectionSkeleton label="Projeler yükleniyor" />,
    // ssr: false kaldırıldı - Next.js 15 uyumluluğu için
  }
);

export const revalidate = 3600;

// Geliştirilmiş skeleton component
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

// SEO-friendly schema markup
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventProductionCompany',
  'name': 'Sahneva',
  'description': 'Profesyonel sahne, podyum, LED ekran ve ses-ışık sistemleri kiralama',
  'url': 'https://sahneva.com',
  'telephone': '+905453048671',
  'areaServed': 'TR',
  'serviceType': 'Event Production'
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Enhanced skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* Optimized HERO section */}
      <section
        className="full-bleed relative overflow-x-hidden bg-gradient-to-br from-blue-900/95 to-purple-900/90"
        aria-labelledby="hero-title"
        role="region"
      >
        {/* Background with priority loading */}
        <div className="absolute inset-0">
          <Image
            src="/img/hero-bg.webp"
            alt="Profesyonel sahne kurulumu, LED ekranlar ve ses-ışık ekipmanlarıyla hazırlanmış etkinlik alanı"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
          />
        </div>

        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 container py-24 md:py-36 lg:py-44 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              id="hero-title"
              className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
            >
              Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Sahne Sistemleri</span> & Teknoloji Kiralama
            </h1>
            
            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed font-light max-w-3xl mx-auto">
              Türkiye genelinde <strong>sahne kurulumu</strong>, <strong>LED ekran</strong>, <strong>ses-ışık sistemleri</strong> ve profesyonel ekipman kiralama
            </p>

            {/* Enhanced CTA section */}
            <div className="mb-12">
              <HeroCtasClient />
            </div>

            {/* Premium features grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
              aria-label="Hizmet avantajları"
            >
              {[
                { icon: "⭐", label: "4.9/5 Müşteri Puanı", desc: "500+ Mutlu Müşteri" },
                { icon: "⚡", label: "Aynı Gün Kurulum", desc: "Hızlı Teslimat" },
                { icon: "👷", label: "Uzman Ekip", desc: "10+ Yıl Deneyim" },
              ].map(({ icon, label, desc }, i) => (
                <li key={i} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-white/70 text-xs">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust indicators */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
              <div className="text-4xl mb-4" aria-hidden="true">🎧</div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                Ücretsiz Profesyonel Danışmanlık
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Etkinliğiniz için en uygun çözümleri <strong>ücretsiz teknik danışmanlık</strong> ile planlayalım. 2 saat içinde detaylı teklif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main id="main" className="relative">
        {/* Floating review banner */}
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        {/* Services section with enhanced loading */}
        <section 
          className="relative py-16 bg-gradient-to-b from-white to-neutral-50/80"
          aria-labelledby="hizmetler-title"
        >
          <div className="absolute inset-0 bg-grid-neutral-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" aria-hidden="true" />
          
          <Suspense fallback={
            <div className="relative z-10">
              <SectionSkeleton label="Premium hizmetlerimiz yükleniyor" />
            </div>
          }>
            <ServicesTabsLazy />
          </Suspense>
        </section>

        {/* Projects gallery with visual enhancement */}
        <section 
          className="py-20 bg-neutral-900"
          aria-labelledby="projeler-title"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="projeler-title" className="text-4xl md:text-5xl font-black text-white mb-4">
                Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projelerimiz</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                500'den fazla kurumsal etkinlikte güvenilir çözüm ortağı
              </p>
            </div>
            
            <Suspense fallback={
              <div className="relative z-10">
                <SectionSkeleton label="Referans projelerimiz yükleniyor" />
              </div>
            }>
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Corporate events with visual hierarchy */}
        <section className="section-lazy relative py-20 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="kurumsal-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
                Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çözümlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Fortune 500 şirketleri ve lider markalar için profesyonel etkinlik çözümleri
              </p>
            </div>
            <CorporateEvents />
          </div>
        </section>

        {/* Enhanced why choose us section */}
        <section
          className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50/30"
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
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                10 yılı aşkın deneyimimiz ve uzman ekibimizle fark yaratıyoruz
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⭐",
                  title: "Yüksek Müşteri Memnuniyeti",
                  desc: "Her organizasyonda %100'e yakın müşteri memnuniyeti oranı",
                  stat: "%98 Memnuniyet"
                },
                {
                  icon: "⚡",
                  title: "Hızlı Kurulum",
                  desc: "Aynı gün içinde anahtar teslim profesyonel kurulum",
                  stat: "2-6 Saat"
                },
                {
                  icon: "🎤",
                  title: "Premium Ekipman",
                  desc: "En son teknoloji LED ekran, ses-ışık sistemleri",
                  stat: "2024 Model"
                },
                {
                  icon: "👷",
                  title: "Uzman Teknik Ekip",
                  desc: "10+ yıl deneyimli profesyonel teknik kadro",
                  stat: "15+ Uzman"
                },
                {
                  icon: "💰",
                  title: "Rekabetçi Fiyat",
                  desc: "Kaliteli hizmeti en uygun fiyat garantisiyle sunuyoruz",
                  stat: "%30 Tasarruf"
                },
                {
                  icon: "🚚",
                  title: "Türkiye Geneli",
                  desc: "Türkiye'nin 81 ilinde hızlı ve güvenilir hizmet",
                  stat: "81 İl"
                },
              ].map(({ icon, title, desc, stat }, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-100 hover:border-blue-200/50 hover:scale-105"
                >
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {stat}
                  </div>
                  <div className="text-4xl mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced SEO content sections */}
        <section className="py-20 bg-white" aria-labelledby="seo-title">
          <div className="container">
            <h2 id="seo-title" className="text-4xl md:text-5xl font-black text-center mb-16 text-neutral-900">
              Türkiye'nin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">1 Numaralı</span> Etkinlik Teknoloji Partneri
            </h2>

            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <article className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100">
                <h3 className="font-black text-2xl mb-6 text-neutral-900 flex items-center gap-3">
                  <span className="bg-blue-500 text-white p-2 rounded-lg">🚀</span>
                  Uçtan Uca Teknik Hizmet
                </h3>
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="text-lg leading-relaxed">
                    <strong>Sahneva</strong> olarak{' '}
                    <a href="/sahne-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      sahne sistemleri kiralama
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
                    alanlarında komple çözümler sunuyoruz.
                  </p>
                  
                  <ul className="mt-6 space-y-3 text-neutral-700">
                    {[
                      "IP65 dış mekân LED paneller, 4500+ nit parlaklık",
                      "Line-array ses sistemleri, dijital mikserler",
                      "Modüler podyum ve sahne platformları",
                      "DMX kontrollü ışık ve ambiyans aydınlatma"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg border border-purple-100">
                <h3 className="font-black text-2xl mb-6 text-neutral-900 flex items-center gap-3">
                  <span className="bg-purple-500 text-white p-2 rounded-lg">⚡</span>
                  Hızlı Kurulum, Şeffaf Fiyat
                </h3>
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="text-lg leading-relaxed">
                    İstanbul merkezli ekibimizle <strong>Türkiye'nin 81 ilinde</strong> hizmet veriyoruz. 
                    Aynı gün kurulum, yedekli ekipman ve 7/24 teknik destek ile riskleri minimize ediyoruz.
                  </p>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl border border-purple-200">
                    <p className="font-semibold text-purple-900 mb-2">Hızlı Teklif İsteği:</p>
                    <a
                      href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ulaşıyorum.+Detaylı+teklif+almak+istiyorum."
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>WhatsApp'tan Hemen Teklif Al</span>
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Premium block with enhanced content */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/90 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
                Büyük Ölçekli Kurulumlarda <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Neden Biz?</span>
              </h2>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-white/90">
                  Protokol seviyesindeki etkinliklerde yalnızca güçlü ekipman değil,{' '}
                  <strong className="text-blue-300">kusursuz operasyon</strong> ve{' '}
                  <strong className="text-blue-300">güvenli rigging</strong> esastır.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                      <span className="bg-blue-500 p-2 rounded-lg">🏆</span>
                      Teknik Üstünlük
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "P2-P6 LED ekran konfigürasyonları",
                        "Truss ve scaff üst yapılarla güvenli rigging",
                        "Alan akustiğine özel ses optimizasyonu",
                        "DMX kontrollü ışık tasarımı"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                      <span className="bg-purple-500 p-2 rounded-lg">🛡️</span>
                      Operasyonel Mükemmellik
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "7/24 teknik destek ve sahne yönetimi",
                        "Risk analizi ve yönetim planı",
                        "Şeffaf teklif ve kurumsal raporlama",
                        "ISO standartlarında kalite kontrol"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-20 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="faq-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Etkinlik planlamanızla ilgili tüm sorularınızı yanıtlıyoruz
              </p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
    </div>
  );
}
