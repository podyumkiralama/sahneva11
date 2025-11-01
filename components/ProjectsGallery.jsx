"use client";
export default function ProjectsGallery(){
  const imgs = ["/img/p1.webp","/img/p2.webp","/img/p3.webp","/img/p4.webp"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {imgs.map((src, i)=>(
        <div key={i} className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden" aria-label="Proje görseli placeholder" />
      ))}
    </div>
  );
}
