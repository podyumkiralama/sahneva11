// app/ses-isik-sistemleri/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getCspNonce } from "@/lib/csp";

// ---------- META ----------
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

// (Opsiyonel) ISR
export const revalidate = 60;

// ---------- İÇERİK ----------
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

// ---------- UZUN MAKALE ----------
function LongArticleAudioLight() {
  return (
    <section className="container max-w-4xl mx-auto py-10 md:py-14 space-y-10">
      {/* Nedir? */}
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Ses & Işık Sistemleri Nedir?
        </h2>
        <p>
          Profesyonel ses &amp; ışık; her noktada anlaşılır ses ve sahneye uygun
          ışık atmosferi üretmeyi hedefler. <strong>Sahneva</strong> ekipleri;
          keşif, projelendirme, kurulum ve canlı operasyonu uçtan uca yönetir.
          Line array, dijital mikser, kablosuz mikrofon; RGBW spot, hareketli
          başlık ve truss sistemleri standart envanterimizdir.
        </p>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Kiralama Fiyatları Nasıl Belirlenir?
        </h2>
        <p className="mt-3 text-neutral-700">
          Bütçe, alan ve ihtiyaçlara göre şekillenir. Temel parametreler:
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Alan büyüklüğü (iç/dış), seyirci kapasitesi
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Sistem gücü (line array/top+sub) & kanal ihtiyacı
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
            <strong>katılımcı sayısı</strong>, <strong>etkinlik türü</strong>{" "}
            ve <strong>program akışını</strong> paylaşmanız yeterli.
          </p>
        </div>
      </article>

      {/* Kullanım alanları */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Nerelerde Kullanılır?
        </h2>
        <div className="grid md:grid-cols-2 gap-2 mt-3 text-neutral-800">
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
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Doğru Sistem Seçimi İçin İpuçları
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Ses</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Line array uzak mesafe, top+sub orta/ küçük alanlar için.</li>
              <li>• Dijital mikser + stagebox kablo ve routing’i sadeleştirir.</li>
              <li>• Monitörleme (wedges/iem) sahne hakimiyetini artırır.</li>
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

// ---------- SAYFA ----------
export default function Page() {
  const nonce = getCspNonce();
  const title = "Ses ve Işık Sistemleri Kiralama";
  const desc =
    "Line array, dijital mikser ve robot ışıklarla profesyonel ses & ışık çözümleri. Keşif, kurulum, canlı operasyon ve söküm dahil.";

  return (
    <>
      {/* HERO (LED sayfasıyla aynı yükseklik/stil) */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/img/ses-isik/hero.webp"
          alt="Profesyonel sahne ses ve ışık sistemleri kurulumu"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {CONTENT.heroOverlay && (
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        )}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container max-w-4xl mx-auto py-8">
        <p className="text-neutral-700 leading-relaxed text-lg">{desc}</p>
      </section>

      {/* Uzun makale */}
      <LongArticleAudioLight />

      {/* Paketler (LED ile aynı grid/kart yapısı) */}
      {!!CONTENT.packages.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Paket Örnekleri</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTENT.packages.map((p, i) => (
              <article key={`pkg-${i}`} className="rounded-2xl border bg-white p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
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

      {/* Galeri */}
      {!!CONTENT.gallery.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Kurulumdan Görseller</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`${title} görsel ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* İlgili Hizmetler (LED sayfasıyla aynı konum/stil) */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
          <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
          <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
          <li><Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Çadır Kiralama</Link></li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">
            {title} hakkında teklif almak ister misiniz?
          </h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C%20Ses%20ve%20I%C5%9F%C4%B1k%20Sistemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD: Service + Breadcrumb */}
      {nonce && (
        <Script
          id="ld-service-audio-light"
          type="application/ld+json"
          nonce={nonce}
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
      )}
      {nonce && (
        <Script
          id="ld-breadcrumb-audio-light"
          type="application/ld+json"
          nonce={nonce}
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
      )}
    </>
  );
}