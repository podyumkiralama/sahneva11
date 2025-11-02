// app/masa-sandalye-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import { getService } from "@/lib/data";

// 🎛️ Lazy gallery (LED sayfasıyla aynı)
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

// ——— Servis verisi
const svc = getService("masa-sandalye");

// 📦 İçerik (LED sayfası mimarisiyle)
const CONTENT = {
  hero: {
    src: "/img/masa-sandalye/hero.webp",
    alt:
      "Masa sandalye kiralama – Napolyon ve konferans sandalyeler, banket ve bistro masalar, profesyonel yerleşim",
    overlay: true,
  },
  features: [
    { icon: "🪑", title: "Geniş Envanter", desc: "3000+ sandalye, 500+ masa" },
    { icon: "🧵", title: "Örtü & Kılıf", desc: "Keten, tafta, strech – zengin renk" },
    { icon: "🗺️", title: "Planlama", desc: "Oturma planı, numaralandırma" },
    { icon: "🚚", title: "Hızlı Teslim", desc: "İstanbul içi aynı gün seçenekleri" },
  ],
  packages: [
    {
      id: "davet-100",
      name: "Davet Seti — 100 Kişi",
      badge: "Popüler",
      specs: {
        people: 100,
        tables: { type: "Yuvarlak Ø180", count: 10 },
        chairs: { type: "Napolyon", count: 100 },
        linens: { tablecloth: 10, runner: 10 },
      },
      includes: [
        "10 × yuvarlak banket masa (Ø180 cm)",
        "100 × Napolyon sandalye (beyaz/krem)",
        "Keten masa örtüsü + runner",
        "Teslimat, yerleşim ve toplama",
      ],
      note: "Düğün, nişan ve kurumsal yemekler için şık görünüm.",
    },
    {
      id: "konferans-60",
      name: "Konferans Seti — 60 Kişi",
      badge: "Kurumsal",
      specs: {
        people: 60,
        tables: { type: "Dikdörtgen 180×75", count: 10 },
        chairs: { type: "Konferans", count: 60 },
        linens: { tablecloth: 10 },
      },
      includes: [
        "10 × dikdörtgen masa (180×75 cm)",
        "60 × konferans sandalyesi (yastıklı)",
        "Numaralandırma ve oturma planı yerleşimi",
        "Teslimat + kurulum",
      ],
      note: "Seminer, eğitim ve panel düzenleri için.",
    },
    {
      id: "kokteyl-15",
      name: "Kokteyl Seti — 15 Ünite",
      badge: "Hafif Kurulum",
      specs: {
        people: 90,
        tables: { type: "Bistro Ø60–80", count: 15 },
        chairs: { type: "—", count: 0 },
        linens: { stretchCover: 15 },
      },
      includes: [
        "15 × bistro kokteyl masası (Ø60–80 cm)",
        "Strech kılıf (beyaz/siyah/renkli)",
        "Opsiyon: fırfır/tafta şal",
        "Teslimat + toplama",
      ],
      note: "Lansman, açılış ve networking alanları için.",
    },
  ],
  gallery: [
    {
      src: "/img/sandalye/1.webp",
      alt:
        "Yuvarlak banket masa ve Napolyon sandalyelerle 100 kişilik davet düzeni",
      category: "Davet",
    },
    {
      src: "/img/sandalye/2.webp",
      alt:
        "Konferans düzeninde sıralı yastıklı sandalyeler ve dikdörtgen masalar",
      category: "Konferans",
    },
    {
      src: "/img/sandalye/3.webp",
      alt:
        "Bistro masalarla kokteyl alanı – strech kılıf ve şal ile dekoratif detaylar",
      category: "Kokteyl",
    },
  ],
  tech: {
    chairTypes: "Napolyon (ahşap/PP), Konferans, Protokol",
    tableTypes: "Yuvarlak Ø180, 180×75 dikdörtgen, Bistro Ø60–80",
    linens: "Keten & tafta örtü, strech kılıf; çoklu renk",
    logistics: "Numaralandırma, yerleşim, yönlendirme",
    capacity: "3000+ sandalye, 500+ masa",
  },
};

// 💵 Örnek birim bedeller
const PRICING = {
  chair: { napolyon: 55, konferans: 45 },
  table: { yuvarlak: 120, dikdortgen: 100, bistro: 90 },
  linen: { tablecloth: 40, runner: 15, stretchCover: 35 },
  setup: 6500,
  delivery: 3500,
  staff: 2500,
};

