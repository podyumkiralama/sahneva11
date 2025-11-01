"use client";
import Link from "next/link";
export default function Navbar(){
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold">SAHNEVA</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}
