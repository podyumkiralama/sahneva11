export default function FaqDetails({ items = [] }) {
  return (
    <div className="space-y-3">
      {items.map((q) => (
        <details key={q.q} className="group border border-neutral-200 rounded-xl bg-white p-4 open:shadow-md">
          <summary className="cursor-pointer list-none font-semibold text-neutral-900 group-open:text-blue-700">
            {q.q}
          </summary>
          <div className="mt-3 text-neutral-600">{q.a}</div>
        </details>
      ))}
    </div>
  );
}