// 🧮 Paket fiyat hesaplayıcı
function calcPackagePrice(pkg) {
  const { tables, chairs, linens } = pkg.specs;

  const tableUnit =
    tables.type.includes("Yuvarlak")
      ? PRICING.table.yuvarlak
      : tables.type.includes("Dikdörtgen")
      ? PRICING.table.dikdortgen
      : PRICING.table.bistro;

  let chairUnit = 0;
  if (/Napolyon/i.test(chairs.type)) chairUnit = PRICING.chair.napolyon;
  else if (/Konferans/i.test(chairs.type)) chairUnit = PRICING.chair.konferans;

  const linensTotal =
    (linens?.tablecloth || 0) * PRICING.linen.tablecloth +
    (linens?.runner || 0) * PRICING.linen.runner +
    (linens?.stretchCover || 0) * PRICING.linen.stretchCover;

  const base = tables.count * tableUnit + chairs.count * chairUnit + linensTotal;

  return {
    base: Math.round(base),
    setup: PRICING.setup,
    delivery: PRICING.delivery,
    staff: PRICING.staff,
    total: Math.round(base + PRICING.setup + PRICING.delivery + PRICING.staff),
  };
}

const enrichedPackages = CONTENT.packages.map((p) => ({
  ...p,
  pricing: calcPackagePrice(p),
}));

const formatTRY = (n) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(n);

// 🎛️ Buton stilleri (LED ile aynı)
const buttonStyles = {
  primary:
    "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-900 motion-safe:focus:scale-105",
  outline:
    "inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 motion-safe:hover:scale-105 motion-safe:transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 motion-safe:focus:scale-105",
};

