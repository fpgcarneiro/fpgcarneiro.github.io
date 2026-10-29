import type { Bilingual } from './research';

export interface SixCLayer {
  id: string;
  number: number;
  name: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
}

export const sixcLayers: SixCLayer[] = [
  {
    id: 'connection',
    number: 1,
    name: { pt: 'Conexão', en: 'Connection' },
    tagline: { pt: 'Aquisição de dados', en: 'Data acquisition' },
    description: {
      pt: 'Responsável pela aquisição e integração de dados industriais provenientes de sistemas corporativos, sensores, dispositivos conectados e registros operacionais, como produção, estoques, ordens de fabricação e disponibilidade de recursos.',
      en: 'Responsible for acquiring and integrating industrial data from corporate systems, sensors, connected devices, and operational records, such as production, inventory, work orders, and resource availability.',
    },
  },
  {
    id: 'conversion',
    number: 2,
    name: { pt: 'Conversão', en: 'Conversion' },
    tagline: { pt: 'Tratamento e padronização', en: 'Processing and standardization' },
    description: {
      pt: 'Os dados passam por tratamento, sincronização, limpeza e padronização, garantindo qualidade, rastreabilidade e consistência para os mecanismos analíticos das camadas seguintes.',
      en: 'Data goes through processing, synchronization, cleaning, and standardization, ensuring quality, traceability, and consistency for the analytical mechanisms in the layers that follow.',
    },
  },
  {
    id: 'cyber-physical',
    number: 3,
    name: { pt: 'Ciberfísico', en: 'Cyber-Physical' },
    tagline: { pt: 'Gêmeos digitais', en: 'Digital twins' },
    description: {
      pt: 'Integra os ativos físicos e digitais do ambiente industrial por meio de modelos virtuais e gêmeos digitais, permitindo simular cenários, avaliar restrições operacionais e analisar o comportamento produtivo antes da execução real.',
      en: 'Integrates the physical and digital assets of the industrial environment through virtual models and digital twins, enabling scenario simulation, assessment of operational constraints, and analysis of production behavior before real-world execution.',
    },
  },
  {
    id: 'cognition',
    number: 4,
    name: { pt: 'Cognição', en: 'Cognition' },
    tagline: { pt: 'Modelos e otimização', en: 'Models and optimization' },
    description: {
      pt: 'Concentra os mecanismos responsáveis pela geração de conhecimento e suporte à tomada de decisão: modelos de aprendizado de máquina, algoritmos de otimização e análises responsáveis por previsões, identificação de gargalos e geração de insights operacionais.',
      en: 'Concentrates the mechanisms responsible for knowledge generation and decision support: machine learning models, optimization algorithms, and analytics responsible for forecasts, bottleneck identification, and operational insights.',
    },
  },
  {
    id: 'configuration',
    number: 5,
    name: { pt: 'Configuração', en: 'Configuration' },
    tagline: { pt: 'Reconfiguração dinâmica', en: 'Dynamic reconfiguration' },
    description: {
      pt: 'Responsável pela adaptação dinâmica dos processos industriais, permitindo ajustes contínuos nos parâmetros de planejamento e controle diante de mudanças na demanda, na disponibilidade de recursos ou no ambiente produtivo.',
      en: 'Responsible for the dynamic adaptation of industrial processes, enabling continuous adjustments to planning and control parameters in response to changes in demand, resource availability, or the production environment.',
    },
  },
  {
    id: 'consciousness',
    number: 6,
    name: { pt: 'Consciência', en: 'Consciousness' },
    tagline: { pt: 'A camada proposta na tese', en: 'The layer proposed in the thesis' },
    description: {
      pt: 'O principal diferencial da Arquitetura 6C. Incorpora mecanismos de governança, monitoramento contínuo, aprendizado adaptativo e explicabilidade, além de recursos de IA generativa e LLMs que permitem interpretação contextualizada e interação semântica entre usuários e sistemas inteligentes. Essa camada retroalimenta as demais.',
      en: "The main differentiator of the 6C Architecture. It incorporates governance, continuous monitoring, adaptive learning, and explainability mechanisms, along with generative AI and LLM capabilities that enable contextual interpretation and semantic interaction between users and intelligent systems. This layer feeds back into the others.",
    },
  },
];

export interface SixCCase {
  id: string;
  title: Bilingual;
  context: Bilingual;
  diagram: string;
}

export const sixcCases: SixCCase[] = [
  {
    id: 'predictive-maintenance',
    title: { pt: 'Manutenção preditiva', en: 'Predictive maintenance' },
    context: {
      pt: 'Indústria de óleo vegetal. A arquitetura consolidou dados de sensores, detectou anomalias e antecipou falhas em equipamentos críticos, contribuindo para o aumento da disponibilidade operacional.',
      en: 'Vegetable oil industry. The architecture consolidated sensor data, detected anomalies, and anticipated failures in critical equipment, contributing to increased operational availability.',
    },
    diagram: 'case-predictive-maintenance.png',
  },
  {
    id: 'demand-forecasting',
    title: { pt: 'Previsão de demanda', en: 'Demand forecasting' },
    context: {
      pt: 'Indústria automotiva. Modelos de séries temporais e redes neurais recorrentes anteciparam o comportamento da demanda com base em variáveis internas e macroeconômicas, possibilitando decisões mais assertivas e redução de estoques.',
      en: 'Automotive industry. Time series models and recurrent neural networks anticipated demand behavior based on internal and macroeconomic variables, enabling more assertive decisions and inventory reduction.',
    },
    diagram: 'case-demand-forecasting.png',
  },
  {
    id: 'smartprod',
    title: { pt: 'SmartProd: Planejamento e Controle da Produção', en: 'SmartProd: Production Planning and Control' },
    context: {
      pt: 'Sistema inteligente que combina algoritmos de otimização, simulação e IA generativa para oferecer um ciclo de decisão contínuo, explicável e adaptativo. Desenvolvido na MaximizaIA.',
      en: 'An intelligent system combining optimization algorithms, simulation, and generative AI to offer a continuous, explainable, and adaptive decision cycle. Developed at MaximizaIA.',
    },
    diagram: 'case-smartprod.png',
  },
];
