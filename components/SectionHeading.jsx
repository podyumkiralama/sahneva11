export default function SectionHeading({ kicker, title, highlight, subtitle, align = "center" }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      {kicker && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700/80 bg-blue-50 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" aria-hidden="true" />
    </div>
  );
}
