const disciplinasIDs = [
    'icc', 'calculoI', 'gaal', 'inglesI',
    'algProgramacao', 'calculoVV', 'algLinearComputacional',
    'inglesII', 'sistemasDigitais', 'matDiscreta', 'aeds', 'fisicaModerna',
    'metodologiaCient', 'arquiteturaI', 'introducaoTeoriaGrafos',
    'tecnicasBuscaOrdenacao', 'uceI', 'probEstatistica', 'arquiteturaII',
    'poo', 'organizacaoSistemasArquivos', 'pesquisaOperacional',
    'engenhariaSoftware', 'sistemasOperacionais', 'desenvolvimentoWeb',
    'projetoAnaliseAlg', 'bancoDados', 'uceII', 'paradigmasProgramacao',
    'algoritmosGrafos', 'gerenciamentoAplicacoesBD', 'computacaoGrafica',
    'sistemasDistribuidos', 'redesComputadores', 'linguagensFormaisAutomatos',
    'complexidadeProblemasAproximacao', 'introducaoIA', 'gerenciaProjetos',
    'compiladores', 'optativaI', 'informaticaEticaSociedade', 'empreendedorismo',
    'projetoEstagioConclusaoCurso', 'optativaII', 'uceIII', 'administracao'
];

const disciplinas = disciplinasIDs.map(pos => document.getElementById(pos));

const regras = [
    { requisitos: [0], libera: 4 },
    { requisitos: [1], libera: 5 },
    { requisitos: [1], libera: 11 },
    { requisitos: [2], libera: 6 },
    { requisitos: [2, 4], libera: 21 },
    { requisitos: [3], libera: 7 },
    { requisitos: [4], libera: 10 },
    { requisitos: [5], libera: 17 },
    { requisitos: [6], libera: 31 },
    { requisitos: [8], libera: 13 },
    { requisitos: [9], libera: 14 },
    { requisitos: [9, 15], libera: 25 },
    { requisitos: [9], libera: 34 },
    { requisitos: [10], libera: 15 },
    { requisitos: [10], libera: 26 },
    { requisitos: [10], libera: 36 },
    { requisitos: [6, 10], libera: 31 },
    { requisitos: [10, 18, 34], libera: 38 },
    { requisitos: [10], libera: 19 },
    { requisitos: [10], libera: 20 },
    { requisitos: [10], libera: 28 },
    { requisitos: [13], libera: 18 },
    { requisitos: [13], libera: 23 },
    { requisitos: [14, 25], libera: 29 },
    { requisitos: [15], libera: 25 },
    { requisitos: [19], libera: 22 },
    { requisitos: [19], libera: 24 },
    { requisitos: [20, 26], libera: 30 },
    { requisitos: [23], libera: 32 },
    { requisitos: [25], libera: 35 }
];

const semRequisitos = [8, 9, 12, 16, 27, 33, 37, 39, 40, 41, 42, 43, 44, 45];

function estaSelecionada(disciplina) {
    return disciplina.classList.contains('selecionada');
}

function encontraDisciplinasSeguintes() {


    disciplinas.forEach((disciplina, i) => {

        disciplina.addEventListener('click', () => {

            disciplina.classList.toggle('selecionada');
            disciplina.classList.remove('liberada');

            regras.forEach(({ requisitos, libera }) => {

                const todasSelecionadas = requisitos.every(index => estaSelecionada(disciplinas[index]));
                const aindaNaoSelecionada = !estaSelecionada(disciplinas[libera]);

                disciplinas[libera].classList.toggle('liberada', todasSelecionadas && aindaNaoSelecionada);
                if (!todasSelecionadas) {
                    disciplinas[libera].classList.remove('liberada');
                }
            });

            semRequisitos.forEach(index => {
                if (!estaSelecionada(disciplinas[index])) {
                    disciplinas[index].classList.add('liberada');
                }
            });
        });
    });
}

function encontraDisciplinasAnteriores() {
    disciplinas.forEach((disciplina, i) => {

        let todasNaoSelecionadas = [];
        disciplina.addEventListener('mouseenter', () => {
            if (estaSelecionada(disciplina)) return;

            const disciplinaLigada = regras.find(({ libera }) => libera == i);
            if (!disciplinaLigada) return;

            const { requisitos } = disciplinaLigada;

            todasNaoSelecionadas = requisitos.filter(index => !estaSelecionada(disciplinas[index]));

            if (!estaSelecionada(disciplinas[i])) {
                todasNaoSelecionadas.forEach((index) => {
                    disciplinas[index].classList.toggle('faltando');
                });
            }
        });
        disciplina.addEventListener('mouseleave', () => {
            todasNaoSelecionadas.forEach((index) => {
                disciplinas[index].classList.remove('faltando');
            });
        });
    });
}

window.onload = () => {
    encontraDisciplinasSeguintes();
    encontraDisciplinasAnteriores();
} 