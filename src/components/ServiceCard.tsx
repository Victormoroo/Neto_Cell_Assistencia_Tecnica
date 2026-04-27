import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { WHATSAPP_URL } from "@/config/business";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black text-brand-dark">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{description}</p>
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-5 inline-flex w-fit rounded-full text-sm font-black text-brand-red transition hover:text-red-700"
        aria-label={`Pedir orçamento para ${title}`}
      >
        Pedir orçamento
      </Link>
    </article>
  );
}
