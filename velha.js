const audioWrite = new Audio('assets/audio/pencil.mp3');
const audioVictory = new Audio('assets/audio/victory.mp3');

const quadrados = document.querySelectorAll('.quadrado');

let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(quadrado) {
    if (vencedor !== null) return;

    if (quadrado.innerHTML !== '-') return;

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    setTimeout(() => audioWrite.play(), 10);

    jogador = (jogador === 'X') ? 'O' : 'X';
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = `Jogador: ${jogador}`;
}

function checaVencedor(){
    const [q1,q2,q3,q4,q5,q6,q7,q8,q9] = quadrados;
    checaSequencia(q1, q2, q3);
    checaSequencia(q4, q5, q6);
    checaSequencia(q7, q8, q9);
    checaSequencia(q1, q4, q7);
    checaSequencia(q2, q5, q8);
    checaSequencia(q3, q6, q9);
    checaSequencia(q1, q5, q9);
    checaSequencia(q3, q5, q7);
}

function checaSequencia(...quadrados) {
    const [q1, q2, q3] = quadrados;
    if (q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
        mudaCorQuadrado(...quadrados);
        mudarVencedor(q1);
        setTimeout(() => audioVictory.play(), 250);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = `Vencedor: ${vencedor}`
    jogadorSelecionado.innerHTML = null;
}

function mudaCorQuadrado(...quadrados) {
    quadrados.forEach((quadrado) => quadrado.style.background = '#5CD197');
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    quadrados.forEach ((quadrado) => {
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    });

    mudarJogador('X');
}