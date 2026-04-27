import { CheckCircle2, ClipboardList, MessageCircle, PackageCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    text: "Conte o modelo do aparelho e o problema que está acontecendo."
  },
  {
    icon: ClipboardList,
    title: "Avaliamos o caso",
    text: "A equipe orienta o próximo passo e, quando necessário, realiza o diagnóstico técnico."
  },
  {
    icon: CheckCircle2,
    title: "Você aprova o orçamento",
    text: "Antes do reparo, você recebe uma explicação clara sobre o serviço e as opções disponíveis."
  },
  {
    icon: PackageCheck,
    title: "Entrega com teste",
    text: "O aparelho é testado antes da entrega e o serviço conta com garantia."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-spacing bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Processo simples"
          title="Como funciona"
          subtitle="Atendimento direto, orçamento explicado e reparo feito somente depois da sua aprovação."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white shadow-red">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-4xl font-black text-zinc-100">{index + 1}</span>
              </div>
              <h3 className="text-lg font-black text-brand-dark">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton href={WHATSAPP_URL}>Começar atendimento agora</CTAButton>
        </div>
      </div>
    </section>
  );
}
