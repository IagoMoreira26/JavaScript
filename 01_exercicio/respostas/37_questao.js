let PA = (n, a1, r) => {
  let termos = [];
  let soma = 0;
  for (let i = 0; i < n; i++) {
    let termo = a1 + i * r;
    termos.push(termo);
    soma += termo;
  }
  return { termos, soma };
};

let PG = (n, a1, r) => {
  let termos = [];
  let soma = 0;
  for (let i = 0; i < n; i++) {
    let termo = a1 * Math.pow(r, i);
    termos.push(termo);
    soma += termo;
  }
  return { termos, soma };
};

let nPA = 5;
let a1PA = 2;
let rPA = 3;
let resultadoPA = PA(nPA, a1PA, rPA);
console.log("Termos da PA:", resultadoPA.termos);
console.log("Soma dos termos da PA:", resultadoPA.soma);

let nPG = 4;
let a1PG = 3;
let rPG = 2;
let resultadoPG = PG(nPG, a1PG, rPG);
console.log("Termos da PG:", resultadoPG.termos);
console.log("Soma dos termos da PG:", resultadoPG.soma);

/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos */
