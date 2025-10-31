// app/cadir-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

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

/** ───── STRUCTURED DATA ───── */
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
    'areaServed': {
      '@type': 'Country',
      'name': 'TR'
    },
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

/** ───── SKELETON COMPONENT ───── */
function SectionSkeleton() {
  return (
    <div className="container py-10 animate-pulse">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-gradient-to-r from-neutral-100 to-neutral-200" />
        <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200" />
      </div>
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
      <CadirStructuredData />

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
            src="/img/cadir/hero.webp"
            alt="Sahneva Çadır Kiralama - Profesyonel Etkinlik Çadır Çözümleri ve Kurulum Hizmetleri"
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

        {/* ✅ BÜYÜK ARKA PLAN YAZISI */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <h1 className="text-[100px] lg:text-[160px] font-black text-white tracking-wider select-none">
            ÇADIR
          </h1>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
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
              <a
                href="#cadir-cesitleri"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="Çadır çeşitlerimizi inceleyin"
              >
                <span className="flex items-center gap-2">
                  Çadır Çeşitlerimiz
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              
              <a
                href="tel:+905453048671"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="Hemen ara - Detaylı bilgi için"
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

      <main id="main" className="relative">
        {/* ✅ GİRİŞ BÖLÜMÜ */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çadır Çözümleri</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
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

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Hızlı Kurulum", desc: "2-6 saat içinde profesyonel kurulum" },
                { icon: "🛡️", title: "Güvenlik Garantisi", desc: "TS EN standartlarına uygun ekipman" },
                { icon: "🌍", title: "Türkiye Geneli", desc: "81 ilde kurulum ve lojistik desteği" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-black text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ ÇADIR TÜRLERİ */}
        <section id="cadir-cesitleri" className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Çadır <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Çeşitlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Her etkinlik türüne özel tasarlanmış çadır çözümlerimizle yanınızdayız
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {TENT_TYPES.map((tent, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tent.image}
                      alt={tent.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <ul className="space-y-3">
                      {tent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-neutral-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-neutral-100">
                      <a
                        href="tel:+905453048671"
                        className={`inline-flex items-center justify-center bg-gradient-to-r ${tent.color} hover:shadow-xl text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105`}
                      >
                        <span className="flex items-center gap-2">
                          📞 Hemen Teklif Al
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ TEKNİK ÖZELLİKLER */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Özellikler</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                TS EN standartlarına uygun, güvenli ve dayanıklı çadır sistemleri
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TECHNICAL_SPECS.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🔧</span>
                    {spec.category}
                  </h3>
                  <ul className="space-y-4">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-neutral-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ KULLANIM ALANLARI */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alanları</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Çadır çözümlerimizin tercih edildiği başlıca etkinlik ve kullanım alanları
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {USE_CASES.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{useCase.icon}</div>
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {useCase.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ GALERİ */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Galerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Gerçekleştirdiğimiz başarılı çadır kurulum projelerinden örnekler
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <Suspense fallback={<SectionSkeleton />}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["1.webp", "2.webp", "3.webp", "4.webp"].map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <Image
                      src={`/img/cadir/${image}`}
                      alt={`Sahneva çadır kurulum projesi ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* ✅ İLGİLİ HİZMETLER */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Tamamlayıcı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Çadır kurulumunuzu tamamlayacak diğer profesyonel hizmetlerimiz
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "📐" },
                { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️" },
                { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵" },
                { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🎪" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Hemen <span className="text-yellow-300">Çadır Kiralayın</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Etkinliğiniz için en uygun çadır çözümünü sunalım. 2 saat içinde detaylı teklif hazırlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="tel:+905453048671"
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Hemen ara - Çadır kiralama için"
              >
                <span className="flex items-center justify-center gap-2">
                  📞 Hemen Ara
                </span>
              </a>

              <a
                href="https://wa.me/905453048671?text=Merhaba%2C%20çadır%20kiralama%20hakkında%20bilgi%20ve%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="WhatsApp'tan çadır kiralama teklifi al"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 WhatsApp
                </span>
              </a>

              <Link
                href="/iletisim"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="İletişim formu ile çadır kiralama talebinde bulunun"
              >
                <span className="flex items-center justify-center gap-2">
                  📧 E-posta
                </span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ 2 Saat İçinde Yanıt:</strong> Mesai saatleri içinde tüm çadır kiralama taleplerinize 
                2 saat içinde detaylı teklif ve profesyonel danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </section>

{/* ✅ SIKÇA SORULAN SORULAR */}
<section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
  <div className="container max-w-4xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
        Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
      </h2>
      <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
        Çadır kiralama sürecinde en çok merak edilen sorular ve detaylı cevapları
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
    </div>

    <div className="space-y-6">
      {/* Fiyatlandırma Soruları */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
        <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
          <span className="text-green-500">💰</span>
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

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Hangi hizmetler kiralama ücretine dahil?</h4>
            <p className="text-neutral-700 leading-relaxed">
              Tüm kiralama paketlerimize şu hizmetler dahildir:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-neutral-700">
              <li>Profesyonel kurulum ve söküm</li>
              <li>İstanbul içi nakliye</li>
              <li>Temel zemin kaplama</li>
              <li>Standart aydınlatma sistemi</li>
              <li>8 saat teknik destek</li>
              <li>Yangın söndürücü ve güvenlik ekipmanları</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Ekstra ücretlendirilen hizmetler nelerdir?</h4>
            <p className="text-neutral-700 leading-relaxed">
              Aşağıdaki hizmetler ek ücrete tabidir:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-neutral-700">
              <li>Isıtma veya soğutma sistemleri (1.500 - 3.000 TL)</li>
              <li>Özel dekorasyon ve markalama (2.000 TL'den başlar)</li>
              <li>24 saat kesintisiz teknik destek (1.000 TL/gün)</li>
              <li>İstanbul dışı nakliye (km başına hesaplanır)</li>
              <li>Özel güvenlik hizmetleri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Teknik Detay Soruları */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
        <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
          <span className="text-blue-500">🔧</span>
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

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Hangi zeminlerde kurulum yapabiliyorsunuz?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Çim, toprak, asfalt, beton, mermer gibi tüm zeminlerde</strong> kurulum yapabiliyoruz. Her zemin tipine özel ankraj ve zemin kaplama çözümlerimiz mevcut. Eğimli arazilerde özel destek sistemleri kuruyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Çadırların elektrik ihtiyacı nasıl karşılanıyor?</h4>
            <p className="text-neutral-700 leading-relaxed">
              Çadırlarımızda <strong>CE belgeli profesyonel elektrik sistemi</strong> bulunur. 220V şebeke bağlantısı, priz hatları ve LED aydınlatma sistemleri mevcuttur. Jeneratör ihtiyacı durumunda 5-10 kVA kapasiteli sessiz jeneratörler temin ediyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Kurulum & Süreç Soruları */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
        <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
          <span className="text-purple-500">⚡</span>
          Kurulum Süreci & Destek
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Kurulum için ne kadar önceden rezervasyon yapmalıyım?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>En az 7 gün önceden rezervasyon yapmanızı öneririz.</strong> Yoğun sezonda 2-3 hafta önceden rezervasyon yapılması gerekebilir. Acil durumlarda 24 saat içinde kurulum yapabiliyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Kurulum öncesi keşif yapıyor musunuz?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Evet, tüm etkinlikler için ücretsiz keşif hizmeti sunuyoruz.</strong> Keşif sırasında zemin analizi, rüzgar yönü belirleme, elektrik altyapısı değerlendirmesi yapıyor ve en uygun çadır konumlandırmasını planlıyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Etkinlik sırasında teknik destek sağlıyor musunuz?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Evet, tüm kiralama paketlerimize 8 saat teknik destek dahildir.</strong> 24 saat kesintisiz destek için ek paket alabilirsiniz. Acil durumlarda 1 saat içinde müdahale garantisi veriyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Çadır sigortası yapıyor musunuz?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Evet, tüm çadırlarımız doğal afet sigortası ile güvence altında.</strong> Ayrıca 3. şahıs sorumluluk sigortamız mevcuttur. Sigorta detayları sözleşmede belirtilir.
            </p>
          </div>
        </div>
      </div>

      {/* Diğer Sorular */}
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
        <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
          <span className="text-orange-500">🎪</span>
          Diğer Sorular
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">İstanbul dışına hizmet veriyor musunuz?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Evet, Türkiye'nin 81 iline hizmet veriyoruz.</strong> İstanbul dışı kurulumlarda nakliye ücreti km başına hesaplanır. Büyükşehirlerde yerel ekiplerimizle hızlı kurulum sağlıyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Kaç kişilik çadırlara ihtiyacım var?</h4>
            <p className="text-neutral-700 leading-relaxed">
              <strong>5×5 metre çadır: 40-50 kişi</strong> (oturma düzeni), <strong>80-100 kişi</strong> (ayakta)<br/>
              <strong>6×6 metre çadır: 60-70 kişi</strong> (oturma düzeni), <strong>120-150 kişi</strong> (ayakta)<br/>
              Detaylı kapasite planlaması için ücretsiz keşif talep edebilirsiniz.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg text-neutral-900 mb-3">Çadır kiralama sözleşmesinde neler var?</h4>
            <p className="text-neutral-700 leading-relaxed">
              Sözleşmemizde; <strong>hizmet detayları, fiyatlandırma, kurulum-söküm tarihleri, teknik destek süreleri, sorumluluklar ve sigorta detayları</strong> bulunur. Sözleşme öncesi tüm maddeleri birlikte gözden geçiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* SSS CTA */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-black mb-4">Başka Sorunuz Mu Var?</h3>
        <p className="text-white/90 mb-6">7/24 canlı destek ekibimiz sorularınızı yanıtlamak için hazır</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="tel:+905453048671"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            📞 Hemen Ara
          </a>
          <a
            href="https://wa.me/905453048671"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ✅ SEO MAKALESİ */}
<section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
  <div className="container max-w-6xl mx-auto px-4">
    <article className="prose prose-lg prose-blue max-w-none">
      <header className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
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
          <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
            <span className="text-blue-500">🏕️</span>
            1. Çadır Türleri ve Kullanım Alanları
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Doğru çadır seçimi, etkinliğinizin başarısını doğrudan etkiler. İşte en popüler çadır türleri ve ideal kullanım alanları:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-black text-lg text-blue-900 mb-3">Pagoda Çadırlar</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Ölçüler:</strong> 5×5m, 6×6m modüler</li>
                <li>• <strong>İdeal Kullanım:</strong> Düğün, kokteyl, karşılama alanları</li>
                <li>• <strong>Avantajlar:</strong> Estetik görünüm, yüksek tavan</li>
                <li>• <strong>Kapasite:</strong> 50-100 kişi (6×6m)</li>
                <li>• <strong>Fiyat:</strong> 5×5m: 7.000 TL, 6×6m: 8.500 TL</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="font-black text-lg text-purple-900 mb-3">Şeffaf Dome Çadırlar</h4>
              <ul className="space-y-2 text-purple-800">
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
          <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
            <span className="text-green-500">🔧</span>
            2. Teknik Özellikler ve Güvenlik Standartları
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Profesyonel çadır kiralama hizmetinde teknik özellikler ve güvenlik standartları hayati öneme sahiptir:
          </p>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-black text-lg text-green-900 mb-4">Güvenlik Standartları</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-green-800">
                <li>• <strong>Rüzgar Dayanımı:</strong> 70-90 km/s</li>
                <li>• <strong>Branda Kalitesi:</strong> 650-850 gr/m² PVC</li>
                <li>• <strong>UV Koruma:</strong> 5+ yıl garantili</li>
                <li>• <strong>Alev Direnci:</strong> B1 sınıfı</li>
              </ul>
              <ul className="space-y-2 text-green-800">
                <li>• <strong>İskelet Malzemesi:</strong> Alüminyum 6082 T6</li>
                <li>• <strong>Ankraj Sistemi:</strong> Çelik spiral 40cm</li>
                <li>• <strong>Bağlantı Elemanları:</strong> Galvaniz çelik</li>
                <li>• <strong>Standart:</strong> TS EN 13782</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bölüm 3 */}
        <div className="mb-8">
          <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
            <span className="text-orange-500">💼</span>
            3. Çadır Kiralama Süreci: 5 Adımda Profesyonel Çözüm
          </h3>
          
          <div className="space-y-6">
            {[
              {
                step: "1. Keşif ve Planlama",
                content: "Ücretsiz keşif hizmetimizle etkinlik alanınızı değerlendiriyor, zemin yapısı, rüzgar yönü ve etkinlik akışına uygun çözümler öneriyoruz."
              },
              {
                step: "2. Teknik Teklif",
                content: "Detaylı teknik özellikler, kurulum planı ve şeffaf fiyatlandırma içeren kapsamlı teklif sunuyoruz. 2 saat içinde yanıt garantisi."
              },
              {
                step: "3. Profesyonel Kurulum",
                content: "Sertifikalı ekiplerimiz 2-6 saat içinde çadırınızı güvenli şekilde kuruyor. Zemin kaplama, elektrik altyapısı ve aydınlatma işlemleri tamamlanıyor."
              },
              {
                step: "4. Etkinlik Desteği",
                content: "Etkinlik boyunca 7/24 teknik destek ekibimiz hazır bulunuyor. Acil durumlarda 1 saat içinde müdahale garantisi veriyoruz."
              },
              {
                step: "5. Söküm ve Teslim",
                content: "Etkinlik sonrası profesyonel söküm işlemi gerçekleştiriliyor. Alan orijinal haline getirilerek teslim ediliyor."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-black text-lg text-neutral-900 mb-2">{item.step}</h4>
                  <p className="text-neutral-700 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bölüm 4 */}
        <div className="mb-8">
          <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
            <span className="text-purple-500">💰</span>
            4. Çadır Kiralama Fiyatlandırması: Şeffaf Maliyet Analizi
          </h3>
          
          <div className="bg-purple-50 rounded-xl p-6 mb-6">
            <p className="text-purple-800 mb-4">
              <strong>Not:</strong> Aşağıdaki fiyatlar ortalama değerlerdir. Kesin fiyatlandırma için ücretsiz keşif talebinde bulunun.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="font-black text-lg text-purple-900 mb-2">Pagoda 5×5m</div>
                <div className="text-2xl font-black text-purple-600 mb-2">₺7.000</div>
                <div className="text-sm text-purple-700">nakliye & kurulum dahil</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="font-black text-lg text-purple-900 mb-2">Pagoda 6×6m</div>
                <div className="text-2xl font-black text-purple-600 mb-2">₺8.500</div>
                <div className="text-sm text-purple-700">nakliye & kurulum dahil</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="font-black text-lg text-purple-900 mb-2">Standart m²</div>
                <div className="text-2xl font-black text-purple-600 mb-2">₺300/m²</div>
                <div className="text-sm text-purple-700">referans harici tüm çadırlar</div>
              </div>
            </div>
          </div>

          <h4 className="font-black text-lg text-neutral-900 mb-3">Fiyatı Etkileyen Faktörler</h4>
          <ul className="space-y-2 text-neutral-700 mb-4">
            <li>• <strong>Kurulum Zorluğu:</strong> Eğimli zemin, ulaşım zorluğu</li>
            <li>• <strong>Ek Hizmetler:</strong> Zemin kaplama, ısıtma-soğutma sistemleri</li>
            <li>• <strong>Kiralama Süresi:</strong> Uzun dönem kiralarda özel fiyat</li>
            <li>• <strong>Lokasyon:</strong> Şehir dışı kurulumlar için nakliye maliyeti</li>
          </ul>
        </div>

        {/* Bölüm 5 */}
        <div className="mb-8">
          <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
            <span className="text-red-500">⚠️</span>
            5. Çadır Kiralarken Dikkat Edilmesi Gereken 10 Kritik Nokta
          </h3>

          <div className="bg-red-50 rounded-xl p-6">
            <ol className="space-y-4 text-red-800">
              {[
                "Rüzgar dayanımı sertifikasını mutlaka isteyin (minimum 70 km/s)",
                "Branda kalınlığı 650 gr/m² altında olan çadırlardan kaçının",
                "Ankraj sisteminin profesyonel olduğundan emin olun",
                "Elektrik tesisatının CE belgeli olmasına dikkat edin",
                "Yangına karşı B1 sınıfı alev geciktirici branda tercih edin",
                "Kurulum ekibinin iş güvenliği sertifikası olmalı",
                "Zemin kaplama kalitesi su geçirmez olmalı",
                "7/24 acil destek hizmeti talep edin",
                "Sigorta kapsamını mutlaka sorun",
                "Montaj ve demonstaj sürelerini netleştirin"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-black flex-shrink-0">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sonuç */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              📞 Hemen Danışmanlık Alın
            </a>
            <a
              href="https://wa.me/905453048671"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
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
      </main>
    </div>
  );
}
