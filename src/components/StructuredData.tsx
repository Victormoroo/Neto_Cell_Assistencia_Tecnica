import {
  BUSINESS_NAME,
  CITY_REGION,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY
} from "@/config/business";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description:
      "Assistência técnica em Franca-SP para conserto de celular, reparo em iPhone, Samsung, Motorola, Xiaomi e outras marcas.",
    telephone: WHATSAPP_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. José Pimenta Sobrinho, 180 - Parque das Esmeraldas",
      addressLocality: "Franca",
      addressRegion: "SP",
      postalCode: "14406-151",
      addressCountry: "BR"
    },
    areaServed: CITY_REGION,
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-15:00"],
    url: "https://netocell.com.br",
    sameAs: [INSTAGRAM_URL, GOOGLE_MAPS_URL],
    paymentAccepted: "Pix, cartão de débito, cartão de crédito",
    hasMap: GOOGLE_MAPS_URL,
    slogan: "Conserto de celulares em Franca-SP e região",
    makesOffer: [
      "Troca de tela",
      "Troca de bateria",
      "Conector de carga",
      "Reparo de placa",
      "Reparo em iPhone",
      "Diagnóstico técnico"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
