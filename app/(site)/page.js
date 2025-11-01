// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// HERO görselini statik import → otomatik blurDataURL + LCP
import heroImg from "@/public/img/hero-bg.webp";

// Statik bileşenler
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import ReviewBanner from "../../components/ReviewBanner";

// Dinamik bileşenler
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { loading: () => <SectionSkeleton label="Hizmetler yükleniyor" /> }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { loading: () => <SectionSkeleton label="Projeler yükleniyor" /> }
);

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

// Hizmetler bölümü
function ServicesSection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80" aria-labelledby="hizmetler-title">
      <div className="container">
        <div className="text-center mb-10">
          <h2 id="hizmetler-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-3">
            Profesyonel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
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

function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahneva",
    url: "https://sahneva.com",
    logo: "https://sahneva.com/img/logo.png",
  };

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData />

      {/* HERO */}
      <section
        className="relative min-h-[72vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Profesyonel sahne kurulumu, LED ekranlar ve ses-ışık sistemleri - Sahneva Türkiye geneli sahne kiralama"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
            style={{ transform: "scale(1.02)", filter: "brightness(0.7) contrast(1.1) saturate(1.1)" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75" aria-hidden="true" />

        <div className="container relative z-10 text-center text-white">
          <h1 id="hero-title" className="text-3xl md:text-5xl font-black leading-tight">
            Sahne, Podyum, LED Ekran & Ses-Işık Kiralama
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            500+ referans, hızlı kurulum ve premium ekipman.
          </p>
        </div>
      </section>

      <main id="main" className="relative">
        {/* CLS guard: sticky banner yüksekliği kadar boşluk */}
        <div aria-hidden="true" className="h-12 lg:h-16" />
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        <ServicesSection />

        {/* Projeler */}
        <section className="py-10 md:py-12 bg-gradient-to-br from-neutral-900 to-blue-900/95" aria-labelledby="projeler-title">
          <div className="container">
            <div className="text-center mb-10">
              <h2 id="projeler-title" className="text-3xl md:text-4xl font-black text-white mb-3">
                Başarılı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Projelerimiz
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                500'den fazla kurumsal etkinlik, konser, fuar ve özel organizasyonda güvenilir çözüm ortağı
              </p>
            </div>

            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-neutral-800 rounded-2xl animate-pulse motion-reduce:animate-none h-80" />
                  ))}
                </div>
              }
            >
              <ProjectsGalleryLazy />
            </Suspense>
          </div>
        </section>

        {/* Kurumsal */}
        <section className="py-10 md:py-12 bg-white" aria-labelledby="kurumsal-title">
          <div className="container">
            <div className="text-center mb-10">
              <h2 id="kurumsal-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-3">
                Kurumsal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Organizasyon Çözümlerimiz
                </span>
              </h2>
              <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
                Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için sahne, podyum, LED ekran, ses–ışık ve
                teknik operasyonu tek çatı altında sunuyoruz.
              </p>
            </div>
            <CorporateEvents />
          </div>
        </section>

        {/* SSS — alt boşlukları azalt */}
        <Faq compact />
      </main>
    </div>
  );
}
