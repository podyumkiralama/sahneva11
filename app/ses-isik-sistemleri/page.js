// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CaseGallery from "@/components/CaseGallery";

/* ░░ META ░░ */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Konser, festival, düğün ve kurumsal organizasyonlar için profesyonel ses ve ışık sistemleri kiralama. Line array, robot ışık, truss, dijital mikser ve canlı operasyon.",
  alternates: { canonical: "https://www.sahneva.com/ses-isik-sistemleri" },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
    description:
      "Line array, dijital mikser, kablosuz mikrofon ve robot ışıklarla profesyonel ses & ışık çözümleri. Keşif, kurulum ve canlı yönetim dahil.",
    url: "https://www.sahneva.com/ses-isik-sistemleri",
    type: "article",
    images: [{ url: "/img/ses-isik/hero.webp" }],
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

/* ░░ ISR ░░ */
export const revalidate = 60 * 60 * 24; // günde 1

/* ░░ SABİTLER ░░ */
const PHONE = "+905453048671";
const WHATSAPP_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, Ses & Işık Sistemleri için hızlı teklif almak istiyorum. Etkinlik tarihi/konum/bilgi: "
  );

const TITLE = "Ses ve Işık Sistemleri Kiralama";
const DESC =
  "Line array, dijital mikser, kablosuz mikrofon ve robot ışıklarla profesyonel ses & ışık çözümleri. Keşif, projelendirme, kurulum, canlı operasyon ve söküm dahil.";

const CONTENT = {
  heroOverlay: true,
  badges: [
    { emoji: "🛠️", text: "7/24 Teknik Destek" },
    { emoji: "🚚", text: "Hızlı Kurulum • Türkiye Geneli" },
    { emoji: "🎚️", text: "Canlı Miks • Show Control" },
  ],
  gallery: [
    "/img/ses-isik/ses-sistemi.webp",
    "/img/ses-isik/isik-sistemi.webp",
    // Daha fazla görsel eklemek istersen buraya devam:
    // "/img/ses-isik/konser-1.webp",
    // "/img/ses-isik/lansman-1.webp",
  ],
  packages: [
    {
      name: "Salon Paketi — Konferans",
      includes: [
        "2× top kolon + 1× sub (aktif)",
        "2× sahne monitörü",
        "Dijital mikser (16–24ch)",
        "2× kablosuz el/yaka mikrofon",
        "2× LED spot + 2× wash",
        "Kurulum, test ve teknik ekip",
      ],
      note: "Toplantı, seminer, salon etkinlikleri.",
    },
    {
      name: "Açık Alan Paketi — Orta",
      includes: [
        "2× line array cluster + subs",
        "Sahne monitörleme",
        "Dijital mikser (32ch) + stagebox",
        "4× kablosuz mikrofon",
        "4× hareketli başlık + 6× wash + haze/duman",
        "8–10 m truss ön kiriş + ground support",
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
        "U-set truss (ön/yan/arka) + rigging",
        "Kurulum, soundcheck ve canlı yönetim",
      ],
      note: "Konser ve yüksek katılım.",
    },
  ],
};

