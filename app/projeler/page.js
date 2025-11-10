// app/projeler/page.js
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const runtime = "nodejs";
export const revalidate = 1800;

export const metadata = {
  title: "Projeler | Sahneva",
  description:
    "Gerçekleşen etkinlik ve kurulum projelerimizin arşivi. Sahne, podyum, LED ekran, ses-ışık uygulamaları.",
  alternates: { canonical: "https://www.sahneva.com/projeler" },
  openGraph: {
    title: "Projeler | Sahneva",
    description: "Gerçekleşen projelerimizin arşivi.",
    url: "https://www.sahneva.com/projeler",
    type: "website",
  },
};

export default async function ProjectsIndexPage() {
  const projects = getProjects();

  return (
    <main id="main" className="min-h-screen bg-[#0b0f1a] text-white">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
            Projeler
          </h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Gerçekleştirdiğimiz seçili projelerden örnekler.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          role="list"
          aria-label="Proje listesi"
        >
          {projects.map((p) => (
            <li
              key={p.slug}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30"
            >
              <article className="flex flex-col h-full">
                {/* Kapak görseli (linkli) */}
                <Link
                  href={`/projeler/${p.slug}`}
                  className="relative aspect-[16/10] overflow-hidden rounded-t-2xl block focus:outline-none"
                  title={`${p.title} projesini görüntüle`}
                  aria-label={`${p.title} projesi detay sayfasına git`}
                >
                  {p.cover ? (
                    <Image
                      src={p.cover}
                      alt={`${p.title} – kapak görseli`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/60 text-sm">
                      Kapak görseli bulunamadı
                    </div>
                  )}
                </Link>

                {/* Metin alanı */}
                <div className="p-4 flex-1 flex flex-col gap-2">
                  <h2 className="text-lg font-bold">
                    <Link
                      href={`/projeler/${p.slug}`}
                      className="hover:underline focus:outline-none"
                    >
                      {p.title}
                    </Link>
                  </h2>

                  {p.date ? (
                    <time className="text-sm text-white/60" dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("tr-TR")}
                    </time>
                  ) : null}

                  {p.excerpt ? (
                    <p className="text-sm text-white/80 line-clamp-3">{p.excerpt}</p>
                  ) : null}

                  {Array.isArray(p.tags) && p.tags.length > 0 ? (
                    <ul className="mt-1 flex flex-wrap gap-2" aria-label="Etiketler">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="text-xs px-2 py-1 rounded-full bg-white/10"
                        >
                          #{t}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/projeler/${p.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 min-h-[40px]"
                      title={`${p.title} – detayları görüntüle`}
                      aria-label={`${p.title} – Proje Detayı`}
                    >
                      <span>Proje Detayı</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
