"use client";

import { useEffect, useState } from "react";

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

export default function StatBar({ stats = [] }) {
  const [vals, setVals] = useState(stats.map(() => 0));

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 1200);
      setVals(stats.map(s => Math.round(s.value * easeOut(p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stats]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl bg-white border border-neutral-200 p-6 text-center">
          <div className="text-3xl font-black text-neutral-900">{vals[i]}{s.suffix}</div>
          <p className="text-sm text-neutral-500 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}