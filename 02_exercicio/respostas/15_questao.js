let arrayExemplo = [];
let i = 0;

while (i <= 100) {
  arrayExemplo.push(i);
  i++;
}

let receberSomenteParesDeIndicesPares = (lista) => {
  let resultado = [];

  for (let i = 0; i < lista.length; i++) {
    if (i % 2 === 0 && lista[i] % 2 === 0) {
      resultado.push(lista[i]);
    }
  }

  return resultado;
};

console.log(receberSomenteParesDeIndicesPares(arrayExemplo));

/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares */
