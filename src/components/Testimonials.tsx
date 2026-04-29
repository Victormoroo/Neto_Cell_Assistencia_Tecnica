import { Quote, Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

// Depoimentos fictícios editáveis. Substitua por avaliações reais autorizadas quando houver.
const testimonials = [
  {
    name: "Franciele Vaz Afonso",
    text: "Super recomendo, ótimo atendimento, preço super em conta e ótimas qualidades."
  },
  {
    name: "Marcos Damaceno",
    text: "Ótimo atendimento,serviço de qualidade, parabéns."
  },
  {
    name: "Marisa Aparecida Nogueira",
    text: "Ótimo atendimento, tanto na assistência  técnica, qto à loja, diversidades de produtos e presentes, sou cliente e super indico!"
  },
  {
    name: "Kathleen De Moraes",
    text: "Serviço atencioso, rápido e honesto, com certeza indico!"
  },
  {
    name: "Claudio Barbosa",
    text: "Muito bom atendimento, consegui resolver meus problemas , procurei outras lojas e não resolveu fui no neto cell resolveu meu problema no msm dia super indicado."
  },
  {
    name: "Cleiton Pereira",
    text: "A melhor assistência de Franca e região."
  }
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
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${testimonial.text}`}
              className="flex h-full flex-col rounded-2xl border border-black/10 bg-zinc-50 p-6"
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
              <p className="flex-1 text-base font-semibold leading-7 text-zinc-800">
                “{testimonial.text}”
              </p>
              <p className="mt-6 border-t border-black/10 pt-4 text-sm font-bold text-zinc-500">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
