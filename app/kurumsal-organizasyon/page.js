import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import FaqDetails from "@/components/FaqDetails";
import StatBar from "@/components/StatBar";
import CtaRibbon from "@/components/CtaRibbon";
import CaseGalleryClient from "@/components/CaseGalleryClient";

// ISR – günlük
export const revalidate = 86400;

const FEATURES = [
  { icon: "🎛️", title: "Tam Paket Üretim", desc: "Sahne, LED, ses-ışık, truss ve ekip koordinasyonu tek ekipten." },
  { icon: "⚡", title: "Hızlı Kurulum", desc: "İstanbul içi aynı gün; diğer illerde planlı gece kurulum." },
  { icon: "🛡️", title: "Güvenlik & Sigorta", desc: "Yüksekte çalışma, elektrik ve ekipman sigortaları eksiksiz." },
  { icon: "📐", title: "Modüler Tasarım", desc: "Milimetrik podyum, rampa, perdeleme ve kablolama." },
  { icon: "🔊", title: "Pro Ses & Işık", desc: "Line-array, dijital mixer; DMX sahne aydınlatması." },
  { icon: "🧰", title: "24/7 Teknik Ekip", desc: "Etkinlik boyunca teknik sorumlu ve yedekleme planı." },
];

const STEPS = [
  { title: "Keşif & Planlama", time: "Gün 0", desc: "Mekan ölçümü, yükleme planı, risk analizi ve iş programı." },
  { title: "Sahne & Truss Kurulumu", time: "Gün 1", desc: "Taşıyıcı sistemler, podyum ve perdeleme kurulumu." },
  { title: "Ses, Işık, LED Entegrasyonu", time: "Gün 1", desc: "Rigging, kablolama, haberleşme ve test." },
  { title: "Prova & Yayın", time: "Etkinlik", desc: "Soundcheck, ışık cue’ları ve yayın kontrolleri." },
  { title: "Söküm & Teslim", time: "Etkinlik sonrası", desc: "Saha temizlik ve güvenli söküm." },
];

const FAQ = [
  { q: "İstanbul dışına hizmet veriyor musunuz?", a: "Evet, Türkiye genelinde kurulum ekiplerimizle hizmet veriyoruz." },
  { q: "LED ekran pitch seçenekleriniz nedir?", a: "P2.5 iç mekan, P3.9 ve P4 iç/dış mekan stoklarımız mevcuttur." },
  { q: "Kurulum süresi ne kadar?", a: "Sahne ölçüsüne göre değişir; standart kurulum 4–8 saat aralığındadır." },
  { q: "Güvenlik tedbirleri?", a: "Yüksekte çalışma, elektrik ve alan çevreleme prosedürleri uygulanır." },
];

const STATS = [
  { label: "Tamamlanan Etkinlik", value: 1200, suffix: "+" },
  { label: "Şehir", value: 20, suffix: "+" },
  { label: "Memnuniyet", value: 98, suffix: "%" },
  { label: "Acil Müdahale", value: 7, suffix: "/24" },
];

const GALLERY = [
  "/img/kurumsal/1.webp",
  "/img/kurumsal/2.webp",
  "/img/kurumsal/3.webp",
  "/img/kurumsal/4.webp",
  "/img/kurumsal/5.webp",
  "/img/kurumsal/6.webp",
];

export const metadata = {
  title: "Kurumsal Organizasyon | Sahneva",
  description: "Kurumsal lansman, fuar, festival ve konserler için anahtar teslim etkinlik prodüksiyonu.",
  alternates: { canonical: "https://www.sahneva.com/kurumsal-organizasyon" },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10"
             style={{backgroundImage:"radial-gradient(800px 200px at 10% 10%, #fff, transparent), radial-gradient(800px 200px at 90% 90%, #fff, transparent)"}}/>
        <div className="container max-w-6xl mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Kurumsal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300">Organizasyon</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl">
            Sahne, LED ekran, ses-ışık ve truss sistemleriyle uçtan uca prodüksiyon. Keşiften yayına, tek ekip.
          </p>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Sahada Kanıtlı İş Akışı"
            title="Kurumsal etkinlikler için uçtan uca prodüksiyon"
            subtitle="Planlama, kurulum, prova ve yayın aşamalarını tek ekip yönetiyoruz."
          />
          <div className="mt-10">
            <FeatureGrid items={FEATURES} />
          </div>
        </div>
      </section>

      {/* ZAMAN ÇİZELGESİ */}
      <section className="py-16 bg-neutral-50">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Süreç Yönetimi"
            title="Şeffaf ve kontrollü bir kurulum süreci"
            subtitle="Mekan keşfi ile başlayan süreç, güvenli söküm ve teslimle tamamlanır."
          />
          <div className="mt-10">
            <Timeline steps={STEPS} />
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Sahadan Kareler"
            title="Gerçek işlerden seçilmiş örnekler"
            subtitle="Modüler podyum, line-array ses, DMX ışık ve LED sahne entegrasyonları."
          />
          <div className="mt-10">
            <CaseGalleryClient images={GALLERY} />
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="py-16 bg-neutral-50">
        <div className="container max-w-6xl mx-auto px-4">
          <StatBar stats={STATS} />
        </div>
      </section>

      {/* SSS */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="SSS"
            title="Sıkça sorulan sorular"
            subtitle="Proje ve stok detaylarıyla ilgili merak edilenler."
          />
          <div className="mt-8">
            <FaqDetails items={FAQ} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <CtaRibbon />
        </div>
      </section>
    </div>
  );
}