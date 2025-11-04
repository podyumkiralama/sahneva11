// components/security/JsonLd.jsx
import { headers } from "next/headers";

export default async function JsonLd({ id, data }) {
  if (!data) {
    return null;
  }

  const headerList = await headers();
  const nonce = headerList?.get("x-nonce") ?? undefined;

  const json = JSON.stringify(data);

  return (
    <script id={id} type="application/ld+json" nonce={nonce}>
      {json}
    </script>
  );
}
