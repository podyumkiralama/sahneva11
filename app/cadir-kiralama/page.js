// app/cadir-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/** ───── META ─────
 * layout.js'teki title template nedeniyle "| Sahneva" eklemiyoruz.
 */
export const metadata = {
  title: "Çadır Kiralama | Pagoda, Şeffaf, Endüstriyel Çözümler",
  description:
    "Pagoda 5×5/6×6, şeffaf dome ve endüstriyel depolama çadırları. Zemin kaplama, aydınlatma ve lojistik dâhil Türkiye geneli profesyonel kurulum.",
  alternates: { canonical: "https://www.sahneva.com/cadir-kiralama" },
  keywords: [
    "çadır kiralama",
    "pagoda çadır",
    "şeffaf çadır",
    "fuar çadırı",
    "endüstriyel depolama çadırı",
    "çadır kurulumu",
    "çadır zemin kaplama",
  ],
  openGraph: {
    title: "Çadır Kiralama",
    description:
      "Açık hava etkinlikleri için pagoda, şeffaf ve endüstriyel çadır çözümleri. Türkiye geneli profesyonel kurulum.",
    url: "https://www.sahneva.com/cadir-kiralama",
    type: "article",
    images: [{ url: "/img/cadir/hero.webp", width: 1200, height: 800, alt: "Çadır Kiralama" }],
  },
};

// İçerik hızlı güncellensin (ISR)
export const revalidate = 60;

