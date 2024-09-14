let calcularAnuidade = (mes, valorAnuidade) => {
  if (mes < 1 || mes > 12) {
    return "Mês inválido";
  }

  const meses = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const juros = 0.05;
  const mesesAtraso = mes - 1;
  const valorFinal = valorAnuidade * Math.pow(1 + juros, mesesAtraso);

  console.log(
    `Você está pagando no mês ${
      meses[mes - 1]
    }, valor total: R$ ${valorFinal.toFixed(2)}`
  );
};

calcularAnuidade(1, 1000);
calcularAnuidade(2, 1000);

/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido */
