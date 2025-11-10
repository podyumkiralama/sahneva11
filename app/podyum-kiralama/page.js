// app/podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba%2C+podyum+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Flansman%2Fdugun%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Podyum+olcusu%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true" />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  )
});

/* ================== META ================== */
export const metadata = {
  title: "Podyum Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
  description: "Modüler podyum sistemleri, 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları. Konser, düğün, lansman etkinlikleri için profesyonel çözümler.",
  keywords: "podyum kiralama, podyum sahne kiralama, modüler podyum, sahne podyum platform, podyum fiyatları, istanbul podyum kiralama, podyum kurulumu, etkinlik podyumu",
  alternates: { canonical: `${ORIGIN}/podyum-kiralama` },
  openGraph: {
    title: "Podyum Kiralama | Profesyonel Sahne Çözümleri",
    description: "Konser, lansman ve düğünler için podyum sahne kiralama. Modüler 1×1 & 2×1 paneller, kaymaz kaplama ve profesyonel kurulum.",
    url: `${ORIGIN}/podyum-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [{ 
      url: `${ORIGIN}/img/hizmet-podyum.webp`, 
      width: 1200, 
      height: 630, 
      alt: "Sahneva Podyum Kiralama - Profesyonel Sahne Çözümleri" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podyum Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
    description: "Modüler podyum sistemleri, 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları.",
    images: [`${ORIGIN}/img/hizmet-podyum.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-image-preview": "large", 
      "max-snippet": -1, 
      "max-video-preview": -1 
    },
  },
};

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s.toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/hizmet-podyum.webp",
  alt: "Profesyonel podyum kurulumu - Konser sahnesinde büyük podyum ve ışıklandırma",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🏗️",
    title: "Modüler Podyum Sistemleri",
    description: "1×1 ve 2×1 paneller ile esnek ve hızlı kurulum çözümleri",
    features: ["1×1 & 2×1 paneller", "Modüler tasarım", "Hızlı kurulum", "Esnek konfigürasyon"],
  },
  {
    icon: "🛡️",
    title: "Güvenlik Sistemleri",
    description: "Kaymaz kaplama, korkuluk ve rampalar ile güvenli kullanım",
    features: ["Kaymaz kaplama", "Kenar korkulukları", "Engelli rampaları", "Stabil yapı"],
  },
  {
    icon: "🎪",
    title: "Profesyonel Kurulum",
    description: "Deneyimli ekip ile profesyonel kurulum ve söküm hizmetleri",
    features: ["Uzman kurulum ekibi", "Hızlı montaj", "Yerinde dengeleme", "Profesyonel söküm"],
  },
  {
    icon: "🧵",
    title: "Halı & Skört Sistemleri",
    description: "Estetik görünüm için halı kaplama ve skört opsiyonları",
    features: ["Halı kaplama", "Skört sistemleri", "Çeşitli renkler", "Profesyonel görünüm"],
  },
  {
    icon: "⚡",
    title: "Teknik Altyapı",
    description: "Kablo kanalları, aydınlatma ve ses sistemleri entegrasyonu",
    features: ["Kablo kanalları", "Aydınlatma desteği", "Ses sistemi entegrasyonu", "Güç dağıtım"],
  },
  {
    icon: "🔧",
    title: "Özel Çözümler",
    description: "Özel tasarım, markalama ve kişiye özel podyum çözümleri",
    features: ["Özel tasarım", "Markalama", "Kişiye özel çözümler", "Kreatif tasarımlar"],
  },
];

const USE_CASES = [
  { 
    icon: "🎵", 
    text: "Konser, festival ve sahne performansları",
    desc: "Ana sahne podyumları ve performans alanları"
  },
  { 
    icon: "💼", 
    text: "Kurumsal lansman ve toplantılar",
    desc: "Sunum podyumları ve konuşmacı platformları"
  },
  { 
    icon: "💒", 
    text: "Düğün ve özel davet organizasyonları",
    desc: "Nikah podyumları ve dans platformları"
  },
  { 
    icon: "🎓", 
    text: "Mezuniyet ve ödül törenleri",
    desc: "Protokol podyumları ve ödül platformları"
  },
  { 
    icon: "🏛️", 
    text: "Belediye ve resmi törenler",
    desc: "Açılış podyumları ve tören platformları"
  },
  { 
    icon: "🛍️", 
    text: "AVM ve fuar etkinlikleri",
    desc: "Geçici sahne ve performans platformları"
  },
];

