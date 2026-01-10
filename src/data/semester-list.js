import { COURSE_STATUS } from "../constants/COURSE_STATUS"

export const SEMESTER_LIST = [
  {
    id: 1, name: '1º Período', courses: [
      { id: 'icc', name: 'I.C.C.', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'calculo-1', name: 'Cálculo I', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'gaal', name: 'G.A.A.L.', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'empreendedorismo', name: 'Empreendedorismo', prerequisites: [], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 2, name: '2º Período', courses: [
      { id: 'algoritmos', name: 'Algoritmos e Programação', prerequisites: ['icc'], status: COURSE_STATUS.UNDONE },
      { id: 'calculo-2', name: 'Cálculo de Várias Variáveis', prerequisites: ['calculo-1'], status: COURSE_STATUS.UNDONE },
      { id: 'algebra', name: 'Álgebra Linear Computacional', prerequisites: ['gaal'], status: COURSE_STATUS.UNDONE },
      { id: 'sistemas-digitais', name: 'Sistemas Digitais', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'discreta', name: 'Matemática Discreta', prerequisites: [], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 3, name: '3º Período', courses: [
      { id: 'aeds', name: 'A.E.D.S', prerequisites: ['algoritmos'], status: COURSE_STATUS.UNDONE },
      { id: 'gerencia', name: 'Gerência de Projetos', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'metodologia', name: 'Metodologia Científica', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'arquitetura-1', name: 'Arquitetura I', prerequisites: ['sistemas-digitais'], status: COURSE_STATUS.UNDONE },
      { id: 'teoria-grafos', name: 'Introdução à Teoria de Grafos', prerequisites: ['discreta'], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 4, name: '4º Período', courses: [
      { id: 'tbo', name: 'Técnicas de Busca e Ordenação', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'uce-1', name: 'UCE I', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'probabilidade', name: 'Probabilidade e Estatística', prerequisites: ['calculo-2'], status: COURSE_STATUS.UNDONE },
      { id: 'arquitetura-2', name: 'Arquitetura II', prerequisites: ['arquitetura-1'], status: COURSE_STATUS.UNDONE },
      { id: 'poo', name: 'Programação Orientada a Objetos', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 5, name: '5º Período', courses: [
      { id: 'osa', name: 'Organização e Sistemas de Arquivos', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'pesquisa-operacional', name: 'Pesquisa Operacional', prerequisites: ['algoritmos'], status: COURSE_STATUS.UNDONE },
      { id: 'engenharia-software', name: 'Engenharia de Software', prerequisites: ['poo'], status: COURSE_STATUS.UNDONE },
      { id: 'sistemas-operacionais', name: 'Sistemas Operacionais', prerequisites: ['arquitetura-1'], status: COURSE_STATUS.UNDONE },
      { id: 'web', name: 'Desenvolvimento Web', prerequisites: ['poo'], status: COURSE_STATUS.UNDONE },
      { id: 'paa', name: 'Projeto e Análise de Algortimos', prerequisites: ['discreta', 'tbo'], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 6, name: '6º Período', courses: [
      { id: 'banco-dados', name: 'Banco de Dados', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'uce-2', name: 'UCE II', prerequisites: ['engenharia-software', 'web'], status: COURSE_STATUS.UNDONE },
      { id: 'paradigmas', name: 'Paradigmas de Programação', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'algoritmos-grafos', name: 'Algoritmos em Grafos', prerequisites: ['teoria-grafos', 'paa'], status: COURSE_STATUS.UNDONE },
      { id: 'complexidade', name: 'Complexidade de Problemas e Aproximação', prerequisites: ['paa'], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 7, name: '7º Período', courses: [
      { id: 'gerenciamento-aplicacoes', name: 'Gerenciamento e Aplicações de Bancos de Dados', prerequisites: ['osa', 'banco-dados'], status: COURSE_STATUS.UNDONE },
      { id: 'computacao-grafica', name: 'Computação Gráfica', prerequisites: ['algebra', 'aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'sistemas-distribuidos', name: 'Sistemas Distribuídos', prerequisites: ['sistemas-operacionais'], status: COURSE_STATUS.UNDONE },
      { id: 'redes', name: 'Redes de Computadores', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'lfa', name: 'Linguagens Formais e Automatos', prerequisites: ['discreta'], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 8, name: '8º Período', courses: [
      { id: 'ia', name: 'Introdução à Inteligência Artificial', prerequisites: ['aeds'], status: COURSE_STATUS.UNDONE },
      { id: 'etica', name: 'Informatica Ética e Sociedade', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'compiladores', name: 'Compiladores', prerequisites: ['aeds', 'arquitetura-2', 'lfa'], status: COURSE_STATUS.UNDONE },
      { id: 'optativa-1', name: 'Optativa I', prerequisites: [], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 9, name: '9º Período', courses: [
      { id: 'projeto-estagio', name: 'Projeto ou Estágio de Conclusão de Curso', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'optativa-2', name: 'Optativa II', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'uce-3', name: 'UCE III', prerequisites: [], status: COURSE_STATUS.UNDONE },
    ]
  },

  {
    id: 10, name: '10º Período', courses: [
      { id: 'administracao', name: 'Administração', prerequisites: [], status: COURSE_STATUS.UNDONE },
      { id: 'optativa-3', name: 'Optativa III', prerequisites: [], status: COURSE_STATUS.UNDONE },
    ]
  },
]
