// components/JsonLdService.jsx
"use client";

import Script from "next/script";

export default function JsonLdService({ site = "https://www.sahneva.com", service, images = [] }) {
  if (!service) return null;

  const imgs = images.length
    ? images.slice(0, 5).map((p) => site + p)
    : [site + (service.ogImage || service.img)];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    image: imgs,
    areaServed: "TR",
    provider: {
      "@type": "Organization",
      name: "Sahneva",
      url: site,
      telephone: "+90 545 304 8671",
      logo: site + "/img/logo.png",
    },
    keywords: service.keywords?.join(", "),
    url: `${site}/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.faqs?.map(({ q, a }) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: q, description: a },
      })),
    },
    mainEntityOfPage: `${site}/${service.slug}`,
  };

  return (
    <Script
      id={`ld-service-${service.slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}