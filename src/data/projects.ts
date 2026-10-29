import type { Bilingual } from './research';

export interface ProjectEntry {
  slug: string;
  title: Bilingual;
  summary: Bilingual;
  context: Bilingual;
  objective: Bilingual;
  role: Bilingual;
  approach: Bilingual;
  tech: string[];
  results?: Bilingual;
  links?: { label: Bilingual; href: string }[];
  placeholder?: boolean;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'arquitetura-6c',
    title: { pt: 'Arquitetura 6C', en: '6C Architecture' },
    summary: {
      pt: 'Framework de referência para Inteligência Artificial Industrial, proposto na tese de doutorado.',
      en: 'Reference framework for Industrial Artificial Intelligence, proposed in the PhD thesis.',
    },
    context: {
      pt: 'Indústrias enfrentam dificuldade para integrar IA de forma sustentável e contínua, especialmente quanto à interoperabilidade, governança e retroalimentação entre dados, modelos e decisões.',
      en: 'Industries struggle to integrate AI in a sustainable and continuous way, especially regarding interoperability, governance, and feedback between data, models, and decisions.',
    },
    objective: {
      pt: 'Propor uma arquitetura de referência que evolua o modelo 5C, incorporando aprendizado contínuo, explicabilidade e governança sobre todo o ciclo de vida da IA Industrial.',
      en: 'Propose a reference architecture evolving the 5C model, incorporating continuous learning, explainability, and governance across the entire Industrial AI lifecycle.',
    },
    role: {
      pt: 'Autora da arquitetura: concepção, formalização e validação em três estudos de caso industriais, no âmbito do doutorado (USP/ICMC).',
      en: 'Architecture author: design, formalization, and validation across three industrial case studies, as part of the PhD (USP/ICMC).',
    },
    approach: {
      pt: 'Seis camadas (Conexão, Conversão, Ciberfísico, Cognição, Configuração e Consciência) fundamentadas em princípios de MLOps e CRISP-DM, materializadas como framework e plataforma modular.',
      en: 'Six layers (Connection, Conversion, Cyber-Physical, Cognition, Configuration, and Consciousness) grounded in MLOps and CRISP-DM principles, materialized as a modular framework and platform.',
    },
    tech: ['MLOps', 'CRISP-DM', 'Gêmeos digitais', 'LLMs', 'Arquitetura de software'],
    links: [{ label: { pt: 'Ver página dedicada', en: 'View dedicated page' }, href: '/arquitetura-6c' }],
  },
  {
    slug: 'smartprod',
    title: { pt: 'SmartProd', en: 'SmartProd' },
    summary: {
      pt: 'Sistema inteligente de Planejamento e Controle da Produção, com IA generativa como interface de decisão.',
      en: 'Intelligent Production Planning and Control system, with generative AI as the decision interface.',
    },
    context: {
      pt: 'Ambientes industriais precisam tomar decisões integradas de sequenciamento, alocação de recursos e replanejamento diante de restrições operacionais dinâmicas.',
      en: 'Industrial environments need integrated decisions on sequencing, resource allocation, and replanning under dynamic operational constraints.',
    },
    objective: {
      pt: 'Aplicar a Arquitetura 6C a um sistema de PCP inteligente, capaz de otimizar planos de produção e explicar suas recomendações em linguagem natural.',
      en: 'Apply the 6C Architecture to an intelligent PPC system capable of optimizing production plans and explaining its recommendations in natural language.',
    },
    role: {
      pt: 'Liderança técnica do desenvolvimento, como sócia e especialista em IA da MaximizaIA.',
      en: 'Technical leadership of the development, as partner and AI specialist at MaximizaIA.',
    },
    approach: {
      pt: 'Gêmeo digital do ambiente fabril, algoritmos genéticos para otimização do plano produtivo e uma camada de IA generativa (MIA) que interpreta consultas em linguagem natural, gera recomendações e compara cenários.',
      en: 'A digital twin of the factory environment, genetic algorithms for production-plan optimization, and a generative AI layer (MIA) that interprets natural-language queries, generates recommendations, and compares scenarios.',
    },
    results: {
      pt: 'No estudo de caso publicado, o plano otimizado eliminou atrasos, reduziu o tempo total de setup de 92,8h para 40,3h e a espera média de entrega de 11,3 para 10,0 dias.',
      en: 'In the published case study, the optimized plan eliminated delays, reduced total setup time from 92.8h to 40.3h, and cut average delivery wait time from 11.3 to 10.0 days.',
    },
    tech: ['Algoritmos genéticos', 'Gêmeo digital', 'LLMs', 'Otimização', 'MLOps'],
    links: [
      { label: { pt: 'MaximizaIA', en: 'MaximizaIA' }, href: 'https://www.maximizaia.com/' },
      { label: { pt: 'Artigo ENEGEP 2026', en: 'ENEGEP 2026 paper' }, href: 'https://portal.abepro.org.br/enegep/2026/' },
    ],
  },
  {
    slug: 'vita-platform',
    title: { pt: 'Plataforma VITA', en: 'VITA Platform' },
    summary: {
      pt: 'Visionary Industrial Technology Architecture: a estrutura conceitual que materializa a Arquitetura 6C em componentes de software.',
      en: 'Visionary Industrial Technology Architecture: the conceptual structure that materializes the 6C Architecture into software components.',
    },
    context: {
      pt: 'Uma arquitetura de referência precisa de uma contraparte técnica para orientar como seus componentes são implementados, integrados e operados na prática.',
      en: 'A reference architecture needs a technical counterpart to guide how its components are implemented, integrated, and operated in practice.',
    },
    objective: {
      pt: 'Organizar os componentes funcionais, mecanismos analíticos e fluxos operacionais que materializam a Arquitetura 6C em microsserviços.',
      en: 'Organize the functional components, analytical mechanisms, and operational flows that materialize the 6C Architecture into microservices.',
    },
    role: {
      pt: 'Concepção e desenvolvimento, no contexto da pesquisa de doutorado e de sua aplicação industrial.',
      en: 'Design and development, in the context of the PhD research and its industrial application.',
    },
    approach: {
      pt: 'Arquitetura baseada em microsserviços, APIs e princípios de MLOps, integrando sistemas corporativos (ERP, MES), sensores e usuários responsáveis pela tomada de decisão.',
      en: 'Microservices-based architecture, APIs, and MLOps principles, integrating corporate systems (ERP, MES), sensors, and the users responsible for decision-making.',
    },
    tech: ['Microsserviços', 'APIs', 'MLOps'],
    links: [{ label: { pt: 'GitHub', en: 'GitHub' }, href: 'https://github.com/fpgcarneiro/vita' }],
  },
  {
    slug: 'arquitetura-vant',
    title: { pt: 'Arquitetura para integração de VANT', en: 'UAV Integration Architecture' },
    summary: {
      pt: 'Arquitetura base para integrar Veículos Aéreos Não Tripulados a uma plataforma web, tema da dissertação de mestrado.',
      en: 'Base architecture integrating Unmanned Aerial Vehicles with a web platform, the subject of the master’s dissertation.',
    },
    context: {
      pt: 'VANTs vêm sendo usados em agricultura, segurança e monitoramento ambiental, mas faltava uma arquitetura geral para organizar o acesso a dados de voo entre diferentes aplicações.',
      en: 'UAVs were increasingly used in agriculture, security, and environmental monitoring, but a general architecture was missing to organize access to flight data across different applications.',
    },
    objective: {
      pt: 'Propor uma arquitetura modular capaz de se adaptar às exigências de diferentes aplicações de VANTs, armazenando e organizando imagens, vídeos e dados de voo.',
      en: 'Propose a modular architecture able to adapt to the requirements of different UAV applications, storing and organizing images, videos, and flight data.',
    },
    role: {
      pt: 'Autora da pesquisa, no âmbito do mestrado em Ciências de Computação e Matemática Computacional (USP/ICMC).',
      en: 'Research author, as part of the master’s in Computer Science and Computational Mathematics (USP/ICMC).',
    },
    approach: {
      pt: 'Levantamento de requisitos por entrevistas e questionários, seguido do desenvolvimento de um protótipo validado em estudo de caso real.',
      en: 'Requirements gathering through interviews and questionnaires, followed by a prototype validated in a real case study.',
    },
    results: {
      pt: 'Protótipo validado em estudo de caso em uma fazenda de cultivo de mangas, incluindo identificação automática de linhas de cultivo em imagens de drones (publicado no STSIVA 2019).',
      en: 'Prototype validated in a case study on a mango farm, including automatic identification of crop lines in drone images (published at STSIVA 2019).',
    },
    tech: ['Arquitetura de software', 'Visão computacional', 'Mineração de dados', 'Plataforma web'],
    links: [{ label: { pt: 'Dissertação (USP)', en: 'Dissertation (USP)' }, href: 'https://teses.usp.br/teses/disponiveis/55/55134/tde-17072019-085517/pt-br.html' }],
  },
  {
    slug: 'mapa-de-ia',
    title: { pt: 'Mapa de IA', en: 'Mapa de IA' },
    summary: {
      pt: 'Método e intensivo para pequenas e médias empresas descobrirem onde, como e quando aplicar IA.',
      en: 'A method and intensive workshop helping small and medium businesses find where, how, and when to apply AI.',
    },
    context: {
      pt: 'Muitas empresas já testaram ferramentas de IA, fizeram cursos ou assinaram plataformas, mas continuam sem saber onde a IA realmente traz resultado no negócio.',
      en: 'Many businesses have already tried AI tools, taken courses, or paid for platforms, but still don’t know where AI actually brings results to the business.',
    },
    objective: {
      pt: 'Ajudar donos e gestores de empresas a identificar, em poucas horas, as tarefas certas para aplicar IA, sem depender de conhecimento técnico prévio.',
      en: 'Help business owners and managers identify, in a few hours, the right tasks to apply AI to, without needing prior technical knowledge.',
    },
    role: {
      pt: 'Criadora do método e condutora do intensivo.',
      en: 'Creator of the method and host of the intensive.',
    },
    approach: {
      pt: 'Método das Três Tarefas: listar o que se repete toda semana na empresa, filtrar cada tarefa por três perguntas (se repete, se é feita com texto ou informação, se um erro nela é fácil de conferir) e colocar a primeira tarefa aprovada para rodar com a ferramenta de IA que a empresa já tem.',
      en: 'The Three Tasks Method: list what repeats every week in the business, filter each task through three questions (does it repeat, is it done with text or information, is an error in it easy to check), and put the first approved task into action with the AI tool the business already has.',
    },
    tech: [],
    links: [{ label: { pt: 'Mapa de IA', en: 'Mapa de IA' }, href: 'https://mapadeia.com.br/' }],
  },
  {
    slug: 'meu-tato',
    title: { pt: 'Meu Tato', en: 'Meu Tato' },
    summary: {
      pt: 'Projeto pessoal, criado com o marido, para facilitar a vida de pessoas neurodivergentes.',
      en: 'A personal project, created with her husband, to make life easier for neurodivergent people.',
    },
    context: {
      pt: 'Pessoas neurodivergentes enfrentam desafios cotidianos de foco, produtividade e autorregulação que produtos e ferramentas genéricas não atendem bem.',
      en: 'Neurodivergent people face everyday challenges with focus, productivity, and self-regulation that generic products and tools don’t serve well.',
    },
    objective: {
      pt: 'Oferecer produtos sensoriais e, em desenvolvimento, um aplicativo de apoio a foco, produtividade e gestão do dia a dia.',
      en: 'Offer sensory products and, currently in development, an app to support focus, productivity, and daily routine management.',
    },
    role: {
      pt: 'Cofundadora, ao lado do marido.',
      en: 'Co-founder, alongside her husband.',
    },
    approach: {
      pt: 'Produtos sensoriais já disponíveis; aplicativo para pessoas neurodivergentes em desenvolvimento.',
      en: 'Sensory products already available; an app for neurodivergent people currently in development.',
    },
    tech: [],
    links: [{ label: { pt: 'Meu Tato', en: 'Meu Tato' }, href: 'https://meutato.com/' }],
  },
];
