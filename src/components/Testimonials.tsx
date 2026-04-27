import { Quote, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

// Depoimentos fictícios editáveis. Substitua por avaliações reais autorizadas quando houver.
const testimonials = [
  "Atendimento rápido e explicaram tudo antes de fazer o conserto.",
  "Meu celular voltou a carregar normalmente. Gostei muito do serviço.",
  "Levei meu iPhone para avaliação e fui muito bem atendido.",
  "Serviço bem feito, com preço justo e entrega dentro do combinado.",
  "Consegui resolver tudo pelo WhatsApp antes de ir até a loja.",
  "Foram claros no orçamento e testaram o aparelho antes da entrega."
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="section-spacing bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Avaliações"
          title="Clientes valorizam atendimento claro"
          subtitle="Textos editáveis para representar o tipo de experiência que a Neto Cell quer entregar: orientação, transparência e cuidado com o aparelho."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((text, index) => (
            <article
              key={text}
              className="rounded-2xl border border-black/10 bg-zinc-50 p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-7 w-7 text-brand-red" aria-hidden="true" />
                <div className="flex gap-1 text-brand-red" aria-label="Avaliação positiva">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${index}-${starIndex}`}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="text-base font-semibold leading-7 text-zinc-800">
                “{text}”
              </p>
              <p className="mt-5 text-sm font-bold text-zinc-500">
                Cliente Neto Cell
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
