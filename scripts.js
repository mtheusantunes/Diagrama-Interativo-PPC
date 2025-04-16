function encontraDisciplinasSeguintes() {
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
        'projetoEstagioConclusaoCurso', 'optativaII', 'UCEIII'
    ];

    const disciplinas = disciplinasIDs.map(pos => document.getElementById(pos));
    const disciplinasLigadas = [
        { requisitos: [0], libera: 4 },
        { requisitos: [1], libera: 5 },
        { requisitos: [2], libera: 6 },
        { requisitos: [3], libera: 7 },
        { requisitos: [4], libera: 10 },
        { requisitos: [5], libera: 17 },
        { requisitos: [6], libera: 31 },
        { requisitos: [8], libera: 13 },
        { requisitos: [9], libera: 14 },
        { requisitos: [9, 15], libera: 25 },
        { requisitos: [9, 25], libera: 29 },
        { requisitos: [10], libera: 15 },
        { requisitos: [10], libera: 26 },
        { requisitos: [10], libera: 36 }

    ];

    const semRequisitos = [8, 9];

    disciplinas.forEach((disciplina, i) => {

        disciplina.addEventListener('click', () => {

            disciplina.classList.toggle('selecionada');
            disciplina.classList.remove('liberada');

            disciplinasLigadas.forEach(({ requisitos, libera }) => {

                const todasSelecionadas = requisitos.every(index => disciplinas[index].classList.contains('selecionada'));
                const aindaNaoSelecionada = !disciplinas[libera].classList.contains('selecionada');

                if (todasSelecionadas && aindaNaoSelecionada) {
                    disciplinas[libera].classList.add('liberada');
                } else if (!todasSelecionadas) {
                    disciplinas[libera].classList.remove('liberada');
                }
            });

            semRequisitos.forEach(discSemRequisito => {
                if (!disciplinas[discSemRequisito].classList.contains('selecionada')) {
                    disciplinas[discSemRequisito].classList.add('liberada');
                }
            });
        });
    });
}

window.onload = encontraDisciplinasSeguintes;