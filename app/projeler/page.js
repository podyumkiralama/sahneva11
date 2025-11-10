// app/blog/page.js
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-posts";

export const runtime = "nodejs";
export const revalidate = 1800;

export const metadata = {
  title: "Blog | Sahneva",
  description:
    "Sahne ve etkinlik teknolojileri, sektör haberleri, ipuçları ve deneyimlerimiz hakkında güncel yazılar.",
  alternates: { canonical: "https://www.sahneva.com/blog" },
  openGraph: {
    title: "Blog | Sahneva",
    description: "Sahne teknolojileri ve etkinlik sektörü hakkında yazılar.",
    url: "https://www.sahneva.com/blog",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <main id="main" className="min-h-screen bg-[#0b0f1a] text-white">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
            Blog
          </h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Sahne teknolojileri, etkinlik ipuçları ve sektör deneyimlerimiz hakkında güncel yazılar.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Blog yazıları listesi"
        >
          {posts.map((post) => (
            <li
              key={post.slug}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30"
            >
              <article className="flex flex-col h-full">
                {/* Kapak görseli */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[16/10] overflow-hidden rounded-t-2xl block focus:outline-none"
                  title={`${post.title} yazısını oku`}
                  aria-label={`${post.title} blog yazısı detay sayfasına git`}
                >
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={`${post.title} – kapak görseli`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/60 text-sm bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                      Blog Görseli
                    </div>
                  )}
                </Link>

                {/* İçerik alanı */}
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <h2 className="text-lg font-bold line-clamp-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline focus:outline-none"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <div className="flex items-center gap-3 text-sm text-white/60">
                    {post.date && (
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("tr-TR")}
                      </time>
                    )}
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <span>•</span>
                        <span>{post.readTime} dk okuma</span>
                      </span>
                    )}
                  </div>

                  {post.excerpt ? (
                    <p className="text-sm text-white/80 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  ) : null}

                  {Array.isArray(post.categories) && post.categories.length > 0 ? (
                    <ul className="mt-1 flex flex-wrap gap-2" aria-label="Kategoriler">
                      {post.categories.map((category) => (
                        <li
                          key={category}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Okuma butonu */}
                  <div className="mt-auto pt-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 min-h-[40px]"
                      title={`${post.title} yazısını oku`}
                      aria-label={`${post.title} – Yazıyı Oku`}
                    >
                      <span>Yazıyı Oku</span>
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
