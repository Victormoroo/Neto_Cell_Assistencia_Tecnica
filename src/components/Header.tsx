"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems, WHATSAPP_URL } from "@/config/business";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/92 shadow-sm backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href="#inicio"
          className="focus-ring rounded-xl"
          aria-label="Ir para o início"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-zinc-700 transition hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-red transition hover:-translate-y-0.5 hover:bg-red-700"
          >
            Chamar no WhatsApp
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-brand-dark lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-xl px-3 py-3 text-base font-semibold text-zinc-800 hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-2 rounded-full bg-brand-red px-5 py-3 text-center text-sm font-bold text-white shadow-red"
              onClick={() => setOpen(false)}
            >
              Chamar no WhatsApp
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
