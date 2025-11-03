import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";

// Font – preload=false (render-blocking değil)
const inter = Inter({
  subsets: ["latin"],
  preload: false,
  display: "optional",
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

// Metadata
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
  // middleware.ts’ten gelen nonce
  const nonce = headers().get("x-nonce") ?? undefined;
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-J5YK10YLLC";

  return (
    <html lang="tr" className={inter.className}>
      <head>
        {/* GA dosyalarını preconnect/preload – inline değil */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link
          rel="preload"
          href={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          as="script"
        />
        <link rel="preload" href="/ga-init.js" as="script" />
      </head>
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

        {/* GA – tamamı harici dosyalarda, inline yok */}
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          async
        ></script>
        <script
          src="/ga-init.js"
          defer
          data-ga-id={GA_ID}
        ></script>

        <main id="main">{children}</main>
        <Footer />

        {/* Basit bir noscript uyarısı (inline style YOK) */}
        <noscript>
          <p>Sahneva: Daha iyi bir deneyim için tarayıcınızda JavaScript’i etkinleştirin.</p>
        </noscript>
      </body>
    </html>
  );
}
