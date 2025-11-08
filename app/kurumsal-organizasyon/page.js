import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import FaqDetails from "@/components/FaqDetails";
import StatBar from "@/components/StatBar";
import CtaRibbon from "@/components/CtaRibbon";
import CaseGalleryClient from "@/components/CaseGalleryClient";

export const revalidate = 86400;

const PHONE = "+905453048671";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, kurumsal organizasyon için teklif almak istiyorum."
)}`;

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kurumsal Organizasyon Hizmetleri",
    "provider": {
      "@type": "Organization",
      "name": "Sahneva",
      "telephone": PHONE,
      "email": "info@sahneva.com",
      "url": "https://www.sahneva.com"
    },
    "areaServed": { "@type": "Country", "name": "Türkiye" },
    "serviceType": [
      "Lansman Organizasyonu",
      "Konferans & Seminer",
      "Fuar & Stand",
      "Festival & Açıkhava",
      "Kurumsal Kutlama"
    ],
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    "url": "https://www.sahneva.com/kurumsal-organizasyon"
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Anasayfa", "item": "https://www.sahneva.com" },
      { "@type": "ListItem", "position": 2, "name": "Kurumsal Organizasyon", "item": "https://www.sahneva.com/kurumsal-organizasyon" }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function CorporateEventsPage() {
  const features = [
    { icon: "🎤", title: "Profesyonel Sahne & Ses", desc: "Line-array, dijital miks, kablosuz mikrofon ve akustik planlama." },
    { icon: "🖥️", title: "LED Ekran & Yayın", desc: "P2.5–P3.9 iç/dış mekan, reji ve çoklu kamera kurulumları." },
    { icon: "💡", title: "Işık Tasarımı", desc: "Wash, beam, moving head, DMX programlama ve sahne dramatürjisi." },
    { icon: "🧱", title: "Truss & Rigging", desc: "ALU truss, motör, yük hesapları ve güvenlik sertifikalı kurulum." },
    { icon: "⛺", title: "Çadır & Altyapı", desc: "Hava koşullarına uygun çadır, platform, bariyer ve jeneratör." },
    { icon: "🧑‍💼", title: "Proje Yönetimi", desc: "Keşif, 3D yerleşim, risk analizi ve etkinlik akış planı." },
  ];

  const steps = [
    { title: "Keşif & Brief", desc: "Mekan analizi, hedefler ve bütçe netleşir." },
    { title: "Teknik Projelendirme", desc: "3D yerleşim, ekipman listesi ve zaman planı." },
    { title: "Kurulum & Test", desc: "Zamanında kurulum, ses/ışık/LED kalibrasyonları." },
    { title: "Operasyon & Reji", desc: "Etkinlik süresince kesintisiz teknik yönetim." },
    { title: "Söküm & Rapor", desc: "Düzenli söküm ve geri bildirim/iyileştirme raporu." },
  ];

  const stats = [
    { label: "Etkinlik/Yıl", value: "300+" },
    { label: "Şehir", value: "81" },
    { label: "Müşteri Memnuniyeti", value: "%99" },
    { label: "Ekipman", value: "1000+" },
  ];

  const faq = [
    { q: "Kurulum süreleri ne kadar?", a: "Mekana göre değişir; tipik kurulum 4–12 saat, büyük prodüksiyonlarda 1 gün." },
    { q: "Sigorta ve güvenlik nasıl?", a: "Tüm kurulumlar sertifikalı ekip tarafından yapılır; gerekli sigorta ve izin süreçleri yönetilir." },
    { q: "LED ekran parlaklığı ve çözünürlük?", a: "Dış mekan ≥5000 nits, iç mekan 1000–2000 nits; P2.5–P3.9 aralığında." },
    { q: "Ses şikayetleri / DB limitleri?", a: "Yerel yönetmeliklere uygun limitlerle limiters/SM58/line-array tuning uygulanır." },
  ];

  const gallery = [
    { src: "/img/kurumsal/1.webp", alt: "Kurumsal lansman sahnesi" },
    { src: "/img/kurumsal/2.webp", alt: "Konferans LED ekran ve kürsü" },
    { src: "/img/kurumsal/3.webp", alt: "Fuar standı truss ve ışık" },
    { src: "/img/kurumsal/4.webp", alt: "Festival sahnesi ve line-array" },
  ];

  return (
    <div className="bg-white">
      <JsonLd />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16 lg:pt-24">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
             style={{ backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,.25), transparent 40%), radial-gradient(ellipse at 70% 80%, rgba(255,255,255,.15), transparent 40%)" }} />
        <div className="relative z-10 container">
          <div className="max-w-3xl text-center mx-auto text-white">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/80 bg-white/10 rounded-full px-3 py-1">
              Kurumsal Organizasyon
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              Markanıza Yakışan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Etkinlik Deneyimi</span>
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Lansman, konferans, fuar ve şirket etkinliklerinde uçtan uca prodüksiyon.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE}`} className="px-5 py-3 rounded-xl font-bold bg-white text-slate-900 hover:opacity-90">📞 Hemen Ara</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90">💬 WhatsApp Teklif</a>
              <a href="/iletisim#teklif-formu" className="px-5 py-3 rounded-xl font-bold border-2 border-white/60 text-white hover:bg-white/10">📝 Form</a>
            </div>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="py-12 container">
        <StatBar stats={stats} />
      </section>

      {/* ÖZELLİKLER */}
      <section className="py-16 container">
        <SectionHeading
          kicker="Neden Sahneva?"
          title="Kurumsal etkinlikler için"
          highlight="tam kapsamlı"
          subtitle="Sahne, ses, ışık, LED ekran, truss ve reji — tek ekip, tek plan."
          align="left"
        />
        <div className="mt-10">
          <FeatureGrid items={features} />
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="py-16 container">
        <SectionHeading
          kicker="Süreç"
          title="Standartlaştırılmış"
          highlight="operasyon"
          subtitle="Planlamadan raporlamaya kadar şeffaf süreç yönetimi."
          align="left"
        />
        <div className="mt-10">
          <Timeline steps={steps} />
        </div>
      </section>

      {/* GALERİ (Client) */}
      <section className="py-16 container">
        <SectionHeading
          kicker="Portföy"
          title="Yakın dönemde tamamladığımız"
          highlight="projeler"
          subtitle="Seçili kurumsal etkinlik görsellerimiz."
        />
        <div className="mt-10">
          <CaseGalleryClient images={gallery} />
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 container">
        <SectionHeading
          kicker="SSS"
          title="Sık sorulan"
          highlight="sorular"
          subtitle="Karar vermeden önce en çok merak edilenler."
          align="left"
        />
        <div className="mt-10">
          <FaqDetails items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container">
        <CtaRibbon phone={PHONE} whatsappUrl={WHATSAPP_URL} />
      </section>
    </div>
  );
}