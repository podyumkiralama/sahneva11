// app/kurumsal-organizasyon/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

/* -------------------- META -------------------- */
export const metadata = {
  title: "Kurumsal Organizasyon Çözümleri | Sahneva",
  description:
    "Lansman, konferans, fuar, festival ve kurumsal etkinlikler için uçtan uca sahne, podyum, LED ekran, ses & ışık çözümleri. Keşif, projelendirme, kurulum, canlı operasyon.",
  alternates: { canonical: "https://www.sahneva.com/kurumsal-organizasyon" },
  openGraph: {
    title: "Kurumsal Organizasyon Çözümleri | Sahneva",
    description:
      "Türkiye genelinde kurumsal etkinlik üretimi: sahne, podyum, LED ekran, ses & ışık, truss ve teknik operasyon.",
    url: "https://www.sahneva.com/kurumsal-organizasyon",
    type: "article",
    images: [{ url: "/img/kurumsal/hero.webp", width: 1200, height: 630, alt: "Sahneva Kurumsal Organizasyon" }],
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 86400;

/* -------------------- SABİTLER -------------------- */
const PHONE = "+905453048671";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Kurumsal Organizasyon hizmetleri hakkında bilgi ve teklif almak istiyorum."
)}`;

const HERO = {
  badge: "Kurumsal Standart • Türkiye Geneli",
  titleA: "KURUMSAL",
  titleB: "ORGANİZASYON",
  sub: "Sahne • Podyum • LED Ekran • Ses & Işık • Truss • Çadır • Teknik Operasyon – hepsi tek ekipten, tek sorumlulukla.",
  bgWord: "CORPORATE",
};

const STATS = [
  { label: "Etkinlik", value: "1200+" },
  { label: "Şehir", value: "35+" },
  { label: "Dakik Kurulum", value: "%98" },
  { label: "Memnuniyet", value: "%99" },
];

const VALUE_CARDS = [
  {
    title: "Uçtan Uca Yönetim",
    text: "Keşif, projelendirme, kurulum, canlı yayın/show kontrol ve söküm dahil.",
    icon: "🧭",
  },
  {
    title: "Tek Ekip • Tek Sorumluluk",
    text: "Sahne, ses-ışık, LED, truss ve çadır tek ekipten; yüklenici karmaşası yok.",
    icon: "🤝",
  },
  {
    title: "Kurumsal SLA & Güvenlik",
    text: "Sigortalı ekip, rigging güvenliği, yedekli ekipman ve zamanında teslim.",
    icon: "🛡️",
  },
];

const PROCESS = [
  { step: "1", title: "Keşif & Plan", text: "Mekan analizi, akış planı, risk ve zaman yönetimi." },
  { step: "2", title: "Projelendirme", text: "Sahne/LED yerleşimi, ses kapsamı, ışık senaryosu, güç/rigging." },
  { step: "3", title: "Kurulum & Test", text: "Truss, kablolama, patch, soundcheck ve ışık ön programlama." },
  { step: "4", title: "Canlı Operasyon", text: "FOH miks, ışık show kontrol ve etkinlik sonrası hızlı söküm." },
];

const PACKAGES = [
  {
    name: "Kurumsal Lansman — Orta",
    points: [
      "6×8 m sahne + etek & halı",
      "P3.9 LED ekran (8–12 m²) + medya server",
      "Top+sub PA + 2 monitör + dijital mikser (24ch)",
      "Ön kiriş + 8× LED spot + 4× wash",
      "Teknik ekip, kurulum/operasyon/söküm",
    ],
    note: "Salon/otelde ürün/marka lansmanları.",
  },
  {
    name: "Konferans — Pro",
    points: [
      "8×10 m sahne + arka fon + kürsü",
      "P2.5/P3.9 LED (12–20 m²) + switcher",
      "Line array (L/R) + stagebox + kablosuz sistemler",
      "Truss U set + hareketli başlık + sahne/ön ışık",
      "Simültane/çoklu sunum akış desteği",
    ],
    note: "Çok oturumlu kurumsal programlar.",
  },
  {
    name: "Festival/Outdoor — XL",
    points: [
      "10×12 m sahne + yan kule + bariyer",
      "P3.9 LED (20–40 m²) + kamera",
      "Line array (L/R + delays) + monitörleme",
      "Full hareketli ışık rig'i + efektler",
      "Rigging, jeneratör planı ve kapsamlı canlı operasyon",
    ],
    note: "Yüksek katılımlı açık hava organizasyonları.",
  },
];

const TRUST_ITEMS = [
  "Belediye & Kamu Etkinlikleri",
  "Kurumsal Lansmanlar",
  "Üniversite & AVM",
  "Konser & Festival",
];

const FAQ = [
  {
    q: "Tüm ihtiyaçları tek ekipten alabilir miyiz?",
    a: "Evet. Sahne, podyum, LED, ses-ışık, truss, çadır ve teknik operasyon tek ekipten, tek sorumlulukla yönetilir.",
  },
  {
    q: "Zaman planı ve kurulum süreleri nasıl?",
    a: "Salon projeleri genelde aynı gün; açık alan/rigging gereken projeler bir gün ön kurulum + etkinlik günü soundcheck şeklinde ilerler.",
  },
  {
    q: "Güvenlik ve sigorta kapsamı var mı?",
    a: "Evet. Rigging güvenliği, ekipman yedeklemesi ve sigortalı ekip standardımızdır.",
  },
  {
    q: "Kapsam ve bütçe nasıl belirleniyor?",
    a: "Mekan, katılımcı sayısı ve akışa göre optimum kapsamı netleştirip şeffaf kalemler halinde tekliflendiriyoruz.",
  },
];

/* -------------------- BLOKLAR -------------------- */
function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      {/* arka plan lekeleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-30" />
      </div>

      {/* büyük arka plan yazısı */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
        <h1 className="text-[90px] md:text-[160px] font-black text-white tracking-wider">
          {HERO.bgWord}
        </h1>
      </div>

      {/* içerik */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{HERO.badge}</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">{HERO.titleA}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
              {HERO.titleB}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {HERO.sub}
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
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-white p-6 text-center">
            <div className="text-3xl md:text-4xl font-black text-neutral-900">{s.value}</div>
            <div className="mt-1 text-neutral-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50/50">
      <div className="container py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black">Neden Sahneva?</h2>
          <p className="mt-3 text-neutral-600">Kurumsal etkinliklerde tek elden çözüm ve kesintisiz operasyon</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_CARDS.map((c) => (
            <article key={c.title} className="rounded-2xl border bg-white p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-3">{c.icon}</div>
              <h3 className="text-xl font-extrabold">{c.title}</h3>
              <p className="mt-2 text-neutral-700">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Süreç Nasıl İşliyor?</h2>
        <p className="mt-3 text-neutral-600">Planlamadan canlı operasyona kadar şeffaf iş akışı</p>
      </div>
      <ol className="grid gap-6 md:grid-cols-4">
        {PROCESS.map((p) => (
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

function GalleryBlock() {
  const images = [
    { src: "/img/kurumsal/1.webp", alt: "Kurumsal lansman sahne ve LED kurulum" },
    { src: "/img/kurumsal/2.webp", alt: "Konferans sahne, projeksiyon ve ses sistemi" },
    { src: "/img/kurumsal/3.webp", alt: "Festival sahnesi, line array ve ışık rig'i" },
    { src: "/img/kurumsal/4.webp", alt: "Açık alan etkinliği truss ve sahne kurulumu" },
  ];
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Gerçek Projelerden</h2>
        <p className="mt-3 text-neutral-600">CaseGallery ile örnek kurulumlarımız</p>
      </div>
      <CaseGallery images={images} />
    </section>
  );
}

function Packages() {
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black">Paket Önerileri</h2>
        <p className="mt-3 text-neutral-600">Mekana ve akışa göre sık kullanılan konfigürasyonlar</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <article key={pkg.name} className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-extrabold">{pkg.name}</h3>
            <ul className="mt-4 space-y-2 text-neutral-800">
              {pkg.points.map((pt) => (
                <li key={pt} className="flex gap-2"><span aria-hidden>•</span><span>{pt}</span></li>
              ))}
            </ul>
            {pkg.note && <p className="mt-3 text-sm text-neutral-500">{pkg.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-blue-50/60 border-y">
      <div className="container py-6 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-700">
        {TRUST_ITEMS.map((t) => (
          <span key={t} className="rounded-full border bg-white px-4 py-2">{t}</span>
        ))}
      </div>
    </section>
  );
}

function FAQBlock() {
  return (
    <section className="container pb-20 pt-14">
      <h2 className="text-2xl md:text-3xl font-black mb-6">Sık Sorulan Sorular</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {FAQ.map((f) => (
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

function CTA() {
  return (
    <section className="container pb-16">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">
          Kurumsal organizasyonunuz için hemen planlama yapalım
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

/* -------------------- SAYFA -------------------- */
export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ValueProps />
      <Process />
      <GalleryBlock />
      <Packages />
      <Trust />
      <FAQBlock />
      <CTA />

      {/* JSON-LD: Service + Breadcrumb */}
      <Script
        id="ld-service-corporate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Kurumsal Organizasyon",
            name: "Kurumsal Organizasyon Çözümleri",
            description:
              "Lansman, konferans, fuar ve açık hava etkinlikleri için sahne, podyum, LED ekran, ses & ışık, truss ve çadır kurulumları ile canlı operasyon.",
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
        id="ld-breadcrumb-corporate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Kurumsal Organizasyon", item: "https://www.sahneva.com/kurumsal-organizasyon" },
            ],
          }),
        }}
      />
    </>
  );
}