# Neto Cell Assistência Técnica

Site institucional em Next.js, TypeScript e Tailwind CSS para a Neto Cell Assistência Técnica.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Alterar número do WhatsApp

Edite `src/config/business.ts`:

```ts
export const WHATSAPP_NUMBER = "5516992045572";
export const WHATSAPP_DISPLAY = "+55 16 99204-5572";
export const WHATSAPP_MESSAGE = "Mensagem desejada";
```

O link `wa.me` é montado automaticamente pela constante `WHATSAPP_URL`.

## Trocar a logo

Adicione o arquivo da logo em:

```txt
public/logo.png
```

Enquanto a imagem não existir, o site usa o texto "Neto Cell" como logotipo temporário.

## Editar endereço, horário e redes sociais

As principais informações ficam centralizadas em `src/config/business.ts`:

```ts
export const ADDRESS = "...";
export const BUSINESS_HOURS = "...";
export const INSTAGRAM_URL = "...";
export const GOOGLE_MAPS_URL = "...";
```

## Publicar na Vercel

1. Suba este projeto para um repositório Git.
2. Acesse a Vercel e importe o repositório.
3. Use as configurações padrão de projeto Next.js.
4. Publique e configure o domínio final.

## Adicionar embed real do Google Maps

A seção de contato já tem uma área preparada para mapa. Para usar o embed real:

1. Abra o endereço no Google Maps.
2. Clique em compartilhar e escolha a opção de incorporar mapa.
3. Copie o `iframe`.
4. Substitua o bloco visual em `src/components/Contact.tsx` pelo `iframe`, mantendo `title`, `loading="lazy"` e estilos responsivos.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
