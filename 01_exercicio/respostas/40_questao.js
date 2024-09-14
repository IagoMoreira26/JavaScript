let atribuirNotas = (notas) => {
  let vetorDeConceitos = [];

  for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    let conceito;

    if (nota >= 0 && nota <= 4.9) {
      conceito = "D";
    } else if (nota >= 5 && nota <= 6.9) {
      conceito = "C";
    } else if (nota >= 7 && nota <= 8.9) {
      conceito = "B";
    } else if (nota >= 8.9 && nota <= 10) {
      conceito = "A";
    } else {
      conceito = "Nota inválida";
    }

    vetorDeConceitos.push(conceito);
  }

  return vetorDeConceitos;
};

let notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.0];
let vetorDeConceitos = atribuirNotas(notas);

for (let i = 0; i < notas.length; i++) {
  console.log(`Nota: ${notas[i]} - Conceito: ${vetorDeConceitos[i]}`);
}

/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A */
