// app/podyum-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getService } from "@/lib/data";
import PriceEstimator from "@/components/PriceEstimatorPodyum";

// ⏱️ Saatlik yeniden üretim (statik + ISR)
export const revalidate = 3600;

const svc = getService("podyum");

// Haftalık birim fiyatlar (gerçek)
const UNIT_PRICES = {
  platform_m2_week: 300,  // TL/m²/hafta
  carpet_m2_week: 120,    // TL/m²/hafta
  skirt_ml_week: 90,      // TL/mtül/hafta
};

// Paket (varsayılan dizilimler)
const CONTENT = {
  gallery: ["/img/podyum/1.webp", "/img/podyum/2.webp", "/img/podyum/3.webp"],
  packages: [
    {
      key: "mini",
      name: "Mini Podyum — 12 m²",
      layout: { width: 3, depth: 4, area: 12, perimeter: 14 },
      includes: [
        "6 × (1×2 m) panel – toplam 12 m²",
        "Yükseklik: 40 cm",
        "Kaymaz kaplama",
        "Kurulum + söküm",
      ],
      note: "İç mekân konuşma/mini performanslar için ideal.",
    },
    {
      key: "orta",
      name: "Orta Podyum — 24 m²",
      layout: { width: 4, depth: 6, area: 24, perimeter: 20 },
      includes: [
        "12 × (1×2 m) panel – toplam 24 m²",
        "Yükseklik: 60 cm",
        "Kaymaz kaplama, merdiven",
        "Kurulum + söküm + yerinde dengeleme",
      ],
      note: "Kurumsal sahneler ve canlı performanslar için.",
    },
    {
      key: "pro",
      name: "Pro Podyum — 48 m²",
      layout: { width: 6, depth: 8, area: 48, perimeter: 28 },
      includes: [
        "24 × (1×2 m) panel – toplam 48 m²",
        "Yükseklik: 80–100 cm",
        "Kaymaz kaplama, merdiven, rampa, korkuluk",
        "Kurulum + söküm + çevre etek/brandalama",
      ],
      note: "Büyük konser/miting sahneleri için.",
    },
  ],
};

