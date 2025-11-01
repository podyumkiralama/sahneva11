// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  preload: true,          // LCP için font preloading
  display: "swap",        // FOIT yok
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://www.sahneva.com"),
  title: {
    default: "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva",
    template: "%s | Sahneva",
  },
  description:
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı kurulum, profesyonel teknik ekip, uygun fiyat. Hemen teklif alın!",
  keywords:
    "sahne kiralama, podyum kiralama, led ekran kiralama, ses ışık sistemi, etkinlik ekipmanları",
  alternates: { canonical: "https://www.sahneva.com" },
  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale koymuyoruz → erişilebilirlik
  },
  themeColor: "#6d28d9",
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    url: "https://www.sahneva.com",
    siteName: "Sahneva",
    images: [
      {
        url: "/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sahneva - Profesyonel Etkinlik Ekipmanları",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    images: ["/img/og.jpg"],
    creator: "@sahneva",
  },
  verification: {
    google: "H9p1RO-W1U3JDTjp0mM32blFkYABaTHNFnxVKKFfo08",
  },
  authors: [{ name: "Sahneva" }],
  publisher: "Sahneva",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({ children }) {
  const SITE = "https://www.sahneva.com";

  // JSON-LD: LocalBusiness
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#localbusiness`,
    name: "Sahneva",
    url: SITE,
    image: `${SITE}/img/og.jpg`,
    telephone: "+90 545 304 8671",
    priceRange: "₺₺",
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/img/logo.png`,
      width: 512,
      height: 512,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anadolu Cd. 61/A, Hamidiye",
      addressLocality: "Kağıthane",
      addressRegion: "İstanbul",
      postalCode: "34400",
      addressCountry: "TR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.0961692, longitude: 28.9792127 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sahnevaorganizasyon",
      "https://www.youtube.com/@sahneva",
      "https://g.page/r/CZhkMzkNOdgnEBI",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90 545 304 8671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Etkinlik Ekipmanları Kiralama",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Sahne Sistemleri",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sahne Kiralama" } },
          ],
        },
      ],
    },
  };

  // JSON-LD: Organization
  const ldOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Sahneva",
    url: SITE,
    logo: `${SITE}/img/logo.png`,
    sameAs: ldLocalBusiness.sameAs,
    address: ldLocalBusiness.address,
    contactPoint: ldLocalBusiness.contactPoint,
    foundingDate: "2020",
    description: metadata.description,
  };

  // JSON-LD: WebSite
  const ldWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Sahneva - Etkinlik Prodüksiyon & Organizasyon",
    description: metadata.description,
    publisher: { "@id": `${SITE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Kritik yardımcı stiller (spacing/CLS optimizasyonu) */}
        <style id="critical-css">{`
          .container{max-width:1280px;margin-inline:auto;padding-inline:1rem}
          .hero-optimized{content-visibility:auto;contain:layout style paint}
        `}</style>

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${inter.className} scroll-smooth`}>
        {/* Tek bir “skip link” burada kalsın */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow"
        >
          İçeriğe atla
        </a>

        <Navbar />

        {/* Footer ve UtilityBar ile arasındaki boşluk azaltıldı */}
        <main id="main" role="main" className="mb-10 lg:mb-6">
          {children}
        </main>

        <UtilityBar />
        <Footer />

        {/* JSON-LD (kritik: beforeInteractive) */}
        <Script id="ld-localbusiness" type="application/ld+json" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }} />
        <Script id="ld-organization" type="application/ld+json" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }} />
        <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebsite) }} />
      </body>
    </html>
  );
}
