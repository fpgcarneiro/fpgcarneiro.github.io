import type { Bilingual } from './research';

export interface SpeakingEntry {
  slug: string;
  event: string;
  title: Bilingual;
  date: string;
  location: string;
  description: Bilingual;
  image?: string;
  link?: string;
}

export const speaking: SpeakingEntry[] = [
  {
    slug: 'enegep-2026',
    event: 'XLVI Encontro Nacional de Engenharia de Produção (ENEGEP) — ABEPRO 40 anos',
    title: {
      pt: 'Apresentação do artigo sobre a Arquitetura 6C aplicada ao PCP industrial',
      en: 'Presentation of the paper on the 6C Architecture applied to industrial PPC',
    },
    date: '2026-10-20/23',
    location: 'São Paulo, SP, Brasil',
    description: {
      pt: 'Apresentação dos resultados do SmartProd no XLVI ENEGEP: um algoritmo genético otimizou o plano de produção, reduzindo em 57% o tempo total de setup e eliminando atrasos, com a MIA (Maximiza Inteligência Artificial) traduzindo a solicitação em linguagem natural e explicando os resultados ao usuário.',
      en: 'Presentation of the SmartProd results at the XLVI ENEGEP: a genetic algorithm optimized the production plan, cutting total setup time by 57% and eliminating delays, with MIA (Maximiza Inteligência Artificial) translating the natural-language request and explaining the results to the user.',
    },
    image: 'fernanda-speaking-enegep-2026.jpg',
  },
  {
    slug: 'deba-vdi-2024',
    event: 'DEBA VDI 2024 — 16ª edição',
    title: {
      pt: 'Case de sucesso em previsão de demanda com IA',
      en: 'AI demand forecasting success case',
    },
    date: '2024-01-01',
    location: 'São Paulo, SP, Brasil',
    description: {
      pt: 'Apresentação de um case de sucesso sobre previsão de demanda com séries temporais e redes neurais em uma indústria automotiva, um dos três estudos de caso que validam a Arquitetura 6C na tese de doutorado.',
      en: 'Presentation of a success case on demand forecasting with time series and neural networks in an automotive industry, one of the three case studies validating the 6C Architecture in the PhD thesis.',
    },
    image: 'fernanda-deba-vdi-2024.jpg',
  },
  {
    slug: 'mulheres-empreendedoras-2023',
    event: 'Mulheres Empreendedoras — Imersão',
    title: {
      pt: 'Palestra sobre Aprendizado de Máquina e Redes Neurais',
      en: 'Talk on Machine Learning and Neural Networks',
    },
    date: '2023-11-11',
    location: 'São Paulo, SP, Brasil (Hotel Pestana)',
    description: {
      pt: 'Palestra sobre fundamentos de Aprendizado de Máquina e Redes Neurais no evento de imersão Mulheres Empreendedoras.',
      en: 'Talk on the fundamentals of Machine Learning and Neural Networks at the Mulheres Empreendedoras immersion event.',
    },
    image: 'fernanda-mulheres-empreendedoras-stage.jpg',
  },
  {
    slug: 'instituto-federal-rs',
    event: 'Instituto Federal do Rio Grande do Sul — Campus Porto Alegre',
    title: {
      pt: 'Desvendando os Mistérios da Inteligência Artificial',
      en: 'Unraveling the Mysteries of Artificial Intelligence',
    },
    date: '2023-10-04',
    location: 'Porto Alegre, RS, Brasil (Auditório Rui Manuel Cruse)',
    description: {
      pt: 'Palestra sobre curiosidades e fundamentos da Inteligência Artificial para a comunidade acadêmica do IFRS.',
      en: 'Talk on curiosities and fundamentals of Artificial Intelligence for the IFRS academic community.',
    },
    image: 'fernanda-ifrs-presenting.jpg',
  },
];
