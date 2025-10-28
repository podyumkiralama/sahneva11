// app/led-ekran-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getService } from "@/lib/data"; // alias yoksa: ../../lib/data

// /led-ekran-kiralama
const svc = getService("led-ekran");

const CONTENT = {
  heroOverlay: true,
  gallery: ["/img/led/1.webp", "/img/led/2.webp", "/img/led/3.webp"],
  packages: [
    {
      name: "İç Mekân Paket — P3 • 3×2 m",
      includes: [
        "P3 iç mekân paneller (≈ 6 m²)",
        "LED işlemci + scaler (HDMI)",
        "Zemin kurulum (ground stack)",
        "Kurulum, test ve teknik operasyon",
      ],
      note: "Toplantı, fuar standı, sahne arkası sunumlar için ideal.",
    },
    {
      name: "Dış Mekân Paket — P4 • 4×2.5 m",
      includes: [
        "P4 dış mekân paneller (≈ 10 m²)",
        "Yüksek parlaklık (≥ 4500 nit)",
        "Truss üzerinde asma veya ground stack",
        "İçerik yayın bilgisayarı + operatör",
      ],
      note: "Açık hava lansman ve etkinlikleri için parlaklık garantili.",
    },
    {
      name: "Pro Paket — P3.9 • 6×3.5 m",
      includes: [
        "P3.9 dış/iç uyumlu paneller (≈ 21 m²)",
        "1920–3840 Hz, kamera yayınına uygun",
        "Rigging (uçuş) donanımı, güvenlik ekipmanları",
        "Yedek güç kaynağı ve yedek modül",
      ],
      note: "Konser, miting ve büyük sahneler için profesyonel kurulum.",
    },
  ],
};

// ---------- META ----------
export const metadata = {
  // Root layout'ta title template kullanıyorsan (örn. "%s | Sahneva"),
  // burada markasız bırakmak en doğrusu:
  title: svc?.title ?? "LED Ekran Kiralama",
  description:
    svc?.excerpt ||
    "İç/dış mekân LED ekran kiralama: P2–P6 piksel aralığı, yüksek parlaklık, profesyonel yayın ve teknik operasyon.",
  alternates: { canonical: "https://sahneva.com/led-ekran-kiralama" },
  keywords: [
    "LED ekran kiralama",
    "led ekran fiyatları",
    "P3 P3.9 P4 P5 led",
    "ground stack rigging",
    "açık hava led ekran",
    "konser miting led ekran",
  ],
  openGraph: {
    title: svc?.title ?? "LED Ekran Kiralama",
    description:
      svc?.desc ||
      "Konser, lansman, toplantı ve açık hava etkinlikleri için LED ekran kiralama. P2–P6 seçenekleri, rigging/ground stack, canlı miksaj.",
    url: "https://sahneva.com/led-ekran-kiralama",
    type: "article",
    images: [{ url: svc?.img ?? "/img/hizmet-led-ekran.webp" }],
  },
};

// İçerik güncellemeleri hızlı yansısın
export const revalidate = 60;

