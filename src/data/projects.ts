import type { Bilingual } from './research';

export type ProjectCategory = 'research' | 'venture';

export interface ProjectLink {
  label: Bilingual;
  href: string;
}

export interface ProjectEntry {
  slug: string;
  category: ProjectCategory;
  title: Bilingual;
  subtitle: Bilingual;
  summary: Bilingual;
  overview: Bilingual;
  challenge?: Bilingual;
  solution?: Bilingual;
  methodology?: Bilingual;
  architecture?: Bilingual;
  extraSections?: { heading: Bilingual; body: Bilingual }[];
  contribution: Bilingual;
  results?: Bilingual;
  relevance?: Bilingual;
  caution?: Bilingual;
  tech: string[];
  diagram?: string;
  links?: ProjectLink[];
  placeholder?: boolean;
}

export const projects: ProjectEntry[] = [
  // ───────────────────────── RESEARCH ─────────────────────────
  {
    slug: 'arquitetura-6c',
    category: 'research',
    title: { pt: 'Arquitetura 6C', en: '6C Architecture' },
    subtitle: {
      pt: 'Uma arquitetura de referência para integrar Inteligência Artificial ao ciclo de decisão industrial.',
      en: 'A reference architecture for integrating Artificial Intelligence into the industrial decision cycle.',
    },
    summary: {
      pt: 'Framework de referência para Inteligência Artificial Industrial, proposto na tese de doutorado.',
      en: 'Reference framework for Industrial Artificial Intelligence, proposed in the PhD thesis.',
    },
    overview: {
      pt: 'A digitalização dos ambientes industriais ampliou a disponibilidade de dados vindos de sensores, sistemas corporativos e processos produtivos. Transformar esses dados em decisões inteligentes, porém, exige mais do que modelos de aprendizado de máquina isolados. A Arquitetura 6C foi concebida na pesquisa de doutorado na USP para investigar uma estrutura de referência que conecte aquisição de dados, processamento, mecanismos analíticos, decisão e acompanhamento da operação.',
      en: 'The digitalization of industrial environments has expanded the availability of data from sensors, corporate systems, and production processes. Turning that data into intelligent decisions, however, takes more than isolated machine learning models. The 6C Architecture was developed in the PhD research at USP to investigate a reference structure connecting data acquisition, processing, analytical mechanisms, decision-making, and operational monitoring.',
    },
    challenge: {
      pt: 'Um dos desafios da transformação digital industrial é a distância entre o desenvolvimento de modelos de IA e sua utilização sustentável na operação. Soluções pontuais podem funcionar bem em testes, mas sua integração exige interoperabilidade, manutenção, monitoramento e atualização contínua. A pesquisa buscou estruturar esses elementos em uma referência coerente.',
      en: 'One challenge of industrial digital transformation is the gap between developing AI models and using them sustainably in operations. Point solutions can perform well in testing, but integrating them requires interoperability, maintenance, monitoring, and continuous updating. The research sought to organize these elements into a coherent reference.',
    },
    solution: {
      pt: 'A proposta parte dos fundamentos da arquitetura 5C para sistemas ciberfísicos (Lee et al., 2015) e evolui para seis camadas: Conexão, Conversão, Ciberfísico, Cognição, Configuração e Consciência. A camada de Consciência é a contribuição original da tese: incorpora governança, monitoramento contínuo, aprendizado adaptativo e explicabilidade, além de IA generativa e LLMs, retroalimentando as demais camadas em vez de tratá-las como um fluxo de uma via.',
      en: 'The proposal builds on the 5C architecture for cyber-physical systems (Lee et al., 2015) and evolves it into six layers: Connection, Conversion, Cyber-Physical, Cognition, Configuration, and Consciousness. The Consciousness layer is the thesis’s original contribution: it incorporates governance, continuous monitoring, adaptive learning, and explainability, along with generative AI and LLMs, feeding back into the other layers instead of treating them as a one-way flow.',
    },
    contribution: {
      pt: 'Concepção, formalização e validação da arquitetura, no âmbito do doutorado em Ciências de Computação e Matemática Computacional (USP/ICMC), sob orientação do Prof. Cláudio Fabiano Motta Toledo e coorientação do Prof. Albeiro Espinosa Bedoya.',
      en: 'Design, formalization, and validation of the architecture, as part of the PhD in Computer Science and Computational Mathematics (USP/ICMC), advised by Prof. Cláudio Fabiano Motta Toledo and co-advised by Prof. Albeiro Espinosa Bedoya.',
    },
    results: {
      pt: 'Validada na tese por meio de três estudos de caso complementares: manutenção preditiva em uma indústria de óleo vegetal, previsão de demanda em uma indústria automotiva, e o sistema SmartProd de Planejamento e Controle da Produção. Os três casos estão detalhados na página dedicada à arquitetura.',
      en: 'Validated in the thesis through three complementary case studies: predictive maintenance in a vegetable oil industry, demand forecasting in an automotive industry, and the SmartProd Production Planning and Control system. All three are detailed on the architecture’s dedicated page.',
    },
    tech: ['MLOps', 'CRISP-DM', 'Gêmeos digitais', 'LLMs', 'Arquitetura de software'],
    diagram: '6c-overview.png',
    links: [{ label: { pt: 'Ver página dedicada à Arquitetura 6C', en: 'View the 6C Architecture page' }, href: '/arquitetura-6c' }],
  },
  {
    slug: 'smartprod',
    category: 'research',
    title: { pt: 'SmartProd', en: 'SmartProd' },
    subtitle: {
      pt: 'Inteligência Artificial e otimização para apoiar decisões em ambientes produtivos.',
      en: 'Artificial Intelligence and optimization to support decisions in production environments.',
    },
    summary: {
      pt: 'Sistema inteligente de Planejamento e Controle da Produção, com IA generativa como interface de decisão.',
      en: 'Intelligent Production Planning and Control system, with generative AI as the decision interface.',
    },
    overview: {
      pt: 'O Planejamento e Controle da Produção (PCP) envolve decisões complexas: sequenciamento de operações, alocação de recursos, uso da capacidade produtiva e cumprimento de prazos, tudo sob restrições que mudam constantemente. O SmartProd é um sistema inteligente de PCP, desenvolvido na MaximizaIA, que integra otimização, representação digital do ambiente produtivo e IA generativa para apoiar essas decisões.',
      en: 'Production Planning and Control (PPC) involves complex decisions: sequencing operations, allocating resources, using production capacity, and meeting deadlines, all under constantly shifting constraints. SmartProd is an intelligent PPC system, developed at MaximizaIA, integrating optimization, a digital representation of the production environment, and generative AI to support these decisions.',
    },
    challenge: {
      pt: 'Mudanças no sequenciamento afetam tempos de preparação, ocupação de recursos e cumprimento de prazos ao mesmo tempo. O desafio não é só calcular um plano de produção, mas oferecer mecanismos para avaliar alternativas, comparar cenários e entender o impacto operacional de cada decisão.',
      en: 'Resequencing affects setup time, resource usage, and deadlines all at once. The challenge isn’t just computing a production plan, but offering mechanisms to evaluate alternatives, compare scenarios, and understand the operational impact of each decision.',
    },
    solution: {
      pt: 'O sistema combina um gêmeo digital do ambiente fabril (máquinas, estações, disponibilidades) com algoritmos genéticos que exploram alternativas de sequenciamento e geram planos otimizados. Sobre essa base, a MIA (camada de IA generativa) funciona como interface em linguagem natural: interpreta pedidos do usuário, aciona o algoritmo de otimização, e explica os resultados e os trade-offs em texto simples, com gráficos de Gantt e indicadores de desempenho.',
      en: 'The system pairs a digital twin of the factory environment (machines, workstations, availability) with genetic algorithms that explore sequencing alternatives and generate optimized plans. On top of that, MIA (the generative AI layer) works as a natural-language interface: it interprets user requests, triggers the optimization algorithm, and explains the results and trade-offs in plain text, with Gantt charts and performance indicators.',
    },
    contribution: {
      pt: 'Liderança técnica do desenvolvimento, como sócia e especialista em IA da MaximizaIA: arquitetura do sistema, integração entre os componentes de otimização e IA generativa, e definição das soluções tecnológicas.',
      en: 'Technical leadership of the development, as partner and AI specialist at MaximizaIA: system architecture, integration between the optimization and generative AI components, and definition of the technology stack.',
    },
    results: {
      pt: 'No estudo de caso publicado no ENEGEP 2026, o plano otimizado pelo SmartProd, comparado ao plano em execução: reduziu o tempo total de setup de 92,8h para 40,3h (−56,6%); eliminou as 3 ordens em atraso do cenário (0 atrasos); e reduziu a espera média de entrega de 11,3 para 10,0 dias. Esses números são do estudo de caso documentado no artigo, não uma média de desempenho do sistema em geral.',
      en: 'In the case study published at ENEGEP 2026, the SmartProd-optimized plan, compared to the plan in execution: cut total setup time from 92.8h to 40.3h (−56.6%); eliminated the scenario’s 3 delayed orders (0 delays); and reduced average delivery wait time from 11.3 to 10.0 days. These numbers come from the documented case study in the paper, not an average performance figure for the system in general.',
    },
    tech: ['Algoritmos genéticos', 'Gêmeo digital', 'LLMs', 'Otimização', 'MLOps'],
    diagram: 'case-smartprod.png',
    links: [
      { label: { pt: 'MaximizaIA', en: 'MaximizaIA' }, href: 'https://www.maximizaia.com/' },
      { label: { pt: 'Artigo ENEGEP 2026', en: 'ENEGEP 2026 paper' }, href: 'https://portal.abepro.org.br/enegep/2026/' },
      { label: { pt: 'Ver na Arquitetura 6C', en: 'See it in the 6C Architecture' }, href: '/arquitetura-6c' },
    ],
  },
  {
    slug: 'vita-platform',
    category: 'research',
    title: { pt: 'Plataforma VITA', en: 'VITA Platform' },
    subtitle: {
      pt: 'Da arquitetura de referência à organização dos componentes de software para sistemas industriais inteligentes.',
      en: 'From reference architecture to the software components that make up intelligent industrial systems.',
    },
    summary: {
      pt: 'Visionary Industrial Technology Architecture: a estrutura técnica que materializa a Arquitetura 6C em componentes de software.',
      en: 'Visionary Industrial Technology Architecture: the technical structure that materializes the 6C Architecture into software components.',
    },
    overview: {
      pt: 'Uma arquitetura de referência precisa se relacionar com decisões concretas de engenharia de software para orientar aplicações reais. A Plataforma VITA (Visionary Industrial Technology Architecture) organiza os componentes, mecanismos analíticos e fluxos operacionais que materializam os princípios da Arquitetura 6C. O nome é uma homenagem à mãe de Fernanda, Vita.',
      en: 'A reference architecture needs to connect to concrete software engineering decisions in order to guide real applications. The VITA Platform (Visionary Industrial Technology Architecture) organizes the components, analytical mechanisms, and operational flows that materialize the 6C Architecture’s principles. The name is a tribute to Fernanda’s mother, Vita.',
    },
    diagram: 'vita-logo.webp',
    challenge: {
      pt: 'Sistemas industriais costumam combinar equipamentos, sensores, bancos de dados e plataformas corporativas (ERP, MES) construídos em tecnologias diferentes. Essa heterogeneidade exige mecanismos claros de integração, modularidade e manutenção, que a VITA aborda a partir da organização dos componentes de software e de suas responsabilidades.',
      en: 'Industrial systems typically combine equipment, sensors, databases, and corporate platforms (ERP, MES) built on different technologies. This heterogeneity requires clear mechanisms for integration, modularity, and maintenance, which VITA addresses by organizing software components and their responsibilities.',
    },
    architecture: {
      pt: 'Arquitetura baseada em microsserviços e APIs, seguindo princípios de MLOps, cobrindo integração com sistemas corporativos, processamento e gerenciamento de dados, componentes analíticos e modelos de IA. Cada camada da Arquitetura 6C corresponde a um conjunto de componentes e tecnologias na VITA, da camada de Conexão (dados) à camada de Consciência (saber).',
      en: 'A microservices- and API-based architecture following MLOps principles, covering integration with corporate systems, data processing and management, analytical components, and AI models. Each layer of the 6C Architecture maps to a set of components and technologies in VITA, from the Connection layer (data) to the Consciousness layer (knowledge).',
    },
    contribution: {
      pt: 'Concepção e desenvolvimento, no contexto da pesquisa de doutorado e de sua aplicação industrial, como a estrutura técnica que conecta os princípios da Arquitetura 6C à engenharia de sistemas de IA industrial.',
      en: 'Design and development, in the context of the PhD research and its industrial application, as the technical structure connecting the 6C Architecture’s principles to industrial AI systems engineering.',
    },
    caution: {
      pt: 'A VITA é apresentada aqui como estrutura conceitual e técnica de referência; esta página não afirma benefícios de desempenho comprovados sem métricas que os sustentem.',
      en: 'VITA is presented here as a conceptual and technical reference structure; this page does not claim proven performance benefits without metrics to support them.',
    },
    tech: ['Microsserviços', 'APIs', 'MLOps'],
    links: [{ label: { pt: 'GitHub', en: 'GitHub' }, href: 'https://github.com/fpgcarneiro/vita' }],
  },
  {
    slug: 'arquitetura-vant',
    category: 'research',
    title: { pt: 'Arquitetura para integração de VANT', en: 'UAV Integration Architecture' },
    subtitle: {
      pt: 'Uma arquitetura modular para integração, gerenciamento e exploração de dados de veículos aéreos não tripulados.',
      en: 'A modular architecture for integrating, managing, and exploring data from unmanned aerial vehicles.',
    },
    summary: {
      pt: 'Arquitetura base para integrar Veículos Aéreos Não Tripulados a uma plataforma web, tema da dissertação de mestrado.',
      en: 'Base architecture integrating Unmanned Aerial Vehicles with a web platform, the subject of the master’s dissertation.',
    },
    overview: {
      pt: 'Veículos Aéreos Não Tripulados (VANTs) ampliaram as possibilidades de coleta de dados em agricultura, monitoramento ambiental e inspeção. Mas usar esses equipamentos envolve mais do que capturar imagens: é preciso organizar o armazenamento, o acesso e o processamento dos dados para diferentes aplicações e usuários. A dissertação de mestrado, no ICMC/USP, investigou uma arquitetura para integrar VANTs a uma plataforma web.',
      en: 'Unmanned Aerial Vehicles (UAVs) expanded data-collection possibilities in agriculture, environmental monitoring, and inspection. But using them involves more than capturing images: storage, access, and processing of that data need to be organized for different applications and users. The master’s dissertation, at ICMC/USP, investigated an architecture for integrating UAVs with a web platform.',
    },
    challenge: {
      pt: 'Diferentes aplicações de VANTs têm necessidades específicas de coleta, gerenciamento e disponibilização de dados. A pesquisa buscou identificar requisitos comuns entre essas aplicações e estruturar uma arquitetura modular capaz de atender a diferentes contextos.',
      en: 'Different UAV applications have specific needs for data collection, management, and availability. The research sought to identify requirements common to these applications and structure a modular architecture able to serve different contexts.',
    },
    methodology: {
      pt: 'Levantamento bibliográfico e de requisitos por meio de entrevistas e questionários com usuários de VANTs, seguido da proposição arquitetural, desenvolvimento de um protótipo e validação por estudo de caso.',
      en: 'Literature and requirements gathering through interviews and questionnaires with UAV users, followed by the architectural proposal, prototype development, and validation through a case study.',
    },
    results: {
      pt: 'O protótipo foi validado em um estudo de caso em uma fazenda de cultivo de mangas, incluindo o processamento de imagens capturadas por VANT para identificação automática de linhas de cultivo, publicado no STSIVA 2019 (86% de eficiência, usando segmentação em espaço de cor YCrCb e transformada de Hough).',
      en: 'The prototype was validated in a case study on a mango farm, including processing UAV-captured images for automatic crop-line identification, published at STSIVA 2019 (86% efficiency, using YCrCb color-space segmentation and the Hough transform).',
    },
    contribution: {
      pt: 'Investigação dos requisitos, concepção arquitetural, desenvolvimento do protótipo e condução da pesquisa, no âmbito do mestrado em Ciências de Computação e Matemática Computacional (USP/ICMC), orientado pelo Prof. Cláudio Fabiano Motta Toledo e coorientado pelo Prof. Júlio Cezar Estrella.',
      en: 'Requirements investigation, architectural design, prototype development, and research leadership, as part of the master’s in Computer Science and Computational Mathematics (USP/ICMC), advised by Prof. Cláudio Fabiano Motta Toledo and co-advised by Prof. Júlio Cezar Estrella.',
    },
    relevance: {
      pt: 'Uma etapa importante da trajetória em arquitetura de sistemas, integração de tecnologias e processamento de dados, fundamentos que mais tarde se conectam à atuação em Inteligência Artificial aplicada.',
      en: 'An important step in her path through systems architecture, technology integration, and data processing, foundations that later connect to her work in applied Artificial Intelligence.',
    },
    tech: ['Arquitetura de software', 'Visão computacional', 'Mineração de dados', 'Plataforma web'],
    links: [
      { label: { pt: 'Dissertação (USP)', en: 'Dissertation (USP)' }, href: 'https://teses.usp.br/teses/disponiveis/55/55134/tde-17072019-085517/pt-br.html' },
      { label: { pt: 'Artigo STSIVA 2019', en: 'STSIVA 2019 paper' }, href: 'https://ieeexplore.ieee.org/document/8730214' },
    ],
  },

  // ───────────────────────── VENTURES ─────────────────────────
  {
    slug: 'lia',
    category: 'venture',
    title: { pt: 'LIA', en: 'LIA' },
    subtitle: {
      pt: 'Inteligência que organiza, conecta e transforma oportunidades.',
      en: 'Intelligence that organizes, connects, and turns opportunities into action.',
    },
    summary: {
      pt: 'Agente pessoal de IA, projeto autoral de Fernanda, para produtividade e para qualificar contatos profissionais.',
      en: 'A personal AI agent, Fernanda’s own project, for productivity and for qualifying professional contacts.',
    },
    overview: {
      pt: 'A LIA é um projeto autoral de Fernanda, criado para explorar o potencial dos agentes de Inteligência Artificial no apoio à produtividade pessoal, à organização profissional e à gestão de oportunidades. Combina assistência para planejamento e gestão do tempo com interação em linguagem natural para o primeiro atendimento de pessoas que entram em contato em busca de conhecimento, soluções ou serviços.',
      en: 'LIA is Fernanda’s own project, created to explore what AI agents can do to support personal productivity, professional organization, and opportunity management. It combines assistance for planning and time management with natural-language interaction for the first point of contact with people reaching out for knowledge, solutions, or services.',
    },
    challenge: {
      pt: 'Profissionais que acumulam pesquisa, desenvolvimento tecnológico, gestão de projetos e relacionamento com pessoas interessadas enfrentam dificuldade para administrar o tempo e responder de forma organizada a demandas diferentes. A LIA investiga como uma agente inteligente pode servir de interface entre organização pessoal, interação com pessoas e gestão de oportunidades, reduzindo tarefas repetitivas e apoiando decisões.',
      en: 'Professionals juggling research, technology development, project management, and relationships with interested contacts struggle to manage their time and respond to different demands in an organized way. LIA investigates how an intelligent agent can serve as an interface between personal organization, interacting with people, and managing opportunities, cutting down repetitive tasks and supporting decisions.',
    },
    extraSections: [
      {
        heading: { pt: 'Frente 1 — Produtividade e gestão do tempo', en: 'Front 1 — Productivity and time management' },
        body: {
          pt: 'Apoio à organização de compromissos e atividades, planejamento diário e semanal, gestão de prioridades, acompanhamento de objetivos e interação em linguagem natural para facilitar o planejamento da rotina.',
          en: 'Support for organizing commitments and activities, daily and weekly planning, priority management, goal tracking, and natural-language interaction to make routine planning easier.',
        },
      },
      {
        heading: { pt: 'Frente 2 — Relacionamento e qualificação de oportunidades', en: 'Front 2 — Relationship and opportunity qualification' },
        body: {
          pt: 'A LIA também foi concebida para o primeiro atendimento de pessoas que entram em contato profissionalmente com Fernanda: compreender a demanda, identificar o contexto e fazer uma triagem inicial, apontando se há oportunidade de consultoria, formação, serviços tecnológicos, desenvolvimento de software ou projetos de IA. O objetivo não é vender de forma indiscriminada, mas entender a necessidade de cada pessoa e encaminhar melhor. Isso é qualificação de contatos recebidos, diferente de prospecção ativa: a LIA não busca novos clientes por conta própria.',
          en: 'LIA was also conceived to handle the first contact with people who reach out to Fernanda professionally: understanding the request, identifying the context, and doing an initial triage, flagging whether there is an opportunity for consulting, training, technology services, software development, or AI projects. The goal isn’t to sell indiscriminately, but to understand each person’s need and route it better. This is qualifying inbound contacts, not active prospecting: LIA doesn’t search for new clients on its own.',
        },
      },
      {
        heading: { pt: 'Arquitetura conceitual', en: 'Conceptual architecture' },
        body: {
          pt: 'Dois módulos ligados a um núcleo de agente inteligente: produtividade e organização; relacionamento e oportunidades. Na frente de relacionamento, o fluxo conceitual é: contato recebido → compreensão da necessidade → triagem e qualificação → identificação de oportunidades → encaminhamento para avaliação humana. Esse fluxo descreve a proposta conceitual do projeto, não uma arquitetura técnica já implementada e confirmada em detalhe.',
          en: 'Two modules connected to an intelligent-agent core: productivity and organization; relationship and opportunities. On the relationship front, the conceptual flow is: contact received → understanding the need → triage and qualification → identifying opportunities → routing to human review. This flow describes the project’s conceptual proposal, not a technical architecture already implemented and confirmed in detail.',
        },
      },
      {
        heading: { pt: 'Princípios', en: 'Principles' },
        body: {
          pt: 'Tecnologia centrada nas pessoas, orientada à utilidade prática, à autonomia do usuário e ao uso responsável de IA. Na qualificação de contatos, isso inclui transparência sobre o uso de IA na interação, proteção e minimização dos dados pessoais coletados, e supervisão humana no encaminhamento final.',
          en: 'Technology centered on people, oriented toward practical usefulness, user autonomy, and the responsible use of AI. In qualifying contacts, that means transparency about AI being used in the interaction, protecting and minimizing the personal data collected, and human oversight over the final routing.',
        },
      },
    ],
    contribution: {
      pt: 'Idealização e concepção do projeto, conectada à experiência de Fernanda em Inteligência Artificial, agentes inteligentes, processamento de linguagem natural, arquitetura de software e automação de processos.',
      en: 'Ideation and design of the project, connected to Fernanda’s experience in Artificial Intelligence, intelligent agents, natural language processing, software architecture, and process automation.',
    },
    relevance: {
      pt: 'Representa o interesse de Fernanda em explorar agentes de IA para além dos ambientes corporativos, aplicados também a necessidades individuais e ao relacionamento profissional: uma IA centrada nas pessoas e na utilidade prática.',
      en: 'Reflects Fernanda’s interest in exploring AI agents beyond corporate environments, applied to individual needs and professional relationships as well: AI centered on people and practical usefulness.',
    },
    caution: {
      pt: 'Projeto pessoal em desenvolvimento. As funcionalidades e o fluxo descritos são a proposta e os objetivos do projeto, não funcionalidades já implementadas, disponíveis publicamente ou confirmadas em detalhe técnico.',
      en: 'A personal project in development. The features and flow described are the project’s proposal and goals, not features already implemented, publicly available, or confirmed in technical detail.',
    },
    tech: ['Agentes de IA', 'Processamento de linguagem natural'],
  },
  {
    slug: 'mapa-de-ia',
    category: 'venture',
    title: { pt: 'Mapa de IA', en: 'Mapa de IA' },
    subtitle: {
      pt: 'Uma metodologia prática para transformar o interesse em IA em oportunidades concretas dentro das empresas.',
      en: 'A practical method for turning interest in AI into concrete opportunities inside a business.',
    },
    summary: {
      pt: 'Método e intensivo para pequenas e médias empresas descobrirem onde, como e quando aplicar IA.',
      en: 'A method and intensive workshop helping small and medium businesses find where, how, and when to apply AI.',
    },
    overview: {
      pt: 'A popularização das ferramentas de IA deu a profissionais e empresas acesso a tecnologias antes restritas a especialistas. Mas conhecer uma ferramenta não é o mesmo que saber usá-la para resolver um problema real do negócio. Muitas pequenas e médias empresas não sabem por onde começar nem como avaliar se uma aplicação de IA faz sentido para elas. O Mapa de IA nasceu para aproximar esse conhecimento das necessidades práticas de gestores e empreendedores.',
      en: 'The popularization of AI tools gave professionals and businesses access to technology once reserved for specialists. But knowing a tool isn’t the same as knowing how to use it to solve a real business problem. Many small and medium businesses don’t know where to start or how to tell whether an AI application makes sense for them. Mapa de IA was created to bridge that gap for managers and business owners.',
    },
    challenge: {
      pt: 'Adotar IA não deveria começar pela escolha de uma ferramenta. Antes disso, é preciso entender os processos da empresa, reconhecer tarefas repetitivas e avaliar onde a tecnologia realmente ajuda.',
      en: 'Adopting AI shouldn’t start with picking a tool. Before that, it takes understanding the business’s processes, recognizing repetitive tasks, and assessing where the technology genuinely helps.',
    },
    methodology: {
      pt: 'Método das Três Tarefas: listar o que se repete toda semana na empresa, e filtrar cada tarefa por três perguntas — ela se repete? é feita com texto ou informação? um erro nela é fácil de conferir? — para chegar a três tarefas prontas para receber IA, começando pela primeira já testada no intensivo.',
      en: 'The Three Tasks Method: list what repeats every week in the business, then filter each task through three questions — does it repeat? is it done with text or information? is an error in it easy to check? — to arrive at three tasks ready for AI, starting with the first one tested live in the workshop.',
    },
    contribution: {
      pt: 'Criação do método, estruturação do conteúdo e condução do intensivo, conectada à experiência com pesquisa aplicada e desenvolvimento de soluções de IA na MaximizaIA.',
      en: 'Creation of the method, content design, and hosting of the workshop, connected to her experience with applied research and AI solutions development at MaximizaIA.',
    },
    tech: [],
    links: [{ label: { pt: 'Mapa de IA', en: 'Mapa de IA' }, href: 'https://mapadeia.com.br/' }],
  },
  {
    slug: 'meu-tato',
    category: 'venture',
    title: { pt: 'Meu Tato', en: 'Meu Tato' },
    subtitle: {
      pt: 'Empreendedorismo e desenvolvimento de soluções para o cotidiano de pessoas neurodivergentes.',
      en: 'Entrepreneurship and product development for the everyday life of neurodivergent people.',
    },
    summary: {
      pt: 'Projeto pessoal, criado com o esposo, para facilitar a vida de pessoas neurodivergentes.',
      en: 'A personal project, created with her husband, to make life easier for neurodivergent people.',
    },
    overview: {
      pt: 'Pessoas neurodivergentes têm necessidades diferentes de atenção, organização e experiência sensorial no dia a dia. O Meu Tato é uma iniciativa empreendedora de Fernanda com o esposo, voltada a produtos sensoriais e a soluções tecnológicas que considerem essas necessidades, reunindo desenvolvimento de produtos físicos, fabricação digital e exploração de soluções digitais.',
      en: 'Neurodivergent people have different everyday needs around attention, organization, and sensory experience. Meu Tato is an entrepreneurial venture by Fernanda and her husband, focused on sensory products and technology solutions that account for those needs, combining physical product development, digital fabrication, and digital solutions.',
    },
    solution: {
      pt: 'Duas frentes: produtos sensoriais, já desenvolvidos e comercializados, incluindo itens de fabricação digital; e um aplicativo em desenvolvimento, voltado a apoiar foco, produtividade e organização cotidiana.',
      en: 'Two fronts: sensory products, already developed and sold, including digitally fabricated items; and an app in development, aimed at supporting focus, productivity, and daily organization.',
    },
    contribution: {
      pt: 'Cofundadora, ao lado do esposo, responsável pela concepção, desenvolvimento e gestão da iniciativa.',
      en: 'Co-founder, alongside her husband, responsible for the venture’s concept, development, and management.',
    },
    relevance: {
      pt: 'Amplia sua atuação empreendedora para além das aplicações industriais de IA, aproximando tecnologia, desenvolvimento de produtos e necessidades humanas.',
      en: 'Extends her entrepreneurial work beyond industrial AI applications, bringing technology, product development, and human needs closer together.',
    },
    caution: {
      pt: 'Os produtos Meu Tato não têm propriedades terapêuticas comprovadas nem substituem acompanhamento profissional.',
      en: 'Meu Tato products have no proven therapeutic properties and do not replace professional care.',
    },
    tech: [],
    links: [{ label: { pt: 'Meu Tato', en: 'Meu Tato' }, href: 'https://meutato.com/' }],
  },
];
