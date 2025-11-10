import Link from "next/link";

const formatTRY = (value) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);

export default function Packages({ packages, contactHref }) {
  return (
    <section
      id="paketler"
      aria-labelledby="paketler-heading"
      className="bg-slate-50 py-20"
    >
      <article className="mx-auto max-w-6xl px-4">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="paketler-heading" className="text-3xl font-black text-slate-900 sm:text-4xl">
            Podyum Kiralama Paketleri
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Konser, lansman ve düğün gibi etkinlikler için hazır modüler podyum paketleri. Hepsi kaymaz kaplama ve profesyonel kurulum içerir.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <header className="space-y-3 border-b border-slate-100 px-6 py-6">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  <span aria-hidden="true">{pkg.badge}</span>
                  <span className="sr-only">Paket etiketi</span>
                </p>
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <p className="text-sm text-slate-600">{pkg.note}</p>
                <dl className="flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-lg">📐</span>
                    <dt className="font-semibold">Ölçü:</dt>
                    <dd>{pkg.specs.dimensions}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-lg">📏</span>
                    <dt className="font-semibold">Alan:</dt>
                    <dd>{pkg.specs.area} m²</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-lg">⬆️</span>
                    <dt className="font-semibold">Yükseklik:</dt>
                    <dd>{pkg.specs.height}</dd>
                  </div>
                </dl>
              </header>

              <div className="px-6 py-6">
                <h4 className="text-lg font-semibold text-slate-900">Paket içeriği</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-1 text-emerald-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <footer className="mt-auto space-y-4 border-t border-slate-100 px-6 py-6">
                <p className="text-2xl font-bold text-slate-900">
                  {formatTRY(pkg.price)} <span className="text-sm font-normal text-slate-500">+ KDV</span>
                </p>
                <Link
                  href={`${contactHref}&package=${encodeURIComponent(pkg.name)}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                  aria-label={`${pkg.name} paketi için teklif iste`}
                >
                  <span aria-hidden="true">💬</span>
                  Bu paket için teklif al
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
