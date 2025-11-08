// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import Script from "next/script";
import { Inter } from "next/font/google";

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
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı kurulum, profesyonel teknik ekip, uygun fiyat. Hemen teklif alın!",
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

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-J5YK10YLLC";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" dir="ltr" className={inter.className}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          src="/ga-init.js"
          strategy="afterInteractive"
          data-ga-id={GA_MEASUREMENT_ID}
        />
        <a
          href="#main-content"
          aria-label="Ana içeriğe hızlı geçiş"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition"
        >
          Ana içeriğe atla
        </a>

        <UtilityBar />
        <Navbar />

        <main
          id="main-content"
          tabIndex={-1}
          role="main"
          className="min-h-[60vh] focus:outline-none"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
