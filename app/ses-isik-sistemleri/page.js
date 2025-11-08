// app/ses-isik-sistemleri/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ───────────────────── META ───────────────────── */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Konser, festival, düğün ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri. Line array, robot ışık, truss ve uzman teknik ekip ile Türkiye genelinde kurulum.",
  alternates: { canonical: "https://www.sahneva.com/ses-isik-sistemleri" },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
    description:
      "Line array, dijital mikser, kablosuz mikrofon, robot ışık ve truss çözümleri. Keşif, kurulum, canlı miks ve söküm dâhil.",
    url: "https://www.sahneva.com/ses-isik-sistemleri",
    type: "article",
    locale: "tr_TR",
    images: [{ url: "/img/ses-isik/hero.webp", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/* ───────────────────── SABİTLER ───────────────────── */
const PHONE = "+905453048671";
const WHATSAPP_URL =
  "https://wa.me/905453048671?text=Merhaba%2C%20Ses%20ve%20I%C5%9F%C4%B1k%20Sistemleri%20hakk%C4%B1nda%20bilgi%20ve%20teklif%20almak%20istiyorum.";
const MAIL = "info@sahneva.com";

// ISR – günde bir
export const revalidate = 86400;

/* ───────────────────── VERİ ───────────────────── */
const CONTENT = {
  hero: {
    src: "/img/ses-isik/hero.webp",
    alt:
      "Sahneva profesyonel ses ve ışık sistemleri – line array, hareketli başlıklar ve truss kurulumu",
  },
  // Galeri (gerekirse daha fazlasını ekleyebilirsin)
  gallery: [
    "/img/ses-isik/ses-sistemi.webp",
    "/img/ses-isik/isik-sistemi.webp",
    "/img/ses-isik/konser-setup.webp",
    "/img/ses-isik/kurumsal-lansman.webp",
    "/img/ses-isik/festival-night.webp",
    "/img/ses-isik/indoor-conference.webp",
  ],
  // Paketler – kurumsal tonda net değer önerileri ile
  packages: [
    {
      name: "Salon Paketi — Konferans",
      highlights: [
        "2× top + 1× sub (aktif) • 2× monitör",
        "Dijital mikser (16–24ch) • 2× kablosuz mikrofon",
        "4× LED spot / wash",
        "Kurulum + test + teknik ekip",
      ],
      note: "Toplantı, seminer ve kurumsal sunumlar için optimize edildi.",
    },
    {
      name: "Açık Alan Paketi — Orta",
      highlights: [
        "2× line array cluster + subs",
        "Sahne monitörleme • 32ch dijital mikser + stagebox",
        "4× kablosuz • 4× beam/spot + 6× wash + duman",
        "Ön truss (8–10 m) + ground support • Show control",
      ],
      note: "Açık hava lansman, festival, miting ve roadshow için.",
    },
    {
      name: "Konser Paketi — Pro",
      highlights: [
        "4–6 kabin line array (L/R) + güçlü subs",
        "Side fill + drum fill • 48ch FOH + monitör mikseri",
        "12+ hareketli başlık (beam/spot/wash) + blinder/strobe/haze",
        "U set truss (ön/yan/arka) + rigging • Soundcheck ve canlı yönetim",
      ],
      note: "Yüksek katılımlı konser ve festival prodüksiyonları.",
    },
  ],
  // SSS – kullanıcı odaklı mesajlar
  faq: [
    {
      q: "Hangi sistemi seçmeliyim?",
      a:
        "Alan büyüklüğü, seyirci sayısı ve içerik türü belirleyicidir. Kısa bir telefon görüşmesinde 2–3 opsiyonu netleştirip aynı gün teklif sunuyoruz.",
    },
    {
      q: "Kurulum ne kadar sürer?",
      a:
        "Salon setupları genellikle 1–2 saat, açık alan/konser setupları 3–6 saat aralığındadır. Truss ve rigging varsa süre proje kapsamına göre değişir.",
    },
    {
      q: "Operasyon sırasında teknik destek veriyor musunuz?",
      a:
        "Evet. FOH (ses), ışık operatörü ve sahne ekibi ile canlı operasyonda aktif olarak sahadayız. 7/24 acil destek hattımız bulunur.",
    },
  ],
};

/* ───────────────────── BÖLÜMLER ───────────────────── */

// (1) Skip Link – a11y
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

// (2) Hero – kurumsal sayfayla uyumlu premium görünüm
function Hero() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-neutral-950"
      aria-labelledby="hero-title"
    >
      <Image
        src={CONTENT.hero.src}
        alt={CONTENT.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(1200px 400px at 50% 0%, rgba(59,130,246,.35), transparent 60%), radial-gradient(1000px 500px at 80% 100%, rgba(168,85,247,.35), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 container text-center text-white px-4">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Profesyonel ekip • Türkiye geneli kurulum
          </span>
        </div>
        <h1 id="hero-title" className="text-4xl md:text-6xl font-black mb-4 leading-[1.1]">
          Ses &amp; Işık Sistemleri
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
          Line array, dijital mikser, robot ışık ve truss ile{" "}
          <strong className="text-blue-300">net ses</strong> ve{" "}
          <strong className="text-purple-300">etkileyici sahne</strong>.
          Keşif → projelendirme → kurulum → canlı miks → söküm.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="/iletisim"
            className="rounded-xl bg-white text-neutral-900 font-bold px-6 py-3 hover:opacity-90"
            aria-label="İletişime geç"
          >
            İletişime Geç
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/70 text-white font-bold px-6 py-3 hover:bg-white/10"
            aria-label="WhatsApp’tan hızlı teklif al"
          >
            WhatsApp’tan Hızlı Teklif
          </a>
        </div>
      </div>
    </section>
  );
}

// (3) Değer Önerileri – kurumsal dil
function ValueProps() {
  const items = [
    { emoji: "🔊", title: "Net ve Dengeli Ses", text: "Line array/top+sub konfigürasyonları ile hedeflenen SPL ve anlaşılabilirlik." },
    { emoji: "🎛️", title: "Dijital Akış", text: "Dijital mikser + stagebox ile temiz routing, hızlı prova ve kayıt opsiyonu." },
    { emoji: "🎥", title: "Sahne Işığı", text: "RGBW spot, wash, beam/spot, blinder ve strobe ile dramatik sahneleme." },
    { emoji: "🧱", title: "Güvenli Rigging", text: "Truss, ground support ve güvenlik (safety) standartlarına tam uyum." },
  ];
  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50/40">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900">Neden Sahneva?</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-3">
            Keşiften canlı operasyona uzanan uçtan uca profesyonel hizmet.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl bg-white border border-neutral-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl">{it.emoji}</div>
              <h3 className="mt-3 text-xl font-extrabold">{it.title}</h3>
              <p className="mt-2 text-neutral-700">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// (4) Uzun Makale – içerik korunup geliştirildi
function LongArticle() {
  return (
    <section className="container max-w-4xl mx-auto py-12 space-y-10" id="main">
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ses &amp; Işık Sistemleri Nedir?</h2>
        <p>
          Profesyonel ses &amp; ışık; her noktada anlaşılır ses ve sahneye uygun atmosfer üretmeyi
          hedefler. <strong>Sahneva</strong> ekipleri; keşif, projelendirme, kurulum ve canlı
          operasyonu uçtan uca yönetir. Standart envanterimiz: line array/top+sub, dijital mikser,
          kablosuz mikrofon; RGBW spot, hareketli başlık, blinder/strobe, truss ve rigging.
        </p>
      </article>

      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Fiyatlar Nasıl Belirlenir?</h2>
        <p className="mt-3 text-neutral-700">Bütçe, alan ve ihtiyaçlara göre şekillenir:</p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />Alan (iç/dış), seyirci kapasitesi</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />Sistem gücü &amp; kanal ihtiyacı</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />Işık adedi ve truss/rigging metrajı</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />Teknik ekip, çalışma saatleri, lojistik</li>
        </ul>
        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            Hızlı teklif için <strong>tarih/konum</strong>,{" "}
            <strong>katılımcı sayısı</strong>, <strong>etkinlik türü</strong> ve{" "}
            <strong>program akışını</strong> paylaşmanız yeterli.
          </p>
        </div>
      </article>

      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Doğru Sistem Seçimi İçin İpuçları</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Ses</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Line array uzak mesafe, top+sub orta/küçük alanlar için.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/IEM) sahne hakimiyetini artırır.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Işık</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• RGBW spot + wash temel aydınlatma; beam/spot efekt içindir.</li>
              <li>• DMX sahne programları akışa göre sahnelenmelidir.</li>
              <li>• Truss yük/askı ve güvenlik (safety) standart olmalıdır.</li>
            </ul>
          </div>
        </div>
      </article>

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

// (5) Paketler – kurumsal kart dili
function Packages() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Paket Örnekleri</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {CONTENT.packages.map((p, i) => (
          <article key={`pkg-${i}`} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-bold">{p.name}</h3>
            <ul className="mt-3 space-y-1 text-neutral-700">
              {p.highlights.map((inc, ii) => (
                <li key={`pkgi-${i}-${ii}`} className="flex gap-2">
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

// (6) Galeri – sade, hızlı
function Gallery() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Kurulumdan Görseller</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTENT.gallery.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
            <Image
              src={src}
              alt={`Ses ve Işık sistemleri görsel ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// (7) İlgili hizmetler
function Related() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4">İlgili Hizmetler</h2>
      <ul className="flex flex-wrap gap-3 text-sm">
        <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
        <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
        <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
        <li><Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Çadır Kiralama</Link></li>
      </ul>
    </section>
  );
}

// (8) CTA – kurumsal güçlü kapanış
function CTA() {
  return (
    <section className="container pb-16">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
        <h2 className="text-xl md:text-2xl font-black">
          Ses &amp; Işık Sistemleri için bugün teklif alın
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

// (9) SSS
function FAQ() {
  return (
    <section className="container max-w-4xl mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Sık Sorulan Sorular</h2>
      <div className="space-y-4">
        {CONTENT.faq.map((f) => (
          <details key={f.q} className="rounded-2xl border bg-white p-5 group">
            <summary className="cursor-pointer font-semibold text-neutral-900">
              {f.q}
            </summary>
            <p className="mt-3 text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────── SAYFA ───────────────────── */
export default function Page() {
  return (
    <>
      <SkipLink />
      <Hero />
      <ValueProps />
      <LongArticle />
      <Packages />
      <Gallery />
      <Related />
      <FAQ />
      <CTA />

      {/* JSON-LD: Service */}
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
              "Line array, dijital mikser, kablosuz mikrofon, robot ışık, truss ve teknik operasyonla Türkiye genelinde ses & ışık sistemleri kiralama.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "LocalBusiness",
              name: "Sahneva",
              url: "https://www.sahneva.com",
              telephone: "+90 545 304 8671",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
            },
          }),
        }}
      />
      {/* JSON-LD: Breadcrumb */}
      <Script
        id="ld-breadcrumb-audio-light"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Anasayfa",
                item: "https://www.sahneva.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ses ve Işık Sistemleri",
                item: "https://www.sahneva.com/ses-isik-sistemleri",
              },
            ],
          }),
        }}
      />
    </>
  );
}