/* ░░ UZUN MAKALE ░░ */
function LongArticle() {
  return (
    <section className="container max-w-5xl mx-auto py-10 md:py-14 space-y-10">
      {/* Nedir? */}
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ses & Işık Sistemleri Nedir?</h2>
        <p>
          Profesyonel ses ve ışık; her noktada net ve dengeli ses ile sahneye uygun ışık atmosferi
          üretmeyi hedefler. <strong>Sahneva</strong> ekibi keşif, projelendirme, kurulum, canlı
          operasyon ve söküm adımlarını uçtan uca yönetir. Line array, dijital mikser, kablosuz
          mikrofon; RGBW spot, hareketli başlık ve truss sistemleri standart envanterimizdir.
        </p>
      </article>

      {/* Değer Önerileri */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Neden Sahneva?</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
            Keşif & akustik/ışık projelendirme
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
            Kurulum ve <strong>show control</strong> ile canlı yönetim
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
            Modüler truss/rigging ve güvenli askı çözümleri
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600" />
            Türkiye geneli hızlı lojistik ve teknik ekip
          </li>
        </ul>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Kiralama Fiyatları Nasıl Belirlenir?</h2>
        <p className="mt-3 text-neutral-700">Bütçeyi etkileyen temel parametreler:</p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Alan büyüklüğü (iç/dış), seyirci kapasitesi
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Sistem gücü (line array/top+sub) ve kanal ihtiyacı
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Işık armatür sayısı ve truss/rigging metreleri
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Teknik ekip, çalışma saatleri ve lojistik
          </li>
        </ul>
        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            Hızlı teklif için <strong>tarih/konum</strong>,{" "}
            <strong>katılımcı sayısı</strong>, <strong>etkinlik türü</strong> ve{" "}
            <strong>program akışını</strong> paylaşmanız yeterli.
          </p>
        </div>
      </article>

      {/* İpuçları */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Doğru Sistem Seçimi İçin İpuçları</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Ses</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Line array uzak mesafe, top+sub orta/küçük alanlar için idealdir.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/IEM) sahne hakimiyetini artırır.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Işık</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• RGBW spot + wash temel aydınlatma; beam/spot efekt içindir.</li>
              <li>• DMX programlar akışa ve sahneye göre planlanmalıdır.</li>
              <li>• Truss yük/askı ve güvenlik (safety) standart olmalıdır.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Teknik Tablo */}
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
              <tr>
                <td>PA</td>
                <td>Line array / top+sub konfigürasyonları</td>
              </tr>
              <tr>
                <td>Mikser</td>
                <td>Dijital (32–48ch), sahne stagebox</td>
              </tr>
              <tr>
                <td>Mikrofon</td>
                <td>Kablosuz el/yaka, enstrüman mikrofonları</td>
              </tr>
              <tr>
                <td>Işık</td>
                <td>RGBW spot, wash, beam/spot, blinder, strobe</td>
              </tr>
              <tr>
                <td>Truss</td>
                <td>Ön kiriş, yan kule, back truss / ground support</td>
              </tr>
              <tr>
                <td>Kontrol</td>
                <td>DMX controller, show playback</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

/* ░░ SAYFA ░░ */
export default function Page() {
  return (
    <>
      {/* HERO — kurumsal sayfa estetiği */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        {/* Dinamik gradient blur */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500" />
        </div>

        {/* Dev arka plan yazı */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
          <span className="text-[90px] md:text-[150px] font-black text-white tracking-[0.1em]">
            SES &amp; IŞIK
          </span>
        </div>

        <div className="relative z-10 container text-center text-white">
          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            {CONTENT.badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-sm"
              >
                <span aria-hidden>{b.emoji}</span>
                {b.text}
              </span>
            ))}
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            {TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{DESC}</p>

          {/* CTA */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/iletisim"
              className="rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:opacity-90"
              aria-label="İletişime geç"
            >
              İletişime Geç
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/60 px-6 py-3 font-bold text-white hover:bg-white/10"
              aria-label="WhatsApp'tan hızlı teklif al"
            >
              WhatsApp’tan Yaz
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-xl border border-white/60 px-6 py-3 font-bold text-white hover:bg-white/10"
              aria-label="Telefon ile ara"
            >
              Ara: {PHONE.replace("+90", "+90 ")}
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container max-w-5xl mx-auto py-10">
        <p className="text-neutral-700 leading-relaxed text-lg text-center md:text-left">
          Etkinliğinizin ölçeğine göre doğru ses gücü ve ışık dizilimini planlıyor, sahne akışına
          uygun show control ile kusursuz bir deneyim sunuyoruz.
        </p>
      </section>

      {/* Uzun makale */}
      <LongArticle />

      {/* Paketler */}
      {!!CONTENT.packages.length && (
        <section className="container py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Paket Örnekleri</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTENT.packages.map((p, i) => (
              <article
                key={`pkg-${i}`}
                className="rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-neutral-700">
                  {p.includes.map((inc, ii) => (
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
      )}

      {/* CaseGallery — CLIENT COMPONENT (dinamik import yok) */}
      {!!CONTENT.gallery.length && (
        <section className="container py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Kurulumdan Görseller</h2>
          <CaseGallery
            images={CONTENT.gallery.map((src, i) => ({
              src,
              alt: `${TITLE} görsel ${i + 1}`,
            }))}
          />
        </section>
      )}

      {/* İlgili Hizmetler */}
      <section className="container py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li>
            <Link
              href="/sahne-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Sahne Kiralama
            </Link>
          </li>
          <li>
            <Link
              href="/podyum-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Podyum Kiralama
            </Link>
          </li>
          <li>
            <Link
              href="/led-ekran-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              LED Ekran Kiralama
            </Link>
          </li>
          <li>
            <Link
              href="/cadir-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Çadır Kiralama
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA Banner */}
      <section className="container pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">{TITLE} için hızlı teklif alın</h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-90">
              İletişime Geç
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

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