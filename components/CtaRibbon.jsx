import Link from "next/link";

export default function CtaRibbon({
  title = "Etkinliğinizi üst seviyeye taşıyalım",
  subtitle = "2 saat içinde detaylı teklif gönderiyoruz.",
  primary = { href: "https://wa.me/905453048671", label: "WhatsApp Teklif" },
  secondary = { href: "/iletisim", label: "İletişim" },
}) {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700 text-white p-10">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{backgroundImage:"radial-gradient(600px 200px at 10% 10%, #fff, transparent), radial-gradient(600px 200px at 90% 90%, #fff, transparent)"}}/>
      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-black">{title}</h3>
        <p className="mt-2 text-white/90">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-neutral-900 font-semibold hover:scale-105 transition"
          >
            {primary.label}
          </a>
          <Link
            className="px-6 py-3 rounded-xl ring-1 ring-white/60 hover:bg-white/10 transition"
            href={secondary.href}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}