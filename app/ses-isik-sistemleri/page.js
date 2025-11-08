// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

/* ✅ CaseGallery: client sarmalayıcıyı lazy import ediyoruz (ssr:false KULLANMADAN) */
const CaseGallery = dynamic(() => import("@/components/CaseGalleryClient"), {
  loading: () => (
    <div
      className="h-64 flex items-center justify-center text-neutral-500"
      role="status"
      aria-live="polite"
    >
      Görseller yükleniyor…
    </div>
  ),
});

/* ───────── META ───────── */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Konser, festival ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri. Line array, robot ışık, truss ve uzman teknik ekip ile Türkiye geneli kurulum.",
  alternates: { canonical: "https://www.sahneva.com/ses-isik-sistemleri" },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
    description:
      "Line array, dijital mikser, kablosuz mikrofon ve hareketli ışıklarla kurumsal düzey ses & ışık çözümleri.",
    url: "https://www.sahneva.com/ses-isik-sistemleri",
    type: "article",
    locale: "tr_TR",
    images: [{ url: "/img/ses-isik/hero.webp", width: 1200, height: 630 }],
  },
};

export const revalidate = 86400;

/* ───────── Sabitler ───────── */
const PHONE = "+905453048671";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Ses & Işık sistemleri için teklif almak istiyorum."
)}`;

const PAGE = {
  heroTitle1: "SES & IŞIK",
  heroTitle2: "Sistemleri",
  heroDesc:
    "Line array, dijital mikser ve hareketli başlıklarla kurumsal düzey ses & ışık çözümleri. Keşif, kurulum, canlı operasyon ve söküm dahil.",
  heroImg: "/img/ses-isik/hero.webp",
  valueProps: [
    { icon: "🎚️", title: "Net & Dengeli Ses", desc: "Line array/top+sub konfigürasyonlarıyla her noktada anlaşılır ses." },
    { icon: "💡", title: "Sahne Işığı Tasarımı", desc: "RGBW spot, wash, beam/spot ile etkinlik atmosferine uygun ışık." },
    { icon: "🛠️", title: "Uçtan Uca Operasyon", desc: "Keşif, projelendirme, kurulum, canlı miks ve söküm." },
    { icon: "⏱️", title: "Hızlı Kurulum", desc: "Zaman planına uygun, minimum prova süresiyle teslimat." },
  ],
  steps: [
    { step: "01", title: "Keşif & Planlama", desc: "Alan, kapasite ve program akışına göre sistem tasarımı." },
    { step: "02", title: "Kurulum & Test", desc: "Rigging, patch ve hat testleri, sahne öncesi soundcheck." },
    { step: "03", title: "Canlı Operasyon", desc: "FOH/monitör miks ve ışık show kontrolü." },
    { step: "04", title: "Söküm & Rapor", desc: "Etkinlik kapanışı ve geri bildirim." },
  ],
  packages: [
    {
      name: "Salon Paketi — Konferans",
      includes: [
        "2× top kolon + 1× sub (aktif)",
        "2× sahne monitörü",
        "Dijital mikser (16–24ch)",
        "2× kablosuz el / yaka mikrofon",
        "2× LED spot + 2× wash",
        "Kurulum, test ve teknik ekip",
      ],
      note: "Toplantı, seminer ve salon etkinlikleri.",
    },
    {
      name: "Açık Alan Paketi — Orta",
      includes: [
        "2× line array cluster + subs",
        "Sahne monitörleme",
        "Dijital mikser (32ch) + stagebox",
        "4× kablosuz mikrofon",
        "4× hareketli başlık + 6× wash + duman",
        "Truss ön kiriş (8–10 m) + ground support",
        "Kurulum, canlı miksaj ve show control",
      ],
      note: "Açık hava lansman, festival ve mitingler.",
    },
    {
      name: "Konser Paketi — Pro",
      includes: [
        "4–6 kabin line array + subs (L/R)",
        "Side fill + drum fill",
        "48ch dijital mikser, monitör mikseri",
        "Kablosuz sistemler, DI kutuları",
        "12+ hareketli başlık (beam/spot/wash)",
        "Blinder, strobe, haze/duman",
        "Truss U set (ön/yan/arka) + rigging",
        "Kurulum, soundcheck ve canlı yönetim",
      ],
      note: "Konser ve yüksek katılımlı etkinlikler.",
    },
  ],
};

/* ───────── Yardımcı Bölümler (Kurumsal akışla uyumlu) ───────── */

function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
    >
      Ana içeriğe atla
    </a>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      {/* Dinamik gradient bloblar */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse delay-500" />
      </div>

      {/* Arka plan imaj + karartma (kurumsal stil) */}
      <Image
        src={PAGE.heroImg}
        alt="Profesyonel sahne ses ve ışık sistemleri kurulumu"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Dev arka plan yazı */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none">
        <h1 className="text-[100px] lg:text-[160px] font-black text-white tracking-wider">
          SES & IŞIK
        </h1>
      </div>

      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Kurumsal düzey ekipman & ekip</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">{PAGE.heroTitle1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
              {PAGE.heroTitle2}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {PAGE.heroDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/iletisim"
              className="rounded-xl bg-white text-neutral-900 font-bold px-6 py-3 hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-6 py-3 font-bold hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-xl bg-emerald-500 px-6 py-3 font-bold hover:bg-emerald-600"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">
            Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sahneva?</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Kurumsal standardı her ölçekte etkinliğe ölçekliyoruz.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PAGE.valueProps.map((v) => (
            <article key={v.title} className="rounded-2xl border bg-white p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="text-lg font-extrabold mb-1">{v.title}</h3>
              <p className="text-neutral-600">{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black">Süreç Nasıl İşler?</h2>
          <p className="text-neutral-600 mt-2">Planlama → Kurulum → Canlı → Kapanış</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {PAGE.steps.map((s) => (
            <article key={s.step} className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-bold text-blue-600">{s.step}</div>
              <h3 className="text-lg font-extrabold mt-2">{s.title}</h3>
              <p className="text-neutral-600 mt-1">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6">Hazır Paketler</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {PAGE.packages.map((p, i) => (
          <article key={`pkg-${i}`} className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-extrabold">{p.name}</h3>
            <ul className="mt-4 space-y-1 text-neutral-800">
              {p.includes.map((inc, ii) => (
                <li key={`i-${i}-${ii}`} className="flex gap-2">
                  <span aria-hidden>•</span> <span>{inc}</span>
                </li>
              ))}
            </ul>
            {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-black mb-6">Kurulumdan Görseller</h2>
      {/* ✅ CaseGallery (kurumsal stile uygun, lazy) */}
      <CaseGallery
        category="Ses ve Işık Sistemleri"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </section>
  );
}

function Related() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
      <ul className="flex flex-wrap gap-3 text-sm">
        <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
        <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
        <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
        <li><Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Çadır Kiralama</Link></li>
      </ul>
    </section>
  );
}

function FAQ() {
  return (
    <section className="container max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Sık Sorulan Sorular</h2>
      <div className="space-y-4">
        <details className="rounded-xl border bg-white p-4">
          <summary className="font-semibold cursor-pointer">Salon için line array şart mı?</summary>
          <p className="mt-2 text-neutral-700">
            Küçük/orta salonlarda top+sub çoğu zaman yeterli. Uzak mesafe ve geniş alanlarda line array tercih edilir.
          </p>
        </details>
        <details className="rounded-xl border bg-white p-4">
          <summary className="font-semibold cursor-pointer">Işıkta minimum set ne olur?</summary>
          <p className="mt-2 text-neutral-700">
            Temel aydınlatma için RGBW spot + wash; efekt için beam/spot eklenir. DMX programı akışa göre hazırlanır.
          </p>
        </details>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
        <h2 className="text-xl font-bold md:text-2xl">
          Ses & Işık sistemleri için teklif almak ister misiniz?
        </h2>
        <div className="flex justify-center gap-3 md:justify-end">
          <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-90">
            İletişime Geç
          </Link>
          <a
            href={WHATSAPP_URL}
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

/* ───────── SAYFA ───────── */
export default function Page() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SkipLink />
      <Hero />
      <main id="main">
        <ValueProps />
        <Steps />
        <Packages />
        <Gallery />
        <Related />
        <FAQ />
        <CTA />
      </main>

      {/* JSON-LD: Service + Breadcrumb (kurumsal sayfadaki gibi) */}
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
              "Line array, dijital mikser, kablosuz mikrofon, hareketli ışık, truss ve teknik operasyonla Türkiye genelinde ses & ışık sistemleri kiralama.",
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
    </div>
  );
}