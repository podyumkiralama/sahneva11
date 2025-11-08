// app/kurumsal-organizasyon/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";
import { Suspense } from "react";

// ISR için revalidate
export const revalidate = 1800;

// Metadata - SEO Optimized
export const metadata = {
  title: "Kurumsal Organizasyon & Etkinlik Yönetimi | Profesyonel Çözümler - Sahneva",
  description: "Toplantı, konferans, lansman, gala, miting ve roadshow'larda uçtan uca planlama. Sahne, podyum, LED ekran, ses-ışık ve yayın operasyonu tek ekipten.",
  keywords: "kurumsal organizasyon, etkinlik yönetimi, konferans, lansman, gala, miting, ses ışık sistemi, LED ekran, sahne kurulumu",
  authors: [{ name: "Sahneva" }],
  publisher: "Sahneva",
  alternates: {
    canonical: "https://www.sahneva.com/kurumsal-organizasyon",
    languages: {
      "tr-TR": "https://www.sahneva.com/kurumsal-organizasyon",
      "x-default": "https://www.sahneva.com/kurumsal-organizasyon",
    },
  },
  openGraph: {
    title: "Kurumsal Organizasyon & Etkinlik Yönetimi | Profesyonel Çözümler - Sahneva",
    description: "Planlama, teknik tasarım ve yedekli altyapı ile risksiz kurumsal etkinlikler. Türkiye geneli kurulum ve profesyonel ekip.",
    url: "https://www.sahneva.com/kurumsal-organizasyon",
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: "https://www.sahneva.com/img/kurumsal/hero.webp",
        width: 1200,
        height: 630,
        alt: "Sahneva Kurumsal Organizasyon Hizmetleri - Profesyonel sahne kurulumu",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahneva",
    creator: "@sahneva",
    title: "Kurumsal Organizasyon & Etkinlik Yönetimi | Sahneva",
    description: "Konferans, lansman, gala ve roadshow'larda profesyonel planlama ve operasyon.",
    images: ["https://www.sahneva.com/img/kurumsal/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

// Constants - Ayrı dosyaya taşınabilir
const PAGE_CONSTANTS = {
  HERO: {
    src: "/img/kurumsal/hero.webp",
    alt: "Kurumsal organizasyon: profesyonel sahne kurulumu, LED ekran ve ışık sistemi ile etkinlik alanı",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw",
  },
  
  GALLERY: [
    { 
      src: "/img/kurumsal/1.webp", 
      alt: "Konferans sahnesi ve geniş LED ekran kurulumu", 
      category: "Konferans",
      width: 800,
      height: 600
    },
    { 
      src: "/img/kurumsal/2.webp", 
      alt: "Kurumsal lansman etkinliği sahne ve ışık koreografisi", 
      category: "Lansman",
      width: 800,
      height: 600
    },
    { 
      src: "/img/kurumsal/3.webp", 
      alt: "Açık hava mitingi LED ekran ve ses kuleleri", 
      category: "Miting",
      width: 800,
      height: 600
    },
    { 
      src: "/img/kurumsal/4.webp", 
      alt: "Fuar standı P2.5 iç mekan LED duvar uygulaması", 
      category: "Fuar",
      width: 800,
      height: 600
    },
  ],

  SERVICES: [
    {
      icon: "🎤",
      title: "Konferans & Seminer",
      description: "Profesyonel ses sistemi, LED ekran ve aydınlatma çözümleri",
      features: [
        "Simultane çeviri sistemleri",
        "Kablosuz mikrofon sistemleri",
        "Kayıt ve canlı yayın",
        "Akustik optimizasyon",
      ],
    },
    {
      icon: "🚀",
      title: "Ürün Lansmanı",
      description: "Etkileyici görsel şovlar ve interaktif deneyimler",
      features: [
        "3D mapping ve projeksiyon",
        "Özel sahne tasarımı",
        "Medya duvarları",
        "Interaktif ekranlar",
      ],
    },
    {
      icon: "🎭",
      title: "Gala & Ödül Töreni",
      description: "Şık ve profesyonel organizasyon çözümleri",
      features: [
        "Kırmızı halı kurulumu",
        "Özel aydınlatma tasarımı",
        "Sahne dekorasyonu",
        "VIP alanları",
      ],
    },
    {
      icon: "🏟️",
      title: "Miting & Açık Hava",
      description: "Büyük kitlelere yönelik profesyonel çözümler",
      features: [
        "Yüksek parlaklıklı LED ekranlar",
        "Güçlü ses sistemleri",
        "Jeneratör ve altyapı",
        "Güvenlik önlemleri",
      ],
    },
    {
      icon: "🛣️",
      title: "Roadshow & Fuar",
      description: "Mobil ve esnek organizasyon çözümleri",
      features: [
        "Taşınabilir sahne sistemleri",
        "Hızlı kurulum çözümleri",
        "Marka entegrasyonu",
        "Interaktif standlar",
      ],
    },
    {
      icon: "💍",
      title: "Özel Etkinlikler",
      description: "Kurumsal düğün, yılbaşı partileri ve özel kutlamalar",
      features: [
        "Özel dekorasyon",
        "Tema tasarımı",
        "Eğlence ve şovlar",
        "Fotoğraf/video çekim",
      ],
    },
  ],

  TECHNICAL_SPECS: {
    led: "P2.5–P6 LED Ekranlar • 1500–6500 nit parlaklık • 4K çözünürlük",
    sound: "Line-array ses sistemleri • 360° ses dağıtımı • DSP kontrol",
    lighting: "LED wash ve spot ışıklar • Hareketli kafalar • DMX kontrol",
    stage: "Modüler sahne sistemleri • 30–200 m² kapasite • PVC kaplama",
    power: "Jeneratör ve güç dağıtımı • UPS sistemleri • Voltaj stabilizasyonu",
    broadcast: "4K kamera sistemleri • Canlı yayın ve kayıt • Çok kameralı miksaj",
  },

  PROCESS: [
    {
      step: "01",
      title: "Keşif & Planlama",
      description: "Mekan analizi, ihtiyaç değerlendirmesi ve kapsamlı planlama",
      details: ["Mekan ölçümü", "Teknik gereksinimler", "Zaman planı", "Bütçe optimizasyonu"],
    },
    {
      step: "02",
      title: "Tasarım & Teklif",
      description: "Özel tasarım ve şeffaf fiyatlandırma",
      details: ["Sahne tasarımı", "Teknik çizimler", "Ekipman seçimi", "Detaylı teklif"],
    },
    {
      step: "03",
      title: "Kurulum & Test",
      description: "Profesyonel kurulum ve kapsamlı test süreci",
      details: ["Ekipman kurulumu", "Sistem entegrasyonu", "Test ve kalibrasyon", "Prova"],
    },
    {
      step: "04",
      title: "Operasyon & Destek",
      description: "Etkinlik süresince kesintisiz destek",
      details: ["Teknik operatörler", "Canlı destek", "Acil müdahale", "Güvenlik"],
    },
  ],

  FAQ: [
    { 
      q: "Kurulum süresi ne kadar?", 
      a: "Mekan erişimi ve kurguya bağlı olarak 4–12 saat; açık alan ve çok kameralı yayınlarda 1 güne çıkabilir. Acil kurulum hizmetimizle aynı gün teslimat sağlanabilir." 
    },
    { 
      q: "Yedek planınız var mı?", 
      a: "İşlemci, sinyal hattı ve kritik mikrofonlarda yedekleme; jeneratör–şebeke transfer senaryoları hazırdır. Tüm kritik ekipmanlarda %100 yedek sistem bulunur." 
    },
    { 
      q: "Elektrik ihtiyacı nedir?", 
      a: "LED ekranlar m² başına yaklaşık 300–800 W tüketir. Güç dağıtımı ve topraklama projeye göre planlanır. 1000 kişilik bir etkinlik için ortalama 60–100A elektrik ihtiyacı olur." 
    },
    { 
      q: "Canlı yayın ve kayıt desteği veriyor musunuz?", 
      a: "Evet. Çok kamerayla miks, kayıt ve streaming; scaler ve senkron ölçümleri dahil uçtan uca operasyon sağlarız. 4K çözünürlükte canlı yayın ve profesyonel kayıt hizmeti sunuyoruz." 
    },
    { 
      q: "Hangi şehirlerde hizmet veriyorsunuz?", 
      a: "Tüm Türkiye'de hizmet veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere 81 ilde profesyonel ekiplerimizle hizmetinizdeyiz." 
    },
    { 
      q: "Kaç kişiye kadar etkinlik organize ediyorsunuz?", 
      a: "50 kişilik toplantılardan 50.000 kişilik açık hava konserlerine kadar her ölçekte etkinlik için profesyonel çözümler sunuyoruz." 
    },
  ],
};

// Utility functions
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const encodeWhatsAppText = (text) => encodeURIComponent(text);

// Loading Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]" aria-live="polite" aria-label="Yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
    </div>
  );
}

// Skip Navigation Component
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-6 focus:py-4 focus:rounded-lg focus:font-bold focus:shadow-2xl focus:border-2 focus:border-white transition-all duration-200"
    >
      Ana içeriğe atla
    </a>
  );
}

