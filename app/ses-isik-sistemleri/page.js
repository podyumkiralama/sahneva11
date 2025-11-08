// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <span aria-hidden="true" className="text-2xl">🖼️</span>
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+ses+ve+isik+sistemleri+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkurumsal%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

/* ================== META ================== */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
  description:
    "Konser, festival ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri. Line array, dijital mikser, hareketli başlık, truss ve canlı operasyon.",
  alternates: { canonical: `${ORIGIN}/ses-isik-sistemleri` },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
    description:
      "Türkiye genelinde uçtan uca ses & ışık çözümleri: keşif, projelendirme, kurulum, canlı miksaj ve söküm.",
    url: `${ORIGIN}/ses-isik-sistemleri`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [{ url: `${ORIGIN}/img/ses-isik/hero.webp`, width: 1200, height: 630, alt: "Sahneva Ses & Işık Sistemleri" }],
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
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s.toLowerCase().replace(/&/g, " ve ").replace(/[^a-z0-9çğıöşü\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

const HERO = {
  src: "/img/ses-isik/hero.webp",
  alt:
    "Konser ve kurumsal etkinlikler için profesyonel ses ve ışık sistemleri; line array, hareketli başlık ve truss kurulumu",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
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
    features: ["32–48ch dijital miks", "Sahnede stagebox", "Kayıt & playback"],
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

const USE_CASES = [
  { icon: "🏢", text: "Kurumsal lansman ve toplantılar" },
  { icon: "💍", text: "Düğün, nişan ve özel davetler" },
  { icon: "🎤", text: "Konser, festival ve sahne performansları" },
  { icon: "🎓", text: "Mezuniyet törenleri ve okul etkinlikleri" },
  { icon: "🏛️", text: "Belediye organizasyonları ve törenler" },
  { icon: "🛍️", text: "AVM etkinlikleri ve fuar stantları" },
];

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[72vh]" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image src={HERO.src} alt={HERO.alt} fill priority className="object-cover" sizes={HERO.sizes} />
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
          <span className="block mt-2">Line array, dijital mikser, hareketli başlık ve truss ile anahtar teslim çözümler</span>
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
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section id="hizmetler" className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="hizmetler-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Ses & Işık{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keşif, projelendirme, kurulum, canlı miks ve söküm dahil uçtan uca hizmet
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service) => {
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
  );
}

/* ================== Galeri (4 görünür + gizli ekler) ================== */
const GALLERY_VISIBLE = [
  { src: "/img/ses-isik/1.webp", alt: "Line array ve FOH kurulum" },
  { src: "/img/ses-isik/2.webp", alt: "Hareketli başlık ve wash ışık" },
  { src: "/img/ses-isik/3.webp", alt: "Truss ve rigging uygulaması" },
  { src: "/img/ses-isik/4.webp", alt: "Konser canlı operasyon" },
];

// Işıklı kutu için ileride eklenecek görseller (sayfada görünmesin, lightbox'ta görünsün)
const GALLERY_HIDDEN = [
  { src: "/img/ses-isik/5.webp", alt: "Sahne arka plan LED ve beam" },
  { src: "/img/ses-isik/6.webp", alt: "DMX kontrol ve preset hazırlığı" },
  { src: "/img/ses-isik/7.webp", alt: "Delay tower ve kapsama" },
];

function Gallery() {
  // CaseGallery bu prop'u destekliyorsa 4 görünür, diğerleri lightbox'ta
  const allImages = [...GALLERY_VISIBLE, ...GALLERY_HIDDEN];
  return (
    <section className="py-16 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Kurulum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Galerisi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Gerçek projelerden örnek kurulum fotoğrafları</p>
        </div>

        {/* Ekranda tek satır 4 görsel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {GALLERY_VISIBLE.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-white">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
            </div>
          ))}
        </div>

        {/* Lightbox/Modal için tüm listeyi CaseGallery'e veriyoruz */}
        <div className="max-w-6xl mx-auto">
          <CaseGallery images={allImages} visibleCount={4} />
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const items = {
    pa: "Line array / top+sub konfigürasyonları • Homojen kapsama",
    mixer: "32–48ch dijital mikser • Stagebox • Çok kanallı kayıt",
    wireless: "Kablosuz el/yaka • RF planlama • Anten dağıtım",
    lighting: "RGBW spot/wash • Beam/spot • Blinder/strobe/haze",
    truss: "Ön/yan/arka kiriş • Ground support • Rigging güvenliği",
    control: "DMX controller • Show playback • Ölçüm & kalibrasyon",
  };
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="altyapi-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Teknik{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Altyapımız</span>
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(items).map(([key, value]) => (
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
  );
}

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "1200+", label: "Etkinlik" },
    { value: "50+", label: "Kurumsal Müşteri" },
    { value: "81", label: "İl" },
    { value: "10+", label: "Yıl Deneyim" },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" aria-labelledby="istatistik-baslik">
      <div className="container mx-auto px-4">
        <h2 id="istatistik-baslik" className="sr-only">İstatistikler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-5xl font-black mb-2">{s.value}</div>
              <div className="text-blue-100 text-sm">{s.label}</div>
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
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Kullanım{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alanları</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">Ses & ışık çözümlerimizin tercih edildiği başlıca etkinlik türleri</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 group"
              role="listitem"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl" role="img" aria-label={uc.text}>{uc.icon}</div>
                <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{uc.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Makaleler (İYİLEŞTİRİLMİŞ) ================== */
function Articles() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="makale-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="makale-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Bilgi &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Rehber</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel ses ve ışık sistemleri hakkında detaylı bilgiler ve uzman görüşleri
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale - Daha Geniş ve Detaylı */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-semibold">📚 Kapsamlı Rehber</span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-semibold">⭐ Uzman Görüşü</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                  Ses ve Işık Sistemlerinde Profesyonel Çözümler
                </h3>
                <p className="text-blue-100 mt-4 text-lg leading-relaxed">
                  Kurumsal standart, hızlı kurulum ve ölçülebilir kalite ile etkinliklerinizde mükemmel performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-gray-900 flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-2">🔊</span>
                      Ses Sistemleri
                    </h4>
                    <p>
                      <strong>Sahneva</strong>, Türkiye genelinde{" "}
                      <Link href="/ses-isik-sistemleri" className="font-semibold text-blue-600 hover:text-blue-700">
                        ses sistemi kiralama
                      </Link>{" "}
                      ve{" "}
                      <Link href="/ses-isik-sistemleri" className="font-semibold text-blue-600 hover:text-blue-700">
                        ışık sistemi kiralama
                      </Link>{" "}
                      alanlarında kurumsal standartta çözümler sunar.
                    </p>
                    <p>
                      Etkinliğiniz ister açık hava konseri ister kapalı salon konferansı olsun; akustik keşif, teknik projelendirme, 
                      güvenli <em>truss & rigging</em> ve canlı operasyon dahil <strong>uçtan uca hizmet</strong> modelimizle 
                      tek ekipten yönetim sağlarız.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-gray-900 flex items-center gap-3">
                      <span className="bg-purple-100 text-purple-600 rounded-full p-2">💡</span>
                      Işık Sistemleri
                    </h4>
                    <p>
                      Doğru konfigüre edilmiş <em>line array</em> sistemleriyle homojen SPL dağılımı elde edilirken, 
                      dijital mikser ve <em>stagebox</em> mimarisi patch, routing ve kayıt süreçlerini hızlandırır.
                    </p>
                    <p>
                      RGBW spot, wash ve beam/spot armatürleri; DMX tabanlı sahne programlarıyla senkronize edilerek 
                      konuşma anlaşılabilirliği yüksek, müzikal performansı dinamik ve temiz bir deneyime dönüştürür.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-lg mb-3 flex items-center gap-2">
                    <span className="text-xl">💡</span> Uygulama Stratejisi
                  </h5>
                  <p className="text-gray-700 mb-0">
                    Uygulama stratejimiz mekânın mimari ve akustik yapısına göre şekillenir. Açık alan etkinliklerinde 
                    rüzgâr ve zaman gecikmesini dengelemek için <em>delay tower</em> ve <em>side fill</em> çözümleri kullanır; 
                    kapalı salonlarda yankıyı azaltan top+sub ya da kompakt line array dizilimlerine gideriz.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <span className="bg-green-100 text-green-600 rounded-full p-2">🚀</span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "🎯", title: "Detaylı Keşif", desc: "Akustik analiz ve mekan değerlendirmesi" },
                      { icon: "📊", title: "Line Array Simülasyon", desc: "Doğru kapsama için profesyonel planlama" },
                      { icon: "🔒", title: "Güvenli Rigging", desc: "Sertifikalı ekipman ve uzman ekip" },
                      { icon: "🎭", title: "Programlama", desc: "Soundcheck ve cue planlı ışık programlama" },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                            <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  FOH miksaj, monitör miks ve RF planlama; sahne disiplini korunarak hızlıca devreye alınır. 
                  Haze/duman, blinder ve strobe gibi unsurlar kritik anlarda vurguyu artırır; önceden planlanmış 
                  cue'lar ile ışık show akıcı ve kontrollü şekilde ilerler.
                </p>
              </div>
            </div>
          </article>

          {/* Yan Makaleler - Daha Kompakt */}
          <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
              <h3 className="text-xl font-black tracking-tight leading-tight">
                Teknik Entegrasyon ve Uygulama
              </h3>
              <p className="text-blue-100 mt-2 text-sm">Akışa göre programlanmış ışık show ve FOH miksaj</p>
            </header>

            <div className="p-6">
              <div className="prose prose-sm max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Akustik ve izleyici dağılımını temel alarak kapsama, gecikme ve yankı parametreleri üzerinden 
                  optimum ses & ışık yerleşimi planlarız.
                </p>
                <p>
                  Açık alanlarda <em>delay tower</em> ile zaman dengelemesi sağlanırken, iç mekânda yankıyı 
                  azaltacak dizilimler ve hedeflenmiş ışık açıları tercih edilir.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">📋 Teknik Özellikler</h4>
                  <ul className="text-sm space-y-1">
                    <li>• DMX topolojisi ve güvenli kablolama</li>
                    <li>• FOH ve monitör miks senkronizasyonu</li>
                    <li>• RF planlama ile maksimum verimlilik</li>
                    <li>• Haze/duman ve efekt cue planlaması</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h3 className="text-xl font-black tracking-tight leading-tight">
                Etkinlik Türlerine Özel Çözümler
              </h3>
              <p className="text-blue-100 mt-2 text-sm">Her etkinlik türüne özel ses ve ışık stratejileri</p>
            </header>

            <div className="p-6">
              <div className="prose prose-sm max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                      <span className="bg-blue-100 text-blue-600 rounded p-1">🏢</span>
                      Kurumsal Etkinlikler
                    </h4>
                    <p className="text-xs">Net ve anlaşılır konuşma, profesyonel görünüm</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                      <span className="bg-purple-100 text-purple-600 rounded p-1">🎤</span>
                      Konser & Festival
                    </h4>
                    <p className="text-xs">Yüksek enerji, güçlü atmosfer, dinamik performans</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                      <span className="bg-green-100 text-green-600 rounded p-1">💍</span>
                      Özel Davetler
                    </h4>
                    <p className="text-xs">Samimi atmosfer, yumuşak aydınlatma, kaliteli ses</p>
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

/* ================== SSS + "Tüm Soruları Gör" ================== */
function FAQ() {
  const faqs = [
    { 
      q: "Hangi sistem benim etkinliğime uygun?", 
      a: "Alan, seyirci sayısı ve sahne boyutuna göre line array veya top+sub öneriyoruz. Kısa keşif sonrası en verimli yapılandırmayı sunarız." 
    },
    { 
      q: "Kurulum süresi ne kadar?", 
      a: "Salon kurulumları aynı gün; dış mekân/rigging gereken projeler 1 gün önce kurulum + etkinlik günü soundcheck şeklinde planlanır." 
    },
    { 
      q: "Canlı operasyon ve mühendislik dahil mi?", 
      a: "Evet. FOH miksaj, monitör miks ve ışık show ekiplerimiz tarafından canlı yönetilir." 
    },
    { 
      q: "Güç altyapısı kimde?", 
      a: "Nakliye ve kurulum bizde. Güç altyapısı (jeneratör/tesisat) bilgileri sizden; yönlendirme ve koordinasyonu biz yapıyoruz." 
    },
  ];
  
  return (
    <section className="py-16 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="sss-baslik" className="text-3xl md:text-4xl font-black mb-4">
            Sık Sorulan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
          </h2>
          <p className="text-lg text-gray-600">Merak ettiğiniz soruların cevapları</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, index) => (
            <details 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200 open:bg-blue-50 open:border-blue-200 border border-transparent open:border"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-semibold text-gray-900">
                <span>{f.q}</span>
                <span 
                  aria-hidden="true" 
                  className="ml-4 transition-transform duration-300 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0"
                >
                  ⌄
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed pl-2 border-l-2 border-blue-500 ml-1">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sss"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            title="Sık Sorulan Sorular sayfasındaki tüm sorular"
          >
            <span aria-hidden="true" className="text-xl">📚</span> 
            <span>Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const links = [
    { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "📐", desc: "Profesyonel sahne platformları" },
    { href: "/led-ekran-kiralama", title: "LED Ekran", icon: "🖥️", desc: "Yüksek çözünürlüklü ekranlar" },
    { href: "/ses-isik-sistemleri", title: "Ses & Işık", icon: "🎵", desc: "Profesyonel ses ve ışık sistemleri" },
    { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🎪", desc: "Hazır sahne çözümleri" },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30" aria-labelledby="related-services-title">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="related-services-title" className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Tamamlayıcı{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Kurulumunuzu tamamlayacak diğer profesyonel hizmetlerimiz
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" aria-hidden="true" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" role="navigation" aria-label="Tamamlayıcı hizmetler">
          {links.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-neutral-100 hover:border-blue-200 transition-all duration-300 hover:scale-105 text-center focus:outline-none focus:ring-4 focus:ring-blue-300/50"
              aria-label={`${s.title} hizmeti sayfasına git`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-blue-600 transition-colors mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Profesyonel Ses & Işık Çözümleri İster Misiniz?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Etkinliğiniz için en uygun ses ve ışık sistemlerini sunalım. Ücretsiz keşif ve teklif için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span aria-hidden="true">📞</span> 
                <span className="ml-2">İletişime Geç</span>
              </Link>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span aria-hidden="true">💬</span> 
                <span className="ml-2">WhatsApp'tan Yaz</span>
              </a>
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
    <Script
      id="ld-json-ses-isik"
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
