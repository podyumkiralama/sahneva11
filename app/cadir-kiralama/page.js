// app/cadir-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import JsonLd from "@/components/security/JsonLd";

/** ───── META & ISR ───── */
export const metadata = {
  title: "Çadır Kiralama | Sahneva - Profesyonel Etkinlik Çadır Çözümleri",
  description: "Pagoda, şeffaf dome, endüstriyel çadır kiralama. Zemin kaplama, aydınlatma ve profesyonel kurulum. Türkiye geneli hızlı hizmet.",
  alternates: { canonical: "https://www.sahneva.com/cadir-kiralama" },
  keywords: [
    "çadır kiralama",
    "pagoda çadır",
    "şeffaf çadır",
    "dome çadır",
    "fuar çadırı",
    "endüstriyel çadır",
    "çadır kurulumu",
    "etkinlik çadırı",
  ],
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
      className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-6 focus:py-4 focus:rounded-lg focus:font-bold focus:shadow-2xl focus:border-2 focus:border-white transition-all duration-200"
    >
      Ana içeriğe atla
    </a>
  );
}

function FocusableCard({ children, className = "", ...props }) {
  return (
    <div 
      className={`focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:scale-105 transition-all duration-200 ${className}`}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
}

const CADIR_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Çadır Kiralama",
  name: "Çadır Kiralama Hizmeti",
  description:
    "Profesyonel pagoda, şeffaf ve endüstriyel çadır kiralama, kurulum ve tamamlayıcı hizmetler",
  provider: {
    "@type": "Organization",
    name: "Sahneva",
    url: "https://www.sahneva.com",
  },
  areaServed: {
    "@type": "Country",
    name: "TR",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Çadır Kiralama Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pagoda Çadır Kiralama",
          description: "5x5m ve 6x6m modüler pagoda çadır sistemleri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Şeffaf Dome Çadır Kiralama",
          description: "Şeffaf kubbe çadır sistemleri ve aydınlatma çözümleri",
        },
      },
    ],
  },
};

/** ───── SKELETON COMPONENT ───── */
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

/** ───── OPTIMIZED IMAGE COMPONENT ───── */
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

