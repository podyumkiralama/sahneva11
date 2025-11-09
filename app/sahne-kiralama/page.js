// app/sahne-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";

export const metadata = {
  title: "Sahne Kiralama & Profesyonel Sahne Kurulum Hizmetleri | Sahneva",
  description: "Konser, konferans, lansman, miting ve festival etkinlikleri için anahtar teslim sahne kiralama. Truss, podyum, LED ekran, ses ve ışık sistemleri. 81 ilde profesyonel hizmet.",
  alternates: {
    canonical: `${ORIGIN}/sahne-kiralama`,
    languages: {
      "tr-TR": `${ORIGIN}/sahne-kiralama`,
      "x-default": `${ORIGIN}/sahne-kiralama`,
    },
  },
  openGraph: {
    title: "Profesyonel Sahne Kiralama & Kurulum Hizmetleri | Sahneva",
    description: "Modüler sahne sistemleri, truss rigging, LED ekran ve profesyonel ses-ışık çözümleri. Kurulum, operasyon ve söküm dahil.",
    url: `${ORIGIN}/sahne-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/sahne/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Profesyonel Sahne Kiralama Hizmetleri - Konser sahnesi ve LED ekran kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesyonel Sahne Kiralama & Kurulum Hizmetleri | Sahneva",
    description: "Konser, konferans ve etkinlikler için profesyonel sahne çözümleri.",
    images: [`${ORIGIN}/img/sahne/hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const HERO = {
  src: "/img/sahne/hero.webp",
  alt: "Profesyonel sahne kurulumu: truss sistemleri, LED ekran ve ışık performansı ile donatılmış konser sahnesi",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const waText = "Merhaba%2C+sahne+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkonferans%2Flansman%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Katilimci+sayisi%3A+%5Bxxx%5D%2C+Tahmini+sahne+olcusu%3A+%5Bm²%5D.";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Sahne Kiralama", item: `${ORIGIN}/sahne-kiralama` },
      ],
    },
    {
      "@type": "Service",
      name: "Profesyonel Sahne Kiralama & Kurulum Hizmetleri",
      description: "Konser, konferans, lansman, miting ve festival etkinlikleri için truss, podyum, LED ekran, ses ve ışık sistemleri ile anahtar teslim sahne çözümleri.",
      areaServed: "TR",
      provider: {
        "@type": "Organization",
        name: "Sahneva",
        telephone: "+905453048671",
        address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
        url: ORIGIN,
        logo: `${ORIGIN}/logo.png`,
      },
      serviceType: "StageRental",
      url: `${ORIGIN}/sahne-kiralama`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "180",
        bestRating: "5",
      },
    },
    {
      "@type": "Product",
      name: "Profesyonel Sahne Paketleri",
      description: "Modüler sahne sistemleri, truss rigging ve profesyonel ekipman çözümleri",
      offers: {
        "@type": "AggregateOffer",
        offerCount: "3",
        lowPrice: "15000",
        highPrice: "75000",
        priceCurrency: "TRY",
      }
    },
  ],
};

