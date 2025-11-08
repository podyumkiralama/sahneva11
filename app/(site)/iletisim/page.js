// app/(site)/iletisim/page.jsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "İletişim | Sahneva - Profesyonel Etkinlik Çözümleri",
  description:
    "Sahne kiralama, LED ekran, ses-ışık sistemleri için hemen ulaşın. Türkiye geneli hızlı kurulum ve profesyonel danışmanlık.",
  alternates: { canonical: "https://www.sahneva.com/iletisim" },
  openGraph: {
    title: "İletişim | Sahneva - Profesyonel Etkinlik Çözümleri",
    description:
      "Sahne, LED ekran, ses-ışık sistemleri için hemen teklif alın. Türkiye geneli hızlı kurulum ve profesyonel danışmanlık.",
    url: "https://www.sahneva.com/iletisim",
    images: [
      {
        url: "/img/og-iletisim.jpg",
        width: 1200,
        height: 630,
        alt: "Sahneva İletişim - Profesyonel Etkinlik Çözümleri",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Sahneva web sitesinden ulaşıyorum. Etkinlik için teklif almak istiyorum."
)}`;

const GMB_PROFILE_URL = "https://g.page/r/CZhkMzkNOdgnEBI";
const GMB_REVIEW_URL = "https://g.page/r/CZhkMzkNOdgnEBI/review";

/* ──────────────────────────────
 ✅ STRUCTURED DATA
──────────────────────────────── */
function ContactStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Sahneva İletişim",
    description:
      "Profesyonel sahne kiralama, LED ekran, ses-ışık sistemleri iletişim bilgileri",
    url: "https://sahneva.com/iletisim",
    mainEntity: {
      "@type": "Organization",
      name: "Sahneva",
      telephone: "+905453048671",
      email: "info@sahneva.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
      },
      sameAs: [
        "https://www.instagram.com/sahneva/",
        "https://www.facebook.com/sahneva/",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <ContactStructuredData />

      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600
        focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* ✅ HERO */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br
        from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        {/* ... HERO AREA — içerik aynı */}
      </section>

      <main id="main" className="relative">
        {/* ✅ KARTLAR — içerik aynı */}
        
        {/* ✅ HARİTA + FORM */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* ✅ HARİTA */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                <iframe
                  title="Sahneva Konumu - Profesyonel Etkinlik Ekipmanları"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.7561988118778!2d28.97663777518891!3d41.09737131400938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7eef124ac6d%3A0x27d8390d39336498!2sSahneva%20Organizasyon!5e0!3m2!1str!2str!4v1691234567890!5m2!1str!2str"
                  width="100%"
                  height="300"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  allow="fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-[320px]"
                />
              </div>

              {/* ✅ TEKLİF FORMU — içerik aynı */}
            </div>
          </div>
        </section>

        {/* ✅ ACİL DESTEK — içerik aynı */}
      </main>

      {/* ✅ MOBILE CTA — içerik aynı */}
    </div>
  );
}

/* COMPONENT */
function ContactCard({ icon, title, info, description, href, color, buttonText }) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100
      hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center"
    >
      <div className={`text-5xl mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
        {icon}
      </div>
      <h3 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <div className="text-2xl font-bold text-neutral-800 mb-2">{info}</div>

      <p className="text-neutral-600 mb-6 leading-relaxed">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={`inline-flex items-center justify-center bg-gradient-to-r ${color} hover:shadow-xl
        text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg`}
      >
        {buttonText}
      </a>
    </div>
  );
}