// Paket verileri
const PACKAGES = [
  {
    id: "mini-podyum",
    name: "Mini Podyum — 12 m²",
    badge: "Küçük Etkinlik",
    specs: {
      area: 12,
      dimensions: "3×4 m",
      height: "40 cm",
      panels: "6 × (1×2 m) panel"
    },
    includes: [
      "6 × (1×2 m) panel – toplam 12 m²",
      "Yükseklik: 40 cm",
      "Kaymaz kaplama",
      "Kurulum + söküm",
    ],
    note: "İç mekân konuşma/mini performanslar için ideal.",
  },
  {
    id: "orta-podyum",
    name: "Orta Podyum — 24 m²",
    badge: "Popüler",
    specs: {
      area: 24,
      dimensions: "4×6 m",
      height: "60 cm",
      panels: "12 × (1×2 m) panel"
    },
    includes: [
      "12 × (1×2 m) panel – toplam 24 m²",
      "Yükseklik: 60 cm",
      "Kaymaz kaplama, merdiven",
      "Kurulum + söküm + yerinde dengeleme",
    ],
    note: "Kurumsal sahneler ve canlı performanslar için.",
  },
  {
    id: "pro-podyum",
    name: "Pro Podyum — 48 m²",
    badge: "Profesyonel",
    specs: {
      area: 48,
      dimensions: "6×8 m",
      height: "80-100 cm",
      panels: "24 × (1×2 m) panel"
    },
    includes: [
      "24 × (1×2 m) panel – toplam 48 m²",
      "Yükseklik: 80–100 cm",
      "Kaymaz kaplama, merdiven, rampa, korkuluk",
      "Kurulum + söküm + çevre etek/brandalama",
    ],
    note: "Büyük konser/miting sahneleri için.",
  },
];

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[80vh]" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image 
          src={HERO.src} 
          alt={HERO.alt} 
          fill 
          priority 
          className="object-cover"
          sizes={HERO.sizes}
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white py-12">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">İstanbul Geneli Profesyonel Kurulum</span>
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl">
          Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Podyum Kiralama</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-4">
          Konser • Düğün • Lansman • Festival • Kurumsal Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-6">
          1×1 ve 2×1 modüler paneller, kaymaz kaplama ile 
          <span className="font-semibold text-white"> profesyonel sahne çözümleri</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp üzerinden hemen teklif alın"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 shadow-lg"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-2">💬</span> 
            <span className="text-base">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#paketler"
            title="Paketlerimiz hakkında daha fazla bilgi edinin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 shadow-lg"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-2">🎯</span> 
            <span className="text-base">Paketleri Gör</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">⭐</span>
            <div className="text-xl font-black text-white">4.9/5</div>
            <div className="text-white/80 text-sm">183+ Değerlendirme</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🏆</span>
            <div className="text-xl font-black text-white">300+</div>
            <div className="text-white/80 text-sm">Proje</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🚀</span>
            <div className="text-xl font-black text-white">81 İl</div>
            <div className="text-white/80 text-sm">Hizmet</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-blue-50/50" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hizmetler-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum kiralama hizmetlerimiz: modüler sistemler, güvenlik çözümleri ve profesyonel kurulum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <div key={id} className="group">
                <article 
                  className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  aria-labelledby={id}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 id={id} className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Paketler ================== */
