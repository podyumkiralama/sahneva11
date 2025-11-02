// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import heroImg from "@/public/img/hero-bg.webp";

import CorporateEvents from "@/components/CorporateEvents";
import Faq from "@/components/Faq";
import ReviewBanner from "@/components/ReviewBanner";

// ✅ SEO Makaleleri Component
import SeoArticles from "@/components/SeoArticles";
import { SEO_ARTICLES } from "@/lib/articlesData";

const ServicesTabsLazy = dynamic(
  () => import("@/components/ServicesTabs"),
  { loading: () => <SectionSkeleton label="Hizmetler yükleniyor" /> }
);

const ProjectsGalleryLazy = dynamic(
  () => import("@/components/ProjectsGallery"),
  { loading: () => <SectionSkeleton label="Projeler yükleniyor" /> }
);

export const revalidate = 3600;

function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div className="container py-10" role="status" aria-live="polite" aria-label={label}>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-40 rounded bg-neutral-200 animate-pulse" />
        <div className="h-40 w-full rounded-2xl bg-neutral-200 animate-pulse" />
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80" aria-labelledby="hizmetler-title">
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
  );
}

export default function HomePage() {
  // ✅ JSON-LD (3 adet)
  const ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahneva",
    url: "https://www.sahneva.com",
    logo: "https://www.sahneva.com/img/logo.png",
    telephone: "+905453048671"
  };

  const WEBSITE = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sahneva",
    url: "https://www.sahneva.com"
  };

  const SERVICE = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    url: "https://www.sahneva.com"
  };

  return (
    <div className="overflow-x-hidden">

      {/* ✅ Rich Snippet */}
      <script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
      <script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE) }} />
      <script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* ✅ HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Profesyonel sahne kurulumu, LED ekranlar ve ses-ışık sistemleri - Sahneva"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
            style={{ transform: "scale(1.02)", filter: "brightness(0.7)" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75" aria-hidden="true" />

        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center mb-10">

            <h1 id="hero-title" className="text-white text-4xl md:text-6xl font-black mb-6 leading-tight">
              Profesyonel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">
                Sahne Sistemleri
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              Sahne kiralama, LED ekran ve ses-ışık sistemleri ile Türkiye’nin her yerinde yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="tel:+905453048671"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-3 rounded-xl"
              >
                📞 Hemen Ara
              </a>

              <a
                href="https://wa.me/905453048671"
                target="_blank"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-6 py-3 rounded-xl"
              >
                💬 WhatsApp Teklif
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Review Banner */}
      <div className="sticky top-0 z-40">
        <ReviewBanner />
      </div>

      {/* ✅ Hizmetler */}
      <ServicesSection />

      {/* ✅ Projeler */}
      <section className="py-12 bg-neutral-900" aria-labelledby="projeler-title">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="projeler-title" className="text-3xl md:text-4xl font-black text-white mb-4">
              Başarılı <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projelerimiz</span>
            </h2>
          </div>

          <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
            <ProjectsGalleryLazy />
          </Suspense>
        </div>
      </section>

      {/* ✅ Kurumsal */}
      <section className="py-12 bg-white">
        <div className="container">
          <CorporateEvents />
        </div>
      </section>

      {/* ✅ SEO Makaleleri */}
      <SeoArticles items={SEO_ARTICLES} />

      {/* ✅ SSS */}
      <section className="py-10 bg-white" aria-labelledby="faq-title">
        <div className="container">
          <div className="text-center mb-8">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-3">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          {/* compact = alt boşluk minimum */}
          <Faq compact />
        </div>
      </section>
    </div>
  );
}
