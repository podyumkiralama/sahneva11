// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

const inter = Inter({
  subsets: ["latin"],
  preload: false,
  display: "optional",
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
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.sahneva.com" },
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    url: "https://www.sahneva.com",
    siteName: "Sahneva",
    images: ["/img/og.jpg"],
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    images: ["/img/og.jpg"],
    creator: "@sahneva",
  },
  verification: { google: "H9p1RO-W1U3JDTjp0mM32blFkYABaTHNFnxVKKFfo08" },
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
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Kritik CSS */}
        <style id="critical-css">{`
          .full-bleed{position:relative;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);inline-size:100svw;width:100vw;min-height:60vh;overflow-x:clip}
          @media (min-width:768px){.full-bleed{min-height:70vh}}
          .object-cover{object-fit:cover}
          .container{max-width:1280px;margin-inline:auto;padding-inline:1rem}
        `}</style>
      </head>

      {/* ✅ BURADA PADDING KALDIRILDI */}
      <body className={`${inter.className} scroll-smooth`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow"
        >
          İçeriğe atla
        </a>

        <Navbar />

        {/* ✅ PT KALDIRILDI */}
        <main id="main" role="main" className="mb-24 lg:mb-0">
          {children}
        </main>

        <UtilityBar />
        <Footer />

        {/* ✅ LocalBusiness JSON-LD */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldLocalBusiness),
          }}
        />
      </body>
    </html>
  );
}
