// app/hakkimizda/page.js
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";

/* ───── DYNAMIC IMPORTS ───── */
const ReviewBannerLazy = dynamic(
  () => import("../../components/ReviewBanner"),
  { 
    loading: () => <SectionSkeleton label="Referanslar yükleniyor" />,
  }
);

const StatsCounterLazy = dynamic(
  () => import("../../components/StatsCounter"),
  { 
    loading: () => <StatsSkeleton />,
  }
);

/* ───── META & ISR ───── */
export const metadata = {
  title: "Hakkımızda | Sahneva - Profesyonel Etkinlik Teknolojileri",
  description: "10+ yıllık deneyimle Türkiye genelinde sahne kiralama, LED ekran, ses-ışık sistemleri ve profesyonel etkinlik prodüksiyonu. 700+ başarılı proje.",
  alternates: { canonical: "https://www.sahneva.com/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Sahneva - Profesyonel Etkinlik Teknolojileri",
    description: "10+ yıllık deneyimle Türkiye genelinde profesyonel etkinlik çözümleri. 700+ başarılı proje, %98 müşteri memnuniyeti.",
    url: "https://www.sahneva.com/hakkimizda",
    images: [
      {
        url: "/img/og-hakkimizda.jpg",
        width: 1200,
        height: 630,
        alt: "Sahneva Ekibi - Profesyonel Etkinlik Teknolojileri"
      }
    ],
    type: "website",
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
  keywords: "sahne kiralama, led ekran kiralama, ses ışık sistemi, etkinlik prodüksiyonu, sahneva hakkında",
};

export const revalidate = 3600;

/* ───── SKELETON COMPONENTS ───── */
function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div
      className="container py-10"
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

function StatsSkeleton() {
  return (
    <div className="container -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl animate-pulse"
          >
            <div className="h-8 w-20 bg-neutral-200 rounded mb-2" />
            <div className="h-4 w-32 bg-neutral-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───── STRUCTURED DATA ───── */
function AboutStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Sahneva',
    'description': 'Profesyonel sahne kiralama, LED ekran, ses-ışık sistemleri ve etkinlik prodüksiyon hizmetleri',
    'url': 'https://sahneva.com',
    'foundingDate': '2012',
    'founders': [
      {
        '@type': 'Person',
        'name': 'Sahneva Ekibi'
      }
    ],
    'numberOfEmployees': '15-50',
    'slogan': 'Türkiye\'nin 1 Numaralı Etkinlik Teknoloji Partneri',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'TR'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+905453048671',
      'contactType': 'customer service',
      'availableLanguage': ['Turkish']
    },
    'sameAs': [
      'https://www.instagram.com/sahneva/',
      'https://www.facebook.com/sahneva/'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '500'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ───── MAIN COMPONENT ───── */
export default function HakkimizdaPage() {
  const TIMELINE = [
    { 
      year: "2012", 
      title: "Başlangıç", 
      description: "Butik sahne ve ses hizmetleri ile sektörde ilk adımlarımızı attık. Müşteri memnuniyeti odaklı hizmet anlayışımızı bu yılda temellendirdik.",
      icon: "🚀"
    },
    { 
      year: "2016", 
      title: "Teknolojik Genişleme", 
      description: "LED ekran ve görüntü sistemlerini filomuza katarak görsel prodüksiyon yetkinliğimizi güçlendirdik. İstanbul merkezli operasyonumuzu Anadolu'ya genişlettik.",
      icon: "🖥️"
    },
    { 
      year: "2020", 
      title: "Kurumsal Dönüşüm", 
      description: "Türkiye geneli lojistik ağımızı kurduk. Büyük ölçekli kurumsal etkinliklerde güvenilir çözüm ortağı olarak konumlandık.",
      icon: "🏢"
    },
    { 
      year: "2024", 
      title: "İnovasyon Liderliği", 
      description: "Yeni nesil ekipman parkı, dijital entegrasyon ve canlı yayın çözümleriyle sektörde fark yarattık. 700+ proje deneyimine ulaştık.",
      icon: "⚡"
    },
  ];

  const VALUES = [
    {
      icon: "🛡️",
      title: "Güvenlik ve Kalite",
      description: "ISO standartlarında kalite kontrol, iş güvenliği protokolleri ve düzenli ekipman bakımları"
    },
    {
      icon: "⚡",
      title: "Hızlı Kurulum",
      description: "Aynı gün kurulum, 2-6 saat içinde profesyonel sahne ve teknik altyapı teslimi"
    },
    {
      icon: "💎",
      title: "Premium Ekipman",
      description: "Son teknoloji LED ekranlar, profesyonel ses sistemleri ve modüler sahne çözümleri"
    },
    {
      icon: "🌍",
      title: "Türkiye Geneli",
      description: "81 ilde teknik ekip ve lojistik altyapı ile kesintisiz hizmet"
    },
    {
      icon: "📞",
      title: "7/24 Destek",
      description: "Kurulum öncesi, anı ve sonrası profesyonel teknik danışmanlık"
    },
    {
      icon: "💰",
      title: "Şeffaf Fiyat",
      description: "Detaylı teklifleme, gizli maliyet olmadan bütçe dostu çözümler"
    },
  ];

  const CLIENTS = [
    "Kurumsal firmalar ve markalar",
    "Belediyeler ve kamu kurumları",
    "Organizasyon ve etkinlik ajansları",
    "Festival ve konser organizatörleri",
    "Düğün ve özel etkinlik planlayıcıları",
    "Fuarcılık ve sergi firmaları"
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <AboutStructuredData />

      {/* Skip to Main Content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* ✅ HERO SECTION - Premium Design */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src="/img/hakkimizda-hero.webp"
            alt="Sahneva Ekibi - Profesyonel Etkinlik Teknolojileri ve Sahne Çözümleri"
            fill
            priority
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRkoCAABXRUJQVlA4WAoAAAAgAAAAAQABAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXnjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgAAAJABAJ0BKgIAAwAHQJYlpAAC51m2AAD+5R4qGAAAAA=="
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
        
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">10+ Yıllık Güven</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block">Hikayemiz ve</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-300% animate-gradient">
                Misyonumuz
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Türkiye'nin <strong className="text-blue-300">1 numaralı etkinlik teknoloji partneri</strong> olarak 
              700+ başarılı projede <strong className="text-purple-300">%98 müşteri memnuniyeti</strong> sağlıyoruz
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#tarihce"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="Şirket tarihçemizi inceleyin"
              >
                <span className="flex items-center gap-2">
                  Tarihçemiz
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              
              <a
                href="tel:+905453048671"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="Hemen ara - Profesyonel danışmanlık için"
              >
                📞 Hemen Ara
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ DYNAMIC STATS COUNTER */}
      <Suspense fallback={<StatsSkeleton />}>
        <StatsCounterLazy />
      </Suspense>

      {/* ✅ REVIEW BANNER */}
      <div className="sticky top-0 z-40 mt-16 lg:mt-20">
        <Suspense fallback={<SectionSkeleton label="Referanslar yükleniyor" />}>
          <ReviewBannerLazy />
        </Suspense>
      </div>

      <main id="main" className="relative">
        {/* ✅ BİZ KİMİZ SECTION */}
        <section 
          className="py-20 bg-gradient-to-br from-white to-blue-50/50"
          aria-labelledby="biz-kimiz-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="biz-kimiz-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Biz <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Kimiz?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  <strong className="text-blue-600">Sahneva</strong>, 2012'den bu yana etkinlik prodüksiyonu ve teknoloji çözümlerinde 
                  <strong> Türkiye'nin öncü kuruluşudur</strong>. Sahne kiralama, LED ekran, ses-ışık sistemleri ve profesyonel kurulum hizmetlerinde 
                  uzmanlaşmış ekibimizle, her etkinliği teknik mükemmellik ve yaratıcı vizyonla buluşturuyoruz.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  Misyonumuz; <strong>güvenilir, yenilikçi ve müşteri odaklı</strong> çözümler sunarak etkinliklerinizin 
                  teknik altyapısını sorunsuz şekilde yönetmek, markanızın değerine değer katmaktır.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { number: "700+", label: "Başarılı Proje" },
                    { number: "98%", label: "Memnuniyet Oranı" },
                    { number: "81", label: "İlde Hizmet" },
                    { number: "15+", label: "Uzman Ekip" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg border border-neutral-100">
                      <div className="text-2xl font-black text-blue-600">{stat.number}</div>
                      <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/ekip-calisma.webp"
                    alt="Sahneva profesyonel ekip çalışması - Sahne kurulumu ve teknik operasyon"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRkoCAABXRUJQVlA4WAoAAAAgAAAAAQABAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXnjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgAAAJABAJ0BKgIAAwAHQJYlpAAC51m2AAD+5R4qGAAAAA=="
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ DEĞERLERİMİZ SECTION */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30"
          aria-labelledby="degerlerimiz-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="degerlerimiz-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Değerlerimiz ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">İlkelerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Kalite, güven ve müşteri memnuniyeti odaklı hizmet anlayışımızın temel taşları
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ TARİHÇE SECTION */}
        <section 
          id="tarihce"
          className="py-20 bg-gradient-to-br from-white to-purple-50/50"
          aria-labelledby="tarihce-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="tarihce-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Yolculuğumuz ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Başarı Hikayemiz</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full hidden lg:block"></div>

              <div className="space-y-12 lg:space-y-0">
                {TIMELINE.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-black text-neutral-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Year Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:flex items-center justify-center hidden">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Spacer for even items */}
                    <div className="lg:w-1/2 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ✅ MÜŞTERİ PORTFÖYÜ */}
        <section 
          className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="musteri-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="musteri-title" className="text-4xl md:text-5xl font-black text-white mb-6">
                Güvenilen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Çözüm Ortağı</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                10+ yıldır kurumsal firmalar, kamu kuruluşları ve organizasyon ajanslarına profesyonel hizmet sunuyoruz
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {client}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-black text-white mb-4">
                  Neden Binlerce Müşteri Bizi Tercih Ediyor?
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Teknik uzmanlık, güvenilirlik ve müşteri odaklı yaklaşımımızla, 
                  her projede beklentilerin ötesinde değer sunuyoruz.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href="/referanslar"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Referanslarımızı Görün
                  </a>
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    💬 WhatsApp'tan Yazın
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ VİZYON & MİSYON */}
        <section 
          className="py-20 bg-gradient-to-br from-white to-blue-50/50"
          aria-labelledby="vizyon-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Misyon */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-3xl font-black text-neutral-900 mb-6">Misyonumuz</h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Etkinlik teknolojilerinde <strong>yenilikçi, güvenilir ve sürdürülebilir</strong> çözümler sunarak 
                  müşterilerimizin marka değerini artırmak, teknik mükemmellik ve yaratıcı vizyonla 
                  Türkiye'nin etkinlik sektörüne liderlik etmek.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  {[
                    "Teknik altyapıda sıfır hata hedefi",
                    "Müşteri memnuniyetinde %98+ başarı",
                    "Sürekli inovasyon ve ekipman yenileme",
                    "Çevreye duyarlı, sürdürülebilir çözümler"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vizyon */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-3xl font-black text-neutral-900 mb-6">Vizyonumuz</h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  2028'e kadar <strong>Türkiye'nin en büyük etkinlik teknolojileri şirketi</strong> olmak, 
                  Avrupa ve Orta Doğu'da global bir marka haline gelmek. Dijital dönüşüm ve 
                  yeşil teknolojilerle sektörde yeni standartlar belirlemek.
                </p>
                <ul className="space-y-3 text-neutral-700">
                  {[
                    "Türkiye'nin 81 ilinde %100 kapsama",
                    "Avrupa ve Orta Doğu'da genişleme",
                    "AR/VR entegrasyonlu etkinlik çözümleri",
                    "Karbon nötr operasyon hedefi"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
              Projenizde <span className="text-yellow-300">Birlikte Çalışalım</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              10+ yıllık deneyimimiz ve uzman ekibimizle etkinliğiniz için 
              en ideal çözümleri sunmaya hazırız.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="tel:+905453048671"
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Hemen ara - Profesyonel danışmanlık için"
              >
                <span className="flex items-center justify-center gap-2">
                  📞 Hemen Ara
                </span>
              </a>

              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="WhatsApp'tan yaz - Hızlı teklif için"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 WhatsApp
                </span>
              </a>

              <Link
                href="/iletisim"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="İletişim formu ile ulaşın"
              >
                <span className="flex items-center justify-center gap-2">
                  📧 E-posta
                </span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ 2 Saat İçinde Yanıt:</strong> Mesai saatleri içinde tüm taleplerinize 
                2 saat içinde detaylı teklif ve profesyonel danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}