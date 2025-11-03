// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  preload: false,
  display: "optional",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

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
  const nonce = headers().get("x-nonce") || undefined;
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="tr" dir="ltr" className={inter.className}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Ana içeriğe atla
        </a>

        <Navbar />
        <UtilityBar />

        <div id="main" role="main" tabIndex={-1}>
          {children}
        </div>

        <Footer />

        {/* ✅ Vercel Analytics */}
        <Analytics />

        {/* ✅ Performance */}
        <SpeedInsights />

        {/* ✅ GA4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="ga-init" strategy="afterInteractive" nonce={nonce}>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