function Packages() {
  const formatTRY = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);

  // Basit fiyatlandırma (gerçek projede API'den gelecek)
  const packagePrices = {
    "mini-podyum": 8500,
    "orta-podyum": 16500,
    "pro-podyum": 28500
  };

  return (
    <section id="paketler" className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="paketler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="paketler-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Hazır <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Paketler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyacınıza uygun, anahtar teslim podyum çözümleri
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="group">
              <div className={`bg-white rounded-3xl border-2 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
                pkg.badge === "Popüler" 
                  ? "border-blue-500 ring-4 ring-blue-500/20 transform scale-105 group-hover:scale-110" 
                  : "border-gray-100 group-hover:scale-105"
              }`}>
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-8 text-white relative overflow-hidden">
                  {pkg.badge && (
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold ${
                      pkg.badge === "Popüler" ? "bg-orange-500" :
                      pkg.badge === "Profesyonel" ? "bg-blue-600" : "bg-green-500"
                    }`}>
                      {pkg.badge}
                    </div>
                  )}
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {pkg.id === "mini-podyum" && "💼"}
                    {pkg.id === "orta-podyum" && "🏆"}
                    {pkg.id === "pro-podyum" && "🚀"}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 text-blue-100 text-sm">
                    <span>{pkg.specs.dimensions}</span>
                    <span>•</span>
                    <span>{pkg.specs.area} m²</span>
                    <span>•</span>
                    <span>{pkg.specs.height}</span>
                  </div>
                  <p className="text-blue-100 text-lg mt-2">{pkg.note}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true" />
                      Paket İçeriği
                    </h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fiyat */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        Günlük Kira (İstanbul)
                      </div>
                      <div className="text-3xl font-black text-gray-900 mt-2">
                        {formatTRY(packagePrices[pkg.id])}
                        <span className="text-sm text-gray-500 font-normal ml-2">+ KDV</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href={`${WHATSAPP}&package=${encodeURIComponent(pkg.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center font-bold px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500"
                    role="button"
                  >
                    <span aria-hidden="true" className="text-xl mr-2">💬</span>
                    <span>Bu Paket için Teklif Al</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  { 
    src: "/img/galeri/podyum-kiralama-1.webp", 
    alt: "Konser sahnesinde kurulmuş büyük podyum, profesyonel ışıklandırma ile aydınlatılmış" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-2.webp", 
    alt: "Düğün organizasyonunda şık nikah podyumu, dekoratif süslemeler ile bezenmiş" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-3.webp",
    alt: "Kurumsal etkinlikte sunum podyumu, modern tasarım ve markalama" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-4.webp",
    alt: "Festival sahnesinde yüksek podyum, geniş performans alanı" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-5.webp", 
    alt: "Açılış töreni podyumu, protokol ve konuşmacılar için hazırlanmış" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-6.webp", 
    alt: "Fuar alanında modüler podyum sistemi, hızlı kurulum ve taşınabilirlik" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-7.webp", 
    alt: "Fuar alanında modüler podyum sistemi, hızlı kurulum ve taşınabilirlik" 
  },
  { 
    src: "/img/galeri/podyum-kiralama-8.webp", 
    alt: "Fuar alanında modüler podyum sistemi, hızlı kurulum ve taşınabilirlik" 
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Proje <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Galerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı podyum kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-3">📸</span>
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "panel",
      title: "Panel Sistemleri",
      description: "1×1 m ve 2×1 m modüler paneller ile esnek çözümler",
      features: ["1×1 m paneller", "2×1 m paneller", "Modüler tasarım", "Hızlı kurulum"]
    },
    {
      category: "guvenlik",
      title: "Güvenlik Sistemleri",
      description: "Kaymaz kaplama ve güvenlik ekipmanları ile güvenli kullanım",
      features: ["Kaymaz kaplama", "Kenar korkulukları", "Engelli rampaları", "Merdiven sistemleri"]
    },
    {
      category: "kaplama",
      title: "Kaplama Seçenekleri",
      description: "Halı, skört ve özel kaplamalar ile estetik çözümler",
      features: ["Halı kaplama", "Skört sistemleri", "Özel baskılar", "Çoklu renk seçenekleri"]
    },
    {
      category: "kurulum",
      title: "Kurulum Sistemleri",
      description: "Profesyonel kurulum, yerinde dengeleme ve optimizasyon",
      features: ["Profesyonel kurulum", "Yerinde dengeleme", "Hızlı montaj", "Güvenlik testleri"]
    },
    {
      category: "yukseklik",
      title: "Yükseklik Seçenekleri",
      description: "40cm'den 100cm'ye kadar farklı yükseklik seçenekleri",
      features: ["40 cm standart", "60 cm orta", "80-100 cm profesyonel", "Ayarlanabilir ayaklar"]
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve acil müdahale hizmetleri",
      features: ["7/24 teknik destek", "Acil müdahale ekibi", "Yedek parça stoğu", "Uzaktan danışmanlık"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="altyapi-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji podyum sistemleri ve profesyonel teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "panel" && "🏗️"}
                    {item.category === "guvenlik" && "🛡️"}
                    {item.category === "kaplama" && "🧵"}
                    {item.category === "kurulum" && "⚡"}
                    {item.category === "yukseklik" && "📏"}
                    {item.category === "destek" && "📞"}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "300+", label: "Başarılı Proje", icon: "🏆" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "81", label: "İlde Hizmet", icon: "🗺️" },
    { value: "5+", label: "Yıl Deneyim", icon: "⭐" },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white" aria-label="Başarı İstatistiklerimiz">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group" role="group" aria-label={`${stat.label}: ${stat.value}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-lg font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="kullanim-alanlari-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-alanlari-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alanları</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Podyum çözümlerimizin tercih edildiği başlıca etkinlik türleri ve özel çözümlerimiz
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="bilgi-rehber-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bilgi-rehber-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Bilgi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profesyonel Rehber</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum sistemleri ve etkinlik planlama hakkında uzman görüşleri ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">📚 Kapsamlı Rehber</span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">⭐ Uzman Görüşü</span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">🎯 Pratik Çözümler</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Podyum Kiralama: Etkinlik Başarınız İçin Profesyonel Sahne Çözümleri
                </h3>
                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Modüler podyum sistemleri, güvenlik standartları ve profesyonel kurulum ile etkinliklerinizde mükemmel performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span className="bg-blue-100 text-blue-600 rounded-2xl p-3" aria-hidden="true">🏗️</span>
                      Modüler Podyum Sistemleri
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>, Türkiye genelinde{" "}
                      <Link href="/podyum-kiralama" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4">
                        profesyonel podyum kiralama
                      </Link>{" "}
                      hizmetleriyle kurumsal standartta çözümler sunmaktadır.
                    </p>
                    <p>
                      Etkinliğiniz ister konser sahnesi, ister kurumsal lansman olsun; detaylı teknik keşif, 
                      podyum optimizasyonu, profesyonel kurulum ve canlı operasyon dahil{" "}
                      <strong className="text-gray-900">anahtar teslim çözümler</strong> sunuyoruz.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span className="bg-purple-100 text-purple-600 rounded-2xl p-3" aria-hidden="true">🛡️</span>
                      Güvenlik ve Standartlar
                    </h4>
                    <p>
                      Tüm podyum sistemlerimiz kaymaz kaplama, kenar korkulukları ve stabil yapı ile 
                      en yüksek güvenlik standartlarına uygun olarak tasarlanmıştır.
                    </p>
                    <p>
                      1×1 m ve 2×1 m modüler panel seçeneklerimizle, mekan özelliklerine ve etkinlik türüne 
                      göre optimize edilmiş çözümler sunarak hem güvenlik hem de fonksiyonellik sorunlarını ortadan kaldırıyoruz.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">💡</span> 
                    Teknik Seçim Stratejisi
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Podyum seçiminde etkinlik türü ve izleyici sayısı en kritik faktördür. Küçük etkinlikler (50-100 kişi) 
                    için 12-24 m², orta ölçekli etkinlikler (100-300 kişi) için 24-48 m², büyük etkinlikler (300+ kişi) 
                    için 48+ m² podyum alanı öneriyoruz. Açık hava etkinliklerinde ise rüzgar yükü ve zemin stabilitesi 
                    öncelikli değerlendirilmelidir.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span className="bg-green-100 text-green-600 rounded-2xl p-3" aria-hidden="true">🚀</span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        icon: "🎯", 
                        title: "Doğru Boyut Seçimi", 
                        desc: "Etkinlik türüne ve izleyici sayısına göre optimize edilmiş podyum boyutları" 
                      },
                      { 
                        icon: "📊", 
                        title: "Güvenlik Optimizasyonu", 
                        desc: "Kaymaz kaplama, korkuluk ve stabilite testleri ile maksimum güvenlik" 
                      },
                      { 
                        icon: "🔒", 
                        title: "Kurulum Standartları", 
                        desc: "Profesyonel kurulum, yerinde dengeleme ve güvenlik kontrolleri" 
                      },
                      { 
                        icon: "🎭", 
                        title: "Estetik Çözümler", 
                        desc: "Halı, skört ve markalama ile bütünsel görsel etki" 
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" aria-hidden="true">
                            {item.icon}
                          </span>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                  <h5 className="font-black text-yellow-700 text-lg mb-3 flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">💎</span>
                    Neden Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>5+ yıllık deneyim, 300+ başarılı proje ve 81 ilde hizmet</strong> ile 
                    podyum kiralama konusunda güvenilir çözüm ortağınız. En son teknoloji ekipman, 
                    uzman ekip ve 7/24 teknik destek garantisi.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Yan Makaleler */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Güvenlik Sistemleri ve Standartlar
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Profesyonel podyum güvenliği için kritik unsurlar ve standartlar
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Podyum güvenliği sadece yapısal stabilite değil, aynı zamanda kullanıcı 
                  deneyimi ve acil durum planlamasını da kapsar. Tüm sistemlerimiz TS EN 13200 
                  sahne güvenlik standartlarına uygun olarak tasarlanmıştır.
                </p>
                <p>
                  Kaymaz kaplama, kenar korumaları, engelli rampaları ve acil çıkış planlaması 
                  ile her türlü etkinlik için güvenli çözümler sunuyoruz.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span className="bg-purple-100 text-purple-600 rounded-xl p-2" aria-hidden="true">🛡️</span>
                    Güvenlik Standartları
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      Maksimum 500 kg/m² yük kapasitesi
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      Kaymaz kaplama (R10-R11 standardı)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      110 cm yükseklikte korkuluk zorunluluğu
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      Acil çıkış ve yangın güvenliği planlaması
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Etkinlik Türlerine Özel Çözümler
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Her etkinlik türüne özel podyum stratejileri ve teknik çözümler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-600 rounded-xl p-2" aria-hidden="true">🎵</span>
                      Konser & Festival
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Yüksek stabilite, geniş performans alanı, kablo kanalları, profesyonel ışık/ses entegrasyonu
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-600 rounded-xl p-2" aria-hidden="true">💼</span>
                      Kurumsal Etkinlikler
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Şık görünüm, markalama imkanı, konuşmacı dostu tasarım, profesyonel sunum alanı
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-600 rounded-xl p-2" aria-hidden="true">💒</span>
                      Düğün & Özel Davet
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Dekoratif kaplamalar, nikah podyumu, dans platformu, estetik detaylar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
function FAQ() {
  const faqs = [
    { 
      q: "Podyum kiralama fiyatları ne kadar?", 
      a: "Podyum kiralama fiyatları alan büyüklüğüne ve yüksekliğine göre değişmektedir. Mini podyum (12 m²) 8.500 TL, orta podyum (24 m²) 16.500 TL, pro podyum (48 m²) 28.500 TL'den başlayan fiyatlarla. Profesyonel kurulum ve teslimat hizmetleri paket fiyatlarına dahildir." 
    },
    { 
      q: "Podyum kurulumu ne kadar sürer?", 
      a: "Standart bir podyum kurulumu 2-6 saat arasında tamamlanır. 12 m²'ye kadar küçük kurulumlar 2-3 saat, 12-24 m² orta ölçekli kurulumlar 3-4 saat, 24 m²+ büyük kurulumlar ise 4-6 saat sürmektedir. Kompleks rigging gerektiren projelerde bu süre 8 saate kadar çıkabilir." 
    },
    { 
      q: "Hangi panel sistemlerini kullanıyorsunuz?", 
      a: "1×1 m ve 2×1 m modüler panel sistemleri kullanıyoruz. Düzensiz zeminlerde 1×1 m paneller, düz zeminlerde ise 2×1 m paneller tercih ediyoruz. Her iki panel de kaymaz kaplama, alüminyum karkas ve çelik bağlantı elemanları ile maximum güvenlik sunar." 
    },
    { 
      q: "Açık hava etkinlikleri için uygun mu?", 
      a: "Evet, tüm podyum sistemlerimiz açık hava kullanımına uygundur. Rüzgar yükü hesapları, zemin stabilite analizleri ve su geçirmez kaplamalar ile açık hava etkinlikleri için güvenli çözümler sunuyoruz. Ancak şiddetli fırtına ve kasırga gibi ekstrem hava koşullarında güvenlik önlemi olarak kullanıma ara verilmesini öneriyoruz." 
    },
  ];
  
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="sss-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Podyum kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-6" role="list" aria-label="Sık sorulan sorular listesi">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary 
                className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
                role="button"
                aria-expanded="false"
                tabIndex={0}
              >
                <span className="pr-4">{faq.q}</span>
                <span 
                  aria-hidden="true" 
                  className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  ⌄
                </span>
              </summary>
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500" role="region">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            title="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-3">📚</span> 
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    { 
      href: "/ses-isik-sistemleri", 
      title: "Ses & Işık Sistemleri", 
      icon: "🎵", 
      desc: "Profesyonel ses ve ışık sistemleri kiralama" 
    },
    { 
      href: "/sahne-kiralama", 
      title: "Sahne Kiralama", 
      icon: "🛠️", 
      desc: "Portatif ve modüler sahne sistemleri kiralama" 
    },
    { 
      href: "/led-ekran-kiralama", 
      title: "LED Ekran Kiralama", 
      icon: "🖥️", 
      desc: "Profesyonel LED ekran ve video wall sistemleri" 
    },
    { 
      href: "/masa-sandalye-kiralama", 
      title: "Masa Sandalye Kiralama", 
      icon: "🪑", 
      desc: "Profesyonel masa ve sandalye kiralama çözümleri" 
    },
  ];
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30" 
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="tamamlayici-hizmetler-baslik" 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full" 
            aria-hidden="true" 
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div 
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" 
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            Bu bölümde podyum kurulumunuzu tamamlayacak diğer hizmetlerimiz bulunmaktadır. 
            Her bir hizmet kartına tıklayarak veya klavye ile seçerek ilgili sayfaya gidebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 id="cta-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel Podyum Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun podyum sistemlerini sunalım. Ücretsiz keşif, profesyonel danışmanlık ve 
              rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
                role="button"
              >
                <span aria-hidden="true" className="text-xl mr-3">📞</span> 
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
                role="button"
              >
                <span aria-hidden="true" className="text-xl mr-3">💬</span> 
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>
            <div className="mt-8 text-blue-200 text-lg" role="contentinfo">
              📍 81 ilde hizmet • ⏰ 7/24 teknik destek • ⭐ 5+ yıl deneyim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { 
            "@type": "ListItem", 
            position: 1, 
            name: "Anasayfa", 
            item: `${ORIGIN}/` 
          },
          { 
            "@type": "ListItem", 
            position: 2, 
            name: "Podyum Kiralama", 
            item: `${ORIGIN}/podyum-kiralama` 
          },
        ],
      },
      {
        "@type": "Service",
        name: "Podyum Kiralama Hizmeti",
        description: "Profesyonel podyum kiralama hizmeti. Modüler podyum sistemleri, 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları ile Türkiye genelinde hizmet.",
        provider: {
          "@type": "Organization",
          name: "Sahneva",
          telephone: "+905453048671",
          address: { 
            "@type": "PostalAddress", 
            addressLocality: "İstanbul", 
            addressCountry: "TR" 
          },
          url: ORIGIN,
          logo: `${ORIGIN}/img/logo.png`,
        },
        areaServed: "TR",
        serviceType: "EventProduction",
        offers: {
          "@type": "Offer",
          description: "Profesyonel podyum kiralama hizmeti"
        },
        url: `${ORIGIN}/podyum-kiralama`,
        aggregateRating: { 
          "@type": "AggregateRating", 
          ratingValue: "4.9", 
          reviewCount: "183", 
          bestRating: "5" 
        },
      },
      {
        "@type": "WebPage",
        name: "Podyum Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
        description: "Modüler podyum sistemleri, 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları. Konser, düğün, lansman etkinlikleri için profesyonel çözümler.",
        url: `${ORIGIN}/podyum-kiralama`,
        mainEntity: {
          "@type": "Service",
          name: "Podyum Kiralama"
        }
      }
    ],
  };

  return (
    <Script
      id="ld-json-podyum"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Technical />
      <StatsBand />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <CTA />
    </>
  );
}
