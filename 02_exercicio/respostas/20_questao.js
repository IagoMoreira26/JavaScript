let calcularMedia = (base, altura) => {
  let area = (base * altura) / 2;
  return Math.round(area).toFixed(2);
};

console.log(calcularMedia(7, 9));

/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário */
