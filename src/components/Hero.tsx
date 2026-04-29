import {
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  CreditCard,
  MapPin,
  ShieldCheck,
  Smartphone,
  Wrench
} from "lucide-react";
import { CITY_REGION, WHATSAPP_URL } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { WhatsAppIcon } from "./WhatsAppIcon";

const highlights = [
  { icon: MapPin, label: "Atendimento em Franca-SP e região" },
  { icon: WhatsAppIcon, label: "Orçamento rápido pelo WhatsApp" },
  { icon: ShieldCheck, label: "Garantia nos serviços" },
  { icon: CreditCard, label: "Pix, débito e crédito" }
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(227,6,19,0.13),transparent_28%),linear-gradient(135deg,#ffffff_0%,#ffffff_42%,#111111_42%,#050505_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 tech-grid opacity-40" />

      <div className="container grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.04fr_0.96fr] lg:pb-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-brand-red">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Assistência técnica em {CITY_REGION}
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.04] text-white mix-blend-difference sm:text-5xl lg:text-6xl">
            Conserto de celular em Franca-SP com rapidez, qualidade e confiança
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white mix-blend-difference">
            A Neto Cell Assistência Técnica cuida do seu aparelho com diagnóstico
            claro, atendimento especializado e soluções para iPhone, Samsung,
            Motorola, Xiaomi e outras marcas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WHATSAPP_URL} ariaLabel="Solicitar orçamento no WhatsApp">
              Solicitar orçamento no WhatsApp
            </CTAButton>
            <CTAButton href="#servicos" variant="secondary">
              Ver serviços
            </CTAButton>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/90 p-3 shadow-sm backdrop-blur"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-zinc-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/5 sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Diagnóstico
                </p>
                <p className="text-sm font-black text-brand-dark">claro e técnico</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-brand-dark p-5 shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-5 rounded-[1.55rem] border border-white/10" />
            <div className="relative overflow-hidden rounded-[1.55rem] bg-zinc-950 px-5 py-6 text-white">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-red/35 blur-3xl" />
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand-red" />
                  <span className="text-sm font-black">Neto Cell</span>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                  técnico online
                </span>
              </div>

              <div className="rounded-3xl bg-white p-4 text-brand-dark shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark text-white">
                    <Smartphone className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500">Aparelho em avaliação</p>
                    <p className="text-xl font-black">Reparo orientado</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ["Tela e touch", "avaliação de peça"],
                    ["Carga e bateria", "teste de consumo"],
                    ["Desbloqueio de sistemas", "orientação segura"]
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between rounded-2xl border border-black/10 bg-zinc-50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-red" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-black">{title}</p>
                          <p className="text-xs text-zinc-500">{text}</p>
                        </div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <Clock3 className="mb-3 h-5 w-5 text-red-300" aria-hidden="true" />
                  <p className="text-sm font-bold">Atendimento rápido</p>
                  <p className="mt-1 text-xs text-white/60">comece pelo WhatsApp</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <BatteryCharging className="mb-3 h-5 w-5 text-red-300" aria-hidden="true" />
                  <p className="text-sm font-bold">Testes antes da entrega</p>
                  <p className="mt-1 text-xs text-white/60">mais transparência</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-4 rounded-2xl bg-brand-red p-4 text-white shadow-red">
            <p className="text-xs font-bold uppercase tracking-wide text-white/75">
              foco em confiança
            </p>
            <p className="text-lg font-black">serviço com garantia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
