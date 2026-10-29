export type Bilingual = { pt: string; en: string };

export interface ThesisEntry {
  slug: string;
  kind: 'doctorate' | 'master';
  title: Bilingual;
  institution: string;
  advisor: string;
  coadvisor?: string;
  defenseDate: string;
  doi: string;
  link: string;
  summary: Bilingual;
}

export const theses: ThesisEntry[] = [
  {
    slug: 'arquitetura-6c',
    kind: 'doctorate',
    title: {
      pt: 'Arquitetura 6C: Um Framework para Inteligência Artificial na Indústria',
      en: 'The 6C Architecture: A Framework for Industrial Artificial Intelligence',
    },
    institution: 'Universidade de São Paulo (USP) — Instituto de Ciências Matemáticas e de Computação (ICMC)',
    advisor: 'Cláudio Fabiano Motta Toledo',
    coadvisor: 'Albeiro Espinosa Bedoya',
    defenseDate: '2025-12-03',
    doi: '10.11606/T.55.2025.tde-22062026-131840',
    link: 'https://teses.usp.br/teses/disponiveis/55/55134/tde-22062026-131840/pt-br.html',
    summary: {
      pt: 'Propõe a Arquitetura 6C, evolução do modelo 5C, incorporando a camada de Consciência — responsável por aprendizado contínuo, explicabilidade e governança ao longo do ciclo de vida da IA Industrial. A proposta foi validada em três estudos de caso: manutenção preditiva em uma indústria de óleo vegetal, previsão de demanda em uma indústria automotiva, e o sistema SmartProd de Planejamento e Controle da Produção.',
      en: 'Proposes the 6C Architecture, an evolution of the 5C model, incorporating the Consciousness layer — responsible for continuous learning, explainability, and governance across the Industrial AI lifecycle. The proposal was validated through three case studies: predictive maintenance in a vegetable oil industry, demand forecasting in an automotive industry, and the SmartProd Production Planning and Control system.',
    },
  },
  {
    slug: 'arquitetura-vant',
    kind: 'master',
    title: {
      pt: 'Proposta de uma arquitetura base para integração de VANT',
      en: 'A Proposal for a Base Architecture for UAV Integration',
    },
    institution: 'Universidade de São Paulo (USP) — Instituto de Ciências Matemáticas e de Computação (ICMC)',
    advisor: 'Cláudio Fabiano Motta Toledo',
    coadvisor: 'Júlio Cezar Estrella',
    defenseDate: '2019-03-19',
    doi: '10.11606/D.55.2019.tde-17072019-085517',
    link: 'https://teses.usp.br/teses/disponiveis/55/55134/tde-17072019-085517/pt-br.html',
    summary: {
      pt: 'Propõe uma arquitetura base modularizada para integrar Veículos Aéreos Não Tripulados (VANTs) a uma plataforma web, tratando acesso, organização e segurança dos dados coletados em voo. Validada por meio de um protótipo aplicado a um estudo de caso em uma fazenda de cultivo de mangas.',
      en: 'Proposes a modular base architecture integrating Unmanned Aerial Vehicles (UAVs) with a web platform, addressing access, organization, and security of flight-collected data. Validated through a prototype applied to a case study on a mango farm.',
    },
  },
];

export interface Publication {
  slug: string;
  year: number;
  venue: string;
  title: Bilingual;
  authors: string;
  doi?: string;
  link: string;
  summary: Bilingual;
  firstAuthor: boolean;
}

export const publications: Publication[] = [
  {
    slug: 'arquitetura-6c-pcp-enegep-2026',
    year: 2026,
    venue: 'XLVI Encontro Nacional de Engenharia de Produção (ENEGEP)',
    title: {
      pt: 'Arquitetura 6C aplicada ao Planejamento e Controle da Produção em Ambientes Industriais Inteligentes',
      en: '6C Architecture Applied to Production Planning and Control in Smart Industrial Environments',
    },
    authors: 'Fernanda Pereira Guidotti Carneiro, Albeiro Espinosa Bedoya, Cláudio Fabiano Motta Toledo',
    link: 'https://portal.abepro.org.br/enegep/2026/',
    firstAuthor: true,
    summary: {
      pt: 'Aplica a Arquitetura 6C ao Planejamento e Controle da Produção (PCP), integrando IA Industrial, otimização, gêmeos digitais e IA generativa. Estudo de caso com o SmartProd, da MaximizaIA, demonstrando ganhos em redução de atrasos e de tempo de setup por meio de um ciclo contínuo de diagnóstico, replanejamento e explicação.',
      en: 'Applies the 6C Architecture to Production Planning and Control (PPC), integrating Industrial AI, optimization, digital twins, and generative AI. Case study with SmartProd, by MaximizaIA, showing gains in reduced delays and setup time through a continuous cycle of diagnosis, replanning, and explanation.',
    },
  },
  {
    slug: 'ml-otimizacao-lotes-enegep-2026',
    year: 2026,
    venue: 'XLVI Encontro Nacional de Engenharia de Produção (ENEGEP)',
    title: {
      pt: 'Integração entre Aprendizado de Máquina e Otimização para o Dimensionamento Capacitado Multi-Item de Lotes sob Demanda Incerta',
      en: 'Integrating Machine Learning and Optimization for Capacitated Multi-Item Lot-Sizing under Demand Uncertainty',
    },
    authors: 'Victor Hugo Guzzo Garcia, Fernanda Pereira Guidotti Carneiro, Cláudio Fabiano Motta Toledo, Antônio José da Silva Neto',
    link: 'https://portal.abepro.org.br/enegep/2026/',
    firstAuthor: false,
    summary: {
      pt: 'Integra modelos de aprendizado de máquina (previsão de demanda) a um modelo exato de otimização para o problema capacitado multi-item de dimensionamento de lotes, incorporando estratégias robustas sob incerteza. Mostra que o menor erro preditivo não garante, necessariamente, o menor custo operacional real.',
      en: 'Integrates machine learning models (demand forecasting) with an exact optimization model for the capacitated multi-item lot-sizing problem, incorporating robust strategies under uncertainty. Shows that the lowest predictive error does not necessarily guarantee the lowest real operational cost.',
    },
  },
  {
    slug: 'six-layer-architecture-icsoft-2024',
    year: 2024,
    venue: '19th International Conference on Software Technologies (ICSOFT)',
    title: {
      pt: 'Six-Layer Industrial Architecture Applied to Predictive Maintenance',
      en: 'Six-Layer Industrial Architecture Applied to Predictive Maintenance',
    },
    authors: 'Fernanda Pereira Guidotti, Jesimar da Silva Arantes, Márcio da Silva Arantes, Albeiro Espinosa Bedoya, Claudio Fabiano Motta Toledo',
    doi: '10.5220/0012767000003753',
    link: 'https://doi.org/10.5220/0012767000003753',
    firstAuthor: true,
    summary: {
      pt: 'Artigo que introduz pela primeira vez a Arquitetura 6C, evoluindo o modelo 5C com a adição da camada de Consciência, que retroalimenta as camadas anteriores com conhecimento adquirido. Validada em um estudo de caso industrial de manutenção preditiva.',
      en: 'The paper that first introduces the 6C Architecture, evolving the 5C model by adding the Consciousness layer, which feeds acquired knowledge back to the previous layers. Validated in an industrial predictive-maintenance case study.',
    },
  },
  {
    slug: 'crop-lines-drone-stsiva-2019',
    year: 2019,
    venue: 'XXII Symposium on Image, Signal Processing and Artificial Vision (STSIVA)',
    title: {
      pt: 'A Method for Automatic Identification of Crop Lines in Drone Images',
      en: 'A Method for Automatic Identification of Crop Lines in Drone Images',
    },
    authors: 'Fernanda Pereira Guidotti Carneiro et al.',
    doi: '10.1109/STSIVA.2019.8730214',
    link: 'https://ieeexplore.ieee.org/document/8730214',
    firstAuthor: true,
    summary: {
      pt: 'Estudo sobre identificação automática de linhas de cultivo em imagens capturadas por VANTs, no âmbito da visão computacional e do processamento de imagens, conectado à pesquisa de mestrado sobre arquiteturas de integração de drones.',
      en: 'A study on automatic identification of crop lines in UAV-captured images, within computer vision and image processing, connected to the master’s research on UAV integration architectures.',
    },
  },
];

export const academicLinks = {
  lattes: 'http://lattes.cnpq.br/7117056149522031',
  scholar: 'https://scholar.google.com.br/citations?user=q7hMVncAAAAJ&hl=pt-BR',
  orcid: 'https://orcid.org/0000-0001-5913-9371',
  github: 'https://github.com/fpgcarneiro',
  linkedin: 'https://www.linkedin.com/in/fernandaguidotticarneiro/',
  email: 'carneiro.guidotti@gmail.com',
};
