import {
  Banknote,
  ClipboardCheck,
  PackageCheck,
  ShieldCheck,
  Store,
  Truck,
  Wrench
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppIcon } from "./WhatsAppIcon";

const differentials = [
  { icon: WhatsAppIcon, title: "Atendimento rápido pelo WhatsApp" },
  { icon: Store, title: "Loja em Franca-SP" },
  { icon: Truck, title: "Retirada, entrega e atendimento na loja" },
  { icon: ClipboardCheck, title: "Diagnóstico técnico" },
  { icon: ShieldCheck, title: "Garantia nos serviços" },
  { icon: Wrench, title: "Peças e materiais de qualidade" },
  { icon: Banknote, title: "Pagamento via Pix, débito e crédito" },
  { icon: PackageCheck, title: "Comunicação clara antes do reparo" }
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-spacing relative overflow-hidden bg-brand-dark text-white"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-red" />
      <div className="container relative">
        <SectionTitle
          eyebrow="Confiança no reparo"
          title="Por que escolher a Neto Cell?"
          subtitle="Uma assistência técnica em Franca-SP com atendimento objetivo, opções claras e foco em resolver o problema do seu celular com responsabilidade."
          inverted
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-base font-black leading-6">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
