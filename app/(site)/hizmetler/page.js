// app/hizmetler/page.js
import Image from "next/image";
import Link from "next/link";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "Podyum, LED ekran, ses-ışık, sahne, çadır ve masa-sandalye kiralama hizmetleri. Türkiye genelinde hızlı kurulum ve uzman teknik ekip.",
  alternates: { canonical: "https://sahneva.com/hizmetler" },
  openGraph: {
    title: "Hizmetlerimiz",
    description:
      "Podyum, LED ekran, ses-ışık, sahne, çadır ve masa-sandalye kiralama hizmetleri.",
    url: "https://sahneva.com/hizmetler",
    type: "website",
    images: ["/img/og.jpg"],
  },
  robots: { index: true, follow: true },
};

// İçerik hızlı yenilensin
export const revalidate = 60;

export default function ServicesPage() {
  return (
    <>
      {/* HERO (diğer sayfalarla tutarlı) */}
      <section className="container pt-6 md:pt-8">
        <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/img/hizmetler-ust.webp"
            alt="Sahneva Hizmetler"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
              Hizmetlerimiz
            </h1>
            <p className="mt-3 max-w-3xl text-sm md:text-lg text-white/90">
              Podyum, LED ekran, ses–ışık, sahne, çadır ve masa–sandalye
              çözümlerini tek çatı altında sunuyoruz. Türkiye genelinde hızlı
              lojistik ve uzman teknik kadroyla yanınızdayız.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/iletisim"
                className="rounded-lg bg-primary px-5 py-2 font-semibold text-white hover:opacity-95"
                aria-label="Hemen teklif al"
              >
                Hemen Teklif Al
              </Link>
              <a
                href="https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:opacity-90"
                aria-label="WhatsApp ile hızlı iletişim"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TANITIM METNİ */}
      <section className="container max-w-5xl mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Neden Profesyonel Organizasyon Hizmetleri?
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Bir etkinlik yalnızca sahneden ibaret değildir. Başarılı bir organizasyon; sahne, ses, ışık, ulaşım, konaklama, dekorasyon, catering ve teknik destek gibi birçok detayı titizlikle yönetmeyi gerektirir.
            <strong> Sahneva</strong> olarak biz, bu sürecin her aşamasını profesyonel bir bakış açısıyla planlar ve uygularız.
            Amacımız, organizasyonlarınızda kusursuz bir atmosfer oluşturarak hem sizin hem de misafirlerinizin beklentilerini eksiksiz karşılamaktır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-neutral-700 leading-relaxed">
              <li>
                <strong>Sahne & Podyum Kurulumu:</strong> Etkinliklere özel sahne çözümleriyle profesyonel atmosfer yaratıyoruz.
              </li>
              <li>
                <strong>LED Ekran & Görsel Sistemler:</strong> Her türlü organizasyonda yüksek çözünürlüklü ekranlar kuruyoruz.
              </li>
              <li>
                <strong>Ses & Işık Sistemleri:</strong> Etkileyici ışık tasarımları ve kaliteli ses sistemleri sağlıyoruz.
              </li>
              <li>
                <strong>Uçak Bileti & Konaklama:</strong> Misafirlerinizin ulaşım ve konaklamasını sorunsuz organize ediyoruz.
              </li>
              <li>
                <strong>Masa & Sandalye Kiralama:</strong> Estetik ve konforlu oturma düzenleri kuruyoruz.
              </li>
              <li>
                <strong>Ahşap Dekorasyon & Özel Tasarımlar:</strong> Mekânı konseptinize uygun şekilde tasarlıyoruz.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Ek Hizmetlerimiz</h3>
            <ul className="space-y-2 text-neutral-700 leading-relaxed">
              <li>
                <strong>Catering & Misafir Hizmetleri:</strong> Yemek, rezervasyon ve VIP servis dahil her detayı üstleniyoruz.
              </li>
              <li>
                <strong>Drone & Fotoğraf Hizmetleri:</strong> Profesyonel çekimlerle etkinlikleri ölümsüzleştiriyoruz.
              </li>
              <li>
                <strong>Ring Araçları & VIP Transfer:</strong> Katılımcılarınızın ulaşımını güvenli ve konforlu şekilde sağlıyoruz.
              </li>
            </ul>
          </div>
        </div>

        {/* Hızlı iç link kartları (SEO + UX) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-primary text-center">Hızlı Erişim</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["/sahne-kiralama", "Sahne Kiralama", "Truss, podyum, LED, ses & ışık"],
              ["/podyum-kiralama", "Podyum Kiralama", "1×1 ve 2×1 modüler paneller"],
              ["/led-ekran-kiralama", "LED Ekran Kiralama", "P2–P6, iç/dış mekân"],
              ["/ses-isik-sistemleri", "Ses & Işık", "Line array, robot ışık, DMX"],
              ["/cadir-kiralama", "Çadır Kiralama", "Pagoda, şeffaf, endüstriyel"],
              ["/masa-sandalye-kiralama", "Masa & Sandalye", "Banket, konferans, bistro"],
            ].map(([href, title, desc]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border p-5 hover:shadow-sm transition"
                aria-label={`${title} sayfasına git`}
              >
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-sm text-neutral-600">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEKME / HİZMET LİSTESİ */}
      <section className="container py-10 md:py-12">
        <ServicesTabs />
      </section>

      {/* ALT CTA (diğer sayfalarla tutarlı) */}
      <section className="container pb-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 md:flex-row md:p-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              Etkinliğiniz için doğru ekipman ve kurulum
            </h3>
            <p className="text-neutral-800/80">
              Ücretsiz keşif, hızlı kurulum, sözleşmeli ve e-faturalı süreç.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/sss"
              className="rounded-lg border px-4 py-2 font-semibold hover:bg-neutral-50"
              aria-label="Sıkça Sorulan Sorular sayfasına git"
            >
              SSS
            </Link>
            <Link
              href="/iletisim"
              className="rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:opacity-95"
              aria-label="İletişim sayfasına git"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}