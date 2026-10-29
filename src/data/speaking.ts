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
      pt: 'Apresentação, como primeira autora, dos resultados do SmartProd no XLVI ENEGEP: redução de 57% no tempo total de setup e eliminação de atrasos em um plano de produção replanejado por linguagem natural via IA generativa.',
      en: 'Presentation, as first author, of the SmartProd results at the XLVI ENEGEP: a 57% reduction in total setup time and the elimination of delays in a production plan replanned via natural language through generative AI.',
    },
    image: 'fernanda-speaking-enegep-2026.jpg',
    link: 'https://portal.abepro.org.br/enegep/2026/',
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
      pt: 'Participação como palestrante confirmada no evento de imersão Mulheres Empreendedoras, com apresentação sobre fundamentos de Aprendizado de Máquina e Redes Neurais.',
      en: 'Confirmed speaker at the Mulheres Empreendedoras immersion event, presenting on the fundamentals of Machine Learning and Neural Networks.',
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
    date: '2025-10-04',
    location: 'Porto Alegre, RS, Brasil (Auditório Rui Manuel Cruse)',
    description: {
      pt: 'Palestra sobre curiosidades e fundamentos da Inteligência Artificial para a comunidade acadêmica do IFRS.',
      en: 'Talk on curiosities and fundamentals of Artificial Intelligence for the IFRS academic community.',
    },
    image: 'fernanda-ifrs-presenting.jpg',
  },
];
