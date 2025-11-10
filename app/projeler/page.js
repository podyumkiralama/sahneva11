// app/projeler/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const revalidate = 1800;

export const metadata = {
  title: "Projeler | Sahneva",
  description:
    "Gerçekleştirdiğimiz seçili projelerden örnekler. Sahne, podyum, LED ekran, ses-ışık kurulumları.",
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
      <section className="mx-auto max-w-7xl px-4 pt-14 md:pt-16 pb-16">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
            Projeler
          </h1>
          <p className="mt-3 text-white/80">
            Gerçekleştirdiğimiz seçili projelerden örnekler.
          </p>
        </header>

        <ul
          role="list"
          aria-label="Proje listesi"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {projects.map((p) => (
            <li
              key={p.slug}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              <Link
                href={`/projeler/${p.slug}`}
                className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                title={`${p.title} projesini görüntüle`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  {p.cover ? (
                    <Image
                      src={p.cover}
                      alt={`${p.title} – kapak görseli`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/60 text-sm">
                      Kapak görseli bulunamadı
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col gap-2">
                  <h2 className="text-lg font-bold">{p.title}</h2>

                  {p.date && (
                    <time className="text-sm text-white/60" dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("tr-TR")}
                    </time>
                  )}

                  {p.excerpt && (
                    <p className="text-sm text-white/80 line-clamp-3">{p.excerpt}</p>
                  )}

                  {p.tags?.length > 0 && (
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
                  )}

                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 group-hover:bg-white/15">
                      Proje Detayı
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
