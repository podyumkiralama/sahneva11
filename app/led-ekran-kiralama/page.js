// app/led-ekran-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

// ⚡ Lazy loading components
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      <span aria-hidden="true">🖼️</span>
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

// ⚡ ISR - 30 dakika
export const revalidate = 1800;

// 📊 Premium içerik yapısı
const PREMIUM_CONTENT = {
  hero: {
    src: "/img/led/hero-premium.webp",
    alt:
      "Profesyonel LED Ekran Kiralama - Yüksek çözünürlüklü iç ve dış mekan LED ekran çözümleri",
    overlay: true,
  },
  features: [
    {
      icon: "🖥️",
      title: "4K Ultra HD",
      description: "P2-P6 piksel aralığı ile kristal netlik",
    },
    {
      icon: "☀️",
      title: "Yüksek Parlaklık",
      description: "Güneş altında dahi net görüntü (6500+ nit)",
    },
    {
      icon: "🌧️",
      title: "Suya Dayanıklı",
      description: "IP65 koruma ile tüm hava koşullarına uygun",
    },
    {
      icon: "⚡",
      title: "Hızlı Kurulum",
      description: "Profesyonel ekip ile 2-6 saatte montaj",
    },
  ],
  packages: [
    {
      id: "ic-mekan",
      name: "İç Mekân Pro Paket — P2.5 • 4×3 m",
      badge: "En Net Görüntü",
      specs: {
        pixel: "P2.5",
        size: "4×3 m",
        area: "12 m²",
        brightness: "1500 nit",
        resolution: "1600×1200 pixel",
      },
      includes: [
        "P2.5 iç mekân paneller (12 m²)",
        "Novastar işlemci + 4K scaler",
        "Zemin kurulum (ground stack)",
        "Kurulum, test ve teknik operasyon",
        "7/24 teknik destek",
      ],
      note:
        "Toplantı, fuar standı, sahne arkası sunumlar için ideal. Yakın mesafede mükemmel görüntü kalitesi.",
    },
    {
      id: "dis-mekan",
      name: "Dış Mekân Premium — P4 • 5×3 m",
      badge: "Çok Satan",
      specs: {
        pixel: "P4",
        size: "5×3 m",
        area: "15 m²",
        brightness: "5000 nit",
        resolution: "1250×750 pixel",
      },
      includes: [
        "P4 dış mekân paneller (15 m²)",
        "Yüksek parlaklık (5000 nit)",
        "Truss üzerinde asma sistemi",
        "İçerik yayın bilgisayarı + operatör",
        "IP65 su geçirmez koruma",
      ],
      note:
        "Açık hava lansman ve etkinlikleri için parlaklık garantili. Her türlü hava koşulunda güvenli kullanım.",
    },
    {
      id: "pro-studio",
      name: "Pro Studio Paket — P3.9 • 8×4.5 m",
      badge: "Premium",
      specs: {
        pixel: "P3.9",
        size: "8×4.5 m",
        area: "36 m²",
        brightness: "4500 nit",
        resolution: "2050×1150 pixel",
      },
      includes: [
        "P3.9 hibrit paneller (36 m²)",
        "3840 Hz tazeleme hızı",
        "Rigging (uçuş) donanımı + güvenlik",
        "Yedek güç kaynağı + yedek modül",
        "Canlı kamera miksaj ünitesi",
        "Profesyonel medya sunucu",
      ],
      note:
        "Konser, miting ve büyük sahneler için profesyonel kurulum. Kamera yayınları için titreşimsiz görüntü.",
    },
  ],
  gallery: [
    {
      src: "/img/led/1.webp",
      alt:
        "Konser sahnesinde kurulmuş büyük LED ekran, kalabalık önünde canlı performans gösterimi",
      category: "Konser",
    },
    {
      src: "/img/led/2.webp",
      alt:
        "Kurumsal etkinlikte kullanılan LED ekran, sunum yapılırken profesyonel aydınlatma ile aydınlatılmış",
      category: "Kurumsal",
    },
    {
      src: "/img/led/3.webp",
      alt:
        "Açık hava festivalinde kullanılan yüksek parlaklıklı LED ekran, gün ışığında net görüntü",
      category: "Festival",
    },
  ],
  technicalSpecs: {
    pixelRange: "P2.5 - P6",
    brightness: "İç: 800-1500 nit • Dış: 3500-6500+ nit",
    refreshRate: "1920-3840 Hz",
    ipRating: "Dış: IP65 (ön) / IP54 (arka) • İç: IP43+",
    powerConsumption: "İç: 300-500 W/m² • Dış: 500-800 W/m²",
    cabinetSize: "500×500 mm / 500×1000 mm",
  },
};

