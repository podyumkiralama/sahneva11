"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GAClient({ measurementId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag || !measurementId) return;

    const page_path = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname || "/";

    window.gtag("config", measurementId, {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams, measurementId]);

  return null;
}
