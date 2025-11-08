export default function Timeline({ steps = [] }) {
  return (
    <ol className="relative border-s border-neutral-200 pl-6 space-y-8">
      {steps.map((s, i) => (
        <li key={i} className="ms-4">
          <span className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <h3 className="font-semibold text-neutral-900">{s.title}</h3>
          {s.time && <p className="text-xs text-neutral-500 mt-0.5">{s.time}</p>}
          <p className="mt-2 text-neutral-600">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}