// app/podyum-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getService } from "@/lib/data";
import PriceEstimator from "@/components/PriceEstimatorPodyum";

// ⏱️ Saatlik yeniden üretim (statik + ISR)
export const revalidate = 3600;

const svc = getService("podyum");

// Güncel birim fiyatlar
const UNIT_PRICES = {
  platform_m2_week: 250,  // TL/m²/hafta
  carpet_m2_week: 120,    // TL/m²/hafta
  skirt_ml_week: 90,      // TL/mtül/hafta
  istanbul_setup: 8000,   // TL İstanbul içi nakliye + kurulum + söküm
};

// Paket (varsayılan dizilimler)
const CONTENT = {
  gallery: ["/img/podyum/1.webp", "/img/podyum/2.webp", "/img/podyum/3.webp"],
  packages: [
    {
      key: "mini",
      name: "Mini Podyum — 12 m²",
      layout: { width: 3, depth: 4, area: 12, perimeter: 14 },
      includes: [
        "6 × (1×2 m) panel – toplam 12 m²",
        "Yükseklik: 40 cm",
        "Kaymaz kaplama",
        "Kurulum + söküm",
      ],
      note: "İç mekân konuşma/mini performanslar için ideal.",
    },
    {
      key: "orta",
      name: "Orta Podyum — 24 m²",
      layout: { width: 4, depth: 6, area: 24, perimeter: 20 },
      includes: [
        "12 × (1×2 m) panel – toplam 24 m²",
        "Yükseklik: 60 cm",
        "Kaymaz kaplama, merdiven",
        "Kurulum + söküm + yerinde dengeleme",
      ],
      note: "Kurumsal sahneler ve canlı performanslar için.",
    },
    {
      key: "pro",
      name: "Pro Podyum — 48 m²",
      layout: { width: 6, depth: 8, area: 48, perimeter: 28 },
      includes: [
        "24 × (1×2 m) panel – toplam 48 m²",
        "Yükseklik: 80–100 cm",
        "Kaymaz kaplama, merdiven, rampa, korkuluk",
        "Kurulum + söküm + çevre etek/brandalama",
      ],
      note: "Büyük konser/miting sahneleri için.",
    },
  ],
};

// Erişilebilirlik Bileşenleri
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

