import Link from "next/link";

export default function CTA({ contactHref }) {
  return (
    <section aria-labelledby="podyum-cta-heading" className="bg-slate-900 py-20 text-white">
      <article className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center">
        <header className="space-y-4">
          <h2 id="podyum-cta-heading" className="text-3xl font-black sm:text-4xl">
            Podyum kiralama projeniz için uzman ekip
          </h2>
          <p className="text-lg text-white/70">
            Sahneva; ses, ışık, LED ekran ve çadır kiralama hizmetleri ile entegre çalışan podyum çözümleri sunar. Bir sonraki organizasyonunuz için tek noktadan profesyonel destek alın.
          </p>
        </header>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href={contactHref}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            aria-label="WhatsApp üzerinden podyum kiralama danışmanlığı al"
          >
            <span aria-hidden="true" className="text-xl">📲</span>
            Uzmanla görüş
          </Link>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            aria-label="Sahneva podyum kiralama projelerini görüntüle"
          >
            <span aria-hidden="true" className="text-xl">📁</span>
            Referans projeler
          </Link>
        </div>
      </article>
    </section>
  );
}
