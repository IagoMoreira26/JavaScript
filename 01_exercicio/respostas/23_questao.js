let calcularMedia = (cod, nota1, nota2, nota3) => {
  const notas = [nota1, nota2, nota3];
  notas.sort((a, b) => b - a);

  const mP = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
  const status = mP >= 5 ? "APROVADO" : "REPROVADO";

  console.log(`O aluno de código ${cod}, possui as seguintes notas:\n`);
  console.log(
    `${notas[0]} de peso 4\n${notas[1]} de peso 3\n${notas[2]} de peso 3\n`
  );
  console.log(`Média Ponderada: ${mP}`);
  console.log(`O aluno está ${status}`);
};

calcularMedia(200, 10, 7, 5);

/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo */
