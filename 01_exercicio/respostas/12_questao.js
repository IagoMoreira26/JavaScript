let fatorial = (n) => {
  if (n < 0) {
    return "Fatorial para números negativos é inválido";
  } else if (n === 0 || n === 1) {
    return 1;
  }

  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
};

console.log(fatorial(5));

/*  Faça um algoritmo que calcule o fatorial de um número */
