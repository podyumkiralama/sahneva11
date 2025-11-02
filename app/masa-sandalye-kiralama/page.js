// app/masa-sandalye-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getService } from "@/lib/data";

// Bu sayfa "masa-sandalye" hizmeti için statik rota: /masa-sandalye-kiralama
export const revalidate = 900;

const svc = getService("masa-sandalye");

// ————————————————————————————————————————————
// SAYFA İÇERİĞİ (sıcak/ivory tema, fotoğraflı kartlar)
// ————————————————————————————————————————————
const THEME = {
  brand: {
    from: "#d97706", // amber-600
    to: "#059669",   // emerald-600
  },
};

const CONTENT = {
  hero: {
    // Sağdaki büyük görsel (yüksek LCP etkisi için priority)
    img: "/img/masa-sandalye/hero.webp",
    alt: "Şık davet düzeni: banket masalar, Napolyon sandalyeler ve keten örtüler",
    stats: [
      { k: "Envanter", v: "3000+ sandalye" },
      { k: "Teslimat", v: "İstanbul içi aynı gün" },
      { k: "Projeler", v: "500+ organizasyon" },
    ],
  },
  highlights: [
    { icon: "🪑", title: "Napolyon / Konferans / Bistro", text: "Her konsepte uygun sandalye ve masa tipleri" },
    { icon: "🧵", title: "Örtü & Kılıf", text: "Keten, tafta, strech – çoklu renk seçenekleri" },
    { icon: "🚚", title: "Teslimat & Yerleşim", text: "Zamanında teslim, profesyonel kurulum ve toplama" },
    { icon: "📋", title: "Planlama", text: "Oturma planı, numaralandırma ve yönlendirme" },
  ],
  packages: [
    {
      name: "Davet Seti — 100 Kişi",
      img: "/img/masa-sandalye/paket-davet.webp",
      includes: [
        "10× yuvarlak banket masa (Ø180 cm)",
        "100× Napolyon sandalye (beyaz/krem)",
        "Keten masa örtüsü + runner",
        "Teslimat, yerleşim ve toplama",
      ],
      note: "Düğün, nişan ve kurumsal yemekler için şık görünüm.",
    },
    {
      name: "Konferans Seti — 60 Kişi",
      img: "/img/masa-sandalye/paket-konferans.webp",
      includes: [
        "10× dikdörtgen masa (180×75 cm)",
        "60× konferans sandalyesi (yastıklı)",
        "Numaralandırma ve oturma planı yerleşimi",
        "Teslimat + kurulum",
      ],
      note: "Seminer, eğitim ve panel düzenleri için.",
    },
    {
      name: "Kokteyl Seti — 15 Ünite",
      img: "/img/masa-sandalye/paket-kokteyl.webp",
      includes: [
        "15× bistro kokteyl masası (Ø60–80 cm)",
        "Strech kılıf (beyaz/siyah/renkli)",
        "Opsiyon: fırfır/tafta şal",
        "Teslimat + toplama",
      ],
      note: "Lansman, açılış ve networking alanları için.",
    },
  ],
  gallery: [
    "/img/sandalye/1.webp",
    "/img/sandalye/2.webp",
    "/img/sandalye/3.webp",
    "/img/sandalye/4.webp",
    "/img/sandalye/5.webp",
    "/img/sandalye/6.webp",
  ],
};

