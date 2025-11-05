// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import heroImg from "@/public/img/hero-bg.webp";

// Statik bileşenler
import CorporateEvents from "@/components/CorporateEvents";
import Faq from "@/components/Faq";
import ReviewBanner from "@/components/ReviewBanner";

// Dinamik bileşenler
const ServicesTabsLazy = dynamic(() => import("@/components/ServicesTabs"), {
  loading: () => <SectionSkeleton label="Hizmetler yükleniyor" />,
});
const ProjectsGalleryLazy = dynamic(
  () => import("@/components/ProjectsGallery"),
  {
    loading: () => <SectionSkeleton label="Projeler yükleniyor" />,
  }
);

export const revalidate = 3600;

// Erişilebilir skeleton
function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div className="container py-10" role="status" aria-live="polite" aria-label={label}>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse motion-reduce:animate-none" />
        <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse motion-reduce:animate-none" />
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

// JSON-LD (Service)
function StructuredData() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    description:
      "Türkiye genelinde sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama; kurulum ve teknik operasyon.",
    url: "https://www.sahneva.com",
    areaServed: { "@type": "Country", name: "TR" },
    provider: { "@type": "Organization", name: "Sahneva" },
    serviceType: [
      "Sahne Kiralama",
      "Podyum Kiralama",
      "LED Ekran Kiralama",
      "Ses Sistemi Kiralama",
      "Işık Sistemi Kiralama",
      "Etkinlik Prodüksiyon",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // SSR güvenli JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* HERO — role=“banner” KULLANMIYORUZ */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        {/* Arkaplan */}
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Profesyonel sahne kurulumu, LED ekranlar ve ses-ışık sistemleri - Sahneva"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
            style={{
              transform: "scale(1.02)",
              filter: "brightness(0.7) contrast(1.1) saturate(1.1)",
            }}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse motion-reduce:animate-none"
          style={{ animationDuration: "8s" }}
          aria-hidden="true"
        />

        {/* İçerik */}
        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
                <span
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                <span className="text-white/90 text-sm font-medium">
                  Türkiye Geneli Profesyonel Hizmet
                </span>
              </div>

              <h1
                id="hero-title"
                className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
              >
                <span className="block">Profesyonel</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-[length:300%_100%] animate-[gradient_8s_ease_infinite] motion-reduce:animate-none">
                  Sahne Sistemleri
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed font-medium max-w-4xl mx-auto">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-bold">
                  Sahne Kiralama
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text font-bold">
                  LED Ekran
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold">
                  Ses-Işık Sistemleri
                </span>
              </p>

              <p className="text-white/80 text-base md:text-lg mb-8 max-w-3xl mx-auto">
                500+ başarılı proje, %98 müşteri memnuniyeti ve Türkiye geneli
                hızlı kurulum ile yanınızdayız
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-12">
              <a
                href="tel:+905453048671"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base px-6 py-3 min-h-11 min-w-11 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                title="Hemen ara"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-lg" aria-hidden="true">
                    📞
                  </span>
                  Hemen Ara
                </span>
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Sahne+kiralama+ve+LED+ekran+fiyatlar%C4%B1+hakk%C4%B1nda+detayl%C4%B1+teklif+almak+istiyorum.&utm_source=homepage&utm_medium=hero_cta&utm_campaign=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white font-bold text-base px-6 py-3 min-h-11 min-w-11 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                title="WhatsApp'tan teklif al"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-lg" aria-hidden="true">
                    💬
                  </span>
                  WhatsApp Teklif
                </span>
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* 3 özellik kartı — UL/LI */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              {[
                {
                  icon: "⭐",
                  title: "4.9/5 Puan",
                  description: "500+ Mutlu Müşteri",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  icon: "⚡",
                  title: "Aynı Gün",
                  description: "Hızlı Kurulum",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  icon: "👑",
                  title: "Premium",
                  description: "Kalite Garantisi",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="group bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15"
                >
                  <div
                    className={`text-2xl mb-2 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div className="text-white font-bold text-base mb-1">
                    {item.title}
                  </div>
                  <div className="text-white/70 text-xs">{item.description}</div>
                </li>
              ))}
            </ul>

            {/* Ücretsiz danışmanlık bloğu */}
            <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-xl" aria-hidden="true">
                    🎯
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                    Ücretsiz Profesyonel Danışmanlık
                  </h2>
                  <p className="text-white/90 text-base leading-relaxed">
                    Etkinliğiniz için <strong>en uygun sahne çözümleri</strong>, LED ekran seçenekleri ve ses-ışık sistemlerini ücretsiz
                    teknik danışmanlık ile planlayalım.{" "}
                    <strong className="text-yellow-300">2 saat içinde detaylı teklif</strong> sunuyoruz.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#teklif-al"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-5 py-2 min-h-11 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                    title="Hemen teklif al"
                  >
                    Hemen Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="animate-bounce motion-reduce:animate-none">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      <main id="main" className="relative">
        {/* CLS guard */}
        <div aria-hidden="true" className="h-12 lg:h-16" />

        {/* Banner (client) */}
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        {/* Hizmetler */}
        <section className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80" aria-labelledby="hizmetler-title">
          <div
            className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"
            aria-hidden="true"
          />
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 id="hizmetler-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Profesyonel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Hizmetlerimiz
                </span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Türkiye geneli sahne, podyum, LED ekran kiralama ve ses-ışık sistemleri kurulumu
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
              <ServicesTabsLazy />
            </Suspense>
          </div>
        </section>

        {/* Projeler */}
        <section className="py-12 bg-gradient-to-br from-neutral-900 to-blue-900/95" aria-labelledby="projeler-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="projeler-title" className="text-3xl md:text-4xl font-black text-white mb-4">
                Başarılı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Projelerimiz
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
              </p>
            </div>

            <Suspense
              fallback={
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="bg-neutral-800 rounded-2xl animate-pulse motion-reduce:animate-none h-80" aria-hidden="true" />
                  ))}
                </ul>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Kurumsal çözümler */}
        <section className="py-12 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="kurumsal-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Kurumsal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Organizasyon Çözümlerimiz</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için sahne, podyum, LED ekran, ses–ışık ve teknik operasyonu tek çatı altında sunuyoruz.
              </p>
            </div>
            <CorporateEvents />
          </div>
        </section>

        {/* SSS */}
        <section className="py-12 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Sahne, podyum, LED ekran kiralama ve kurulum hizmetlerimiz hakkında en çok merak edilen sorular ve cevapları
              </p>
            </div>
            <Faq />
          </div>
        </section>

        {/* Son CTA — geniş + daha yüksek */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-14 lg:p-16 text-center text-white max-w-6xl mx-auto min-h-[320px] flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Etkinliğinizi Profesyonellere Emanet Edin
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
                Kurumsal imajınızı güçlendiren, akıcı bir etkinlik deneyimi için Sahneva yanınızda.
                Keşif, teknik tasarım ve akış planını <strong>48 saat</strong> içinde hazırlayalım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <a
                  href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Etkinlik+teklifi+almak+istiyorum.&utm_source=homepage&utm_medium=final_cta&utm_campaign=whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 min-h-12 rounded-xl bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300"
                  title="WhatsApp'tan teklif al"
                >
                  💬 WhatsApp'tan Teklif Al
                </a>
                <a
                  href="tel:+905453048671"
                  className="inline-flex items-center justify-center font-bold px-8 py-4 min-h-12 rounded-xl border-2 border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                  title="Hemen ara"
                >
                  📞 Hemen Ara
                </a>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20 max-w-md w-full">
                <p className="text-sm font-medium">
                  <span className="text-green-300">🟢 Acil organizasyon:</span> Aynı gün kurulum için
                  <strong> +90 545 304 86 71</strong>'i arayın.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
