// components/security/JsonLd.jsx
import { headers } from "next/headers";

export default function JsonLd({ id, data }) {
  if (!data) {
    return null;
  }

  const headerList = headers();
  const nonce = headerList?.get("x-nonce") ?? undefined;

  return (
    <script
      id={id}
      type="application/ld+json"
      nonce={nonce}
      // JSON.stringify güvenli veri üretir; nonce CSP uyumluluğunu sağlar.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
