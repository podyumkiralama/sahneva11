// app/kurumsal-organizasyon/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

export const revalidate = 1800;

const ORIGIN = "https://www.sahneva.com";

export const metadata = {
  title:
    "Kurumsal Organizasyon & Etkinlik Yönetimi | Profesyonel Çözümler - Sahneva",
  description:
    "Toplantı, konferans, lansman, gala, miting ve roadshow'larda uçtan uca planlama. Sahne, podyum, LED ekran, ses-ışık ve yayın operasyonu tek ekipten.",
  alternates: {
    canonical: `${ORIGIN}/kurumsal-organizasyon`,
    languages: {
      "tr-TR": `${ORIGIN}/kurumsal-organizasyon`,
      "x-default": `${ORIGIN}/kurumsal-organizasyon`,
    },
  },
  openGraph: {
    title:
      "Kurumsal Organizasyon & Etkinlik Yönetimi | Sahneva",
    description:
      "Planlama, teknik tasarım ve yedekli altyapı ile risksiz kurumsal etkinlikler. Türkiye geneli kurulum ve profesyonel ekip.",
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Kurumsal Organizasyon Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kurumsal Organizasyon & Etkinlik Yönetimi | Sahneva",
    description:
      "Konferans, lansman, gala ve roadshow'larda profesyonel planlama ve operasyon.",
    images: [`${ORIGIN}/img/kurumsal/hero.webp`],
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
  src: "/img/kurumsal/hero.webp",
  alt:
    "Kurumsal organizasyon: sahne, LED ekran ve ışık kurulumu ile profesyonel etkinlik salonu",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const GALLERY = [
  { src: "/img/kurumsal/1.webp", alt: "Konferans sahnesi ve geniş LED ekran", category: "Konferans" },
  { src: "/img/kurumsal/2.webp", alt: "Kurumsal lansman sahnesi ve ışık koreografisi", category: "Lansman" },
  { src: "/img/kurumsal/3.webp", alt: "Mitingte dış mekan LED ve ses kuleleri", category: "Miting" },
  { src: "/img/kurumsal/4.webp", alt: "Fuar standında P2.5 iç mekan LED duvar", category: "Fuar" },
];

const SERVICES = [
  {
    icon: "🎤",
    title: "Konferans & Seminer",
    description: "Profesyonel ses sistemi, LED ekran ve aydınlatma çözümleri",
    features: [
      "Simultane çeviri sistemleri",
      "Kablosuz mikrofon sistemleri",
      "Kayıt ve canlı yayın",
      "Akustik optimizasyon",
    ],
  },
  {
    icon: "🚀",
    title: "Ürün Lansmanı",
    description: "Etkileyici görsel şovlar ve interaktif deneyimler",
    features: [
      "3D mapping ve projeksiyon",
      "Özel sahne tasarımı",
      "Medya duvarları",
      "Interaktif ekranlar",
    ],
  },
  {
    icon: "🎭",
    title: "Gala & Ödül Töreni",
    description: "Şık ve profesyonel organizasyon çözümleri",
    features: [
      "Kırmızı halı kurulumu",
      "Özel aydınlatma tasarımı",
      "Sahne dekorasyonu",
      "VIP alanları",
    ],
  },
  {
    icon: "🏟️",
    title: "Miting & Açık Hava",
    description: "Büyük kitlelere yönelik profesyonel çözümler",
    features: [
      "Yüksek parlaklıklı LED ekranlar",
      "Güçlü ses sistemleri",
      "Jeneratör ve altyapı",
      "Güvenlik önlemleri",
    ],
  },
  {
    icon: "🛣️",
    title: "Roadshow & Fuar",
    description: "Mobil ve esnek organizasyon çözümleri",
    features: [
      "Taşınabilir sahne sistemleri",
      "Hızlı kurulum çözümleri",
      "Marka entegrasyonu",
      "Interaktif standlar",
    ],
  },
  {
    icon: "💍",
    title: "Özel Etkinlikler",
    description: "Kurumsal düğün, yılbaşı partileri ve özel kutlamalar",
    features: [
      "Özel dekorasyon",
      "Tema tasarımı",
      "Eğlence ve şovlar",
      "Fotoğraf/video çekim",
    ],
  },
];

const TECHNICAL_SPECS = {
  led: "P2.5–P6 LED Ekranlar • 1500–6500 nit parlaklık",
  sound: "Line-array ses sistemleri • 360° ses dağıtımı",
  lighting: "LED wash ve spot ışıklar • Hareketli kafalar",
  stage: "Modüler sahne sistemleri • 30–200 m² kapasite",
  power: "Jeneratör ve güç dağıtımı • UPS sistemleri",
  broadcast: "4K kamera sistemleri • Canlı yayın ve kayıt",
};

const PROCESS = [
  {
    step: "01",
    title: "Keşif & Planlama",
    description: "Mekan analizi, ihtiyaç değerlendirmesi ve kapsamlı planlama",
    details: ["Mekan ölçümü", "Teknik gereksinimler", "Zaman planı", "Bütçe optimizasyonu"],
  },
  {
    step: "02",
    title: "Tasarım & Teklif",
    description: "Özel tasarım ve şeffaf fiyatlandırma",
    details: ["Sahne tasarımı", "Teknik çizimler", "Ekipman seçimi", "Detaylı teklif"],
  },
  {
    step: "03",
    title: "Kurulum & Test",
    description: "Profesyonel kurulum ve kapsamlı test süreci",
    details: ["Ekipman kurulumu", "Sistem entegrasyonu", "Test ve kalibrasyon", "Prova"],
  },
  {
    step: "04",
    title: "Operasyon & Destek",
    description: "Etkinlik süresince kesintisiz destek",
    details: ["Teknik operatörler", "Canlı destek", "Acil müdahale", "Güvenlik"],
  },
];

const FAQ = [
  { q: "Kurulum süresi ne kadar?", a: "Mekan erişimi ve kurguya bağlı olarak 4–12 saat; açık alan ve çok kameralı yayınlarda 1 güne çıkabilir. Acil kurulum hizmetimizle aynı gün teslimat sağlanabilir." },
  { q: "Yedek planınız var mı?", a: "İşlemci, sinyal hattı ve kritik mikrofonlarda yedekleme; jeneratör–şebeke transfer senaryoları hazırdır. Tüm kritik ekipmanlarda %100 yedek sistem bulunur." },
  { q: "Elektrik ihtiyacı nedir?", a: "LED ekranlar m² başına yaklaşık 300–800 W tüketir. Güç dağıtımı ve topraklama projeye göre planlanır. 1000 kişilik bir etkinlik için ortalama 60–100A elektrik ihtiyacı olur." },
  { q: "Canlı yayın ve kayıt desteği veriyor musunuz?", a: "Evet. Çok kamerayla miks, kayıt ve streaming; scaler ve senkron ölçümleri dahil uçtan uca operasyon sağlarız. 4K çözünürlükte canlı yayın ve profesyonel kayıt hizmeti sunuyoruz." },
  { q: "Hangi şehirlerde hizmet veriyorsunuz?", a: "Tüm Türkiye'de hizmet veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere 81 ilde profesyonel ekiplerimizle hizmetinizdeyiz." },
  { q: "Kaç kişiye kadar etkinlik organize ediyorsunuz?", a: "50 kişilik toplantılardan 50.000 kişilik açık hava konserlerine kadar her ölçekte etkinlik için profesyonel çözümler sunuyoruz." },
];

// helpers
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

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

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
            Anasayfa
          </Link>
        </li>
        <li className="flex items-center">
          <span className="mx-2" aria-hidden="true">›</span>
          <span className="text-blue-600 font-medium" aria-current="page">
            Kurumsal Organizasyon
          </span>
        </li>
      </ol>
    </nav>
  );
}

