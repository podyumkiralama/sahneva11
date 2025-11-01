"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
];

export default function UtilityBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const s = window.scrollY > 100;
        setScrolled(prev => (prev !== s ? s : prev));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`w-full backdrop-blur-sm transition-all ${scrolled ? "bg-white/80 shadow" : "bg-transparent"}`} aria-label="Yardımcı menü">
      <div className="container mx-auto px-4 py-2 flex items-center gap-4">
        <Link href="/" className="font-bold">Sahneva</Link>
        <ul className="flex items-center gap-3 text-sm">
          {ROUTES.map(r => (
            <li key={r.href}><Link href={r.href} className="hover:underline">{r.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