// 🏷️ Güncel fiyatlandırma
const PRICING = {
  p2_5: 2800,
  p3_9: 2200,
  p4: 1800,
  p6: 1200,
  setup: 15000,
  operator: 5000,
};

// 🎯 Premium Metadata
export const metadata = {
  title:
    "Premium LED Ekran Kiralama | 4K Çözünürlük & Profesyonel Kurulum - Sahneva",
  description:
    "P2.5-P6 LED ekran kiralama, 6500 nit parlaklık, IP65 koruma, profesyonel kurulum. Konser, fuar, lansman ve etkinlikleriniz için anahtar teslim çözümler.",
  alternates: {
    canonical: "https://www.sahneva.com/led-ekran-kiralama",
  },
  openGraph: {
    title: "Premium LED Ekran Kiralama - Sahneva",
    description:
      "4K çözünürlüklü LED ekran kiralama, yüksek parlaklık, profesyonel yayın ve teknik operasyon. İstanbul geneli 7/24 hizmet.",
    url: "https://www.sahneva.com/led-ekran-kiralama",
    siteName: "Sahneva",
    type: "website",
    images: [
      {
        url: "/img/led/og-premium.jpg",
        width: 1200,
        height: 630,
        alt:
          "Sahneva Premium LED Ekran Kiralama Hizmeti - Profesyonel LED ekran çözümleri",
      },
    ],
    locale: "tr_TR",
  },
  keywords: [
    "LED ekran kiralama",
    "led ekran fiyatları",
    "P2.5 P3.9 P4 led ekran",
    "dış mekan led ekran",
    "konser led ekran",
    "istanbul led ekran kiralama",
    "4k led ekran",
  ],
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
};

