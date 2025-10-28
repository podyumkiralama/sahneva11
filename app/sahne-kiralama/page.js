// app/sahne-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık",
  description:
    "Etkinliğinize uygun sahne kiralama: truss ve rigging, podyum, LED ekran, profesyonel ses ve ışık sistemleri. Kurulum, canlı operasyon ve söküm dahil.",
  alternates: { canonical: "https://sahneva.com/sahne-kiralama" },
  openGraph: {
    title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık",
    description:
      "Konser, lansman, miting, festival ve kurumsal etkinlikler için anahtar teslim sahne kiralama.",
    url: "https://sahneva.com/sahne-kiralama",
    images: [{ url: "/img/og.jpg" }],
    type: "article",
  },
  robots: { index: true, follow: true },
};

// ——— İçerikler ———
const GALLERY = ["/img/sahne/1.webp", "/img/sahne/2.webp", "/img/sahne/3.webp", "/img/sahne/4.webp"];

const PACKAGES = [
  {
    name: "Mini Sahne — 16 m²",
    includes: [
      "8 × (2×1 m) podyum – 16 m²",
      "Yükseklik 40 cm, kaymaz kaplama",
      "6 m düz truss arka fon",
      "2 LED bar + 2 spot",
      "Kurulum, test ve söküm",
    ],
    note: "Toplantı, söyleşi ve butik iç mekân etkinlikleri.",
  },
  {
    name: "Standart Sahne — 24 m²",
    includes: [
      "12 × (2×1 m) podyum – 24 m²",
      "Yükseklik 60 cm, ön etek kapama",
      "U şeklinde 12 m truss",
      "4 hareketli başlık + 6 wash",
      "2+1 hoparlör, dijital mikser, kablosuz mikrofon",
      "Kurulum, canlı teknik yönetim, söküm",
    ],
    note: "Kurumsal lansman, söyleşi+performans, AVM etkinlikleri.",
  },
  {
    name: "Konser Sahnesi — 48 m²",
    includes: [
      "24 × (2×1 m) podyum – 48 m² (örn. 8×6 m)",
      "Yükseklik 80–100 cm, rampa/korkuluk",
      "Ön kiriş 12 m + yan kule 8 m truss",
      "Line array PA, monitörler, backline altyapı",
      "LED ekran (örn. 5×3 m) + scaler",
      "Işık: hareketli başlıklar, wash, blinder, haze",
      "Kurulum, soundcheck, canlı yönetim, söküm",
    ],
    note: "Konser, festival, açık alan yüksek katılımlı etkinlikler.",
  },
];

