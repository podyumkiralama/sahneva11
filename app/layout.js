// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
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
  keywords: "sahne kiralama, podyum kiralama, led ekran kiralama, ses ışık sistemi, etkinlik ekipmanları",
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.sahneva.com" },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
    locale: "tr_TR",
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
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

// ✅ KRİTİK CSS - Above-the-fold için
const CriticalCSS = () => (
  <style
    id="critical-css"
    dangerouslySetInnerHTML={{
      __html: `
        /* === TEMEL LAYOUT === */
        .container {
          max-width: 1280px;
          margin-inline: auto;
          padding-inline: 1rem;
        }
        
        .full-bleed {
          position: relative;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          inline-size: 100svw;
          width: 100vw;
          min-height: 60vh;
          overflow-x: clip;
        }
        
        @media (min-width: 768px) {
          .full-bleed { min-height: 70vh; }
        }
        
        .object-cover { object-fit: cover; }
        
        /* === NAVBAR KRİTİK STİLLER === */
        .nav-glass {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.75);
          background: color-mix(in oklab, white 70%, transparent);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        
        /* === UTILITY BAR KRİTİK STİLLER === */
        .utility-bar-container {
          position: fixed;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          height: 64px;
          min-height: 64px;
        }
        
        .utility-bar-content {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          height: 100%;
        }
        
        .utility-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease, opacity 0.3s ease;
          font-size: 16px;
        }
        
        /* === HERO VE YUKARI KISIM KRİTİK STİLLER === */
        .hero-optimized { 
          content-visibility: auto;
          contain: layout style paint;
        }
        
        .hero-overlay {
          background: linear-gradient(180deg, rgba(0,0,0,.6), rgba(0,0,0,.45) 35%, rgba(0,0,0,.6));
        }
        
        /* === TYPOGRAPHY KRİTİK STİLLER === */
        .hero-para { 
          color: #ffffff; 
          opacity: 0.95;
        }
        
        /* === FOCUS STYLES === */
        :focus-visible { 
          outline: 2px solid #6d28d966; 
          outline-offset: 2px;
          outline-width: 3px;
        }
        
        /* === LOADING STATES === */
        .img-skeleton { 
          background: #f3f4f6; 
          color: #374151;
        }
        
        /* === RESPONSIVE UTILITIES === */
        @media (max-width: 640px) {
          .utility-bar-container {
            bottom: 0.5rem;
            height: 56px;
            min-height: 56px;
          }
        }
        
        /* === REDUCED MOTION SUPPORT === */
        @media (prefers-reduced-motion: reduce) {
          .utility-btn {
            transition: none;
          }
        }
      `
    }}
  />
);

// ✅ ERTELENMİŞ CSS BİLEŞENİ
const DeferredStyles = () => (
  <Script
    id="deferred-styles"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        // Kritik olmayan CSS'yi yükle
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/styles/non-critical.css';
        link.media = 'print';
        link.onload = () => { 
          link.media = 'all';
          console.log('✅ Kritik olmayan CSS yüklendi');
        };
        document.head.appendChild(link);
        
        // Fontları preload et
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2';
        fontLink.as = 'font';
        fontLink.type = 'font/woff2';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      `
    }}
  />
);

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
    hasOfferCatalog: {
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
    description: metadata.description
  };

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
        <CriticalCSS />
        
        {/* ✅ Preload kritik kaynaklar */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
          media="print"
          onLoad="this.media='all'"
        />
        
        {/* ✅ Preconnect kritik domain'ler */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* ✅ Mevcut favicon ve manifest link'leri */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${inter.className} scroll-smooth`}>
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

        {/* ✅ Schema.org JSON-LD */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldLocalBusiness),
          }}
        />

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldOrganization),
          }}
        />

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldWebsite),
          }}
        />

        {/* ✅ Google Analytics */}
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

        {/* ✅ Ertelenmiş CSS */}
        <DeferredStyles />

        {/* ✅ Analytics ve Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
