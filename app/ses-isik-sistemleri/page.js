// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

/* -------------------- META (segment config) -------------------- */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
  description:
    "Konser, festival ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri. Line array, dijital mikser, hareketli başlıklar, truss ve canlı operasyon.",
  alternates: { canonical: "https://www.sahneva.com/ses-isik-sistemleri" },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva Kurumsal Çözümler",
    description:
      "Türkiye genelinde uçtan uca ses & ışık çözümleri: keşif, projelendirme, kurulum, canlı miksaj ve söküm.",
    url: "https://www.sahneva.com/ses-isik-sistemleri",
    type: "article",
    images: [{ url: "/img/ses-isik/hero.webp", width: 1200, height: 630, alt: "Sahneva Ses & Işık" }],
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 60;

/* -------------------- SAYFA VERİSİ -------------------- */
const PHONE = "+905453048671";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Ses & Işık Sistemleri hakkında bilgi ve teklif almak istiyorum."
)}`;

const CONTENT = {
  hero: {
    titleA: "SES & IŞIK",
    titleB: "SİSTEMLERİ",
    badge: "Kurumsal Standartta Operasyon",
    sub:
      "Line array, dijital mikser ve hareketli başlıklarla profesyonel ses & ışık. Keşif, projelendirme, kurulum ve canlı operasyonu uçtan uca yönetiyoruz.",
    bgWord: "AUDIO•LIGHT",
  },
  stats: [
    { label: "Etkinlik", value: "1200+" },
    { label: "Şehir", value: "35+" },
    { label: "Dakik Kurulum", value: "%98" },
    { label: "Müşteri Memnuniyeti", value: "%99" },
  ],
  trust: [
    "Belediye Etkinlikleri",
    "Kurumsal Lansmanlar",
    "Konser & Festival",
    "Üniversite & AVM",
  ],
  process: [
    { step: "1", title: "Keşif & Planlama", text: "Alan akustiği ve ışık senaryosu; yükseklik, rigging ve güç altyapısı." },
    { step: "2", title: "Projelendirme", text: "Line array kapsama, DMX topoloji ve truss yerleşimi; teknik çizim." },
    { step: "3", title: "Kurulum & Test", text: "Rigging, kablolama, patch; soundcheck ve ışık presetleri." },
    { step: "4", title: "Canlı Operasyon", text: "FOH miks ve ışık show kontrol; etkinlik bitişinde hızlı söküm." },
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
      a: "Kapalı/ açık alan, seyirci sayısı ve sahne boyutuna göre line array veya top+sub öneriyoruz. Kısa bir keşifle en verimli yapılandırmayı sunarız.",
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

/* -------------------- BLOKLAR -------------------- */
function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      {/* arka plan ışık lekeleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
      </div>

      {/* büyük arka plan yazısı */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
        <h1 className="text-[90px] md:text-[160px] font-black text-white tracking-wider">
          {CONTENT.hero.bgWord}
        </h1>
      </div>

      {/* içerik */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{CONTENT.hero.badge}</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">{CONTENT.hero.titleA}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
              {CONTENT.hero.titleB}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {CONTENT.hero.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/iletisim"
              className="rounded-xl bg-white/90 text-slate-900 font-bold px-6 py-3 hover:bg-white transition shadow-lg"
            >
              İletişime Geç
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 text-white font-bold px-6 py-3 hover:bg-green-700 transition shadow-lg"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-xl border border-white/60 text-white font-bold px-6 py-3 hover:bg-white/10 transition"
            >
              {PHONE.replace("+90", "+90 ")}
            </a>
          </div>
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
          <div key={s.label} className="rounded-2xl border bg-white p-6 text-center">
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
    <section className="bg-gradient-to-r from-slate-50 to-blue-50/60 border-y">
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
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Süreç Nasıl İşliyor?</h2>
        <p className="mt-3 text-neutral-600">Keşiften canlı operasyon ve söküme kadar kurumsal akış</p>
      </div>
      <ol className="grid gap-6 md:grid-cols-4">
        {CONTENT.process.map((p) => (
          <li key={p.step} className="rounded-2xl border bg-white p-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {p.step}
            </div>
            <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-neutral-700">{p.text}</p>
          </li>
        ))}
      </ol>
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
      <div className="grid gap-6 md:grid-cols-3">
        {CONTENT.packages.map((pkg) => (
          <article key={pkg.name} className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-extrabold">{pkg.name}</h3>
            <ul className="mt-4 space-y-2 text-neutral-800">
              {pkg.points.map((pt) => (
                <li key={pt} className="flex gap-2">
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
      <article className="rounded-2xl border bg-white p-6">
        <h3 className="text-xl font-bold">Doğru Sistem Seçimi İçin İpuçları</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Ses</h4>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Line array uzak mesafe; top+sub orta/küçük alanlar için.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/IEM) sahne hakimiyetini artırır.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Işık</h4>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• RGBW spot + wash temel aydınlatma; beam/spot efekt içindir.</li>
              <li>• DMX sahne programları akışa göre sahnelenmelidir.</li>
              <li>• Truss yük/askı ve güvenlik (safety) standart olmalıdır.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Teknik özet tablo */}
      <article className="rounded-2xl border bg-white p-6">
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

function GalleryBlock() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Kurulumdan Görseller</h2>
        <p className="mt-3 text-neutral-600">Gerçek proje fotoğraflarıyla kalite ve düzen</p>
      </div>
      <CaseGallery images={CONTENT.gallery} />
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
          <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-90">
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
  );
}

function FAQ() {
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-black mb-6">Sık Sorulan Sorular</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {CONTENT.faq.map((f) => (
          <details key={f.q} className="group rounded-2xl border bg-white p-5">
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

      {/* JSON-LD: Service + Breadcrumb */}
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
            description:
              "Line array, dijital mikser, kablosuz mikrofon, hareketli başlık, truss ve canlı operasyonla Türkiye genelinde ses & ışık sistemleri kiralama.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "LocalBusiness",
              name: "Sahneva",
              url: "https://www.sahneva.com",
              telephone: "+90 545 304 8671",
              address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
            },
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
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Ses ve Işık Sistemleri", item: "https://www.sahneva.com/ses-isik-sistemleri" },
            ],
          }),
        }}
      />
    </>
  );
}