// Yardımcılar
function priceBase(area) {
  return area * UNIT_PRICES.platform_m2_week;
}
function priceCarpet(area) {
  return area * UNIT_PRICES.carpet_m2_week;
}
function priceSkirt(perimeter) {
  return perimeter * UNIT_PRICES.skirt_ml_week;
}
function formatTRY(n) {
  try {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} TL`;
  }
}

export const metadata = {
  title: svc?.title ?? "Podyum Kiralama",
  description:
    svc?.excerpt ||
    "Podyum sahne kiralama: 1×1 ve 2×1 panellerle modüler kurulum, kaymaz kaplama, rampa/korkuluk ve profesyonel montaj.",
  // ✅ Kanonik ve OG URL’leri tek alan adına sabitledik (www’siz)
  alternates: { canonical: "https://www.sahneva.com/podyum-kiralama" },
  keywords: [
    "podyum kiralama",
    "podyum sahne kiralama",
    "modüler podyum",
    "sahne podyum platform",
    "podyum fiyatları",
    "İstanbul podyum kiralama",
  ],
  openGraph: {
    title: svc?.title ?? "Podyum Kiralama",
    description:
      svc?.desc ||
      "Konser, lansman ve düğünler için podyum sahne kiralama. Modüler 1×1 & 2×1 paneller, kaymaz kaplama.",
    url: "https://www.sahneva.com/podyum-kiralama",
    type: "article",
    // ✅ width/height ekledik (en sık kullanılan paylaşım boyutları)
    images: [
      {
        url: svc?.img ?? "/img/podyum/1.webp",
        width: 1200,
        height: 630,
        alt: "Podyum kiralama – Sahneva kurulum görseli",
      },
    ],
  },
};

export default function Page() {
  const title = svc?.title ?? "Podyum Kiralama";
  const desc =
    svc?.desc ??
    "Podyum sahne kiralama: 1×1 ve 2×1 panellerle modüler kurulum, kaymaz kaplama ve profesyonel ekip.";
  const heroSrc = svc?.img ?? CONTENT.gallery[0];

  const enrichedPkgs = CONTENT.packages.map((p) => {
    const base = priceBase(p.layout.area);
    const carpet = priceCarpet(p.layout.area);
    const skirt = priceSkirt(p.layout.perimeter);
    return { ...p, price: { base, withCarpetAndSkirt: base + carpet + skirt, carpet, skirt } };
  });

  return (
    <>
      {/* HERO (LCP optimize) */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src={heroSrc}
          alt={title}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
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

      {/* Hızlı hesaplayıcı */}
      <section className="container max-w-4xl mx-auto py-6">
        <h2 className="text-2xl font-bold mb-3">Hızlı Fiyat Hesaplama (Haftalık)</h2>
        <PriceEstimator unitPrices={UNIT_PRICES} />
        <p className="mt-2 text-sm text-neutral-500">
          *Halı m², skört kumaş çevre (metre) bazlıdır. Plan/dizilime göre değişebilir.{" "}
          <strong>İstanbul içi kurulum-söküm ve nakliye (≈200 m²’ye kadar) ortalama 8.000 TL</strong> — şehir dışı değişkendir.
        </p>
      </section>

      {/* 1×1 vs 2×1 Karşılaştırma */}
      <section className="container max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">1×1 mı, 2×1 mi? Hangi panel nerede daha iyi?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-lg">1×1 m Paneller</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Avantaj:</strong> Düzensiz/çadır zeminde hassas dengeleme kolay</li>
              <li>• <strong>Kullanım:</strong> Düğün, çadır içi, dar alan genişletme</li>
              <li>• <strong>Not:</strong> Karmaşık planlarda modülerlik avantajlı</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-lg">2×1 m Paneller</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Avantaj:</strong> Hızlı kurulum + ana sahnede geniş yüzey</li>
              <li>• <strong>Kullanım:</strong> Konser, kurumsal lansman, büyük yüzey</li>
              <li>• <strong>Not:</strong> Kamera/LED ile birlikte ideal kombinasyon</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Paketler + fiyatlar */}
      {!!enrichedPkgs.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Paket Örnekleri ve Fiyatları (Haftalık)</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {enrichedPkgs.map((p, i) => (
              <article key={`pkg-${p.key}-${i}`} className="rounded-2xl border bg-white p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <div className="mt-2 text-sm text-neutral-600">
                  <div>Ölçü (varsayılan dizilim): <strong>{p.layout.width}×{p.layout.depth} m</strong> ({p.layout.area} m²)</div>
                  <div>Çevre (skört hesabı): <strong>{p.layout.perimeter} m</strong></div>
                </div>

                <ul className="mt-3 space-y-1 text-neutral-700">
                  {p.includes.map((inc, ii) => (
                    <li key={`pkgi-${i}-${ii}`} className="flex gap-2">
                      <span>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl bg-neutral-50 p-3 text-sm">
                  <div><span className="font-semibold">Başlangıç (sadece platform):</span> {formatTRY(p.price.base)}</div>
                  <div><span className="font-semibold">Halı + Skört dahil (önerilen):</span> {formatTRY(p.price.withCarpetAndSkirt)}</div>
                  <div className="text-xs text-neutral-500 mt-1">
                    (Halı: {formatTRY(p.price.carpet)} • Skört: {formatTRY(p.price.skirt)})
                  </div>
                </div>

                {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            *Fiyatlar haftalıktır; etkinlik süresi, nakliye ve saha koşullarına göre değişebilir.
          </p>
        </section>
      )}

      {/* Standart ölçüler fiyat matrisi */}
      <section className="container max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Popüler Ölçüler için Hızlı Fiyatlar</h2>
        <PriceMatrix unitPrices={UNIT_PRICES} />
      </section>

      {/* Kurulum akışı */}
      <section className="container max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">Kurulum Akışı</h2>
        <ol className="list-decimal ml-5 space-y-1 text-neutral-800">
          <li>Keşif/plan paylaşımı: ölçü, yükseklik, aksesuar, tarih/konum</li>
          <li>Lojistik & erişim: araç girişi, asansör/kat bilgisi, gece çalışma</li>
          <li>Kurulum: karkas + panel + dengeleme + güvenlik</li>
          <li>Kaplama & markalama: halı, skört, brandalama</li>
          <li>Test & teslim: sahne üstü prova, kablo kanalları işaretleri</li>
        </ol>
      </section>

      {/* Erişilebilirlik & Güvenlik */}
      <section className="container max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">Erişilebilirlik & Güvenlik</h2>
        <ul className="space-y-1 text-neutral-800">
          <li>• Engelli erişimi için rampa opsiyonu</li>
          <li>• Kenar korkuluk, merdiven ve kaymaz kaplama standartları</li>
          <li>• Kablo kanalı ve sahne kenar işaretlemeleri</li>
        </ul>
      </section>

      {/* Defile Podyumu – Alt Servis */}
      <section className="container max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">Defile Podyumu (I/U/Y Koşu Yolu)</h2>
        <div className="grid md:grid-cols-2 gap-4 text-neutral-800">
          <div className="rounded-2xl border bg-white p-5">
            <p>
              Moda gösterileri, ürün lansmanları ve yürüyüş gerektiren etkinliklerde{" "}
              <strong>defile podyumu</strong> kurulumu yapıyoruz. <strong>Kaymaz kaplama</strong>, 
              ışık ve ses ile <strong>akışa uygun</strong> entegrasyon; I/U/Y koşu yolu planları.
            </p>
            <ul className="mt-3 space-y-1">
              <li>• I/U/Y şema seçenekleri, prova-akışına uygun düzen</li>
              <li>• Çevre skört/brandalama ve estetik kaplama</li>
              <li>• Işık köprüsü & sahne arkası perdesi ile entegrasyon</li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600">
              Detaylı örnekler ve ölçülendirme için alt sayfamıza göz atın.
            </p>
            <Link href="/defile-podyum-kiralama" className="inline-block mt-4 rounded-lg border px-4 py-2 hover:bg-neutral-50">
              Defile Podyumu Detayları →
            </Link>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Neden Sahneva?</h3>
            <ul className="mt-2 space-y-1">
              <li>• <strong>Zamanında teslim</strong>: prova ve çekim saatlerine uyum</li>
              <li>• <strong>Deneyimli ekip</strong>: akış yönetimi tecrübesi</li>
              <li>• <strong>Görsel bütünlük</strong>: kaplama/brandalama ile premium görünüm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kullanım Senaryoları */}
      <section className="container max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">Kullanım Senaryoları</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Kurumsal Lansman</h3>
            <p className="mt-2 text-neutral-800">
              Sunum, demo ve foto/video çekimleri düşünülerek; <strong>2×1 paneller</strong>le geniş yüzey,
              <strong> 40–60 cm</strong> yükseklik ve <strong>kablo yönetimi</strong>yle güvenli akış.
            </p>
          </article>
          <article className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Düğün & Davet</h3>
            <p className="mt-2 text-neutral-800">
              <strong>30–50 cm</strong> yükseklik, orkestra/DJ alanı ve dans pisti uyumu.
              Kaymaz kaplama, <strong>ön etek/skört</strong> ve estetik halı ile bütünlük.
            </p>
          </article>
          <article className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold">Konser & Tören</h3>
            <p className="mt-2 text-neutral-800">
              Büyük yüzeylerde <strong>2×1 paneller</strong> hızlı kurulum sağlar; <strong>rampa/korkuluk</strong> ve
              <strong> yan platformlar</strong> ile sahne önü/arka akış konforu.
            </p>
          </article>
        </div>
      </section>

      {/* İstanbul İlçeleri – Hizmet Bölgeleri */}
      <section className="container max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">İstanbul’da Hizmet Bölgeleri</h2>
        <p className="text-neutral-700">
          İstanbul genelinde aynı gün keşif ve hızlı kurulum yapıyoruz. Aşağıdaki ilçeler sık çalıştığımız bölgelerdendir:
        </p>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Beşiktaş",   text: "oteller, kongre merkezleri ve Boğaz hattı etkinlikleri" },
            { name: "Şişli",      text: "lansman/sunuma uygun salonlar ve AVM etkinlik alanları" },
            { name: "Kadıköy",    text: "açık hava/park içi organizasyonlar ve sahne performansları" },
            { name: "Üsküdar",    text: "kamu/kurumsal törenler, sahil etkinlikleri" },
            { name: "Ataşehir",   text: "plaza/kurumsal lansmanlar, bayi toplantıları" },
            { name: "Bakırköy",   text: "AVM etkinlikleri ve fuaye alan kurulumları" },
            { name: "Beylikdüzü", text: "fuar alanları ve geniş açık hava etkinlikleri" },
            { name: "Başakşehir", text: "spor turnuvaları ve protokol sahneleri" },
            { name: "Sarıyer",    text: "doğa/koru içi davetler ve kurumsal piknik alanları" },
            { name: "Pendik",     text: "festival/konser sahneleri ve sahil etkinlikleri" },
            { name: "Küçükçekmece", text: "kamu etkinlikleri ve meydan sahneleri" },
            { name: "Ümraniye",   text: "AVM lansmanları ve kurumsal etkinlikler" },
          ].map((d, i) => (
            <article key={i} className="rounded-xl border bg-white p-4">
              <h3 className="font-semibold">{d.name}</h3>
              <p className="text-sm text-neutral-700 mt-1">
                {d.name} ve çevresinde {d.text} için podyum kurulumları yapıyoruz.
              </p>
            </article>
          ))}
        </div>

        <p className="mt-3 text-sm text-neutral-500">
          *İstanbul dışı projeler için lütfen tarih ve konumu ileterek keşif/termin planı talep edin.
        </p>
      </section>

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
        </section>
      )}

      {/* FAQ (görünür) */}
      <section className="container max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-3">Sık Sorulan Sorular</h2>
        <div className="space-y-4 text-neutral-800">
          <div>
            <h3 className="font-semibold">Podyum kiralama fiyatları nasıl hesaplanır?</h3>
            <p>Alan (m²), yükseklik, aksesuarlar (korkuluk, rampa, skört, halı) ve nakliye esas alınır. Halı m², skört çevre metre üzerinden hesaplanır.</p>
          </div>
          <div>
            <h3 className="font-semibold">Hangi panelleri kullanıyorsunuz?</h3>
            <p>1×1 m ve 2×1 m modüler paneller. Düzensiz zeminde 1×1, ana sahnede 2×1 paneller önerilir.</p>
          </div>
          <div>
            <h3 className="font-semibold">Kurulum ne kadar sürer?</h3>
            <p>Standart 24–48 m² podyumlar çoğu mekânda aynı gün kurulur. Geniş alanlar ve gece mesaisi ek süre gerektirebilir.</p>
          </div>
          <div>
            <h3 className="font-semibold">Halı ve skört zorunlu mu?</h3>
            <p>Zorunlu değildir; görsel bütünlük ve güvenlik için önerilir. Fiyatlar opsiyon olarak ayrı hesaplanır.</p>
          </div>
        </div>
      </section>

      {/* İLGİLİ HİZMETLER */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
          <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
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
              <Link href="/iletisim" className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90">İletişime Geç</Link>
              <a
                href={`https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20${encodeURIComponent(title)}%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank" rel="noopener noreferrer"
                className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
              >
                WhatsApp
              </a>
            </div>
        </div>
      </section>

      {/* JSON-LD: Service + Offers + FAQ + Breadcrumb */}
      <SchemaBlocks packages={CONTENT.packages} unitPrices={UNIT_PRICES} />
    </>
  );
}

