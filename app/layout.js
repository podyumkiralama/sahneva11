// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  preload: true, // ✅ Preload true yapıldı - performans için daha iyi
  display: "swap", // ✅ optional yerine swap - daha iyi font loading
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
  keywords: "sahne kiralama, podyum kiralama, led ekran kiralama, ses ışık sistemi, etkinlik ekipmanları", // ✅ Yeni: keywords eklendi
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.sahneva.com" },
  viewport: { // ✅ viewport metadata içine taşındı
    width: "device-width",
    initialScale: 1,
    // maximumScale kaldırıldı - erişilebilirlik için önemli
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
      }
    ],
    type: "website",
    locale: "tr_TR", // ✅ Yeni: locale eklendi
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: { // ✅ Yeni: GoogleBot ayarları
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
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
    // ✅ Yeni: Diğer platformlar için verification
    yandex: "yandex-verification-code", // Yandex varsa ekleyin
    yahoo: "yahoo-verification-code", // Yahoo varsa ekleyin
  },
  authors: [{ name: "Sahneva" }], // ✅ Yeni: authors eklendi
  publisher: "Sahneva", // ✅ Yeni: publisher eklendi
  formatDetection: { // ✅ Yeni: format detection
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({ children }) {
  const SITE = "https://www.sahneva.com";
  const LB_ID = `${SITE}/#localbusiness`;

  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LB_ID,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0961692,
      longitude: 28.9792127,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
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
    hasOfferCatalog: { // ✅ Yeni: Hizmet kataloğu
      "@type": "OfferCatalog",
      name: "Etkinlik Ekipmanları Kiralama",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Sahne Sistemleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sahne Kiralama"
              }
            }
          ]
        }
      ]
    }
  };

  // ✅ YENİ: Organization Schema
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
    foundingDate: "2020", // ✅ Şirket kuruluş tarihi
    description: metadata.description
  };

  // ✅ YENİ: WebSite Schema
  const ldWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Sahneva - Etkinlik Prodüksiyon & Organizasyon",
    description: metadata.description,
    publisher: {
      "@id": `${SITE}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* ✅ İYİLEŞTİRİLMİŞ: Kritik CSS */}
        <style id="critical-css">{`
          .full-bleed{
            position:relative;
            margin-left:calc(50% - 50vw);
            margin-right:calc(50% - 50vw);
            inline-size:100svw;
            width:100vw;
            min-height:60vh;
            overflow-x:clip
          }
          @media (min-width:768px){
            .full-bleed{min-height:70vh}
          }
          .object-cover{object-fit:cover}
          .container{
            max-width:1280px;
            margin-inline:auto;
            padding-inline:1rem
          }
          /* ✅ LCP Optimizasyonu */
          .hero-optimized { 
            content-visibility: auto;
            contain: layout style paint;
          }
        `}</style>

        {/* ✅ YENİ: Favicon çeşitliliği */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${inter.className} scroll-smooth`}>
        {/* ✅ Erişilebilirlik - MÜKEMMEL (değişmedi) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow"
        >
          İçeriğe atla
        </a>

        <Navbar />
        <main id="main" role="main" className="mb-24 lg:mb-0">
          {children}
        </main>
        <UtilityBar />
        <Footer />

        {/* ✅ DÜZELTİLDİ: JSON-LD - beforeInteractive */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldLocalBusiness),
          }}
        />

        {/* ✅ YENİ: Organization Schema */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldOrganization),
          }}
        />

        {/* ✅ YENİ: WebSite Schema */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldWebsite),
          }}
        />

        {/* ✅ DÜZELTİLDİ: GA4 - Strategy çakışması giderildi */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-J5YK10YLLC" 
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J5YK10YLLC', {
              page_path: window.location.pathname,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `}
        </Script>

        {/* ✅ YENİ: Performance Monitoring */}
        <Script id="performance-monitoring" strategy="afterInteractive">
          {`
            // Core Web Vitals monitoring
            if ('webVitals' in window) {
              webVitals.getCLS(console.log);
              webVitals.getFID(console.log);
              webVitals.getLCP(console.log);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
