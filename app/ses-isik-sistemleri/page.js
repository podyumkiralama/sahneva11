// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

/* -------------------- SABİTLER -------------------- */
export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Ses & Işık Sistemleri hakkında bilgi ve teklif almak istiyorum."
)}`;

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
    images: [{ url: `${ORIGIN}/img/ses-isik/hero.webp`, width: 1200, height: 630, alt: "Sahneva Ses & Işık" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva",
    description:
      "Keşif, projelendirme, kurulum, canlı miksaj ve söküm dahil uçtan uca ses & ışık çözümleri.",
    images: [`${ORIGIN}/img/ses-isik/hero.webp`],
  },
  robots: { index: true, follow: true },
};

/* -------------------- SAYFA VERİSİ -------------------- */
const CONTENT = {
  hero: {
    img: { src: "/img/ses-isik/hero.webp", alt: "Konser sahnesinde line array ses ve hareketli ışık sistemi", sizes: "(max-width: 768px) 100vw, 100vw" },
    badge: "Türkiye Geneli Profesyonel Hizmet",
    titleA: "Ses & Işık",
    titleB: "Sistemleri",
    sub: "Line array, dijital mikser ve hareketli başlıklarla profesyonel ses & ışık. Keşif, projelendirme, kurulum ve canlı operasyonu uçtan uca yönetiyoruz.",
  },
  stats: [
    { label: "Başarılı Etkinlik", value: "1200+" },
    { label: "Şehir", value: "35+" },
    { label: "Zamanında Kurulum", value: "%98" },
    { label: "Memnuniyet", value: "%99" },
  ],
  trust: ["Belediye Etkinlikleri", "Kurumsal Lansmanlar", "Konser & Festival", "Üniversite & AVM"],
  process: [
    { step: "01", title: "Keşif & Planlama", text: "Alan akustiği ve ışık senaryosu; yükseklik, rigging ve güç altyapısı." },
    { step: "02", title: "Projelendirme", text: "Line array kapsama, DMX topoloji ve truss yerleşimi; teknik çizim." },
    { step: "03", title: "Kurulum & Test", text: "Rigging, kablolama, patch; soundcheck ve ışık presetleri." },
    { step: "04", title: "Canlı Operasyon", text: "FOH miks ve ışık show kontrol; etkinlik bitişinde hızlı söküm." },
  ],
  gallery: [
    { src: "/img/ses-isik/ses-sistemi.webp", alt: "Profesyonel line array ve FOH setup" },
    { src: "/img/ses-isik/isik-sistemi.webp", alt: "Hareketli başlık ve wash ışık konfigürasyonu" },
  ],
  packages: [
    {
      name: "Salon Paketi — Konferans",
      points: [
        "2× top kolon + 1× sub (aktif), 2× monitör",
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
  ],
  faq: [
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
  ],
};

/* -------------------- BLOKLAR (Kurumsal görünümle uyumlu) -------------------- */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[72vh]" aria-labelledby="hero-title">
      {/* Arkaplan görsel + degrade (Kurumsal sayfa ile birebir) */}
      <div className="absolute inset-0">
        <Image
          src={CONTENT.hero.img.src}
          alt={CONTENT.hero.img.alt}
          fill
          priority
          className="object-cover"
          sizes={CONTENT.hero.img.sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-950 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-purple-900/50" aria-hidden="true" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 container text-center text-white py-16">
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/25 mb-8">
          <span className="relative flex w-3 h-3" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500" />
          </span>
          <span className="text-sm font-semibold">{CONTENT.hero.badge}</span>
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
          <span className="block">{CONTENT.hero.titleA}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
            {CONTENT.hero.titleB}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8">
          {CONTENT.hero.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp üzerinden teklif al"
            className="btn btn-primary rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <span aria-hidden="true">💬</span>
            <span className="ml-2 font-bold">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#hizmetler"
            title="Hizmetler bölümüne git"
            className="btn rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-sm hover:bg-white/20"
          >
            <span aria-hidden="true">🎯</span>
            <span className="ml-2 font-bold">Hizmetlerimiz</span>
          </Link>

          <a href={`tel:${PHONE}`} className="btn rounded-2xl bg-white/90 text-slate-900 hover:bg-white">
            <span aria-hidden="true">📞</span>
            <span className="ml-2 font-bold">{PHONE.replace("+90", "+90 ")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-white">
      <div className="container py-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTENT.stats.map((s) => (
          <div key={s.label} className="card border border-gray-200 text-center">
            <div className="text-3xl md:text-4xl font-black text-neutral-900">{s.value}</div>
            <div className="mt-1 text-neutral-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustRibbon() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 border-y">
      <div className="container py-6 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-700">
        {CONTENT.trust.map((t) => (
          <span key={t} className="rounded-full border bg-white px-4 py-2">{t}</span>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="hizmetler" className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="surec-baslik">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="surec-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Çalışma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Sürecimiz
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keşiften canlı operasyon ve söküme kadar kurumsal akış
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
          {CONTENT.process.map((p) => (
            <li key={p.step} className="card border border-gray-200 text-center hover:shadow-xl hover:scale-[1.02] transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-lg mb-4 mx-auto">
                {p.step}
              </div>
              <h3 className="text-lg font-black text-gray-900">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GalleryBlock() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="galeri-baslik">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="galeri-baslik" className="text-3xl md:text-5xl font-black mb-4">
            Kurulumdan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Görseller
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gerçek proje fotoğraflarıyla kalite ve düzen
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <CaseGallery images={CONTENT.gallery} />
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Paket Örnekleri</h2>
        <p className="mt-3 text-neutral-600">Etkinlik ölçeğine göre önerdiğimiz hazır setler</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {CONTENT.packages.map((pkg) => (
          <article key={pkg.name} className="card border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-xl font-extrabold text-gray-900">{pkg.name}</h3>
            <ul className="mt-4 space-y-2 text-neutral-800">
              {pkg.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm">
                  <span aria-hidden>•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            {pkg.note && <p className="mt-3 text-sm text-neutral-500">{pkg.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function KnowledgeBlocks() {
  return (
    <section className="container max-w-5xl mx-auto py-10 md:py-14 space-y-10">
      {/* Nedir? */}
      <article className="space-y-3 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ses & Işık Sistemi Nedir?</h2>
        <p>
          Amaç; her noktada anlaşılır ses ve sahneye uygun ışık atmosferi kurmaktır. Line array,
          dijital mikser, kablosuz mikrofon; RGBW spot, hareketli başlık ve truss sistemleri ile
          <strong> uçtan uca kurumsal hizmet</strong> sunuyoruz.
        </p>
      </article>

      {/* İpuçları */}
      <article className="faq-card p-6">
        <h3 className="text-xl font-bold">Doğru Sistem Seçimi İçin İpuçları</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Ses</h4>
            <ul className="mt-2 space-y-1 text-neutral-800 text-sm">
              <li>• Line array uzak mesafe; top+sub orta/küçük alanlar için.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/IEM) sahne hakimiyetini artırır.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Işık</h4>
            <ul className="mt-2 space-y-1 text-neutral-800 text-sm">
              <li>• RGBW spot + wash temel aydınlatma; beam/spot efekt içindir.</li>
              <li>• DMX sahne programları akışa göre sahnelenmelidir.</li>
              <li>• Truss yük/askı ve güvenlik (safety) standart olmalıdır.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Teknik özet tablo */}
      <article className="card border border-gray-200">
        <h3 className="text-xl font-bold mb-3">Teknik Özellikler (Özet)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500">
                <th className="p-2">Bileşen</th>
                <th className="p-2">Detay</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:p-2 [&>tr]:border-b">
              <tr><td>PA</td><td>Line array / top+sub konfigürasyonları</td></tr>
              <tr><td>Mikser</td><td>Dijital (32–48ch), sahne stagebox</td></tr>
              <tr><td>Mikrofon</td><td>Kablosuz el/yaka, enstrüman mikrofonları</td></tr>
              <tr><td>Işık</td><td>RGBW spot, wash, beam/spot, blinder, strobe</td></tr>
              <tr><td>Truss</td><td>Ön kiriş, yan kule, back truss / ground support</td></tr>
              <tr><td>Kontrol</td><td>DMX controller, show playback</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

function CTA() {
  return (
    <section className="container pb-16">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">
          Ses & Işık çözümleri hakkında teklif almak ister misiniz?
        </h2>
        <div className="flex gap-3">
          <Link href="/iletisim" className="btn rounded-lg bg-white text-blue-700 hover:opacity-90">
            İletişime Geç
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-lg border border-white bg-transparent hover:bg-white/20"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-black mb-6">Sık Sorulan Sorular</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {CONTENT.faq.map((f) => (
          <details key={f.q} className="faq-card p-5 group">
            <summary className="cursor-pointer list-none text-lg font-semibold flex items-center justify-between">
              <span>{f.q}</span>
              <span aria-hidden className="ml-3 transition group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SAYFA -------------------- */
export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <TrustRibbon />
      <Process />
      <GalleryBlock />
      <KnowledgeBlocks />
      <Packages />
      <CTA />
      <FAQ />

      {/* JSON-LD: Service + Breadcrumb (Kurumsal ile aynı pattern) */}
      <Script
        id="ld-service-audio-light"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Ses ve Işık Sistemleri Kiralama",
            name: "Ses ve Işık Sistemleri Kiralama",
            url: `${ORIGIN}/ses-isik-sistemleri`,
            description:
              "Line array, dijital mikser, kablosuz mikrofon, hareketli başlık, truss ve canlı operasyonla Türkiye genelinde ses & ışık sistemleri kiralama.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "Organization",
              name: "Sahneva",
              url: ORIGIN,
              telephone: "+90 545 304 8671",
              address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
              logo: `${ORIGIN}/logo.png`,
            }
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-audio-light"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${ORIGIN}/` },
              { "@type": "ListItem", position: 2, name: "Ses ve Işık Sistemleri", item: `${ORIGIN}/ses-isik-sistemleri` },
            ],
          }),
        }}
      />
    </>
  );
}