export default function CadirKiralamaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO — LED sayfasıyla aynı oran, daha kısa yükseklik + güçlü overlay */}
      <section className="relative h-[260px] md:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/img/cadir/hero.webp"
          alt="Sahneva — profesyonel çadır kurulumu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow">
              Çadır Kiralama
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/90">
              Pagoda, şeffaf ve endüstriyel çadır çözümleri. Zemin kaplama, aydınlatma ve lojistikle birlikte Türkiye geneli kurulum.
            </p>
          </div>
        </div>
      </section>

      {/* GİRİŞ */}
      <section className="container mx-auto px-4 py-10 md:py-12 max-w-5xl">
        <p className="text-neutral-800 leading-relaxed text-lg mb-6">
          Açık hava etkinlikleri; düğün, lansman, fuar veya konser gibi organizasyonlarda hava koşullarına bağlı riskler taşır.{" "}
          <strong>Sahneva</strong>, bu riskleri ortadan kaldırmak ve konforlu bir alan oluşturmak için modern, güvenli ve şık çadır çözümleri sunar.
          Pagoda çadırlar, şeffaf kubbeli sistemler ve endüstriyel depolama çadırlarıyla her ölçekte etkinlik için uygun alternatifler geliştiriyoruz.
        </p>
        <p className="text-neutral-800 leading-relaxed text-lg">
          Keşiften planlamaya, kurulumdan söküme kadar tüm süreç Sahneva ekibi tarafından yönetilir. Zemin kaplama (podyum/kontraplak), yan branda,
          kapı–pencere modülleri, aydınlatma ve elektrik dağıtımı gibi tamamlayıcı hizmetleri de tek pakette sunuyoruz.
        </p>
      </section>

      {/* ÇADIR TÜRLERİ */}
      <section className="container mx-auto px-4 pb-10 md:pb-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span aria-hidden="true" className="mr-2">🏕️</span>
          Çadır Türleri
        </h2>

        {/* Pagoda */}
        <figure className="mb-6">
          <Image
            src="/img/cadir/pagoda.webp"
            alt="Pagoda çadır kurulumu (5×5 / 6×6 m)"
            width={1200}
            height={650}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Karşılama ve satış alanları için estetik Pagoda çadırlar
          </figcaption>
        </figure>
        <h3 className="font-semibold text-lg mb-2">Pagoda Çadırlar (5×5 / 6×6 m)</h3>
        <p className="mb-6 leading-relaxed text-neutral-800">
          Yüksek tepe noktasıyla estetik bir görünüm sunan pagoda çadırlar; karşılama alanları, satış stantları, VIP bölümler veya restoran tipi oturma düzenleri için idealdir.
          Modüler 5×5 ve 6×6 m ölçüler birleştirilerek geniş alanlar oluşturulur. Yan branda, kapı ve pencere panelleri, yağmur oluğu ve yönlendirme panoları ile fonksiyonel hâle getirilebilir.
        </p>

        {/* Şeffaf */}
        <figure className="mb-6">
          <Image
            src="/img/cadir/seffaf.webp"
            alt="Şeffaf çadır — gece aydınlatmasıyla davet organizasyonu"
            width={1200}
            height={650}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Şeffaf çadırlar davet ve lansmanlarda güçlü bir görsel etki sunar
          </figcaption>
        </figure>
        <h3 className="font-semibold text-lg mb-2">Şeffaf Çadır / Dome Sistemleri</h3>
        <p className="mb-6 leading-relaxed text-neutral-800">
          Şeffaf çadırlar, özellikle gece etkinliklerinde içten verilen ışıkla birlikte büyüleyici bir atmosfer yaratır. Lansmanlar, düğün organizasyonları
          ve özel davetlerde tercih edilir. Kubbe veya şeffaf PVC branda seçenekleri yağmura karşı koruma sağlarken dış mekânla görsel bağlantıyı korur.
        </p>

        {/* Endüstriyel / Fuar */}
        <h3 className="font-semibold text-lg mb-2">Endüstriyel & Depolama Çadırları</h3>
        <p className="mb-6 leading-relaxed text-neutral-800">
          Geniş açıklıklı alüminyum iskelet sistemiyle kurulan endüstriyel çadırlar; geçici depo, üretim alanı veya uzun süreli kullanımlar için uygundur.
          Forklift girişine imkân veren kapı çözümleri ve yan branda kombinasyonlarıyla fonksiyonel alanlar yaratılır.
        </p>

        <h3 className="font-semibold text-lg mb-2">Fuar & Sergi Çadırları</h3>
        <p className="mb-2 leading-relaxed text-neutral-800">
          Fuar alanlarında hızlı kurulum, geniş iç hacim ve stand yerleşimine uygun düz zemin en önemli kriterdir. Sahneva fuar çadırları, iç
          dekorasyonla uyumlu şekilde yönlendirme, giriş takı, zemin kaplama ve LED aydınlatma sistemleriyle birlikte sunulur.
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-800">
          <li>Pagoda 5×5 / 6×6 m modüller, oluklu geçiş bağlantıları</li>
          <li>Şeffaf çadır / dome (gece aydınlatmalarına uygun)</li>
          <li>Endüstriyel depolama çadırı (geniş açıklıklı iskelet)</li>
          <li>Fuar / sergi çadırı (stand yerleşimine elverişli)</li>
        </ul>
      </section>

      {/* TEKNİK ÖZELLİKLER */}
      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span aria-hidden="true" className="mr-2">🔧</span>
            Teknik Özellikler & Ölçüler
          </h2>
          <p className="text-neutral-800 leading-relaxed mb-6">
            Sahneva’nın kullandığı tüm çadır sistemleri, <strong>TS EN</strong> standartlarına uygun alüminyum taşıyıcı profillerden üretilir.
            Alev yürütmeyen, UV dayanımlı branda sistemleri güneş ve yağmura karşı yüksek koruma sağlar.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Teknik Detaylar</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-800">
                <li>Alüminyum iskelet, çelik bağlantı elemanları</li>
                <li>UV dayanımlı ve alev yürütmez branda</li>
                <li>Profesyonel ankraj / ağırlıklandırma</li>
                <li>Yağmur oluğu, kapı–pencere modülleri</li>
                <li>Zemin kaplama: podyum veya kontraplak platform</li>
                <li>Aydınlatma, priz hatları ve kablo gizleme</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Ölçüler & Kombinasyonlar</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-800">
                <li>Pagoda: 5×5 / 6×6 m modüler birleşim</li>
                <li>Şeffaf: proje bazlı ölçülendirme</li>
                <li>Endüstriyel: 10–20 m arası geniş açıklık opsiyonları</li>
                <li>Yan yana/arka arkaya birleştirme ile geniş alanlar</li>
                <li>Giriş tentesi, backstage ve depolama alanı ekleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="container mx-auto px-4 py-10 md:py-12 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span aria-hidden="true" className="mr-2">🖼️</span>
          Galeri
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["1.webp", "2.webp", "3.webp", "4.webp"].map((n, i) => (
            <figure key={i} className="overflow-hidden rounded-lg bg-white shadow">
              <Image
                src={`/img/cadir/${n}`}
                alt={`Çadır kurulumu ${i + 1}`}
                width={800}
                height={600}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span aria-hidden="true" className="mr-2">📍</span>
            Kullanım Alanları
          </h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-neutral-800">
            <li>🎪 Fuar, sergi, lansman ve tanıtım etkinlikleri</li>
            <li>💍 Düğün, kına, nişan ve özel davetler</li>
            <li>🎤 Konser, festival ve backstage çözümleri</li>
            <li>🏛 Belediye organizasyonları ve kurumsal etkinlikler</li>
            <li>🏭 Geçici depolama ve endüstriyel üretim alanları</li>
            <li>🏫 Okul şenlikleri ve mezuniyet törenleri</li>
          </ul>
        </div>
      </section>

      {/* İLGİLİ HİZMETLER — iç link güçlendirme */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
          <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
          <li><Link href="/ses-isik-sistemleri" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Ses & Işık Sistemleri</Link></li>
          <li><Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Sahne Kiralama</Link></li>
        </ul>
      </section>

      {/* CTA — kontrast düzeltilmiş */}
      <section className="bg-[#815be0] py-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Etkinliğiniz İçin Profesyonel Çadır Kurulumu</h3>
        <p className="mb-6 text-neutral-100 max-w-2xl mx-auto">
          Keşif, planlama, kurulum ve söküm dâhil anahtar teslim hizmet için Sahneva ekibiyle iletişime geçin.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            aria-label="İletişime Geç"
            className="px-6 py-3 rounded-lg font-semibold bg-white text-[#815be0] hover:opacity-90"
          >
            İletişime Geç
          </Link>
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C%20Sahneva%20%C3%87ad%C4%B1r%20Kiralama%20hakk%C4%B1nda%20bilgi%20ve%20teklif%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile teklif iste"
            className="px-6 py-3 rounded-lg font-semibold bg-[#25D366] text-white hover:opacity-95"
          >
            WhatsApp Teklif
          </a>
          <a
            href="tel:05453048671"
            aria-label="Telefonla arayın: 0545 304 86 71"
            className="px-6 py-3 rounded-lg font-semibold bg-white/20 text-white border border-white/40 hover:bg-white/25"
          >
            0545 304 86 71’i Ara
          </a>
        </div>
      </section>

      {/* JSON-LD: Service + Breadcrumb */}
      <Script
        id="ld-cadir-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Çadır Kiralama",
            name: "Çadır Kiralama",
            description:
              "Pagoda, şeffaf ve endüstriyel çadır çözümleri. Zemin kaplama, aydınlatma ve lojistikle Türkiye geneli kurulum.",
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
        id="ld-breadcrumb-cadir"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Çadır Kiralama", item: "https://www.sahneva.com/cadir-kiralama" },
            ],
          }),
        }}
      />
    </main>
  );
}