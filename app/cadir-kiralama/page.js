// app/cadir-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

/** ───── META & ISR ───── */
export const metadata = {
  title: "Çadır Kiralama | Sahneva - Profesyonel Etkinlik Çadır Çözümleri",
  description: "Pagoda, şeffaf dome, endüstriyel çadır kiralama. Zemin kaplama, aydınlatma ve profesyonel kurulum. Türkiye geneli hızlı hizmet.",
  alternates: { canonical: "https://www.sahneva.com/cadir-kiralama" },
  keywords: "çadır kiralama, pagoda çadır, şeffaf çadır, dome çadır, fuar çadırı, endüstriyel çadır, çadır kurulumu, etkinlik çadırı",
  openGraph: {
    title: "Çadır Kiralama | Sahneva - Profesyonel Etkinlik Çözümleri",
    description: "Pagoda, şeffaf ve endüstriyel çadır çözümleri. Türkiye geneli profesyonel kurulum ve tamamlayıcı hizmetler.",
    url: "https://www.sahneva.com/cadir-kiralama",
    type: "website",
    images: [
      { 
        url: "/img/cadir/og-cadir.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Sahneva Çadır Kiralama - Profesyonel Etkinlik Çözümleri" 
      }
    ],
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

/** ───── ACCESSIBILITY COMPONENTS ───── */
function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
    >
      Ana içeriğe atla
    </a>
  );
}

function VisuallyHidden({ children, ...props }) {
  return (
    <span className="sr-only" {...props}>
      {children}
    </span>
  );
}

/** ───── OPTIMIZED COMPONENTS ───── */
function CadirStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Çadır Kiralama',
    'name': 'Çadır Kiralama Hizmeti',
    'description': 'Profesyonel pagoda, şeffaf ve endüstriyel çadır kiralama, kurulum ve tamamlayıcı hizmetler',
    'provider': {
      '@type': 'Organization',
      'name': 'Sahneva',
      'url': 'https://www.sahneva.com'
    },
    'areaServed': 'TR',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Çadır Kiralama Hizmetleri',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Pagoda Çadır Kiralama',
            'description': '5x5m ve 6x6m modüler pagoda çadır sistemleri'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Şeffaf Dome Çadır Kiralama',
            'description': 'Şeffaf kubbe çadır sistemleri ve aydınlatma çözümleri'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SectionSkeleton() {
  return (
    <div className="container py-10 animate-pulse" aria-label="İçerik yükleniyor">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-gradient-to-r from-neutral-100 to-neutral-200" />
        <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200" />
      </div>
    </div>
  );
}

function OptimizedImage({ src, alt, className = "", priority = false, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`transition-transform duration-300 ${className}`}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9NmGBnzSlT54b6bk+h0R"
      priority={priority}
      {...props}
    />
  );
}

