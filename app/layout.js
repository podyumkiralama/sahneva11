// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBarLazy from "../components/UtilityBarLazy";

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
  return (
    <html lang="tr" dir="ltr">
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased">

        {/* Skip link (sayfa içindeki #main-content <main>’e gider) */}
        <a href="#main-content" className="skip-link">
          Ana içeriğe atla
        </a>

        {/* Üst bileşenler */}
        <UtilityBarLazy />
        <Navbar />

        {/* DİKKAT: Layout içinde <main> yok; children sadece 1 kez render edilir */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