export default function Page() {
  const title = "Sahne Kiralama";
  const desc =
    "Truss & rigging, podyum, LED ekran, profesyonel ses ve ışık sistemleriyle anahtar teslim sahne çözümleri. Kurulum, canlı teknik yönetim ve söküm dahil.";

  return (
    <>
      {/* HERO (Diğer sayfalarla aynı yükseklik ve stil) */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/img/hero-sahne.webp"
          alt="Sahne kiralama: truss, podyum, LED ekran, ses ve ışık"
          fill
          priority
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

      {/* Öne Çıkan Özellikler (H2 → H3 hiyerarşisi doğru) */}
      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Öne Çıkan Özellikler</h2>
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {[
            ["Modüler Tasarım", "1×1 / 2×1 panellerle hızlı kurulum"],
            ["Güvenlik", "Korkuluk, rampa, kaymaz kaplama"],
            ["Görsellik", "LED ekran & sahne tekstili"],
            ["Tam Hizmet", "Kurulum + canlı yönetim + söküm"],
          ].map(([t, d]) => (
            <article key={t} className="rounded-2xl border p-5 shadow-sm bg-white">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-neutral-700">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Galeri */}
      {!!GALLERY.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Kurulumdan Görseller</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`Sahne kurulumu görsel ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Paketler */}
      {!!PACKAGES.length && (
        <section className="container py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Hazır Paketler</h2>
          <p className="text-neutral-600 mb-6">
            Ölçülere, etkinlik türüne ve mekân şartlarına göre paket içerikleri uyarlanır.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <article key={p.name} className="rounded-2xl border bg-white p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-neutral-700">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <span aria-hidden>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
                <div className="mt-4 flex gap-2">
                  <Link href="/iletisim" className="rounded-lg bg-black text-white px-4 py-2 text-sm">
                    Teklif Al
                  </Link>
                  <Link href="/led-ekran-kiralama" className="rounded-lg border px-4 py-2 text-sm">
                    LED Ekran Bilgisi
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Bileşenler */}
      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-extrabold">Sahne Bileşenleri</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <article className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Podyum</h3>
            <p className="mt-2 text-sm text-neutral-700">
              1×1 ve 2×1 modüllerle 20–100 cm yükseklik; kaymaz kaplama, etek, rampa ve korkuluk opsiyonları.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Kapalı alan: 40–60 cm • Açık alan: 60–100 cm önerilir</li>
              <li>Merdiven ve rampa erişimi (engelli dostu)</li>
              <li>Şase dengeleme ve noktasal yük dağıtımı</li>
            </ul>
            <Link href="/podyum-kiralama" className="mt-3 inline-block text-sm underline">
              Podyum kiralama →
            </Link>
          </article>

          <article className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Truss &amp; Rigging</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Ön kiriş, yan kule, back truss ve roof sistemleri; askı noktaları ve güvenlik ekipmanları standartlara uygun kurulur.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Statik hesap ve güvenlik katsayıları</li>
              <li>Chain/hoist ve ground support</li>
              <li>Backdrop, banner ve dekor askıları</li>
            </ul>
          </article>

          <article className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">LED Ekran</h3>
            <p className="mt-2 text-sm text-neutral-700">
              P2–P6 paneller; yüksek parlaklık, scaler ve canlı miksaj desteği. Arka fon LED veya yan kanatlar.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Öneri: 3×2 m (iç mekân) / 5×3 m (açık alan)</li>
              <li>Dış mekân için IP65 koruma</li>
              <li>HDMI/SDI giriş ve içerik döngüsü</li>
            </ul>
            <Link href="/led-ekran-kiralama" className="mt-3 inline-block text-sm underline">
              LED ekran kiralama →
            </Link>
          </article>

          <article className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Ses &amp; Işık</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Line array PA, dijital mikser, kablosuz mikrofon ve hareketli başlıklarla sahne ışık tasarımı. Teknik ekip eşliğinde.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Soundcheck ve sahne monitörlemesi</li>
              <li>Beam/spot, wash, blinder, haze/duman</li>
              <li>DMX programlama ve show control</li>
            </ul>
            <Link href="/ses-isik-sistemleri" className="mt-3 inline-block text-sm underline">
              Ses &amp; ışık kiralama →
            </Link>
          </article>
        </div>
      </section>

      {/* Süreç */}
      <section className="container py-8">
        <h2 className="text-2xl md:text-3xl font-extrabold">İş Sürecimiz</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-5">
          {[
            ["Keşif & Planlama", "Mekân ölçümü, yük ve elektrik analizi"],
            ["Projelendirme", "2D/3D sahne yerleşim ve truss planı"],
            ["Kurulum & Test", "Statik/güvenlik kontrolleri, soundcheck"],
            ["Canlı Yönetim", "Show control ve anlık teknik destek"],
          ].map(([t, d], i) => (
            <article key={t} className="rounded-2xl border p-5 bg-white">
              <div className="text-sm text-neutral-500">0{i + 1}</div>
              <h3 className="font-semibold mt-1">{t}</h3>
              <p className="mt-1 text-sm text-neutral-700">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="container pb-10 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Sıkça Sorulan Sorular</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            [
              "Sahne ölçüsünü nasıl belirliyorsunuz?",
              "Katılımcı sayısı, performans türü ve mekân ölçülerine göre podyum alanı, yükseklik ve truss açıklıkları belirlenir.",
            ],
            [
              "Açık alan konserlerinde hangi yükselti önerilir?",
              "Genellikle 80–100 cm önerilir. Seyirci görüş çizgisi ve bariyer yerleşimi de dikkate alınır.",
            ],
            [
              "LED ekran şart mı?",
              "Görünürlüğü ve sponsor alanını artırdığı için önerilir; ancak zorunlu değildir.",
            ],
            [
              "Kurulum ne kadar sürer?",
              "Mini sahnede 2–4 saat, konser kurulumlarında çoğu zaman 1 tam gün planlanır.",
            ],
          ].map(([q, a]) => (
            <article key={q} className="rounded-2xl border p-5 bg-white">
              <h3 className="font-medium">{q}</h3>
              <p className="mt-1 text-sm text-neutral-700">{a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* İlgili Hizmetler (iç linkler) */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
          <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
          <li><Link href="/ses-isik-sistemleri" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Ses &amp; Işık Sistemleri</Link></li>
          <li><Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Çadır Kiralama</Link></li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">
            {title} için hızlı teklif ister misiniz?
          </h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90"
              aria-label="İletişime geçin"
            >
              İletişime Geç
            </Link>
            <a
              href="https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20Sahne%20Kiralama%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
              aria-label="WhatsApp ile teklif iste"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}