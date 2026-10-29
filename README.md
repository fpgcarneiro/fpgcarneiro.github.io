# fernandaguidotticarneiro.com

Site pessoal de Fernanda Guidotti Carneiro — doutora em Ciência da Computação (USP/ICMC), pesquisadora em IA Industrial e autora da Arquitetura 6C. Construído com [Astro](https://astro.build), TypeScript e Tailwind CSS, bilíngue (pt/en), publicado no GitHub Pages.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`. Em **Settings → Pages** do repositório, configure a fonte como "GitHub Actions".

## Estrutura do conteúdo

Todo o conteúdo factual (publicações, experiência, projetos, camadas da Arquitetura 6C, palestras) fica em arquivos de dados tipados, bilíngues (`pt`/`en`), em `src/data/`:

| Arquivo | O que edita |
|---|---|
| `src/data/research.ts` | Teses, dissertação, artigos publicados, links acadêmicos (Lattes, Scholar, ORCID) |
| `src/data/experience.ts` | Linha do tempo profissional |
| `src/data/projects.ts` | Portfólio de projetos |
| `src/data/sixc.ts` | As 6 camadas da Arquitetura 6C e os 3 estudos de caso |
| `src/data/speaking.ts` | Palestras e participações em eventos |

### Adicionando uma nova publicação

Edite `src/data/research.ts` e adicione um novo objeto ao array `publications`:

```ts
{
  slug: 'identificador-unico',
  year: 2027,
  venue: 'Nome do evento/revista',
  title: { pt: 'Título em português', en: 'Title in English' },
  authors: 'Lista de autores',
  doi: '10.xxxx/xxxxx', // opcional
  link: 'https://...',
  firstAuthor: true,
  summary: { pt: '...', en: '...' },
},
```

### Adicionando um novo projeto

Edite `src/data/projects.ts` seguindo o mesmo padrão. A página individual é gerada automaticamente em `/projetos/<slug>` (e `/en/projects/<slug>`).

### Trocando fotos

As fotos ficam em `src/assets/photos/source/`. Basta substituir o arquivo (mantendo o nome) ou importar um novo arquivo nas páginas que o usam (`src/pages/index.astro`, `src/pages/sobre.astro`, `src/pages/palestras.astro` e suas versões em `src/pages/en/`). O Astro otimiza e redimensiona as imagens automaticamente no build.

### Textos de interface (menu, botões, rótulos)

Ficam em `src/i18n/ui.ts`, com uma chave por idioma.

## Pendências de conteúdo

- Foto e descrição completa do projeto **Mapa de IA** (`src/data/projects.ts`, slug `mapa-de-ia`)
- Currículo em inglês (Europass) — link não encontrado pela autora
- Palestras/eventos adicionais além do ENEGEP 2026

## Stack técnica

- [Astro](https://astro.build) 7 (output estático)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- i18n nativo do Astro (pt como idioma padrão, en com prefixo `/en`)
- `astro:assets` para otimização automática de imagens
- `@astrojs/sitemap` para sitemap.xml automático
