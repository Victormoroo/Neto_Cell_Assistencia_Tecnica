import Link from "next/link";
import {
  ADDRESS,
  BUSINESS_NAME,
  CITY_REGION,
  GOOGLE_MAPS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  navItems
} from "@/config/business";
import { Logo } from "./Logo";

const services = [
  "Troca de tela",
  "Troca de bateria",
  "Conector de carga",
  "Reparo de placa",
  "Reparo em iPhone",
  "Celular molhado"
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.8fr_1fr]">
        <div>
          <Link href="#inicio" className="focus-ring inline-flex rounded-xl">
            <Logo inverted />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            {BUSINESS_NAME}. Conserto de celulares em {CITY_REGION}.
          </p>
          <p className="mt-4 text-sm font-bold text-white">
            Assistência técnica especializada em celulares de diversas marcas.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
            Links rápidos
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring w-fit rounded-md text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
            Serviços principais
          </h2>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <span key={service} className="text-sm text-white/70">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
            Contato
          </h2>
          <div className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
            <Link className="focus-ring w-fit rounded-md hover:text-white" href={WHATSAPP_URL}>
              {WHATSAPP_DISPLAY}
            </Link>
            <span>{ADDRESS}</span>
            <Link
              className="focus-ring w-fit rounded-md hover:text-white"
              href={INSTAGRAM_URL}
            >
              {INSTAGRAM_HANDLE}
            </Link>
            <Link
              className="focus-ring w-fit rounded-md hover:text-white"
              href={GOOGLE_MAPS_URL}
            >
              Google Maps
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Neto Cell Assistência Técnica. Todos os direitos reservados.</p>
          <p>Site institucional otimizado para contato e orçamento.</p>
        </div>
      </div>
    </footer>
  );
}