function ContactCTA({ className = "", center = false, variant = "primary", label = "Hemen teklif alın" }) {
  return (
    <div 
      className={`flex flex-col sm:flex-row gap-4 ${center ? 'justify-center' : ''} ${className}`}
      role="group"
      aria-label="İletişim seçenekleri"
    >
      <a
        href="tel:+905453048671"
        className={`${
          variant === "primary" 
            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
            : "bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        } text-center focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
        aria-label="Telefon ile hemen ara"
      >
        <span className="flex items-center justify-center gap-2">
          📞 Hemen Ara
        </span>
      </a>
      <a
        href="https://wa.me/905453048671"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        aria-label="WhatsApp üzerinden iletişime geç"
      >
        <span className="flex items-center justify-center gap-2">
          💬 WhatsApp
        </span>
      </a>
    </div>
  );
}

/** ───── MAIN COMPONENT ───── */
export default function CadirKiralamaPage() {
  const TENT_TYPES = [
    {
      title: "Pagoda Çadırlar",
      description: "5×5m ve 6×6m modüler sistemler",
      features: ["Yüksek tepe noktası", "Estetik görünüm", "Modüler birleşim", "Yan branda opsiyonu"],
      image: "/img/cadir/pagoda.webp",
      icon: "🏕️",
      color: "from-blue-500 to-cyan-500",
      price: "7.000 TL'den başlayan fiyatlar"
    },
    {
      title: "Şeffaf Dome Çadırlar",
      description: "Gece aydınlatmasına uygun şeffaf sistemler",
      features: ["Büyüleyici atmosfer", "Weather-proof", "LED aydınlatma", "Davet organizasyonları"],
      image: "/img/cadir/seffaf.webp",
      icon: "🔮",
      color: "from-purple-500 to-pink-500",
      price: "450 TL/m²"
    },
    {
      title: "Endüstriyel Çadırlar",
      description: "Geniş açıklıklı depolama çözümleri",
      features: ["Forklift girişi", "Geniş açıklık", "Uzun süreli kullanım", "Dayanıklı yapı"],
      image: "/img/cadir/endustriyel.webp",
      icon: "🏭",
      color: "from-green-500 to-emerald-500",
      price: "Özel teklif"
    },
    {
      title: "Fuar Çadırları",
      description: "Sergi ve fuar alanları için optimize",
      features: ["Hızlı kurulum", "Stand uyumu", "Profesyonel görünüm", "Dekorasyon desteği"],
      image: "/img/cadir/fuar.webp",
      icon: "🎪",
      color: "from-orange-500 to-red-500",
      price: "300 TL/m²"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <CadirStructuredData />
      <SkipToMain />

      {/* ✅ HERO SECTION - Accessibility Improved */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src="/img/cadir/hero.webp"
            alt="Profesyonel çadır kiralama hizmeti - Pagoda, şeffaf ve endüstriyel çadır çözümleri"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
            style={{
              transform: 'scale(1.02)',
              filter: 'brightness(0.6) contrast(1.1) saturate(1.1)'
            }}
          />
        </div>

        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/70"
          aria-hidden="true"
        />
        
        <div className="relative z-10 container text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6"
              role="status"
              aria-label="Hizmet durumu: Türkiye geneli hizmet veriliyor"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="text-white/90 text-sm font-medium">Türkiye Geneli Kurulum</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block">PROFESYONEL</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
                Çadır Çözümleri
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pagoda, şeffaf dome, endüstriyel çadır sistemleri<br />
              <strong className="text-blue-300">Zemin kaplama, aydınlatma ve kurulum dahil</strong>
            </p>

            <ContactCTA center={true} label="Hemen çadır kiralama teklifi alın" />
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2" aria-hidden="true">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" tabIndex={-1}>
        {/* ✅ ÇADIR TÜRLERİ - Accessibility Improved */}
        <section 
          id="cadir-cesitleri" 
          className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30"
          aria-labelledby="tent-types-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="tent-types-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Çadır <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çeşitlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Her etkinlik türüne özel tasarlanmış çadır çözümlerimizle yanınızdayız
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8" role="list">
              {TENT_TYPES.map((tent, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 overflow-hidden"
                  role="listitem"
                >
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src={tent.image}
                      alt={`${tent.title} - ${tent.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`text-3xl mb-2 bg-gradient-to-r ${tent.color} text-transparent bg-clip-text`}>
                        {tent.icon}
                      </div>
                      <h3 className="text-2xl font-black text-white">{tent.title}</h3>
                      <p className="text-white/90">{tent.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span 
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                        aria-label={`Fiyat: ${tent.price}`}
                      >
                        {tent.price}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-6" role="list">
                      {tent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-neutral-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <ContactCTA />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ ACCESSIBILITY FEATURES SECTION */}
        <section 
          className="py-20 bg-white"
          aria-labelledby="accessibility-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="accessibility-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Erişilebilir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çözümler</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Herkes için erişilebilir çadır çözümleri sunuyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "♿",
                  title: "Engelsiz Erişim",
                  description: "Tekerlekli sandalye girişine uygun geniş açıklıklar"
                },
                {
                  icon: "🔊",
                  title: "Ses Sistemi",
                  description: "İşitme engelli misafirler için ses yükseltici sistemler"
                },
                {
                  icon: "🪑",
                  title: "Özel Oturma",
                  description: "Farklı ihtiyaçlara uygun oturma düzenleri"
                },
                {
                  icon: "🚻",
                  title: "Erişilebilir WC",
                  description: "Engelli tuvaleti entegrasyonu"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                  role="article"
                  aria-label={`${feature.title}: ${feature.description}`}
                >
                  <div 
                    className="text-4xl mb-4" 
                    role="img" 
                    aria-label={feature.title}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ SEO MAKALESİ - Accessibility Improved */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30"
          aria-labelledby="seo-article-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <article className="prose prose-lg prose-blue max-w-none">
              <header className="text-center mb-16">
                <h2 id="seo-article-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                  Çadır Kiralama Rehberi: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profesyonel Çözümler</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Etkinlik çadırı kiralama sürecinde dikkat edilmesi gereken tüm detaylar, teknik özellikler ve profesyonel çözüm önerileri
                </p>
              </header>

              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 md:p-12">
                {/* Giriş */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4">Çadır Kiralama: Etkinliklerinizin Güvenli Limanı</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Açık hava etkinlikleri, doğanın sunduğu atmosferi yaşama fırsatı verse de hava koşullarının belirsizliği organizatörler için önemli bir risk oluşturur. 
                    <strong> Profesyonel çadır kiralama hizmeti</strong>, bu riskleri minimize ederek etkinliklerinizin her koşulda kesintisiz devam etmesini sağlar.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Sahneva olarak, 10+ yıllık deneyimimizle sadece çadır kiralamıyor; 
                    <strong> anahtar teslim etkinlik çözümleri</strong> sunuyoruz. Bu rehberde, çadır kiralama sürecinde dikkat edilmesi gereken tüm teknik detayları bulacaksınız.
                  </p>
                </div>

                {/* Bölüm 1 */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
                    <span className="text-blue-500">🏕️</span>
                    1. Çadır Türleri ve Kullanım Alanları
                  </h4>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Doğru çadır seçimi, etkinliğinizin başarısını doğrudan etkiler. İşte en popüler çadır türleri ve ideal kullanım alanları:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6" role="article">
                      <h5 className="font-black text-lg text-blue-900 mb-3">Pagoda Çadırlar</h5>
                      <ul className="space-y-2 text-blue-800" role="list">
                        <li>• <strong>Ölçüler:</strong> 5×5m, 6×6m modüler</li>
                        <li>• <strong>İdeal Kullanım:</strong> Düğün, kokteyl, karşılama alanları</li>
                        <li>• <strong>Avantajlar:</strong> Estetik görünüm, yüksek tavan</li>
                        <li>• <strong>Kapasite:</strong> 50-100 kişi (6×6m)</li>
                        <li>• <strong>Fiyat:</strong> 5×5m: 7.000 TL, 6×6m: 8.500 TL</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6" role="article">
                      <h5 className="font-black text-lg text-purple-900 mb-3">Şeffaf Dome Çadırlar</h5>
                      <ul className="space-y-2 text-purple-800" role="list">
                        <li>• <strong>Özellik:</strong> %100 şeffaf PVC</li>
                        <li>• <strong>İdeal Kullanım:</strong> Gece etkinlikleri, lansmanlar</li>
                        <li>• <strong>Avantajlar:</strong> Doğal ışık, büyüleyici atmosfer</li>
                        <li>• <strong>Özel Not:</strong> LED aydınlatma ile muhteşem görsel</li>
                        <li>• <strong>Fiyat:</strong> m²: 450 TL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bölüm 2 */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
                    <span className="text-green-500">🔧</span>
                    2. Teknik Özellikler ve Güvenlik Standartları
                  </h4>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Profesyonel çadır kiralama hizmetinde teknik özellikler ve güvenlik standartları hayati öneme sahiptir:
                  </p>

                  <div className="bg-green-50 rounded-xl p-6 mb-6" role="article">
                    <h5 className="font-black text-lg text-green-900 mb-4">Güvenlik Standartları</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-green-800" role="list">
                        <li>• <strong>Rüzgar Dayanımı:</strong> 70-90 km/s</li>
                        <li>• <strong>Branda Kalitesi:</strong> 650-850 gr/m² PVC</li>
                        <li>• <strong>UV Koruma:</strong> 5+ yıl garantili</li>
                        <li>• <strong>Alev Direnci:</strong> B1 sınıfı</li>
                      </ul>
                      <ul className="space-y-2 text-green-800" role="list">
                        <li>• <strong>İskelet Malzemesi:</strong> Alüminyum 6082 T6</li>
                        <li>• <strong>Ankraj Sistemi:</strong> Çelik spiral 40cm</li>
                        <li>• <strong>Bağlantı Elemanları:</strong> Galvaniz çelik</li>
                        <li>• <strong>Standart:</strong> TS EN 13782</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sonuç */}
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-200" role="complementary">
                  <h3 className="text-2xl font-black text-blue-900 mb-4">Profesyonel Çadır Kiralama: Yatırımınızın Garantisi</h3>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    Doğru çadır seçimi ve profesyonel kurulum, etkinliğinizin başarısını doğrudan etkiler. 
                    <strong> Ucuz çözümler</strong> kısa vadede tasarruf gibi görünse de, olası hava koşullarında yaşanacak sorunlar 
                    çok daha büyük maliyetlere yol açabilir.
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Sahneva olarak, <strong>10+ yıllık deneyimimiz</strong>, <strong>TS EN standartlarına uygun ekipmanlarımız</strong> 
                    ve <strong>7/24 teknik destek ekibimizle</strong> etkinliklerinizin güvenli limanı olmaya devam ediyoruz.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+905453048671"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                      aria-label="Telefon ile hemen çadır kiralama danışmanlığı alın"
                    >
                      📞 Hemen Danışmanlık Alın
                    </a>
                    <a
                      href="https://wa.me/905453048671"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
                      aria-label="WhatsApp üzerinden çadır kiralama teklifi alın"
                    >
                      💬 WhatsApp'tan Yazın
                    </a>
                  </div>
                  <p className="text-sm text-neutral-600 mt-4">
                    <strong>Ücretsiz keşif</strong> ve <strong>detaylı teklif</strong> için hemen iletişime geçin
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ✅ CTA SECTION - Accessibility Improved */}
        <section 
          className="py-20 bg-gradient-to-br from-blue-600 to-purple-600"
          aria-labelledby="final-cta-title"
        >
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 id="final-cta-title" className="text-4xl md:text-5xl font-black mb-6">
              Hemen <span className="text-yellow-300">Çadır Kiralayın</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Etkinliğiniz için en uygun çadır çözümünü sunalım. 2 saat içinde detaylı teklif hazırlıyoruz.
            </p>

            <ContactCTA 
              center={true} 
              variant="secondary" 
              label="Son çağrı: Hemen çadır kiralama teklifi alın"
            />

            <div 
              className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto"
              role="status"
            >
              <p className="text-white/90 text-sm">
                <strong>⏱️ 2 Saat İçinde Yanıt:</strong> Mesai saatleri içinde tüm çadır kiralama taleplerinize 
                2 saat içinde detaylı teklif ve profesyonel danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
