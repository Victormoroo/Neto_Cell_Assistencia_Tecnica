import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Neto Cell Assistência Técnica | Conserto de Celular em Franca-SP",
  description:
    "Assistência técnica de celulares em Franca-SP. Conserto de iPhone, Samsung, Motorola, Xiaomi, troca de tela, bateria, conector de carga, reparo de placa e orçamento pelo WhatsApp.",
  keywords: [
    "assistência técnica celular Franca SP",
    "conserto de celular Franca",
    "troca de tela Franca SP",
    "troca de bateria celular",
    "conserto de iPhone Franca",
    "assistência técnica iPhone Franca",
    "Neto Cell Assistência Técnica",
    "celular molhado",
    "conector de carga",
    "reparo de placa"
  ],
  metadataBase: new URL("https://netocell.com.br"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Neto Cell Assistência Técnica | Conserto de Celular em Franca-SP",
    description:
      "Conserto de celular em Franca-SP e região com diagnóstico técnico, atendimento pelo WhatsApp e soluções para iPhone, Samsung, Motorola, Xiaomi e outras marcas.",
    locale: "pt_BR",
    siteName: "Neto Cell Assistência Técnica",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
