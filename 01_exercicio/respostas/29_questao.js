let listaNumeros = [];
let contador = 0;

let contadorIntervalo = (numeros) => {
  let i = 0;

  while (i <= numeros) {
    listaNumeros.push(i);
    i++;
  }

  for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] >= 10 && listaNumeros[i] <= 20) {
      contador++;
    }
  }

  let contador2 = listaNumeros.length - contador;

  console.log(
    `Existem ${contador} números no intervalo de 10 a 20 nesta lista de números e ${contador2} números fora do intervalo.`
  );
};

contadorIntervalo(15);

/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações */
