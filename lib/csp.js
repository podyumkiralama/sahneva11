// lib/csp.js
import { headers } from "next/headers";

export function getCspNonce() {
  return headers().get("x-nonce") ?? undefined;
}