/* ---------- Alt Bileşenler (Server) ---------- */
function PriceMatrix({ unitPrices }) {
  // Popüler ölçü setleri (genişlik × derinlik)
  const PRESETS = [
    { w: 2, d: 5 },  // 10 m²
    { w: 3, d: 5 },  // 15 m²
    { w: 4, d: 5 },  // 20 m²
    { w: 4, d: 6 },  // 24 m²
    { w: 5, d: 6 },  // 30 m²
    { w: 5, d: 8 },  // 40 m²
    { w: 6, d: 10 }, // 60 m²
    { w: 8, d: 10 }, // 80 m²
  ];
  const rows = PRESETS.map(({ w, d }) => {
    const area = w * d;
    const perimeter = 2 * (w + d);
    const base = area * unitPrices.platform_m2_week;
    const carpet = area * unitPrices.carpet_m2_week;
    const skirt = perimeter * unitPrices.skirt_ml_week;
    return { w, d, area, perimeter, base, total: base + carpet + skirt, carpet, skirt };
  });

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-neutral-500 [&>th]:p-3">
            <th>Ölçü</th><th>Alan</th><th>Çevre</th><th>Platform</th><th>Halı</th><th>Skört</th><th>Önerilen Toplam</th>
          </tr>
        </thead>
        <tbody className="[&>tr>*]:p-3 [&>tr]:border-t">
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.w}×{r.d} m</td>
              <td>{r.area} m²</td>
              <td>{r.perimeter} m</td>
              <td>{formatTRY(r.base)}</td>
              <td>{formatTRY(r.carpet)}</td>
              <td>{formatTRY(r.skirt)}</td>
              <td className="font-semibold">{formatTRY(r.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="p-3 text-xs text-neutral-500">
        *Fiyatlar haftalıktır ve nakliye/mesai/özel koşullar hariçtir.
      </p>
    </div>
  );
}

