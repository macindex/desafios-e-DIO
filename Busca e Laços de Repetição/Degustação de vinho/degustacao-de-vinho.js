let wineNumber = gets();
let wineTesters = gets().split(' ');
let correctAnswers = 0;

let correctAnswersList = wineTesters.filter(correctAnswers => correctAnswers.includes(wineNumber));
correctAnswers = correctAnswersList.length;

console.log(correctAnswers);

// Local testes

let num = parseInt('13');
let numTeste = '11 7'.split(" ");
let correctAnswers = 0;

//

// let numeroVinho = gets();
// let vinho = gets().split(' ');
// let respostas = 0;

// let listaRespostaCorreta = vinho.filter(respostas => respostas.includes(numeroVinho));
// respostas = listaRespostaCorreta.length;

// console.log(respostas);

