export const site = {
  name: 'SimpleWay Academy',
  course: 'SimpleWay English',
  tagline: 'Aprenda com leveza. Fale com confiança. Evolua com propósito.',
  description:
    'A SimpleWay Academy une escola premium, método próprio e app interativo para transformar inglês em uma jornada prática, divertida e mensurável.',
  url: 'https://simplewayacademy.com.br',
  appUrl: 'https://app.simplewayacademy.com.br',
  whatsappNumber: '5519998930846',
  whatsappDisplay: '+55 19 99893-0846',
  email: 'contato@simplewayacademy.com.br',
  author: 'Tehkné Solutions',
  deployMarker: 'FORCE-LIGHT-V3-ROOT-2026-06-12',
  logos: {
    mark: '/brand/simpleway-logomark.png',
    full: '/brand/simpleway-logo-full.png',
    og: '/og-simpleway-academy.png',
    favicon: '/favicon.ico'
  },
  colors: {
    blue: '#0057D8',
    red: '#E63946',
    gold: '#FFD166',
    ink: '#102033',
    white: '#FFFDF7'
  }
};

export const navItems = [
  { href: '/metodologia/', label: 'Metodologia' },
  { href: '/simpleway-english/', label: 'SimpleWay English' },
  { href: '/planos/', label: 'Planos' },
  { href: '/para-escolas/', label: 'Para escolas' },
  { href: '/blog/', label: 'Blog' }
];

export const methodSteps = [
  {
    key: 'apf',
    number: '01',
    icon: 'spark',
    title: 'Fala Inicial',
    technical: 'APF — Ativação Pessoal de Fala',
    color: 'blue',
    short:
      'Você começa respondendo perguntas simples sobre você, sua rotina e sua vida real. Assim, o inglês deixa de ser teoria e vira comunicação desde o primeiro minuto.',
    detail:
      'Etapa de aquecimento comunicativo em que o aluno responde perguntas pessoais com estruturas controladas, slots variáveis e feedback progressivo.'
  },
  {
    key: 'story',
    number: '02',
    icon: 'story',
    title: 'História Guiada',
    technical: 'DFI — Imersão Guiada',
    color: 'gold',
    short:
      'Mini-histórias bilíngues mostram o inglês acontecendo em contexto.',
    detail:
      'O aluno entende primeiro o sentido. Depois, percebe padrões de frase, vocabulário e ritmo. Isso cria uma ponte entre compreensão passiva e produção ativa.'
  },
  {
    key: 'questions',
    number: '03',
    icon: 'chat',
    title: 'Perguntas da História',
    technical: 'Compreensão Ativa + Ciclo de Fala',
    color: 'red',
    short:
      'Perguntas rápidas fazem o aluno recuperar informação, responder e ganhar velocidade.',
    detail:
      'A história deixa de ser apenas leitura. Ela vira treino de memória, escuta, resposta e flexibilidade mental, preparando o aluno para falar com menos tradução interna.'
  },
  {
    key: 'activation',
    number: '04',
    icon: 'bolt',
    title: 'Desafio das 72 Frases',
    technical: 'NDP — Treino Neural de Frases + Activation 72',
    color: 'blue',
    short:
      'As estruturas principais viram prática gamificada em escuta, fala, leitura e escrita.',
    detail:
      'O aluno não vê uma lista bruta e cansativa. A plataforma transforma os drills em cards, desafios e feedback, ajudando a automatizar frases úteis de verdade.'
  },
  {
    key: 'review',
    number: '05',
    icon: 'target',
    title: 'Revisão Inteligente',
    technical: 'Retention Check + Checkpoint',
    color: 'gold',
    short:
      'A lição termina com consolidação, retenção e preparação para o próximo nível.',
    detail:
      'O aluno revisa o que importa, mede domínio e segue com clareza. A cada ciclo, checkpoints misturam conteúdos anteriores para validar fluência real.'
  }
];

export const cycleOne = [
  { lesson: 'L1', title: 'Identidade & Presente', focus: 'I am / I do', status: 'matriz validada' },
  { lesson: 'L2', title: 'Passado Simples', focus: 'I did / Yesterday', status: 'produção guiada' },
  { lesson: 'L3', title: 'Lugares e Rotinas', focus: 'Where / Routine', status: 'blueprint' },
  { lesson: 'L4', title: 'Família e Terceira Pessoa', focus: 'He / She', status: 'blueprint' },
  { lesson: 'L5', title: 'Futuro e Planos', focus: 'I will / Going to', status: 'blueprint' },
  { lesson: 'L6', title: 'Adjetivos e Sentimentos', focus: 'It was / I feel', status: 'blueprint' },
  { lesson: 'L7', title: 'Checkpoint I', focus: 'Review L1–L6', status: 'desbloqueio de nível' }
];

export const planCards = [
  {
    title: 'Turma ao vivo + App',
    tag: 'Mais completo',
    description:
      'Aulas com professor, prática orientada e acesso ao app SimpleWay para treinar entre os encontros.',
    features: ['Aulas ao vivo', 'App oficial', 'Speaking guiado', 'Progresso e revisão'],
    cta: 'Quero entrar na turma'
  },
  {
    title: 'Plataforma SimpleWay',
    tag: 'Ritmo próprio',
    description:
      'Para quem quer usar o app como professor autônomo, com trilha de estudo, voz, desafios e revisão.',
    features: ['Lições interativas', 'Treino de frases', 'Revisão inteligente', 'Gamificação'],
    cta: 'Quero testar o app'
  },
  {
    title: 'Gravadas + Comunidade',
    tag: 'Flexível',
    description:
      'Conteúdo gravado, apoio em comunidade e rotina de prática para manter constância sem complicar.',
    features: ['Aulas gravadas', 'Comunidade', 'Rotina de estudo', 'Apoio progressivo'],
    cta: 'Quero saber mais'
  }
];

export const faqs = [
  {
    question: 'O curso acontece no site ou no app?',
    answer:
      'O site apresenta a escola, a metodologia, os planos e a captação. A experiência de estudo acontece no app SimpleWay Academy, que é a plataforma oficial do aluno e do professor.'
  },
  {
    question: 'O que é a Fala Inicial?',
    answer:
      'É a APF — Ativação Pessoal de Fala. Você começa respondendo perguntas simples sobre você, sua rotina e sua vida real. Assim, o inglês deixa de ser teoria e vira comunicação desde o primeiro minuto.'
  },
  {
    question: 'Por que existem 72 frases por lição?',
    answer:
      'Porque a SimpleWay usa repetição inteligente e progressiva. As frases não aparecem como lista bruta para o aluno: elas viram desafios de escuta, fala, leitura e escrita dentro da plataforma.'
  },
  {
    question: 'Serve para iniciante?',
    answer:
      'Sim. O método começa com vocabulário controlado, histórias bilíngues e respostas simples, evoluindo por ciclos. A ideia é criar segurança, não sobrecarregar o aluno.'
  },
  {
    question: 'Tem turma para escola ou empresa?',
    answer:
      'Sim. A SimpleWay pode ser aplicada em turmas fechadas, projetos educacionais, escolas parceiras e empresas que querem desenvolver inglês com acompanhamento e tecnologia.'
  }
];

export const unsplash = {
  hero: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=82',
  kids: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=82',
  teacher: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=82',
  study: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=82',
  classroom: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=82',
  online: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82',
  group: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=82'
};
