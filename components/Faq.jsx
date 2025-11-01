export default function Faq(){
  const items = [
    {q: "Kurulum süresi nedir?", a: "Proje kapsamına göre aynı gün içerisinde kurulum yapıyoruz."},
    {q: "Teslimat bölgeleri?", a: "İstanbul başta olmak üzere Türkiye geneli hizmet veriyoruz."},
  ];
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Sık Sorulan Sorular</h2>
      <div className="mt-6 space-y-4">
        {items.map((it, i)=>(
          <details key={i} className="group border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">{it.q}</summary>
            <p className="mt-2 text-neutral-600">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
