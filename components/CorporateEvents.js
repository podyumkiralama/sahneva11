// components/CorporateEvents.js
"use client";

import Image from "next/image";
import Link from "next/link";

// Grid: <768px tek sütun; >=768px 3 sütun (md:grid-cols-3)
// Container iç boşluk ~ 2rem, sütunlar arası gap-6 = 1.5rem (satırda 2 gap => 3rem)
const CARD_SIZES =
  "(max-width: 768px) calc(100vw - 2rem), " +                // tek sütun
  "(max-width: 1280px) calc((100vw - 2rem - 3rem) / 3), " +  // 3 sütun
  "400px";                                                   // ≥1280px: ~ (1280px - 2rem - 3rem)/3 ≈ 400px

const CARDS = [
  {
    slug: "lansman",
    title: "Ürün Lansmanları",
    img: "/img/kurumsal/lansman.webp",
    alt: "Kurumsal lansman etkinliği için sahne ve ekran kurulumu",
    text:
      "LED ekran kurgu, sahne tasarımı, ışık şovları ve canlı yayın altyapısıyla etkileyici sunumlar.",
  },
  {
    slug: "konferans",
    title: "Konferans & Kongre",
    img: "/img/kurumsal/konferans.webp",
    alt: "Konferans ve kongre için sahne ve ses-ışık sistemleri",
    text:
      "Çoklu mikrofon, simultane çeviri, sunum yönetimi ve kayıt çözümleriyle kusursuz akış.",
  },
  {
    slug: "bayi-toplantisi",
    title: "Bayi & İç İletişim",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Bayi toplantısı için sahne, ekran ve ışık kurulumu",
    text:
      "Kurumsal kimliğe uygun sahne–dekor, çoklu ekran, video–ses yönetimi ve teknik ekip.",
  },
];

const ADVANTAGES = [
  { icon: "⚡", label: "Aynı Gün Kurulum" },
  { icon: "🎛", label: "Güncel Ekipman Parkı" },
  { icon: "👷", label: "Deneyimli Teknik Ekip" },
  { icon: "🛡", label: "Güvenlik & Yedek Plan" },
];

export default function CorporateEvents() {
  return (
    <section className="container py-16" aria-labelledby="kurumsal-heading">
      <h2
        id="kurumsal-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-4"
      >
        Kurumsal Organizasyonlar
      </h2>

      <p
        className="text-center text-neutral-600 max-w-3xl mx-auto mb-10"
        id="kurumsal-desc"
      >
        Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için
        sahne, podyum, LED ekran, ses–ışık ve teknik operasyonu tek çatı altında
        sunuyoruz.
      </p>

      {/* Kartlar */}
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
            {/* Sabit oran (CLS azaltır) */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={card.img}
                alt={card.alt}
                fill
                sizes={CARD_SIZES}
                className="object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{card.text}</p>
              <Link
                href="/iletisim"
                prefetch={false}
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                aria-label={`${card.title} için teklif al`}
              >
                Teklif Al
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Avantajlar şeridi */}
      <div
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Avantajlar"
      >
        {ADVANTAGES.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border bg-white p-4"
          >
            <span className="text-2xl" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* CTA bandı */}
      <div className="mt-10 rounded-2xl bg-primary/5 border p-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Kurumsal etkinliğinizi anahtar teslim planlayalım
        </h3>
        <p className="text-neutral-700 mb-4">
          Sahne, podyum, LED ekran, ses–ışık ve yayın çözümleri için hemen
          iletişime geçin.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="tel:+905453048671"
            className="btn btn-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Telefonla görüş – +90 545 304 86 71"
          >
            Telefonla Görüş
          </a>
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+kurumsal+etkinlik+i%C3%A7in+teklif+almak+istiyorum."
            className="btn btn-accent focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="WhatsApp üzerinden teklif iste"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
