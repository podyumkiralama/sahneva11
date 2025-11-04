// components/security/AnalyticsScripts.jsx
import Script from "next/script";
import { headers } from "next/headers";

const DEFAULT_GA_ID = "G-J5YK10YLLC";

export default function AnalyticsScripts({
  gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
} = {}) {
  const headerList = headers();
  const nonce = headerList?.get("x-nonce") ?? undefined;

  const resolvedGaId = gaId || undefined;
  const resolvedGtmId = gtmId || undefined;

  if (!resolvedGaId && !resolvedGtmId) {
    return null;
  }

  return (
    <>
      {resolvedGaId ? (
        <>
          <Script
            id="ga-loader"
            nonce={nonce}
            src={`https://www.googletagmanager.com/gtag/js?id=${resolvedGaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            nonce={nonce}
            src="/ga-init.js"
            strategy="afterInteractive"
            data-ga-id={resolvedGaId}
          />
        </>
      ) : null}
      {resolvedGtmId ? (
        <Script
          id="gtm-init"
          nonce={nonce}
          src="/gtm-init.js"
          strategy="afterInteractive"
          data-gtm-id={resolvedGtmId}
        />
      ) : null}
    </>
  );
}
