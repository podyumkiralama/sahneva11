// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import GAClient from "../components/GAClient";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import { createContext } from "react";

export const NonceContext = createContext(null);

const inter = Inter({
  subsets: ["latin"],
  preload: false,          // render-blocking yok
  display: "optional",     // FOIT yok; sistem fontu ile başlar
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

// Viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

// Metadata (genel)
export const metadata = {
  metadataBase: new URL("https://www.sahneva.com"),
  title: {
    default: "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva",
    template: "%s | Sahneva",
  },
  description:
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri kiralama ve profesyonel kurulum. Hızlı keşif, teknik ekip ve 7/24 destek.",
  alternates: { canonical: "https://www.sahneva.com" },
  openGraph: {
    title: "Sahneva – Profesyonel Sahne & Etkinlik Teknolojileri",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli hızlı kurulum ve profesyonel teknik destek.",
    url: "https://www.sahneva.com",
    siteName: "Sahneva",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // 🔐 Nonce (middleware x-nonce başlığı ile geliyorsa kullan)
  const nonce = headers().get("x-nonce") ?? undefined;

  return (
    <html lang="tr" className={inter.className}>
      <head>
        {/* ⚡ DNS + TCP + TLS erken kurulumu */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* 🔮 Speculation Rules — same-origin navigasyonları ısıtır (Chrome) */}
        <Script
          id="speculation-rules"
          type="speculationrules"
          strategy="afterInteractive"
          nonce={nonce}
        >{JSON.stringify({
          prefetch: [
            {
              source: "document",
              eagerness: "conservative",
              where: { and: [{ href_matches: "/*" }] },
            },
          ],
          prerender: [
            {
              source: "document",
              eagerness: "moderate",
              where: { and: [{ href_matches: "/*" }] },
            },
          ],
        })}</Script>

        {/* ✅ Google Analytics (hızlı & güvenli) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J5YK10YLLC"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script id="ga-init" strategy="afterInteractive" nonce={nonce}>
          {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           // App Router'da çift sayımı önlemek için otomatik sayımı kapat
           gtag('config', 'G-J5YK10YLLC', { send_page_view: false, anonymize_ip: true });`}
        </Script>
      </head>

      <body
        className="min-h-screen bg-white text-neutral-900 antialiased"
        data-nonce={nonce}
      >
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Ana içeriğe atla
        </a>

        <NonceContext.Provider value={nonce}>
          <Navbar />
          <UtilityBar />

          {/* SPA rotalarında sayfa görüntüleme (minimum JS) */}
          <GAClient measurementId="G-J5YK10YLLC" />

          <main id="main">{children}</main>
          <Footer />
        </NonceContext.Provider>
      </body>
    </html>
  );
}
