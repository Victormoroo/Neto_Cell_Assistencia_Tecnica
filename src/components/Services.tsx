import {
  Battery,
  Camera,
  CircuitBoard,
  Droplets,
  Eraser,
  FileCheck2,
  HardDriveUpload,
  Headphones,
  PlugZap,
  Shield,
  ShoppingBag,
  Smartphone,
  TabletSmartphone,
  Wrench
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SectionTitle } from "./SectionTitle";

const services = [
  {
    icon: Smartphone,
    title: "Troca de tela",
    description:
      "Tela quebrada, touch falhando ou imagem com manchas? Avaliamos o modelo e indicamos a peça adequada para o reparo."
  },
  {
    icon: Battery,
    title: "Troca de bateria",
    description:
      "Bateria descarregando rápido, estufada ou desligando sozinha precisa de avaliação técnica para troca segura."
  },
  {
    icon: PlugZap,
    title: "Conector de carga",
    description:
      "Seu aparelho não carrega? Avaliamos conector, bateria e sistema de carga para indicar a melhor solução."
  },
  {
    icon: CircuitBoard,
    title: "Reparo de placa",
    description:
      "Falhas técnicas mais complexas passam por diagnóstico de placa para identificar possibilidades reais de reparo."
  },
  {
    icon: Shield,
    title: "Reparo em iPhone",
    description:
      "Atendimento para iPhone com avaliação de tela, bateria, conector, câmera, sistema e outros defeitos conforme diagnóstico."
  },
  {
    icon: TabletSmartphone,
    title: "Reparo em Samsung, Motorola e Xiaomi",
    description:
      "Soluções para modelos populares com orientação clara sobre peça, serviço e disponibilidade para cada aparelho."
  },
  {
    icon: Camera,
    title: "Câmera, alto-falante e microfone",
    description:
      "Problemas em áudio, chamadas, fotos ou vídeos são avaliados para identificar componente, sistema ou oxidação."
  },
  {
    icon: Droplets,
    title: "Celular molhado ou com oxidação",
    description:
      "Aparelhos com contato com água exigem avaliação rápida. O resultado depende do estado interno e do tempo de exposição."
  },
  {
    icon: HardDriveUpload,
    title: "Atualização e problemas de software",
    description:
      "Travamentos, lentidão, falhas de sistema e atualização podem receber orientação técnica conforme o caso."
  },
  {
    icon: Eraser,
    title: "Limpeza técnica",
    description:
      "Limpeza de conectores, entradas e componentes internos quando indicada para preservar o funcionamento do aparelho."
  },
  {
    icon: FileCheck2,
    title: "Backup e transferência de dados",
    description:
      "Ajuda para migrar contatos, fotos e arquivos entre aparelhos, respeitando as condições do dispositivo."
  },
  {
    icon: Smartphone,
    title: "Aplicação de película",
    description:
      "Aplicação cuidadosa de película para proteger a tela e manter a usabilidade do aparelho no dia a dia."
  },
  {
    icon: ShoppingBag,
    title: "Capinhas e acessórios",
    description:
      "Opções de proteção e acessórios para complementar o uso do celular conforme disponibilidade na loja."
  },
  {
    icon: Wrench,
    title: "Diagnóstico técnico",
    description:
      "Avaliação para entender o problema, explicar possibilidades e orientar o orçamento antes da execução do serviço."
  },
  {
    icon: Headphones,
    title: "Atendimento e orientação",
    description:
      "Suporte inicial pelo WhatsApp para entender modelo, defeito e melhor forma de atendimento em Franca-SP e região."
  }
];

export function Services() {
  return (
    <section id="servicos" className="section-spacing bg-zinc-50">
      <div className="container">
        <SectionTitle
          eyebrow="Assistência técnica"
          title="Serviços da Neto Cell"
          subtitle="Do problema mais simples ao reparo mais técnico, a Neto Cell oferece soluções para diferentes modelos e marcas de celulares."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
