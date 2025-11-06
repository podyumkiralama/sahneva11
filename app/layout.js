// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import UtilityBar from "../components/UtilityBar";
import { headers } from "next/headers"; // 👈 EKLE

const inter = Inter({ subsets: ["latin"], preload: false, display: "optional", fallback: ["system-ui","-apple-system","Segoe UI","Roboto","Arial","sans-serif"], adjustFontFallback: true });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

export const metadata = {
  metadataBase: new URL("https://www.sahneva.com"),
  title: { default: "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva", template: "%s | Sahneva" },
  description: "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri kiralama ve profesyonel kurulum. Hızlı keşif, teknik ekip ve 7/24 destek.",
  alternates: { canonical: "https://www.sahneva.com" },
  openGraph: {
    title: "Sahneva – Profesyonel Sahne & Etkinlik Teknolojileri",
    description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli hızlı kurulum ve profesyonel teknik destek.",
    url: "https://www.sahneva.com",
    siteName: "Sahneva",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce") || ""; // 👈 middleware’ın koyduğu nonce’ı al

  return (
    <html lang="tr" dir="ltr" className={inter.className}>
      <head>
        {/* 👇 Script’lere client tarafta erişebilmemiz için nonce’ı meta olarak yayıyoruz */}
        <meta name="csp-nonce" content={nonce} />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg">
          Ana içeriğe atla
        </a>
        <UtilityBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
