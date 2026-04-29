import { Home, MapPin, Truck } from "lucide-react";
import { WHATSAPP_URL } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppIcon } from "./WhatsAppIcon";

const options = [
  {
    icon: MapPin,
    title: "Atendimento na loja",
    text: "Leve seu aparelho para avaliação presencial no endereço da Neto Cell."
  },
  {
    icon: Home,
    title: "Retirada/coleta",
    text: "Consulte a possibilidade de retirada conforme sua região e o tipo de serviço."
  },
  {
    icon: Truck,
    title: "Delivery/entrega",
    text: "Combine opções de entrega para facilitar o recebimento do aparelho."
  },
  {
    icon: WhatsAppIcon,
    title: "Orientação pelo WhatsApp",
    text: "Envie modelo, fotos quando útil e descreva o problema para iniciar o atendimento."
  }
];

export function AttendanceOptions() {
  return (
    <section className="section-spacing bg-zinc-50">
      <div className="container">
        <SectionTitle
          eyebrow="Conveniência"
          title="Você escolhe a melhor forma de atendimento"
          subtitle="Consulte a disponibilidade para sua região e para o tipo de serviço necessário."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <article
              key={option.title}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-red">
                <option.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-brand-dark">{option.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{option.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton href={WHATSAPP_URL}>Ver disponibilidade</CTAButton>
        </div>
      </div>
    </section>
  );
}
