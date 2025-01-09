// Desafio Classificador de nível de Herói

// Declarando o nome do herói
const nomeHeroi = "Sauro";
console.log("Bem-vindo ao desafio " + nomeHeroi);

// Declarando a quantidade de pontos inicial do herói
let PontosInicial = 1000;

// Laço de repetição de 0 a 5 para incrementar os pontos
for (let i = 0; i <= 25; i++) {
    PontosInicial++;  // Incrementando os pontos
}

let pontosFinal = PontosInicial * 7;  // Multiplicando os pontos por 4
console.log(nomeHeroi + " tem " + PontosInicial + " pontos e conseguiu ganhar " + pontosFinal + "pontos");

// Determinando o nível de herói com base nos pontos finais
let nivelHeroi;

if (pontosFinal <= 1000) {
    nivelHeroi = "Ferro";
} else if (pontosFinal > 1000 && pontosFinal <= 2000) {
    nivelHeroi = "Bronze";
} else if (pontosFinal > 2000 && pontosFinal <= 5000) {
    nivelHeroi = "Prata";   
} else if (pontosFinal > 5000 && pontosFinal <= 7000) {
    nivelHeroi = "Ouro"; 
} else if (pontosFinal > 7000 && pontosFinal <= 8000) {
    nivelHeroi = "Platina"; 
} else if (pontosFinal > 8000 && pontosFinal <= 9000) {
    nivelHeroi = "Ascendente";   
} else if (pontosFinal > 9000 && pontosFinal <= 10000) {
    nivelHeroi = "Imortal"; 
} else {
    nivelHeroi = "Radiante";
}

// Exibindo o nível do herói
console.log(nomeHeroi + " atingiu o nível: " + nivelHeroi);











  

