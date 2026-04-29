"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  {
    question: "Vocês consertam iPhone?",
    answer:
      "Sim. A Neto Cell realiza avaliação e reparos em iPhone, incluindo tela, bateria, conector, câmera e outros problemas, conforme diagnóstico."
  },
  {
    question: "Quais marcas vocês atendem?",
    answer:
      "Atendemos as Linhas Apple, Samsung, Motorola, Xiaomi e diversas outras marcas. Consulte pelo WhatsApp informando o modelo do aparelho."
  },
  {
    question: "O orçamento é feito pelo WhatsApp?",
    answer:
      "Você pode iniciar o atendimento pelo WhatsApp. Em alguns casos, é possível passar uma estimativa inicial; em outros, o aparelho precisa de avaliação técnica."
  },
  {
    question: "Vocês oferecem garantia?",
    answer:
      "Sim. Os serviços realizados contam com garantia, conforme o tipo de reparo, peça utilizada e avaliação feita pela equipe."
  },
  {
    question: "Quanto tempo demora o conserto?",
    answer:
      "O prazo depende do modelo, do defeito e da disponibilidade da peça. Alguns serviços podem ser resolvidos com mais rapidez, enquanto outros exigem avaliação detalhada."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix, cartão de débito e cartão de crédito"
  },
  {
    question: "Vocês consertam celular molhado?",
    answer:
      "Sim. Celulares com contato com água ou oxidação precisam ser avaliados o quanto antes. O resultado depende do estado interno do aparelho."
  },
  {
    question: "Vocês trocam tela e bateria?",
    answer:
      "Sim. A troca de tela e bateria está entre os serviços mais procurados. Consulte pelo WhatsApp informando o modelo do aparelho."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="section-spacing bg-zinc-50">
      <div className="container">
        <SectionTitle
          eyebrow="Dúvidas frequentes"
          title="Perguntas frequentes"
          subtitle="Informações importantes para iniciar o atendimento com mais segurança."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl text-left text-base font-black text-brand-dark"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
