import Image from "next/image";
import Link from "next/link";

const statHighlights = [
  { label: "Müşteri memnuniyeti", value: "%98", icon: "⭐" },
  { label: "Tamamlanan podyum projeleri", value: "300+", icon: "🏆" },
  { label: "Şehir", value: "81 il", icon: "🚚" },
];

export default function Hero({ hero, contactHref, secondaryHref }) {
  return (
    <section
      aria-labelledby="podyum-hero-heading"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <article className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 sm:py-28 lg:py-32">
        <header className="space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide">
            <span aria-hidden="true" className="text-lg">📍</span>
            İstanbul ve tüm Türkiye’de profesyonel podyum kiralama
          </p>
          <h1 id="podyum-hero-heading" className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.description}
          </p>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Sahneva uzman ekibi ile konser, lansman, düğün ve festival etkinlikleriniz için kaymaz kaplamalı modüler podyum sistemleri.
          </p>
        </header>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="WhatsApp üzerinden podyum kiralama teklifi al"
          >
            <span aria-hidden="true" className="text-xl">💬</span>
            Hemen teklif al
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            aria-label="Podyum kiralama paketlerini incele"
          >
            <span aria-hidden="true" className="text-xl">🎯</span>
            Paketleri incele
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {statHighlights.map(({ label, value, icon }) => (
            <li
              key={label}
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 text-center backdrop-blur"
            >
              <span aria-hidden="true" className="mb-2 block text-2xl">{icon}</span>
              <p className="text-sm font-medium uppercase tracking-wide text-white/70">{label}</p>
              <p className="text-2xl font-bold text-white">{value}</p>
            </li>
          ))}
        </ul>
      </article>

      <figure aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={hero.image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-950" />
      </figure>
    </section>
  );
}
