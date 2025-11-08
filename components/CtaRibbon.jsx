import Link from "next/link";

export default function CtaRibbon({ phone = "+905453048671", whatsappUrl = "#" }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-xl md:text-2xl font-black text-neutral-900">
          Etkinliğiniz için <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">anahtar teslim</span> kurumsal çözüm.
        </h3>
        <p className="text-neutral-600">Teklif almak 1 dakikanızı alır.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={`tel:${phone}`} className="px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
          📞 Hemen Ara
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90">
          💬 WhatsApp Teklif
        </a>
        <Link href="/iletisim#teklif-formu" className="px-5 py-3 rounded-xl font-bold border-2 border-neutral-200 hover:border-blue-300">
          📝 Form ile Başvur
        </Link>
      </div>
    </div>
  );
}