export default function Page() {
  // JSON-LD (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Kurumsal Organizasyon", item: `${ORIGIN}/kurumsal-organizasyon` },
        ],
      },
      {
        "@type": "Service",
        name: "Kurumsal Organizasyon & Etkinlik Yönetimi",
        description:
          "Toplantı, konferans, lansman, gala, miting ve roadshow'larda planlama, sahne–ses–ışık–LED–yayın altyapısı.",
        areaServed: "TR",
        provider: {
          "@type": "Organization",
          name: "Sahneva",
          telephone: "+905453048671",
          address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
          url: ORIGIN,
          logo: `${ORIGIN}/logo.png`,
        },
        serviceType: "EventProduction",
        url: `${ORIGIN}/kurumsal-organizasyon`,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "ItemList",
        name: "Kurumsal Organizasyon Hizmetlerimiz",
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            serviceType: "EventProduction",
            url: `${ORIGIN}/kurumsal-organizasyon#hizmetler`,
          },
        })),
      },
      {
        "@type": "CollectionPage",
        name: "Kurumsal Organizasyon Galerisi",
        url: `${ORIGIN}/kurumsal-organizasyon`,
        hasPart: GALLERY.map((g, i) => ({
          "@type": "ImageObject",
          position: i + 1,
          caption: g.alt,
          contentUrl: `${ORIGIN}${g.src}`,
        })),
      },
    ],
  };

  const waText =
    "Merhaba%2C+kurumsal+organizasyon+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonferans%2Flansman%2Fgala%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-json-kurumsal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SkipToMain />
      <Breadcrumb />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[72vh]"
        role="banner"
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
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-950 mix-blend-multiply"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-purple-900/50"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/25 mb-8">
            <span className="relative flex w-3 h-3" aria-hidden="true">
              <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
            </span>
            <span className="text-sm font-semibold">
              Türkiye Geneli Profesyonel Hizmet
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl"
          >
            Kurumsal Organizasyon
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Konferans • Lansman • Gala • Miting • Roadshow
            <span className="block mt-2">
              Profesyonel ekip ve son teknoloji ekipmanlarla anahtar teslim çözümler
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={`https://wa.me/905453048671?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              aria-describedby="wa-note"
              title="WhatsApp üzerinden teklif al"
            >
              💬 Hemen Teklif Al
            </Link>
            <span id="wa-note" className="sr-only">
              WhatsApp — bağlantı yeni sekmede açılır
            </span>

            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              title="Hizmetlerimiz bölümüne git"
            >
              🎯 Hizmetlerimiz
            </Link>
          </div>

          <ul
            className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm drop-shadow"
            aria-label="Güven göstergeleri"
          >
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">⭐</span>
              <span>4.9/5 (250+ Değerlendirme)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🏆</span>
              <span>500+ Başarılı Proje</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🚀</span>
              <span>81 İlde Hizmet</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-white" role="region" aria-label="Kurumsal organizasyon içeriği">

        {/* HİZMETLER */}
        <section
          id="hizmetler"
          className="py-16 bg-gradient-to-b from-white to-blue-50/30"
          aria-labelledby="hizmetler-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="hizmetler-baslik"
                className="text-3xl md:text-5xl font-black mb-4"
              >
                Kurumsal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Hizmetlerimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Her türlü kurumsal etkinlik için profesyonel ve anahtar teslim çözümler
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {SERVICES.map((service) => {
                const id = `svc-${slugify(service.title)}`;
                return (
                  <li key={id}>
                    <article
                      className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 group hover:shadow-xl hover:scale-105 transition-all duration-300"
                      aria-labelledby={id}
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
                      <p className="text-gray-600 mb-4 text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
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
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* TEKNİK ALTYAPI */}
        <section
          className="py-16 bg-gradient-to-b from-gray-50 to-white"
          aria-labelledby="altyapi-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="altyapi-baslik" className="text-3xl md:text-5xl font-black mb-4">
                Teknik{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Altyapımız
                </span>
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {Object.entries(TECHNICAL_SPECS).map(([key, value]) => (
                <li key={key}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 group hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                    <h3 className="font-bold text-gray-900 mb-3 capitalize text-lg">
                      {key === "led" && "🖥️ LED Sistemleri"}
                      {key === "sound" && "🔊 Ses Sistemleri"}
                      {key === "lighting" && "💡 Aydınlatma"}
                      {key === "stage" && "🎭 Sahne Sistemleri"}
                      {key === "power" && "⚡ Güç Altyapısı"}
                      {key === "broadcast" && "📹 Yayın Sistemleri"}
                    </h3>
                    <p className="text-gray-600 text-sm">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SÜREÇ */}
        <section
          className="py-16 bg-gradient-to-b from-white to-purple-50/30"
          aria-labelledby="surec-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="surec-baslik" className="text-3xl md:text-5xl font-black mb-4">
                Çalışma{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Sürecimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profesyonel ve sistematik yaklaşımımızla etkinliklerinizi güvenle planlıyoruz
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {PROCESS.map((step) => (
                <li key={step.step}>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-lg mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-black mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-1 text-left">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GALERİ (CaseGallery client bileşeni) */}
        <section
          className="py-16 bg-gradient-to-b from-white to-blue-50/30"
          aria-labelledby="galeri-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
                Proje{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Galerimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                500+ başarılı kurumsal etkinlikten öne çıkan projelerimiz
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <CaseGallery images={GALLERY} />
            </div>
          </div>
        </section>

        {/* İSTATİSTİKLER */}
        <section
          className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          aria-labelledby="istatistik-baslik"
        >
          <div className="container mx-auto px-4">
            <h2 id="istatistik-baslik" className="sr-only">
              İstatistikler
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl md:text-5xl font-black mb-2">500+</div>
                <div className="text-blue-100 text-sm">Başarılı Proje</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-2">50+</div>
                <div className="text-blue-100 text-sm">Kurumsal Müşteri</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-2">81</div>
                <div className="text-blue-100 text-sm">İlde Hizmet</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black mb-2">10+</div>
                <div className="text-blue-100 text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO MAKALESİ (tek uzun içerik) */}
        <section
          className="py-16 bg-gradient-to-b from-white to-gray-50"
          aria-labelledby="seo-article-heading"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
              <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-10 text-center">
                <h2 id="seo-article-heading" className="text-2xl md:text-3xl font-black tracking-tight drop-shadow">
                  Kurumsal Organizasyon ve Etkinlik Yönetiminde Profesyonel Çözümler
                </h2>
                <p className="mt-3 text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
                  Konferans • Seminer • Lansman • Gala • Miting • Roadshow
                </p>
              </header>

              <div className="p-6 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Kurumsal etkinlikler, şirketlerin marka değerini artırmak, hedef kitleleriyle
                    etkileşim kurmak ve kurumsal kimliklerini pekiştirmek için düzenlediği önemli
                    faaliyetlerdir. Konferans, seminer, lansman, gala, miting ve roadshow gibi
                    etkinlikler; doğru planlama ve profesyonel yönetim gerektirir. <strong>Sahneva</strong>,
                    10 yılı aşkın deneyimi ve 500&apos;den fazla başarılı projesiyle kurumsal
                    organizasyonlarda anahtar teslim çözümler sunmaktadır.
                  </p>

                  <h3 className="!mt-10 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
                    Kapsamlı Hizmet Anlayışı
                  </h3>
                  <p>
                    Sahneva, etkinlik öncesi keşif ve planlama aşamasından etkinlik sonrası toparlanma
                    sürecine kadar tüm süreçleri yönetir. Mekân keşfi, teknik ihtiyaçların
                    belirlenmesi, sahne tasarımı, LED ekran kurulumu, ses ve ışık sistemlerinin
                    entegrasyonu, canlı yayın ve kayıt hizmetleri uzman ekip tarafından planlanır.
                    Yedekli altyapı ve son teknoloji ekipmanlarla etkinliklerinizin kesintisiz ve
                    başarılı olması hedeflenir.
                  </p>

                  <h3 className="!mt-10 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
                    Teknoloji ve Kalite
                  </h3>
                  <p>
                    Kurumsal etkinliklerde görsellik ve ses kalitesi kritiktir. P2.5&apos;ten
                    P6&apos;ya piksel aralığına sahip yüksek çözünürlüklü LED ekranlar, line-array
                    ses sistemleri, profesyonel aydınlatma ve modüler sahne kurulumları ile
                    etkinliklerinize değer katarız. Canlı yayın ve kayıt tarafında 4K çözünürlük ve
                    çok kameralı miksaj imkânı sunar, kritik bileşenlerde yedekli kurulum
                    senaryoları uygularız.
                  </p>

                  <div className="mt-8 p-6 rounded-2xl border bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <h4 className="m-0 font-black text-blue-700 mb-3">📊 Kritik Başarı Faktörleri</h4>
                    <ul className="grid md:grid-cols-2 gap-2 !mt-3 !mb-0">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
                        Detaylı ön planlama ve risk analizi
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
                        Yedekli teknik altyapı ve ekipman
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
                        Deneyimli operasyon ekibi
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
                        Zaman yönetimi ve prosedür disiplini
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 rounded-xl border border-gray-200 p-5 bg-white flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="m-0 text-sm text-gray-700">
                    Kurumsal organizasyon ihtiyaçlarınız için Sahneva&apos;nın uzman ekibiyle
                    iletişime geçin; etkinliğinizi sorunsuz ve iddialı şekilde gerçekleştirelim.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={`https://wa.me/905453048671?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-semibold px-5 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/60"
                      aria-describedby="wa-note-2"
                    >
                      💬 WhatsApp
                    </Link>
                    <span id="wa-note-2" className="sr-only">
                      WhatsApp — bağlantı yeni sekmede açılır
                    </span>

                    <Link
                      href="tel:+905453048671"
                      className="inline-flex items-center justify-center font-semibold px-5 py-3 rounded-lg border-2 border-blue-600 text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                      title="Telefonla hemen ara"
                    >
                      📞 Ara
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-28 bg-gradient-to-b from-white to-gray-50"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="w-full min-h-[520px] md:min-h-[600px] rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 md:p-20 text-center shadow-2xl flex flex-col justify-center items-center">
              <h2
                id="cta-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-md"
              >
                Etkinliğinizi Profesyonellere Emanet Edin
              </h2>

              <p className="mt-6 text-lg md:text-2xl text-blue-100 mx-auto max-w-3xl leading-relaxed">
                Kurumsal imajınızı güçlendiren, akıcı bir etkinlik deneyimi için Sahneva yanınızda.
                Keşif, teknik tasarım ve akış planını <strong className="font-extrabold">48 saat</strong> içinde hazırlayalım.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href={`https://wa.me/905453048671?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-bold px-10 py-5 rounded-xl bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 text-lg"
                  aria-describedby="wa-note-3"
                >
                  💬 WhatsApp'tan Teklif Al
                </Link>
                <span id="wa-note-3" className="sr-only">
                  WhatsApp — bağlantı yeni sekmede açılır
                </span>

                <Link
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center font-bold px-10 py-5 rounded-xl border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 text-lg"
                  title="Telefonla hemen ara"
                >
                  📞 Hemen Ara
                </Link>
              </div>

              <div className="mt-10 mx-auto max-w-xl p-5 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm md:text-base font-medium">
                  <span className="text-green-300">🟢 Acil organizasyon:</span> Aynı gün kurulum için
                  <strong> +90 545 304 86 71</strong>'i arayın.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
