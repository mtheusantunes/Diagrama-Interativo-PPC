const disciplinasIDs = [
    'icc', 'calculoI', 'gaal', 'empreendedorismo',
    'algProgramacao', 'calculoVV', 'algLinearComputacional', 'sistemasDigitais', 'matDiscreta',
    'aeds', 'gerenciaProjetos', 'metodologiaCient', 'arquiteturaI', 'introducaoTeoriaGrafos',
    'tecnicasBuscaOrdenacao', 'uceI', 'probEstatistica', 'arquiteturaII', 'poo',
    'organizacaoSistemasArquivos', 'pesquisaOperacional', 'engenhariaSoftware', 'sistemasOperacionais', 'desenvolvimentoWeb', 'projetoAnaliseAlg',
    'bancoDados', 'uceII', 'paradigmasProgramacao', 'algoritmosGrafos', 'complexidadeProblemasAproximacao',
    'gerenciamentoAplicacoesBD', 'computacaoGrafica', 'sistemasDistribuidos', 'redesComputadores', 'linguagensFormaisAutomatos',
    'introducaoIA', 'informaticaEticaSociedade', 'compiladores', 'optativaI',
    'projetoEstagioConclusaoCurso', 'optativaII', 'uceIII',
    'administracao', 'optativaIII',
];

const disciplinas = disciplinasIDs.map(pos => document.getElementById(pos));

const regras = [
    { requisitos: [0], libera: 4 },
    { requisitos: [1], libera: 5 },
    { requisitos: [2], libera: 6 },
    { requisitos: [4], libera: 9 },
    { requisitos: [4], libera: 20 },
    { requisitos: [5], libera: 16 },
    { requisitos: [6, 9], libera: 31 },
    { requisitos: [7], libera: 12 },
    { requisitos: [8], libera: 13 },
    { requisitos: [8, 14], libera: 24 },
    { requisitos: [9], libera: 14 },
    { requisitos: [9], libera: 25 },
    { requisitos: [9], libera: 35 },
    { requisitos: [9, 17, 34], libera: 37 },
    { requisitos: [9], libera: 18 },
    { requisitos: [9], libera: 19 },
    { requisitos: [12], libera: 17 },
    { requisitos: [13, 24], libera: 28 },
    { requisitos: [18], libera: 21 },
    { requisitos: [18], libera: 23 },
    { requisitos: [19, 25], libera: 30 },
    { requisitos: [21, 23], libera: 26 },
    { requisitos: [22], libera: 32 },
    { requisitos: [24], libera: 29 },
];

const semRequisitos = [0, 1, 2, 3, 7, 8, 10, 11, 15, 33, 36, 38, 39, 40, 41, 42, 43];

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
                    disciplinas[index].classList.add('faltando');
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