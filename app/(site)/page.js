"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { headers } from "next/headers";
import Script from "next/script";

// ✅ Hero görsel yolu
const heroImg = "/img/hero-bg.webp";

// ✅ Import path düzeltildi
import CorporateEvents from "../../../components/CorporateEvents";
import Faq from "../../../components/Faq";
import ReviewBanner from "../../../components/ReviewBanner";

// ✅ Dynamic imports (correct paths)
const ServicesTabsLazy = dynamic(
  () => import("../../../components/ServicesTabs"),
  { loading: () => <SectionSkeleton label="Hizmetler yükleniyor" /> }
);

const ProjectsGalleryLazy = dynamic(
  () => import("../../../components/ProjectsGallery"),
  { loading: () => <SectionSkeleton label="Projeler yükleniyor" /> }
);

export const revalidate = 3600;

// ===========================
// Skeleton
// ===========================
function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div className="container py-10" role="status" aria-live="polite" aria-label={label}>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200 animate-pulse" />
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

// ===========================
// JSON-LD
// ===========================
function StructuredData() {
  const nonce = headers().get("x-csp-nonce") ?? undefined;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    description:
      "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri kiralama ve teknik operasyon.",
    areaServed: "TR",
    provider: {
      "@type": "Organization",
      name: "Sahneva",
      url: "https://sahneva.com",
    },
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
    <Script
      id="schema-service"
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}

// ===========================
// SERVICES SECTION
// ===========================
function ServicesSection() {
  return (
    <section
      className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80"
      aria-labelledby="hizmetler-title"
    >
      <div
        className="absolute inset-0 bg-grid-neutral-200/50
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2
            id="hizmetler-title"
            className="text-3xl md:text-4xl font-black text-neutral-900 mb-4"
          >
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
  );
}

// ===========================
// PAGE
// ===========================
export default function HomePage() {
  const nonce = headers().get("x-csp-nonce") ?? undefined;

  return (
    <div className="overflow-x-hidden">
      <StructuredData />

      {/* === Skip Link === */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only
        focus:fixed focus:z-[9999]
        focus:top-3 focus:left-3
        focus:bg-blue-600 focus:text-white
        focus:px-4 focus:py-3
        focus:rounded-lg"
      >
        Ana içeriğe atla
      </a>

      {/* ======================
          HERO
      ====================== */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center
        overflow-hidden bg-gradient-to-br
        from-slate-900 via-blue-900 to-purple-900
        pt-16 lg:pt-20"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Sahneva profesyonel sahne ve LED ekran sistemleri"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75" />

        {/* Hero Content */}
        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1
              id="hero-title"
              className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            >
              <span className="block">Profesyonel</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
                Sahne Sistemleri
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto">
              Sahne Kiralama • LED Ekran • Ses-Işık Sistemleri
            </p>

            <p className="text-white/80 text-base md:text-lg mb-8 max-w-3xl mx-auto">
              500+ başarılı proje • %98 müşteri memnuniyeti • Türkiye geneli kurulum
            </p>
          </div>
        </div>
      </section>

      {/* ======================
          MAIN
      ====================== */}
      <main id="main" className="relative">
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        <ServicesSection />

        {/* PROJELER */}
        <section
          className="py-12 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="projeler-title"
        >
          <div className="container">
            <div className="text-center mb-12">
              <h2
                id="projeler-title"
                className="text-3xl md:text-4xl font-black text-white mb-4"
              >
                Başarılı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Projelerimiz
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                500+ kurumsal etkinlik • konser • fuar
              </p>
            </div>

            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-neutral-800 rounded-2xl animate-pulse h-80" />
                  ))}
                </div>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* KURUMSAL */}
        <section className="py-12 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Kurumsal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Organizasyon Çözümlerimiz
                </span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Lansman • Konferans • Bayi Toplantısı • Kurumsal Etkinlik
              </p>
            </div>

            <CorporateEvents />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Sorular
                </span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Sık sorulan sorular ve cevapları
              </p>
            </div>

            <Faq />
          </div>
        </section>
      </main>
    </div>
  );
}
