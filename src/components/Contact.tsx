import {
  AtSign,
  Clock3,
  CreditCard,
  MapPinned,
  MessageCircle
} from "lucide-react";
import {
  ADDRESS,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_HANDLE,
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

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0651238981704!2d-47.45602412399843!3d-20.54451615773974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ba09bd563fc349%3A0x5f572c5f214462cb!2sNeto%20Cell%20Assist%C3%AAncia%20T%C3%A9cnica!5e0!3m2!1spt-BR!2sbr!4v1777482693693!5m2!1spt-BR!2sbr";

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
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white text-brand-dark shadow-2xl">
            <div className="flex h-full min-h-[360px] flex-col">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Mapa da Neto Cell Assistência Técnica"
                className="min-h-[300px] w-full flex-1 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
