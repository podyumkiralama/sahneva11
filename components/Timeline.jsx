export default function Timeline({ steps = [] }) {
  return (
    <ol className="relative border-s border-neutral-200 pl-6 space-y-8" aria-label="Kurumsal organizasyon süreci">
      {steps.map((s, i) => (
        <li key={i} className="ms-4">
          <span className="absolute -start-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold">
            {i + 1}
          </span>
          <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
          <p className="text-neutral-600">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
