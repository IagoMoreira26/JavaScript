let nomeDoMes = (valor) => {
  let i = valor - 1;
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (valor < 1 || valor > 12) {
    return "Número inválido, digite um número de mês válido!";
  } else {
    return meses[i];
  }
};

console.log(nomeDoMes(7));

/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês */
