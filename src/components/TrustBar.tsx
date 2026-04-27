import { ClipboardCheck, Gauge, ShieldCheck, Wrench } from "lucide-react";

const items = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico técnico",
    text: "Avaliação para entender a causa do problema antes do reparo."
  },
  {
    icon: Wrench,
    title: "Peças conforme orçamento",
    text: "Opções indicadas conforme necessidade, modelo e orçamento aprovado."
  },
  {
    icon: Gauge,
    title: "Atendimento rápido",
    text: "Comece pelo WhatsApp e receba orientação para o seu aparelho."
  },
  {
    icon: ShieldCheck,
    title: "Garantia nos serviços",
    text: "Reparos realizados com responsabilidade e garantia conforme o serviço."
  }
];

export function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-brand-dark py-6 text-white">
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 rounded-2xl p-2">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-300">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base font-black">{item.title}</h2>
              <p className="mt-1 text-sm leading-6 text-white/65">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