// ————————————————————————————————————————————
// METADATA (SEO)
// ————————————————————————————————————————————
export const metadata = {
  title: `${svc?.title ?? "Masa & Sandalye Kiralama"} | Sahneva`,
  description:
    svc?.excerpt ||
    "Düğün, konferans ve kokteyl organizasyonları için masa & sandalye kiralama: Napolyon, konferans ve bistro seçenekleri; örtü–kılıf, teslimat ve profesyonel yerleşim.",
  alternates: { canonical: "https://www.sahneva.com/masa-sandalye-kiralama" },
  keywords: [
    "masa sandalye kiralama",
    "napolyon sandalye kiralama",
    "bistro masa kiralama",
    "banket masa kiralama",
    "konferans sandalyesi",
    "masa örtüsü kiralama",
  ],
  openGraph: {
    title: `${svc?.title ?? "Masa & Sandalye Kiralama"} | Sahneva`,
    description:
      svc?.desc ||
      "Banket masa, Napolyon sandalye, konferans ve kokteyl setleri. Örtü–kılıf, numaralandırma ve profesyonel yerleşim.",
    url: "https://www.sahneva.com/masa-sandalye-kiralama",
    type: "website",
    images: [{ url: "/img/hizmet-masa-og.jpg", width: 1200, height: 630, alt: "Sahneva Masa & Sandalye Kiralama" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// ————————————————————————————————————————————
// BÖLÜM: UZUN REHBER (farklı tipografi ve kutular)
// ————————————————————————————————————————————
function Article() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 rounded-2xl border border-amber-200/60 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
            Masa & Sandalye Kiralama Rehberi
          </h2>
          <p className="mt-4 leading-7 text-neutral-700">
            Bir etkinlikte akış sadece sahneyle değil, <strong>oturma konforu ve düzeni</strong> ile de şekillenir.
            <strong> Sahneva</strong> olarak düğün, gala, konferans ve kokteyl gibi farklı senaryolara uygun çözümleri{" "}
            <em>teslimat, kurulum ve toplama</em> dahil anahtar teslim sunuyoruz. Envanter: Napolyon, konferans tipi ve bistro
            sandalyeler; yuvarlak banket (Ø180 cm), dikdörtgen (180×75 cm) ve kokteyl bistro masaları.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-amber-50/60 p-4 border border-amber-200">
              <h3 className="font-bold text-amber-900">Düğün / Davet</h3>
              <ul className="mt-2 space-y-1 text-sm text-amber-900/90">
                <li>• Yuvarlak bankette 8–10 kişi idealdir; servis akışı rahatlar.</li>
                <li>• Napolyon sandalye + keten örtü/runner şık görünüm sağlar.</li>
                <li>• Gelin yolu & pist çevresinde min. 2,5 m sirkülasyon bırakın.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50/60 p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-900">Kurumsal / Konferans</h3>
              <ul className="mt-2 space-y-1 text-sm text-emerald-900/90">
                <li>• Tiyatro/sınıf düzenleri için 180×75 cm masalar ideal derinlik verir.</li>
                <li>• Kaçış aksları min. 1,5 m açık olmalı; yönlendirmeler görünür olsun.</li>
                <li>• İsimlik, notluk, su servisi gibi masa üstü detayları planlayın.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="p-3 text-left">Ürün</th>
                  <th className="p-3 text-left">Ölçü / Detay</th>
                  <th className="p-3 text-left">Not</th>
                </tr>
              </thead>
              <tbody className="[&>tr>*]:p-3 [&>tr]:border-b">
                <tr><td>Banket Masa (Yuvarlak)</td><td>Ø180 cm</td><td>8–10 kişi; keten/tafta örtü</td></tr>
                <tr><td>Dikdörtgen Masa</td><td>180×75 cm</td><td>Konferans/sınıf düzeni</td></tr>
                <tr><td>Bistro Kokteyl Masası</td><td>Ø60–80 cm, 110 cm yükseklik</td><td>Strech kılıf (renk seçenekli)</td></tr>
                <tr><td>Napolyon Sandalye</td><td>Ahşap/PP, minderli</td><td>Beyaz/krem/altın seçenekleri</td></tr>
                <tr><td>Konferans Sandalyesi</td><td>Yastıklı, istiflenebilir</td><td>Sıra ayracı opsiyonu</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-extrabold text-neutral-900">Fiyatlar Nasıl Belirlenir?</h3>
          <ul className="mt-4 space-y-2 text-neutral-700">
            <li>• Toplam adet ve etkinlik süresi (tek/çok gün)</li>
            <li>• Model/kaplama (Napolyon, konferans, bistro, örtü/kılıf)</li>
            <li>• Teslimat mesafesi, erişim/kat ve zaman penceresi</li>
            <li>• Yerleşim planı, numaralandırma ve ekstra personel</li>
          </ul>
          <div className="mt-5 rounded-xl bg-neutral-50 p-4">
            Hızlı bir teklif için: <strong>tarih/konum</strong>, <strong>adet</strong>, <strong>model</strong> ve <strong>renk</strong> bilgilerini iletin.
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href="tel:+905453048671"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 font-bold text-white"
              aria-label="Telefonla teklif al"
            >
              📞 Hemen Ara
            </a>
            <a
              href="https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20Masa%20%26%20Sandalye%20kiralama%20i%C3%A7in%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 font-bold text-neutral-900"
              aria-label="WhatsApp ile teklif isteyin"
            >
              💬 WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ————————————————————————————————————————————
// SAYFA
// ————————————————————————————————————————————
export default function Page() {
  const title = svc?.title ?? "Masa & Sandalye Kiralama";
  const desc =
    svc?.desc ??
    "Banket masa, Napolyon ve konferans sandalyeleri; örtü–kılıf, teslimat ve profesyonel yerleşim. İstanbul ve çevresinde hızlı kurulum.";

  return (
    <>
      {/* HERO — Bölünmüş düzen, sağda görsel, solda başlık */}
      <section className="relative overflow-hidden bg-[url('/img/texture/paper-noise.png')]">
        {/* Dekoratif gradient */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `radial-gradient(1200px 600px at 10% 10%, rgba(217,119,6,0.15), transparent 60%), radial-gradient(1200px 600px at 90% 10%, rgba(5,150,105,0.15), transparent 60%)`,
          }}
        />
        <div className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20 relative">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
              İstanbul içi aynı gün teslim
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight text-neutral-900">
              {title}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">{desc}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#paketler"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 px-6 py-3 font-bold text-white"
                aria-label="Paketleri görüntüle"
              >
                Paketleri Gör
              </Link>
              <a
                href="tel:+905453048671"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 font-bold text-neutral-900 bg-white"
                aria-label="Telefonla teklif al"
              >
                📞 Teklif Al
              </a>
            </div>

            {/* Mini istatistikler */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {CONTENT.hero.stats.map((s, i) => (
                <div key={i} className="rounded-xl border bg-white p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-neutral-500">{s.k}</div>
                  <div className="mt-1 text-base font-extrabold text-neutral-900">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ büyük görsel */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
            <Image
              src={CONTENT.hero.img}
              alt={CONTENT.hero.alt}
              fill
              priority
              className="object-cover rounded-3xl border border-neutral-200 shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Üstte yüzen küçük fotoğraf şeridi (dekor) */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="grid grid-cols-3 gap-2">
                {CONTENT.gallery.slice(0, 3).map((g, i) => (
                  <div key={i} className="relative h-20 w-28 rounded-xl overflow-hidden border border-neutral-200">
                    <Image src={g} alt={`${title} örnek ${i + 1}`} fill className="object-cover" sizes="200px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Özellik rozetleri */}
        <div className="container mx-auto px-4 pb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTENT.highlights.map((h, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="text-2xl" aria-hidden="true">{h.icon}</div>
                <div className="mt-2 font-bold">{h.title}</div>
                <p className="text-sm text-neutral-600">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAKETLER — Fotoğraflı kartlar (farklı görsel stil) */}
      <section id="paketler" className="container mx-auto px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Hazır Paketler</h2>
          <p className="mt-2 text-neutral-600">Farklı ölçek ve düzenler için pratik çözümler</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {CONTENT.packages.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
                <h3 className="absolute bottom-3 left-4 right-4 text-white text-lg font-extrabold drop-shadow">
                  {p.name}
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-neutral-700">
                  {p.includes.map((inc, ii) => (
                    <li key={ii} className="flex gap-2">
                      <span aria-hidden>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
                <div className="mt-5 flex gap-3">
                  <a
                    href="tel:+905453048671"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-bold text-white"
                  >
                    📞 Teklif Al
                  </a>
                  <a
                    href={`https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20${encodeURIComponent(
                      p.name
                    )}%20paketi%20hakk%C4%B1nda%20teklif%20alabilir%20miyim%3F`}
                    target="_blank"
                    rel="noopener nofollow"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-900 bg-white"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERİ — 2/3-1/3 asimetrik grid */}
      <section className="container mx-auto px-4 pb-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Kurulumdan Görseller</h2>
          <p className="mt-2 text-neutral-600">Gerçek etkinliklerden seçkiler</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENT.gallery.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl border ${i % 5 === 0 ? "sm:col-span-2 h-72" : "h-52"}`}>
              <Image
                src={src}
                alt={`Masa & sandalye kurulumu ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SSS — interaktivitesiz <details> (Server-safe) */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-black text-neutral-900">Sık Sorulan Sorular</h2>
        <div className="mt-6 space-y-3">
          <details className="group rounded-xl border bg-white p-4">
            <summary className="cursor-pointer list-none font-bold text-neutral-900">Teslimat ve toplama ücretli mi?</summary>
            <p className="mt-2 text-neutral-700">İstanbul içi teslimat/ toplama mesafe ve kata göre fiyatlanır; teklifinizde kalem kalem belirtilir.</p>
          </details>
          <details className="group rounded-xl border bg-white p-4">
            <summary className="cursor-pointer list-none font-bold text-neutral-900">Örtü ve kılıf renkleri neler?</summary>
            <p className="mt-2 text-neutral-700">Keten, tafta ve strech kılıflarda beyaz/siyah ile birlikte krem, altın, bordo ve kurumsal renklere uygun seçenekler bulunur.</p>
          </details>
          <details className="group rounded-xl border bg-white p-4">
            <summary className="cursor-pointer list-none font-bold text-neutral-900">Aynı gün kurulum mümkün mü?</summary>
            <p className="mt-2 text-neutral-700">Mümkün. Gün içi uygunluk durumuna bağlı olarak ekspres ekip yönlendiriyoruz.</p>
          </details>
        </div>
      </section>

      {/* SABİT ALT CTA BAR (event handler yok) */}
      <div className="fixed inset-x-0 bottom-4 z-40">
        <div className="mx-auto w-fit rounded-2xl border bg-white/95 backdrop-blur shadow-xl">
          <div className="flex items-center gap-2 px-4 py-2 text-sm">
            <span className="hidden md:inline text-neutral-700">Hızlı teklif isteyin:</span>
            <a
              href="tel:+905453048671"
              className="inline-flex items-center rounded-xl bg-neutral-900 px-3 py-2 font-bold text-white"
              aria-label="Telefonla teklif al"
            >
              📞 Ara
            </a>
            <a
              href="https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20Masa%20%26%20Sandalye%20i%C3%A7in%20h%C4%B1zl%C4%B1%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-3 py-2 font-bold text-neutral-900"
              aria-label="WhatsApp ile teklif isteyin"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <Script
        id="ld-service-masa"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Masa ve Sandalye Kiralama",
            name: "Masa & Sandalye Kiralama",
            description:
              "Düğün, konferans ve kokteyl organizasyonları için masa ve sandalye kiralama. Napolyon, konferans, bistro; teslimat ve yerleşim dahil.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "LocalBusiness",
              name: "Sahneva",
              url: "https://www.sahneva.com",
              telephone: "+90 545 304 8671",
              address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Masa Sandalye Paketleri",
              itemListElement: CONTENT.packages.map((p, idx) => ({
                "@type": "Offer",
                position: idx + 1,
                name: p.name,
                description: `${p.includes.join(", ")}${p.note ? " — " + p.note : ""}`,
                priceCurrency: "TRY",
                availability: "https://schema.org/InStock",
                url: "https://www.sahneva.com/masa-sandalye-kiralama",
              })),
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              ratingCount: "183",
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-masa"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Masa & Sandalye Kiralama", item: "https://www.sahneva.com/masa-sandalye-kiralama" },
            ],
          }),
        }}
      />
    </>
  );
}
