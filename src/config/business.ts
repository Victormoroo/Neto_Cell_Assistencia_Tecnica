export const BUSINESS_NAME = "Neto Cell Assistência Técnica";
export const BRAND_SHORT_NAME = "Neto Cell";
export const CITY_REGION = "Franca-SP e região";
export const WHATSAPP_NUMBER = "5516992045572";
export const WHATSAPP_DISPLAY = "+55 16 99204-5572";
export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da Neto Cell e gostaria de solicitar um orçamento para meu celular.";
export const ADDRESS =
  "Av. José Pimenta Sobrinho, 180 - Parque das Esmeraldas, Franca - SP, 14406-151";
export const BUSINESS_HOURS = "09:00 às 18:00";
export const INSTAGRAM_HANDLE = "@netocell1515";
export const INSTAGRAM_URL = "https://www.instagram.com/netocell1515";
export const GOOGLE_MAPS_URL = "https://share.google/hdx18zoJwXwzNU5kW";
export const PAYMENT_METHODS = ["Pix", "débito", "crédito", "outras formas de pagamento"];

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" }
] as const;
