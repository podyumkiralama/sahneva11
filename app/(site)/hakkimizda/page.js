// app/hakkimizda/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ───── META ───── */
export const metadata = {
  title: "Hakkımızda",
  description:
    "Sahneva; sahne, podyum, LED ekran, ses–ışık sistemleri ve çadır kiralama alanında uzman bir prodüksiyon & organizasyon firmasıdır. Türkiye genelinde hizmet veriyoruz.",
  alternates: { canonical: "https://www.sahneva.com/hakkimizda" },
  openGraph: {
    title: "Hakkımızda",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve çadır kiralama hizmetlerinde uzman ekibimizle kurumsal etkinlik prodüksiyonu.",
    url: "https://www.sahneva.com/hakkimizda",
    images: ["/img/og.jpg"],
    type: "article",
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

// ISR
export const revalidate = 60;

export default function HakkimizdaPage() {
  const STATS = [
    { n: "10+ yıl", t: "Sektör tecrübesi" },
    { n: "700+", t: "Başarılı etkinlik" },
    { n: "TR genel", t: "Kurulum & lojistik" },
  ];

  const TIMELINE = [
    { y: "2012 – Başlangıç", d: "Butik sahne ve ses hizmetleri ile ilk adımlarımızı attık." },
    { y: "2016 – Genişleme", d: "LED ekran ve görüntü sistemlerini filomuza kattık." },
    { y: "2020 – Kurumsallaşma", d: "Türkiye geneli lojistik ağımızı kurduk; büyük ölçekli etkinliklerde çözüm ortağı olduk." },
    { y: "2024 – İnovasyon", d: "Yeni nesil ekipman parkı, dijital entegrasyon ve canlı yayın çözümleriyle fark yarattık." },
  ];

  const VALUES = [
    "Güvenlik ve iş sağlığına öncelik",
    "Zamanında kurulum ve şeffaf planlama",
    "Güncel, bakımlı ekipman parkı",
    "Estetik tasarım ve teknik uyum",
    "Bütçe dostu, verimli çözümler",
    "Kesintisiz teknik destek ve danışmanlık",
  ];

  return (
    <div className="pb-12 md:pb-16 bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative h-[44vh] md:h-[56vh] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/img/hakkimizda.webp"
          alt="Sahneva — ekip ve sahne kurulumları"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">
              Hakkımızda
            </h1>
            <p className="mt-2 max-w-3xl text-white/95 md:text-lg leading-relaxed">
              Türkiye genelinde <strong>sahne, podyum, LED ekran, ses–ışık</strong> sistemleri ve
              kurulum hizmetlerini <strong>tek çatı altında</strong> sunuyoruz. Kurumsal disiplin ve
              güçlü teknik ekipmanla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Hızlı İstatistikler */}
      <section className="-mt-10 md:-mt-12 relative z-10">
        <div className="container mx-auto px-4 grid gap-4 md:grid-cols-3">
          {STATS.map((k, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/80 backdrop-blur shadow-sm border border-white p-5 md:p-6 transition hover:shadow-md"
            >
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight">{k.n}</div>
              <div className="mt-1 text-neutral-700 font-medium">{k.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="container mx-auto px-4 mt-12 space-y-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">Biz Kimiz?</h2>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Sahneva</strong>, etkinlik prodüksiyonu ve ekipman kiralama alanında uzmanlaşmış bir organizasyon firmasıdır.
          Sahne, podyum, LED ekran, ses–ışık ve çadır kurulumlarından canlı yönetim ve yayın çözümlerine kadar tüm teknik süreci tek ekipte toplar.
        </p>
      </section>

      {/* Neden Sahneva */}
      <section className="container mx-auto px-4 mt-10 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold">Neden Sahneva?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Tek Noktadan Çözüm", "Tüm sahne altyapısı tek ekip tarafından yönetilir."],
            ["Güvenlik Önceliği", "Statik hesap, iş güvenliği ve yük analizleri yapılır."],
            ["Ölçeklenebilirlik", "Butik etkinlikten büyük festivallere uyarlanabilir mimari."],
            ["Kurumsal Disiplin", "Proje planı, iş akışı ve teslim tarihlerine tam uyum."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-neutral-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tarihçe */}
      <section className="container mx-auto px-4 mt-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Tarihçe</h2>
        <ol className="relative border-l-2 border-neutral-200 pl-8 space-y-6">
          {TIMELINE.map((t, i) => (
            <li key={i} className="relative">
              <div className="absolute -left-3 mt-1 h-4 w-4 rounded-full bg-[#815be0]" />
              <h3 className="font-semibold">{t.y}</h3>
              <p className="text-neutral-700">{t.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Referans Gücü ve Deneyim (yeni) */}
      <section className="container mx-auto px-4 mt-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Referans Gücü ve Deneyim</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Sahneva, yıllar içerisinde <strong>belediyeler, kurumsal markalar, ajanslar ve etkinlik prodüksiyon firmalarıyla</strong> sürdürülebilir iş birlikleri kurmuştur.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700">
          <li>Kurumsal lansman etkinliklerinde teknik çözüm ortağı</li>
          <li>Festival ve konserlerde sahne altyapı sağlayıcısı</li>
          <li>Düğünlerde şık ve güvenli sahne projeleri</li>
          <li>Ajanslara özel prodüksiyon partnerliği</li>
          <li>Kamu kurumlarına güven temelli hizmet</li>
        </ul>
      </section>

      {/* Müşteri Memnuniyeti Yaklaşımımız (yeni) */}
      <section className="container mx-auto px-4 mt-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Müşteri Memnuniyeti Yaklaşımımız</h2>
        <p className="text-neutral-700 leading-relaxed">
          Her proje bizim için standart bir kurulum değil, marka hikayesini sahneye taşıyan bir deneyimdir. Bu sebeple:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-3">
          <li>İhtiyaca göre proje bazlı çözümler geliştiririz</li>
          <li>Keşif ve planlama sürecini şeffaf yönetiriz</li>
          <li>Kurulum sonrası teknik destek sunmaya devam ederiz</li>
          <li>Geri bildirimleri sonraki projelerde değerlendiririz</li>
        </ul>
      </section>

      {/* Değerlerimiz */}
      <section className="container mx-auto px-4 mt-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Değerlerimiz</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-neutral-700">
          {VALUES.map((v, i) => (
            <li key={i} className="rounded-xl bg-white p-3 shadow-sm border hover:shadow-md transition">
              • {v}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/hizmetler"
            className="px-6 py-3 bg-[#815be0] text-white rounded-lg font-semibold hover:opacity-90"
            aria-label="Hizmetlerimizi Keşfet"
          >
            Hizmetlerimizi Keşfet
          </Link>
          <Link
            href="/iletisim"
            className="px-6 py-3 border rounded-lg font-semibold hover:bg-neutral-50"
            aria-label="Bizimle İletişime Geç"
          >
            Bizimle İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
