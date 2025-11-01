// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { headers } from "next/headers";
import Script from "next/script";

// Örn: import heroImg from "@/public/img/hero-bg.webp";
// Proje yapına göre yolu ayarla veya mevcut fill kullanımını koru.
const heroImg = "/img/hero-bg.webp";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import ReviewBanner from "../../components/ReviewBanner";

const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { loading: () => <SectionSkeleton label="Hizmetler yükleniyor" /> }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { loading: () => <SectionSkeleton label="Projeler yükleniyor" /> }
);

export const revalidate = 3600;

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

function StructuredData() {
  const nonce = headers().get('x-csp-nonce') ?? undefined;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahneva",
    url: "https://sahneva.com",
    telephone: "+905453048671",
    logo: "https://sahneva.com/img/logo.png",
    sameAs: []
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    description: "Türkiye genelinde sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama; kurulum ve teknik operasyon.",
    url: "https://sahneva.com",
    areaServed: { "@type": "Country", name: "TR" },
    provider: { "@type": "Organization", name: "Sahneva" },
    serviceType: ["Sahne Kiralama","Podyum Kiralama","LED Ekran Kiralama","Ses Sistemi Kiralama","Işık Sistemi Kiralama","Etkinlik Prodüksiyon"]
  };
  return (
    <>
      <Script type="application/ld+json" id="ld-org" nonce={nonce} strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Script type="application/ld+json" id="ld-service" nonce={nonce} strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80" aria-labelledby="hizmetler-title">
      <div className="absolute inset-0 bg-grid-neutral-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 id="hizmetler-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Türkiye geneli sahne, podyum, LED ekran kiralama ve ses-ışık sistemleri kurulumu</p>
        </div>
        <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
          <ServicesTabsLazy />
        </Suspense>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData />

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200">
        Ana içeriğe atla
      </a>

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-20" aria-labelledby="hero-title" role="banner">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Profesyonel sahne kurulumu, LED ekranlar ve ses-ışık sistemleri - Sahneva Türkiye geneli sahne kiralama" fill priority sizes="100vw" className="object-cover object-center hero-img" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-pulse motion-reduce:animate-none animate-slow" aria-hidden="true" />

        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse motion-reduce:animate-none" />
                <span className="text-white/90 text-sm font-medium">Türkiye Geneli Profesyonel Hizmet</span>
              </div>

              <h1 id="hero-title" className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                <span className="block">Profesyonel</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-300% animate-gradient motion-reduce:animate-none">
                  Sahne Sistemleri
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed font-medium max-w-4xl mx-auto">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-bold">Sahne Kiralama</span>, 
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text font-bold"> LED Ekran</span>, 
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold"> Ses-Işık Sistemleri</span>
              </p>

              <p className="text-white/80 text-base md:text-lg mb-8 max-w-3xl mx-auto">
                500+ başarılı proje, %98 müşteri memnuniyeti ve Türkiye geneli hızlı kurulum ile yanınızdayız
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce motion-reduce:animate-none">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      <main id="main" className="relative">
        <div aria-hidden="true" className="h-12 lg:h-16" />
        <div className="sticky top-0 z-40">
          <ReviewBanner />
        </div>

        <ServicesSection />

        <section className="py-12 bg-white" aria-labelledby="faq-title">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sorular</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Sahne, podyum, LED ekran kiralama ve kurulum hizmetlerimiz hakkında en çok merak edilen sorular ve cevapları
              </p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
    </div>
  );
}
