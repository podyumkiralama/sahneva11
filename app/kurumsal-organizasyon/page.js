// app/kurumsal-organizasyon/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// CaseGallery import'un kalsın; ileride kullanırsan hazır
import CaseGallery from "@/components/CaseGallery";

export const revalidate = 1800;

const ORIGIN = "https://www.sahneva.com";

export const metadata = {
  title:
    "Kurumsal Organizasyon & Etkinlik Yönetimi | Profesyonel Çözümler - Sahneva",
  description:
    "Toplantı, konferans, lansman, gala, miting ve roadshow'larda uçtan uca planlama. Sahne, podyum, LED ekran, ses-ışık ve yayın operasyonu tek ekipten. 500+ başarılı proje deneyimi.",
  keywords:
    "kurumsal organizasyon, etkinlik yönetimi, konferans organizasyon, lansman, gala organizasyon, ses ışık sistemleri, LED ekran kiralama, sahne kurulumu",
  authors: [{ name: "Sahneva" }],
  publisher: "Sahneva",
  alternates: {
    canonical: `${ORIGIN}/kurumsal-organizasyon`,
    languages: {
      "tr-TR": `${ORIGIN}/kurumsal-organizasyon`,
      "x-default": `${ORIGIN}/kurumsal-organizasyon`,
    },
  },
  openGraph: {
    title:
      "Kurumsal Organizasyon & Etkinlik Yönetimi | Profesyonel Çözümler - Sahneva",
    description:
      "Planlama, teknik tasarım ve yedekli altyapı ile risksiz kurumsal etkinlikler. Türkiye geneli kurulum ve profesyonel ekip.",
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Kurumsal Organizasyon - Profesyonel Etkinlik Yönetimi Çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahneva",
    creator: "@sahneva",
    title: "Kurumsal Organizasyon & Etkinlik Yönetimi | Sahneva",
    description:
      "Konferans, lansman, gala ve roadshow'larda profesyonel planlama ve operasyon. 500+ başarılı proje deneyimi.",
    images: [`${ORIGIN}/img/kurumsal/hero-og.webp`],
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

const HERO = {
  src: "/img/kurumsal/hero.webp",
  alt: "Profesyonel kurumsal organizasyon: modern sahne tasarımı, geniş LED ekran ve profesyonel ışık sistemleri ile etkileyici etkinlik alanı",
  sizes: "(max-width: 768px) 100vw, 100vw",
  placeholder:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6Cgq1vKnsuJc6bS/1kMpXWn//Z",
};

const GALLERY = [
  {
    src: "/img/kurumsal/1.webp",
    alt: "Modern konferans sahnesi ve geniş LED ekran kurulumu",
    category: "Konferans",
    width: 800,
    height: 600,
  },
  {
    src: "/img/kurumsal/2.webp",
    alt:
      "Kurumsal ürün lansmanı için özel tasarlanmış sahne ve ışık koreografisi",
    category: "Lansman",
    width: 800,
    height: 600,
  },
  {
    src: "/img/kurumsal/3.webp",
    alt:
      "Büyük ölçekli miting organizasyonu - dış mekan LED ekran ve ses kuleleri",
    category: "Miting",
    width: 800,
    height: 600,
  },
  {
    src: "/img/kurumsal/4.webp",
    alt:
      "Fuar standında yüksek çözünürlüklü P2.5 iç mekan LED duvar uygulaması",
    category: "Fuar",
    width: 800,
    height: 600,
  },
];

const SERVICES = [
  {
    icon: "🎤",
    title: "Konferans & Seminer Organizasyonu",
    description:
      "Profesyonel ses sistemi, LED ekran ve aydınlatma çözümleri ile etkileyici sunumlar",
    features: [
      "Simultane çeviri sistemleri",
      "Kablosuz mikrofon sistemleri",
      "4K kayıt ve canlı yayın",
      "Akustik optimizasyon",
    ],
    seoText:
      "Konferans ve seminer organizasyonlarında teknik altyapı, ses sistemi ve görsel çözümler",
  },
  {
    icon: "🚀",
    title: "Ürün Lansmanı Organizasyonu",
    description:
      "Etkileyici görsel şovlar ve interaktif deneyimlerle markanızı öne çıkarın",
    features: [
      "3D mapping ve projeksiyon",
      "Özel sahne tasarımı",
      "Medya duvarları",
      "Interaktif ekranlar",
    ],
    seoText:
      "Ürün lansman organizasyonları için özel sahne tasarımı ve teknolojik çözümler",
  },
  {
    icon: "🎭",
    title: "Gala & Ödül Töreni",
    description:
      "Şık ve profesyonel organizasyon çözümleri ile unutulmaz geceler",
    features: [
      "Kırmızı halı kurulumu",
      "Özel aydınlatma tasarımı",
      "Sahne dekorasyonu",
      "VIP alanları",
    ],
    seoText:
      "Gala ve ödül töreni organizasyonu için lüks sahne düzenlemeleri",
  },
  {
    icon: "🏟️",
    title: "Miting & Açık Hava Etkinlikleri",
    description:
      "Büyük kitlelere yönelik profesyonel çözümler ve güvenli organizasyon",
    features: [
      "Yüksek parlaklıklı LED ekranlar",
      "Güçlü ses sistemleri",
      "Jeneratör ve altyapı",
      "Güvenlik önlemleri",
    ],
    seoText:
      "Açık hava miting organizasyonları ve büyük ölçekli etkinlik yönetimi",
  },
  {
    icon: "🛣️",
    title: "Roadshow & Fuar Organizasyonu",
    description:
      "Mobil ve esnek organizasyon çözümleri ile marka deneyimi",
    features: [
      "Taşınabilir sahne sistemleri",
      "Hızlı kurulum çözümleri",
      "Marka entegrasyonu",
      "Interaktif standlar",
    ],
    seoText: "Roadshow ve fuar organizasyonları için mobil çözümler",
  },
  {
    icon: "💍",
    title: "Özel Etkinlikler",
    description:
      "Kurumsal düğün, yılbaşı partileri ve özel kutlamalar için özel çözümler",
    features: [
      "Özel dekorasyon",
      "Tema tasarımı",
      "Eğlence ve şovlar",
      "Profesyonel fotoğraf/video çekim",
    ],
    seoText: "Kurumsal özel etkinlik organizasyonu ve tema tasarımı",
  },
];

const TECHNICAL_SPECS = [
  {
    category: "led",
    title: "LED Ekran Sistemleri",
    specs: "P2.5–P6 LED Ekranlar • 1500–6500 nit parlaklık • 4K çözünürlük",
    details:
      "Yüksek çözünürlüklü indoor/outdoor LED ekranlar, yedek işlemci ve kontrol sistemi",
  },
  {
    category: "sound",
    title: "Ses Sistemleri",
    specs: "Line-array ses sistemleri • 360° ses dağıtımı • Dijital mixing",
    details:
      "Profesyonel ses mühendisliği, akustik optimizasyon, kablosuz mikrofon sistemleri",
  },
  {
    category: "lighting",
    title: "Aydınlatma Sistemleri",
    specs: "LED wash ve spot ışıklar • Hareketli kafalar • DMX kontrol",
    details:
      "RGB aydınlatma, ışık koreografisi, özel efektler ve profesyonel ışık tasarımı",
  },
  {
    category: "stage",
    title: "Sahne Sistemleri",
    specs: "Modüler sahne sistemleri • 30–200 m² kapasite • Truss sistemleri",
    details:
      "Profesyonel sahne kurulumu, podyum, arka plan düzenlemeleri ve dekorasyon",
  },
  {
    category: "power",
    title: "Güç Altyapısı",
    specs: "Jeneratör ve güç dağıtımı • UPS sistemleri • Voltaj stabilizasyonu",
    details:
      "Kesintisiz güç kaynağı, elektrik projelendirme, güvenlik önlemleri",
  },
  {
    category: "broadcast",
    title: "Yayın Sistemleri",
    specs: "4K kamera sistemleri • Canlı yayın ve kayıt • Streaming çözümleri",
    details:
      "Çok kameralı çekim, canlı miksaj, sosyal medya yayını, profesyonel kayıt",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Keşif & Planlama",
    description: "Mekan analizi, ihtiyaç değerlendirmesi ve kapsamlı planlama",
    details: ["Mekan ölçümü", "Teknik gereksinimler", "Zaman planı", "Bütçe optimizasyonu"],
    time: "24-48 saat",
  },
  {
    step: "02",
    title: "Tasarım & Teklif",
    description: "Özel tasarım ve şeffaf fiyatlandırma",
    details: ["3D sahne tasarımı", "Teknik çizimler", "Ekipman seçimi", "Detaylı teklif"],
    time: "48 saat",
  },
  {
    step: "03",
    title: "Kurulum & Test",
    description: "Profesyonel kurulum ve kapsamlı test süreci",
    details: ["Ekipman kurulumu", "Sistem entegrasyonu", "Test ve kalibrasyon", "Teknik provalar"],
    time: "4-12 saat",
  },
  {
    step: "04",
    title: "Operasyon & Destek",
    description: "Etkinlik süresince kesintisiz destek",
    details: ["Teknik operatörler", "7/24 canlı destek", "Acil müdahale", "Güvenlik denetimi"],
    time: "Etkinlik süresi + 2 saat",
  },
];

const FAQ = [
  {
    q: "Kurulum süresi ne kadar?",
    a:
      "Mekan erişimi ve kurguya bağlı olarak 4–12 saat; açık alan ve çok kameralı yayınlarda 1 güne çıkabilir. Acil kurulum hizmetimizle aynı gün teslimat sağlanabilir.",
    tags: ["kurulum", "süre", "planlama"],
  },
  {
    q: "Yedek planınız var mı?",
    a:
      "İşlemci, sinyal hattı ve kritik mikrofonlarda yedekleme; jeneratör–şebeke transfer senaryoları hazırdır. Tüm kritik ekipmanlarda %100 yedek sistem bulunur.",
    tags: ["yedek", "güvenlik", "planlama"],
  },
  {
    q: "Elektrik ihtiyacı nedir?",
    a:
      "LED ekranlar m² başına yaklaşık 300–800 W tüketir. Güç dağıtımı ve topraklama projeye göre planlanır. 1000 kişilik bir etkinlik için ortalama 60–100A elektrik ihtiyacı olur.",
    tags: ["elektrik", "altyapı", "teknik"],
  },
  {
    q: "Canlı yayın ve kayıt desteği veriyor musunuz?",
    a:
      "Evet. Çok kamerayla miks, kayıt ve streaming; scaler ve senkron ölçümleri dahil uçtan uca operasyon sağlarız. 4K çözünürlükte canlı yayın ve profesyonel kayıt hizmeti sunuyoruz.",
    tags: ["yayın", "kayıt", "teknoloji"],
  },
  {
    q: "Hangi şehirlerde hizmet veriyorsunuz?",
    a:
      "Tüm Türkiye'de hizmet veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere 81 ilde profesyonel ekiplerimizle hizmetinizdeyiz.",
    tags: ["lokasyon", "Türkiye", "hizmet"],
  },
  {
    q: "Kaç kişiye kadar etkinlik organize ediyorsunuz?",
    a:
      "50 kişilik toplantılardan 50.000 kişilik açık hava konserlerine kadar her ölçekte etkinlik için profesyonel çözümler sunuyoruz.",
    tags: ["kapasite", "ölçek", "planlama"],
  },
  {
    q: "Fiyatlandırma nasıl yapılıyor?",
    a:
      "Etkinlik türü, süresi, mekan özellikleri ve teknik ihtiyaçlara göre özelleştirilmiş teklif hazırlıyoruz. Şeffaf fiyatlandırma politikamız ile hidden cost bulunmamaktadır.",
    tags: ["fiyat", "bütçe", "teklif"],
  },
  {
    q: "COVID-19 önlemleri alıyor musunuz?",
    a:
      "Evet. Tüm ekipmanlar dezenfekte edilir, sosyal mesafe kurallarına uygun sahne düzenlemeleri yapıyoruz. Temassız çözümler ve dijital alternatifler sunuyoruz.",
    tags: ["sağlık", "güvenlik", "covid"],
  },
];

// Slugify
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// Skip link
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

// Breadcrumb
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
          <span className="mx-2" aria-hidden="true">
            ›
          </span>
          <span className="text-blue-600 font-medium" aria-current="page">
            Kurumsal Organizasyon
          </span>
        </li>
      </ol>
    </nav>
  );
}

