// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";

// Dinamik galeri (referans sayfadaki CaseGallery kullanımıyla aynı)
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

/* -------------------- META -------------------- */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
  description:
    "Konser, festival ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri. Line array, dijital mikser, hareketli başlıklar, truss ve canlı operasyon.",
  alternates: { canonical: `${ORIGIN}/ses-isik-sistemleri` },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
    description:
      "Türkiye genelinde uçtan uca ses & ışık çözümleri: keşif, projelendirme, kurulum, canlı miksaj ve söküm.",
    url: `${ORIGIN}/ses-isik-sistemleri`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/ses-isik/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Ses & Işık Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva",
    description:
      "Line array, dijital mikser, kablosuz mikrofon, hareketli başlık, truss ve canlı operasyonla Türkiye genelinde ses & ışık kiralama.",
    images: [`${ORIGIN}/img/ses-isik/hero.webp`],
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

/* -------------------- SABİTLER -------------------- */
const HERO = {
  src: "/img/ses-isik/hero.webp",
  alt:
    "Konser ve kurumsal etkinlikler için profesyonel ses ve ışık sistemleri; line array, hareketli başlıklar ve truss kurulumu",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const PHONE = "+905453048671";
const waText =
  "Merhaba%2C+ses+ve+isik+sistemleri+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkurumsal%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${waText}`;

// Kullanım alanları verisi
const USE_CASES = [
  { icon: "🏢", text: "Kurumsal lansman ve toplantılar" },
  { icon: "💍", text: "Düğün, nişan ve özel davetler" },
  { icon: "🎤", text: "Konser, festival ve sahne performansları" },
  { icon: "🎓", text: "Mezuniyet törenleri ve okul etkinlikleri" },
  { icon: "🏛️", text: "Belediye organizasyonları ve törenler" },
  { icon: "🛍️", text: "AVM etkinlikleri ve fuar stantları" },
];

/* -------------------- YARDIMCI -------------------- */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* -------------------- SAYFA -------------------- */
export default function Page() {
  const services = [
    {
      icon: "🔊",
      title: "Line Array & PA",
      description: "Uzak mesafe kapsama, homojen SPL ve net anlaşılabilirlik",
      features: ["L/R cluster + sub dizilim", "Monitörleme (wedges/IEM)", "FOH miks & ölçüm"],
    },
    {
      icon: "🎛️",
      title: "Dijital Mikser & Stagebox",
      description: "Hızlı patch, sahneden kontrollü routing ve sahne disiplini",
      features: ["32–48ch dijital miks", "Sahnede stagebox", "Kaydetme & playback"],
    },
    {
      icon: "🎤",
      title: "Kablosuz Sistemler",
      description: "El/yaka mikrofonlar, sağlam RF planlama ve yedeklilik",
      features: ["Çoklu alıcı", "Pil/anten yönetimi", "Konferans & performans"],
    },
    {
      icon: "💡",
      title: "Işık Tasarımı",
      description: "RGBW spot, wash, beam/spot ve dramatik sahne atmosferi",
      features: ["Preset & cue programlama", "DMX topoloji", "Haze/duman efektleri"],
    },
    {
      icon: "🧱",
      title: "Truss & Rigging",
      description: "Ön/yan/arka kiriş, yan kule ve güvenli askı noktaları",
      features: ["U set truss", "Ground support", "Lojistik & montaj"],
    },
    {
      icon: "🎚️",
      title: "Canlı Operasyon",
      description: "FOH miks, ışık show kontrol ve etkinlik boyunca kesintisiz destek",
      features: ["Soundcheck & prova", "Acil müdahale", "Etkinlik sonrası söküm"],
    },
  ];

  const gallery = [
    { src: "/img/ses-isik/ses-sistemi.webp", alt: "Profesyonel line array ve FOH kurulum" },
    { src: "/img/ses-isik/isik-sistemi.webp", alt: "Hareketli başlıklar ve wash ışık senaryosu" },
  ];

  const packages = [
    {
      name: "Salon Paketi — Konferans",
      points: [
        "2× top + 1× sub (aktif), 2× monitör",
        "Dijital mikser (16–24ch), 2× kablosuz mikrofon",
        "2× LED spot + 2× wash",
        "Kurulum & teknik ekip",
      ],
      note: "Toplantı, seminer ve kapalı alan etkinlikleri.",
    },
    {
      name: "Açık Alan Paketi — Orta",
      points: [
        "2× line array cluster + subs, monitörleme",
        "Dijital mikser (32ch) + stagebox",
        "4× kablosuz mikrofon, 4× hareketli başlık + 6× wash + duman",
        "8–10 m ön kiriş + ground support, canlı miks/show",
      ],
      note: "Lansman, açık hava festival ve mitingler.",
    },
    {
      name: "Konser Paketi — Pro",
      points: [
        "4–6 kabin line array (L/R) + subs, side fill & drum fill",
        "48ch dijital mikser + monitör mikseri",
        "12+ hareketli başlık (beam/spot/wash), blinder/strobe/haze",
        "U set truss (ön/yan/arka) + rigging, soundcheck & canlı yönetim",
      ],
      note: "Konser ve yüksek katılımlı etkinlikler.",
    },
  ];

  const faq = [
    {
      q: "Hangi sistem benim etkinliğime uygun?",
      a: "Kapalı/açık alan, seyirci sayısı ve sahne boyutuna göre line array veya top+sub öneriyoruz. Kısa bir keşifle en verimli yapılandırmayı sunarız.",
    },
    {
      q: "Kurulum süresi ne kadar?",
      a: "Salon kurulumları genellikle aynı gün; açık alan/rigging gereken projeler 1 gün önce kurulum + etkinlik günü soundcheck olarak planlanır.",
    },
    {
      q: "Canlı operasyon ve mühendislik dahil mi?",
      a: "Evet. FOH miksaj, monitör miks ve ışık show kontrolü ekibimiz tarafından canlı yönetilir.",
    },
    {
      q: "Lojistik ve güç altyapısı kimde?",
      a: "Nakliye ve kurulum bizde. Güç altyapısı bilgileri (jeneratör veya tesisat) tarafınızdan sağlanır; gerekli yönlendirmeyi yapıyoruz.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Ses ve Işık Sistemleri", item: `${ORIGIN}/ses-isik-sistemleri` },
        ],
      },
      {
        "@type": "Service",
        name: "Ses ve Işık Sistemleri Kiralama",
        description:
          "Line array, dijital mikser, kablosuz mikrofon, hareketli başlık, truss ve canlı operasyonla Türkiye genelinde ses & ışık kiralama.",
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
        url: `${ORIGIN}/ses-isik-sistemleri`,
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "250", bestRating: "5" },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-json-ses-isik"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO — KURUMSAL SAYFAYLA AYNI KOMPOZİSYON */}
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
            </span>
            <span className="text-sm font-semibold">Türkiye Geneli Profesyonel Hizmet</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl"
          >
            Ses & Işık Sistemleri
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Konser • Festival • Lansman • Konferans
            <span className="block mt-2">
              Line array, dijital mikser, hareketli başlık ve truss ile anahtar teslim çözümler
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp üzerinden teklif al"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
            >
              <span aria-hidden="true">💬</span> <span>Hemen Teklif Al</span>
            </Link>

            <Link
              href="#hizmetler"
              title="Hizmetler bölümüne git"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <span aria-hidden="true">🎯</span> <span>Hizmetlerimiz</span>
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
              <span>1200+ Etkinlik</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🚀</span>
              <span>81 İlde Hizmet</span>
            </li>
          </ul>
        </div>
      </section>

      {/* HİZMETLER — REFERANS DİLİYLE */}
      <section
        id="hizmetler"
        className="py-16 bg-gradient-to-b from-white to-blue-50/30"
        aria-labelledby="hizmetler-baslik"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="hizmetler-baslik" className="text-3xl md:text-5xl font-black mb-4">
              Ses & Işık{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Hizmetlerimiz
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keşif, projelendirme, kurulum, canlı miks ve söküm dahil uçtan uca hizmet
            </p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
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
                    <h3 id={id} className="text-xl font-black mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
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

      {/* KULLANIM ALANLARI */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Kullanım{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Alanları
              </span>
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              Podyum çözümlerimizin tercih edildiği başlıca etkinlik türleri
            </p>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"
              aria-hidden="true"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
            {USE_CASES.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group focus-within:ring-2 focus-within:ring-white/40"
                role="listitem"
                tabIndex={0}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl" role="img" aria-label={useCase.text}>
                    {useCase.icon}
                  </div>
                  <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                    {useCase.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEKNİK ALTYAPI — KURUMSAL SAYFAYLA AYNI BLOK DİLİ */}
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
            {Object.entries({
              pa: "Line array / top+sub konfigürasyonları • Homojen kapsama",
              mixer: "32–48ch dijital mikser • Stagebox • Çok kanallı kayıt",
              wireless: "Kablosuz el/yaka • RF planlama • Anten dağıtım",
              lighting: "RGBW spot/wash • Beam/spot • Blinder/strobe/haze",
              truss: "Ön/yan/arka kiriş • Ground support • Rigging güvenliği",
              control: "DMX controller • Show playback • Ölçüm & kalibrasyon",
            }).map(([key, value]) => (
              <li key={key}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 group hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-3 capitalize text-lg">
                    {key === "pa" && "🔊 PA Sistemleri"}
                    {key === "mixer" && "🎛️ Mikser & Stagebox"}
                    {key === "wireless" && "🎤 Kablosuz Sistemler"}
                    {key === "lighting" && "💡 Işık Sistemleri"}
                    {key === "truss" && "🧱 Truss & Rigging"}
                    {key === "control" && "🎚️ Kontrol & Ölçüm"}
                  </h3>
                  <p className="text-gray-600 text-sm">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALERİ — AYNI BAŞLIK STİLİ */}
      <section
        className="py-16 bg-gradient-to-b from-white to-blue-50/30"
        aria-labelledby="galeri-baslik"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
              Kurulum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Galerisi
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gerçek projelerden örnek kurulum fotoğrafları
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <CaseGallery images={gallery} />
          </div>
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ — REFERANS BLOĞU */}
      <section
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        aria-labelledby="istatistik-baslik"
      >
        <div className="container mx-auto px-4">
          <h2 id="istatistik-baslik" className="sr-only">
            İstatistikler
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "1200+", label: "Etkinlik" },
              { value: "50+", label: "Kurumsal Müşteri" },
              { value: "81", label: "İl" },
              { value: "10+", label: "Yıl Deneyim" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO MAKALESİ — güçlendirilmiş (~300+ kelime) */}
      <section
        className="py-16 bg-gradient-to-b from-white to-gray-50"
        aria-labelledby="seo-article-heading"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-10 text-center">
              <h2
                id="seo-article-heading"
                className="text-2xl md:text-3xl font-black tracking-tight drop-shadow"
              >
                Ses ve Işık Sistemlerinde Profesyonel Çözümler
              </h2>
              <p className="mt-3 text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
                Konser • Festival • Lansman • Konferans
              </p>
            </header>

           <div className="p-6 md:p-10 prose prose-lg max-w-none">
  <p>
    <strong>Sahneva</strong>, Türkiye genelinde <em>ses sistemi kiralama</em> ve{" "}
    <em>ışık sistemi kiralama</em> ihtiyaçlarına kurumsal standartta yaklaşır. İster
    açık hava konseri ister kapalı salon konferansı olsun; akustik keşif, teknik
    projelendirme, güvenli <em>truss &amp; rigging</em>, FOH/monitör miks ve canlı
    operasyonu tek ekipten yönetiriz. Doğru konfigüre edilmiş <em>line array</em>
    dizilimleriyle homojen SPL elde edilir; <strong>dijital mikser</strong> ve{" "}
    <em>stagebox</em> mimarisi, patch–routing–kayıt süreçlerini hızlandırır.
    RGBW spot, wash ve beam/spot armatürleri DMX tabanlı sahne programlarıyla
    senkronize edilerek yüksek anlaşılabilirlik ve etkileyici bir sahne atmosferi
    sağlar.
  </p>

  <h3 className="!mt-8 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
    Mekâna Göre Doğru Kurgular
  </h3>
  <p>
    Stratejimiz mekânın mimari ve akustik özelliklerine göre şekillenir. Açık alan
    etkinliklerinde rüzgâr ve gecikme etkilerini dengelemek için <em>delay tower</em>{" "}
    ve <em>side fill</em> çözümlerini devreye alır; kapalı salonlarda yankıyı azaltan
    top+sub veya kompakt <em>line array</em> kurgularına gideriz. RF planlama ile
    kablosuz hatlarda kesintileri önler, <strong>soundcheck</strong> ve cue
    planlı <strong>Işık show</strong> akışlarıyla sahne disiplinini koruruz. Haze/duman,
    blinder ve strobe gibi vurgu unsurlarını doğru zamanda kullanarak kurumsal
    konuşmalarda netliği, konser/festivallerde ise enerjiyi yükseltiriz.
  </p>

  <h3 className="!mt-8 !mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
    Ölçülebilir Kalite, Yedekli Altyapı
  </h3>
  <p>
    <em>Konser ses ışık</em>, <em>line array kiralama</em>,{" "}
    <em>led ışık kiralama</em> ve <em>ışık sistemi kiralama İstanbul</em> gibi
    anahtar ihtiyaçlarda hedefimiz düşük arıza oranı, hızlı kurulum ve tutarlı
    sonuçtur. SPL/coverage ölçümleriyle performansı doğrular, kritik
    bileşenlerde yedekli tasarım uygularız. 81 ilde belediye etkinlikleri, AVM
    lansmanları, fuar stantları, kurumsal toplantılar ve mezuniyet törenlerinde
    aynı kalite çizgisini korur; teknik çizimler ve şeffaf fiyatlama ile riskleri
    baştan azaltırız.
  </p>

  <div className="mt-8 p-6 rounded-2xl border bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
    <h4 className="m-0 font-black text-blue-700 mb-3">📊 Kritik Başarı Faktörleri</h4>
    <ul className="grid md:grid-cols-2 gap-2 !mt-3 !mb-0">
      {[
        "Detaylı keşif ve akustik/coverage planlama",
        "Line array simülasyonu ile doğru kapsama",
        "Sertifikalı rigging, güvenli yük dağılımı",
        "Soundcheck ve cue tabanlı DMX programlama",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-green-600 mt-1" aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  <p className="!mt-8">
    <strong>Ses sistemi kiralama İstanbul</strong> ve Türkiye geneli projelerinizde,
    kurumsal standartta operasyon, ölçülebilir kalite ve hızlı kurulum için
    <strong> Sahneva</strong>’ya güvenebilirsiniz. Etkinliğinize en uygun paket
    kurgusunu birlikte belirleyelim; <em>line array</em>, dijital mikser, kablosuz
    sistemler ve ışık tasarımını tek elde toplayarak içerik ve performansa odaklanın.
    Hemen teklif alın, sahnenizi güvenle teslim edin.
  </p>
</div>

            </div>
          </article>
        </div>
      </section>

      {/* PAKETLER — REFERANS KART DİLİ */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black">Paket Örnekleri</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-2xl border bg-white p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-extrabold">{pkg.name}</h3>
              <ul className="mt-4 space-y-2 text-neutral-800">
                {pkg.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {pkg.note && (
                <p className="mt-3 text-sm text-neutral-500">{pkg.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* FAQ + “Tüm Soruları Gör” butonu */}
      <section className="container pb-20">
        <h2 className="text-2xl md:text-3xl font-black mb-6">Sık Sorulan Sorular</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold flex items-center justify-between">
                <span>{f.q}</span>
                <span aria-hidden className="ml-3 transition group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <p className="mt-3 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Tüm soruları gör butonu */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/sss"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
            aria-label="Tüm sık sorulan soruları görüntüle"
            title="Tüm sık sorulan soruları görüntüle"
          >
            <span aria-hidden>📚</span> Tüm soruları gör
          </Link>
        </div>
      </section>

      {/* ✅ İLGİLİ HİZMETLER (en altta bağlantılar) */}
      <section
        className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30"
        aria-labelledby="related-services-title"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="related-services-title"
              className="text-4xl md:text-5xl font-black text-neutral-900 mb-6"
            >
              Tamamlayıcı{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Hizmetlerimiz
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Çadır kurulumunuzu tamamlayacak diğer profesyonel hizmetlerimiz
            </p>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"
              aria-hidden="true"
            ></div>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            role="navigation"
            aria-label="Tamamlayıcı hizmetler"
          >
            {[
              { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "📐" },
              { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️" },
              { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵" },
              { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🎪" },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-300 hover:scale-105 text-center focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label={`${service.title} hizmeti sayfasına git`}
              >
                <div className="text-3xl mb-3" role="img" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (son blok) */}
      <section className="container pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            Ses & Işık çözümleri hakkında teklif almak ister misiniz?
          </h2>
          <div className="flex gap-3">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
