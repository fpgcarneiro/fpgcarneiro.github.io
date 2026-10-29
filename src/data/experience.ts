import type { Bilingual } from './research';

export interface ExperienceEntry {
  slug: string;
  org: string;
  role: Bilingual;
  location: string;
  start: string;
  end: string | null;
  bullets: Bilingual[];
}

export const experience: ExperienceEntry[] = [
  {
    slug: 'fatec-catanduva',
    org: 'FATEC Catanduva — Centro Paula Souza',
    role: { pt: 'Docente universitária em Ciência de Dados', en: 'University Lecturer, Data Science' },
    location: 'Catanduva, SP, Brasil',
    start: '2026-03',
    end: null,
    bullets: [
      {
        pt: 'Docência no curso de Ciência de Dados para o Agronegócio',
        en: 'Teaching in the Data Science for Agribusiness program',
      },
      {
        pt: 'Sistemas Informatizados, Engenharia de Dados e Bancos de Dados',
        en: 'Information Systems, Data Engineering, and Databases',
      },
      {
        pt: 'Orientação de alunos no desenvolvimento de soluções tecnológicas baseadas em dados para o setor agroindustrial',
        en: 'Advising students on data-driven technology solutions for the agribusiness sector',
      },
    ],
  },
  {
    slug: 'senai-cimatec',
    org: 'SENAI Cimatec',
    role: { pt: 'Bolsista de pesquisa em Big Data e IA', en: 'Research Fellow in Big Data and AI' },
    location: 'Brasil',
    start: '2025-10',
    end: null,
    bullets: [
      { pt: 'Pesquisa aplicada em Inteligência Artificial Industrial e Big Data', en: 'Applied research in Industrial AI and Big Data' },
      { pt: 'Desenvolvimento e aplicação de sistemas inteligentes em contextos industriais', en: 'Development and application of intelligent systems in industrial contexts' },
    ],
  },
  {
    slug: 'maximizaia',
    org: 'MaximizaIA',
    role: { pt: 'Sócia e especialista em IA e Automação', en: 'Partner and AI & Automation Specialist' },
    location: 'Brasil',
    start: '2023-05',
    end: null,
    bullets: [
      { pt: 'Liderança no desenvolvimento de soluções baseadas em Inteligência Artificial e automação', en: 'Leadership in developing AI- and automation-based solutions' },
      { pt: 'Arquitetura de software e soluções digitais escaláveis, incluindo a plataforma SmartProd', en: 'Software architecture and scalable digital solutions, including the SmartProd platform' },
      { pt: 'Integração de tecnologias de IA em processos e fluxos corporativos', en: 'Integration of AI technologies into business processes and workflows' },
    ],
  },
  {
    slug: 'senai-isi-sim',
    org: 'SENAI ISI-SIM',
    role: { pt: 'Analista sênior de sistemas e pesquisadora em PD&I', en: 'Senior Systems Analyst and R&D&I Researcher' },
    location: 'São Leopoldo, RS, Brasil',
    start: '2022-06',
    end: '2024-01',
    bullets: [
      { pt: 'Desenvolvimento de sistemas e arquiteturas para soluções industriais', en: 'Development of systems and architectures for industrial solutions' },
      { pt: 'Integração de aplicações de Inteligência Artificial', en: 'Integration of Artificial Intelligence applications' },
      { pt: 'Participação em projetos de Pesquisa, Desenvolvimento e Inovação (PD&I)', en: 'Participation in Research, Development, and Innovation (R&D&I) projects' },
    ],
  },
  {
    slug: 'senai-isi-se',
    org: 'SENAI ISI-SE',
    role: { pt: 'Bolsista de pesquisa', en: 'Research Fellow' },
    location: 'Florianópolis, SC, Brasil',
    start: '2019-08',
    end: '2022-05',
    bullets: [
      { pt: 'Projetos de Pesquisa, Desenvolvimento e Inovação (PD&I) em sistemas embarcados', en: 'Research, Development, and Innovation (R&D&I) projects in embedded systems' },
      { pt: 'Desenvolvimento e integração de aplicações de Inteligência Artificial', en: 'Development and integration of Artificial Intelligence applications' },
    ],
  },
  {
    slug: 'centro-paula-souza-araraquara',
    org: 'Centro Estadual de Educação Tecnológica Paula Souza',
    role: { pt: 'Docente de informática', en: 'Computing Lecturer' },
    location: 'Araraquara, SP, Brasil',
    start: '2008-02',
    end: '2010-02',
    bullets: [
      { pt: 'Docência de lógica de programação e bancos de dados', en: 'Teaching programming logic and databases' },
    ],
  },
];