// FAQ (hook kullanmadan, <details>/<summary> ile)
function FAQSection() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-black mb-4">
            Sıkça Sorulan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Sorular
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kurumsal organizasyon hizmetlerimiz hakkında en çok merak edilenler
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <summary
                className="list-none cursor-pointer px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl"
                aria-controls={`faq-answer-${i}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </h3>
                  <span
                    className="ml-2 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </summary>
              <div id={`faq-answer-${i}`} className="px-6 pb-5">
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {faq.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${ORIGIN}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kurumsal Organizasyon",
            item: `${ORIGIN}/kurumsal-organizasyon`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Kurumsal Organizasyon & Etkinlik Yönetimi",
        description:
          "Toplantı, konferans, lansman, gala, miting ve roadshow'larda planlama, sahne–ses–ışık–LED–yayın altyapısı. 500+ başarılı proje deneyimi.",
        provider: {
          "@type": "Organization",
          name: "Sahneva",
          telephone: "+905453048671",
          email: "info@sahneva.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "İstanbul",
            addressCountry: "TR",
          },
          url: ORIGIN,
          logo: `${ORIGIN}/logo.png`,
          sameAs: [
            "https://www.facebook.com/sahneva",
            "https://www.instagram.com/sahneva",
            "https://www.linkedin.com/company/sahneva",
          ],
        },
        areaServed: "TR",
        serviceType: "EventProduction",
        category: "EventService",
        offers: {
          "@type": "Offer",
          description: "Profesyonel kurumsal organizasyon hizmetleri",
        },
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
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            serviceType: "EventProduction",
          },
        })),
      },
    ],
  };

  const waText = encodeURIComponent(
    "Merhaba, kurumsal organizasyon hizmetleriniz hakkında bilgi almak istiyorum. Etkinlik türü: [konferans/lansman/gala], Tarih: [gg.aa.yyyy], Katılımcı sayısı: [xxx]."
  );

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SkipToMain />
      <Breadcrumb />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-16 min-h-[85vh]"
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
            placeholder="blur"
            blurDataURL={HERO.placeholder}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-800/80 to-blue-950/90"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/30 mb-8 shadow-2xl">
            <span className="relative flex w-3 h-3" aria-hidden="true">
              <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-white">
              Türkiye Geneli Profesyonel Hizmet • 81 İl
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 drop-shadow-2xl"
          >
            Kurumsal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Organizasyon
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-6xl mx-auto leading-relaxed font-light mb-10">
            Konferans • Seminer • Ürün Lansmanı • Gala • Miting • Roadshow
            <span className="block mt-4 text-lg md:text-xl text-blue-200">
              Profesyonel ekip, son teknoloji ekipmanlar ve 500+ başarılı proje
              deneyimi ile anahtar teslim çözümler
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Link
              href={`https://wa.me/905453048671?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-10 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-900 text-lg shadow-lg"
              aria-label="WhatsApp üzerinden hemen teklif alın"
            >
              💬 Hemen Ücretsiz Teklif Al
            </Link>

            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center font-bold px-10 py-5 rounded-2xl border-2 border-white text-white bg-white/15 backdrop-blur-lg hover:bg-white/25 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-900 text-lg"
              aria-label="Hizmetlerimiz bölümüne git"
            >
              🎯 Detaylı Bilgi
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "⭐", number: "4.9/5", label: "250+ Müşteri Değerlendirmesi" },
              { icon: "🏆", number: "500+", label: "Başarılı Proje" },
              { icon: "🚀", number: "81 İl", label: "Türkiye Geneli Hizmet" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl mb-2" aria-hidden="true">
                  {s.icon}
                </div>
                <div className="text-2xl font-bold">{s.number}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <main id="main-content" className="bg-white">
        {/* HİZMETLER */}
        <section
          id="hizmetler"
          className="py-20 bg-gradient-to-b from-white to-blue-50/50"
          aria-labelledby="hizmetler-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="hizmetler-baslik" className="text-4xl md:text-6xl font-black mb-6">
                Kurumsal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Hizmetlerimiz
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                10+ yıllık deneyim ve 500+ başarılı proje ile her türlü kurumsal
                etkinlik için profesyonel ve anahtar teslim çözümler sunuyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {SERVICES.map((service) => {
                const id = `svc-${slugify(service.title)}`;
                return (
                  <article
                    key={id}
                    className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 group hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-200"
                    aria-labelledby={id}
                  >
                    <div className="text-4xl mb-4" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3
                      id={id}
                      className="text-2xl font-black mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span
                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                            aria-hidden="true"
                          ></span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xs text-blue-800 font-medium">
                        {service.seoText}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teknik Özellikler */}
        <section
          className="py-20 bg-gradient-to-b from-gray-50 to-white"
          aria-labelledby="teknik-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="teknik-baslik" className="text-4xl md:text-6xl font-black mb-6">
                Teknik{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Altyapımız
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Son teknoloji ekipmanlar ve profesyonel ekip ile kesintisiz
                etkinlik deneyimi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {TECHNICAL_SPECS.map((spec) => (
                <div
                  key={spec.category}
                  className="bg-white rounded-2xl border border-gray-200 p-6 group hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {spec.category === "led" && "🖥️"}
                      {spec.category === "sound" && "🔊"}
                      {spec.category === "lighting" && "💡"}
                      {spec.category === "stage" && "🎭"}
                      {spec.category === "power" && "⚡"}
                      {spec.category === "broadcast" && "📹"}
                    </span>
                    {spec.title}
                  </h3>
                  <p className="text-gray-700 mb-3 font-medium">{spec.specs}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {spec.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Süreç */}
        <section
          className="py-20 bg-gradient-to-b from-white to-purple-50/50"
          aria-labelledby="surec-baslik"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="surec-baslik" className="text-4xl md:text-6xl font-black mb-6">
                Çalışma{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Sürecimiz
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesyonel ve sistematik yaklaşımımızla etkinliklerinizi güvenle
                planlıyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {PROCESS.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < PROCESS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 -z-10"
                      aria-hidden="true"
                    />
                  )}
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 text-center group hover:shadow-xl hover:scale-105 transition-all duration-500 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {step.description}
                      </p>
                      <ul className="space-y-3 text-left mb-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                            <span
                              className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"
                              aria-hidden="true"
                            ></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        ⏱️ {step.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section
          className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white"
          aria-labelledby="istatistik-baslik"
        >
          <div className="container mx-auto px-4">
            <h2 id="istatistik-baslik" className="sr-only">
              Başarı İstatistiklerimiz
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Başarılı Proje", icon: "🏆" },
                { number: "50+", label: "Kurumsal Müşteri", icon: "💼" },
                { number: "81", label: "İlde Hizmet", icon: "🗺️" },
                { number: "10+", label: "Yıllık Deneyim", icon: "⭐" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="w-full rounded-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h2
                  id="cta-heading"
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 drop-shadow-md"
                >
                  Etkinliğinizi{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                    Profesyonellere
                  </span>{" "}
                  Emanet Edin
                </h2>

                <p className="mt-6 text-xl md:text-2xl text-blue-100 mx-auto max-w-4xl leading-relaxed font-light">
                  Kurumsal imajınızı güçlendiren, akıcı ve unutulmaz bir etkinlik
                  deneyimi için Sahneva yanınızda. Keşif, teknik tasarım ve detaylı
                  teklifi <strong className="font-bold text-white">48 saat</strong>{" "}
                  içinde hazırlayalım.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    href={`https://wa.me/905453048671?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-bold px-12 py-6 rounded-2xl bg-white text-blue-700 hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 text-lg shadow-2xl"
                    aria-label="WhatsApp üzerinden hemen teklif alın"
                  >
                    💬 WhatsApp'tan Hemen Teklif Al
                  </Link>

                  <Link
                    href="tel:+905453048671"
                    className="inline-flex items-center justify-center font-bold px-12 py-6 rounded-2xl border-2 border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 text-lg"
                    aria-label="Telefonla hemen iletişime geçin"
                  >
                    📞 Hemen Ara
                  </Link>
                </div>

                <div className="mt-10 mx-auto max-w-2xl p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg">
                  <p className="text-lg font-medium text-white">
                    <span className="text-green-300 font-bold">🟢 Acil organizasyon desteği:</span>{" "}
                    Aynı gün kurulum için <strong className="ml-2">+90 545 304 86 71</strong>'i arayın.
                  </p>
                  <p className="text-blue-200 text-sm mt-2">
                    📧 Alternatif iletişim:{" "}
                    <a href="mailto:info@sahneva.com" className="underline hover:text-white">
                      info@sahneva.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
