export default function SectionHeading({
  eyebrow = "",
  title,
  subtitle = "",
  align = "center",
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600/90 bg-blue-50 px-3 py-1 rounded-full"
          aria-label={eyebrow}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-600 leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}