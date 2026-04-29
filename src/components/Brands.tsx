import { WHATSAPP_URL } from "@/config/business";
import { CTAButton } from "./CTAButton";
import { SectionTitle } from "./SectionTitle";

const brands = [
  "iPhone",
  "Samsung",
  "Motorola",
  "Xiaomi",
  "LG",
  "Asus",
  "Realme",
  "Outras marcas"
];

export function Brands() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <SectionTitle
          eyebrow="Modelos atendidos"
          title="Trabalhamos com várias marcas"
          subtitle="Não encontrou sua marca na lista? Chame no WhatsApp e consulte a disponibilidade para o seu modelo."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-brand-dark shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton href={WHATSAPP_URL} variant="dark">
            Consultar meu modelo
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
