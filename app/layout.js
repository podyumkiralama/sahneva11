// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0f1a",
};

export const metadata = {
  metadataBase: new URL("https://www.sahneva.com"),
  title: {
    default: "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva",
    template: "%s | Sahneva",
  },
  description:
    "Türkiye genelinde sahne, podyum, LED ekran ve ses-ışık sistemleri kiralama. Kurulum ve teknik operasyon dahil profesyonel prodüksiyon.",
  alternates: { canonical: "https://www.sahneva.com" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-white text-neutral-900 antialiased">
        <a href="#content" className="skip-link">İçeriğe atla</a>
        <UtilityBar />
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