function AccessibleCTA({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  ariaLabel,
  ...props 
}) {
  const baseStyles = "font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50";
  
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

// Yardımcılar
function priceBase(area) {
  return area * UNIT_PRICES.platform_m2_week;
}
function priceCarpet(area) {
  return area * UNIT_PRICES.carpet_m2_week;
}
function priceSkirt(perimeter) {
  return perimeter * UNIT_PRICES.skirt_ml_week;
}
function formatTRY(n) {
  try {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} TL`;
  }
}

export const metadata = {
  title: "Podyum Kiralama | Sahneva - Profesyonel Sahne ve Podyum Çözümleri",
  description: "Modüler podyum kiralama: 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları. İstanbul geneli profesyonel kurulum.",
  alternates: { canonical: "https://www.sahneva.com/podyum-kiralama" },
  keywords: [
    "podyum kiralama",
    "podyum sahne kiralama",
    "modüler podyum",
    "sahne podyum platform",
    "podyum fiyatları",
    "İstanbul podyum kiralama",
    "podyum kurulumu",
    "etkinlik podyumu"
  ],
  openGraph: {
    title: "Podyum Kiralama | Sahneva - Profesyonel Sahne Çözümleri",
    description: "Konser, lansman ve düğünler için podyum sahne kiralama. Modüler 1×1 & 2×1 paneller, kaymaz kaplama.",
    url: "https://www.sahneva.com/podyum-kiralama",
    type: "website",
    images: [
      {
        url: "/img/podyum/og-podyum.jpg",
        width: 1200,
        height: 630,
        alt: "Sahneva Podyum Kiralama - Profesyonel Sahne Çözümleri",
      },
    ],
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const title = "Profesyonel Podyum Kiralama";
  const desc = "Modüler podyum sistemleri ile her türlü etkinlik için profesyonel sahne çözümleri. 1×1 ve 2×1 paneller, kaymaz kaplama, güvenlik ekipmanları ve uzman kurulum ekibi.";
  const heroSrc = "/img/podyum/hero.webp";

  const enrichedPkgs = CONTENT.packages.map((p) => {
    const base = priceBase(p.layout.area);
    const carpet = priceCarpet(p.layout.area);
    const skirt = priceSkirt(p.layout.perimeter);
    return { 
      ...p, 
      price: { 
        base, 
        withCarpetAndSkirt: base + carpet + skirt, 
        carpet, 
        skirt,
        totalWithSetup: base + carpet + skirt + UNIT_PRICES.istanbul_setup
      } 
    };
  });

  return (
    <>
      <SkipToMain />
      
      {/* ✅ OPTIMIZED HERO SECTION */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroSrc}
            alt="Profesyonel podyum kiralama hizmeti - Modüler sahne sistemleri ve kurulum çözümleri"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></span>
              <span className="text-white/90 text-sm">İstanbul Geneli Hizmet</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Profesyonel <span className="text-blue-300">Podyum</span> Çözümleri
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Modüler podyum sistemleri, kaymaz kaplama ve profesyonel kurulum
              <br className="hidden md:block" />
              <strong>250 TL/m²'den başlayan fiyatlarla</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <AccessibleCTA
                href="#paketler"
                variant="primary"
                ariaLabel="Podyum paketlerimizi inceleyin"
              >
                Paketleri İnceleyin
              </AccessibleCTA>
              
              <AccessibleCTA
                href="tel:+905453048671"
                variant="secondary"
                ariaLabel="Hemen ara - Podyum kiralama için telefon: 905453048671"
              >
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="Telefon">📞</span>
                  Hemen Ara
                </span>
              </AccessibleCTA>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" tabIndex={-1}>
        {/* ✅ OPTIMIZED INTRODUCTION */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Etkinlikleriniz İçin <span className="text-blue-600">Güvenli Sahne</span>
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Konser, düğün, lansman veya kurumsal etkinlikleriniz için modüler podyum çözümleri sunuyoruz. 
                <strong className="text-blue-600"> Sahneva</strong> olarak, 1×1 ve 2×1 panellerle esnek kurulum, 
                kaymaz kaplama ve güvenlik ekipmanlarıyla profesyonel sahne deneyimi sağlıyoruz.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6" role="list">
              {[
                { icon: "⚡", title: "Hızlı Kurulum", desc: "2-6 saat içinde profesyonel kurulum" },
                { icon: "🛡️", title: "Güvenlik", desc: "Kaymaz kaplama ve güvenlik ekipmanları" },
                { icon: "🏗️", title: "Modüler Sistem", desc: "1×1 ve 2×1 panellerle esnek kurulum" }
              ].map((feature, index) => (
                <FocusableCard
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  role="listitem"
                >
                  <div className="text-3xl mb-3" role="img" aria-label={feature.title}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.desc}</p>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ HIZLI FİYAT HESAPLAMA */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hızlı <span className="text-blue-600">Fiyat Hesaplama</span>
              </h2>
              <p className="text-lg text-gray-600">
                Podyum ölçülerinizi girerek anında fiyat teklifi alın
              </p>
            </div>

            <FocusableCard className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              <PriceEstimator unitPrices={UNIT_PRICES} />
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>İstanbul içi nakliye, kurulum ve söküm: {formatTRY(UNIT_PRICES.istanbul_setup)}</strong><br />
                  *200 m²'ye kadar geçerlidir. Şehir dışı projeler için özel teklif alın.
                </p>
              </div>
            </FocusableCard>
          </div>
        </section>

        {/* ✅ PAKETLER VE FİYATLAR */}
        <section id="paketler" className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Podyum <span className="text-blue-600">Paketlerimiz</span>
              </h2>
              <p className="text-lg text-gray-600">
                İhtiyaçlarınıza uygun hazır paketler veya özel çözümler
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" role="list">
              {enrichedPkgs.map((pkg, index) => (
                <FocusableCard
                  key={pkg.key}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  role="listitem"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-sm opacity-90">
                      {pkg.layout.width}×{pkg.layout.depth} m • {pkg.layout.area} m²
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3 mb-6" role="list">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Platform:</span>
                          <span className="font-semibold">{formatTRY(pkg.price.base)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Halı + Skört:</span>
                          <span className="font-semibold">{formatTRY(pkg.price.withCarpetAndSkirt)}</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-2">
                          <span className="font-bold">Toplam (İstanbul):</span>
                          <span className="font-bold text-blue-600">{formatTRY(pkg.price.totalWithSetup)}</span>
                        </div>
                      </div>
                    </div>

                    {pkg.note && (
                      <p className="mt-4 text-sm text-gray-600 text-center">{pkg.note}</p>
                    )}

                    <div className="mt-6">
                      <AccessibleCTA
                        href="tel:+905453048671"
                        variant="primary"
                        className="w-full text-center justify-center"
                        ariaLabel={`${pkg.name} için hemen teklif alın`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span role="img" aria-label="Telefon">📞</span>
                          Hemen Teklif Al
                        </span>
                      </AccessibleCTA>
                    </div>
                  </div>
                </FocusableCard>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                *Fiyatlar haftalık kiralama içindir. Günlük kiralama için iletişime geçin.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ TEKNİK DETAYLAR */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Teknik Özellikler</h2>
                <div className="space-y-6">
                  <FocusableCard className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Panel Seçenekleri</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">1×1 m Paneller</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Düzensiz zeminlerde hassas dengeleme</li>
                          <li>• Dar alanlar için ideal</li>
                          <li>• Modüler esneklik</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">2×1 m Paneller</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Hızlı kurulum</li>
                          <li>• Geniş yüzeyler için</li>
                          <li>• Ana sahnelerde avantajlı</li>
                        </ul>
                      </div>
                    </div>
                  </FocusableCard>

                  <FocusableCard className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Güvenlik & Erişilebilirlik</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Kaymaz kaplama standart</li>
                      <li>• Kenar korkuluk opsiyonu</li>
                      <li>• Engelli erişimi için rampa</li>
                      <li>• Kablo kanalı ve işaretleme</li>
                    </ul>
                  </FocusableCard>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Popüler Ölçüler</h2>
                <PriceMatrix unitPrices={UNIT_PRICES} />
              </div>
            </div>
          </div>
        </section>

        {/* ✅ KULLANIM SENARYOLARI */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kullanım <span className="text-blue-600">Senaryoları</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8" role="list">
              {[
                {
                  title: "Kurumsal Lansman",
                  description: "Sunum ve demo çekimleri için 2×1 panellerle geniş yüzey, 40-60 cm yükseklik ve kablo yönetimi.",
                  features: ["Geniş yüzey", "Kablo yönetimi", "Profesyonel görünüm"]
                },
                {
                  title: "Düğün & Davet",
                  description: "Orkestra/DJ alanı ve dans pisti uyumu. 30-50 cm yükseklik ve estetik halı kaplama.",
                  features: ["Dans pisti uyumu", "Estetik kaplama", "Güvenli yüzey"]
                },
                {
                  title: "Konser & Tören",
                  description: "Büyük yüzeylerde hızlı kurulum, rampa/korkuluk ve yan platformlarla sahne önü/arka akış konforu.",
                  features: ["Hızlı kurulum", "Güvenlik ekipmanları", "Yan platformlar"]
                }
              ].map((scenario, index) => (
                <FocusableCard
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
                  role="listitem"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{scenario.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{scenario.description}</p>
                  <ul className="space-y-1" role="list">
                    {scenario.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ GALERİ */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proje <span className="text-blue-600">Galerimiz</span>
              </h2>
              <p className="text-lg text-gray-600">
                Gerçekleştirdiğimiz başarılı podyum kurulum projelerinden örnekler
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list">
              {CONTENT.gallery.map((src, index) => (
                <FocusableCard
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 group"
                  role="listitem"
                >
                  <OptimizedImage
                    src={src}
                    alt={`Podyum kurulum projesi ${index + 1} - Profesyonel sahne çalışmamız`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </FocusableCard>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ SIKÇA SORULAN SORULAR */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan <span className="text-blue-600">Sorular</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Podyum kiralama fiyatları nasıl hesaplanır?",
                  answer: "Alan (m²), yükseklik, aksesuarlar (korkuluk, rampa, skört, halı) ve nakliye esas alınır. Halı m², skört çevre metre üzerinden hesaplanır."
                },
                {
                  question: "Hangi panelleri kullanıyorsunuz?",
                  answer: "1×1 m ve 2×1 m modüler paneller. Düzensiz zeminde 1×1, ana sahnede 2×1 paneller önerilir."
                },
                {
                  question: "Kurulum ne kadar sürer?",
                  answer: "Standart 24-48 m² podyumlar çoğu mekânda aynı gün kurulur. Geniş alanlar ve gece mesaisi ek süre gerektirebilir."
                },
                {
                  question: "Halı ve skört zorunlu mu?",
                  answer: "Zorunlu değildir; görsel bütünlük ve güvenlik için önerilir. Fiyatlar opsiyon olarak ayrı hesaplanır."
                }
              ].map((faq, index) => (
                <FocusableCard
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </FocusableCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Başka Sorunuz Mu Var?</h3>
                <p className="text-white/90 mb-6">7/24 canlı destek ekibimiz sorularınızı yanıtlamak için hazır</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <AccessibleCTA
                    href="tel:+905453048671"
                    variant="white"
                    ariaLabel="Telefon ile hemen podyum kiralama danışmanlığı alın"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span role="img" aria-label="Telefon">📞</span>
                      Hemen Ara
                    </span>
                  </AccessibleCTA>
                  <AccessibleCTA
                    href="https://wa.me/905453048671"
                    variant="primary"
                    ariaLabel="WhatsApp üzerinden podyum kiralama teklifi alın"
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

        {/* ✅ İLGİLİ HİZMETLER */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tamamlayıcı <span className="text-blue-600">Hizmetlerimiz</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="navigation" aria-label="Tamamlayıcı hizmetler">
              {[
                { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🎪" },
                { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️" },
                { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵" },
                { href: "/cadir-kiralama", title: "Çadır Kiralama", icon: "🏕️" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                  aria-label={`${service.title} hizmeti sayfasına git`}
                >
                  <div className="text-2xl mb-2" role="img" aria-hidden="true">{service.icon}</div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ CTA SECTION */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hemen <span className="text-yellow-300">Podyum Kirala</span>
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Etkinliğiniz için en uygun podyum çözümünü sunalım. 2 saat içinde detaylı teklif hazırlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <AccessibleCTA
                href="tel:+905453048671"
                variant="white"
                ariaLabel="Hemen ara - Podyum kiralama için telefon: 905453048671"
              >
                <span className="flex items-center justify-center gap-2">
                  <span role="img" aria-label="Telefon">📞</span>
                  Hemen Ara
                </span>
              </AccessibleCTA>

              <AccessibleCTA
                href="https://wa.me/905453048671"
                variant="primary"
                ariaLabel="WhatsApp'tan podyum kiralama teklifi al"
              >
                <span className="flex items-center justify-center gap-2">
                  <span role="img" aria-label="WhatsApp">💬</span>
                  WhatsApp
                </span>
              </AccessibleCTA>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ 2 Saat İçinde Yanıt:</strong> Mesai saatleri içinde tüm podyum kiralama taleplerinize 
                2 saat içinde detaylı teklif ve profesyonel danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SchemaBlocks packages={CONTENT.packages} unitPrices={UNIT_PRICES} />
    </>
  );
}

/* ---------- Alt Bileşenler (Server) ---------- */
function PriceMatrix({ unitPrices }) {
  const PRESETS = [
    { w: 2, d: 5 },  // 10 m²
    { w: 3, d: 5 },  // 15 m²
    { w: 4, d: 5 },  // 20 m²
    { w: 4, d: 6 },  // 24 m²
    { w: 5, d: 6 },  // 30 m²
    { w: 5, d: 8 },  // 40 m²
    { w: 6, d: 10 }, // 60 m²
    { w: 8, d: 10 }, // 80 m²
  ];
  
  const rows = PRESETS.map(({ w, d }) => {
    const area = w * d;
    const perimeter = 2 * (w + d);
    const base = area * unitPrices.platform_m2_week;
    const carpet = area * unitPrices.carpet_m2_week;
    const skirt = perimeter * unitPrices.skirt_ml_week;
    const setup = unitPrices.istanbul_setup;
    return { 
      w, d, area, perimeter, base, 
      carpet, skirt, setup,
      total: base + carpet + skirt + setup 
    };
  });

  return (
    <FocusableCard className="overflow-x-auto rounded-2xl border bg-white">
      <table className="w-full text-sm" aria-label="Popüler podyum ölçüleri ve fiyatları">
        <caption className="sr-only">Popüler podyum ölçüleri ve haftalık kiralama fiyatları</caption>
        <thead>
          <tr className="text-left text-neutral-500 [&>th]:p-3 bg-gray-50">
            <th scope="col">Ölçü</th>
            <th scope="col">Alan</th>
            <th scope="col">Platform</th>
            <th scope="col">Halı</th>
            <th scope="col">Skört</th>
            <th scope="col">Kurulum</th>
            <th scope="col">Toplam</th>
          </tr>
        </thead>
        <tbody className="[&>tr>*]:p-3 [&>tr]:border-t">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td>{r.w}×{r.d} m</td>
              <td>{r.area} m²</td>
              <td>{formatTRY(r.base)}</td>
              <td>{formatTRY(r.carpet)}</td>
              <td>{formatTRY(r.skirt)}</td>
              <td>{formatTRY(r.setup)}</td>
              <td className="font-semibold text-blue-600">{formatTRY(r.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 border-t bg-gray-50">
        <p className="text-xs text-neutral-500">
          *Fiyatlar haftalıktır ve İstanbul içi nakliye, kurulum, söküm dahildir.
        </p>
      </div>
    </FocusableCard>
  );
}

/* ---------- SchemaBlocks ---------- */
function SchemaBlocks({ packages: pkgs, unitPrices }) {
  const SITE = "https://www.sahneva.com";
  const PAGE = `${SITE}/podyum-kiralama`;
  const LB_ID = `${SITE}/#localbusiness`;
  const SERVICE_ID = `${PAGE}#service`;
  const FAQ_ID = `${PAGE}#faq`;
  const BREAD_ID = `${PAGE}#breadcrumbs`;

  const offers = (pkgs || []).map((p) => {
    const area = p.layout.area;
    const perimeter = p.layout.perimeter;
    const priceNumber =
      area * unitPrices.platform_m2_week +
      area * unitPrices.carpet_m2_week +
      perimeter * unitPrices.skirt_ml_week +
      unitPrices.istanbul_setup;

    return {
      "@type": "Offer",
      name: p.name,
      description: `${p.layout.width}×${p.layout.depth} m (${p.layout.area} m²), çevre ${p.layout.perimeter} m. İstanbul içi nakliye, kurulum ve söküm dahil.`,
      priceCurrency: "TRY",
      price: String(priceNumber),
      availability: "https://schema.org/InStock",
      url: PAGE
    };
  });

  const faq = [
    {
      q: "Podyum kiralama fiyatları nasıl hesaplanır?",
      a: "Alan (m²), yükseklik, aksesuarlar (korkuluk, rampa, skört, halı) ve nakliye temel alınır. Halı m², skört çevre metre üzerinden hesaplanır."
    },
    {
      q: "Hangi panelleri kullanıyorsunuz?",
      a: "1×1 m ve 2×1 m modüler paneller. Düzensiz zeminde 1×1, ana sahnede 2×1 paneller önerilir."
    },
    {
      q: "Kurulum ne kadar sürer?",
      a: "Standart 24–48 m² podyumlar çoğu mekânda aynı gün kurulur. Geniş alanlar ve gece mesaisi ek süre gerektirebilir."
    }
  ];

  const ldService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": SERVICE_ID,
    serviceType: "Podyum Kiralama",
    name: "Profesyonel Podyum Kiralama",
    description: "Modüler 1×1 ve 2×1 panellerle podyum kiralama; kaymaz kaplama, rampa/korkuluk ve profesyonel kurulum. İstanbul geneli hizmet.",
    url: PAGE,
    areaServed: [
      { "@type": "Country", name: "TR" },
      { "@type": "City", name: "İstanbul" }
    ],
    provider: { "@id": LB_ID },
    offers: offers,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Podyum Paketleri (Haftalık)",
      itemListElement: offers
    }
  };

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": FAQ_ID,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const ldBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": BREAD_ID,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
      { "@type": "ListItem", position: 2, name: "Podyum Kiralama", item: PAGE }
    ]
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }} />
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
    </>
  );
}
