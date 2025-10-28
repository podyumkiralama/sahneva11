// components/CorporateEvents.js
"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ İYİLEŞTİRİLDİ: Daha optimize sizes değeri
const CARD_SIZES =
  "(max-width: 768px) 100vw, " +
  "(max-width: 1024px) calc((100vw - 4rem) / 2), " +
  "calc((1280px - 4rem) / 3)";

const CARDS = [
  {
    slug: "lansman",
    title: "Ürün Lansmanları",
    img: "/img/kurumsal/lansman.webp",
    alt: "Kurumsal ürün lansmanı için profesyonel sahne, LED ekran ve ışık sistemi kurulumu - Sahneva",
    text: "LED ekran kurgu, sahne tasarımı, ışık şovları ve canlı yayın altyapısıyla etkileyici sunumlar.",
  },
  {
    slug: "konferans", 
    title: "Konferans & Kongre",
    img: "/img/kurumsal/konferans.webp",
    alt: "Konferans ve kongre organizasyonları için sahne, ses-ışık sistemleri ve teknik ekipman - Sahneva",
    text: "Çoklu mikrofon, simultane çeviri, sunum yönetimi ve kayıt çözümleriyle kusursuz akış.",
  },
  {
    slug: "bayi-toplantisi",
    title: "Bayi & İç İletişim",
    img: "/img/kurumsal/bayi-toplantisi.webp", 
    alt: "Bayi toplantısı ve kurumsal iletişim etkinlikleri için özel sahne, ekran ve aydınlatma çözümleri - Sahneva",
    text: "Kurumsal kimliğe uygun sahne–dekor, çoklu ekran, video–ses yönetimi ve teknik ekip.",
  },
];

const ADVANTAGES = [
  { icon: "⚡", label: "Aynı Gün Kurulum", desc: "Hızlı ve profesyonel kurulum hizmeti" },
  { icon: "🎛", label: "Güncel Ekipman Parkı", desc: "En son teknoloji ekipmanlar" },
  { icon: "👷", label: "Deneyimli Teknik Ekip", desc: "Uzman profesyonel ekip" },
  { icon: "🛡", label: "Güvenlik & Yedek Plan", desc: "Güvenlik öncelikli hizmet" },
];

export default function CorporateEvents() {
  return (
    <section className="container py-16" aria-labelledby="kurumsal-heading">
      <h2
        id="kurumsal-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-4"
      >
        Kurumsal Organizasyon Çözümleri
      </h2>

      <p
        className="text-center text-neutral-600 max-w-3xl mx-auto mb-10"
        id="kurumsal-desc"
      >
        Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için
        sahne, podyum, LED ekran, ses–ışık ve teknik operasyonu tek çatı altında
        sunuyoruz.
      </p>

      {/* ✅ DÜZELTİLDİ: Kartlar - image optimizasyonu */}
      <div
        className="grid gap-6 md:grid-cols-3"
        role="list"
        aria-describedby="kurumsal-desc"
      >
        {CARDS.map((card) => (
          <article
            key={card.slug}
            className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden focus-within:ring-2 focus-within:ring-primary/40"
            role="listitem"
          >
            {/* ✅ DÜZELTİLDİ: Image optimize edildi */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={card.img}
                alt={card.alt}
                fill
                sizes={CARD_SIZES}
                className="object-cover"
                loading="lazy"
                decoding="async"
                // ✅ fetchPriority KALDIRILDI
                placeholder="blur"
                blurDataURL="/img/placeholder-blur.webp"
                quality={80}
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{card.text}</p>
              {/* ✅ İYİLEŞTİRİLDİ: Link SEO optimizasyonu */}
              <Link
                href="/iletisim"
                prefetch={false}
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                aria-label={`${card.title} için teklif al - Sahneva kurumsal çözümler`}
                title={`${card.title} hizmeti için ücretsiz teklif alın`}
              >
                Teklif Al
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ İYİLEŞTİRİLDİ: Avantajlar - semantic iyileştirme */}
      <div
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Kurumsal Hizmet Avantajları"
        role="list"
      >
        {ADVANTAGES.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border bg-white p-4"
            role="listitem"
            title={item.desc}
          >
            <span className="text-2xl" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ✅ İYİLEŞTİRİLDİ: CTA bandı - SEO optimizasyonu */}
      <div className="mt-10 rounded-2xl bg-primary/5 border p-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Kurumsal Etkinlikleriniz İçin Anahtar Teslim Çözüm
        </h3>
        <p className="text-neutral-700 mb-4">
          Profesyonel sahne, podyum, LED ekran, ses–ışık ve yayın çözümleri için 
          uzman ekibimizle hemen iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="tel:+905453048671"
            className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Kurumsal etkinlik için telefonla görüş – +90 545 304 86 71"
            title="Telefonla ücretsiz danışmanlık alın"
          >
            📞 Telefonla Görüş
          </a>
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+kurumsal+etkinlik+organizasyonu+için+profesyonel+çözüm+ve+teklif+almak+istiyorum."
            className="btn btn-accent focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="WhatsApp üzerinden kurumsal etkinlik teklifi iste"
            title="WhatsApp'tan kurumsal çözüm teklifi alın"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp'tan Yaz
          </a>
        </div>
        
        {/* ✅ YENİ: Ek bilgi */}
        <p className="text-xs text-neutral-500 mt-4">
          <strong>Hızlı Yanıt:</strong> Müşteri temsilcilerimiz 7/24 hizmetinizde
        </p>
      </div>
    </section>
  );
}
