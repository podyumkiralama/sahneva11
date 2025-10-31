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
      </main>
    </div>
  );
}
