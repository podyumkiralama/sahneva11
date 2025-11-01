"use client";
export default function ServicesTabs(){
  const items = [
    {title: "Sahne & Podyum", href: "/sahne-kiralama"},
    {title: "LED Ekran", href: "/led-ekran-kiralama"},
    {title: "Ses & Işık", href: "/ses-isik-sistemleri"},
    {title: "Çadır", href: "/cadir-kiralama"},
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i)=>(
        <a key={i} href={it.href} className="rounded-xl border p-5 hover:shadow-sm">
          <div className="font-semibold">{it.title}</div>
          <div className="text-xs text-neutral-500 mt-1">Detayları gör</div>
        </a>
      ))}
    </div>
  );
}
