// app/(site)/hakkimizda/page.js
import Image from "next/image";
import Link from "next/link";

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

/* ───── STATIC STATS COMPONENT ───── */
function StaticStats() {
  const stats = [
    { 
      number: "700+", 
      label: "Başarılı Proje", 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      number: "12+", 
      label: "Yıl Deneyim", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      number: "81", 
      label: "İlde Hizmet", 
      color: "from-green-500 to-emerald-500" 
    },
  ];

  return (
    <div className="container -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-neutral-700">
              {stat.label}
            </div>
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

      {/* ✅ HERO SECTION */}
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

      {/* ✅ STATIC STATS - Dynamic import olmadan */}
      <StaticStats />

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
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Kalan bölümler aynı kalacak... */}
        {/* DEĞERLERİMİZ, TARİHÇE, MÜŞTERİ PORTFÖYÜ, VİZYON & MİSYON, CTA bölümleri önceki kodda olduğu gibi kalacak */}
        
      </main>
    </div>
  );
}