// 🎨 Ana sayfa bileşeni
export default function PremiumLedPage() {
  // 🎯 Erişilebilir buton stilleri (motion-safe ile)
  const buttonStyles = {
    primary:
      "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-900 motion-safe:focus:scale-105",
    secondary:
      "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 text-white motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 motion-safe:focus:scale-105",
    outline:
      "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 motion-safe:focus:scale-105",
    success:
      "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 text-white motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-900 motion-safe:focus:scale-105",
  };

  // 🧮 Fiyat hesaplama
  const calculatePackagePrice = (pkg) => {
    const area = parseFloat(pkg.specs.area);
    let basePrice;

    switch (pkg.specs.pixel) {
      case "P2.5":
        basePrice = area * PRICING.p2_5;
        break;
      case "P3.9":
        basePrice = area * PRICING.p3_9;
        break;
      case "P4":
        basePrice = area * PRICING.p4;
        break;
      default:
        basePrice = area * PRICING.p6;
    }

    return {
      base: Math.round(basePrice),
      setup: PRICING.setup,
      operator: PRICING.operator,
      total: Math.round(basePrice + PRICING.setup + PRICING.operator),
    };
  };

  const enrichedPackages = PREMIUM_CONTENT.packages.map((pkg) => ({
    ...pkg,
    pricing: calculatePackagePrice(pkg),
  }));

  const formatTRY = (amount) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 🎭 Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20"
        aria-labelledby="main-heading"
      >
        <div className="absolute inset-0">
          {/* Hero görseli */}
          <Image
            src={PREMIUM_CONTENT.hero.src}
            alt={PREMIUM_CONTENT.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-blue-900"
            style={{
              background:
                "linear-gradient(135deg, #1e40af 0%, #7c3aed 30%, #1e3a8a 70%, #0f172a 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-purple-900/40"
            aria-hidden="true"
          />

          {PREMIUM_CONTENT.hero.overlay && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-purple-900/60"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30 mb-10"
            role="status"
            aria-label="Hizmet durumu: İstanbul'da 7/24 Profesyonel Kurulum mevcut"
          >
            <span className="relative flex w-3 h-3">
              <span
                className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                aria-hidden="true"
              />
              <span
                className="relative inline-flex rounded-full w-3 h-3 bg-green-500"
                aria-hidden="true"
              />
            </span>
            <span className="text-sm font-semibold">
              İstanbul'da 7/24 Profesyonel Kurulum
            </span>
          </div>

          <h1
            id="main-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-2xl"
          >
            LED Ekran Çözümleri
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-10 drop-shadow-lg">
            P2.5-P6 piksel aralığı • 6500 nit parlaklık • IP65 koruma •
            <span className="block mt-3">
              4K çözünürlük & profesyonel yayın sistemleri
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#paketler"
              className={buttonStyles.primary}
              aria-label="LED ekran paketlerini inceleyin - Fiyatlar ve özellikler"
            >
              <span aria-hidden="true">🖥️</span>
              <span className="ml-2">Paketleri İncele</span>
            </Link>

            {/* TEL: harici link -> <a> */}
            <a
              href="tel:+905453048671"
              className={buttonStyles.success}
              aria-label="Hemen telefonla teklif alın - +90 545 304 86 71"
            >
              <span aria-hidden="true">📞</span>
              <span className="ml-2">Hemen Teklif Al</span>
            </a>

            <Link
              href="#teknoloji"
              className={buttonStyles.outline}
              aria-label="LED ekran teknolojileri hakkında bilgi alın"
            >
              <span aria-hidden="true">⚡</span>
              <span className="ml-2">Teknoloji</span>
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center items-center gap-8 text-white/90 text-sm drop-shadow"
            role="list"
            aria-label="Firma özellikleri"
          >
            <div className="flex items-center gap-2" role="listitem">
              <span aria-hidden="true">⭐</span>
              <span>4.9/5 (183 Değerlendirme)</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <span aria-hidden="true">🏆</span>
              <span>300+ Başarılı Proje</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <span aria-hidden="true">🚀</span>
              <span>2-6 Saatte Kurulum</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🏷️ Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Ana içeriğe atla
      </a>

      <main id="main-content" tabIndex={-1}>
        {/* ✨ Öne Çıkan Özellikler */}
        <section
          className="py-20 bg-gradient-to-b from-white to-blue-50/30"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                id="features-heading"
                className="text-3xl md:text-5xl font-black mb-6"
              >
                Neden{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Bizim LED'ler?
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                En son teknoloji LED ekranlar ve profesyonel ekip ile kalite
                garantisi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {PREMIUM_CONTENT.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center group hover:shadow-xl motion-safe:hover:scale-105 motion-safe:transition-all motion-safe:duration-300 motion-safe:focus-within:scale-105"
                  role="listitem"
                  tabIndex={0}
                >
                  <div
                    className="text-3xl mb-4 motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎪 Paketler Bölümü */}
        <section
          id="paketler"
          className="py-20 bg-gradient-to-b from-gray-50 to-blue-100/20"
          aria-labelledby="packages-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                id="packages-heading"
                className="text-3xl md:text-5xl font-black mb-6"
              >
                LED Ekran{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Paketleri
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                İhtiyacınıza özel hazırlanmış, anahtar teslim LED ekran çözümleri
              </p>
            </div>

            <div
              className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
              role="list"
              aria-label="LED ekran paketleri"
            >
              {enrichedPackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden group hover:shadow-2xl motion-safe:transition-all motion-safe:duration-500 ${
                    pkg.badge === "Çok Satan"
                      ? "ring-4 ring-blue-500/20 motion-safe:transform motion-safe:scale-105 motion-safe:hover:scale-110"
                      : "motion-safe:hover:-translate-y-2 motion-safe:focus:-translate-y-2"
                  }`}
                  role="listitem"
                  tabIndex={0}
                >
                  {pkg.badge && (
                    <div
                      className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-sm font-bold z-20 text-white shadow-lg motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-6 motion-safe:transition-all motion-safe:duration-300 ${
                        pkg.badge === "Çok Satan"
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : pkg.badge === "Premium"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600"
                          : "bg-gradient-to-r from-green-500 to-emerald-600"
                      }`}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6 text-white overflow-hidden motion-safe:group-hover:from-slate-800 motion-safe:group-hover:via-blue-800 motion-safe:group-hover:to-purple-800 motion-safe:transition-all motion-safe:duration-500">
                    <div className="absolute inset-0 opacity-10" aria-hidden="true">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16 motion-safe:group-hover:translate-x-12 motion-safe:transition-transform motion-safe:duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12 motion-safe:group-hover:-translate-x-8 motion-safe:transition-transform motion-safe:duration-700"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="text-3xl motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300"
                          aria-hidden="true"
                        >
                          {pkg.id === "ic-mekan" && "🏢"}
                          {pkg.id === "dis-mekan" && "🌆"}
                          {pkg.id === "pro-studio" && "🚀"}
                        </div>
                        <div className="text-right motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300">
                          <div className="text-2xl font-black text-blue-300">
                            {pkg.specs.area}
                          </div>
                          <div className="text-xs text-blue-200">TOPLAM ALAN</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-black mb-5 leading-tight border-b border-white/20 pb-4 motion-safe:group-hover:border-white/30 motion-safe:transition-colors motion-safe:duration-300">
                        {pkg.name.split("—")[0].trim()}
                        <span className="block text-blue-300 text-lg font-semibold mt-2 motion-safe:group-hover:text-blue-200 motion-safe:transition-colors motion-safe:duration-300">
                          {pkg.name.split("—")[1].trim()}
                        </span>
                      </h3>

                      <div className="grid grid-cols-2 gap-3 text-sm" role="list" aria-label="Paket özellikleri">
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm motion-safe:group-hover:bg-white/15 motion-safe:transition-all motion-safe:duration-300 motion-safe:transform motion-safe:group-hover:scale-105" role="listitem">
                          <div className="text-blue-300 text-xs mb-1 motion-safe:group-hover:text-blue-200 motion-safe:transition-colors motion-safe:duration-300">
                            ÖLÇÜ
                          </div>
                          <div className="font-bold text-white">
                            {pkg.specs.size}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm motion-safe:group-hover:bg-white/15 motion-safe:transition-all motion-safe:duration-300 motion-safe:transform motion-safe:group-hover:scale-105" role="listitem">
                          <div className="text-blue-300 text-xs mb-1 motion-safe:group-hover:text-blue-200 motion-safe:transition-colors motion-safe:duration-300">
                            PİKSEL
                          </div>
                          <div className="font-bold text-white">
                            {pkg.specs.pixel}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm motion-safe:group-hover:bg-white/15 motion-safe:transition-all motion-safe:duration-300 motion-safe:transform motion-safe:group-hover:scale-105" role="listitem">
                          <div className="text-blue-300 text-xs mb-1 motion-safe:group-hover:text-blue-200 motion-safe:transition-colors motion-safe:duration-300">
                            PARLAKLIK
                          </div>
                          <div className="font-bold text-white">
                            {pkg.specs.brightness}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm motion-safe:group-hover:bg-white/15 motion-safe:transition-all motion-safe:duration-300 motion-safe:transform motion-safe:group-hover:scale-105" role="listitem">
                          <div className="text-blue-300 text-xs mb-1 motion-safe:group-hover:text-blue-200 motion-safe:transition-colors motion-safe:duration-300">
                            ÇÖZÜNÜRLÜK
                          </div>
                          <div className="font-bold text-white">
                            {pkg.specs.resolution}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2 motion-safe:transition-colors motion-safe:duration-300">
                        <span
                          className="w-2 h-2 bg-blue-600 rounded-full motion-safe:group-hover:scale-150 motion-safe:transition-transform motion-safe:duration-300"
                          aria-hidden="true"
                        ></span>
                        Paket İçeriği
                      </h4>
                      <ul className="space-y-3" role="list">
                        {pkg.includes.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 text-sm p-2 rounded-lg hover:bg-blue-50 motion-safe:transition-all motion-safe:duration-300 motion-safe:group/item:hover:translate-x-1"
                            role="listitem"
                          >
                            <span
                              className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0 motion-safe:group-hover/item:bg-blue-600 motion-safe:group-hover/item:text-white motion-safe:transition-colors motion-safe:duration-300"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            <span className="motion-safe:group-hover/item:text-blue-800 motion-safe:transition-colors motion-safe:duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 motion-safe:transition-all motion-safe:duration-300"
                      role="note"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="text-blue-600 text-lg motion-safe:transform motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300"
                          aria-hidden="true"
                        >
                          💡
                        </span>
                        <p className="text-sm text-blue-800 flex-1">
                          {pkg.note}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm mb-6 motion-safe:group-hover:shadow-md motion-safe:group-hover:border-blue-200 motion-safe:transition-all motion-safe:duration-300">
                      <div className="text-center mb-5">
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                          HAFTALIK KİRA
                        </div>
                        <div className="text-3xl font-black text-gray-900 mt-2">
                          {formatTRY(pkg.pricing.total)}
                          <span className="text-sm text-gray-500 font-normal ml-2">
                            + KDV
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                              aria-hidden="true"
                            ></span>
                            LED Ekran Kiralama
                          </span>
                          <span className="font-semibold text-gray-900">
                            {formatTRY(pkg.pricing.base)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-600 flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 bg-green-500 rounded-full"
                              aria-hidden="true"
                            ></span>
                            Profesyonel Kurulum
                          </span>
                          <span className="font-semibold text-gray-900">
                            {formatTRY(pkg.pricing.setup)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600 flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                              aria-hidden="true"
                            ></span>
                            Teknisyen & Operatör
                          </span>
                          <span className="font-semibold text-gray-900">
                            {formatTRY(pkg.pricing.operator)}
                          </span>
                        </div>

                        <div className="mt-5 pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900 text-base">
                              Toplam (İstanbul)
                            </span>
                            <span className="font-black text-xl text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                              {formatTRY(pkg.pricing.total)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp CTA — harici link */}
                    <a
                      href={`https://wa.me/905453048671?text=Merhaba, ${encodeURIComponent(
                        pkg.name
                      )} hakkında detaylı bilgi ve teklif almak istiyorum.`}
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl w-full text-center block hover:from-blue-700 hover:to-purple-700 motion-safe:transition-all motion-safe:duration-500 motion-safe:transform motion-safe:hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 motion-safe:focus:scale-[1.02]"
                      aria-label={`${pkg.name} için WhatsApp üzerinden hemen teklif alın`}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span
                          className="text-lg motion-safe:group-hover/btn:scale-110 motion-safe:transition-transform motion-safe:duration-300"
                          aria-hidden="true"
                        >
                          💬
                        </span>
                        Hemen Teklif Al
                        <span
                          className="motion-safe:group-hover/btn:translate-x-2 motion-safe:transition-transform motion-safe:duration-300"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>

                      <div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 motion-safe:transform -skew-x-12 -translate-x-full motion-safe:group-hover/btn:translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
                        aria-hidden="true"
                      ></div>
                    </a>

                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        <span aria-hidden="true">📞</span>
                        <span className="sr-only">Telefon:</span>
                        <strong> 2 saat içinde</strong> detaylı teklif
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16 max-w-2xl mx-auto">
              <div
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                role="note"
              >
                <h4 className="font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                  💡 Önemli Notlar
                </h4>
                <p className="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-300">
                  • Fiyatlar günlük kiralama içindir. Haftalık ve aylık kiralama
                  için iletişime geçin.<br />
                  • Kurulum İstanbul içi geçerlidir. Şehir dışı projeler için özel
                  teklif oluşturulur.<br />
                  • Tüm ekipmanlar sigortalıdır ve teknik destek garantisi içerir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 🖼️ PROJE GALERİSİ */}
        <section
          className="py-20 bg-gradient-to-b from-white to-purple-50/30"
          aria-labelledby="gallery-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                id="gallery-heading"
                className="text-3xl md:text-5xl font-black mb-6"
              >
                Proje{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Galerimiz
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                300+ başarılı projemizden öne çıkan LED ekran kurulumları. Gerçek
                etkinliklerde çekilmiş profesyonel çözümlerimiz.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <CaseGallery images={PREMIUM_CONTENT.gallery} />
            </div>
          </div>
        </section>

        {/* 🛠️ Teknoloji ve Özellikler */}
        <section
          id="teknoloji"
          className="py-20 bg-white"
          aria-labelledby="technology-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                id="technology-heading"
                className="text-3xl md:text-5xl font-black mb-6"
              >
                LED Ekran{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Teknolojisi
                </span>
              </h2>
              <p className="text-lg text-gray-700">
                En son teknoloji ile donatılmış profesyonel çözümler
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <h3 className="text-2xl font-black mb-5 text-gray-900 hover:text-blue-700 transition-colors duration-300">
                  Teknik Özellikler
                </h3>
                <div className="space-y-4">
                  {Object.entries(PREMIUM_CONTENT.technicalSpecs).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 rounded-lg px-2 transition-all duration-300"
                      >
                        <span className="font-semibold text-gray-700 text-sm capitalize hover:text-blue-800 transition-colors duration-300">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors duration-300">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
                <h3 className="text-2xl font-black mb-5 text-gray-900 hover:text-purple-700 transition-colors duration-300">
                  Kullanım Alanları
                </h3>
                <div className="grid gap-4">
                  {[
                    { icon: "🎵", title: "Konser & Festival", desc: "Ana sahne ve yan ekranlar" },
                    { icon: "💼", title: "Kurumsal Etkinlik", desc: "Lansman ve toplantılar" },
                    { icon: "🏟️", title: "Spor Etkinlikleri", desc: "Stadyum ve fan zone" },
                    { icon: "🛍️", title: "AVM & Fuar", desc: "Reklam ve bilgilendirme" },
                    { icon: "🎬", title: "TV & Yayın", desc: "Canlı yayın ve prodüksiyon" },
                    { icon: "💒", title: "Özel Etkinlikler", desc: "Düğün ve kutlamalar" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md motion-safe:hover:scale-105 motion-safe:transition-all motion-safe:duration-300 group"
                    >
                      <div
                        className="text-xl motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm group-hover:text-purple-700 transition-colors duration-300">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📝 GELİŞTİRİLMİŞ SEO Makalesi */}
        <EnhancedLedSeoArticle />
      </main>

      {/* 🏷️ Zengin Snippet'lar */}
      <StructuredData packages={enrichedPackages} />
    </div>
  );
}

// 📝 GELİŞTİRİLMİŞ SEO Makalesi Bileşeni
function EnhancedLedSeoArticle() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="article-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 md:p-12 text-center">
            {/* H2: tek H1 kuralına uyum & 2025 */}
            <h2
              id="article-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight"
            >
              LED Ekran Kiralama 2025: Kapsamlı Rehber ve Uzman Tavsiyeleri
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Etkinlikleriniz için doğru LED ekran seçimi, kurulum süreçleri,
              maliyet analizi ve profesyonel çözümler hakkında her şey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm" role="list">
              <span className="bg-white/20 px-4 py-2 rounded-full" role="listitem">
                ✅ 10+ Yıllık Deneyim
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full" role="listitem">
                📊 300+ Başarılı Proje
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full" role="listitem">
                🏆 Teknoloji Lideri
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            {/* İçindekiler */}
            <div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-10 border border-blue-200"
              role="navigation"
              aria-label="Makale içindekiler"
            >
              <h3 className="text-xl font-black text-gray-900 mb-5 flex items-center gap-3">
                <span aria-hidden="true">📑</span>
                Bu Makalede Neler Bulacaksınız?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm" role="list">
                {[
                  "LED Ekran Teknolojisi ve Çeşitleri",
                  "Piksel Aralığı (Pitch) Seçimi Rehberi",
                  "İç/Dış Mekan LED Ekran Farkları",
                  "Maliyet ve Fiyatlandırma Analizi",
                  "Kurulum ve Teknik Gereksinimler",
                  "Sık Yapılan Hatalar ve Çözümleri",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3" role="listitem">
                    <span
                      className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bölüm 1 */}
            <section className="mb-14" aria-labelledby="section1-heading">
              <h3
                id="section1-heading"
                className="text-2xl md:text-3xl font-black mb-8 text-gray-900 border-b border-gray-200 pb-5"
              >
                🚀 LED Ekran Teknolojisi: 2025 Trendleri ve Yenilikler
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-xl font-bold mb-4 text-blue-600">
                    Piksel Teknolojisi Gelişmeleri
                  </h4>
                  <p className="text-gray-700 mb-5">
                    Günümüzde LED ekranlar, SMD (Surface Mounted Device) ve COB
                    (Chip on Board) teknolojileri ile üretiliyor. SMD teknolojisi
                    daha yaygınken, COB teknolojisi daha yüksek dayanıklılık ve
                    daha iyi ısı dağılımı sunuyor.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600" role="list">
                    <li className="flex items-center gap-2" role="listitem">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true"></span>
                      SMD: Daha ekonomik, geniş kullanım alanı
                    </li>
                    <li className="flex items-center gap-2" role="listitem">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden="true"></span>
                      COB: Daha dayanıklı, yüksek performans
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-xl font-bold mb-4 text-purple-600">
                    HDR ve Renk Teknolojileri
                  </h4>
                  <p className="text-gray-700 mb-5">
                    Yüksek Dinamik Aralık (HDR) teknolojisi, LED ekranlarda daha
                    canlı renkler ve daha derin kontrast sunuyor. 2025
                    trendleri arasında geniş renk gamı (DCI-P3) ve 10-bit renk
                    derinliği öne çıkıyor.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg" role="note">
                    <p className="text-sm text-purple-700 font-semibold">
                      💡 Uzman Tavsiyesi: Canlı renkler gerektiren etkinliklerde
                      HDR destekli LED ekranları tercih edin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bölüm 2 */}
            <section className="mb-14" aria-labelledby="section2-heading">
              <h3
                id="section2-heading"
                className="text-2xl md:text-3xl font-black mb-8 text-gray-900 border-b border-gray-200 pb-5"
              >
                📊 Piksel Aralığı (Pitch) Seçimi: Doğru Karar İçin Kapsamlı Rehber
              </h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                  <caption className="sr-only">
                    LED ekran piksel aralığı karşılaştırma tablosu
                  </caption>
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th scope="col" className="p-4 text-left">
                        Piksel Aralığı
                      </th>
                      <th scope="col" className="p-4 text-left">
                        İdeal İzleme Mesafesi
                      </th>
                      <th scope="col" className="p-4 text-left">
                        Kullanım Alanı
                      </th>
                      <th scope="col" className="p-4 text-left">
                        Ortalama Maliyet/m²
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        pitch: "P2.5",
                        distance: "2-8 metre",
                        usage: "Toplantı odaları, fuar standları",
                        cost: "2.800 TL",
                      },
                      {
                        pitch: "P3.9",
                        distance: "4-12 metre",
                        usage: "Konserler, konferanslar",
                        cost: "2.200 TL",
                      },
                      {
                        pitch: "P4",
                        distance: "6-18 metre",
                        usage: "Dış mekan etkinlikleri",
                        cost: "1.800 TL",
                      },
                      {
                        pitch: "P6",
                        distance: "10-30 metre",
                        usage: "Stadyumlar, büyük festivaller",
                        cost: "1.200 TL",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <th scope="row" className="p-4 font-semibold text-blue-600">
                          {row.pitch}
                        </th>
                        <td className="p-4">{row.distance}</td>
                        <td className="p-4">{row.usage}</td>
                        <td className="p-4 font-semibold text-green-600">
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                role="note"
              >
                <h4 className="text-lg font-bold mb-4 text-green-700 flex items-center gap-2">
                  <span aria-hidden="true">🎯</span>
                  Kritik Seçim İpuçları
                </h4>
                <div className="grid md:grid-cols-2 gap-5 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-3">
                      ✅ Doğru Seçim İçin:
                    </p>
                    <ul className="space-y-2 text-gray-600" role="list">
                      <li role="listitem">• İzleyici mesafesini doğru hesaplayın</li>
                      <li role="listitem">• İç mekan için P2.5-P4 aralığını düşünün</li>
                      <li role="listitem">• Dış mekan için en az 5000 nit parlaklık</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-3">
                      ❌ Kaçınılması Gerekenler:
                    </p>
                    <ul className="space-y-2 text-gray-600" role="list">
                      <li role="listitem">• Yanlış piksel aralığı seçimi</li>
                      <li role="listitem">• Yetersiz parlaklık</li>
                      <li role="listitem">• Kalitesiz işlemci seçimi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Bölüm 3 - Sık Sorulan Sorular */}
            <section className="mb-14" aria-labelledby="faq-heading">
              <h3
                id="faq-heading"
                className="text-2xl md:text-3xl font-black mb-8 text-gray-900 border-b border-gray-200 pb-5"
              >
                ❓ Sık Sorulan Sorular ve Uzman Cevapları
              </h3>

              <div className="grid md:grid-cols-2 gap-8" role="list">
                {[
                  {
                    question: "LED ekran kurulumu ne kadar sürer?",
                    answer:
                      "Standart kurulum 2-6 saat arasında tamamlanır. Büyük projelerde bu süre 24 saate kadar çıkabilir. Acil kurulum hizmetimizle aynı gün teslimat sağlanabilir.",
                  },
                  {
                    question: "Yağmurlu havada LED ekran kullanılabilir mi?",
                    answer:
                      "Evet, dış mekan LED ekranlarımız IP65 koruma sınıfına sahiptir. Bu, toza ve su jetlerine karşı tam koruma sağladığı anlamına gelir. Yağmurlu havada güvenle kullanılabilir.",
                  },
                  {
                    question: "LED ekran için elektrik ihtiyacı nedir?",
                    answer:
                      "LED ekranlar metrekaresine göre 300-800W arasında güç tüketir. 20m² bir ekran için yaklaşık 10-16A elektrik ihtiyacı olur. Profesyonel ekip güç hesaplamasını kurulum öncesi yapar.",
                  },
                  {
                    question: "Kontent hazırlama hizmetiniz var mı?",
                    answer:
                      "Evet, profesyonel grafik ekibimiz LED ekranınız için optimize edilmiş 4K içerikler hazırlayabilir. Ayrıca canlı yayın, kamera bağlantısı ve real-time grafik servisleri sunuyoruz.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                    role="listitem"
                  >
                    <h4 className="text-lg font-bold mb-4 text-gray-900 flex items-start gap-3">
                      <span className="text-blue-600 text-xl flex-shrink-0" aria-hidden="true">
                        Q:
                      </span>
                      {faq.question}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-green-600 text-lg flex-shrink-0 mt-0.5" aria-hidden="true">
                        A:
                      </span>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sonuç Bölümü */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-5">
                Profesyonel LED Ekran Çözümleri İçin Doğru Adrestesiniz
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                10+ yıllık deneyimimiz ve 300+ başarılı projemiz ile etkinlikleriniz
                için en uygun LED ekran çözümlerini sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* TEL: harici link -> <a> */}
                <a
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-gray-100 motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 motion-safe:focus:scale-105"
                  aria-label="Hemen telefonla teklif alın - +90 545 304 86 71"
                >
                  <span aria-hidden="true">📞</span>
                  <span className="ml-2">Hemen Teklif Al</span>
                </a>
                <Link
                  href="#paketler"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 motion-safe:focus:scale-105"
                  aria-label="LED ekran paketlerini inceleyin"
                >
                  <span aria-hidden="true">🖥️</span>
                  <span className="ml-2">Paketleri İncele</span>
                </Link>

                <div
                  className="mt-8 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-md mx-auto hover:bg-white/15 transition-all duration-300"
                  role="note"
                  aria-label="Acil durum notu"
                >
                  <p className="text-sm font-medium">
                    <span className="text-green-300" aria-hidden="true">🟢</span>
                    <span className="sr-only">Acil kurulum:</span>
                    <span className="ml-1">Acil kurulum: Aynı gün teslimat için </span>
                    <strong> +90 545 304 86 71</strong>'i arayın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// 🏷️ Structured Data Bileşeni
function StructuredData({ packages }) {
  const siteUrl = "https://www.sahneva.com";
  const pageUrl = `${siteUrl}/led-ekran-kiralama`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "LED Ekran Kiralama",
    name: "LED Ekran Kiralama Hizmeti",
    description:
      "P2.5-P6 LED ekran kiralama, 6500 nit parlaklık, IP65 koruma, profesyonel kurulum ve yayın çözümleri.",
    provider: {
      "@type": "Organization",
      name: "Sahneva",
      url: siteUrl,
      telephone: "+905453048671",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "LED Ekran Paketleri",
      itemListElement: packages.map((pkg, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: pkg.name,
        description: `${pkg.specs.area} LED ekran kiralama paketi - ${pkg.includes.join(
          ", "
        )}`,
        price: pkg.pricing.total,
        priceCurrency: "TRY",
        availability: "https://schema.org/InStock",
        url: pageUrl, // 🔗 ekledik
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "183",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "LED ekran kurulumu ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Standart bir LED ekran kurulumu 2-6 saat arasında tamamlanır. Büyük projelerde bu süre 24 saate kadar çıkabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Yağmurlu havada LED ekran kullanılabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Evet, dış mekan LED ekranlarımız IP65 koruma sınıfına sahiptir ve yağmurlu havada güvenle kullanılabilir.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "LED Ekran Kiralama",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
