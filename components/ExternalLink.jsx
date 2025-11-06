// components/ExternalLink.jsx
"use client";

import clsx from "clsx";

export default function ExternalLink({
  href,
  children,
  className = "",
  title,
  rel,
  nofollow = false,
  me = false,
  ugc = false,
  newTab = true,          // target="_blank" default açık
  subtle = false,         // yazı rengini yumuşatmak için opsiyon
  withIcon = false,       // küçük ↗ ikon
  srNewTab = true,        // ekran okuyucuya “yeni sekmede” bildirimi
  ...rest
}) {
  const relSet = new Set(["noopener", "noreferrer"]);
  if (nofollow) relSet.add("nofollow");
  if (me) relSet.add("me");
  if (ugc) relSet.add("ugc");
  if (rel) rel.split(" ").forEach(r => r && relSet.add(r.trim()));
  const relAttr = Array.from(relSet).join(" ");

  const hasAria = typeof rest["aria-label"] === "string" && rest["aria-label"].trim().length > 0;

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={relAttr}
      title={title || (hasAria ? undefined : "Dış bağlantı")}
      {...rest}
      className={clsx(
        "inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded",
        subtle ? "text-inherit" : "text-blue-600 hover:text-blue-700",
        className
      )}
    >
      {children}
      {withIcon && <span aria-hidden="true" className="text-xs leading-none">↗</span>}
      {newTab && srNewTab && <span className="sr-only"> (yeni sekmede açılır)</span>}
    </a>
  );
}