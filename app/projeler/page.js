// =============================================================
// FILE: lib/projects.js
// Sunucu tarafında (build-time) projeleri /app/projeler altından
// tarar; her klasördeki meta.json'u okur ve public/projeler/<slug>/cover.(webp|jpg|png)
// görselini otomatik eşler. Bu fonksiyonları yalnızca Server Component'lerde kullanın.
// =============================================================

import fs from "fs";
import path from "path";

const APP_DIR = process.cwd();
const PROJELER_DIR = path.join(APP_DIR, "app", "projeler");
const PUBLIC_COVERS_DIR = path.join(APP_DIR, "public", "projeler");

function isDir(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function readJSON(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

function findCover(slug) {
  const base = path.join(PUBLIC_COVERS_DIR, slug);
  const candidates = [
    path.join(base, "cover.webp"),
    path.join(base, "cover.avif"),
    path.join(base, "cover.jpg"),
    path.join(base, "cover.png"),
  ];
  for (const abs of candidates) {
    if (fs.existsSync(abs)) {
      const rel = "/projeler/" + slug + "/" + path.basename(abs);
      return rel;
    }
  }
  return null;
}

export function getAllProjectSlugs() {
  if (!isDir(PROJELER_DIR)) return [];
  // app/projeler klasöründeki alt klasörleri (dinamik sayfalar) oku, özel dosyaları ele.
  const entries = fs.readdirSync(PROJELER_DIR);
  return entries.filter((name) => {
    const full = path.join(PROJELER_DIR, name);
    // [slug] klasörleri ve dosyaları dışla; sadece klasör ve düz sayfa klasörleri
    if (!isDir(full)) return false;
    if (name.startsWith("(") && name.endsWith(")")) return false; // route grupları
    if (name.startsWith("_")) return false; // private
    return true;
  });
}

export function getProjects() {
  const slugs = getAllProjectSlugs();
  const items = slugs.map((slug) => {
    const metaPath = path.join(PROJELER_DIR, slug, "meta.json");
    const meta = readJSON(metaPath) || {};
    const cover = findCover(slug);

    return {
      slug,
      title: meta.title || slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()),
      date: meta.date || null,
      excerpt: meta.excerpt || "",
      tags: meta.tags || [],
      cover, // public yolu veya null
      published: meta.published !== false,
      order: typeof meta.order === "number" ? meta.order : 0,
      schema: meta.schema || {},
    };
  });

  return items
    .filter((p) => p.published)
    .sort((a, b) => (b.date?.localeCompare?.(a.date) ?? 0) || b.order - a.order);
}

export function getProject(slug) {
  const metaPath = path.join(PROJELER_DIR, slug, "meta.json");
  const meta = readJSON(metaPath) || {};
  const cover = findCover(slug);
  return { slug, cover, ...meta };
}

// =============================================================
// FILE: app/projeler/page.jsx
// Proje indeks sayfası (blog arşivi gibi). Server Component.
// =============================================================

import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const revalidate = 1800; // 30dk ISR

export const metadata = {
  title: "Projeler | Sahneva",
  description: "Gerçekleşen etkinlik ve kurulum projelerimizin arşivi. Sahne, podyum, LED ekran, ses-ışık uygulamaları.",
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
          <p className="mt-3 text-white/70 max-w-3xl">Gerçekleştirdiğimiz seçili projelerden örnekler.</p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Proje listesi">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30 focus-within:ring-white/40"
            >
              <article className="flex flex-col h-full">
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
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/60 text-sm">
                      Kapak görseli bulunamadı
                    </div>
                  )}
                </Link>

                <div className="p-4 flex-1 flex flex-col gap-2">
                  <h2 className="text-lg font-bold">
                    <Link href={`/projeler/${p.slug}`} className="hover:underline focus:outline-none">
                      {p.title}
                    </Link>
                  </h2>

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
                        <li key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">#{t}</li>
                      ))}
                    </ul>
                  )}

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
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// =============================================================
// FILE: app/projeler/[slug]/page.jsx (örnek şablon)
// Her proje için kendi klasörünüzde bu dosyayı oluşturun (örn: app/projeler/konser-acikhava/page.jsx)
// Aynı klasöre bir meta.json koyun. Kapak görseli ise /public/projeler/konser-acikhava/cover.webp
// =============================================================

import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/lib/projects";

export const revalidate = 1800;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = getProject(params.slug);
  if (!data) return {};
  const title = data.title || "Proje";
  const desc = data.excerpt || "Sahneva proje detayı";
  const url = `https://www.sahneva.com/projeler/${params.slug}`;
  return {
    title: `${title} | Proje – Sahneva`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: "article",
      images: data.cover ? [{ url: data.cover }] : [],
    },
  };
}

export default async function ProjectPage({ params }) {
  const data = getProject(params.slug);
  if (!data?.title) return notFound();

  return (
    <main id="main" className="min-h-screen bg-[#0b0f1a] text-white">
      <article className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
            {data.title}
          </h1>
          {data.date && (
            <p className="mt-2 text-white/70">
              <time dateTime={data.date}>{new Date(data.date).toLocaleDateString("tr-TR")}</time>
            </p>
          )}
        </header>

        {data.cover && (
          <figure className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8">
            <Image src={data.cover} alt={`${data.title} – kapak görseli`} fill className="object-cover" sizes="100vw" priority={false} />
          </figure>
        )}

        {data.contentHtml ? (
          // Eğer meta.json içine uzun HTML gömüyorsanız (önerilmez), tehlikeli render yapılabilir.
          <section dangerouslySetInnerHTML={{ __html: data.contentHtml }} className="prose prose-invert max-w-none" />
        ) : (
          <section className="prose prose-invert max-w-none">
            <p>{data.excerpt || "Proje açıklaması yakında."}</p>
          </section>
        )}

        {Array.isArray(data.gallery) && data.gallery.length > 0 && (
          <section aria-label="Proje Galerisi" className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={src} alt="Galeri görseli" fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
              </div>
            ))}
          </section>
        )}
      </article>
    </main>
  );
}

// =============================================================
// FILE: app/projeler/ornek-proje/meta.json (örnek)
// =============================================================
{
  "title": "Kurumsal Lansman – Haliç Kongre Merkezi",
  "date": "2025-10-12",
  "excerpt": "120 m² modüler podyum, 30 m² P3.9 LED ekran, line-array ses ve akıllı ışık rigging ile lansman kurulumu.",
  "tags": ["lansman", "LED", "podyum"],
  "published": true,
  "order": 5,
  "gallery": [
    "/projeler/ornek-proje/1.webp",
    "/projeler/ornek-proje/2.webp",
    "/projeler/ornek-proje/3.webp"
  ]
}

// =============================================================
// YAPILANDIRMA & NOTLAR
// -------------------------------------------------------------
// 1) Kapak görseli kuralı:
//    /public/projeler/<slug>/cover.webp  (ya da .avif/.jpg/.png)
//    Ek galeri görselleri de aynı klasörde olabilir.
// 2) Her proje klasörü: app/projeler/<slug> içinde page.jsx + meta.json
// 3) Liste sayfası (app/projeler/page.jsx) projeleri otomatik toplar.
// 4) ISR revalidate ile yeni klasör ekleyince yeniden yayınlandığında listeye düşer.
// 5) A11y: <ul role="list">, anlamlı alt metinler, <time dateTime> kullanımı.
// 6) SEO: metadata, OG, canonical; JSON-LD isterseniz meta.json içine schema alanı ekleyip page'de gömebiliriz.
// -------------------------------------------------------------
