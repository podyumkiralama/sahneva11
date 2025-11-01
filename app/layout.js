// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

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

// JSON-LD sadece anasayfada ("/") basılsın
function StructuredDataHomeOnly() {
  "use client";
  const { usePathname } = require("next/navigation");
  const pathname = usePathname();
  if (pathname !== "/") return null;

  const ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahneva",
    url: "https://www.sahneva.com",
    logo: "https://www.sahneva.com/img/logo.png",
    telephone: "+905453048671",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr"],
      },
    ],
  };

  const WEBSITE = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sahneva",
    url: "https://www.sahneva.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.sahneva.com/aramalar?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const SERVICE = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Etkinlik Ekipmanları Kiralama",
    description:
      "Türkiye genelinde sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama; kurulum ve teknik operasyon.",
    url: "https://www.sahneva.com",
    areaServed: { "@type": "Country", name: "TR" },
    serviceType: [
      "Sahne Kiralama",
      "Podyum Kiralama",
      "LED Ekran Kiralama",
      "Ses Sistemi Kiralama",
      "Işık Sistemi Kiralama",
      "Etkinlik Prodüksiyon",
    ],
    provider: {
      "@type": "Organization",
      name: "Sahneva",
      url: "https://www.sahneva.com",
      telephone: "+905453048671",
      logo: "https://www.sahneva.com/img/logo.png",
    },
  };

  return (
    <>
      <script id="ld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
      <script id="ld-website" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE) }} />
      <script id="ld-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Ana içeriğe atla
        </a>

        <Navbar />

        {/* Rich Snippet’ler sadece /’ta */}
        <StructuredDataHomeOnly />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
