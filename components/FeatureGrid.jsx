export function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-blue-700">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function FeatureGrid({ items = [] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <FeatureCard key={it.title} {...it} />
      ))}
    </div>
  );
}