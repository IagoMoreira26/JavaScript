const vetor = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let contador = 0;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] < 0) {
    contador++;
  }
}

console.log(`Existem ${contador} números negativos neste vetor.`);

/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console */
