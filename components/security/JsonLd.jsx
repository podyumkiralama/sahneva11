// components/security/JsonLd.jsx
import Script from "next/script";
import { headers } from "next/headers";

export default function JsonLd({ id, data }) {
  if (!data) {
    return null;
  }

  const nonce = headers().get("x-nonce") ?? undefined;

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
