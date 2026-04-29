# Neto Cell Assistência Técnica

Site institucional da **Neto Cell Assistência Técnica**, desenvolvido com Next.js, TypeScript e Tailwind CSS.

O projeto foi criado para apresentar serviços de assistência técnica de celulares em Franca-SP, destacar formas de atendimento, avaliações, FAQ, mapa de localização e facilitar o contato pelo WhatsApp.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Lucide React

## Requisitos

- Node.js compatível com Next.js 16
- npm

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Roda o projeto em modo desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run start
```

Roda a build de produção localmente.

```bash
npm run lint
```

Executa a validação com ESLint.

## Estrutura Principal

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  assets/
    logo_black.png
    logo_white.png
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
    ...
  config/
    business.ts
```

## Onde Editar Informações da Empresa

As principais informações ficam centralizadas em:

```txt
src/config/business.ts
```

Nesse arquivo você pode alterar:

- Nome da empresa
- Região atendida
- WhatsApp
- Mensagem inicial do WhatsApp
- Endereço
- Horário de funcionamento
- Instagram
- Link do Google Maps
- Formas de pagamento
- Itens da navegação

## WhatsApp

O link do WhatsApp é montado automaticamente a partir destas constantes:

```ts
export const WHATSAPP_NUMBER = "5516992045572";
export const WHATSAPP_MESSAGE = "...";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
```

Para trocar o número principal usado nos botões, altere `WHATSAPP_NUMBER`.

Para alterar o texto exibido no site, altere `WHATSAPP_DISPLAY`.

## Logo

As logos ficam em:

```txt
src/assets/logo_black.png
src/assets/logo_white.png
```

O componente responsável pela exibição é:

```txt
src/components/Logo.tsx
```

## Mapa e Localização

A seção de contato usa um embed real do Google Maps em:

```txt
src/components/Contact.tsx
```

O link usado nos botões "Ver no Google Maps" fica em:

```txt
src/config/business.ts
```

```ts
export const GOOGLE_MAPS_URL = "...";
```

## Avaliações

As avaliações ficam em:

```txt
src/components/Testimonials.tsx
```

Cada avaliação tem o formato:

```ts
{
  name: "Nome da pessoa",
  text: "Texto da avaliação."
}
```

Substitua os textos diretamente nesse array quando precisar atualizar os depoimentos.

## SEO e Dados Estruturados

Os metadados principais estão em:

```txt
src/app/layout.tsx
```

Os dados estruturados JSON-LD ficam em:

```txt
src/components/StructuredData.tsx
```

Eles ajudam mecanismos de busca a entenderem que o site representa uma empresa local, com endereço, telefone, horário e mapa.

## Publicação

O projeto está pronto para publicação em plataformas compatíveis com Next.js, como Vercel.

Fluxo recomendado:

1. Subir o código para um repositório Git.
2. Importar o repositório na Vercel.
3. Usar as configurações padrão de Next.js.
4. Configurar o domínio final.
5. Rodar uma validação final com `npm run build`.

## Checklist Antes de Publicar

- Conferir telefone principal em `business.ts`.
- Conferir endereço e link do Google Maps.
- Conferir horário de funcionamento.
- Conferir Instagram.
- Conferir avaliações em `Testimonials.tsx`.
- Rodar `npm run lint`.
- Rodar `npm run build`.
