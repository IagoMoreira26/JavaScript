let numeros = [];
let i = 0;
let lerPares = 0;
let lerImpares = 0;

while (i <= 100) {
  numeros.push(i);
  i++;
}

let lerVetor = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      lerPares++;
    } else {
      lerImpares++;
    }
  }

  console.log(
    `Existem ${lerPares} números pares e ${lerImpares} números ímpares`
  );
};

lerVetor(numeros);

/* ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares */
