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
      pt: 'Apresentação de dois artigos aplicando a Arquitetura 6C e otimização ao PCP industrial',
      en: 'Presentation of two papers applying the 6C Architecture and optimization to industrial PPC',
    },
    date: '2026-10-20/23',
    location: 'São Paulo, SP, Brasil',
    description: {
      pt: 'Apresentação dos resultados do SmartProd no XLVI ENEGEP, incluindo redução de 57% no tempo total de setup e eliminação de atrasos em um plano de produção replanejado por linguagem natural via IA generativa.',
      en: 'Presentation of the SmartProd results at the XLVI ENEGEP, including a 57% reduction in total setup time and the elimination of delays in a production plan replanned via natural language through generative AI.',
    },
    image: 'fernanda-speaking-enegep-2026.jpg',
    link: 'https://portal.abepro.org.br/enegep/2026/',
  },
];
