"use client";

import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a className="text-xl font-black tracking-[-0.08em] text-brand" href="#home" aria-label="Seksan Chaina home">SC<span className="text-accent">.</span></a>
        <button className="rounded-lg px-3 py-2 text-sm font-bold text-brand md:hidden" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
        <nav id="primary-navigation" className={`${open ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-5 border-b border-slate-200 bg-white px-5 py-5 text-sm font-bold text-slate-600 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`} aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="transition hover:text-brand">{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
