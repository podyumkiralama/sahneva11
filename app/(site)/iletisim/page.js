// app/(site)/iletisim/page.jsx
import React from "react";

export const metadata = {
  title: "İletişim | Sahneva",
  description:
    "Sahne, podyum, LED ekran, ses ve ışık sistemleri için bize hemen ulaşın. Hızlı teklif, modern iletişim formu ve konum bilgileri burada.",
  alternates: { canonical: "https://www.sahneva.com/iletisim" },
};

const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, etkinlik hakkında bilgi almak istiyorum."
)}`;

// Google Business (profil ve yorum) — Footer'da da kullandık
const GMB_PROFILE_URL = "https://g.page/r/CZhkMzkNOdgnEBI";
const GMB_REVIEW_URL  = "https://g.page/r/CZhkMzkNOdgnEBI/review";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">İletişim Kurun</h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Profesyonel ekipman kiralama ve etkinlik prodüksiyon çözümleri için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* İLETİŞİM BLOKLARI */}
      <section className="container grid gap-8 py-16 md:grid-cols-3">
        <ContactCard
          icon="📞"
          title="Telefon"
          info="+90 545 304 86 71"
          href={`tel:${PHONE}`}
          color="bg-indigo-600 hover:bg-indigo-700"
        />
        <ContactCard
          icon="💬"
          title="WhatsApp"
          info="Hızlı mesaj gönderin"
          href={WHATSAPP_URL}
          color="bg-green-600 hover:bg-green-700"
        />
        <ContactCard
          icon="✉️"
          title="E-posta"
          info={MAIL}
          href={`mailto:${MAIL}`}
          color="bg-neutral-800 hover:bg-black"
        />
      </section>

      {/* HARİTA + Hızlı Aksiyonlar + FORM */}
      <section className="container grid gap-10 pb-20 md:grid-cols-2">
        {/* Harita kutusu */}
        <div className="rounded-2xl overflow-hidden border bg-white shadow-md">
          <iframe
            title="Sahneva Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.7561988118778!2d28.97663777518891!3d41.096173214009376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7eef124ac6d%3A0x27d8390d39336498!2sSahneva%20Organizasyon!5e0!3m2!1str!2str!4v1760186819441!5m2!1str!2str"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Harita alt aksiyonlar */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 border-t">
            <a
              href={GMB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2"
              aria-label="Google Haritalar’da Sahneva profilini aç"
            >
              📍 Haritalar’da Aç
            </a>
            <a
              href={GMB_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2"
              aria-label="Google üzerinde Sahneva için yorum yaz"
            >
              ⭐ Google’da Yorum Yaz
            </a>
          </div>
        </div>

        {/* Basit HTML form (redirect ile) */}
        <form
          action="https://formspree.io/f/xanppven"
          method="POST"
          acceptCharset="UTF-8"
          className="rounded-2xl border bg-white shadow-md p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Hızlı Teklif Formu</h2>
          <p className="text-neutral-600 text-sm mb-4">
            Etkinlik bilgilerinizi bırakın, aynı gün dönüş yapalım.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Etkinlik türü, tarih, şehir, kişi sayısı..."
            className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* Formspree yardımcı alanları */}
          <input type="hidden" name="_subject" value="Sahneva | Yeni Hızlı Teklif" />
          <input type="hidden" name="_redirect" value="https://sahneva.com/tesekkurler" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Gönder
          </button>

          <p className="text-xs text-neutral-500 mt-2">
            Sorun yaşarsanız
            <a href={`mailto:${MAIL}`} className="underline ml-1">
              {MAIL}
            </a>
            adresine e-posta atabilirsiniz.
          </p>
        </form>
      </section>

      {/* CTA BAR (mobil) */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t py-3 flex justify-around md:hidden z-50">
        <a href={`tel:${PHONE}`} className="flex flex-col items-center text-indigo-600 font-semibold">
          📞 <span className="text-sm">Ara</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600 font-semibold"
        >
          💬 <span className="text-sm">WhatsApp</span>
        </a>
        <a
          href={GMB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-indigo-600 font-semibold"
        >
          📍 <span className="text-sm">Konum</span>
        </a>
      </div>
    </>
  );
}

function ContactCard({ icon, title, info, href, color }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-6 text-center flex flex-col items-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-neutral-800">{title}</h3>
      <p className="text-neutral-600 mb-4">{info}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center ${color} text-white font-semibold px-5 py-2 rounded-full shadow transition-all`}
      >
        İletişime Geç
      </a>
    </div>
  );
}