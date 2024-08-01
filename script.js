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
                texto: "Anthony Bridgerton",
                afirmacao: "1-CORRETA"
            },
            {
                texto: "Benedict Bridgerton",
                afirmacao: "1-ERRADA"
            }
        ]
    },
    {
        enunciado: "Quem é a melhor amiga de Eloíse Bridgerton?",
        alternativas: [
            {
                texto: "Penélope Featherington",
                afirmacao: "2-CORRETA"
            },
            {
                texto: "Marina Tompsom",
                afirmacao: "2-ERRADA"
            }
            
        ]
    },
    {
        enunciado: "Quem foi a Diamante da primeira temporada?",
        alternativas: [
            {
                texto: "Cressida Cowper",
                afirmacao: "3-ERRADA"
            },
            {
                texto: "Daphne Bridgerton",
                afirmacao: "3-CORRETA"
            }
        ]
    },
    {
        enunciado: "A série Bridgerton na Netflix é baeada em uma coleção de livros de que escritora?",
        alternativas: [
            {
                texto: "Cassandra Clare",
                afirmacao: "4-ERRADA"
            },
            {
                texto: "Julia Quinn",
                afirmacao: "4-CORRETA"
            }
        ]
    },
    {
        enunciado: "Qual cor do taco é conhecida como taco da morte?",
        alternativas: [
            {
                texto: "Preto",
                afirmacao: "5-CORRETA"
            },
            {
                texto: "Vermelho",
                afirmacao: "5-ERRADA"
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
    caixaPerguntas.textContent = "Você realmente é um fã?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