// Optimized Image Component
const OptimizedImage = ({ src, alt, className, priority = false, sizes }) => (
  <Image
    src={src}
    alt={alt}
    fill
    priority={priority}
    className={className}
    sizes={sizes}
    loading={priority ? "eager" : "lazy"}
    quality={85}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  />
);

// Main Page Component
export default function KurumsalOrganizasyonPage() {
  const waMessage = "Merhaba, kurumsal organizasyon için teklif istiyorum. Etkinlik türü: [konferans/lansman/gala], Tarih: [gg.aa.yyyy], Kişi sayısı: [xxx], Ek ihtiyaçlar: [ses/ışık/LED/canlı yayın].";
  const encodedWaMessage = encodeWhatsAppText(waMessage);

  // Structured Data - SEO Optimized
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com/" },
          { "@type": "ListItem", position: 2, name: "Kurumsal Organizasyon", item: "https://www.sahneva.com/kurumsal-organizasyon" },
        ],
      },
      {
        "@type": "Service",
        name: "Kurumsal Organizasyon & Etkinlik Yönetimi",
        description: "Toplantı, konferans, lansman, gala, miting ve roadshow'larda planlama, sahne–ses–ışık–LED–yayın altyapısı.",
        provider: {
          "@type": "Organization",
          name: "Sahneva",
          telephone: "+905453048671",
          address: {
            "@type": "PostalAddress",
            addressLocality: "İstanbul",
            addressCountry: "TR"
          },
          areaServed: "TR",
          knowssAbout: [
            "Event Production",
            "Stage Design", 
            "Audio Visual Equipment",
            "Live Streaming",
            "Corporate Events"
          ]
        },
        serviceType: "EventProduction",
        url: "https://www.sahneva.com/kurumsal-organizasyon",
        offers: {
          "@type": "Offer",
          description: "Profesyonel kurumsal organizasyon hizmetleri"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: PAGE_CONSTANTS.FAQ.map((f, index) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      },
      {
        "@type": "ImageObject",
        contentUrl: "https://www.sahneva.com/img/kurumsal/hero.webp",
        url: "https://www.sahneva.com/img/kurumsal/hero.webp",
        width: 1920,
        height: 1080,
        caption: "Profesyonel kurumsal organizasyon sahne kurulumu",
        keywords: "kurumsal organizasyon, sahne kurulumu, LED ekran, ses ışık sistemi"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Skip Navigation */}
      <SkipToContent />

      {/* Hero Section - Optimized */}
      <section 
        className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[80vh]"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0" role="presentation" aria-hidden="true">
          <OptimizedImage
            src={PAGE_CONSTANTS.HERO.src}
            alt={PAGE_CONSTANTS.HERO.alt}
            className="object-cover"
            priority={true}
            sizes={PAGE_CONSTANTS.HERO.sizes}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/80" 
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-purple-900/60" 
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
          {/* Trust Badge */}
          <div 
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/25 mb-8"
            role="status"
            aria-label="Türkiye geneli hizmet"
          >
            <span className="relative flex w-3 h-3" aria-hidden="true">
              <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
            </span>
            <span className="text-sm font-semibold">Türkiye Geneli Profesyonel Hizmet</span>
          </div>

          {/* Main Heading */}
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
            Kurumsal Organizasyon
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Konferans • Lansman • Gala • Miting • Roadshow
            <span className="block mt-2 text-white/90">Profesyonel ekip ve son teknoloji ekipmanlarla anahtar teslim çözümler</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={`https://wa.me/905453048671?text=${encodedWaMessage}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-2 min-h-[60px] min-w-[44px]"
              aria-label="WhatsApp üzerinden kurumsal organizasyon teklifi al"
            >
              <span className="flex items-center gap-2">
                💬 Hemen Teklif Al
              </span>
            </Link>

            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 min-h-[60px] min-w-[44px]"
              aria-label="Hizmetlerimiz bölümüne git"
            >
              <span className="flex items-center gap-2">
                🎯 Hizmetlerimiz
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <ul 
            className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm drop-shadow"
            aria-label="Güven göstergeleri"
            role="list"
          >
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">⭐</span>
              <span>4.9/5 (250+ Değerlendirme)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🏆</span>
              <span>500+ Başarılı Proje</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🚀</span>
              <span>81 İlde Hizmet</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="bg-white" tabIndex={-1} role="main" aria-label="Kurumsal organizasyon ana içerik">
        
        {/* Services Section */}
        <section 
          id="hizmetler" 
          className="py-16 bg-gradient-to-b from-white to-blue-50/30 scroll-mt-20"
          aria-labelledby="hizmetler-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="hizmetler-baslik" className="text-3xl md:text-5xl font-black mb-4">
                Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Her türlü kurumsal etkinlik için profesyonel ve anahtar teslim çözümler
              </p>
            </div>

            <Suspense fallback={<LoadingSpinner />}>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
                {PAGE_CONSTANTS.SERVICES.map((service, index) => {
                  const serviceId = `service-${slugify(service.title)}-${index}`;
                  return (
                    <li key={serviceId} role="listitem">
                      <article
                        className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-blue-200"
                        aria-labelledby={serviceId}
                      >
                        <div 
                          className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300" 
                          role="img" 
                          aria-label={service.title}
                        >
                          {service.icon}
                        </div>
                        <h3 id={serviceId} className="text-xl font-black mb-2 text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2" role="list">
                          {service.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="flex items-start gap-3 text-sm text-gray-700"
                            >
                              <span 
                                className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" 
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </Suspense>
          </div>
        </section>

        {/* Diğer bölümler aynı şekilde optimize edilebilir */}
        {/* Process, Technical Specs, Gallery, Statistics, SEO Article, Final CTA */}

        {/* Örnek olarak Process Section */}
        <section 
          className="py-16 bg-gradient-to-b from-white to-purple-50/30 scroll-mt-20"
          aria-labelledby="surec-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="surec-baslik" className="text-3xl md:text-5xl font-black mb-4">
                Çalışma <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Sürecimiz</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profesyonel ve sistematik yaklaşımımızla etkinliklerinizi güvenle planlıyoruz
              </p>
            </div>

            <Suspense fallback={<LoadingSpinner />}>
              <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" role="list">
                {PAGE_CONSTANTS.PROCESS.map((step, index) => (
                  <li key={`process-${index}`} role="listitem">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
                      <div 
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-lg mb-4 mx-auto"
                        aria-hidden="true"
                      >
                        {step.step}
                      </div>
                      <h3 className="text-lg font-black mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2 text-left" role="list">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex} 
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <span 
                              className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" 
                              aria-hidden="true"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </Suspense>
          </div>
        </section>

        {/* Final Optimized CTA */}
        <section 
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
          aria-labelledby="final-cta-heading"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
              <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-black mb-6">
                🚀 Etkinliğinizi Planlamaya Başlayalım!
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                48 saat içinde detaylı teklif ve teknik çizim ile yanıt veriyoruz. 
                Profesyonel ekibimizle etkinliğinizi risksiz organize edelim.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={`https://wa.me/905453048671?text=${encodedWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 min-h-[60px] min-w-[44px]"
                  aria-label="WhatsApp üzerinden hemen teklif al"
                >
                  <span className="flex items-center gap-2">
                    💬 WhatsApp'tan Yazın
                  </span>
                </Link>
                
                <Link
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 min-h-[60px] min-w-[44px]"
                  aria-label="Telefonla hemen ara"
                >
                  <span className="flex items-center gap-2">
                    📞 Hemen Arayın
                  </span>
                </Link>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm font-medium">
                  <span className="text-green-300">🟢 Acil organizasyon:</span>{' '}
                  Aynı gün kurulum için{' '}
                  <strong>+90 545 304 86 71</strong>'i arayın.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}