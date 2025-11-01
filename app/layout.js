// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

// ✅ DÜZELTİLDİ: Next.js 14 için viewport export'u
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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

export default function RootLayout({ children }) {
  const SITE = "https://www.sahneva.com";

  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sahneva",
    url: SITE,
    image: `${SITE}/img/og.jpg`,
    telephone: "+90 545 304 8671",
    priceRange: "₺₺",
    logo: `${SITE}/img/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
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
  };

  const ldOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahneva",
    url: SITE,
    logo: `${SITE}/img/logo.png`,
    sameAs: ldLocalBusiness.sameAs,
    contactPoint: ldLocalBusiness.contactPoint,
  };

  const ldWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE,
    name: "Sahneva - Etkinlik Prodüksiyon & Organizasyon",
    description: metadata.description,
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
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
          .hero-optimized { 
            content-visibility: auto;
            contain: layout style paint;
          }
        `}</style>

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

        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldLocalBusiness),
          }}
        />

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldOrganization),
          }}
        />

        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldWebsite),
          }}
        />

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
      </body>
    </html>
  );
}
