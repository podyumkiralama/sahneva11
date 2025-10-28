// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";

// Head component'ini ekle
import Head from "next/head";

// Client bileşenlerini dinamik yükle
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { 
    loading: () => <SectionSkeleton label="Hizmetler yükleniyor" />,
    ssr: false // ✅ SSR false eklendi - client component'ler için
  }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { 
    loading: () => <SectionSkeleton label="Projeler yükleniyor" />,
    ssr: false // ✅ SSR false eklendi
  }
);

export const revalidate = 3600; // 1 saat

function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div
      className="container py-12"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="h-10 w-40 mb-4 rounded bg-neutral-100 animate-pulse" />
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ✅ YENİ: Sayfaya Özel Meta Tags */}
      <Head>
        <title>Sahne, Podyum, LED Ekran & Ses-Işık Sistemleri Kiralama | Sahneva</title>
        <meta 
          name="description" 
          content="Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri kiralama. Hızlı kurulum, garantili hizmet. Ücretsiz danışmanlık." 
        />
        <meta name="keywords" content="sahne kiralama, podyum kiralama, led ekran kiralama, ses ışık sistemi, etkinlik ekipmanları, sahne kurulumu" />
        <link rel="canonical" href="https://www.sahneva.com" />
        
        {/* ✅ YENİ: Sayfaya Özel OpenGraph */}
        <meta property="og:title" content="Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva" />
        <meta property="og:description" content="Profesyonel etkinlik ekipmanları kiralama. Sahne, podyum, LED ekran, ses-ışık sistemleri. Türkiye geneli hizmet." />
        <meta property="og:url" content="https://www.sahneva.com" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="overflow-x-hidden">
        {/* ✅ Erişilebilirlik Linki - MÜKEMMEL (değişmedi) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
        >
          Ana içeriğe atla
        </a>

        {/* ✅ DÜZELTİLDİ: HERO Section */}
        <section className="full-bleed relative overflow-x-hidden">
          <Image
            src="/img/hero-bg.webp"
            alt="Profesyonel sahne kurulumu, modüler podyum sistemleri ve yüksek çözünürlüklü LED ekranlar"
            fill
            priority
            // ✅ fetchPriority KALDIRILDI
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL="/img/hero-bg-low.webp"
            className="object-cover hero-optimized" // ✅ YENİ: optimized class
            quality={85} // ✅ YENİ: quality optimize
          />
          <div className="absolute inset-0 bg-[#0b0f1a]/85" aria-hidden="true" />

          <div className="relative z-10 container py-20 md:py-32 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
              sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
            </p>

            {/* CTA'lar */}
            <HeroCtasClient />

            {/* ✅ İYİLEŞTİRİLDİ: Özellik rozetleri - daha semantik */}
            <div className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["⭐", "4.9 Müşteri Memnuniyeti", "Yüzlerce mutlu müşteri"],
                ["🔧", "Aynı Gün Kurulum", "Hızlı ve profesyonel kurulum"],
                ["👷", "Uzman Teknik Ekip", "Deneyimli profesyonel ekip"],
              ].map(([icon, title, desc], i) => (
                <div key={i} className="badge whitespace-nowrap overflow-hidden text-ellipsis" title={desc}>
                  <span aria-hidden="true">{icon}</span>
                  <span>{title}</span>
                </div>
              ))}
            </div>

            {/* ✅ DÜZELTİLDİ: Alt bilgi - heading hiyerarşisi */}
            <div className="mt-10 text-center">
              <div className="text-5xl mb-3" aria-hidden="true">
                🎧
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                Organizasyonunuz için Ücretsiz Danışmanlık
              </h2>
              <p className="text-white max-w-3xl mx-auto">
                Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
                çözümlerini ücretsiz danışmanlıkla planlayalım.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Ana içerik - landmark */}
        <main id="main">
          {/* Google yorum banner'ı */}
          <ReviewBanner />

          {/* ✅ DÜZELTİLDİ: Hizmetler - aria düzeltildi */}
          <section className="section-lazy" aria-labelledby="hizmetler-title">
            <h2 id="hizmetler-title" className="sr-only">
              Profesyonel Hizmetlerimiz
            </h2>
            <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
              <ServicesTabsLazy />
            </Suspense>
          </section>

          {/* Projeler galerisi */}
          <section className="section-lazy" aria-labelledby="projeler-title">
            <h2 id="projeler-title" className="sr-only">
              Tamamlanan Projeler
            </h2>
            <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
              <ProjectsGalleryLazy />
            </Suspense>
          </section>

          {/* Kurumsal etkinlikler */}
          <section className="section-lazy" aria-labelledby="kurumsal-title">
            <h2 id="kurumsal-title" className="sr-only">
              Kurumsal Etkinlik Çözümlerimiz
            </h2>
            <CorporateEvents />
          </section>

          {/* ✅ DÜZELTİLDİ: Bizi Neden Tercih Etmelisiniz - heading hiyerarşisi */}
          <section className="container py-16" aria-labelledby="neden-tercih-heading">
            <h2 id="neden-tercih-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">
              Neden Sahneva'yı Tercih Etmelisiniz?
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                // ... mevcut içerik aynı
              ].map(([icon, title, desc], i) => (
                <article key={i} className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-neutral-700">{desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ✅ İYİLEŞTİRİLDİ: SEO Metin Bloğu - daha optimize */}
          <section className="section-lazy" aria-labelledby="seo-title">
            <div className="container py-14 md:py-16">
              <h2 id="seo-title" className="text-2xl md:text-3xl font-bold text-center mb-8">
                Etkinlik Prodüksiyon &amp; Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <article className="card" aria-labelledby="u2u-title">
                  <h3 id="u2u-title" className="font-semibold text-lg mb-2">
                    Uçtan Uca Teknik Hizmet
                  </h3>
                  <p className="text-neutral-700">
                    Sahneva{" "}
                    <a href="/sahne-kiralama" className="underline hover:no-underline font-medium" title="Profesyonel sahne kiralama hizmeti">
                      sahne sistemleri kiralama
                    </a>
                    ,{" "}
                    <a href="/podyum-kiralama" className="underline hover:no-underline font-medium" title="Modüler podyum kiralama">
                      podyum kurulumu
                    </a>
                    ,{" "}
                    <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium" title="LED ekran kiralama fiyatları">
                      LED ekran kiralama
                    </a>{" "}
                    ve{" "}
                    <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium" title="Ses ve ışık sistemleri kurulumu">
                      ses ışık sistemi kurulumu
                    </a>{" "}
                    alanlarında uçtan uca çözümler sunar.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                    <li>IP65 dış mekân LED paneller, yüksek parlaklık</li>
                    <li>Line-array ses sistemleri, dijital mikserler</li>
                    <li>Modüler podyum ve sahne platformları</li>
                    <li>DMX kontrollü ışık ve ambiyans aydınlatma</li>
                  </ul>
                </article>

                <article className="card" aria-labelledby="hizli-title">
                  <h3 id="hizli-title" className="font-semibold text-lg mb-2">
                    Hızlı Kurulum, Şeffaf Fiyat
                  </h3>
                  <p className="text-neutral-700">
                    İstanbul merkezli ekibimizle Türkiye'nin her ilinde çalışıyoruz.
                    Aynı gün hızlı kurulum, yedekli ekipman ve 7/24 teknik destek.
                  </p>
                  <p className="text-neutral-700 mt-3">
                    <strong>Hemen teklif alın:</strong>{" "}
                    <a
                      href="https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+ekipman+kiralaması+için+teklif+almak+istiyorum."
                      className="underline hover:no-underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp'tan ücretsiz teklif alın (yeni sekmede açılır)"
                    >
                      WhatsApp'tan yazın
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Diğer bölümler aynı kalabilir... */}
        </main>
      </div>
    </>
  );
}
