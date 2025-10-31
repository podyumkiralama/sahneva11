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
    <div className="container py-10 animate-pulse">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-32 w-full bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
}

function OptimizedImage({ src, alt, className = "", ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`transition-transform duration-300 ${className}`}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9NmGBnzSlT54b6bk+h0R"
      {...props}
    />
  );
}

function ContactCTA({ className = "", center = false }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${center ? 'justify-center' : ''} ${className}`}>
      <a
        href="tel:+905453048671"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center"
      >
        📞 Hemen Ara
      </a>
      <a
        href="https://wa.me/905453048671"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center"
      >
        💬 WhatsApp
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
      price: "7.000 TL'den başlayan fiyatlar"
    },
    {
      title: "Şeffaf Dome Çadırlar",
      description: "Gece aydınlatmasına uygun şeffaf sistemler",
      features: ["Büyüleyici atmosfer", "Weather-proof", "LED aydınlatma", "Davet organizasyonları"],
      image: "/img/cadir/seffaf.webp",
      price: "450 TL/m²"
    },
    {
      title: "Endüstriyel Çadırlar",
      description: "Geniş açıklıklı depolama çözümleri",
      features: ["Forklift girişi", "Geniş açıklık", "Uzun süreli kullanım", "Dayanıklı yapı"],
      image: "/img/cadir/endustriyel.webp",
      price: "Özel teklif"
    },
    {
      title: "Fuar Çadırları",
      description: "Sergi ve fuar alanları için optimize",
      features: ["Hızlı kurulum", "Stand uyumu", "Profesyonel görünüm", "Dekorasyon desteği"],
      image: "/img/cadir/fuar.webp",
      price: "300 TL/m²"
    }
  ];

  const TECHNICAL_FEATURES = [
    {
      category: "Malzeme Kalitesi",
      items: [
        "Alüminyum iskelet, çelik bağlantı elemanları",
        "UV dayanımlı ve alev yürütmez branda",
        "Profesyonel ankraj / ağırlıklandırma sistemi",
        "TS EN 13782 standartlarına uygun"
      ]
    },
    {
      category: "Ölçü Seçenekleri",
      items: [
        "Pagoda: 5×5m / 6×6m modüler birleşim",
        "Şeffaf: proje bazlı ölçülendirme",
        "Endüstriyel: 10-20m geniş açıklık",
        "Yan yana/arka arkaya birleştirme"
      ]
    },
    {
      category: "Güvenlik",
      items: [
        "90 km/s rüzgar dayanımı",
        "B1 sınıfı alev geciktirici",
        "Profesyonel elektrik sistemi",
        "7/24 teknik destek"
      ]
    }
  ];

  const USE_CASES = [
    { icon: "🎪", text: "Fuar, sergi, lansman" },
    { icon: "💍", text: "Düğün, kına, nişan" },
    { icon: "🎤", text: "Konser, festival" },
    { icon: "🏛️", text: "Belediye organizasyonları" },
    { icon: "🏭", text: "Endüstriyel depolama" },
    { icon: "🏫", text: "Okul şenlikleri" }
  ];

  const FAQ_ITEMS = [
    {
      question: "5×5 metre pagoda çadır kiralama fiyatı nedir?",
      answer: "5×5 metre pagoda çadır kiralama fiyatımız 7.000 TL'dir. Bu fiyata İstanbul içi nakliye, profesyonel kurulum, söküm işlemleri ve temel teknik destek dahildir."
    },
    {
      question: "Çadır kurulumu ne kadar sürer?",
      answer: "5×5 metre çadır kurulumu 2-3 saat, 6×6 metre çadır kurulumu 3-4 saat sürmektedir. Büyük ölçekli projelerde kurulum 1 gün önceden tamamlanır."
    },
    {
      question: "Çadırlar kötü hava koşullarına dayanıklı mı?",
      answer: "Evet, çadırlarımız 90 km/s rüzgar hızına dayanıklıdır. TS EN 13782 standartlarına uygun üretilmiş alüminyum iskelet ve 650 gr/m² UV dayanımlı branda kullanıyoruz."
    },
    {
      question: "Kurulum için ne kadar önceden rezervasyon yapmalıyım?",
      answer: "En az 7 gün önceden rezervasyon yapmanızı öneririz. Yoğun sezonda 2-3 hafta önceden rezervasyon yapılması gerekebilir. Acil durumlarda 24 saat içinde kurulum yapabiliyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <CadirStructuredData />

      {/* Skip to Main Content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Ana içeriğe atla
      </a>

      {/* ✅ OPTIMIZED HERO SECTION */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-slate-900 pt-16"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src="/img/cadir/hero.webp"
            alt="Profesyonel çadır kiralama hizmeti - Pagoda, şeffaf ve endüstriyel çadır çözümleri"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-white/90 text-sm">Türkiye Geneli Hizmet</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Profesyonel <span className="text-blue-300">Çadır</span> Çözümleri
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Pagoda, şeffaf dome, endüstriyel çadır sistemleri
              <br className="hidden md:block" />
              <strong>Zemin kaplama, aydınlatma ve kurulum dahil</strong>
            </p>

            <ContactCTA center={true} />
          </div>
        </div>
      </section>

      <main id="main">
        {/* ✅ OPTIMIZED INTRODUCTION */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Etkinlikleriniz İçin <span className="text-blue-600">Güvenli Çözüm</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Açık hava etkinliklerinde hava koşullarına bağlı riskleri ortadan kaldırmak için 
                modern, güvenli ve şık çadır çözümleri sunuyoruz.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-blue-600">Sahneva</strong> olarak, keşiften planlamaya, kurulumdan söküme kadar 
                tüm süreç profesyonel ekiplerimiz tarafından yönetilir.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Hızlı Kurulum", desc: "2-6 saat içinde profesyonel kurulum" },
                { icon: "🛡️", title: "Güvenlik", desc: "TS EN standartlarına uygun ekipman" },
                { icon: "🌍", title: "Türkiye Geneli", desc: "81 ilde kurulum desteği" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ OPTIMIZED TENT TYPES */}
        <section id="cadir-cesitleri" className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Çadır <span className="text-blue-600">Çeşitlerimiz</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Her etkinlik türüne özel tasarlanmış çadır çözümlerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {TENT_TYPES.map((tent, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={tent.image}
                      alt={tent.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{tent.title}</h3>
                      <p className="text-white/90 text-sm">{tent.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                        {tent.price}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {tent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
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

        {/* ✅ COMBINED TECHNICAL SPECS & USE CASES */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Teknik Özellikler</h2>
                <div className="space-y-6">
                  {TECHNICAL_FEATURES.map((spec, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{spec.category}</h3>
                      <ul className="space-y-2">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Alanları</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {USE_CASES.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{useCase.icon}</span>
                        <span className="text-gray-800 font-medium text-sm">{useCase.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-4">Hızlı Bilgiler</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-blue-800">Kurulum Süresi</div>
                      <div className="text-blue-700">2-4 saat</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800">Rüzgar Dayanımı</div>
                      <div className="text-blue-700">90 km/s</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800">Garanti</div>
                      <div className="text-blue-700">7/24 Destek</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800">Teslimat</div>
                      <div className="text-blue-700">Tüm Türkiye</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ OPTIMIZED GALLERY */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proje <span className="text-blue-600">Galerimiz</span>
              </h2>
              <p className="text-lg text-gray-600">
                Gerçekleştirdiğimiz başarılı çadır kurulum projelerinden örnekler
              </p>
            </div>

            <Suspense fallback={<SectionSkeleton />}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {["1.webp", "2.webp", "3.webp", "4.webp"].map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
                    <OptimizedImage
                      src={`/img/cadir/${image}`}
                      alt={`Çadır kurulum projesi ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* ✅ OPTIMIZED FAQ */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan <span className="text-blue-600">Sorular</span>
              </h2>
              <p className="text-lg text-gray-600">
                Çadır kiralama sürecinde en çok merak edilen sorular
              </p>
            </div>

            <div className="space-y-6">
              {FAQ_ITEMS.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Başka Sorunuz Mu Var?</h3>
                <p className="text-blue-800 mb-6">7/24 canlı destek ekibimiz sorularınızı yanıtlamak için hazır</p>
                <ContactCTA center={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ✅ OPTIMIZED RELATED SERVICES */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tamamlayıcı <span className="text-blue-600">Hizmetlerimiz</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/podyum-kiralama", title: "Podyum", icon: "📐" },
                { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️" },
                { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵" },
                { href: "/sahne-kiralama", title: "Sahne", icon: "🎪" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ OPTIMIZED CTA SECTION */}
        <section className="py-16 bg-blue-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hemen <span className="text-yellow-300">Teklif Alın</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Etkinliğiniz için en uygun çadır çözümünü sunalım. 2 saat içinde detaylı teklif hazırlıyoruz.
            </p>

            <ContactCTA center={true} />

            <div className="mt-8 bg-blue-700/50 rounded-lg p-4 border border-blue-500 max-w-2xl mx-auto">
              <p className="text-blue-100 text-sm">
                <strong>⏱️ Hızlı Yanıt:</strong> Mesai saatleri içinde tüm çadır kiralama taleplerinize 
                2 saat içinde detaylı teklif sunuyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
