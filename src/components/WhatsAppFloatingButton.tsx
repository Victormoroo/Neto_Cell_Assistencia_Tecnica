import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/business";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-red transition hover:-translate-y-1 hover:bg-red-700 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden text-sm font-black sm:inline">WhatsApp</span>
    </a>
  );
}