/* ---------- Tekil SchemaBlocks (yinelenmeden) ---------- */
function SchemaBlocks({ packages: pkgs, unitPrices }) {
  // ✅ www’siz tek alan adıyla sabit
  const SITE = "https://www.sahneva.com";
  const PAGE = `${SITE}/podyum-kiralama`;
  const LB_ID = `${SITE}/#localbusiness`; // layout.js’te bununla eşleştiğinden emin ol
  const SERVICE_ID = `${PAGE}#service`;
  const FAQ_ID = `${PAGE}#faq`;
  const BREAD_ID = `${PAGE}#breadcrumbs`;

  const offers = (pkgs || []).map((p) => {
    const area = p.layout.area;
    const perimeter = p.layout.perimeter;
    const priceNumber =
      area * unitPrices.platform_m2_week +
      area * unitPrices.carpet_m2_week +
      perimeter * unitPrices.skirt_ml_week;

    return {
      "@type": "Offer",
      name: p.name,
      description: `${p.layout.width}×${p.layout.depth} m (${p.layout.area} m²), çevre ${p.layout.perimeter} m.`,
      priceCurrency: "TRY",
      // ✅ fiyat string verildi
      price: String(priceNumber),
      availability: "https://schema.org/InStock",
      url: PAGE
    };
  });

  const faq = [
    {
      q: "Podyum kiralama fiyatları nasıl hesaplanır?",
      a: "Alan (m²), yükseklik, aksesuarlar (korkuluk, rampa, skört, halı) ve nakliye temel alınır. Halı m², skört çevre metre üzerinden hesaplanır."
    },
    {
      q: "Hangi panelleri kullanıyorsunuz?",
      a: "1×1 m ve 2×1 m modüler paneller. Düzensiz zeminde 1×1, ana sahnede 2×1 paneller önerilir."
    },
    {
      q: "Kurulum ne kadar sürer?",
      a: "Standart 24–48 m² podyumlar çoğu mekânda aynı gün kurulur. Geniş alanlar ve gece mesaisi ek süre gerektirebilir."
    },
    {
      q: "Halı ve skört zorunlu mu?",
      a: "Zorunlu değildir; görsel bütünlük ve güvenlik için önerilir. Fiyatlar opsiyon olarak ayrı hesaplanır."
    }
  ];

  const ldService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": SERVICE_ID,
    serviceType: "Podyum Kiralama",
    name: "Podyum Kiralama",
    description:
      "Modüler 1×1 ve 2×1 panellerle podyum kiralama; kaymaz kaplama, rampa/korkuluk ve profesyonel kurulum.",
    url: PAGE,
    isPartOf: { "@id": PAGE },
    areaServed: [
      { "@type": "Country", name: "TR" },
      { "@type": "City", name: "İstanbul" }
    ],
    provider: { "@id": LB_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Podyum Paketleri (Haftalık)",
      itemListElement: offers
    }
  };

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": FAQ_ID,
    about: { "@id": SERVICE_ID },
    mainEntityOfPage: PAGE,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const ldBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": BREAD_ID,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
      { "@type": "ListItem", position: 2, name: "Podyum Kiralama", item: PAGE }
    ]
  };

  return (
    <>
      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }} />
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
    </>
  );
}
