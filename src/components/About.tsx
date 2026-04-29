import { CheckCircle2, Smartphone, Store, Wrench } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const bullets = [
  "Atendimento direto e humanizado",
  "Explicação clara antes do serviço",
  "Soluções para diversas marcas",
  "Opções de peças conforme orçamento",
  "Testes antes da entrega",
  "Compromisso com qualidade e confiança"
];

export function About() {
  return (
    <section id="sobre" className="section-spacing bg-zinc-50">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-6 text-white shadow-soft">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Store, label: "Loja física em Franca-SP" },
                { icon: Smartphone, label: "iPhone e Android" },
                { icon: Wrench, label: "Diagnóstico técnico" },
                { icon: CheckCircle2, label: "Serviços com garantia" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <item.icon className="mb-5 h-7 w-7 text-red-300" aria-hidden="true" />
                  <p className="text-lg font-black">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-brand-red p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-white/75">
                Neto Cell Assistência Técnica
              </p>
              <p className="mt-2 text-2xl font-black leading-tight">
                Atendimento técnico e humanizado para o cliente decidir com segurança.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Sobre a empresa"
            title="Sobre a Neto Cell Assistência Técnica"
          />
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            A Neto Cell Assistência Técnica atende Franca-SP e região com foco em
            conserto de celulares, diagnóstico técnico e atendimento transparente.
            A empresa busca oferecer uma experiência simples para o cliente:
            entender o problema, receber orientação clara e contar com uma solução
            adequada para o aparelho.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex min-h-12 items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold leading-5 text-zinc-800">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