// Verileri ayrı bir nesnede tutalım
const PAGE_DATA = {
  hero: {
    title: "Profesyonel Sahne Kiralama",
    subtitle: "Konser • Konferans • Lansman • Miting • Festival",
    stats: [
      { value: "300+", label: "Sahne Kurulumu" },
      { value: "50+", label: "Konser Projesi" },
      { value: "81", label: "İlde Hizmet" },
      { value: "8+", label: "Yıllık Deneyim" },
    ],
  },
  packages: [
    {
      name: "Mini Sahne — 16 m²",
      includes: [
        "8 × (2×1 m) podyum – 16 m²",
        "Yükseklik 40 cm, kaymaz kaplama",
        "6 m düz truss arka fon",
        "2 LED bar + 2 spot",
        "Kurulum, test ve söküm",
      ],
      note: "Toplantı, söyleşi ve butik iç mekân etkinlikleri.",
      price: "15.000 TL",
    },
    {
      name: "Standart Sahne — 24 m²",
      includes: [
        "12 × (2×1 m) podyum – 24 m²",
        "Yükseklik 60 cm, ön etek kapama",
        "U şeklinde 12 m truss",
        "4 hareketli başlık + 6 wash",
        "2+1 hoparlör, dijital mikser, kablosuz mikrofon",
        "Kurulum, canlı teknik yönetim, söküm",
      ],
      note: "Kurumsal lansman, söyleşi+performans, AVM etkinlikleri.",
      price: "25.000 TL",
    },
    {
      name: "Konser Sahnesi — 48 m²",
      includes: [
        "24 × (2×1 m) podyum – 48 m² (örn. 8×6 m)",
        "Yükseklik 80–100 cm, rampa/korkuluk",
        "Ön kiriş 12 m + yan kule 8 m truss",
        "Line array PA, monitörler, backline altyapı",
        "LED ekran (örn. 5×3 m) + scaler",
        "Işık: hareketli başlıklar, wash, blinder, haze",
        "Kurulum, soundcheck, canlı yönetim, söküm",
      ],
      note: "Konser, festival, açık alan yüksek katılımlı etkinlikler.",
      price: "50.000 TL+",
    },
  ],
  features: [
    {
      icon: "🔄",
      title: "Modüler Tasarım",
      description: "1×1 / 2×1 panellerle hızlı kurulum",
      details: ["Hızlı montaj", "Esnek konfigürasyon", "Mekana uyum"],
    },
    {
      icon: "🛡️",
      title: "Güvenlik",
      description: "Korkuluk, rampa, kaymaz kaplama",
      details: ["CE belgeli", "Statik hesaplama", "Profesyonel rigging"],
    },
    {
      icon: "🎨",
      title: "Görsellik",
      description: "LED ekran & sahne tekstili",
      details: ["Yüksek çözünürlük", "Özel tasarım", "Marka entegrasyonu"],
    },
    {
      icon: "⚡",
      title: "Tam Hizmet",
      description: "Kurulum + canlı yönetim + söküm",
      details: ["Anahtar teslim", "Teknik ekip", "7/24 destek"],
    },
  ],
  useCases: [
    {
      icon: "🎵",
      title: "Konser & Müzik Festivalleri",
      description: "Ana sahne, alt sahne ve akustik performanslar için profesyonel çözümler",
      features: [
        "Yüksek kapasiteli line array ses sistemleri",
        "Hareketli ışık başlıkları ve lazer efektleri",
        "Sahne monitör sistemleri ve backline altyapı",
        "Sanatçı yeşil odası ve backstage alanları"
      ],
    },
    {
      icon: "💼",
      title: "Kurumsal Konferans & Toplantılar",
      description: "Şirket içi toplantılar, yıllık genel kurullar ve sektör konferansları",
      features: [
        "Temiz ve profesyonel sahne tasarımı",
        "Yüksek çözünürlüklü LED ekranlar",
        "Kablosuz mikrofon ve simultane çeviri sistemleri",
        "Sahne arkası hazırlık ve VIP alanları"
      ],
    },
    {
      icon: "🚀",
      title: "Ürün Lansmanı & Tanıtım",
      description: "Yeni ürün ve hizmetlerin tanıtıldığı etkileyici lansman etkinlikleri",
      features: [
        "Özel tasarım sahne ve dekorasyon",
        "3D mapping ve projeksiyon yüzeyleri",
        "Interaktif ekranlar ve dokunmatik duvarlar",
        "Medya duvarları ve sosyal wall entegrasyonu"
      ],
    },
    {
      icon: "🏆",
      title: "Ödül Törenleri & Galalar",
      description: "Şık ve görkemli ödül törenleri, yılbaşı partileri ve özel galalar",
      features: [
        "Kırmızı halı ve fotoğraf duvarı kurulumu",
        "Özel aydınlatma ve dekor tasarımı",
        "Sahne üstü ödül sunum alanları",
        "VIP resepsiyon ve kokteyl alanı"
      ],
    },
    {
      icon: "🎓",
      title: "Mezuniyet & Okul Etkinlikleri",
      description: "Mezuniyet törenleri, yılsonu gösterileri ve okul festivalleri",
      features: [
        "Güvenli ve ergonomik sahne tasarımı",
        "Öğrenci performansları için uygun altyapı",
        "Sahne arkası hazırlık odaları",
        "Aile ve misafirler için oturma düzeni"
      ],
    },
    {
      icon: "🛍️",
      title: "AVM & Perakende Etkinlikleri",
      description: "Alışveriş merkezlerinde düzenlenen promosyon ve marka etkinlikleri",
      features: [
        "Hızlı kurulum ve söküm",
        "Yüksek ses seviyesi kontrollü sistemler",
        "Marka renklerine özel aydınlatma",
        "Mobil ve taşınabilir sahne çözümleri"
      ],
    }
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="ld-json-sahne"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO - DÜZELTİLMİŞ */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[72vh]"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            className="object-cover"
            sizes={HERO.sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-950 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-purple-900/50" aria-hidden="true" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/25 mb-8">
            <span className="relative flex w-3 h-3" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
            </span>
            <span className="text-sm font-semibold">Türkiye Geneli Profesyonel Hizmet</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
            {PAGE_DATA.hero.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light mb-8">
            {PAGE_DATA.hero.subtitle}
            <span className="block mt-2">
              Profesyonel ekip ve son teknoloji ekipmanlarla anahtar teslim çözümler
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={`https://wa.me/905453048671?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp üzerinden sahne kiralama teklifi al"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <span aria-hidden="true">💬</span> 
              <span className="ml-2">Hemen Teklif Al</span>
            </Link>

            <Link
              href="#paketler"
              title="Sahne kiralama paketleri bölümüne git"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <span aria-hidden="true">🎯</span> 
              <span className="ml-2">Paketlerimiz</span>
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center items-center gap-6 text-white text-sm drop-shadow" aria-label="Şirket başarı istatistikleri">
            {PAGE_DATA.hero.stats.map((stat, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {index === 0 && "⭐"}
                  {index === 1 && "🏆"}
                  {index === 2 && "🚀"}
                  {index === 3 && "💼"}
                </span>
                <span>
                  <span className="sr-only">{stat.label}: </span>
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ÖNE ÇIKAN ÖZELLİKLER - DÜZELTİLMİŞ */}
      <section
        className="py-16 bg-gradient-to-b from-white to-blue-50/30"
        aria-labelledby="ozellikler-baslik"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="ozellikler-baslik"
              className="text-3xl md:text-5xl font-black mb-4 text-gray-900"
            >
              Öne Çıkan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Özellikler
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Profesyonel sahne çözümlerimizle etkinliklerinize değer katıyoruz
            </p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PAGE_DATA.features.map((feature) => {
              const id = `ftr-${slugify(feature.title)}`;
              return (
                <li key={id}>
                  <article
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 group hover:shadow-xl hover:scale-105 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    aria-labelledby={id}
                    tabIndex={0}
                  >
                    <div className="text-3xl mb-3" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <h3
                      id={id}
                      className="text-xl font-black mb-2 text-gray-900"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"
                            aria-hidden="true"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* KULLANIM ALANLARI - DÜZELTİLMİŞ */}
      <section
        id="hizmetler"
        className="py-16 bg-gradient-to-b from-white to-blue-50/30"
        aria-labelledby="kullanim-alanlari-baslik"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="kullanim-alanlari-baslik"
              className="text-3xl md:text-5xl font-black mb-4 text-gray-900"
            >
              Kullanım{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Alanları
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Her türlü etkinlik için profesyonel ve anahtar teslim sahne çözümleri
            </p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PAGE_DATA.useCases.map((service) => {
              const id = `svc-${slugify(service.title)}`;
              return (
                <li key={id}>
                  <article
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 group hover:shadow-xl hover:scale-105 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    aria-labelledby={id}
                    tabIndex={0}
                  >
                    <div className="text-3xl mb-3" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3
                      id={id}
                      className="text-xl font-black mb-2 text-gray-900"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link
                        href={`https://wa.me/905453048671?text=${encodeURIComponent(`Merhaba, ${service.title} için sahne kiralama teklifi almak istiyorum.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full font-semibold px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-white"
                        aria-label={`${service.title} için WhatsApp'tan teklif al`}
                      >
                        <span aria-hidden="true">💬</span>
                        <span className="ml-2">Bu Etkinlik İçin Teklif Al</span>
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PAKETLER - DÜZELTİLMİŞ */}
      <section
        id="paketler"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="paketler-baslik"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="paketler-baslik" className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              Hazır{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Paketler
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ölçülere, etkinlik türüne ve mekân şartlarına göre paket içerikleri uyarlanır.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {PAGE_DATA.packages.map((pkg, index) => (
              <article 
                key={pkg.name} 
                className={`rounded-2xl border bg-white p-6 group hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
                  index === 1 ? 'ring-2 ring-blue-500 scale-105' : 'border-gray-200'
                }`}
                tabIndex={0}
                aria-labelledby={`pkg-${index}-title`}
              >
                <div className="text-center mb-4">
                  <h3 id={`pkg-${index}-title`} className="text-xl font-black text-gray-900">{pkg.name}</h3>
                  <div className="text-2xl font-black text-blue-600 mt-2" aria-label={`Fiyat: ${pkg.price}`}>
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    {pkg.note}
                  </p>
                )}
                <div className="flex gap-2">
                  <Link 
                    href="/iletisim" 
                    className="flex-1 text-center rounded-lg bg-black text-white px-4 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-black"
                    aria-label={`${pkg.name} paketi için teklif al`}
                  >
                    Teklif Al
                  </Link>
                  <Link 
                    href="/led-ekran-kiralama" 
                    className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-gray-500"
                    aria-label="LED ekran kiralama hizmetleri"
                  >
                    LED Ekran
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DİĞER BÖLÜMLER DE BENZER ŞEKİLDE DÜZELTİLMELİ */}

      {/* CTA - DÜZELTİLMİŞ */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div 
            className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-center text-white md:flex-row md:text-left"
            role="region"
            aria-labelledby="cta-heading"
          >
            <div>
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-black mb-2">
                {PAGE_DATA.hero.title} için hızlı teklif ister misiniz?
              </h2>
              <p className="text-blue-100 max-w-2xl">
                81 ilde profesyonel sahne kurulum hizmeti. Hemen iletişime geçin, etkinliğiniz için özel çözüm sunalım.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/iletisim"
                className="rounded-2xl bg-white px-6 py-3 font-bold text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 text-center focus:outline-2 focus:outline-offset-2 focus:outline-white"
                aria-label="İletişim sayfasına git"
              >
                İletişime Geç
              </Link>
              <a
                href={`https://wa.me/905453048671?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white px-6 py-3 font-bold text-white hover:bg-white/20 hover:scale-105 transform transition-all duration-300 text-center focus:outline-2 focus:outline-offset-2 focus:outline-white"
                aria-label="WhatsApp üzerinden iletişime geç"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
