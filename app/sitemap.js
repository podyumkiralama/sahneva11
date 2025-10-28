// app/sitemap.js
import { services, projects } from "@/lib/data";

const SITE = "https://www.sahneva.com";
const abs = (p) => (p?.startsWith("http") ? p : `${SITE}${p}`);
const NOW_ISO = new Date().toISOString();

// ❶ Statik sayfalar
const STATIC_PAGES = [
  { path: "/",                       lastMod: NOW_ISO, change: "weekly",  pr: 1.0 },
  { path: "/hizmetler",              lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/podyum-kiralama",        lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/led-ekran-kiralama",     lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/ses-isik-sistemleri",    lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/cadir-kiralama",         lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/masa-sandalye-kiralama", lastMod: NOW_ISO, change: "weekly",  pr: 0.8 },
  { path: "/sahne-kiralama",         lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/hakkimizda",             lastMod: NOW_ISO, change: "yearly",  pr: 0.6 },
  { path: "/iletisim",               lastMod: NOW_ISO, change: "yearly",  pr: 0.6 },
  { path: "/sss",                    lastMod: NOW_ISO, change: "monthly", pr: 0.7 },
];

// ❷ Sayfa bazlı görseller (isteğe bağlı)
const IMAGE_MAP = {
  "/": ["/img/hero-bg.webp"],
  "/podyum-kiralama": [
    "/img/hizmet-podyum.webp",
    "/img/galeri/podyum-kiralama-1.webp",
  ],
  "/led-ekran-kiralama": [
    "/img/hizmet-led-ekran.webp",
    "/img/galeri/led-ekran-kiralama-1.webp",
  ],
  "/cadir-kiralama": [
    "/img/hizmet-cadir.webp",
    "/img/galeri/cadir-kiralama-1.webp",
  ],
  "/sahne-kiralama": ["/img/hizmet-sahne.webp"],
  "/ses-isik-sistemleri": ["/img/hizmet-sesisik.webp"],
  "/masa-sandalye-kiralama": ["/img/hizmet-masa.webp"],
  "/hizmetler": ["/img/hizmetler-ust.webp"],
  "/hakkimizda": ["/img/hakkimizda.webp"],
};

// ❸ services → dinamik
function dynamicFromServices() {
  const seen = new Set(STATIC_PAGES.map((s) => s.path));
  return (services ?? [])
    .map((s) => ({
      path: `/${s.slug}`,
      lastMod: s?.updatedAt ?? NOW_ISO,
      change: "weekly",
      pr: 0.9,
    }))
    .filter((x) => !seen.has(x.path));
}

// ❹ projects → dinamik
function dynamicFromProjects() {
  return (projects ?? []).map((p) => ({
    path: `/projeler/${p.slug}`,
    lastMod: p?.updatedAt ?? NOW_ISO,
    change: p?.changeFrequency ?? "monthly",
    pr: p?.priority ?? 0.8,
    images: (p?.images ?? []).map(abs),
  }));
}

// ❺ Next.js sitemap çıktısı
export default function sitemap() {
  const base = [...STATIC_PAGES, ...dynamicFromServices()];
  const proj = dynamicFromProjects();

  const baseWithImages = base.map(({ path, lastMod, change, pr }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images: (IMAGE_MAP[path] ?? []).map(abs),
  }));

  const projectItems = proj.map(({ path, lastMod, change, pr, images }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images,
  }));

  return [...baseWithImages, ...projectItems];
}
