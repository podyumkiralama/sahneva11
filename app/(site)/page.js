import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy client components
const ServicesTabsLazy = dynamic(() => import("@/components/ServicesTabs"), { ssr: false });
const ProjectsGalleryLazy = dynamic(() => import("@/components/ProjectsGallery"), { ssr: false });

// Server components (no 'use client')
import CorporateEvents from "@/components/CorporateEvents";
import ReviewBanner from "@/components/ReviewBanner";
import Faq from "@/components/Faq";

const heroImg = "/img/hero-bg.webp";

function SectionSkeleton({ label = "Yükleniyor" }) {
  return (
    <div className="container py-12">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse flex items-center justify-center text-sm text-neutral-500">
        {label}
      </div>
    </div>
  );
}

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[360px] md:h-[480px] flex items-center justify-center bg-neutral-950">
        <Image
          src={heroImg}
          alt="Sahneva etkinlik prodüksiyon hero görseli"
          fill
          priority
          className="object-cover opacity-70"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
            Sahne, Podyum, LED Ekran ve Ses-Işık Kiralama
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-2xl mx-auto">
            Türkiye genelinde profesyonel kurulum ve teknik operasyon.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/iletisim" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Teklif Al</a>
            <a href="https://wa.me/905000000000" className="px-4 py-2 bg-white text-neutral-900 rounded-lg">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Hizmetler</h2>
        <p className="text-neutral-600">İhtiyacınıza uygun paketleri seçin.</p>
        <div className="mt-6">
          <ServicesTabsLazy fallback={<SectionSkeleton label="Hizmetler yükleniyor" />} />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Projeler</h2>
        <p className="text-neutral-600">Son çalışmalarımızdan bazıları.</p>
        <div className="mt-6">
          <ProjectsGalleryLazy fallback={<SectionSkeleton label="Projeler yükleniyor" />} />
        </div>
      </section>

      {/* CORPORATE */}
      <CorporateEvents />

      {/* REVIEWS */}
      <ReviewBanner />

      {/* FAQ */}
      <Faq />
    </>
  );
}
