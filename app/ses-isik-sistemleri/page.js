// app/ses-isik-sistemleri/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ---------- META ---------- */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Konser, düğün, festival ve kurumsal etkinlikler için profesyonel ses ve ışık sistemleri kiralama. Line array, robot ışık ve teknik kurulum desteği.",
  alternates: { canonical: "https://sahneva.com/ses-isik-sistemleri" },
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
    description:
      "Konser, düğün ve kurumsal etkinliklerde profesyonel ses ve ışık sistemleri. Line array, robot ışık ve teknik kurulum desteği.",
    url: "https://sahneva.com/ses-isik-sistemleri",
    type: "article",
    images: [{ url: "/img/ses-isik/hero.webp" }],
  },
};

// ISR
export const revalidate = 60;

/* ---------- İÇERİK ---------- */
const CONTENT = {
  heroOverlay: true,
  gallery: ["/img/ses-isik/ses-sistemi.webp", "/img/ses-isik/isik-sistemi.webp"],
  packages: [
    {
      name: "Salon Paketi — Konferans",
      includes: [
        "2× top kolon + 1× sub (aktif)",
        "2× sahne monitörü",
        "Dijital mikser (16–24ch)",
        "2× kablosuz el/ yaka mikrofon",
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

/* ---------- UZUN MAKALE (premium stil) ---------- */
function LongArticleAudioLight() {
  return (
    <section
      className="container mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-10"
      aria-labelledby="bolum-icerik"
    >
      <h2 id="bolum-icerik" className="sr-only">
        Ses & Işık Sistemleri — İçerik Bölümleri
      </h2>

      {/* Nedir? */}
      <article className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Ses & Işık Sistemleri Nedir?
        </h3>
        <p className="mt-4 text-neutral-800 leading-relaxed">
          Profesyonel ses &amp; ışık; her noktada anlaşılır ses ve sahneye uygun
          ışık atmosferi üretmeyi hedefler. <strong>Sahneva</strong> ekipleri;
          keşif, projelendirme, kurulum ve canlı operasyonu uçtan uca yönetir.
          Line array, dijital mikser, kablosuz mikrofon; RGBW spot, hareketli
          başlık ve truss sistemleri standart envanterimizdir.
        </p>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Kiralama Fiyatları Nasıl Belirlenir?
        </h3>
        <p className="mt-3 text-neutral-700">
          Bütçe, alan ve ihtiyaçlara göre şekillenir. Temel parametreler:
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2 text-neutral-900">
          {[
            "Alan büyüklüğü (iç/dış), seyirci kapasitesi",
            "Sistem gücü (line array/top+sub) & kanal ihtiyacı",
            "Işık armatür sayısı ve truss/rigging metreleri",
            "Teknik ekip, çalışma saatleri ve lojistik",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-neutral-700 border border-neutral-200">
          Hızlı teklif için <strong>tarih/konum</strong>,{" "}
          <strong>katılımcı sayısı</strong>, <strong>etkinlik türü</strong> ve{" "}
          <strong>program akışını</strong> paylaşmanız yeterli.
        </div>
      </article>

      {/* Kullanım alanları */}
      <article className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Nerelerde Kullanılır?
        </h3>
        <div className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-900">
          <ul className="space-y-1">
            <li>• Konser ve festival sahneleri</li>
            <li>• Lansman, panel ve konferanslar</li>
            <li>• Düğün ve davet organizasyonları</li>
            <li>• Miting ve belediye etkinlikleri</li>
          </ul>
          <ul className="space-y-1">
            <li>• Okul etkinlikleri ve mezuniyet</li>
            <li>• Fuar & AVM etkinlikleri</li>
            <li>• Roadshow ve açık hava gösterileri</li>
            <li>• Tören ve ödül geceleri</li>
          </ul>
        </div>
      </article>

      {/* Teknik/İpucu bloğu */}
      <article className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Doğru Sistem Seçimi İçin İpuçları
        </h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-bold">Ses</h4>
            <ul className="mt-3 space-y-1 text-neutral-800">
              <li>• Line array uzak mesafe, top+sub orta/küçük alanlar için.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/iem) sahne hakimiyetini artırır.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Işık</h4>
            <ul className="mt-3 space-y-1 text-neutral-800">
              <li>• RGBW spot + wash temel aydınlatma; beam/spot efekt içindir.</li>
              <li>• DMX sahne programları akışa göre sahnelenmelidir.</li>
              <li>• Truss yük/askı ve güvenlik (safety) standart olmalıdır.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Teknik Tablo */}
      <article className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h4 className="text-xl font-bold mb-4">Teknik Özellikler (Özet)</h4>
        <div className="overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-600 bg-neutral-50">
                <th className="p-3">Bileşen</th>
                <th className="p-3">Detay</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:p-3 [&>tr]:border-t">
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

/* ---------- SAYFA ---------- */
export default function Page() {
  const title = "Ses ve Işık Sistemleri Kiralama";
  const desc =
    "Line array, dijital mikser ve robot ışıklarla profesyonel ses & ışık çözümleri. Keşif, kurulum, canlı operasyon ve söküm dahil.";

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
      >
        Ana içeriğe atla
      </a>

      {/* HERO (premium) */}
      <section
        className="relative h-[340px] md:h-[460px] w-full overflow-hidden rounded-b-[2rem] bg-slate-950"
        aria-labelledby="hero-title"
      >
        <Image
          src="/img/ses-isik/hero.webp"
          alt="Profesyonel sahne ses ve ışık sistemleri kurulumu"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-90"
        />
        {CONTENT.heroOverlay && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/65"
          />
        )}

        {/* Yumuşak renk kümeleri */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <h1
            id="hero-title"
            className="relative z-10 text-3xl md:text-5xl font-black tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          >
            {title}
          </h1>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container mx-auto max-w-5xl px-4 py-8">
        <p className="text-neutral-700 leading-relaxed text-lg">{desc}</p>
      </section>

      {/* Ana içerik */}
      <main id="main">
        <LongArticleAudioLight />
      </main>

      {/* Paketler */}
      {!!CONTENT.packages.length && (
        <section className="container mx-auto max-w-6xl px-4 pb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
            Paket Örnekleri
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTENT.packages.map((p, i) => (
              <article
                key={`pkg-${i}`}
                className="group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-neutral-800">
                  {p.includes.map((inc, ii) => (
                    <li key={`pkgi-${i}-${ii}`} className="flex gap-2">
                      <span aria-hidden>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="mt-4 text-sm text-neutral-500">{p.note}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Galeri */}
      {!!CONTENT.gallery.length && (
        <section className="container mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
            Kurulumdan Görseller
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl group border border-neutral-200"
              >
                <Image
                  src={src}
                  alt={`${title} görsel ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* İlgili Hizmetler */}
      <section className="container mx-auto max-w-6xl px-4 pb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          İlgili Hizmetler
        </h2>
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

      {/* CTA */}
      <section className="container mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 p-6 text-center text-white md:flex-row md:p-8 md:text-left shadow-md">
          <h2 className="text-xl font-bold md:text-2xl">
            {title} hakkında teklif almak ister misiniz?
          </h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 hover:opacity-95"
            >
              İletişime Geç
            </Link>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C%20Ses%20ve%20I%C5%9F%C4%B1k%20Sistemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/15"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD: Service + Breadcrumb (CSP'niz 'unsafe-inline' içeriyor; çalışır) */}
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