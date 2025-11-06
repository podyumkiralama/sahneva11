// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import heroImg from "@/public/img/hero-bg.webp";

// Statik bileşenler
import CorporateEvents from "@/components/CorporateEvents";
import Faq from "@/components/Faq";
import ReviewBanner from "@/components/ReviewBanner";

// Dinamik bileşenler (erişilebilir skeleton ile)
const ServicesTabsLazy = dynamic(() => import("@/components/ServicesTabs"), {
  loading: () => <SectionSkeleton label="Hizmetler yükleniyor" />,
});

const ProjectsGalleryLazy = dynamic(() => import("@/components/ProjectsGallery"), {
  loading: () => (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="status"
      aria-live="polite"
      aria-label="Projeler yükleniyor"
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-80 rounded-2xl bg-neutral-200 animate-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">Projeler yükleniyor</span>
    </div>
  ),
});

// ISR
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

// JSON-LD
function StructuredData() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    description:
      "Türkiye genelinde sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama; kurulum ve teknik operasyon.",
    url: "https://sahneva.com",
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
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData />

      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        {/* Görsel */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={heroImg}
            alt="Profesyonel sahne, LED ekran ve ses-ışık sistemleri – Sahneva"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
            style={{ transform: "scale(1.02)", filter: "brightness(0.7) contrast(1.1) saturate(1.1)" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse motion-reduce:animate-none"
          style={{ animationDuration: "8s" }}
          aria-hidden="true"
        />

        {/* İçerik */}
        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              <span className="text-white/90 text-sm font-medium">Türkiye Geneli Profesyonel Hizmet</span>
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
              500+ başarılı proje, %98 müşteri memnuniyeti ve Türkiye geneli hızlı kurulum ile yanınızdayız
            </p>

            {/* CTA’lar (aria-label yok; görünür metin erişilebilir ad) */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-12">
              <a
                href="tel:+905453048671"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[180px] text-center border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-lg" aria-hidden="true">📞</span>
                  Hemen Ara
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Sahne+kiralama+ve+LED+ekran+fiyatlar%C4%B1+hakk%C4%B1nda+detayl%C4%B1+teklif+almak+istiyorum.&utm_source=homepage&utm_medium=hero_cta&utm_campaign=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[180px] text-center border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-lg" aria-hidden="true">💬</span>
                  WhatsApp Teklif
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </a>
            </div>

            {/* Üst bilgi kutuları – ul/li semantik */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 list-none p-0 m-0" aria-label="Öne çıkan özellikler">
              {[
                { icon: "⭐", title: "4.9/5 Puan", description: "500+ Mutlu Müşteri", color: "from-yellow-400 to-orange-400" },
                { icon: "⚡", title: "Aynı Gün", description: "Hızlı Kurulum", color: "from-blue-400 to-cyan-400" },
                { icon: "👑", title: "Premium", description: "Kalite Garantisi", color: "from-purple-400 to-pink-400" },
              ].map((item, index) => (
                <li key={index} className="m-0 p-0">
                  <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15">
                    <div className={`text-2xl mb-2 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className="text-white font-bold text-base mb-1">{item.title}</div>
                    <div className="text-white/70 text-xs">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Danışmanlık kutusu */}
            <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-xl" aria-hidden="true">🎯</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-white text-xl md:text-2xl font-bold mb-2">Ücretsiz Profesyonel Danışmanlık</h2>
                  <p className="text-white/90 text-base leading-relaxed">
                    Etkinliğiniz için <strong>en uygun sahne çözümleri</strong>, LED ekran seçenekleri ve ses-ışık sistemlerini ücretsiz teknik danışmanlık ile planlayalım.{" "}
                    <strong className="text-yellow-300">2 saat içinde detaylı teklif</strong> sunuyoruz.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#teklif-al"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
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

      {/* Ana içerik LANDMARK */}
      <main id="main" className="relative">
        {/* CLS guard */}
        <div aria-hidden="true" className="h-12 lg:h-16" />

        {/* ReviewBanner (client) */}
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
                Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
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
                Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projelerimiz</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
              </p>
            </div>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="status" aria-live="polite" aria-label="Projeler yükleniyor">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-neutral-800 rounded-2xl h-80 animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                  ))}
                  <span className="sr-only">Projeler yükleniyor</span>
                </div>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Kurumsal */}
        <section className="py-12 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="kurumsal-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Organizasyon Çözümlerimiz</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için sahne, podyum, LED ekran, ses–ışık ve teknik operasyonu tek çatı altında sunuyoruz.
              </p>
            </div>
            <CorporateEvents />
          </div>
        </section>

        {/* Neden Sahneva? */}
        <section className="py-12 bg-gradient-to-br from-blue-50/80 to-purple-50/60" aria-labelledby="neden-tercih-heading">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="neden-tercih-heading" className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                Neden <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sahneva</span>'yı Tercih Etmelisiniz?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                10 yılı aşkın deneyimimiz, uzman ekibimiz ve kaliteli ekipmanlarımızla fark yaratıyoruz
              </p>
            </div>

            {/* ul/li – role eklenmedi (doğal semantik) */}
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {[
                { icon: "⭐", title: "Yüksek Müşteri Memnuniyeti", desc: "%98'in üzerinde müşteri memnuniyeti. Referanslar ve Google yorumları güvencemiz.", stat: "%98 Memnuniyet" },
                { icon: "⚡", title: "Hızlı Kurulum ve Teslimat", desc: "Aynı gün profesyonel sahne, LED ekran ve ses-ışık kurulumları.", stat: "2–6 Saat" },
                { icon: "🖥️", title: "Premium LED Ekran Teknolojisi", desc: "P2–P6 pixel pitch ile yüksek çözünürlüklü indoor/outdoor LED ekran.", stat: "P2–P6" },
                { icon: "👷", title: "Uzman Teknik Ekip", desc: "10+ yıl deneyimli sahne, ses, ışık ve LED uzmanları.", stat: "15+ Uzman" },
                { icon: "💰", title: "Rekabetçi Fiyat Garantisi", desc: "Kaliteli hizmeti uygun fiyatla, bütçenize uygun çözümler.", stat: "%30 Tasarruf" },
                { icon: "🏙️", title: "Türkiye Geneli Hizmet", desc: "İstanbul, Ankara, İzmir başta 81 ilde profesyonel hizmet.", stat: "81 İl" },
              ].map(({ icon, title, desc, stat }, i) => (
                <li key={i} className="m-0 p-0">
                  <article className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-neutral-100 hover:border-blue-200/70 hover:scale-105">
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {stat}
                    </div>
                    <div className="text-3xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" aria-hidden="true">
                      {icon}
                    </div>
                    <h3 className="font-black text-lg mb-3 text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed text-sm">{desc}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEO metinleri + WhatsApp CTA */}
        <section className="py-12 bg-white" aria-labelledby="seo-title">
          <div className="container">
            <h2 id="seo-title" className="text-3xl md:text-4xl font-black text-center mb-12 text-neutral-900">
              Türkiye'nin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">1 Numaralı</span> Etkinlik Teknoloji Partneri
            </h2>

            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
              <article className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="font-black text-xl mb-4 text-neutral-900 flex items-center gap-3">
                  <span className="bg-blue-500 text-white p-2 rounded-lg" aria-hidden="true">🚀</span>
                  Uçtan Uca Teknik Hizmet ve Profesyonel Çözümler
                </h3>
                <div className="prose max-w-none text-neutral-700">
                  <p className="text-base leading-relaxed">
                    <strong>Sahneva</strong> olarak Türkiye genelinde{" "}
                    <a href="/sahne-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4">sahne kiralama</a>,{" "}
                    <a href="/podyum-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4">podyum kurulumu</a>,{" "}
                    <a href="/led-ekran-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4">LED ekran kiralama</a> ve{" "}
                    <a href="/ses-isik-sistemleri" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4">ses ışık sistemi kurulumu</a>{" "}
                    hizmetlerinde komple çözümler sunuyoruz.
                  </p>
                  <ul className="mt-4 space-y-2 text-neutral-700">
                    {[
                      "IP65 dış mekân LED paneller, 4500+ nit parlaklık",
                      "Profesyonel line-array ses sistemleri, dijital mikserler",
                      "Modüler podyum ve sahne platformları, truss sistemleri",
                      "DMX kontrollü ışık sistemleri ve ambiyans aydınlatma",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h3 className="font-black text-xl mb-4 text-neutral-900 flex items-center gap-3">
                  <span className="bg-purple-500 text-white p-2 rounded-lg" aria-hidden="true">⚡</span>
                  Hızlı Kurulum, Şeffaf Fiyatlandırma ve Güvenilir Hizmet
                </h3>
                <div className="prose max-w-none text-neutral-700">
                  <p className="text-base leading-relaxed">
                    İstanbul merkezli ekibimizle <strong>Türkiye'nin 81 ilinde</strong> hizmet veriyoruz. Aynı gün kurulum, yedekli ekipman stoğu ve 7/24 teknik destek ile riskleri minimize ediyoruz.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200 shadow-md">
                    <p className="font-bold text-purple-900 text-base mb-2">Hızlı Teklif İsteği:</p>
                    <a
                      href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Sahne+kiralama+ve+LED+ekran+fiyatlar%C4%B1+hakk%C4%B1nda+detayl%C4%B1+teklif+almak+istiyorum.&utm_source=homepage&utm_medium=seo_section&utm_campaign=whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[60px] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-200"
                    >
                      <span className="text-xl" aria-hidden="true">💬</span>
                      <span className="text-sm font-bold">WhatsApp'tan Yaz</span>
                    </a>
                    <p className="text-xs text-neutral-600 mt-2">
                      <strong>2 saat içinde</strong> detaylı teklif ve profesyonel danışmanlık
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Büyük ölçekli etkinlik metni */}
        <section className="py-12 bg-gradient-to-br from-neutral-50 to-blue-100/50">
          <div className="container max-w-6xl">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-neutral-900">
                Büyük Ölçekli Etkinliklerde{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Neden Sahneva?
                </span>
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                  Konser, fuar, kongre, lansman ve protokol etkinliklerinde sadece güçlü ekipman değil;{" "}
                  <strong className="text-blue-600">kusursuz operasyon</strong> ve{" "}
                  <strong className="text-blue-600">güvenli rigging</strong> esastır. Sahneva;{" "}
                  <a href="/sahne-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">sahne ve podyum tasarımı</a>,
                  {" "} <a href="/led-ekran-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">P2–P6 LED ekran</a>,
                  {" "} <a href="/ses-isik-sistemleri" className="text-blue-600 hover:text-blue-700 font-semibold underline">ses-ışık optimizasyonu</a>{" "}
                  ve truss/scaffolding üst yapıları tek bir teknik omurgada birleştirir.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-black text-neutral-900 mb-4 flex items-center gap-3">
                      <span className="bg-blue-500 text-white p-2 rounded-lg" aria-hidden="true">🏆</span>
                      Teknik Üstünlük ve İnovasyon
                    </h3>
                    <ul className="space-y-3 text-neutral-700">
                      {[
                        "Yüksek parlaklık için optimize LED konumlandırması (P2–P6)",
                        "Truss/scaffolding ile güvenli rigging",
                        "Mekana göre ölçeklenen profesyonel ses sistemleri",
                        "DMX kontrollü akıllı ışıklandırma ve efektler",
                        "Modüler sahne/podyum ile esnek kurulum",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-neutral-900 mb-4 flex items-center gap-3">
                      <span className="bg-purple-500 text-white p-2 rounded-lg" aria-hidden="true">🛡️</span>
                      Operasyonel Mükemmellik ve Güvenlik
                    </h3>
                    <ul className="space-y-3 text-neutral-700">
                      {[
                        "7/24 teknik destek ve profesyonel sahne yönetimi",
                        "Kapsamlı risk analizi ve operasyon planı",
                        "Şeffaf teklif ve raporlama",
                        "ISO standartlarında kalite kontrol",
                        "Yedekli ekipman ve acil durum planları",
                        "Türkiye geneli lojistik ağı",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-black text-lg text-blue-900 mb-2">Komple Etkinlik Çözümleri</h4>
                  <p className="text-blue-800 text-sm">
                    <a href="/cadir-kiralama" className="text-blue-600 hover:text-blue-700 font-semibold underline">Çadır kurulumu</a>, zemin hazırlığı, dekoratif uygulamalar ve güç sistemleri dahil; tüm teknik ihtiyaçları tek çatı altında yönetiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-12 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Sahne, podyum, LED ekran kiralama ve kurulum hizmetlerimiz hakkında en çok merak edilenler
              </p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
    </div>
  );
}