// ---------- UZUN MAKALE ----------
function LongArticleLed() {
  return (
    <section className="container max-w-4xl mx-auto py-10 md:py-14 space-y-10">
      {/* LED Ekran Kiralama Nedir? */}
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">LED Ekran Kiralama Nedir?</h2>
        <p>
          LED ekran; modüler panellerin birleşmesiyle istenen ölçüde kurulan, yüksek parlaklık ve
          netlik sunan görüntü sistemidir. <strong>Sahneva</strong> olarak; P2–P6 piksel aralığında
          iç/dış mekân paneller, profesyonel içerik yönetimi, canlı kamera yayını ve teknik
          operasyonla anahtar teslim hizmet veriyoruz.
        </p>
        <p>
          İç mekân panelleri yüksek çözünürlük ve yakın izleme mesafesi için; dış mekân panelleri
          ise yoğun güneş altında <strong>yüksek nit</strong> değeri ve <strong>IP koruma</strong>
          sınıfı ile tercih edilir. Montaj, kurulum sahasına göre <strong>ground stack</strong>
          (zeminde kule) veya <strong>rigging</strong> (truss’tan asma) şeklinde yapılır.
        </p>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">LED Ekran Kiralama Fiyatları</h2>
        <p className="mt-3 text-neutral-700 leading-relaxed">
          Fiyatlar, proje ihtiyaçlarına göre değişir. Aşağıdaki faktörler bütçeyi belirler:
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>Alan ölçüsü</strong> (m²) ve piksel aralığı (P2–P6)</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>İç/dış mekân</strong> ve parlaklık (nit) gereksinimi</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>Kurulum yöntemi</strong> (rigging/ground stack) ve truss ihtiyacı</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>İçerik ve yayın</strong> (canlı kamera, miksaj, medya sunucu, operatör)</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>Güç & lojistik</strong> (besleme hatları, nakliye, gece çalışma)</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /> <strong>Süre</strong> (tek gün / çok gün) ve yedek ekipman ihtiyacı</li>
        </ul>
        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            Hızlı bir bütçe için; <strong>ölçü</strong> (en×boy metre), <strong>mekân türü</strong> (iç/dış),
            <strong> izleme mesafesi</strong>, <strong>kurulum şekli</strong> ve <strong>tarih/konum</strong> bilgilerini iletmeniz yeterli.
          </p>
        </div>
      </article>

      {/* Nerelerde Kullanılır */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">LED Ekran Nerelerde Kullanılır?</h2>
        <div className="grid md:grid-cols-2 gap-2 mt-3 text-neutral-800">
          <ul className="space-y-1">
            <li>• Konser ve festival sahneleri (ana ekran/yan kanatlar)</li>
            <li>• Lansman ve ürün tanıtımları</li>
            <li>• Kongre & toplantı salonları, fuar standları</li>
            <li>• Spor karşılaşmaları, fan zone alanları</li>
          </ul>
          <ul className="space-y-1">
            <li>• Açık hava miting ve törenleri</li>
            <li>• AVM etkinlikleri ve yol gösterim ekranları</li>
            <li>• Sahne arkası dekoratif LED uygulamaları</li>
            <li>• Yayın/kamera ile canlı görüntü aktarımı</li>
          </ul>
        </div>
      </article>

      {/* Kurulum İpuçları */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Doğru LED Ekran Seçimi ve Kurulum İpuçları</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Görüntü Kalitesi</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Piksel aralığı</strong>: Yakın izleme için düşük pitch (P2–P3), uzak izleme için P3.9–P6 uygundur.</li>
              <li>• <strong>İzleme mesafesi kuralı</strong>: Minimum mesafe ≈ pitch(mm) × <span className="whitespace-nowrap">1–1.5 m</span>.</li>
              <li>• <strong>Tazeleme</strong>: 1920–3840 Hz; kamera çekimlerinde titreşimsiz görüntü için önemli.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Mekân & Güvenlik</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Parlaklık</strong>: İç mekân 800–1500 nit, dış mekân 3500–6500+ nit.</li>
              <li>• <strong>IP sınıfı</strong>: Dış mekân için en az IP65 (ön) / IP54 (arka).</li>
              <li>• <strong>Montaj</strong>: Ground stack veya rigging (truss). Rüzgâr ve yük hesaplarıyla güvenlik devreleri şart.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Yayın & İçerik</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• LED işlemci (Novastar/Colorlight vb.) ve scaler ile doğru çözünürlük eşleme</li>
              <li>• Kaynaklar: HDMI/SDI, medya sunucu, bilgisayar, kamera miksajı</li>
              <li>• İçerik oranları: 16:9, 4:3 veya sahne genişliğine göre özel en/boy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Güç & Lojistik</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Tipik tüketim: iç 300–500 W/m², dış 500–800 W/m²</li>
              <li>• Dağıtım: ayrı hatlar, faz dengesi, sigorta & kaçak akım rölesi</li>
              <li>• Yedek: güç kaynağı ve modül yedeğiyle kesintisiz yayın</li>
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
                <th className="p-2">Özellik</th>
                <th className="p-2">Açıklama</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:p-2 [&>tr]:border-b">
              <tr><td>Piksel Aralığı</td><td>P2 – P6 (iç/dış mekân)</td></tr>
              <tr><td>Parlaklık (Nit)</td><td>İç: 800–1500 • Dış: 3500–6500+</td></tr>
              <tr><td>Tazeleme Hızı</td><td>≥ 1920 Hz (3840 Hz opsiyonel)</td></tr>
              <tr><td>IP Koruma</td><td>Dış: IP65 (ön) / IP54 (arka) • İç: IP43+</td></tr>
              <tr><td>Kabin Ölçüleri</td><td>500×500 mm / 500×1000 mm</td></tr>
              <tr><td>Montaj</td><td>Ground stack veya rigging (truss)</td></tr>
              <tr><td>Güç Tüketimi</td><td>İç: ~300–500 W/m² • Dış: ~500–800 W/m²</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

// ---------- SAYFA ----------
export default function Page() {
  const title = svc?.title ?? "LED Ekran Kiralama";
  const desc =
    svc?.desc ??
    "P2–P6 aralığında iç/dış mekân LED ekran kiralama. Yüksek parlaklık, profesyonel yayın ve teknik ekip.";

  const heroSrc = svc?.img ?? "/img/hizmet-led-ekran.webp";

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src={heroSrc}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {CONTENT.heroOverlay && <div className="absolute inset-0 bg-black/45" aria-hidden="true" />}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold drop-shadow-lg">{title}</h1>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container max-w-4xl mx-auto py-8">
        <p className="text-neutral-700 leading-relaxed text-lg">{desc}</p>
      </section>

      {/* Uzun makale */}
      <LongArticleLed />

      {/* Paketler */}
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
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`${title} kurulum görseli ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-neutral-500">
                      </p>
        </section>
      )}

      {/* İLGİLİ HİZMETLER */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
          <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
          <li><Link href="/ses-isik-sistemleri" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Ses &amp; Işık Sistemleri</Link></li>
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
            <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90">
              İletişime Geç
            </Link>
            <a
              href={`https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20${encodeURIComponent(title)}%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
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
      <Script
        id="ld-service-led"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "LED Ekran Kiralama",
            name: "LED Ekran Kiralama",
            description:
              "İç/dış mekân LED ekran kiralama; P2–P6 piksel aralığı, yüksek parlaklık, profesyonel yayın ve teknik operasyon.",
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
              name: "LED Ekran Paketleri",
              itemListElement: CONTENT.packages.map(p => ({
                "@type": "Offer",
                name: p.name,
                description: p.includes.join(", "),
                priceSpecification: { "@type": "PriceSpecification", priceCurrency: "TRY" },
                availability: "https://schema.org/InStock",
              })),
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-led"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "LED Ekran Kiralama", item: "https://www.sahneva.com/led-ekran-kiralama" },
            ],
          }),
        }}
      />
    </>
  );
}
