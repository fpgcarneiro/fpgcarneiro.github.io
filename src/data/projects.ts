import type { Bilingual } from './research';

export type ProjectCategory = 'research' | 'venture';

export interface ProjectLink {
  label: Bilingual;
  href: string;
}

export interface ProjectEntry {
  slug: string;
  category: ProjectCategory;
  categoryLabel?: Bilingual;
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
      pt: 'No estudo de caso publicado no ENEGEP 2026, a aplicação do SmartProd reduziu o tempo total de setup em 56,6% (de 92,8h para 40,3h), eliminou os três atrasos identificados no cenário analisado e reduziu a espera média de entrega de 11,3 para 10,0 dias. Os indicadores correspondem às condições específicas do experimento apresentado no artigo.',
      en: 'In the case study published at ENEGEP 2026, applying SmartProd cut total setup time by 56.6% (from 92.8h to 40.3h), eliminated the three delays identified in the scenario analyzed, and reduced average delivery wait time from 11.3 to 10.0 days. These indicators correspond to the specific conditions of the experiment presented in the paper.',
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
    relevance: {
      pt: 'A VITA estabelece uma estrutura tecnológica para organizar componentes de software, mecanismos de integração e recursos de Inteligência Artificial a partir dos princípios da Arquitetura 6C, aproximando a pesquisa arquitetural de suas possibilidades de implementação. Parte dos componentes está prototipada; outros permanecem como especificação arquitetural, a ser detalhada em trabalhos futuros.',
      en: 'VITA establishes a technology structure for organizing software components, integration mechanisms, and AI capabilities based on the 6C Architecture’s principles, bringing the architectural research closer to its implementation possibilities. Some components are prototyped; others remain an architectural specification, to be detailed in future work.',
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
    categoryLabel: {
      pt: 'Inteligência Artificial · Agentes Inteligentes',
      en: 'Artificial Intelligence · Intelligent Agents',
    },
    title: { pt: 'LIA', en: 'LIA' },
    subtitle: {
      pt: 'Uma agente inteligente para organizar rotinas, compreender necessidades e conectar oportunidades.',
      en: 'An intelligent agent to organize routines, understand needs, and connect opportunities.',
    },
    summary: {
      pt: 'Agente pessoal de Inteligência Artificial, projeto autoral de Fernanda, para produtividade e relacionamento profissional.',
      en: 'A personal AI agent, Fernanda’s own project, for productivity and professional relationships.',
    },
    overview: {
      pt: 'A LIA é um projeto autoral de Fernanda Guidotti Carneiro, concebido para explorar como agentes de Inteligência Artificial podem contribuir para uma gestão mais inteligente do tempo, das atividades e dos relacionamentos profissionais. A iniciativa surgiu da necessidade de conciliar diferentes responsabilidades, organizar prioridades e oferecer uma experiência mais personalizada a quem procura orientação ou soluções tecnológicas. Sua proposta integra duas frentes complementares: a produtividade pessoal e a gestão inteligente de oportunidades, usando Inteligência Artificial para facilitar interações, compreender contextos e apoiar decisões.',
      en: 'LIA is Fernanda Guidotti Carneiro’s own project, created to explore how AI agents can contribute to smarter management of time, activities, and professional relationships. The idea grew out of the need to balance different responsibilities, organize priorities, and offer a more personal experience to people looking for guidance or technology solutions. Its proposal brings together two complementary fronts: personal productivity and intelligent opportunity management, using Artificial Intelligence to ease interactions, understand context, and support decisions.',
    },
    challenge: {
      pt: 'Administrar o tempo vai além de organizar uma agenda. Envolve reconhecer prioridades, acompanhar responsabilidades e abrir espaço para o que realmente precisa de atenção. Ao mesmo tempo, o relacionamento profissional pede disponibilidade para ouvir, compreender demandas e identificar como o conhecimento e a experiência podem ajudar a resolver um problema. A LIA nasce para aproximar essas duas necessidades.',
      en: 'Managing time goes beyond organizing a calendar. It means recognizing priorities, keeping track of responsibilities, and making room for what truly needs attention. At the same time, professional relationships call for listening, understanding requests, and figuring out how knowledge and experience can help solve a problem. LIA exists to bring these two needs together.',
    },
    extraSections: [
      {
        heading: { pt: 'Produtividade e gestão do tempo', en: 'Productivity and time management' },
        body: {
          pt: 'Nesta frente, a LIA apoia o planejamento de atividades, a organização de compromissos e a definição de prioridades. A proposta é usar interações em linguagem natural para facilitar o acompanhamento de objetivos e a organização do cotidiano, com uma gestão de tempo mais contextualizada e consciente.',
          en: 'On this front, LIA supports planning activities, organizing commitments, and setting priorities. The idea is to use natural-language interaction to make it easier to track goals and organize day-to-day life, with a more contextual, conscious approach to time.',
        },
      },
      {
        heading: { pt: 'Relacionamento e oportunidades', en: 'Relationships and opportunities' },
        body: {
          pt: 'A segunda frente da LIA está em como pessoas e necessidades se conectam ao conhecimento e às soluções disponíveis. Ao receber um contato profissional, a agente apoia o primeiro atendimento, compreende o contexto da demanda e identifica possibilidades de colaboração, como consultoria especializada, formação, desenvolvimento de software, serviços tecnológicos e projetos de Inteligência Artificial. A ideia é tornar esse primeiro contato mais organizado e significativo.',
          en: 'LIA’s second front is about how people and needs connect to available knowledge and solutions. When a professional contact comes in, the agent supports that first interaction, understands the context of the request, and identifies possibilities for collaboration, such as specialized consulting, training, software development, technology services, and AI projects. The idea is to make that first contact more organized and meaningful.',
        },
      },
      {
        heading: { pt: 'Concepção e arquitetura', en: 'Concept and architecture' },
        body: {
          pt: 'A LIA reúne conceitos de agentes inteligentes, processamento de linguagem natural e automação de processos numa proposta de assistência pessoal e profissional. Sua arquitetura conceitual tem dois eixos, organização pessoal e relacionamento profissional, articulados por mecanismos de compreensão de linguagem natural e apoio à decisão, com atenção a privacidade, transparência e supervisão humana nas interações com outras pessoas.',
          en: 'LIA brings together concepts from intelligent agents, natural language processing, and process automation into a proposal for personal and professional assistance. Its conceptual architecture has two axes, personal organization and professional relationships, connected by natural-language understanding and decision support, with attention to privacy, transparency, and human oversight in interactions with other people.',
        },
      },
    ],
    contribution: {
      pt: 'A LIA é uma iniciativa independente, idealizada por Fernanda, que reúne sua experiência em Inteligência Artificial, arquitetura de software e desenvolvimento de soluções inteligentes.',
      en: 'LIA is an independent initiative, conceived by Fernanda, drawing on her experience in Artificial Intelligence, software architecture, and intelligent solutions development.',
    },
    relevance: {
      pt: 'A LIA expressa uma visão de Inteligência Artificial que vai além da automação de tarefas: uma tecnologia capaz de ajudar a organizar o tempo, compreender necessidades e facilitar conexões relevantes.',
      en: 'LIA expresses a vision of Artificial Intelligence that goes beyond automating tasks: technology that helps organize time, understand needs, and make relevant connections.',
    },
    caution: {
      pt: 'Status: projeto autoral em desenvolvimento. As funcionalidades descritas são a proposta do projeto e serão identificadas como implementadas apenas quando confirmadas.',
      en: 'Status: author’s project in development. The features described are the project’s proposal and will be identified as implemented only once confirmed.',
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
      pt: 'O Meu Tato reúne criatividade, fabricação digital e desenvolvimento de produtos sensoriais, com foco em experiência de uso, acessibilidade e necessidades do cotidiano. Já conta com produtos sensoriais desenvolvidos e comercializados, incluindo itens de fabricação digital, e tem em desenvolvimento um aplicativo para apoiar foco, produtividade e organização do dia a dia. Os produtos são voltados ao conforto e à rotina, sem substituir acompanhamento profissional.',
      en: 'Meu Tato brings together creativity, digital fabrication, and sensory product development, focused on the user experience, accessibility, and everyday needs. It already has sensory products developed and sold, including digitally fabricated items, and has an app in development to support focus, productivity, and daily organization. The products are designed for comfort and routine, and don’t replace professional care.',
    },
    contribution: {
      pt: 'Cofundadora, ao lado do esposo, responsável pela concepção, desenvolvimento e gestão da iniciativa.',
      en: 'Co-founder, alongside her husband, responsible for the venture’s concept, development, and management.',
    },
    relevance: {
      pt: 'Amplia sua atuação empreendedora para além das aplicações industriais de IA, aproximando tecnologia, desenvolvimento de produtos e necessidades humanas.',
      en: 'Extends her entrepreneurial work beyond industrial AI applications, bringing technology, product development, and human needs closer together.',
    },
    tech: [],
    links: [{ label: { pt: 'Meu Tato', en: 'Meu Tato' }, href: 'https://meutato.com/' }],
  },
];
