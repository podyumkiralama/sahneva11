import Script from "next/script";
import Link from "next/link";

import HeaderNav from "@/components/podyum/HeaderNav";
import Hero from "@/components/podyum/Hero";
import Packages from "@/components/podyum/Packages";
import FAQ from "@/components/podyum/FAQ";
import CTA from "@/components/podyum/CTA";
import GallerySection from "@/components/podyum/GallerySection";

export const revalidate = 1800;

const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WHATSAPP_TEXT = "Merhaba%2C+podyum+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Flansman%2Fdugun%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Podyum+olcusu%3A+%5Bxxx%5D.";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_TEXT}`;

const heroData = {
  title: "Podyum Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Modüler 1×1 ve 2×1 paneller, kaymaz kaplama ve estetik skört seçenekleriyle güvenli podyum kurulumları. İstanbul başta olmak üzere Türkiye genelinde etkinlik alanlarınıza uygun ölçülerde sahne ve podyum çözümleri sunuyoruz.",
  image: {
    src: "/img/hizmet-podyum.webp",
  },
};

const serviceItems = [
  {
    title: "Modüler podyum sistemleri",
    description:
      "Konser, festival ve lansman sahneleri için hızlı kurulan, yüksek taşıma kapasiteli modüler platformlar.",
    benefits: [
      "1×1 ve 2×1 panellerle esnek kombinasyon",
      "Kaymaz kaplama ve yükseklik ayarı",
      "Taşınabilir ve kısa sürede montaj",
    ],
  },
  {
    title: "Güvenlik ve konfor çözümleri",
    description:
      "Engelli rampası, korkuluk ve güvenli merdiven seçenekleri ile ekip ve davetliler için güvenli kullanım.",
    benefits: [
      "Korkuluk ve bariyer entegrasyonu",
      "Engelli erişimine uygun rampalar",
      "Profesyonel dengeleme ve yük testleri",
    ],
  },
  {
    title: "Markalama ve tasarım",
    description:
      "Kurumsal etkinlikler için brandalama, halı ve skört seçenekleri ile marka görünürlüğü güçlendirilir.",
    benefits: [
      "Kurumsal renklerde halı ve skört",
      "Sahne önü baskılı paneller",
      "Lansman ve AVM etkinliklerine özel tasarım",
    ],
  },
];

const useCaseItems = [
  "Konser ve festival sahne podyumları",
  "Kurumsal lansman ve ürün tanıtımları",
  "Düğün, nişan ve protokol organizasyonları",
  "AVM etkinlikleri ve roadshow sahneleri",
];

const packageItems = [
  {
    id: "mini-podyum",
    name: "Mini Podyum — 12 m²",
    badge: "Küçük etkinlik",
    specs: {
      area: 12,
      dimensions: "3×4 m",
      height: "40 cm",
    },
    includes: [
      "6 adet 1×2 m panel (12 m² toplam alan)",
      "Kaymaz kaplama ve çevre skört",
      "Kurulum ve söküm dahil",
    ],
    note: "İç mekân konuşma ve mini performanslar için ideal. İstanbul içi hızlı teslim.",
    price: 8500,
  },
  {
    id: "orta-podyum",
    name: "Orta Podyum — 24 m²",
    badge: "Popüler",
    specs: {
      area: 24,
      dimensions: "4×6 m",
      height: "60 cm",
    },
    includes: [
      "12 adet 1×2 m panel (24 m² toplam alan)",
      "Kaymaz kaplama, merdiven ve rampa",
      "Yerinde dengeleme ve güvenlik ekipleri",
    ],
    note: "Kurumsal etkinlikler ve canlı performanslar için en çok tercih edilen paket.",
    price: 16500,
  },
  {
    id: "pro-podyum",
    name: "Pro Podyum — 48 m²",
    badge: "Profesyonel",
    specs: {
      area: 48,
      dimensions: "6×8 m",
      height: "80–100 cm",
    },
    includes: [
      "24 adet 1×2 m panel (48 m² toplam alan)",
      "Kaymaz kaplama, korkuluk, merdiven ve rampa",
      "Sahne önü brandalama ve ışık entegrasyonu",
    ],
    note: "Festival sahneleri, mitingler ve büyük prodüksiyonlar için yüksek taşıma kapasiteli çözüm.",
    price: 28500,
  },
];

const faqItems = [
  {
    question: "Podyum kiralama sürecinde keşif ve kurulum ne kadar sürer?",
    answer:
      "İstanbul içi projelerde ücretsiz keşif hizmeti sunuyoruz. Onay sonrası ekiplerimiz aynı gün içerisinde podyum kurulumunu tamamlar; şehir dışı işler içinse ekip çıkış planlamasıyla birlikte 24 ila 48 saat içerisinde teslim edilir.",
  },
  {
    question: "Podyum yüksekliği ve ölçüleri etkinlik alanına göre değiştirilebilir mi?",
    answer:
      "Modüler 1×1 ve 2×1 paneller sayesinde etkinlik alanının ölçülerine göre farklı kombinasyonlar oluşturabiliriz. 20 cm’den 120 cm’e kadar yüksekliği ayarlanabilen ayak sistemleri kullanıyoruz.",
  },
  {
    question: "Podyum kiralama ücretlerine hangi hizmetler dahil?",
    answer:
      "Paket fiyatına platform panelleri, kaymaz kaplama, halı ve skört uygulaması, profesyonel kurulum-söküm, merdiven ve rampa çözümleri ile operasyon süresince teknik destek dahildir.",
  },
  {
    question: "Diğer hizmetlerle entegre çözüm alabilir miyim?",
    answer:
      "Evet. LED ekran kiralama, ses-ışık sistemleri ve çadır kiralama ekiplerimizle aynı projede entegre çalışıyoruz. Böylece tek sözleşmeyle tüm sahne altyapısını Sahneva’dan sağlayabilirsiniz.",
  },
];

const galleryImages = [
  {
    src: "/img/galeri/podyum-kiralama-1.webp",
    alt: "Konser sahnesinde ışıklandırılmış yüksek podyum platformu",
  },
  {
    src: "/img/galeri/podyum-kiralama-2.webp",
    alt: "Düğün organizasyonunda beyaz halı kaplamalı nikah podyumu",
  },
  {
    src: "/img/galeri/podyum-kiralama-3.webp",
    alt: "Kurumsal lansmanda markalı sunum podyumu ve LED ekran",
  },
  {
    src: "/img/galeri/podyum-kiralama-4.webp",
    alt: "Festival alanında geniş performans sahnesi ve podyum",
  },
  {
    src: "/img/galeri/podyum-kiralama-5.webp",
    alt: "Açılış töreninde protokol için hazırlanan podyum platformu",
  },
];

const breadcrumbs = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
];

export const metadata = {
  title: "Podyum Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
  description:
    "Profesyonel podyum kiralama: modüler platformlar, kaymaz kaplama, merdiven ve rampa çözümleri. İstanbul ve Türkiye genelinde etkinlik podyumu kurulum hizmeti.",
  keywords:
    "podyum kiralama, podyum sahne kiralama, modüler podyum, podyum platform, sahne podyum, podyum fiyatları, etkinlik podyumu",
  alternates: { canonical: `${ORIGIN}/podyum-kiralama` },
  openGraph: {
    title: "Podyum Kiralama | Profesyonel Sahne Çözümleri",
    description:
      "Modüler podyum sistemleri, kaymaz kaplama ve profesyonel kurulum ile Sahneva güvencesi.",
    url: `${ORIGIN}/podyum-kiralama`,
    siteName: "Sahneva",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/hizmet-podyum.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva podyum kiralama hizmeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podyum Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
    description:
      "Podyum kiralama ve sahne çözümleri: modüler platformlar, merdiven ve rampa sistemleri.",
    images: [`${ORIGIN}/img/hizmet-podyum.webp`],
  },
};

function ServicesSection() {
  return (
    <section aria-labelledby="hizmetler-heading" className="bg-white py-20">
      <article className="mx-auto max-w-6xl px-4">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="hizmetler-heading" className="text-3xl font-black text-slate-900 sm:text-4xl">
            Podyum kiralama hizmet paketleri
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sahneva, podyum kiralama projelerinde keşif, tasarım, kurulum ve operasyon boyunca yanınızda. Ses ve ışık sistemleri için <Link href="/ses-isik-sistemleri" className="text-emerald-600 underline underline-offset-4">ses ışık kiralama</Link> çözümlerimizle entegre çalışıyoruz.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <header className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-base text-slate-600">{service.description}</p>
              </header>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 text-emerald-500">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
          <h3 className="text-xl font-semibold text-emerald-800">Hangi etkinlikler için öneriyoruz?</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {useCaseItems.map((useCase) => (
              <li key={useCase} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-emerald-800">
                {useCase}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-emerald-900">
            LED ekran entegrasyonu için <Link href="/led-ekran-kiralama" className="font-semibold underline underline-offset-4">led ekran kiralama</Link> hizmetimizden de yararlanabilirsiniz.
          </p>
        </aside>
      </article>
    </section>
  );
}

function Breadcrumb() {
  return (
    <section aria-label="Breadcrumb" className="bg-slate-100 py-4">
      <article className="mx-auto max-w-6xl px-4">
        <nav aria-label="Sayfa yolu">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="font-medium text-slate-700 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  {item.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span aria-hidden="true" className="text-slate-400">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </article>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <article className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-800">© {new Date().getFullYear()} Sahneva. Tüm hakları saklıdır.</p>
        <nav aria-label="Alt menü">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/kurumsal-organizasyon"
                className="hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                Kurumsal organizasyon çözümleri
              </Link>
            </li>
            <li>
              <Link
                href="/masa-sandalye-kiralama"
                className="hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                Masa sandalye kiralama
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </footer>
  );
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${ORIGIN}${item.href}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sahneva Podyum Kiralama",
  image: `${ORIGIN}/img/hizmet-podyum.webp`,
  url: `${ORIGIN}/podyum-kiralama`,
  telephone: PHONE,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çırpıcı Mah. Yeşiltepe Sk. No:15",
    addressLocality: "Zeytinburnu",
    addressRegion: "İstanbul",
    postalCode: "34025",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.0053",
    longitude: "28.8721",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/sahneva",
    "https://www.facebook.com/sahnevatr",
  ],
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
};

export default function PodyumKiralamaPage() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Ana içeriğe atla
      </a>
      <HeaderNav />
      <main id="main-content">
        <Breadcrumb />
        <Hero hero={heroData} contactHref={WHATSAPP_URL} secondaryHref="#paketler" />
        <ServicesSection />
        <Packages packages={packageItems} contactHref={WHATSAPP_URL} />
        <GallerySection images={galleryImages} />
        <FAQ items={faqItems} />
        <CTA contactHref={WHATSAPP_URL} />
      </main>
      <Footer />
      <Script id="podyum-jsonld-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="podyum-jsonld-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="podyum-jsonld-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  );
}
