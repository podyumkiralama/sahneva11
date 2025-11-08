export default function FeatureGrid({ items = [] }) {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Öne çıkan özellikler"
    >
      {items.map((it, i) => (
        <article
          key={i}
          role="listitem"
          className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="text-3xl mb-3">{it.icon}</div>
          <h3 className="font-bold text-lg text-neutral-900">{it.title}</h3>
          <p className="mt-2 text-neutral-600">{it.desc}</p>
          {it.meta && (
            <p className="mt-3 text-sm text-neutral-500">{it.meta}</p>
          )}
        </article>
      ))}
    </div>
  );
}