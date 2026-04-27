import {
  AtSign,
  Clock3,
  CreditCard,
  MapPinned,
  MessageCircle,
  Navigation
} from "lucide-react";
import {
  ADDRESS,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PAYMENT_METHODS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL
} from "@/config/business";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";

const contactItems = [
  { icon: MessageCircle, title: "WhatsApp", text: WHATSAPP_DISPLAY },
  { icon: MapPinned, title: "Endereço", text: ADDRESS },
  { icon: Clock3, title: "Horário", text: BUSINESS_HOURS },
  { icon: AtSign, title: "Instagram", text: INSTAGRAM_HANDLE },
  { icon: CreditCard, title: "Pagamento", text: PAYMENT_METHODS.join(", ") }
];

export function Contact() {
  return (
    <section
      id="contato"
      className="section-spacing relative overflow-hidden bg-brand-dark text-white"
    >
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container relative">
        <SectionTitle
          eyebrow="Contato"
          title="Fale com a Neto Cell"
          subtitle="Precisa consertar seu celular? Chame agora no WhatsApp e receba orientação para o seu caso."
          inverted
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <div className="grid gap-4">
              {contactItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href={WHATSAPP_URL}>Chamar no WhatsApp</CTAButton>
              <CTAButton href={GOOGLE_MAPS_URL} variant="light">
                Ver no Google Maps
              </CTAButton>
              <CTAButton href={INSTAGRAM_URL} variant="light">
                Abrir Instagram
              </CTAButton>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white text-brand-dark shadow-2xl">
            <div className="flex h-full min-h-[360px] flex-col justify-between bg-[linear-gradient(135deg,#f7f7f8_0%,#ffffff_48%,#fee2e2_100%)] p-8">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white shadow-red">
                  <Navigation className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black">Mapa e localização</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600">
                  Av. José Pimenta Sobrinho, 180 - Parque das Esmeraldas,
                  Franca - SP. O layout já está preparado para receber um embed
                  real do Google Maps quando desejado.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-sm font-bold text-zinc-500">Abrir rota</p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-base font-black text-brand-dark">
                    Neto Cell Assistência Técnica
                  </p>
                  <CTAButton href={GOOGLE_MAPS_URL} variant="primary" className="sm:min-w-fit">
                    Ver rota
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
