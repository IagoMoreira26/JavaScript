let vetor = [45, 12, 78, 34, 23, 89, 9, 100, 3];
let maior = vetor[0];
let menor = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }

  if (vetor[i] < menor) {
    menor = vetor[i];
  }
}

console.log(`O maior valor no vetor é: ${maior}`);
console.log(`O menor valor no vetor é: ${menor}`);

/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */
