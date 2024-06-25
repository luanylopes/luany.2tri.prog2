const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Quem é o Visconde Bridgerton?",
        alternativas: [
            {
                texto: "Anthony",
                afirmacao: "."
            },
            {
                texto: "Benedict",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Quem é a melhor amiga de Eloíse Bridgerton?",
        alternativas: [
            {
                texto: "Penélope F",
                afirmacao: "."
            },
            {
                texto: "Marina Tompsom",
                afirmacao: "."
            }
            
        ]
    },
    {
        enunciado: "Quem foi a Diamante da primeira temporada?",
        alternativas: [
            {
                texto: "Cressida Cowper",
                afirmacao: "."
            },
            {
                texto: "Daphne Bridgerton",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "A série Bridgerton na Netflix é baeada em uma coleção de livros de que escritora?",
        alternativas: [
            {
                texto: "Cassandra Clare",
                afirmacao: "."
            },
            {
                texto: "Julia Quinn",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Qual cor do taco é conhecida como taco da morte?",
        alternativas: [
            {
                texto: "Preto",
                afirmacao: "."
            },
            {
                texto: "Vermelho",
                afirmacao: ". "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
