export default function StatBar({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 p-6 text-white">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl md:text-4xl font-black">{s.value}</div>
          <div className="text-white/80">{s.label}</div>
        </div>
      ))}
    </div>
  );
}