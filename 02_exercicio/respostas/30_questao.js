let receberMelhorEstudante = (objeto) => {
  let melhorEstudante = { nome: "", media: 0 };

  for (let estudante of objeto.estudantes) {
    let contador = 0;

    for (let nota of estudante.notas) {
      contador += nota;
    }

    let media = contador / estudante.notas.length;

    if (media > melhorEstudante.media) {
      melhorEstudante.nome = estudante.nome;
      melhorEstudante.media = media.toFixed(1);
    }
  }

  return melhorEstudante;
};

let alunos = {
  estudantes: [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bia", notas: [10, 9, 10] },
    { nome: "Carlos", notas: [6, 7, 8] },
  ],
};

console.log(receberMelhorEstudante(alunos));

/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas */
