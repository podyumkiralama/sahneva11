// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

// ISR
export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";

/* -------------------- Dinamik Galeri -------------------- */
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

/* -------------------- Yardımcı -------------------- */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* -------------------- İçerik -------------------- */
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

/* ---- Kullanım Alanları ---- */
const USE_CASES = [
  { icon: "🎤", text: "Konser & Festival" },
  { icon: "🚀", text: "Kurumsal Lansman" },
  { icon: "🏛️", text: "Konferans & Seminer" },
  { icon: "🏟️", text: "Miting & Açık Alan" },
  { icon: "🧭", text: "Fuar & Roadshow" },
  { icon: "🎓", text: "Mezuniyet & Tören" },
  { icon: "🏬", text: "AVM Etkinlikleri" },
  { icon: "🏢", text: "Belediye Organizasyonları" },
  { icon: "🎭", text: "Üniversite & Öğrenci Kulüpleri" },
];

/* -------------------- JSON-LD -------------------- */
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "250",
        bestRating: "5",
      },
    },
  ],
};

/* -------------------- Basit yardımcı bileşen -------------------- */
function FocusableCard({ className = "", children, ...props }) {
  return (
    <div
      className={
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 " +
        className
      }
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
}

/* -------------------- Sayfa -------------------- */
export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-json-ses-isik"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1) HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h=[72vh] min-h-[72vh]"
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

          <ul className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm drop-shadow" aria-label="Güven göstergeleri">
            <li className="flex items-center gap-2"><span className="text-2xl" aria-hidden="true">⭐</span><span>4.9/5 (250+ Değerlendirme)</span></li>
            <li className="flex items-center gap-2"><span className="text-2xl" aria-hidden="true">🏆</span><span>1200+ Etkinlik</span></li>
            <li className="flex items-center gap-2"><span className="text-2xl" aria-hidden="true">🚀</span><span>81 İlde Hizmet</span></li>
          </ul>
        </div>
      </section>

      {/* 2) SES & IŞIK HİZMETLERİ */}
      <section id="hizmetler" className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="hizmetler-baslik">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="hizmetler-baslik" className="text-3xl md:text-5xl font-black mb-4">
              Ses & Işık <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Keşif, projelendirme, kurulum, canlı miks ve söküm dahil uçtan uca hizmet</p>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const id = `svc-${slugify(service.title)}`;
              return (
                <li key={id}>
                  <article className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 group hover:shadow-xl hover:scale-105 transition-all duration-300" aria-labelledby={id}>
                    <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                    <h3 id={id} className="text-xl font-black mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
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

      {/* 3) GALERİ (Hizmetler altına alındı) */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="galeri-baslik">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
              Kurulum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Galerisi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Gerçek projelerden örnek kurulum fotoğrafları</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <CaseGallery images={gallery} />
          </div>
        </div>
      </section>

      {/* 4) TEKNİK ALTYAPIMIZ (Galeri altı) */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="altyapi-baslik" className="text-3xl md:text-5xl font-black mb-4">
              Teknik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Altyapımız</span>
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

      {/* 5) RAKAMLAR (Gradient bant) */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" aria-labelledby="istatistik-baslik">
        <div className="container mx-auto px-4">
          <h2 id="istatistik-baslik" className="sr-only">İstatistikler</h2>
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

      {/* 6) KULLANIM ALANLARI (Rakamlar altı) */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alanları</span>
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">Ses & ışık çözümlerimizin tercih edildiği başlıca etkinlik türleri</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8" aria-hidden="true" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
            {USE_CASES.map((useCase, index) => (
              <FocusableCard
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group"
                role="listitem"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl" role="img" aria-label={useCase.text}>{useCase.icon}</div>
                  <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{useCase.text}</span>
                </div>
              </FocusableCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7) MAKALELER (yan yana, gradient başlıklar, kutulu + arka hareketli) */}
      <section className="relative py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl animate-pulse" />
        </div>

        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Makale 1 */}
            <article className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-white/90 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-70" />
              <div className="relative p-6 md:p-10 prose prose-lg max-w-none">
                <h2 className="!mt-0 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Ses ve Işık Sistemlerinde Profesyonel Çözümler
                </h2>
                <p>
                  <strong>Sahneva</strong>, Türkiye genelinde{" "}
                  <Link href="/ses-isik-sistemleri" className="underline decoration-2 underline-offset-4 decoration-blue-600">
                    ses sistemi kiralama
                  </Link>{" "}
                  ve{" "}
                  <Link href="/ses-isik-sistemleri" className="underline decoration-2 underline-offset-4 decoration-purple-600">
                    ışık sistemi kiralama
                  </Link>{" "}
                  alanlarında kurumsal standartta çözümler sunar. Etkinliğiniz ister açık hava konseri ister
                  kapalı salon konferansı olsun; akustik keşif, teknik projelendirme, güvenli{" "}
                  <span className="underline decoration-2 underline-offset-4 decoration-emerald-600">truss &amp; rigging</span> ve canlı
                  operasyon dahil <strong>uçtan uca hizmet</strong> modelimizle tek ekipten yönetim sağlarız.
                </p>
                <p>
                  Doğru konfigüre edilmiş <span className="underline decoration-2 underline-offset-4 decoration-blue-500">line array</span>{" "}
                  sistemleriyle homojen SPL dağılımı elde edilirken, dijital mikser ve{" "}
                  <span className="underline decoration-2 underline-offset-4 decoration-purple-500">stagebox</span> mimarisi patch, routing ve
                  kayıt süreçlerini hızlandırır. RGBW spot, wash ve beam/spot armatürleri; DMX tabanlı sahne programlarıyla senkronize edilerek
                  konuşma anlaşılabilirliği yüksek, müzikal performansı dinamik ve temiz bir deneyime dönüştürür. İhtiyaca göre{" "}
                  <Link href="/led-ekran-kiralama" className="underline decoration-2 underline-offset-4 decoration-fuchsia-600">
                    LED ekran kiralama
                  </Link>{" "}
                  ve{" "}
                  <Link href="/podyum-kiralama" className="underline decoration-2 underline-offset-4 decoration-teal-600">
                    podyum kiralama
                  </Link>{" "}
                  hizmetleriyle entegre çalışırız.
                </p>
              </div>
            </article>

            {/* Makale 2 */}
            <article className="relative overflow-hidden rounded-3xl border border-purple-200/60 bg-white/90 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-70" />
              <div className="relative p-6 md:p-10 prose prose-lg max-w-none">
                <h2 className="!mt-0 font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-700">
                  Uygulama Stratejisi ve Entegre Çözümler
                </h2>
                <p>
                  Uygulama stratejimiz mekânın mimari ve akustik yapısına göre şekillenir. Açık alan etkinliklerinde rüzgâr ve zaman
                  gecikmesini dengelemek için <span className="underline decoration-2 underline-offset-4 decoration-blue-600">delay tower</span> ve{" "}
                  <span className="underline decoration-2 underline-offset-4 decoration-indigo-600">side fill</span> çözümleri kullanır; kapalı
                  salonlarda yankıyı azaltan top+sub ya da kompakt line array dizilimlerine gideriz. FOH miksaj, monitör miks ve RF planlama
                  sahne disiplini korunarak devreye alınır. Haze/duman, blinder ve strobe gibi unsurlar kritik anlarda vurguyu artırır; önceden
                  planlanmış cue’lar ile ışık show akıcı ve kontrollü ilerler.
                </p>
                <p>
                  İhtiyaca göre{" "}
                  <Link href="/kurumsal-organizasyon" className="underline decoration-2 underline-offset-4 decoration-rose-600">
                    kurumsal organizasyon yönetimi
                  </Link>{" "}
                  kapsamında sahne tasarımı, teknik çizimler ve zaman planı tek çatı altında sunulur.{" "}
                  <Link href="/podyum-kiralama" className="underline decoration-2 underline-offset-4 decoration-teal-600">
                    Podyum kiralama
                  </Link>
                  ,{" "}
                  <Link href="/led-ekran-kiralama" className="underline decoration-2 underline-offset-4 decoration-fuchsia-600">
                    LED ekran kiralama
                  </Link>{" "}
                  ve <Link href="/sahne-kiralama" className="underline decoration-2 underline-offset-4 decoration-amber-600">sahne kiralama</Link>{" "}
                  gibi tamamlayıcı hizmetlerle tam entegre çalışırız. 81 ilde belediye etkinlikleri, AVM lansmanları, fuar stantları ve
                  mezuniyet törenelerinde ölçülebilir kalite, hızlı kurulum ve yedekli altyapı standarttır. Şeffaf fiyatlama ve teknik çizimlerle
                  riskleri en aza indirir, etkinlik gününde yalnızca içerik ve performansa odaklanmanızı sağlarız.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 8) SSS + “Tüm Soruları Gör” */}
      <section className="container pb-20">
        <h2 className="text-2xl md:text-3xl font-black mb-6">Sık Sorulan Sorular</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
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
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl border bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold flex items-center justify-between">
                <span>{f.q}</span>
                <span aria-hidden className="ml-3 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/sss"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-neutral-900 text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label="Tüm SSS sorularını görüntüle"
          >
            Tüm Soruları Gör
          </Link>
        </div>
      </section>

      {/* 9) TAMAMLAYICI HİZMETLER */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30" aria-labelledby="related-services-title">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="related-services-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Tamamlayıcı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Ses & ışık kurulumunuzu tamamlayacak diğer profesyonel hizmetlerimiz</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto" role="navigation" aria-label="Tamamlayıcı hizmetler">
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
                <div className="text-3xl mb-3" role="img" aria-hidden="true">{service.icon}</div>
                <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10) CTA — Teklif Almak İster misiniz? (EN ALTA) */}
      <section className="container pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">Ses & Işık çözümleri hakkında teklif almak ister misiniz?</h2>
          <div className="flex gap-3">
            <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-90">İletişime Geç</Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}