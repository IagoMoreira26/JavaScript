let juroSimples = (capitalInicial, taxaDeJuros, tempo) => {
  let montante = capitalInicial + capitalInicial * taxaDeJuros * tempo;
  return montante;
};

let juroComposto = (capitalInicial, taxaDeJuros, tempo) => {
  let montante = capitalInicial * (1 + taxaDeJuros) ** tempo;
  return montante.toFixed(2);
};

console.log(juroSimples(1000, 0.05, 3));
console.log(juroComposto(1000, 0.05, 3));

/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos */
