let filtrarPorQuantidadeDeDigitos = (lista, valor) => {
  return lista.filter((numero) => numero.toString().length === valor);
};

let arrayExemplo = [];
let i = 0;

while (i <= 100) {
  arrayExemplo.push(i);
  i++;
}

console.log(filtrarPorQuantidadeDeDigitos(arrayExemplo, 2));

/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que específica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro */
