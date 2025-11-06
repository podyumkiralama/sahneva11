// components/A11yExternalLink.jsx
"use client";

export default function A11yExternalLink({
  href,
  children,
  className = "",
  label,           // opsiyonel: ek açıklama
  rel = "noopener noreferrer",
  ...props
}) {
  // SR-okuyucu için "yeni sekmede açılır" uyarısı
  const srNote = " (yeni sekmede açılır)";
  const ariaLabel = label
    ? `${label}${srNote}`
    : typeof children === "string"
      ? `${children}${srNote}`
      : srNote;

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      {children}
      <span className="sr-only">{srNote}</span>
    </a>
  );
}
