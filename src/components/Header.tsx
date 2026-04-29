"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/config/business";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="container relative">
        <div className="flex min-h-16 items-center justify-between gap-4 rounded-full border border-black/10 bg-white/90 px-4 py-2 shadow-[0_18px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-5">
          <Link
            href="#inicio"
            className="focus-ring rounded-full"
            aria-label="Ir para o início"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full bg-zinc-100/80 p-1 lg:flex"
            aria-label="Menu principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-brand-red hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-brand-dark shadow-sm lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <nav
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] grid gap-1 rounded-3xl border border-black/10 bg-white/95 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl lg:hidden"
            aria-label="Menu mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-zinc-800 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
