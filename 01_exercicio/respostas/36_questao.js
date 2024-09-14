let vetor = [1, 2, 3, 4, 5];

function vetorMultiplicado(vetor, numero) {
  let novoVetor = [];
  for (i = 0; i < vetor.length; i++) {
    novoVetor.push(vetor[i] * numero);
  }
  return novoVetor;
}

function vetorMultiplicado2(vetor, numero) {
  let novoVetor = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 5) {
      novoVetor.push(vetor[i] * numero);
    } else {
      novoVetor.push(vetor[i]);
    }
  }
  return novoVetor;
}

let vetorOriginal = [1, 2, 3, 4, 5, 6, 7];
let numero = 2;
let resultado1 = vetorMultiplicado(vetorOriginal, numero);
let resultado2 = vetorMultiplicado2(vetorOriginal, numero);
console.log(resultado1);
console.log(resultado2);

/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5 */
