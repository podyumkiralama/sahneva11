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
      description: "Yeni ürun ve hizmetlerin tanıtıldığı etkileyici lansman etkinlikleri",
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
  technicalComponents: [
    {
      icon: "🎭",
      title: "Podyum Sistemleri",
      description: "1×1 ve 2×1 modüllerle 20–100 cm yükseklik; kaymaz kaplama, etek, rampa ve korkuluk opsiyonları.",
      features: [
        "Kapalı alan: 40–60 cm • Açık alan: 60–100 cm önerilir",
        "Merdiven ve rampa erişimi (engelli dostu)",
        "Şase dengeleme ve noktasal yük dağıtımı",
      ],
      link: "/podyum-kiralama",
    },
    {
      icon: "🏗️",
      title: "Truss & Rigging",
      description: "Ön kiriş, yan kule, back truss ve roof sistemleri; askı noktaları ve güvenlik ekipmanları standartlara uygun kurulur.",
      features: [
        "Statik hesap ve güvenlik katsayıları",
        "Chain/hoist ve ground support",
        "Backdrop, banner ve dekor askıları",
      ],
    },
    {
      icon: "🖥️",
      title: "LED Ekran",
      description: "P2–P6 paneller; yüksek parlaklık, scaler ve canlı miksaj desteği. Arka fon LED veya yan kanatlar.",
      features: [
        "Öneri: 3×2 m (iç mekân) / 5×3 m (açık alan)",
        "Dış mekân için IP65 koruma",
        "HDMI/SDI giriş ve içerik döngüsü",
      ],
      link: "/led-ekran-kiralama",
    },
    {
      icon: "🎵",
      title: "Ses & Işık",
      description: "Line array PA, dijital mikser, kablosuz mikrofon ve hareketli başlıklarla sahne ışık tasarımı. Teknik ekip eşliğinde.",
      features: [
        "Soundcheck ve sahne monitörlemesi",
        "Beam/spot, wash, blinder, haze/duman",
        "DMX programlama ve show control",
      ],
      link: "/ses-isik-sistemleri",
    },
  ],
  process: [
    {
      step: "01",
      title: "Keşif & Planlama",
      description: "Mekan ölçümü, yük ve elektrik analizi",
      details: ["Mekan keşfi", "Teknik gereksinimler", "Risk analizi", "Zaman planı"],
    },
    {
      step: "02",
      title: "Projelendirme",
      description: "2D/3D sahne yerleşim ve truss planı",
      details: ["Teknik çizimler", "Ekipman seçimi", "Onay süreci", "Detaylı teklif"],
    },
    {
      step: "03",
      title: "Kurulum & Test",
      description: "Statik/güvenlik kontrolleri, soundcheck",
      details: ["Profesyonel kurulum", "Sistem testleri", "Kalibrasyon", "Prova"],
    },
    {
      step: "04",
      title: "Canlı Yönetim",
      description: "Show control ve anlık teknik destek",
      details: ["Teknik operatörler", "Canlı destek", "Acil müdahale", "Güvenlik"],
    },
  ],
  faq: [
    {
      question: "Sahne ölçüsünü nasıl belirliyorsunuz?",
      answer: "Katılımcı sayısı, performans türü ve mekân ölçülerine göre podyum alanı, yükseklik ve truss açıklıkları belirlenir."
    },
    {
      question: "Açık alan konserlerinde hangi yükselti önerilir?",
      answer: "Genellikle 80–100 cm önerilir. Seyirci görüş çizgisi ve bariyer yerleşimi de dikkate alınır."
    },
    {
      question: "LED ekran şart mı?",
      answer: "Görünürlüğü ve sponsor alanını artırdığı için önerilir; ancak zorunlu değildir."
    },
    {
      question: "Kurulum ne kadar sürer?",
      answer: "Mini sahnede 2–4 saat, konser kurulumlarında çoğu zaman 1 tam gün planlanır."
    },
  ],
  relatedServices: [
    { name: "Podyum Kiralama", href: "/podyum-kiralama", icon: "🎭" },
    { name: "LED Ekran Kiralama", href: "/led-ekran-kiralama", icon: "🖥️" },
    { name: "Ses & Işık Sistemleri", href: "/ses-isik-sistemleri", icon: "🎵" },
    { name: "Truss & Rigging", href: "/truss-kiralama", icon: "🏗️" },
    { name: "Çadır Kiralama", href: "/cadir-kiralama", icon: "⛺" },
  ]
};

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

const HERO = {
  src: "/img/sahne/hero.webp",
  alt: "Profesyonel sahne kurulumu: truss sistemleri, LED ekran ve ışık performansı ile donatılmış konser sahnesi",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const waText = "Merhaba%2C+sahne+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkonferans%2Flansman%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Katilimci+sayisi%3A+%5Bxxx%5D%2C+Tahmini+sahne+olcusu%3A+%5Bm²%5D.";

// Bileşenler
const HeroSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[72vh]" aria-labelledby="hero-title">
    <div className="absolute inset-0">
      <Image
        src={HERO.src}
        alt={HERO.alt}
        fill
        priority
        className="object-cover"
        sizes={HERO.sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-950 mix-blend-multiply" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-purple-900/50" aria-hidden="true"></div>
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
      <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/25 mb-8">
        <span className="relative flex w-3 h-3" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500"></span>
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
);

const FeaturesSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="ozellikler-baslik">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="ozellikler-baslik" className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
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
                <h3 id={id} className="text-xl font-black mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true"></span>
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
);

const UseCasesSection = () => (
  <section id="hizmetler" className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="kullanim-alanlari-baslik">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="kullanim-alanlari-baslik" className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
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
                <h3 id={id} className="text-xl font-black mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true"></span>
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
);

const PackagesSection = () => (
  <section id="paketler" className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="paketler-baslik">
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
);

const TechnicalComponentsSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-purple-50/30" aria-labelledby="bilesenler-baslik">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="bilesenler-baslik" className="text-3xl md:text-5xl font-black mb-4">
          Teknik{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Bileşenler
          </span>
        </h2>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries({
          podyum: "1×1 / 2×1 modüler podyum • 20-100 cm yükseklik • Kaymaz kaplama",
          truss: "Aluminyum truss sistemleri • Ön kiriş, yan kule • Profesyonel rigging",
          led: "P2-P6 LED ekranlar • 1500-6500 nit parlaklık • IP65 koruma",
          ses: "Line-array ses sistemleri • Dijital mikser • Kablosuz mikrofon",
          isik: "LED wash ve spot ışıklar • Hareketli kafalar • DMX kontrol",
          guvenlik: "Korkuluk ve rampa sistemleri • Statik hesaplama • Yedekli altyapı",
        }).map(([key, value]) => (
          <li key={key}>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 group hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 capitalize text-lg">
                {key === "podyum" && "🎭 Podyum Sistemleri"}
                {key === "truss" && "🏗️ Truss & Rigging"}
                {key === "led" && "🖥️ LED Ekranlar"}
                {key === "ses" && "🔊 Ses Sistemleri"}
                {key === "isik" && "💡 Aydınlatma"}
                {key === "guvenlik" && "🛡️ Güvenlik Sistemleri"}
              </h3>
              <p className="text-gray-600 text-sm">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const GallerySection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="galeri-baslik">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
          Proje{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Galerimiz
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          300+ başarılı sahne kurulumundan öne çıkan projelerimiz
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <CaseGallery
          images={[
            { src: "/img/sahne/1.webp", alt: "Konser sahnesi ve profesyonel truss kurulumu", category: "Konser" },
            { src: "/img/sahne/2.webp", alt: "Konferans sahnesi ve LED ekran entegrasyonu", category: "Konferans" },
            { src: "/img/sahne/3.webp", alt: "Açık hava festival sahnesi ve ışık sistemi", category: "Festival" },
            { src: "/img/sahne/4.webp", alt: "Kurumsal lansman sahnesi ve özel tasarım", category: "Lansman" },
          ]}
        />
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-purple-50/30" aria-labelledby="surec-baslik">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="surec-baslik" className="text-3xl md:text-5xl font-black mb-4">
          Çalışma{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Sürecimiz
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Profesyonel ve sistematik yaklaşımımızla sahnelerinizi güvenle kuruyoruz
        </p>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {PAGE_DATA.process.map((step) => (
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
                    <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" aria-hidden="true"></span>
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
);

const StatisticsSection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" aria-labelledby="istatistik-baslik">
    <div className="container mx-auto px-4">
      <h2 id="istatistik-baslik" className="sr-only">
        İstatistikler
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {PAGE_DATA.hero.stats.map((stat, i) => (
          <div key={i}>
            <div className="text-3xl md:text-5xl font-black mb-2">{stat.value}</div>
            <div className="text-blue-100 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="sss-baslik">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 id="sss-baslik" className="text-3xl md:text-5xl font-black mb-4">
          Sıkça Sorulan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Sorular
          </span>
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PAGE_DATA.faq.map((item, index) => (
          <article key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-600 text-sm">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SEOArticleSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="seo-article-heading">
    <div className="container mx-auto px-4 max-w-4xl">
      <article className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-10 text-center">
          <h2 id="seo-article-heading" className="text-2xl md:text-3xl font-black tracking-tight drop-shadow">
            Profesyonel Sahne Kiralama ve Etkinlik Altyapı Çözümleri
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
            Konser • Konferans • Lansman • Miting • Festival • Özel Etkinlikler
          </p>
        </header>

        <div className="p-6 md:p-10 prose prose-lg max-w-none">
          <p>
            Profesyonel sahne kiralama hizmeti, etkinliklerin başarısını doğrudan etkileyen 
            kritik bir unsurdur. <strong>Sahneva</strong> olarak, 8 yılı aşkın deneyimimiz ve 
            300'den fazla başarılı projemizle konser, konferans, lansman, miting ve festival 
            gibi etkinlikler için anahtar teslim sahne çözümleri sunmaktayız.
          </p>

          <h3 className="!mt-10 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
            Neden Profesyonel Sahne Kurulumu?
          </h3>
          <p>
            Sahne, etkinliklerin odak noktasıdır ve hem görsel hem de fonksiyonel açıdan 
            kusursuz olmalıdır. Modüler podyum sistemleri, truss rigging, LED ekranlar, 
            profesyonel ses ve ışık sistemleri bir arada düşünülmeli, güvenlik standartlarına 
            uygun şekilde entegre edilmelidir. Yanlış sahne tasarımı, etkinlik akışını 
            olumsuz etkileyebilir, hatta güvenlik riskleri oluşturabilir.
          </p>

          <h3 className="!mt-10 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
            Teknik Altyapı ve Ekipman Kalitesi
          </h3>
          <p>
            Sahneva olarak, tüm ekipmanlarımızı dünya standartlarında seçiyor, düzenli 
            bakım ve kalibrasyonlarını yapıyoruz. Aluminyum truss sistemleri, yüksek 
            dayanıklılığa sahip podyum panelleri, yüksek parlaklıklı LED ekranlar ve 
            profesyonel ses-ışık sistemleri ile etkinliklerinize teknik üstünlük katıyoruz.
          </p>

          <div className="mt-8 p-6 rounded-2xl border bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <h4 className="m-0 font-black text-blue-700 mb-3">🎯 Kritik Başarı Faktörleri</h4>
            <ul className="grid md:grid-cols-2 gap-2 !mt-3 !mb-0">
              {[
                "Mekana uygun sahne tasarımı",
                "Güvenlik standartlarına uyum",
                "Profesyonel ekip deneyimi",
                "Yedekli ekipman ve acil müdahale planı",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
);

const RelatedServicesSection = () => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
        İlgili{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Hizmetler
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {PAGE_DATA.relatedServices.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-6 py-4 font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <span aria-hidden="true">{service.icon}</span>
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
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
);

export default function Page() {
  return (
    <>
      <Script
        id="ld-json-sahne"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>

      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <PackagesSection />
      <TechnicalComponentsSection />
      <GallerySection />
      <ProcessSection />
      <StatisticsSection />
      <FAQSection />
      <SEOArticleSection />
      <RelatedServicesSection />
      <CTASection />
    </>
  );
}