/** ───── ACCESSIBLE CTA COMPONENT ───── */
function AccessibleCTA({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  ariaLabel,
  ...props 
}) {
  const baseStyles = "font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    secondary: "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20",
    white: "bg-white text-blue-600 hover:bg-gray-100"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
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
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Şeffaf Dome Çadırlar",
      description: "Gece aydınlatmasına uygun şeffaf sistemler",
      features: ["Büyüleyici atmosfer", "Weather-proof", "LED aydınlatma", "Davet organizasyonları"],
      image: "/img/cadir/seffaf.webp",
      icon: "🔮",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Endüstriyel Çadırlar",
      description: "Geniş açıklıklı depolama çözümleri",
      features: ["Forklift girişi", "Geniş açıklık", "Uzun süreli kullanım", "Dayanıklı yapı"],
      image: "/img/cadir/endustriyel.webp",
      icon: "🏭",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Fuar Çadırları",
      description: "Sergi ve fuar alanları için optimize",
      features: ["Hızlı kurulum", "Stand uyumu", "Profesyonel görünüm", "Dekorasyon desteği"],
      image: "/img/cadir/fuar.webp",
      icon: "🎪",
      color: "from-orange-500 to-red-500"
    }
  ];

  const TECHNICAL_SPECS = [
    {
      category: "Teknik Özellikler",
      items: [
        "Alüminyum iskelet, çelik bağlantı elemanları",
        "UV dayanımlı ve alev yürütmez branda",
        "Profesyonel ankraj / ağırlıklandırma sistemi",
        "Yağmur oluğu, kapı-pencere modülleri"
      ]
    },
    {
      category: "Ölçüler & Kombinasyonlar",
      items: [
        "Pagoda: 5×5m / 6×6m modüler birleşim",
        "Şeffaf: proje bazlı ölçülendirme",
        "Endüstriyel: 10-20m geniş açıklık",
        "Yan yana/arka arkaya birleştirme"
      ]
    },
    {
      category: "Tamamlayıcı Hizmetler",
      items: [
        "Zemin kaplama: podyum veya kontraplak",
        "Aydınlatma ve elektrik altyapısı",
        "Isıtma-soğutma sistemleri",
        "Dekorasyon ve markalama"
      ]
    }
  ];

  const USE_CASES = [
    { icon: "🎪", text: "Fuar, sergi, lansman ve tanıtım etkinlikleri" },
    { icon: "💍", text: "Düğün, kına, nişan ve özel davetler" },
    { icon: "🎤", text: "Konser, festival ve backstage çözümleri" },
    { icon: "🏛️", text: "Belediye organizasyonları ve kurumsal etkinlikler" },
    { icon: "🏭", text: "Geçici depolama ve endüstriyel üretim alanları" },
    { icon: "🏫", text: "Okul şenlikleri ve mezuniyet törenleri" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <JsonLd id="ld-service-tent" data={CADIR_SERVICE_SCHEMA} />
      <SkipToMain />

      {/* ✅ HERO SECTION - Premium Design with Accessibility */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src="/img/cadir/hero.webp"
            alt="Sahneva Çadır Kiralama - Profesyonel Etkinlik Çadır Çözümleri ve Kurulum Hizmetleri"
            fill
            priority
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-center hero-image-dark"
          />
        </div>

        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/70"
          aria-hidden="true"
        />

        {/* ✅ BÜYÜK ARKA PLAN YAZISI */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5" aria-hidden="true">
          <h1 className="text-[100px] lg:text-[160px] font-black text-white tracking-wider select-none">
            ÇADIR
          </h1>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div 
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6"
              role="status"
              aria-label="Hizmet durumu: Türkiye geneli kurulum hizmeti aktif"
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

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <AccessibleCTA
                href="#cadir-cesitleri"
                variant="primary"
                ariaLabel="Çadır çeşitlerimizi inceleyin - Sayfa içi bağlantı"
              >
                <span className="flex items-center gap-2">
                  Çadır Çeşitlerimiz
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </span>
              </AccessibleCTA>
              
              <AccessibleCTA
                href="tel:+905453048671"
                variant="secondary"
                ariaLabel="Hemen ara - Detaylı bilgi için telefon numarası: 905453048671"
              >
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="Telefon">📞</span>
                  Hemen Ara
                </span>
              </AccessibleCTA>
            </div>
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

      <main id="main-content" tabIndex={-1} className="relative">
        {/* ✅ GİRİŞ BÖLÜMÜ */}
        <section 
          className="py-20 bg-gradient-to-br from-white to-blue-50/50"
          aria-labelledby="intro-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="intro-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çadır Çözümleri</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" aria-hidden="true"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Açık hava etkinlikleri; düğün, lansman, fuar veya konser gibi organizasyonlarda hava koşullarına bağlı riskler taşır.{" "}
                <strong className="text-blue-600">Sahneva</strong>, bu riskleri ortadan kaldırmak ve konforlu bir alan oluşturmak için modern, güvenli ve şık çadır çözümleri sunar.
              </p>
              
              <p className="text-xl text-neutral-700 leading-relaxed">
                Pagoda çadırlar, şeffaf kubbeli sistemler ve endüstriyel depolama çadırlarıyla her ölçekte etkinlik için uygun alternatifler geliştiriyoruz. 
                Keşiften planlamaya, kurulumdan söküme kadar tüm süreç Sahneva ekibi tarafından yönetilir.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8" role="list">
              {[
                { icon: "⚡", title: "Hızlı Kurulum", desc: "2-6 saat içinde profesyonel kurulum" },
                { icon: "🛡️", title: "Güvenlik Garantisi", desc: "TS EN standartlarına uygun ekipman" },
                { icon: "🌍", title: "Türkiye Geneli", desc: "81 ilde kurulum ve lojistik desteği" }
              ].map((feature, index) => (
                <FocusableCard
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" role="img" aria-label={feature.title}>{feature.icon}</div>
                  <h3 className="text-xl font-black text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.desc}</p>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ ÇADIR TÜRLERİ */}
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
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12" role="list">
              {TENT_TYPES.map((tent, index) => (
                <FocusableCard
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
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`text-3xl mb-2 bg-gradient-to-r ${tent.color} text-transparent bg-clip-text`} aria-hidden="true">
                        {tent.icon}
                      </div>
                      <h3 className="text-2xl font-black text-white">{tent.title}</h3>
                      <p className="text-white/90">{tent.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3" role="list">
                      {tent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-neutral-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-neutral-100">
                      <AccessibleCTA
                        href="tel:+905453048671"
                        className={`inline-flex items-center justify-center bg-gradient-to-r ${tent.color} hover:shadow-xl text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105`}
                        ariaLabel={`${tent.title} için hemen teklif alın`}
                      >
                        <span className="flex items-center gap-2">
                          <span role="img" aria-label="Telefon">📞</span>
                          Hemen Teklif Al
                        </span>
                      </AccessibleCTA>
                    </div>
                  </div>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ TEKNİK ÖZELLİKLER */}
        <section 
          className="py-20 bg-white"
          aria-labelledby="tech-specs-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="tech-specs-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Özellikler</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                TS EN standartlarına uygun, güvenli ve dayanıklı çadır sistemleri
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8" role="list">
              {TECHNICAL_SPECS.map((spec, index) => (
                <FocusableCard
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                  role="listitem"
                >
                  <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label="Teknik özellikler">🔧</span>
                    {spec.category}
                  </h3>
                  <ul className="space-y-4" role="list">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-neutral-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ KULLANIM ALANLARI */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="use-cases-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="use-cases-title" className="text-4xl md:text-5xl font-black text-white mb-6">
                Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alanları</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Çadır çözümlerimizin tercih edildiği başlıca etkinlik ve kullanım alanları
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
              {USE_CASES.map((useCase, index) => (
                <FocusableCard
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                  role="listitem"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl" role="img" aria-label={useCase.text}>{useCase.icon}</div>
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {useCase.text}
                    </span>
                  </div>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ GALERİ */}
        <section 
          className="py-20 bg-white"
          aria-labelledby="gallery-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="gallery-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Galerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Gerçekleştirdiğimiz başarılı çadır kurulum projelerinden örnekler
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <Suspense fallback={<SectionSkeleton />}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
                {["1.webp", "2.webp", "3.webp", "4.webp"].map((image, index) => (
                  <FocusableCard
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
                    role="listitem"
                  >
                    <OptimizedImage
                      src={`/img/cadir/${image}`}
                      alt={`Sahneva çadır kurulum projesi ${index + 1} - Profesyonel çadır kurulum çalışmamız`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" aria-hidden="true" />
                  </FocusableCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* ✅ İLGİLİ HİZMETLER */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30"
          aria-labelledby="related-services-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="related-services-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Tamamlayıcı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Çadır kurulumunuzu tamamlayacak diğer profesyonel hizmetlerimiz
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto" role="navigation" aria-label="Tamamlayıcı hizmetler">
              {[
                { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "📐" },
                { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️" },
                { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵" },
                { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🎪" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-300 hover:scale-105 text-center focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                  aria-label={`${service.title} hizmeti sayfasına git`}
                >
                  <div className="text-3xl mb-3" role="img" aria-hidden="true">{service.icon}</div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section 
          className="py-20 bg-gradient-to-br from-blue-600 to-purple-600"
          aria-labelledby="cta-title"
        >
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 id="cta-title" className="text-4xl md:text-5xl font-black mb-6">
              Hemen <span className="text-yellow-300">Çadır Kiralayın</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Etkinliğiniz için en uygun çadır çözümünü sunalım. 2 saat içinde detaylı teklif hazırlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8" role="group" aria-label="İletişim seçenekleri">
              <AccessibleCTA
                href="tel:+905453048671"
                variant="white"
                ariaLabel="Hemen ara - Çadır kiralama için telefon: 905453048671"
                className="min-w-[200px] text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span role="img" aria-label="Telefon">📞</span>
                  Hemen Ara
                </span>
              </AccessibleCTA>

              <AccessibleCTA
                href="https://wa.me/905453048671?text=Merhaba%2C%20çadır%20kiralama%20hakkında%20bilgi%20ve%20teklif%20almak%20istiyorum."
                variant="primary"
                ariaLabel="WhatsApp'tan çadır kiralama teklifi al"
                className="min-w-[200px] text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span role="img" aria-label="WhatsApp">💬</span>
                  WhatsApp
                </span>
              </AccessibleCTA>

              <Link
                href="/iletisim"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="İletişim formu ile çadır kiralama talebinde bulunun"
              >
                <span className="flex items-center justify-center gap-2">
                  <span role="img" aria-label="E-posta">📧</span>
                  E-posta
                </span>
              </Link>
            </div>

            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto"
              role="status"
            >
              <p className="text-white/90 text-sm">
                <strong>⏱️ 2 Saat İçinde Yanıt:</strong> Mesai saatleri içinde tüm çadır kiralama taleplerinize 
                2 saat içinde detaylı teklif ve profesyonel danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ SIKÇA SORULAN SORULAR */}
        <section 
          className="py-20 bg-gradient-to-br from-white to-blue-50/50"
          aria-labelledby="faq-title"
        >
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="faq-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Çadır kiralama sürecinde en çok merak edilen sorular ve detaylı cevapları
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
            </div>

            <div className="space-y-6">
              {/* Fiyatlandırma Soruları */}
              <FocusableCard className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl" role="img" aria-label="Fiyatlandırma">💰</span>
                  Fiyatlandırma & Paketler
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black text-lg text-neutral-900 mb-3">5×5 metre pagoda çadır kiralama fiyatı nedir?</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>5×5 metre pagoda çadır kiralama fiyatımız 7.000 TL'dir.</strong> Bu fiyata İstanbul içi nakliye, profesyonel kurulum, söküm işlemleri ve temel teknik destek dahildir. Paketimizde çadır, zemin kaplama, temel aydınlatma ve 8 saat teknik destek bulunmaktadır.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-black text-lg text-neutral-900 mb-3">Metrekare başına çadır kiralama fiyatı ne kadar?</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>Standart çadırlar için metrekare fiyatı 300 TL'dir.</strong> Bu fiyat referans dışı tüm çadır tipleri için geçerlidir. Özel tasarım, şeffaf dome veya premium çadırlarda fiyat değişiklik gösterebilir.
                    </p>
                  </div>
                </div>
              </FocusableCard>

              {/* Teknik Detay Soruları */}
              <FocusableCard className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl" role="img" aria-label="Teknik detaylar">🔧</span>
                  Teknik Detaylar & Özellikler
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black text-lg text-neutral-900 mb-3">Çadır kurulumu ne kadar sürer?</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>5×5 metre çadır kurulumu 2-3 saat</strong>, <strong>6×6 metre çadır kurulumu 3-4 saat</strong> sürmektedir. Büyük ölçekli projelerde kurulum 1 gün önceden tamamlanır. Acil durumlarda express kurulum hizmeti sunuyoruz.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-black text-lg text-neutral-900 mb-3">Çadırlar kötü hava koşullarına dayanıklı mı?</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>Evet, çadırlarımız 90 km/s rüzgar hızına dayanıklıdır.</strong> TS EN 13782 standartlarına uygun üretilmiş alüminyum iskelet ve 650 gr/m² UV dayanımlı branda kullanıyoruz. Yağmur oluğu sistemi ile su tahliyesi sorunsuz şekilde sağlanır.
                    </p>
                  </div>
                </div>
              </FocusableCard>
            </div>

            {/* SSS CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">Başka Sorunuz Mu Var?</h3>
                <p className="text-white/90 mb-6">7/24 canlı destek ekibimiz sorularınızı yanıtlamak için hazır</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <AccessibleCTA
                    href="tel:+905453048671"
                    variant="white"
                    ariaLabel="Telefon ile hemen çadır kiralama danışmanlığı alın"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="Telefon">📞</span>
                      Hemen Ara
                    </span>
                  </AccessibleCTA>
                  <AccessibleCTA
                    href="https://wa.me/905453048671"
                    variant="primary"
                    ariaLabel="WhatsApp üzerinden çadır kiralama teklifi alın"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="WhatsApp">💬</span>
                      WhatsApp
                    </span>
                  </AccessibleCTA>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ SEO MAKALESİ */}
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
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" aria-hidden="true"></div>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Etkinlik çadırı kiralama sürecinde dikkat edilmesi gereken tüm detaylar, teknik özellikler ve profesyonel çözüm önerileri
                </p>
              </header>

              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 md:p-12">
                {/* Makale içeriği buraya gelecek - önceki uzun versiyondaki gibi */}
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

                {/* Diğer makale içerikleri... */}
                
                <div className="mt-8 text-center">
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <AccessibleCTA
                      href="tel:+905453048671"
                      variant="primary"
                      ariaLabel="Telefon ile hemen çadır kiralama danışmanlığı alın"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span role="img" aria-label="Telefon">📞</span>
                        Hemen Danışmanlık Alın
                      </span>
                    </AccessibleCTA>
                    <AccessibleCTA
                      href="https://wa.me/905453048671"
                      variant="primary"
                      ariaLabel="WhatsApp üzerinden çadır kiralama teklifi alın"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span role="img" aria-label="WhatsApp">💬</span>
                        WhatsApp'tan Yazın
                      </span>
                    </AccessibleCTA>
                  </div>
                  <p className="text-sm text-neutral-600 mt-4">
                    <strong>Ücretsiz keşif</strong> ve <strong>detaylı teklif</strong> için hemen iletişime geçin
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