// 🧠 Metadata (yoğun OG + robots)
export const metadata = {
  title: `${
    svc?.title ?? "Masa & Sandalye Kiralama"
  } | Davet, Konferans, Kokteyl – Profesyonel Yerleşim | Sahneva`,
  description:
    svc?.excerpt ||
    "Napolyon ve konferans sandalyeleri, banket ve bistro masalar, örtü–kılıf; numaralandırma ve profesyonel yerleşim. İstanbul genelinde hızlı teslim.",
  alternates: { canonical: "https://www.sahneva.com/masa-sandalye-kiralama" },
  keywords: [
    "masa sandalye kiralama",
    "napolyon sandalye",
    "banket masa",
    "bistro masa kiralama",
    "konferans sandalyesi kiralama",
    "masa örtüsü kılıf",
    "istanbul masa sandalye kiralama",
  ],
  openGraph: {
    title: `${svc?.title ?? "Masa & Sandalye Kiralama"} | Sahneva`,
    description:
      svc?.desc ||
      "Davet, konferans ve kokteyl düzenleri için masa sandalye kiralama. Örtü–kılıf, planlama ve profesyonel kurulum.",
    url: "https://www.sahneva.com/masa-sandalye-kiralama",
    siteName: "Sahneva",
    type: "website",
    images: [
      {
        url: "/img/masa-sandalye/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sahneva Masa & Sandalye Kiralama – Davet ve konferans düzeni",
      },
    ],
    locale: "tr_TR",
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
};

// ——— Sayfa
export default function PremiumMasaPage() {
  const title = svc?.title ?? "Masa & Sandalye Kiralama";
  const desc =
    svc?.desc ??
    "Davet, konferans ve kokteyl düzenleriniz için zengin envanter ve profesyonel yerleşim. İstanbul genelinde hızlı teslim.";

  return (
    <div className="min-h-screen bg-white">
      {/* 🎭 HERO */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20"
        aria-labelledby="main-heading"
      >
        <div className="absolute inset-0">
          <Image
            src={CONTENT.hero.src}
            alt={CONTENT.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-purple-900/30 to-slate-950/60"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-600/15"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
          <h1
            id="main-heading"
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Masa & Sandalye{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Kiralama
            </span>
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            {desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+905453048671"
              className={buttonStyles.primary}
              aria-label="Telefonla hemen teklif al"
            >
              📞 Hemen Teklif Al
            </a>
            <Link
              href="#paketler"
              className={buttonStyles.outline}
              aria-label="Paketleri incele"
            >
              🧾 Paketleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* ⭐ Öne Çıkanlar */}
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
                Sahneva?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Geniş envanter, renk seçenekleri ve uzman lojistik ile sorunsuz
              kurulum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {CONTENT.features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center group hover:shadow-xl motion-safe:hover:scale-105 transition-all duration-300"
                role="listitem"
                tabIndex={0}
              >
                <div
                  className="text-3xl mb-4 motion-safe:group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-1 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 Paketler */}
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
              Hazır{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                Paketler
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              İhtiyacınıza uygun, anahtar teslim masa & sandalye çözümleri.
            </p>
          </div>

          <div
            className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
            role="list"
            aria-label="Masa & sandalye paketleri"
          >
            {enrichedPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                  pkg.badge === "Popüler"
                    ? "ring-4 ring-blue-500/20 transform scale-105 hover:scale-110"
                    : "hover:-translate-y-2 focus:-translate-y-2"
                }`}
                role="listitem"
                tabIndex={0}
              >
                {pkg.badge && (
                  <div
                    className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-sm font-bold z-20 text-white shadow-lg transition-all duration-300 ${
                      pkg.badge === "Popüler"
                        ? "bg-gradient-to-r from-orange-500 to-red-500"
                        : pkg.badge === "Kurumsal"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600"
                        : "bg-gradient-to-r from-green-500 to-emerald-600"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6 text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-10" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-3xl" aria-hidden="true">
                        {pkg.id === "davet-100" && "🎉"}
                        {pkg.id === "konferans-60" && "🏢"}
                        {pkg.id === "kokteyl-15" && "🥂"}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-blue-300">
                          {pkg.specs.people} Kişi
                        </div>
                        <div className="text-xs text-blue-200">KAPASİTE</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-black mb-5 leading-tight border-b border-white/20 pb-4">
                      {pkg.name}
                    </h3>

                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      role="list"
                      aria-label="Paket özellikleri"
                    >
                      <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm" role="listitem">
                        <div className="text-blue-300 text-xs mb-1">MASA</div>
                        <div className="font-bold text-white">
                          {pkg.specs.tables.type} × {pkg.specs.tables.count}
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm" role="listitem">
                        <div className="text-blue-300 text-xs mb-1">SANDALYE</div>
                        <div className="font-bold text-white">
                          {pkg.specs.chairs.type}
                          {pkg.specs.chairs.count ? ` × ${pkg.specs.chairs.count}` : ""}
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm" role="listitem">
                        <div className="text-blue-300 text-xs mb-1">ÖRTÜ/KILIF</div>
                        <div className="font-bold text-white">
                          {pkg.specs.linens.tablecloth ? `Örtü × ${pkg.specs.linens.tablecloth}` : ""}
                          {pkg.specs.linens.runner ? `, Runner × ${pkg.specs.linens.runner}` : ""}
                          {pkg.specs.linens.stretchCover ? `, Kılıf × ${pkg.specs.linens.stretchCover}` : ""}
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm" role="listitem">
                        <div className="text-blue-300 text-xs mb-1">LOJİSTİK</div>
                        <div className="font-bold text-white">Teslim & Yerleşim</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <span
                        className="w-2 h-2 bg-blue-600 rounded-full"
                        aria-hidden="true"
                      />
                      Paket İçeriği
                    </h4>
                    <ul className="space-y-3" role="list">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 text-sm p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                          role="listitem"
                        >
                          <span
                            className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm mb-6">
                    <div className="text-center mb-5">
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        GÜNLÜK KİRA (İSTANBUL)
                      </div>
                      <div className="text-3xl font-black text-gray-900 mt-2">
                        {formatTRY(pkg.pricing.total)}
                        <span className="text-sm text-gray-500 font-normal ml-2">
                          + KDV
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <Row label="Ekipman (masa/sandalye/örtü)" value={formatTRY(pkg.pricing.base)} dotClass="bg-blue-500" />
                      <Row label="Kurulum & Yerleşim" value={formatTRY(pkg.pricing.setup)} dotClass="bg-green-500" />
                      <Row label="Teslimat (İstanbul)" value={formatTRY(pkg.pricing.delivery)} dotClass="bg-purple-500" />
                      <Row label="Operasyon & Personel" value={formatTRY(pkg.pricing.staff)} dotClass="bg-pink-500" />

                      <div className="mt-5 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-900 text-base">
                            Toplam
                          </span>
                          <span className="font-black text-xl text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                            {formatTRY(pkg.pricing.total)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/905453048671?text=Merhaba, ${encodeURIComponent(
                      pkg.name
                    )} hakkında detaylı bilgi ve teklif almak istiyorum.`}
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl w-full text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                    aria-label={`${pkg.name} için WhatsApp üzerinden hemen teklif alın`}
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      💬 Hemen Teklif Al <span aria-hidden>→</span>
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                      aria-hidden="true"
                    />
                  </a>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      <span aria-hidden="true">⏱️</span>
                      <strong> 2 saat içinde</strong> detaylı teklif.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 🖼️ Galeri */}
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
              300+ başarılı kurulumdan seçkiler. Gerçek etkinlik görselleri.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <CaseGallery images={CONTENT.gallery} />
          </div>
        </div>
      </section>

      {/* 📝 TEK BİR GÜÇLÜ SEO MAKALESİ (tekrarlar temizlendi) */}
      <SeoArticle />

      {/* 🔎 JSON-LD */}
      <StructuredData packages={enrichedPackages} />
    </div>
  );
}

// ——— Alt bileşenler
function Row({ label, value, dotClass }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="text-gray-600 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 ${dotClass} rounded-full`} aria-hidden="true" />
        {label}
      </span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

// 📝 SEO makalesi (orijinal metin + düzenlenmiş ekler, tekrar yok)
function SeoArticle() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="article-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 md:p-12 text-center">
            <h2
              id="article-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
            >
              Masa & Sandalye Kiralama 2025 — Kapsamlı Rehber
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Davet, konferans ve kokteyl düzenlerinde doğru ürün seçimi, yerleşim
              planı ve maliyet kalemleri için pratik öneriler.
            </p>
          </header>

          <div className="p-6 md:p-8 lg:p-12">
            {/* Nedir? */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Nedir ve Neden Önemlidir?
              </h3>
              <p className="text-neutral-800 leading-relaxed">
                Etkinliğinizin akışı sadece sahneyle değil,{" "}
                <strong>oturma konforu ve düzeni</strong> ile de şekillenir.{" "}
                <strong>Sahneva</strong> olarak Napolyon/konferans sandalyeleri ile
                yuvarlak banket, dikdörtgen ve bistro masaları;{" "}
                <em>teslimat, kurulum ve toplama</em> dahil anahtar teslim sunarız.
                Örtü, kılıf, runner ve numaralandırma ile alan estetiği ve akışı
                netleşir.
              </p>
            </section>

            {/* Yerleşim ve İpuçları */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Yerleşim Önerileri (Düğün & Kurumsal)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border p-5">
                  <h4 className="text-lg font-bold">Düğün / Davet</h4>
                  <ul className="mt-3 space-y-2 text-neutral-800 text-sm">
                    <li>• <strong>Yuvarlak banket</strong> masalarda 8–10 kişi idealdir.</li>
                    <li>• <strong>Napolyon</strong> + keten örtü/runner şık görünüm sağlar.</li>
                    <li>• Dans pisti çevresinde ≥2,5 m sirkülasyon bırakın.</li>
                    <li>• Masa numaralandırma girişten görünür olmalı.</li>
                  </ul>
                </div>
                <div className="rounded-xl border p-5">
                  <h4 className="text-lg font-bold">Kurumsal / Konferans</h4>
                  <ul className="mt-3 space-y-2 text-neutral-800 text-sm">
                    <li>• Sahne görüşü için <strong>tiyatro</strong> ya da <strong>sınıf</strong> düzeni.</li>
                    <li>• U/boardroom toplantılarda 180×75 cm masalar doğru derinlik sağlar.</li>
                    <li>• Acil kaçış aksları ≥1,5 m açık kalmalı.</li>
                    <li>• İsimlik, notluk, su servisleri için masa üstü düzenleyin.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Maliyet Tablosu */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Maliyet ve Fiyatlandırma (Özet)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th scope="col" className="p-4 text-left">Kalem</th>
                      <th scope="col" className="p-4 text-left">Örnek Birim</th>
                      <th scope="col" className="p-4 text-left">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { k: "Sandalye", b: "Napolyon 55₺", a: "Adet/gün bazlı" },
                      { k: "Masa", b: "Ø180 banket 120₺", a: "Tipine göre değişir" },
                      { k: "Örtü/Kılıf", b: "Keten 40₺", a: "Renk ve kumaşa göre" },
                      { k: "Kurulum", b: "6.500₺", a: "Yerleşim ve toplama" },
                      { k: "Teslimat", b: "3.500₺", a: "Mesafe/kat durumuna göre" },
                      { k: "Operasyon", b: "2.500₺", a: "Ek personel & planlama" },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <th scope="row" className="p-4 font-semibold text-blue-600">
                          {row.k}
                        </th>
                        <td className="p-4">{row.b}</td>
                        <td className="p-4">{row.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 mt-3">
                Hızlı teklif için tarih/konum, adetler, model ve örtü–kılıf rengi
                bilgilerini iletmeniz yeterli.
              </p>
            </section>

            {/* SSS */}
            <section className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Sık Sorulan Sorular
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "Aynı gün teslim ve kurulum mümkün mü?",
                    a: "Program uygunluğuna bağlı olarak ekspres ekip yönlendiriyoruz; detaylar teklifte netleşir.",
                  },
                  {
                    q: "Örtü ve kılıf renk seçenekleri neler?",
                    a: "Keten/tafta örtüler ve strech kılıflarda beyaz, siyah, krem, altın, bordo ve kurumsal renklere uygun seçenekler mevcut.",
                  },
                  {
                    q: "Numaralandırma ve oturma planı yapıyor musunuz?",
                    a: "Evet. Masa numaralandırma, isimlik ve yönlendirme tabelalarıyla akışı düzenliyoruz.",
                  },
                  {
                    q: "Şehir dışına hizmet veriyor musunuz?",
                    a: "Evet, lojistik planına göre şehir dışı projelere de hizmet veriyoruz.",
                  },
                ].map((i, idx) => (
                  <div key={idx} className="rounded-xl border p-5 bg-white">
                    <h4 className="text-lg font-bold mb-2">{i.q}</h4>
                    <p className="text-neutral-700 text-sm">{i.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-10">
              <h3 className="text-2xl md:text-3xl font-black mb-5">
                Profesyonel Masa & Sandalye Çözümleri
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Davet, konferans ve kokteyl etkinliklerinde hızlı teslim, zengin
                envanter ve deneyimli ekip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-gray-100 motion-safe:hover:scale-105 transition-all duration-300"
                  aria-label="Hemen telefonla teklif alın - +90 545 304 86 71"
                >
                  📞 Hemen Teklif Al
                </a>
                <Link
                  href="#paketler"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 motion-safe:hover:scale-105 transition-all duration-300"
                  aria-label="Paketleri inceleyin"
                >
                  🧾 Paketleri İncele
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// 🧱 Structured Data
function StructuredData({ packages }) {
  const siteUrl = "https://www.sahneva.com";
  const pageUrl = `${siteUrl}/masa-sandalye-kiralama`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Masa ve Sandalye Kiralama",
    name: "Masa & Sandalye Kiralama Hizmeti",
    description:
      "Napolyon ve konferans sandalyeleri, banket ve bistro masalar; örtü–kılıf, numaralandırma ve profesyonel yerleşim.",
    provider: {
      "@type": "Organization",
      name: "Sahneva",
      url: siteUrl,
      telephone: "+905453048671",
      address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    },
    areaServed: { "@type": "City", name: "İstanbul" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Masa & Sandalye Paketleri",
      itemListElement: packages.map((pkg, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: pkg.name,
        description: `${pkg.specs.people} kişilik düzen – ${pkg.includes.join(", ")}`,
        price: pkg.pricing.total,
        priceCurrency: "TRY",
        availability: "https://schema.org/InStock",
        url: pageUrl,
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
        name: "Aynı gün teslim ve kurulum mümkün mü?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Program uygunluğuna bağlı olarak ekspres ekip yönlendiriyoruz; detaylar teklifte netleşir.",
        },
      },
      {
        "@type": "Question",
        name: "Örtü ve kılıf renk seçenekleri neler?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Keten/tafta örtüler ve strech kılıflarda beyaz, siyah, krem, altın, bordo ve kurumsal renklere uygun seçenekler mevcut.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Masa & Sandalye Kiralama", item: pageUrl },
    ],
  };

  return (
    <>
      <Script
        id="service-schema-masa"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-masa"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema-masa"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
