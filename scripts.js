function encontraDisciplinasSeguintes() {
    var disciplinasIDs = [
        'icc', 'calculoI', 'gaal', 'inglesI',
        'algProgramacao', 'calculoVV', 'algLinearComputacional',
        'inglesII', 'sistemasDigitais', 'matDiscreta', 'aeds', 'arquiteturaII'
    ];

    var disciplinas = disciplinasIDs.map(pos => document.getElementById(pos));

    for (let pos = 0; pos < disciplinas.length; pos++) {
        disciplinas[pos].addEventListener('click', () => {

            disciplinas[pos].classList.toggle('selecionada');
            if (disciplinas[pos].classList.contains('liberada')) {
                disciplinas[pos].classList.toggle('liberada');
            }
            libera(disciplinas, [0], 4);
            libera(disciplinas, [1], 5);
            libera(disciplinas, [2], 6);
            libera(disciplinas, [3], 7);
            libera(disciplinas, [4, 8], 10);
        });
    }
}

function libera(disciplinas, requisito, liberada) {
    for (let countReq = 0; countReq < requisito.length; countReq++) {
        if (disciplinas[requisito[countReq]].classList.contains('selecionada')) {
            if (!(disciplinas[liberada].classList.contains('liberada')) &&
                !(disciplinas[liberada].classList.contains('selecionada'))) {
                disciplinas[liberada].classList.toggle('liberada');
            }
        } else if (!(disciplinas[requisito[countReq]].classList.contains('selecionada'))) {
            disciplinas[liberada].classList.toggle('liberada', false);
            break;
        }
    }
}

window.onload = encontraDisciplinasSeguintes;
document.getElementById('sistemasDigitais').classList.toggle('liberada');
document.getElementById('matDiscreta').classList.toggle('liberada');