import './globals.css';
import { headers } from 'next/headers';
import Script from 'next/script';

export const metadata = {
  title: { default: "Sahneva – Etkinlik Prodüksiyon & Organizasyon", template: "%s | Sahneva" },
  description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
};

export default function RootLayout({ children }) {
  const nonce = headers().get('x-csp-nonce') ?? undefined;

  return (
    <html lang="tr">
      <body>
        {/* Google Analytics (ID'yi güncelleyin) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" strategy="afterInteractive" nonce={nonce} />
        <Script id="ga-init" strategy="afterInteractive" nonce={nonce} dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-XXXX', { page_path: window.location.pathname });
        `}} />
        {children}
      </body>
    </html>
  );
}
